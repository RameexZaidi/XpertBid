import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
    return (
        <>
            <Header />
            <section className="py-5 bg-light about-bg-image about-bg-image-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="h1 mb-4">About XpertBid</h2>
                            <p className="mb-3 text-secondary">
                                Buyers struggled with unverified deals in a manual and disorganized process. XpertBid was born to change that.
                                We are a digital auction platform built on transparency, speed, and trust. With XpertBid, you can:
                            </p>
                            <ul className="text-secondary ps-3">
                                <li>List properties, vehicles, or stock within minutes</li>
                                <li>Define your own terms and reserve prices</li>
                                <li>Receive real-time bids from verified buyers</li>
                                <li>Close deals safely using escrow services</li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <img
                                src="/assets/images/about_main.png"
                                alt="About XpertBid"
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="main-heading-about">Who We Serve</h2>
                        <p className="text-secondary">XpertBid caters to a diverse audience:</p>
                    </div>
                    <div className="row g-4 text-center">
                        {[
                            { icon: "fa-user", title: "Property Owners", desc: "Sell or lease directly to buyers" },
                            { icon: "fa-building", title: "Real Estate Developers", desc: "Reach broader, trusted markets" },
                            { icon: "fa-truck", title: "SMEs & Retailers", desc: "Clear stock, vehicles, or surplus fast" },
                            { icon: "fa-users", title: "Investors & Buyers", desc: "Access verified, competitive deals" },
                        ].map((item, idx) => (
                            <div className="col-md-6 col-lg-3" key={idx}>
                                <div className="card border-0 shadow-sm p-4 h-100 about-box text-center">
                                    <i className={`fas ${item.icon} fa-2x mb-3 text-primary`}></i>
                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="text-secondary mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container text-center">
                    <h2 className="main-heading-about mb-4">Our Global Reach</h2>
                    <p className="text-secondary mb-5">
                        From bustling cities to emerging markets, XpertBid connects buyers and sellers across continents.
                    </p>
                    <div className="row g-4 justify-content-center">
                        {[
                            {
                                icon: "https://flagcdn.com/w80/pk.png",
                                title: "Pakistan",
                                desc: "Our launchpad and growing stronghold for real estate and business auctions."
                            },
                            {
                                icon: "https://flagcdn.com/w80/ae.png",
                                title: "United Arab Emirates",
                                desc: "Our headquarters and a vital hub for regional growth."
                            },
                            {
                                icon: "https://flagcdn.com/w80/sa.png",
                                title: "Saudi Arabia",
                                desc: "Launching soon: unlocking industrial and commercial assets."
                            },
                            {
                                icon: "https://flagcdn.com/w80/cn.png",
                                title: "China",
                                desc: "Expanding to connect buyers to trusted manufacturers."
                            },
                            {
                                icon: "https://flagcdn.com/w80/za.png",
                                title: "Africa",
                                desc: "Opening new trade opportunities in key African markets."
                            },
                        ].map((region, idx) => (
                            <div className="col-md-4 col-lg-3" key={idx}>
                                <div className="card border-0 shadow-sm p-4 about-box h-100 text-center">
                                    <div className="d-flex justify-content-center">
                                        <img src={region.icon} alt={region.title} className="mb-3" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                                    </div>
                                    <h5 className="fw-bold mb-2">{region.title}</h5>
                                    <p className="text-secondary mb-0">{region.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#23262F" }}>
                <div className="container text-white text-center">
                    <h2 className="main-heading-about-uniqe mb-4">What We Stand For</h2>
                    <div className="row g-4">
                        {[
                            { icon: "fas fa-shield-alt", title: "Security", desc: "All transactions are protected by escrow. Funds are released only when everything checks out." },
                            { icon: "fas fa-stopwatch", title: "Efficiency", desc: "Timed auctions and seamless listings help sellers close faster — no time wasted." },
                            { icon: "fas fa-universal-access", title: "Access", desc: "Anyone can list. Anyone can bid. We simplify trading for real people and businesses." },
                        ].map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card border-0 bg-dark text-white p-5 h-100 text-center">
                                    <i className={`${item.icon} fa-2x mb-3 text-primary`}></i>
                                    <h5 className="about-box-title mb-2">{item.title}</h5>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#f3f4f6" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="main-heading-about">Join the XpertBid Movement</h2>
                        <p className="text-secondary">
                            We’re building something practical and long-lasting — a platform that works for real people and real businesses.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <a href="/register" className="btn btn-dark w-100 py-3">Create an Account</a>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <a href="/contact" className="btn btn-dark w-100 py-3">Contact Our Team</a>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <a href="/auctions" className="btn btn-dark w-100 py-3">Browse Live Auctions</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AboutUs;
