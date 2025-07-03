<<<<<<< HEAD
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VerticalAccordionItem = ({ title, content, isOpen, onClick, icon }) => {
  return (
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
          position: relative;
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
};

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
                <h2 className="h1 mb-4">About <span style={{ color: "#43ACE9" }}>Xpert</span>
                    <span style={{ color: "#333" }}>Bid</span></h2>
                <h4 className="mb-3" style={{ color: "#43ACE9" }}>
                  Built for Real Estate. Designed for Speed.
                </h4>
                <p className="mb-3 text-secondary">
                  <strong>
                    <span style={{ color: "#43ACE9" }}>Xpert</span>
                    <span style={{ color: "#333" }}>Bid</span>
                  </strong>{" "}
                  is an online auction platform created for landlords, developers, and businesses who want a simpler way to sell, lease, or buy property. From commercial plots and apartment buildings to vehicles and bulk stock, our goal is to make asset trading fast, transparent, and secure.
                </p>
                <p className="mb-3 text-secondary">
                  We started with a single idea: to help people move property and stock more efficiently — without endless delays, agent fees, or confusing paperwork. Today,{" "}
                  <strong>
                    <span style={{ color: "#43ACE9" }}>Xpert</span>
                    <span style={{ color: "#333" }}>Bid</span>
                  </strong>{" "}
                  connects sellers and buyers across Pakistan, the UAE, and other growing markets, giving them access to live bidding and escrow-secured transactions.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <img
                  src="assets/images/about_main.png"
                  alt="Team discussion"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
      </section>


                  {/* Mission, Vision, What We Do */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#C7E6F8",
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
        }}
      >
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Our Mission",
                desc: "To bring structure, speed, and trust to property and asset trading in regions where traditional systems fall short."
              },
              {
                title: "Our Vision",
                desc: "To become the leading digital auction platform across the Middle East, South Asia, and emerging markets."
              },
              {
                title: "What We Do",
                list: [
                  { icon: "fa-eye", text: "Transparent: market decides the price." },
                  { icon: "fa-arrows-spin", text: "Flexible: sell or lease." },
                  { icon: "fa-universal-access", text: "Accessible to everyone." }
                ]
              }
            ].map((item, i) => (
              <div key={i} className="col-md-4 d-flex">
                <div className="hover-card w-100 text-dark text-center position-relative rounded shadow overflow-hidden">
                  <div className="title-overlay d-flex flex-column justify-content-center align-items-center text-white fw-bold fs-4">
                    {item.title}
                    <small className="hover-hint mt-2">Hover to explore</small>
                  </div>
                  <div className="hover-content p-4">
                    {item.desc && <p className="desc">{item.desc}</p>}
                    {item.list && (
                      <ul className="list-unstyled text-start mt-3 desc">
                        {item.list.map((li, j) => (
                          <li
                            key={j}
                            className="mb-3 d-flex align-items-start hover-item"
                          >
                            <i
                              className={`fa-solid ${li.icon} me-3 mt-1 text-dark icon-rotate`}
                            ></i>
                            <span>{li.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .hover-card {
            height: 300px;
            background: white;
            border: 2px solid #007bff;
            cursor: pointer;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }
          .hover-card .title-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 123, 255, 0.7);
            backdrop-filter: blur(4px);
            z-index: 2;
            transition: transform 0.5s ease, opacity 0.5s ease;
          }
          .hover-hint {
            font-size: 0.8rem;
            font-weight: normal;
            opacity: 0.9;
          }
          .hover-card:hover .title-overlay {
            transform: translateY(-100%);
            opacity: 0;
          }
          .hover-card .hover-content {
            position: absolute;
            top: 0;
            padding-top: 3rem;
            opacity: 0;
            z-index: 1;
            transition: opacity 0.5s ease;
            height: 100%;
            overflow-y: auto;
          }
          .hover-card:hover .hover-content {
            opacity: 1;
            z-index: 3;
          }
          .desc {
            color: #333;
          }
          .hover-item .icon-rotate {
            transition: transform 0.5s ease;
          }
          .hover-item:hover .icon-rotate {
            transform: rotate(360deg);
          }
        `}</style>
      </section>



      {/* Our Story */}
    <section
  className="py-5"
  style={{
    backgroundColor: "#C7E6F8",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  }}
>
  <div className="container">
    <h2 className="fw-bold text-center mb-4">Our Story</h2>
    <p className="text-center text-secondary mb-5">
      <strong>
        <span style={{ color: "#43ACE9" }}>Xpert</span>
        <span style={{ color: "#333" }}>Bid</span>
      </strong>{" "}
      was founded to solve:
    </p>
    <div className="row text-center">
      {[
        { icon: "fa-box-open", text: "Slow-moving inventory" },
        { icon: "fa-user-check", text: "Verified deals were rare" },
        { icon: "fa-gears", text: "Manual & untrustworthy process" }
      ].map((item, i) => (
        <div className="col-12 col-md-4 mb-4" key={i}>
          <div className="animated-card p-4 shadow rounded-3 bg-white">
            <i className={`fa-solid ${item.icon} fa-2x mb-3 text-primary icon-hover`}></i>
            <p className="text-secondary">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <style jsx>{`
    .animated-card {
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .animated-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
    .icon-hover {
      transition: transform 0.5s ease;
    }
    .icon-hover:hover {
      transform: rotate(360deg);
    }
  `}</style>
</section>


      {/* Explore More Accordion */}
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
                  <p><strong>Security:</strong> All transactions protected by escrow.</p>
                  <p><strong>Efficiency:</strong> Auctions close deals fast.</p>
                  <p><strong>Access:</strong> Everyday sellers reach verified buyers easily.</p>
                </>
              )
            },
            {
              title: "Join Us",
              icon: "fa-right-to-bracket",
              content: (
                <p>We’re building something practical and long-lasting. List with us or explore opportunities, we’ll help you move forward.</p>
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
      
      <section
  className="py-5"
  style={{
    backgroundColor: "#C7E6F8",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  }}
>
  <div className="container">
    <h2 className="fw-bold text-center mb-5">Our Reach</h2>
    <div className="row justify-content-center g-4">
      {/* Currently Active */}
      <div className="col-md-10 d-flex justify-content-center">
        <div className="reach-card shadow rounded-4 p-4 position-relative text-center w-100">
          <div className="reach-overlay"></div>
          <div className="reach-content position-relative">
            <h4 className="fw-bold mb-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-globe text-primary me-2"></i>
              Currently Active
            </h4>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span className="country-badge">
                <img src="https://flagcdn.com/w20/pk.png" alt="Pakistan" className="me-2" />
                Pakistan
              </span>
              <span className="country-badge">
                <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="me-2" />
                United Arab Emirates
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Launching Soon */}
      <div className="col-md-10 d-flex justify-content-center mt-4">
        <div className="reach-card shadow rounded-4 p-4 position-relative text-center w-100">
          <div className="reach-overlay"></div>
          <div className="reach-content position-relative">
            <h4 className="fw-bold mb-4 d-flex align-items-center justify-content-center text-success">
              <i className="fa-solid fa-rocket me-2"></i>
              Launching Soon
            </h4>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span className="country-badge">
                <img src="https://flagcdn.com/w20/sa.png" alt="Saudi Arabia" className="me-2" />
                Saudi Arabia
              </span>
              <span className="country-badge">
                <img src="https://flagcdn.com/w20/cn.png" alt="China" className="me-2" />
                China
              </span>
              <span className="country-badge">
                <img src="https://flagcdn.com/w20/za.png" alt="Africa" className="me-2" />
                Africa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center mt-5 text-secondary fs-5 px-3">
      Whether you're listing a warehouse in Karachi or bidding on equipment in Dubai,&nbsp;
      <strong>
        <span style={{ color: "#43ACE9" }}>Xpert</span>
        <span style={{ color: "#333" }}>Bid</span>
      </strong>{" "}
      gives you a better way to trade.
    </p>
  </div>

  <style jsx>{`
    .reach-card {
      background: white;
      overflow: hidden;
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    .reach-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(67,172,233,0.1), rgba(0,123,255,0.05));
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: 1;
    }
    .reach-card:hover .reach-overlay {
      opacity: 1;
    }
    .reach-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 30px rgba(0,0,0,0.2);
    }
    .reach-content img {
      width: 24px;
      height: 16px;
      object-fit: cover;
      border-radius: 2px;
    }
    .country-badge {
      background-color: #e9f4fb;
      border: 1px solid #43ACE9;
      border-radius: 50px;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      transition: background-color 0.4s ease;
      cursor: pointer;
    }
    .country-badge:hover {
      background-color: #43ACE9;
      color: #fff;
    }
    .country-badge:hover img {
      filter: brightness(90%);
    }
  `}</style>
</section>
    
      <Footer />
    </>
  );
=======
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
    return (
        <>
            <Header />
            <section className="py-5 bg-light about-bg-image about-bg-image-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="h1 mb-4">About XpertBid</h2>
                            <p className="mb-3 text-secondary">
                                Buyers struggled with unverified deals in a manual and disorganized process. XpertBid was born to change that.
                                We are a digital auction platform built on transparency, speed, and trust. With XpertBid, you can:
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

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="main-heading-about">Who We Serve</h2>
                        <p className="text-secondary">XpertBid caters to a diverse audience:</p>
                    </div>
                    <div className="row g-4 text-center">
                        {[
                            { icon: "fa-user", title: "Property Owners", desc: "Sell or lease directly to buyers" },
                            { icon: "fa-building", title: "Real Estate Developers", desc: "Reach broader, trusted markets" },
                            { icon: "fa-truck", title: "SMEs & Retailers", desc: "Clear stock, vehicles, or surplus fast" },
                            { icon: "fa-users", title: "Investors & Buyers", desc: "Access verified, competitive deals" },
                        ].map((item, idx) => (
                            <div className="col-md-6 col-lg-3" key={idx}>
                                <div className="card border-0 shadow-sm p-4 h-100 about-box text-center">
                                    <i className={`fas ${item.icon} fa-2x mb-3 text-primary`}></i>
                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="text-secondary mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container text-center">
                    <h2 className="main-heading-about mb-4">Our Global Reach</h2>
                    <p className="text-secondary mb-5">
                        From bustling cities to emerging markets, XpertBid connects buyers and sellers across continents.
                    </p>
                    <div className="row g-4 justify-content-center">
                        {[
                            {
                                icon: "https://flagcdn.com/w80/pk.png",
                                title: "Pakistan",
                                desc: "Our launchpad and growing stronghold for real estate and business auctions."
                            },
                            {
                                icon: "https://flagcdn.com/w80/ae.png",
                                title: "United Arab Emirates",
                                desc: "Our headquarters and a vital hub for regional growth."
                            },
                            {
                                icon: "https://flagcdn.com/w80/sa.png",
                                title: "Saudi Arabia",
                                desc: "Launching soon: unlocking industrial and commercial assets."
                            },
                            {
                                icon: "https://flagcdn.com/w80/cn.png",
                                title: "China",
                                desc: "Expanding to connect buyers to trusted manufacturers."
                            },
                            {
                                icon: "https://flagcdn.com/w80/za.png",
                                title: "Africa",
                                desc: "Opening new trade opportunities in key African markets."
                            },
                        ].map((region, idx) => (
                            <div className="col-md-4 col-lg-3" key={idx}>
                                <div className="card border-0 shadow-sm p-4 about-box h-100 text-center">
                                    <div className="d-flex justify-content-center">
                                        <img src={region.icon} alt={region.title} className="mb-3" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                                    </div>
                                    <h5 className="fw-bold mb-2">{region.title}</h5>
                                    <p className="text-secondary mb-0">{region.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#23262F" }}>
                <div className="container text-white text-center">
                    <h2 className="main-heading-about-uniqe mb-4">What We Stand For</h2>
                    <div className="row g-4">
                        {[
                            { icon: "fas fa-shield-alt", title: "Security", desc: "All transactions are protected by escrow. Funds are released only when everything checks out." },
                            { icon: "fas fa-stopwatch", title: "Efficiency", desc: "Timed auctions and seamless listings help sellers close faster — no time wasted." },
                            { icon: "fas fa-universal-access", title: "Access", desc: "Anyone can list. Anyone can bid. We simplify trading for real people and businesses." },
                        ].map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card border-0 bg-dark text-white p-5 h-100 text-center">
                                    <i className={`${item.icon} fa-2x mb-3 text-primary`}></i>
                                    <h5 className="about-box-title mb-2">{item.title}</h5>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#f3f4f6" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="main-heading-about">Join the XpertBid Movement</h2>
                        <p className="text-secondary">
                            We’re building something practical and long-lasting — a platform that works for real people and real businesses.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <a href="/register" className="btn btn-dark w-100 py-3">Create an Account</a>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <a href="/contact" className="btn btn-dark w-100 py-3">Contact Our Team</a>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <a href="/auctions" className="btn btn-dark w-100 py-3">Browse Live Auctions</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
>>>>>>> 102243683c78317afe67a2c8fbc26b4d39bf12c5
};

export default AboutUs;
