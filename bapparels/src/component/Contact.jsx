import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mb-4">Have Some Questions?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src="/assets/contact.jpg"
            alt="Contact Us"
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="John Smith"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
