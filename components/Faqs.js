import { Accordion } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FaqsPage() {
  return (
    <>
      <Header />

      {/* FAQs Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#C7E6F8",
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="lead text-center mb-5">
            Everything You Need to Know Before You List, Bid, or Buy
          </p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Selling on XpertBid</Accordion.Header>
              <Accordion.Body>
                <strong>What can I list on XpertBid?</strong>
                <p>Properties, vehicles, equipment, and more.</p>
                <strong>Is there a listing fee?</strong>
                <p>Listing is free, commission only on successful sale.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Buying & Bidding</Accordion.Header>
              <Accordion.Body>
                <strong>How do I start bidding?</strong>
                <p>Register, verify, and place a refundable deposit.</p>
                <strong>Are there hidden fees?</strong>
                <p>No hidden fees. Transparent pricing.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Escrow & Security</Accordion.Header>
              <Accordion.Body>
                <strong>How does escrow work?</strong>
                <p>Funds are held securely until both parties confirm handover.</p>
                <strong>Is my data safe?</strong>
                <p>All data is encrypted and securely stored.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      {/* Buyer Protection Summary Section */}
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container py-5">
          <h3 className="fw-bold text-center mb-4">Buyer Protection Summary</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-3 shadow-sm rounded bg-white h-100">
                <i className="fa fa-store fa-2x text-primary mb-2"></i>
                <h5 className="fw-semibold mb-2">Selling on XpertBid</h5>
                <ul className="list-unstyled mb-0 text-secondary small">
                  <li>✅ List properties, vehicles, equipment</li>
                  <li>✅ Reserve price option</li>
                  <li>✅ Listing is free</li>
                  <li>✅ Escrow protects payments</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 shadow-sm rounded bg-white h-100">
                <i className="fa fa-shopping-cart fa-2x text-primary mb-2"></i>
                <h5 className="fw-semibold mb-2">Buying & Bidding</h5>
                <ul className="list-unstyled mb-0 text-secondary small">
                  <li>✅ Refundable deposits</li>
                  <li>✅ Funds held till handover</li>
                  <li>✅ No hidden fees</li>
                  <li>✅ Dispute support</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 shadow-sm rounded bg-white h-100">
                <i className="fa fa-shield-alt fa-2x text-primary mb-2"></i>
                <h5 className="fw-semibold mb-2">Escrow & Security</h5>
                <ul className="list-unstyled mb-0 text-secondary small">
                  <li>✅ KYC verification</li>
                  <li>✅ Secure data storage</li>
                  <li>✅ Listing review</li>
                  <li>✅ Transparent bidding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
