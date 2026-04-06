import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AddJob from "./components/AddJob";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import "./index.css";

const initialJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    applied: false,
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    applied: false,
  },
];

function App() {
  // Try loading from local storage, fallback to initialJobs
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobPortal_jobs");
    return savedJobs ? JSON.parse(savedJobs) : initialJobs;
  });

  const [searchFilters, setSearchFilters] = useState({ title: "", location: "" });

  // Save jobs to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("jobPortal_jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleAddJob = (newJob) => {
    setJobs([newJob, ...jobs]);
  };

  const handleApply = (id) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, applied: true } : job
    ));
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleSearch = (title, location) => {
    setSearchFilters({ title: title.toLowerCase(), location: location.toLowerCase() });
  };

  const handleResetSearch = () => {
    setSearchFilters({ title: "", location: "" });
  };

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    if (!searchFilters.title && !searchFilters.location) return true;
    
    const matchesTitle = job.title.toLowerCase().includes(searchFilters.title);
    const matchesLocation = job.location.toLowerCase().includes(searchFilters.location);
    
    // Vanilla application used an "AND" fallback if both were present
    return matchesTitle && matchesLocation;
  });

  return (
    <div className="app-wrapper">
      <Header />
      
      <main>
        <Hero onSearch={handleSearch} onReset={handleResetSearch} />
        
        <div className="main-container">
          <AddJob onAddJob={handleAddJob} />
          
          <JobList 
            jobs={filteredJobs} 
            onApply={handleApply} 
            onDelete={handleDelete} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
