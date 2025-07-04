import { useState, useEffect} from "react";
import { Oval } from "react-loader-spinner"; // Import the loader
import axios from "axios";
import Link from "next/link";

export default function BrowseCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Make API request to fetch categories
        const response = await axios.get("https://admin.xpertbid.com/api/get-category");
        // console.log(response.data.categories);
        setCategories(response.data.categories || []); // Update categories state
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <>
      {loading ? (
        // Show loader while loading
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
        <section className="browsecategories">
          <div className="container-fluid">

            {/* New Intro Section Above Categories */}
            {/* New Intro Section Above Categories */}
<div className="row mb-5 align-items-center bg-light rounded shadow-sm py-5 px-4" style={{ color: "black" }}>
<h2 className="fw-bold mb-3 text-center" style={{ color: "#43ACE9" }}>
  List Property. Start Bidding. Get Results.
</h2>


  <div className="col-lg-6 mb-4 mb-lg-0">
    
<h2 className="lead mb-4" style={{color: "#333333" ,fontWeight: "bold"}}>Whether you're listing:</h2>
<ul className="list-unstyled ps-3">
  <li className="mb-2">🏠 <strong>Residential Units</strong></li>
  <li className="mb-2">🏬 <strong>Commercial Shops</strong></li>
  <li className="mb-2">📐 <strong>Plots or Rental Spaces</strong></li>
</ul>


  </div>
  <div className="col-lg-6">
    <h4 className="fw-semibold mb-3 text-dark"><span style={{ color: "#43ACE9" }}>Xpert</span>
  <span style={{ color: "#333333" /* charcoal */ }}>Bid</span>? gives you the tools to:</h4>
    <ul className="list-unstyled ps-3">
    <li>💰 Set your reserve price</li>
    <li>🌍 Reach verified buyers across the region</li>
    <li>🔒 Complete sales through secure, escrow-backed payments</li>
  </ul>

  </div>
</div>


            {/* Browse Categories Heading */}
            <div className="row cate-heading-parent d-flex justify-content-between align-items-center">
              <div className="col-sm-6 cate-heading ">
                <h4 className="browse-heading text-dark ">Browse Categories</h4>
              </div>
              <div className="col-sm-6">
                <div className="ms-auto d-none d-sm-flex " >
                  <div className="pro-bid-btn ms-auto">
                    <Link href="/categories" className="cate-padd">Explore Categories</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Display categories - first 4 */}
            <div className="row cate-cards-parent">
              {categories.slice(0, 4).map((cat, i) => (
                <div className="col-xl-3  col-sm-6 cate-card-main px-3" key={i}>
                  <div className="cate-card">
                    <Link
                      href={{ pathname: "/marketplace", query: { category: cat.slug } }}
                      className="product-box"
                    >
                      <div className="row images-portion">
                        <div className="col-12 image-1">
                          <img
                            src={`https://admin.xpertbid.com${
                              cat.image?.startsWith("/") ? "" : "/"
                            }${cat.image ?? "images/placeholder.png"}`}
                            alt={cat.name}
                          />
                        </div>
                      </div>
                      <div className="cate-title">
                        <h2>{cat.name}</h2>
                      </div>
                      <div className="cate-lisitng">
                        <span>{cat.auctions_count} Listings</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Display categories - next 4 */}
            <div className="row cate-cards-parent">
              {categories.slice(4, 8).map((cat, i) => (
                <div className="col-xl-3 col-sm-6 cate-card-main" key={i}>
                  <div className="cate-card">
                    <Link
                      href={{ pathname: "/marketplace", query: { category: cat.slug } }}
                      className="product-box"
                    >
                      <div className="row images-portion">
                        <div className="col-12 image-1">
                          <img
                            src={`https://admin.xpertbid.com${
                              cat.image?.startsWith("/") ? "" : "/"
                            }${cat.image ?? "images/placeholder.png"}`}
                            alt={cat.name}
                          />
                        </div>
                      </div>
                      <div className="cate-title">
                        <h2>{cat.name}</h2>
                      </div>
                      <div className="cate-lisitng">
                        <span>{cat.auctions_count} Listings</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .lead {
          font-size: 1.2rem;
          color: #555;
        }
        ul li {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
}
