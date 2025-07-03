import React, { useState } from "react";
import axios from "axios";
import SuccessPopup from "@/components/SuccessPopup";
import ErrorPopup from "@/components/ErrorPopup";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Popup state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successPopupMessage, setSuccessPopupMessage] = useState("");
  const [successPopupSubMessage, setSuccessPopupSubMessage] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorPopupMessage, setErrorPopupMessage] = useState("");
  const [errorPopupSubMessage, setErrorPopupSubMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email.";
    }
    if (!formData.subject.trim()) formErrors.subject = "Subject is required.";
    if (!formData.message.trim()) formErrors.message = "Message is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (!validate()) return;

    setShowSuccessPopup(false);
    setShowErrorPopup(false);

    try {
      const response = await axios.post(
        "https://admin.xpertbid.com/api/contact",
        formData
      );
      setSuccessPopupMessage(response.data.message || "Message sent successfully!");
      setSuccessPopupSubMessage("We'll get back to you soon.");
      setShowSuccessPopup(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const combinedErrors = Object.values(error.response.data.errors)
          .flat()
          .join(" ");
        setErrorPopupMessage(combinedErrors);
        setErrorPopupSubMessage("");
      } else {
        setErrorPopupMessage("Something went wrong. Please try again.");
        setErrorPopupSubMessage("");
      }
      setShowErrorPopup(true);
    }
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <section
            className="py-5"
            style={{
              backgroundColor: "#C3E1F3",
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          >
            <div className="container">
              <div className="row align-items-start">
                <div className="col-md-6 contact-section mb-5">
                  <h2 className="main-heading-about mb-4">Contact Us</h2>
                  <div className="help-info mt-4 p-3 rounded shadow-sm bg-white">
                    <h5 className="fw-bold mb-3">Need Help With?</h5>
                    <ul className="mb-2">
                      <li>Listing or managing your property</li>
                      <li>Bidding or account verification</li>
                      <li>Escrow payments or transaction updates</li>
                      <li>Technical issues or login assistance</li>
                      <li>Business partnerships or onboarding</li>
                    </ul>
                    <p className="text-muted mb-0">
                      Just send us a message — we&apos;ll get back to you within 1 working day.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ms-md-auto contact-form shadow-lg">
                    <h2 className="fw-bolder my-4">Fill up form</h2>
                    {/* Popups */}
                    {showSuccessPopup && (
                      <SuccessPopup
                        isOpen={showSuccessPopup}
                        onClose={() => setShowSuccessPopup(false)}
                        message={successPopupMessage}
                        subMessage={successPopupSubMessage}
                      />
                    )}
                    {showErrorPopup && (
                      <ErrorPopup
                        isOpen={showErrorPopup}
                        onClose={() => setShowErrorPopup(false)}
                        message={errorPopupMessage}
                        subMessage={errorPopupSubMessage}
                      />
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                      <div>
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="ps-4"
                          required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                      </div>
                      <div>
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="ps-4"
                          required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </div>
                      <div>
                        <label>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="ps-4"
                          required
                        />
                        {errors.subject && <p className="error">{errors.subject}</p>}
                      </div>
                      <div>
                        <label>Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="ps-4"
                          required
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                      </div>
                      <div className="text-center mt-3">
                        <button type="submit" className="py-4">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Second duplicate form removed, if you want a second form, you can copy safely */}
    </>
  );
};

export default ContactForm;
