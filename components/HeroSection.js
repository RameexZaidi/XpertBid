import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Oval } from "react-loader-spinner";
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

  const whoUses = [
    {
      icon: "fa-building",
      text: "Landlords listing flats, shops, or commercial spaces",
    },
    {
      icon: "fa-drafting-compass",
      text: "Developers marketing off-plan or ready properties",
    },
    {
      icon: "fa-user-tie",
      text: "Real estate agents expanding their buyer reach",
    },
    {
      icon: "fa-truck-loading",
      text: "Businesses selling vehicles, equipment, or inventory",
    },
    {
      icon: "fa-users",
      text: "Buyers looking for transparent, time-bound deals",
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
                      <Link className="sellnow" href={"/sell"}>
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

      {/* Who Uses Section */}
      <div className="xpertbid-users-section py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
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
                  <i className={`fas ${item.icon} fa-2x mb-3`}></i>
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
          }
          .user-card:hover i {
            transform: rotate(360deg);
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
