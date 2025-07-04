import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Link from "next/link";

export default function BrowseCategories() {
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
    return <p className="text-danger text-center py-5">{error}</p>;
  }

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Oval
            height={80}
            width={80}
            color="#000"
            secondaryColor="#ccc"
            ariaLabel="loading-indicator"
          />
        </div>
      ) : (
        <section
          className="browsecategories py-5 position-relative"
          style={{
             backgroundImage: `url("https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")`,




            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="overlay"></div>
          <div className="container position-relative">
            {/* Browse by Category Section */}
            <div className="mb-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: "#fff", fontSize: "2rem" }}>
                  Browse by Category
                </h2>
                <p className="text-light" style={{ fontSize: "1.1rem" }}>
                  Find exactly what you’re looking for:
                </p>
              </div>
            </div>

            {/* Dynamic Categories from API */}
            <div className="row g-4">
              {categories.slice(0, 8).map((cat, i) => (
                <div className="col-xl-3 col-md-4 col-sm-6" key={i}>
                  <Link
                    href={{
                      pathname: "/marketplace",
                      query: { category: cat.slug },
                    }}
                    className="text-decoration-none"
                  >
                    <div className="card h-100 d-flex flex-column shadow-sm border-0 rounded overflow-hidden category-card bg-white">
                      <div
                        className="card-img-top bg-light"
                        style={{ height: "160px", overflow: "hidden" }}
                      >
                        <img
                          src={`https://admin.xpertbid.com${
                            cat.image?.startsWith("/") ? "" : "/"
                          }${cat.image ?? "images/placeholder.png"}`}
                          alt={cat.name}
                          className="img-fluid w-100 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="card-body text-center mt-auto">
                        <h5
                          className="card-title mb-1"
                          style={{ color: "#333", fontWeight: 600 }}
                        >
                          {cat.name}
                        </h5>
                        <p className="card-text text-muted">
                          {cat.auctions_count} Listings
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Centered Load More Button */}
            <div className="row mb-4 mt-4">
              <div className="col text-center">
                <Link
                  href="/categories"
                  className="btn btn-dark shadow-sm"
                  style={{
                    minWidth: "200px",
                    padding: "14px 28px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    borderRadius: "8px",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                    color: "#fff",
                    display: "inline-block",
                    textAlign: "center",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#222")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                >
                  Load More
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70vh;
        }
        .browsecategories .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
        .browsecategories .container {
          position: relative;
          z-index: 2;
        }
        .category-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
}
