import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand text-danger fw-bold" href="/">TravelGo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/tickets">Bus Tickets</a></li>
            <li className="nav-item"><a className="nav-link" href="/offers">Offers</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            <li className="nav-item ms-2">
              <button className="btn btn-danger rounded-pill">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
