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
    <section className="featured-product">
      <div className="container-fluid p-0">

        {/* ✅ Who Uses XpertBid Section */}
       

        {/* ✅ Featured Listings Section */}
        <div className="featured-heading text-center my-4">
          <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Featured Listings</h2>
        </div>

        <div className="swiper-featured-product">
          {products.length > 0 ? (
            <div style={{ overflow: 'visible' }}>
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
                        <CountdownTimer startDate={product.start_date} endDate={product.end_date} />
                      </div>
                      <div className="pro-title" style={{ color: "black" }}>
                        <h2>
                          <Link href={`/product/${product.slug}`} className="text-color-black">
                            {product.title}
                          </Link>
                        </h2>
                      </div>
                      <div className="pro-meta">
                        <div className="pro-price">
                          <span>Current Bid</span>
                          <p className="price">
                            <i className="fa-solid fa-dollar-sign"></i>
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
            <p className="text-center py-4">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
