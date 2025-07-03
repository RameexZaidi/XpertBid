import ContactForm from "../components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="color py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Contact Us</h2>
            <h4 className="text-secondary">
              Questions? We&apos;re Here to Help.
            </h4>
            <p className="text-muted mt-2">
              Whether you&apos;re looking to list your first property, need support with bidding, 
              or simply want to know more about how{" "}
              <strong>
                <span style={{ color: "#43ACE9" }}>Xpert</span>
                <span style={{ color: "#333" }}>Bid</span>
              </strong>{" "}
              works — our team is ready to assist.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>


      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">Questions? We're Here to Help</h2>
            <p className="text-secondary fs-5">
              Whether you're looking to list your first property, need support with bidding,
              or simply want to know more about how XpertBid works — our team is ready to assist.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                <h5 className="fw-semibold mb-2">Email</h5>
                <p className="mb-0">
                  For general enquiries:<br />
                  <a href="mailto:support@expertbid.com" className="fw-bold text-dark text-decoration-none">
                    support@expertbid.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4">
				  <div className="card h-100 border-0 shadow-sm text-center p-4">
				    <i className="fas fa-phone-alt fa-2x text-primary mb-3"></i>
				    <h5 className="fw-semibold mb-3">Phone</h5>
				    <div className="d-flex align-items-center justify-content-center mb-2">
				      <img src="https://flagcdn.com/w40/us.png" alt="US" className="me-2" style={{ width: '24px' }} />
				      <span className="text-dark fw-medium">+1 818-787-3393</span>
				    </div>
				    <div className="d-flex align-items-center justify-content-center mb-2">
				      <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="me-2" style={{ width: '24px' }} />
				      <span className="text-dark fw-medium">+971-XXX-XXXX</span>
				    </div>
				    <div className="d-flex align-items-center justify-content-center">
				      <img src="https://flagcdn.com/w40/pk.png" alt="PK" className="me-2" style={{ width: '24px' }} />
				      <span className="text-dark fw-medium">+92-XXX-XXXXXXX</span>
				    </div>
				  </div>
				</div>


            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                <h5 className="fw-semibold mb-2">Offices</h5>
                <p className="mb-1">Dubai, UAE</p>
                <p className="mb-0">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Help With Section */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm p-4">
                <h5 className="mb-3 text-primary fw-semibold">
                  <i className="fas fa-question-circle me-2"></i>Need Help With?
                </h5>
                <ul className="list-unstyled mb-0 fs-6">
                  <li className="mb-2">
                    <i className="fas fa-home text-success me-2"></i>
                    Listing or managing your property
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-user-check text-success me-2"></i>
                    Bidding or account verification
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-lock text-success me-2"></i>
                    Escrow payments or transaction updates
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-tools text-success me-2"></i>
                    Technical issues or login assistance
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-handshake text-success me-2"></i>
                    Business partnerships or onboarding
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enquiry Heading */}
          <div className="text-center mt-5">
            <h4 className="fw-bold">
              <i className="fas fa-pen-square text-primary me-2"></i>Enquiry Form
            </h4>
            <p className="text-secondary">
              Prefer to write to us directly? Use the form below and we’ll respond within 1 working day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-5">
        <div className="container">
          <ContactForm />
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Contact;
