import { useState } from "react";

export default function AddJob({ onAddJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !company.trim() || !location.trim()) {
      alert("Fill all fields");
      return;
    }
    
    onAddJob({
      id: Date.now().toString(),
      title: title.trim(),
      company: company.trim(),
      location: location.trim(),
      applied: false,
    });
    
    // Reset form
    setTitle("");
    setCompany("");
    setLocation("");
  };

  return (
    <section className="add-job-card">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add">Add Job</button>
      </form>
    </section>
  );
}
