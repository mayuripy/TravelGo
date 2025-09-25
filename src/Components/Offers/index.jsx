import React, { useState, useRef, useEffect } from "react";
import earlyBirdImg from "../../assets/early-bird.png";
import weekendImg from "../../assets/weekend.png";
import navratriImg from "../../assets/navratri.png";
import dussehra from "../../assets/dussehra.png";
import Senior from "../../assets/senior.png";
import Festive from "../../assets/festive.png";



export default function Offers() {
  const offers = [
    { title: "Early Bird", desc: "Book 7 days in advance & save 15%", img: earlyBirdImg },
    { title: "Weekend Special", desc: "Flat ₹200 off on round trips", img: weekendImg },
    { title: "Navratri Special", desc: "Celebrate Navratri with 20% off on select routes", img: navratriImg },
    { title: "Dussehra Delight", desc: "Flat ₹250 off this Dussehra festival", img: dussehra },
    
    { title: "Senior Citizen", desc: "Flat ₹150 off for age 60+", img: Senior },
    { title: "Festive Offer", desc: "Get 20% cashback this festive season", img: Festive }
  ];

  
  const [selectedOffer, setSelectedOffer] = useState(null);

  
  const prevSelected = useRef(null);

  
  const handleClick = (idx) => {
    prevSelected.current = selectedOffer; 
    setSelectedOffer(idx);                 
  };

  useEffect(() => {
    console.log("Offers page loaded!");
  }, []);

  useEffect(() => {
    if (selectedOffer !== null) {
      console.log("Selected offer:", offers[selectedOffer].title);
      if (prevSelected.current !== null) {
        console.log("Previous selection:", offers[prevSelected.current].title);
      }
    }
  }, [selectedOffer]);
  return (
    <section className="py-1 bg-light">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="fw-bold ">Exclusive Offers for You</h2>
          <p className="text-muted">Grab the best deals on your bus journeys—seasonal, festival & special discounts!</p>
        </div>

        <div className="d-flex flex-row overflow-auto ">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`card me-3 flex-shrink-0 shadow-sm ${selectedOffer === idx ? "border border-primary" : ""}`}
              style={{ minWidth: "230px", borderRadius: "15px", cursor: "pointer" }}
              onClick={() => handleClick(idx)}
            >
              <img 
                src={offer.img} 
                alt={offer.title} 
                className="card-img-top" 
                style={{ height: "140px", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">{offer.desc}</p>
                <button className="btn btn-primary btn-sm">Grab Offer</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-center">
          <p>Selected Offer: {selectedOffer !== null ? offers[selectedOffer].title : "None"}</p>
          <p>Previous Selected Offer: {prevSelected.current !== null ? offers[prevSelected.current].title : "None"}</p>
        </div>
      </div>
    </section>
  );
}
