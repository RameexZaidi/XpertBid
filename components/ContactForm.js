import React, { useState } from "react";
import axios from "axios";

import SuccessPopup from "@/components/SuccessPopup"; // adjust the path as needed
import ErrorPopup from "@/components/ErrorPopup"; // adjust the path as needed
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

    // We'll remove inline successMessage and instead use popups:
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successPopupMessage, setSuccessPopupMessage] = useState("");
  const [successPopupSubMessage, setSuccessPopupSubMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successPopupMessage, setSuccessPopupMessage] = useState("");
  const [successPopupSubMessage, setSuccessPopupSubMessage] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorPopupMessage, setErrorPopupMessage] = useState("");
  const [errorPopupSubMessage, setErrorPopupSubMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear previous error for that field
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    // Clear previous popups
    if (!validate()) return;

    setShowSuccessPopup(false);
    setShowErrorPopup(false);

    try {

      const response = await axios.post(
        "https://admin.xpertbid.com/api/contact",
        formData
      );
      // On success, trigger the success popup.
      setSuccessPopupMessage(response.data.message || "Message sent successfully!");
      setSuccessPopupSubMessage(""); // Customize if needed
      setShowSuccessPopup(true);
      // Clear the form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Combine validation errors into a single message
        const combinedErrors = Object.values(error.response.data.errors)
          .flat()
          .join(" ");
        setErrorPopupMessage(combinedErrors);
        setErrorPopupSubMessage("");
      } else {
        setErrorPopupMessage("Something went wrong. Please try again.");
        setErrorPopupSubMessage("");
      const response = await axios.post("https://admin.xpertbid.com/api/contact", formData);
      setSuccessPopupMessage(response.data.message || "Message sent successfully!");
      setSuccessPopupSubMessage("We'll get back to you soon.");
      setShowSuccessPopup(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const combinedErrors = Object.values(error.response.data.errors).flat().join(" ");
        setErrorPopupMessage(combinedErrors);
      } else {
        setErrorPopupMessage("Something went wrong. Please try again.");
      }
      setShowErrorPopup(true);
    }
  };

  return (

<div className="container py-4">
<div className="row">


<section
  className="py-5"
  style={{
    backgroundColor: "#C3E1F3",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
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
    <div className="ms-md-auto contact-form shadow-lg ">
      <h2 className="fw-bolder my-4">Fill up form</h2>
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <SuccessPopup
          isOpen={showSuccessPopup}
          onClose={() => setShowSuccessPopup(false)}
          message={successPopupMessage}
          subMessage={successPopupSubMessage}
        />
      )}
      
      {/* Error Popup */}
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
  <div className="text-center">
    <button type="submit" className="py-4">
      Send
    </button>
  </div>
</form>

    </div>
    </div>
      {/* yahan doosra col-md-6 ya form bhi dal sakte hain */}
    </div>
  </div>
</section>



</div></div>
    <div className="container py-5">
      <div className="col-lg-10 mx-auto p-5 rounded shadow bg-light border border-2 border-dark-subtle">
        <h2 className="text-center mb-4 text-dark fw-bold">💬 Get in Touch</h2>

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
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className={`form-control form-control-lg rounded-3 ${errors.name ? "is-invalid" : ""}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className={`form-control form-control-lg rounded-3 ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-12">
              <label className="form-label fw-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Write a subject"
                className={`form-control form-control-lg rounded-3 ${errors.subject ? "is-invalid" : ""}`}
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>

            <div className="col-md-12">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here..."
                className={`form-control form-control-lg rounded-3 ${errors.message ? "is-invalid" : ""}`}
                value={formData.message}
                onChange={handleChange}></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <div className="col-md-12 text-center mt-3">
              <button
                type="submit"
                className="btn btn-dark btn-lg px-5 py-2 fw-semibold rounded-pill shadow-sm"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
