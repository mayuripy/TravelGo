
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function Tickets() {
  const location = useLocation();

  
  const query = new URLSearchParams(location.search);
  const from = query.get("from") || "";
  const to = query.get("to") || "";
  const date = query.get("date") || "";
  const seats = query.get("seats") || 1;
  const maxPrice = query.get("maxPrice") || 2000;

  
  const tickets = [
    { id: 1, from: "Mumbai", to: "Pune", price: 500, date: "2025-09-27" },
    { id: 2, from: "Delhi", to: "Jaipur", price: 800, date: "2025-09-28" },
    { id: 3, from: "Goa", to: "Mumbai", price: 600, date: "2025-09-27" },
    { id: 4, from: "Pune", to: "Goa", price: 700, date: "2025-09-29" },
  ];

  
  const filteredTickets = useMemo(() => {
    return tickets.filter(
      (t) =>
        t.from.toLowerCase().includes(from.toLowerCase()) &&
        t.to.toLowerCase().includes(to.toLowerCase()) &&
        t.price <= maxPrice &&
        (date ? t.date === date : true)
    );
  }, [tickets, from, to, maxPrice, date]);

  return (
    <div className="container py-5">
      <h2>Available Tickets</h2>
      {filteredTickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul className="list-group">
          {filteredTickets.map((t) => (
            <li key={t.id} className="list-group-item d-flex justify-content-between">
              {t.from} → {t.to} | ₹{t.price} | Date: {t.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
