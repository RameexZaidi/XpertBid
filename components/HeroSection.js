// components/HeroSection.js
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Oval } from "react-loader-spinner";

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBuilding,
  faDraftingCompass,
  faUserTie,
  faTruckLoading,
  faUsers,
  faGavel,
  faShieldAlt,
  faGlobeAsia,
  faTools,
  faStore,
  faMapMarkerAlt,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBuilding,
  faDraftingCompass,
  faUserTie,
  faTruckLoading,
  faUsers,
  faGavel,
  faShieldAlt,
  faGlobeAsia,
  faTools,
  faStore,
  faMapMarkerAlt,
  faTruck
);

export default function HeroSection() {
  const [sliderData, setSliderData] = useState([]);
  const [stats, setStats] = useState({
    listings: 0,
    creators: 0,
    categories: 0,
  });

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("https://admin.xpertbid.com/api/get-slider");
        setSliderData(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };
    fetchSliderData();
  }, []);

  useEffect(() => {
    axios
      .get("https://admin.xpertbid.com/api/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="hero-section">
      <div className="container-fluid">
        {sliderData.length > 0 ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={30}
            loop={sliderData.length > 1}
          >
            {sliderData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="row">
                  <div className="col-lg-6 left-section text-start">
                    <h2 className="hero-sec">{slide.title}</h2>
                    <h1 className="hero-sec">{slide.subtitle}</h1>
                    <p>{slide.description}</p>
                    <div className="hero-sec-btn">
                      <Link className="explore-more" href="/marketplace">Explore More</Link>
                      <Link className="sellnow" href="/sell">Sell Now</Link>
                    </div>
                    <div className="happy-clients">
                      <div className="client-ratings">
                        <h3>{stats.listings.toLocaleString()}</h3>
                        <span>Listings</span>
                      </div>
                      <div className="client-ratings">
                        <h3>{stats.creators.toLocaleString()}</h3>
                        <span>Creators</span>
                      </div>
                      <div className="client-ratings">
                        <h3>{stats.categories.toLocaleString()}</h3>
                        <span>Collections</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-section">
                    <img
                      src={`https://admin.xpertbid.com/${slide.image}`}
                      alt={slide.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="loader-container text-center py-5">
            <Oval
              height={80}
              width={80}
              color="#3498db"
              secondaryColor="#f3f3f3"
              ariaLabel="loading-indicator"
            />
          </div>
        )}
      </div>

      {/* Welcome Section */}
      <div className="welcome-section text-center py-5 px-3" style={{ background: "#f5f5f5" }}>
        <h2 className="mb-3" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Welcome to <span style={{ color: "#43ACE9" }}>Xpert</span><span style={{ color: "#333333" }}>Bid</span>
        </h2>
        <h4 className="mb-3 text-muted" style={{ fontSize: "1.25rem" }}>
          The Property Auction Platform for Fast, Transparent Sales
        </h4>
        <p style={{
          maxWidth: "850px",
          margin: "0 auto",
          color: "#555",
          fontSize: "1rem",
        }}>
          Whether you're selling a plot in Karachi, leasing a shop in Dubai, or managing commercial units across the Gulf,{" "}
          <span style={{ color: "#43ACE9", fontWeight: 600 }}>Xpert</span>
          <span style={{ color: "#333333", fontWeight: 600 }}>Bid</span> helps you close deals quickly, fairly, and securely.
          Built for real estate professionals, landlords, and developers, our platform brings auctions online—without agents,
          delays, or guesswork.
        </p>
      </div>

      {/* Who Uses Section */}
      <div className="who-uses-section py-5 px-3" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Who Uses <span style={{ color: "#43ACE9" }}>Xpert</span><span style={{ color: "#333333" }}>Bid</span>?
          </h2>
          <div className="row g-4 justify-content-center">
            {[
              { icon: "building", title: "Landlords", text: "Listing flats, shops, or commercial spaces" },
              { icon: "drafting-compass", title: "Developers", text: "Marketing off-plan or ready properties" },
              { icon: "user-tie", title: "Real Estate Agents", text: "Expanding their buyer reach" },
              { icon: "truck-loading", title: "Businesses", text: "Selling vehicles, equipment, or inventory" },
              { icon: "users", title: "Buyers", text: "Looking for transparent, time-bound deals" },
            ].map((item, idx) => (
              <div className="col-sm-6 col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <div className="mb-3">
                    <i className={`fas fa-${item.icon} fa-2x`} style={{ color: "#43ACE9" }}></i>
                  </div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <p style={{ color: "#333", fontSize: "1rem", fontStyle: "italic" }}>
              If you’ve got a property or asset to move, this is where you start.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose XpertBid Section */}
      <div className="why-choose-section py-5 px-3" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Why Choose <span style={{ color: "#43ACE9" }}>Xpert</span><span style={{ color: "#333" }}>Bid</span>?
          </h2>
          <div className="row g-4 justify-content-center">
            {[
              { icon: "gavel", text: "Real-time auctions for better offers" },
              { icon: "shield-alt", text: "Escrow-secured payments for peace of mind" },
              { icon: "globe-asia", text: "Wide reach across Pakistan, UAE, and growing markets" },
              { icon: "tools", text: "Easy listing tools and live tracking for all your sales" },
            ].map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="d-flex align-items-start">
                  <i className={`fas fa-${item.icon} fa-lg me-3`} style={{ color: "#43ACE9" }}></i>
                  <p className="mb-0" style={{ fontSize: "1rem", color: "#555" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section py-5 px-3" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            How <span style={{ color: "#43ACE9" }}>It</span> <span style={{ color: "#333" }}>Works</span>
          </h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                number: 1,
                title: "List Your Property or Asset",
                description: "Upload details, set your price, and choose your auction timeline.",
              },
              {
                number: 2,
                title: "Let Buyers Compete",
                description: "Auctions run in real time. You stay in control of pricing and terms.",
              },
              {
                number: 3,
                title: "Close Safely",
                description: "Funds are held securely until both sides confirm completion.",
              },
            ].map((step, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="text-center p-4 h-100 shadow-sm border rounded"
                  style={{ backgroundColor: "#f9f9f9", transition: "0.3s ease" }}
                >
                  <div
                    className="step-number mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#43ACE9",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      margin: "0 auto",
                      fontWeight: "bold",
                    }}
                  >
                    {step.number}
                  </div>
                  <h5 style={{ fontWeight: "600", marginBottom: "0.75rem", color: "#333" }}>
                    {step.title}
                  </h5>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Auctions Section */}
      <div className="live-auctions-section py-5 px-3" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="text-center mb-3" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Live <span style={{ color: "#43ACE9" }}>Auctions</span> Happening Now
          </h2>
          <p className="text-center mb-5 text-muted" style={{ fontSize: "1.1rem" }}>
            Browse active listings and discover competitive opportunities across categories.
          </p>
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: "store",
                title: "Commercial Shop – Dubai",
                description: "Bidding ends in 2 days",
              },
              {
                icon: "map-marker-alt",
                title: "1 Kanal Plot – Lahore",
                description: "No reserve price",
              },
              {
                icon: "truck",
                title: "Toyota Hilux – Karachi",
                description: "20+ bids and counting",
              },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <div className="mb-3">
                    <i className={`fas fa-${item.icon} fa-2x`} style={{ color: "#43ACE9" }}></i>
                  </div>
                  <h5 className="card-title" style={{ fontWeight: "600", color: "#333" }}>{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
