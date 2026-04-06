export default function JobCard({ job, onApply, onDelete }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <div className="job-meta">
        <span>Company:</span> {job.company}
      </div>
      <div className="job-meta">
        <span>Location:</span> {job.location}
      </div>
      
      <div className="card-actions">
        <button 
          className="btn-apply" 
          onClick={() => onApply(job.id)}
          disabled={job.applied}
        >
          {job.applied ? "Applied" : "Apply Now"}
        </button>
        <button 
          className="btn-delete" 
          onClick={() => onDelete(job.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
