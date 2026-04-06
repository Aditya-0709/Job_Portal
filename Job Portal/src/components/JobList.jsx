import JobCard from "./JobCard";

export default function JobList({ jobs, onApply, onDelete }) {
  return (
    <section>
      <div className="jobs-header">
        <h2>Latest Jobs</h2>
        <span className="job-count-badge">Total Jobs: {jobs.length}</span>
      </div>

      {jobs.length === 0 ? (
        <div className="no-jobs">
          <p>No jobs found matching your criteria. Try adjusting your search or add a new job!</p>
        </div>
      ) : (
        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onApply={onApply} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </section>
  );
}
