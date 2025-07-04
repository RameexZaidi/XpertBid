import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="py-5 text-white" style={{ background: '#43ACE9' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold mb-3">Let’s Talk</h1>
              <p className="fs-5">
                Whether you need help listing a property, bidding, or general assistance — we’re here for you.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <Image
                src="/assets/images/about_main.png"
                alt="Support Image"
                width={500}
                height={350}
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Full Width */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white rounded-4 shadow p-5">
                <h2 className="fw-bold text-dark mb-4 text-center">📨 Get in Touch</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Topics as Cards */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="text-center fw-bold text-dark mb-5">How Can We Assist You?</h3>
          <div className="row g-4">
            {[{
              icon: 'fa-home',
              title: 'Listing or managing your property'
            }, {
              icon: 'fa-user-check',
              title: 'Bidding or account verification'
            }, {
              icon: 'fa-handshake',
              title: 'Escrow payments or transaction updates'
            }, {
              icon: 'fa-cogs',
              title: 'Technical issues or login assistance'
            }, {
              icon: 'fa-briefcase',
              title: 'Business partnerships or onboarding'
            }].map((item, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm p-4">
                  <i className={`fas ${item.icon} fa-2x mb-3`} style={{ color: '#43ACE9' }}></i>
                  <h5 className="fw-semibold text-dark">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5 bg-light border-top">
        <div className="container">
          <div className="row g-4 text-center">
            {[{
              icon: 'fa-envelope',
              title: 'Email Us',
              desc: 'support@xpertbid.com',
              link: 'mailto:support@xpertbid.com'
            }, {
              icon: 'fa-phone-alt',
              title: 'Call Us',
              desc: ['🇺🇸 +1 818-787-3393', '🇦🇪 +971-XXX-XXXX', '🇵🇰 +92-XXX-XXXXXXX']
            }, {
              icon: 'fa-map-marker-alt',
              title: 'Visit Us',
              desc: ['Dubai, UAE', 'Karachi, Pakistan']
            }].map((info, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100 p-4">
                  <i className={`fas ${info.icon} fa-2x mb-3`} style={{ color: '#43ACE9' }}></i>
                  <h5 className="fw-semibold mb-2">{info.title}</h5>
                  {Array.isArray(info.desc) ? (
                    info.desc.map((line, idx) => <p className="mb-1" key={idx}>{line}</p>)
                  ) : (
                    <p className="mb-0">
                      <a href={info.link} className="text-decoration-none text-dark fw-medium">{info.desc}</a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
