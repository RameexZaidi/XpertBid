import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Link from "next/link";

export default function SliderBrowseCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://admin.xpertbid.com/api/get-category");
        setCategories(response.data.categories || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
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
        <section
          className="browsecategories text-dark"
          style={{
            backgroundColor: "#ffffff",
            position: "relative",
            zIndex: 1,
            marginTop: "-50px",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <div className="container-fluid position-relative">
            <div className="row cate-heading-parent d-flex justify-content-between align-items-center">
              <div className="col-sm-12 text-center mb-4">
                <h2 className="browse-heading">Browse Categories</h2>
              </div>
            </div>

            {/* First 4 Categories */}
            <div className="row cate-cards-parent mb-4">
              {categories.slice(0, 4).map((cat, i) => (
                <div className="col-xl-3 col-sm-6 cate-card-main px-3" key={i}>
                  <div className="cate-card border-animate">
                    <span className="right-border"></span>
                    <span className="bottom-border"></span>
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

            {/* Next 4 Categories */}
            <div className="row cate-cards-parent mb-4">
              {categories.slice(4, 8).map((cat, i) => (
                <div className="col-xl-3 col-sm-6 cate-card-main px-3" key={i}>
                  <div className="cate-card border-animate">
                    <span className="right-border"></span>
                    <span className="bottom-border"></span>
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

            {/* Load More Button */}
            <div className="row justify-content-center mt-4">
              <div className="col-auto">
                <Link href="/categories" passHref legacyBehavior>
                  <a className="btn load-more-btn px-4 py-2 fw-bold">Load More</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Styles */}
      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .browse-heading {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .cate-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        .cate-title h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 0.5rem;
          color: #000;
        }

        .cate-lisitng span {
          color: #777;
          font-size: 0.9rem;
        }

        .load-more-btn {
          background-color: #43ACE9;
          color: #fff;
          border: none;
          transition: background-color 0.3s ease;
        }

        .load-more-btn:hover {
          background-color: #5bc3f0;
          color: #fff;
        }

        .border-animate::before,
        .border-animate::after,
        .border-animate span.right-border,
        .border-animate span.bottom-border {
          content: "";
          position: absolute;
          background-color: #43ACE9;
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
    </>
  );
}
