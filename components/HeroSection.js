// components/HeroSection.js
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Oval } from "react-loader-spinner";

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

  const whoUses = [
    {
      icon: "fa-building",
      text: "Landlords listing flats, shops, or commercial spaces",
    },
    {
      icon: "fa-warehouse",
      text: "Developers marketing off-plan or ready properties",
    },
    {
      icon: "fa-user-tie",
      text: "Real estate agents expanding their buyer reach",
    },
    {
      icon: "fa-truck",
      text: "Businesses selling vehicles, equipment, or inventory",
    },
    {
      icon: "fa-handshake",
      text: "Buyers looking for transparent, time-bound deals",
    },
    {
      icon: "fa-bullhorn",
      text: "If you’ve got a property or asset to move, this is where you start",
    },
  ];

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
                      <Link className="explore-more" href={"/marketplace"}>
                        Explore More
                      </Link>
                      <Link href={"/sell"} className="sellnow">
                        Sell Now
                      </Link>
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
          <div className="loader-container">
            <Oval height={80} width={80} color="#3498db" secondaryColor="#f3f3f3" ariaLabel="loading-indicator" />
          </div>
        )}
      </div>

      {/* Welcome Section */}
      <div
  className="xpertbid-welcome-section position-relative text-dark d-flex align-items-center"
  style={{
backgroundImage:
          "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
    backgroundColor: "#C7E6F8",


    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "80vh",
    padding: "4rem 2rem",
    zIndex: 1,
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
     // backgroundColor: "rgba(255, 255, 255, 0.7)", // slight overlay for text clarity
      zIndex: 1,
    }}
  ></div>

  <div
    className="container text-center text-md-start"
    style={{ zIndex: 2, position: "relative" }}
  >
    <h1 className="display-4 fw-bold">
      Welcome to <span style={{ color: "#43ACE9" }}>Xpert</span>
      <span style={{ color: "#141416" }}>Bid</span>
    </h1>
    <h2 className="fs-3 mb-3">
      The Property Auction Platform for Fast, Transparent Sales
    </h2>
    <p className="lead">
      Whether you're selling a plot in Karachi, leasing a shop in Dubai, or managing commercial units across the Gulf, XpertBid helps you close deals quickly, fairly, and securely. Built for real estate professionals, landlords, and developers, our platform brings auctions online without agents, delays, or guesswork.
    </p>
  </div>
</div>


      {/* Who Uses Section */}
<div
  className="xpertbid-users-section position-relative py-5"
  style={{
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    zIndex: 1,
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0)",
      zIndex: 1,
    }}
  ></div>

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <h2 className="text-center mb-4" style={{ color: "#000", fontWeight: "bold" }}>
      Who Uses <span style={{ color: "#43ACE9" }}>XpertBid</span>?
    </h2>

    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      navigation
      breakpoints={{
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {whoUses.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="user-card text-center">
            <i className={`fa ${item.icon} fa-2x mb-3`}></i>
            <p>{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <style jsx>{`
    .user-card {
      background-color: #ffffff;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 20px;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #000;
      transition: transform 0.3s ease, border-color 0.3s;
    }

    .user-card:hover {
      transform: translateY(-5px);
      border-color: #43ace9;
    }

    .user-card i {
      color: #43ace9;
      transition: transform 0.5s ease;
      display: inline-block;
    }

    .user-card:hover i {
      transform: rotate(360deg);
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #43ace9;
    }

    .loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh;
    }
  `}</style>
</div>


    </section>
  );
}
