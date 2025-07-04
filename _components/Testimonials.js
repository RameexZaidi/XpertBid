// components/Testimonials.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I listed a building in Lahore and had serious offers within days.",
      name: "Faraz M.",
      role: "Property Owner",
    },
    {
      quote: "It’s like having a 24/7 real estate agent—without the fees.",
      name: "Hina S.",
      role: "Landlord, Abu Dhabi",
    },
    {
      quote: "Using it to move slow-moving stock too. Same account, same process.",
      name: "Bilal R.",
      role: "Wholesaler",
    },
  ];

  return (
    <section className="testimonials-section py-5" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <h2
          className="text-center fw-bold mb-4"
          style={{ fontSize: "2.5rem", color: "#2C3E50", letterSpacing: "0.5px" }}
        >
          What Sellers Are Saying
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="testimonial-card mx-auto p-5 shadow rounded-4"
                style={{
                  maxWidth: "750px",
                  backgroundColor: "#fdfdfd",
                  transition: "transform 0.3s ease",
                  borderLeft: "6px solid #43ACE9",
                }}
              >
                <p
                  className="mb-4"
                  style={{
                    fontSize: "1.25rem",
                    color: "#444",
                    fontStyle: "italic",
                    lineHeight: "1.8",
                  }}
                >
                  <i className="fas fa-quote-left me-2" style={{ color: "#43ACE9" }}></i>
                  {item.quote}
                  <i className="fas fa-quote-right ms-2" style={{ color: "#43ACE9" }}></i>
                </p>
                <h5 className="fw-bold mb-1" style={{ color: "#2C3E50" }}>{item.name}</h5>
                <p className="text-muted mb-0">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
