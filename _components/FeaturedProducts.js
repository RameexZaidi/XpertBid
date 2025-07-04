// components/FeaturedProducts.js
import { useState, useEffect } from "react";
import Link from "next/link";
import CountdownTimer from "./countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Font Awesome Icons Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faDraftingCompass, faUserTie, faTruckLoading, faUsers } from '@fortawesome/free-solid-svg-icons';
library.add(faBuilding, faDraftingCompass, faUserTie, faTruckLoading, faUsers);

// Optional: AOS for animation
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://admin.xpertbid.com/api/get-featured");
      const data = await response.json();
      setProducts(data.product || []);
    };

    fetchProducts();
    AOS.init({ duration: 1000 });
  }, []);

  return (
<section
  className="featured-product py-5 position-relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <style jsx>{`
    .featured-product::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); /* ✅ 50% black overlay */
      z-index: 1;
    }
    .featured-product > .container-fluid {
      position: relative;
      z-index: 2;
    }
    .featured-product .swiper-slide {
      max-width: 280px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      background: #fff;
      border-radius: 0.75rem;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    .featured-product .pro-image {
      height: 140px;
      width: 100%;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
    }
    .featured-product .pro-image img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .featured-product .pro-title {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.9rem;
      flex-shrink: 0;
      color: #333;
    }
    .featured-product .pro-meta {
      font-size: 0.8rem;
      text-align: center;
      flex-shrink: 0;
    }
    .featured-product .pro-meta .price {
      font-weight: bold;
      color: #333;
    }
    .featured-product .pro-bid-btn a {
      background-color: #43ACE9;
      color: #fff;
      padding: 5px 12px;
      border-radius: 6px;
      display: inline-block;
      margin-top: 4px;
      font-size: 0.8rem;
    }
    .featured-product .pro-bid-btn a:hover {
      background-color: #2b8bc6;
      text-decoration: none;
    }
    .featured-product .featured-heading h2 {
      color: #fff;
      position: relative;
      z-index: 2;
    }
  `}</style>

  <div className="container-fluid p-0">
    <div className="featured-heading text-center my-4">
      <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Featured Listings</h2>
    </div>

    <div className="swiper-featured-product">
      {products.length > 0 ? (
        <div style={{ overflow: "visible" }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={products.length > 1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides={true}
            spaceBetween={40}
            breakpoints={{
              360: { slidesPerView: 1, centeredSlides: true },
              640: { slidesPerView: 2, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: true },
              1300: {
                slidesPerView: 3.5,
                centeredSlides: true,
                spaceBetween: 40,
              },
            }}
          >
            {products.map((product, index) => {
              let imgPath = "";
              try {
                const album = JSON.parse(product.album);
                imgPath = Array.isArray(album) ? album[0] : album;
                imgPath = imgPath?.replace(/^\/+/, "");
              } catch {
                imgPath = product.album?.replace(/^\/+/, "");
              }

              return (
                <SwiperSlide key={index}>
                  <div className="pro-image">
                    <Link href={`/product/${product.slug}`} className="product-box">
                      <img
                        src={`https://admin.xpertbid.com/${imgPath}`}
                        alt={product.name}
                        className="img-fluid"
                      />
                    </Link>
                    <CountdownTimer
                      startDate={product.start_date}
                      endDate={product.end_date}
                    />
                  </div>
                  <div className="pro-title">
                    <h2>
                      <Link
                        href={`/product/${product.slug}`}
                        style={{ color: "#000", textDecoration: "none" }}
                      >
                        {product.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="pro-meta">
                    <div className="pro-price">
                      <span>Current Bid</span>
                      <p className="price">
                        <i className="fa-solid fa-dollar-sign"></i>{" "}
                        {product.bids_max_bid_amount} USD
                      </p>
                    </div>
                    <div className="pro-buy-btn">
                      <div className="pro-bid-btn">
                        <Link href={`/product/${product.slug}`}>Place Bid</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <p className="text-center py-4" style={{ color: "#fff", zIndex: 2, position: "relative" }}>
          No products found.
        </p>
      )}
    </div>
  </div>
</section>


  );
}
