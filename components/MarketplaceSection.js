import React, { useState } from "react";
import Link from "next/link";
import CountdownTimer from "./countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MarketplaceSection({ products }) {
  // 🟢 Move useState and logic inside the function
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const whyChoosePoints = [
    {
      icon: "fa-gavel",
      title: "Real-time Auctions",
      desc: "Get better offers with our live bidding system.",
    },
    {
      icon: "fa-shield-alt",
      title: "Escrow-Secured",
      desc: "Safe, secure payments for buyer and seller peace of mind.",
    },
    {
      icon: "fa-globe",
      title: "Wide Reach",
      desc: "Pakistan, UAE & growing markets for your listings.",
    },
    {
      icon: "fa-tools",
      title: "Easy Tools",
      desc: "List, track, and manage sales with ease.",
    },
  ];


  return (
    <>
      {/* Why Choose Section */}
      <section
        className="why-choose-section text-white py-5"
        style={{
          backgroundColor: "#C7E6F8",
          backgroundImage:
          "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "auto",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h2 className="text-center mb-5 text-dark fw-bold">
            Why Choose XpertBid?
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {whyChoosePoints.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="why-card text-center p-4 h-100">
                  <i className={`fa ${item.icon} fa-2x mb-3`}></i>
                  <h4 className="fw-bold text-dark">{item.title}</h4>
                  <p className="text-dark">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx>{`
          .why-card {
            background-color: white;
            border: 2px solid transparent;
            border-radius: 12px;
            min-height: 240px;
            transition: all 0.4s ease;
            position: relative;
          }

          .why-card:hover {
            transform: translateY(-8px);
            border-color: #43ace9;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .why-card i {
            color: #43ace9;
            transition: transform 0.4s ease;
          }

          .why-card:hover i {
            transform: rotate(360deg);
          }
        `}</style>
      </section>

      {/* Marketplace Section (unchanged) */}
        <section
      className="marketplace py-5"
      style={{
        backgroundColor: "#ffffff",
        // backgroundImage:
        //   "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "auto",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="overlay"></div>
      <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
        <div className="mkt-plc-hdig text-center mb-4">
          <h2 className="text-dark">Explore Marketplace</h2>
        </div>
        <div className="row makt-parent mx-auto">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <div className="market-card border-animate h-100">
                  <span className="right-border"></span>
                  <span className="bottom-border"></span>

                  <div className="mkt-img">
                    <Link href={`/product/${product.slug}`} className="product-box">
                      <img
                        src={`https://admin.xpertbid.com${JSON.parse(product.album)[0]}`}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ height: "150px", objectFit: "cover", width: "100%" }}
                      />
                    </Link>
                    <CountdownTimer startDate={product.start_date} endDate={product.end_date} />
                  </div>

                  <div className="mkt-body p-2 d-flex flex-column justify-content-between h-100">
                    <div>
                      <h6 className="text-dark">
                        <Link href={`/product/${product.slug}`}>{product.title}</Link>
                      </h6>
                    </div>
                    <div className="mkt-detail d-flex justify-content-between align-items-center mt-2">
                      <div className="mkt-crt-bid">
                        <span className="text-muted small">Current Bid</span>
                        <div className="mkt-bid-price text-dark fw-bold">
                          <i className="fa-solid fa-dollar-sign"></i>
                          <span className="price">{product.bids_max_bid_amount}</span> USD
                        </div>
                      </div>
                      <Link href={`/product/${product.slug}`} className="btn placebid-btn btn-sm">
                        Place Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-dark">No products found.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="row justify-content-center mt-3">
            <div className="col-auto d-flex gap-2 align-items-center">
              <button className="btn btn-outline-secondary btn-sm" onClick={handlePrev} disabled={currentPage === 1}>
                &laquo; Prev
              </button>
              <span className="fw-bold">Page {currentPage} of {totalPages}</span>
              <button className="btn btn-outline-secondary btn-sm" onClick={handleNext} disabled={currentPage === totalPages}>
                Next &raquo;
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.5);
          z-index: 1;
        }

        .market-card {
          background-color: #f9f9f9;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease;
          padding: 1rem;
          color: #000;
          font-size: 0.9rem;
          border: 1px solid #e0e0e0;
        }

        .market-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .placebid-btn {
          background-color: #43ace9;
          color: white;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          text-decoration: none;
        }

        .placebid-btn:hover {
          background-color: #2e94c6;
        }

        .border-animate::before,
        .border-animate::after,
        .border-animate span.right-border,
        .border-animate span.bottom-border {
          content: "";
          position: absolute;
          background-color: #43ace9;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .border-animate::before {
          height: 2px;
          width: 0;
          top: 0;
          left: 0;
        }

        .border-animate::after {
          height: 0;
          width: 2px;
          top: 0;
          left: 0;
        }

        .border-animate span.right-border {
          height: 0;
          width: 2px;
          top: 0;
          right: 0;
        }

        .border-animate span.bottom-border {
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
        }

        .border-animate:hover::before {
          width: 100%;
          transition-delay: 0s;
        }

        .border-animate:hover::after {
          height: 100%;
          transition-delay: 0.2s;
        }

        .border-animate:hover span.right-border {
          height: 100%;
          transition-delay: 0.4s;
        }

        .border-animate:hover span.bottom-border {
          width: 100%;
          transition-delay: 0.6s;
        }
      `}</style>
    </section>
    </>
  );
}
