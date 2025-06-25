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
        <section className="browsecategories py-5">
          <div className="container">

            {/* Browse by Category Section */}
            <div className="mb-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: "#43ACE9", fontSize: "2rem" }}>
                  Browse by Category
                </h2>
                <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                  Find exactly what you’re looking for:
                </p>
              </div>
              <div className="row g-4">
                {[
                  {
                    icon: "building",
                    title: "Property",
                    desc: "Residential, commercial, plots, and rentals",
                  },
                  {
                    icon: "car",
                    title: "Vehicles",
                    desc: "Cars, vans, motorcycles, and commercial vehicles",
                  },
                  {
                    icon: "cogs",
                    title: "Equipment & Machinery",
                    desc: "Industrial tools, plant equipment, construction assets",
                  },
                  {
                    icon: "boxes",
                    title: "Stock & Inventory",
                    desc: "Surplus goods, closeout stock, retail and wholesale lots",
                  },
                ].map((item, idx) => (
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch" key={idx}>
                    <div className="w-100 border rounded shadow-sm d-flex flex-column align-items-center text-center p-4 bg-light h-100">
                      <i
                        className={`fas fa-${item.icon} fa-2x mb-3`}
                        style={{ color: "#43ACE9" }}
                        aria-hidden="true"
                      ></i>
                      <h5 className="fw-bold mb-2" style={{ color: "#333" }}>
                        {item.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button to All Categories */}
            <div className="row align-items-center mb-4">
              <div className="col-sm-6 text-sm-end">
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
                  Explore Categories
                </Link>
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
                    <div className="card h-100 d-flex flex-column shadow-sm border-0 rounded overflow-hidden category-card">
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
                        <p className="card-text text-muted">{cat.auctions_count} Listings</p>
                      </div>
                    </div>
                  </Link>
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
          height: 70vh;
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
