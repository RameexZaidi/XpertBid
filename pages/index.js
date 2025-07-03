import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
//import HowItWorks from "../components/HowItWorks";
import SliderBrowseCategories from "../components/SliderBrowseCategories";
import TopBid from "../components/TopBid";
import MarketplaceSection from "../components/MarketplaceSection";
//import SellerTestimonials from "../components/SellerTestimonials";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import GetStartedXpertBid from "../components/GetStartedXpertBid";
import StartSelling from "../components/StartSelling";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://admin.xpertbid.com/api/get-products"
        );
        const data = await response.json();
        setProducts(data.product || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Oval
            height={80}
            width={80}
            color="#3498db"
            secondaryColor="#f3f3f3"
            ariaLabel="loading-indicator"
          />
        </div>
      ) : (
        <>
          <Header />
          <HeroSection />
          // <HowItWorks />
          <SliderBrowseCategories />
          <TopBid />
          <MarketplaceSection products={products} />
          // <SellerTestimonials />
          <FeaturedProducts />
          <Testimonials />
          <GetStartedXpertBid />
          <StartSelling />
          <Footer />
        </>
      )}
      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
