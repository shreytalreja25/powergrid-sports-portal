import { EventCard } from "./EventCard";

export function EventGrid() {
  const events = [
    {
      id: 1,
      name: "Corporate Football Championship 2024",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "New Delhi Stadium",
      description: "Inter-regional football tournament with 8 participating teams.",
      category: "Corporate",
      featured: true,
    },
    {
      id: 2,
      name: "Regional Badminton Tournament",
      date: "April 5, 2024",
      time: "9:00 AM",
      location: "Mumbai Sports Complex",
      description: "Annual badminton tournament for all skill levels.",
      category: "Regional",
    },
    {
      id: 3,
      name: "Cricket League 2024",
      date: "May 1, 2024",
      time: "2:00 PM",
      location: "Kolkata Cricket Ground",
      description: "Twenty20 cricket league with teams from across the country.",
      category: "Open",
    },
  ];

  const featuredEvent = events.find((event) => event.featured);
  const regularEvents = events.filter((event) => !event.featured);

  return (
    <div>
      {featuredEvent && (
        <div className="mb-8">
          <h2 className="mb-4">Featured Event</h2>
          <EventCard event={featuredEvent} featured />
        </div>
      )}
      <div className="row">
        {regularEvents.map((event) => (
          <div key={event.id} className="col-md-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
