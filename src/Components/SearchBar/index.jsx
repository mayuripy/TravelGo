import { useState } from "react";
import React from "react";

export default function SearchBar() {

   const [from, setFrom] = useState("");
   const [to, setTo] =useState("");
   
   const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("From:", from, "To:", to);
        
   }
   
  return (
    <section className="bg- text-white py-5" style={{ minHeight: "90vh", backgroundImage: "url('https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1500&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-4 fw-bold mb-5 mt-5 ">Book Bus Tickets Across India</h1>
        {/* <p className="lead mb-4 display-6 ">Fast • Secure • Affordable</p> */}

        <form className="row g-2  mt-5 justify-content-center w-100" style={{ maxWidth: "800px" }} onSubmit={handleSubmit}>
          <div className="col-md-3 bg-c">
            <input type="text" className="form-control rounded-pill"
             placeholder="From City" 
             value={from}
             onChange={(e) =>setFrom(e.target.value)}
             required />
          </div>
          <div className="col-md-3 shadow-lg bg-">
            <input type="text" className="form-control rounded-pill"
             placeholder="To City"
             value={to}
             onChange={(e) =>setTo(e.target.value)} 
             required />
          </div>
          <div className="col-md-2 ">
            <input type="date" className="form-control rounded-pill" required />
          </div>
          <div className="col-md-2">
            <input type="number" className="form-control rounded-pill" min="1" defaultValue="1" required />
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-danger rounded-pill fw-bold">Search Buses</button>
          </div>
        </form>
      </div>
    </section>
  );
}

