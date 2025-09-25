import React from "react";

export default function Cards() {
  const features = [
    { title: "Best Prices", desc: "Guaranteed lowest fares and exclusive discounts.", img: "/icons/price.svg" },
    { title: "24x7 Support", desc: "Real-time help through chat or call anytime.", img: "/icons/support.svg" },
    { title: "Secure Payments", desc: "Multiple payment options with top-notch security.", img: "/icons/secure.svg" },
  ];

  return (
    <section className="py-5 px-4 bg-light text-center">
      <h2 className="mb-2">Why TravelGo?</h2>
      <div className="row justify-content-center">
        {features.map((f, i) => (
          <div key={i} className="col-md-4 ">
            <div className="card border-1 shadow-lg h-100">
              <div className="card-body text-center">
                <img src={f.img} alt={f.title} className="mb-3" style={{ height: "70px" }} />
                <h5 className="card-title text-danger">{f.title}</h5>
                <p className="card-text">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

