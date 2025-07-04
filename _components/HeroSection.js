// components/HeroSection.js

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Oval } from "react-loader-spinner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
      <section
        className="welcome-section py-5 px-3 position-relative"
        data-scroll-section
      >
        <div
          className="parallax-bg"
          data-scroll
          data-scroll-speed="-2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="parallax background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.2,
            }}
          />
        </div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                Welcome to <span style={{ color: "#43ACE9" }}>Xpert</span>
                <span style={{ color: "#333333" }}>Bid</span>
              </h2>
              <h4 className="mb-3 text-muted" style={{ fontSize: "1.25rem" }}>
                The Property Auction Platform for Fast, Transparent Sales
              </h4>
              <p style={{ color: "#555", fontSize: "1rem" }}>
                Whether you're selling a plot in Karachi, leasing a shop in Dubai, or
                managing commercial units across the Gulf,{" "}
                <span style={{ color: "#43ACE9", fontWeight: 600 }}>Xpert</span>
                <span style={{ color: "#333333", fontWeight: 600 }}>Bid</span> helps
                you close deals quickly, fairly, and securely.
              </p>
            </div>

            <div className="col-md-6">
              <div
                className="rounded shadow"
                data-scroll
                data-scroll-speed="2"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                  borderRadius: "12px",
                  transition: "transform 0.5s ease, filter 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter = "brightness(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses Section with Swiper Carousel */}
<div
  className="who-uses-section py-5 px-3 position-relative"
  style={{ backgroundColor: "#ffffff", overflow: "hidden" }}
>
  {/* background parallax image */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url("https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.15,
      backgroundAttachment: "fixed",
      zIndex: 0,
    }}
  ></div>

  {/* content over background */}
  <div className="container position-relative" style={{ zIndex: 1 }}>
    <h2 className="text-center mb-5" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
      Who Uses <span style={{ color: "#43ACE9" }}>Xpert</span><span style={{ color: "#333333" }}>Bid</span>?
    </h2>
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        { icon: "building", title: "Landlords", text: "Listing flats, shops, or commercial spaces" },
        { icon: "drafting-compass", title: "Developers", text: "Marketing off-plan or ready properties" },
        { icon: "user-tie", title: "Real Estate Agents", text: "Expanding their buyer reach" },
        { icon: "truck-loading", title: "Businesses", text: "Selling vehicles, equipment, or inventory" },
        { icon: "users", title: "Buyers", text: "Looking for transparent, time-bound deals" },
      ].map((item, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="text-center p-3"
            style={{
              height: "180px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.6s ease",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              border: "2px solid transparent",
              borderRadius: "12px",
              cursor: "pointer",
              background: "linear-gradient(135deg, #E0F7FA, #FFFFFF)",
              backgroundSize: "200% 200%",
              backgroundPosition: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px solid #C4F4F1";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundPosition = "right center";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundPosition = "center";
            }}
          >
            <div className="mb-2">
              <i className={`fas fa-${item.icon} fa-lg`} style={{ color: "#43ACE9" }}></i>
            </div>
            <h6 className="card-title" style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
              {item.title}
            </h6>
            <p className="card-text" style={{ fontSize: "0.75rem" }}>{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="text-center mt-5">
      <p style={{ color: "#333", fontSize: "1rem", fontStyle: "italic" }}>
        If you’ve got a property or asset to move, this is where you start.
      </p>
    </div>
  </div>
</div>




      {/* How It Works Section */}
<div
  className="how-it-works-section py-5 px-3 position-relative"
  style={{
    backgroundColor: "#ffffff",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Parallax background image */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url("https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      opacity: 0.1,
      zIndex: 0,
    }}
  ></div>

  {/* content */}
  <div className="container position-relative" style={{ zIndex: 1 }}>
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
            className="text-center p-3 h-100 rounded"
            style={{
              backgroundColor: "#f9f9f9",
              transition: "all 0.5s ease",
              border: "2px solid transparent",
              cursor: "pointer",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px solid #C4F4F1";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              className="step-number mb-2"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#43ACE9",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                margin: "0 auto",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              {step.number}
            </div>
            <h6 style={{ fontWeight: "600", marginBottom: "0.5rem", color: "#333", fontSize: "1rem" }}>
              {step.title}
            </h6>
            <p style={{ color: "#666", fontSize: "0.8rem" }}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



      {/* Live Auctions Section */}
    <div
  className="live-auctions-section py-5 px-3"
  style={{
   backgroundImage: `url("https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")`,

    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <style>
    {`
      .auction-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        border: 2px solid transparent;
        border-radius: 1rem;
      }
      .auction-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 20px rgba(0,0,0,0.15);
        border: 2px solid #43ACE9;
      }
    `}
  </style>
  <div className="container">
    <h2
  className="text-center mb-3"
  style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333333" }}  // charcoal
>
  Live <span style={{ color: "#43ACE9" }}>Auctions</span> Happening Now
</h2>

   <p
  className="text-center mb-5"
  style={{ fontSize: "1.1rem", color: "#333" }}
>
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
        <div className="col-md-3 col-sm-6" key={idx}>
          <div className="card auction-card h-100 text-center p-3 bg-white">
            <div className="mb-3">
              <i
                className={`fas fa-${item.icon} fa-2x`}
                style={{ color: "#43ACE9" }}
              ></i>
            </div>
            <h5
              className="card-title"
              style={{ fontWeight: "600", color: "#333" }}
            >
              {item.title}
            </h5>
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
