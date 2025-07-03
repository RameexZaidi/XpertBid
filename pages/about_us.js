import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VerticalAccordionItem = ({ title, content, isOpen, onClick, icon }) => (
  <div className={`vertical-book-item ${isOpen ? "open" : ""}`}>
    <div className="vertical-book-header" onClick={onClick}>
      <i className={`fa-solid ${icon} me-2 icon-rotate`}></i>
      {title}
      <span className="hover-hint ms-auto">↓ Click ↓</span>
    </div>
    <div className="vertical-book-content">{content}</div>
    <style jsx>{`
      .vertical-book-item {
        border: 2px solid #007bff;
        border-radius: 8px;
        background-color: #C7E6F8;
        margin-bottom: 1rem;
        overflow: hidden;
        transform-origin: bottom center;
        transition: transform 0.6s ease, box-shadow 0.6s ease, border-color 0.5s ease;
      }
      .vertical-book-header {
        padding: 1rem;
        background-color: #007bff;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .hover-hint {
        font-size: 0.8rem;
        color: #ddd;
        transition: color 0.4s ease;
      }
      .vertical-book-header:hover .hover-hint {
        color: #fff;
      }
      .icon-rotate {
        transition: transform 0.6s ease;
      }
      .vertical-book-item:hover .icon-rotate {
        transform: rotate(360deg);
      }
      .vertical-book-content {
        max-height: 0;
        padding: 0 1rem;
        overflow: hidden;
        transition: max-height 0.7s ease, padding 0.7s ease;
        background-color: #f9f9f9;
      }
      .vertical-book-item.open .vertical-book-content {
        max-height: 600px;
        padding: 1rem;
      }
      .vertical-book-item:hover {
        transform: rotateX(3deg);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        border-color: #0056b3;
      }
    `}</style>
  </div>
);

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="py-5 bg-light about-bg-image about-bg-image-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="h1 mb-4">
                About <span style={{ color: "#43ACE9" }}>Xpert</span>
                <span style={{ color: "#333" }}>Bid</span>
              </h2>
              <h4 className="mb-3" style={{ color: "#43ACE9" }}>
                Built for Real Estate. Designed for Speed.
              </h4>
              <p className="mb-3 text-secondary">
                XpertBid is an online auction platform created for landlords,
                developers, and businesses who want a simpler way to sell,
                lease, or buy property. From commercial plots and apartment
                buildings to vehicles and bulk stock, our goal is to make asset
                trading fast, transparent, and secure.
              </p>
              <ul className="text-secondary ps-3">
                <li>List properties, vehicles, or stock within minutes</li>
                <li>Define your own terms and reserve prices</li>
                <li>Receive real-time bids from verified buyers</li>
                <li>Close deals safely using escrow services</li>
              </ul>
            </div>
            <div className="col-md-6 text-md-end">
              <img
                src="/assets/images/about_main.png"
                alt="About XpertBid"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Explore More</h2>
          {[
            {
              title: "Who We Serve",
              icon: "fa-users",
              content: (
                <>
                  <p>We work with:</p>
                  <ul>
                    <li>Property owners looking to sell or lease directly</li>
                    <li>Real estate developers wanting broader reach</li>
                    <li>SMEs clearing vehicles or equipment</li>
                    <li>Investors seeking trusted opportunities</li>
                  </ul>
                </>
              )
            },
            {
              title: "What We Stand For",
              icon: "fa-handshake",
              content: (
                <>
                  <p>
                    <strong>Security:</strong> All transactions protected by
                    escrow.
                  </p>
                  <p>
                    <strong>Efficiency:</strong> Auctions close deals fast.
                  </p>
                  <p>
                    <strong>Access:</strong> Everyday sellers reach verified
                    buyers easily.
                  </p>
                </>
              )
            },
            {
              title: "Join Us",
              icon: "fa-right-to-bracket",
              content: (
                <p>
                  We’re building something practical and long-lasting. List with
                  us or explore opportunities, we’ll help you move forward.
                </p>
              )
            }
          ].map((item, i) => (
            <VerticalAccordionItem
              key={i}
              title={item.title}
              content={item.content}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Our Global Reach</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                flag: "https://flagcdn.com/w80/pk.png",
                name: "Pakistan"
              },
              {
                flag: "https://flagcdn.com/w80/ae.png",
                name: "United Arab Emirates"
              },
              {
                flag: "https://flagcdn.com/w80/sa.png",
                name: "Saudi Arabia"
              },
              {
                flag: "https://flagcdn.com/w80/cn.png",
                name: "China"
              },
              {
                flag: "https://flagcdn.com/w80/za.png",
                name: "Africa"
              }
            ].map((country, i) => (
              <div className="col-md-2 col-4" key={i}>
                <div className="p-3 border rounded shadow text-center bg-white">
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{ width: "60px", height: "40px" }}
                    className="mb-2 rounded"
                  />
                  <p className="mb-0">{country.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
