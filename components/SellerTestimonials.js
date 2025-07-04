// components/SellerTestimonials.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: "Faraz M.",
    title: "Property Owner",
    text: "I listed a building in Lahore and had serious offers within days.",
    image: null,
  },
  {
    name: "Hina S.",
    title: "Landlord, Abu Dhabi",
    text: "It’s like having a 24/7 real estate agent—without the fees.",
    image: null,
  },
  {
    name: "Bilal R.",
    title: "Wholesaler",
    text: "Using it to move slow-moving stock too. Same account, same process.",
    image: null,
  },
];

export default function SellerTestimonials() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#C5E3F5",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "auto",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">What Sellers Are Saying</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((item, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <div className="d-flex flex-column align-items-center text-center px-3 px-md-5">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle mb-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center rounded-circle mb-3 bg-white text-primary border"
                      style={{ width: "80px", height: "80px", fontSize: "32px" }}
                    >
                      <i className="fas fa-user"></i>
                    </div>
                  )}
                  <p className="fs-5 fst-italic text-muted mb-2">“{item.text}”</p>
                  <p className="fw-semibold mb-0 text-dark">{item.name}</p>
                  <p className="text-secondary">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
