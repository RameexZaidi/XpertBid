import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Real_Estate = () => {
    const liveAuctions = [
        {
            title: "10 Marla Plot",
            location: "DHA Lahore",
            bid: "PKR 5M",
            ends: "Ends in 3 days",
            image: "/assets/images/plot.jpg",
        },
        {
            title: "2-Bed Apartment",
            location: "Business Bay, Dubai",
            bid: "AED 750K",
            ends: "Reserve Met",
            image: "/assets/images/apartment.jpg",
        },
        {
            title: "Commercial Warehouse",
            location: "Sharjah",
            bid: "No Reserve",
            ends: "12 Active Bidders",
            image: "/assets/images/warehouse.jpg",
        },
    ];

    return (
        <>
            <Header />

            <section className="py-5 bg-light about-bg-image about-bg-image-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="h1 mb-4">Real Estate Auctions</h2>
                            <p className="mb-3 text-secondary">
                                Sell, Lease, or Bid on Property — the Smarter Way. Whether you're a landlord, developer, or investor, XpertBid gives you a streamlined way to list, lease, or purchase property through secure, timed auctions.
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <img
                                src="/assets/images/about_main.png"
                                alt="Real Estate"
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
  <h3 className="mb-4">
    Why Use <span style={{ color: '#0DCAF0' }}>Xpert</span><span style={{ color: '#333' }}>Bid</span> for Real Estate?
  </h3>

  <div className="row g-4 justify-content-center">
    {[
      { icon: "fa-balance-scale", title: "Set Your Own Reserve Price" },
      { icon: "fa-clock", title: "List in Minutes — No Agent Needed" },
      { icon: "fa-user-check", title: "Verified Buyers via KYC" },
      { icon: "fa-lock", title: "Secure Payments Through Escrow" },
      { icon: "fa-tachometer-alt", title: "Faster Results Than Traditional Sales" },
    ].map((item, idx) => (
      <div className="col-md-4 col-lg-3" key={idx}>
        <div className="card border-0 shadow-sm p-4 text-center h-100">
          <i className={`fas ${item.icon} fa-2x mb-3`} style={{ color: '#0DCAF0' }}></i>
          <p className="mb-0 fw-semibold text-secondary">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>


                    <div className="text-center mb-5">
                        <h3 className="mb-4">What Can You List?</h3>
                        <div className="row g-4 justify-content-center">
  {[
    { icon: "fa-building", title: "Commercial Spaces" },
    { icon: "fa-home", title: "Residential Units" },
    { icon: "fa-drafting-compass", title: "Land and Plots" },
    { icon: "fa-warehouse", title: "Rental Properties" },
  ].map((item, idx) => (
    <div className="col-md-3 col-sm-6" key={idx}>
      <div className="card border-0 shadow-sm p-4 text-center h-100">
        <i className={`fas ${item.icon} fa-2x mb-3`} style={{ color: '#0DCAF0' }}></i>
        <h6 className="fw-bold mb-0">{item.title}</h6>
      </div>
    </div>
  ))}
</div>

                        <p className="text-secondary mt-4">
                            All listings are visible to a wide pool of verified buyers across Pakistan, the UAE, and other emerging markets.
                        </p>
                    </div>

                    <div className="text-center mb-5">
                        <h3 className="mb-4">How It Works</h3>
                        <div className="row g-4">
                            {[
                                { icon: "fa-plus-circle", title: "Create Your Listing", desc: "Upload details, set reserve price, and auction duration." },
                                { icon: "fa-gavel", title: "Buyers Place Bids", desc: "Verified users place real-time bids you can track." },
                                { icon: "fa-handshake", title: "Accept Best Offer", desc: "Choose to accept the highest bid post-auction." },
                                { icon: "fa-file-signature", title: "Complete the Deal", desc: "Finalize documents, release funds via escrow." },
                            ].map((step, idx) => (
                                <div className="col-md-6 col-lg-3" key={idx}>
                                    <div className="card border-0 shadow-sm p-4 text-center h-100">
                                        <i className={`fas ${step.icon} fa-2x mb-3 text-info`}></i>
                                        <h6 className="fw-bold mb-2">{step.title}</h6>
                                        <p className="text-muted small mb-0">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mb-5">
                        <h3 className="mb-4">
  Why Buy Through <span style={{ color: '#0DCAF0' }}>Xpert</span><span style={{ color: '#333' }}>Bid</span>?
</h3>

                        <div className="row g-4 justify-content-center">
  {[
    { icon: "fa-eye", title: "Verified Listings", desc: "View property details & documents before bidding." },
    { icon: "fa-clock", title: "Bid at Your Own Pace", desc: "Timed auctions allow relaxed and strategic bidding." },
    { icon: "fa-undo-alt", title: "Refundable Deposits", desc: "Get your deposit back if your bid doesn't win." },
    { icon: "fa-shield-alt", title: "Secure Transactions", desc: "Escrow-backed payments ensure peace of mind." },
    { icon: "fa-ban", title: "No Hidden Fees", desc: "Say goodbye to lengthy negotiations and surprises." },
  ].map((item, idx) => (
    <div className="col-md-4 col-lg-3" key={idx}>
      <div className="card border-0 shadow-sm p-4 text-center h-100">
        <i className={`fas ${item.icon} fa-2x mb-3`} style={{ color: '#0DCAF0' }}></i>
        <h6 className="fw-bold mb-2">{item.title}</h6>
        <p className="text-muted small mb-0">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

                    </div>

                    <div className="text-center mb-5">
                        <h3 className="mb-4">Live Property Auctions</h3>
                        <p className="text-secondary">
                            Below is a curated list of properties currently up for bidding. Use the filters to sort by location, type, or auction end time.
                        </p>

                        {/* Carousel Start */}
<div id="liveAuctionCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    {liveAuctions.reduce((acc, curr, idx) => {
      if (idx % 2 === 0) acc.push([curr]);
      else acc[acc.length - 1].push(curr);
      return acc;
    }, []).map((group, groupIdx) => (
      <div className={`carousel-item ${groupIdx === 0 ? "active" : ""}`} key={groupIdx}>
        <div className="row justify-content-center">
          {group.map((item, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="mb-1 text-muted">
                    <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                    {item.location}
                  </p>
                  <p className="mb-1"><strong>Starting Bid:</strong> {item.bid}</p>
                  <p className="text-success fw-semibold">{item.ends}</p>
                  <a href="/property-detail" className="btn btn-sm btn-primary mt-2">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#liveAuctionCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#liveAuctionCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Carousel End */}

                    </div>

                    <div className="text-center mb-5">
                        <h3 className="mb-4">Get Started Today</h3>
                        <p className="text-secondary">
                            Your first listing includes a free boosted placement—bringing your property to the top of buyer search results for more visibility.
                        </p>
                        <div className="row justify-content-center mt-4">
                            <div className="col-md-4">
                                <a href="/register" className="btn btn-dark w-100 py-3">Post a Property</a>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <a href="/auctions" className="btn btn-outline-dark w-100 py-3">Browse Auctions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Real_Estate;
