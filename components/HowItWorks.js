// components/MarketplaceSection.js

export default function HowItWorks() {
  const howItWorks = [
    {
      title: "List Your Property or Asset",
      desc: "Upload details, set your price, and choose your auction timeline.",
      icon: "fa-upload",
    },
    {
      title: "Let Buyers Compete",
      desc: "Auctions run in real time. You stay in control of pricing and terms.",
      icon: "fa-users",
    },
    {
      title: "Close Safely",
      desc: "Funds are held securely until both sides confirm completion.",
      icon: "fa-lock",
    },
  ];

  return (
    <section
      className="how-it-works-section py-5 mb-5"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
        backgroundColor: "#C7E6F8",
        backgroundAttachment: "fixed",
        backgroundSize: "auto",
        position: "relative",
        marginTop: "-50px",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="text-center mb-4 text-dark fw-bold">How It Works</h2>
        <div className="row">
          {howItWorks.map((item, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="how-card text-center p-4 h-100 shadow-sm">
                <i className={`fa ${item.icon} fa-2x mb-3 text-primary`}></i>
                <h5 className="fw-semibold text-dark">{item.title}</h5>
                <p className="text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-card {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid #d0d0d0;
        }

        .how-card:hover {
          transform: translateY(-5px);
          border-color: #43ace9;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .fa {
          transition: transform 0.5s ease;
          display: inline-block;
        }

        .how-card:hover .fa {
          transform: rotate(360deg);
        }
      `}</style>
    </section>
  );
}
