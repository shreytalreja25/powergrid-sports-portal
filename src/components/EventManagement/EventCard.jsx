export function EventCard({ event, featured = false }) {
    return (
      <div className={`card shadow-sm ${featured ? "featured" : ""}`}>
        <div className="card-header">
          <h5 className="card-title">{event.name}</h5>
          <span className="badge bg-secondary">{event.category}</span>
        </div>
        <div className="card-body">
          <p>
            <strong>Date:</strong> {event.date} <br />
            <strong>Time:</strong> {event.time} <br />
            <strong>Location:</strong> {event.location}
          </p>
          <p>{event.description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-dark w-100">Register</button>
        </div>
      </div>
    );
  }
  