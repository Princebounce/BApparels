import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to BApparels, your one-stop destination for trendy and
              fashionable clothing. We are dedicated to providing high-quality
              products and exceptional shopping experiences to our customers.
            </p>
            <p>
              At BApparels, we believe that fashion is not just about clothing;
              it's a form of self-expression. Our curated collection features
              the latest styles and trends, carefully selected to cater to
              diverse tastes and preferences.
            </p>
            <p>
              We work closely with trusted suppliers and brands to ensure that
              our customers receive top-notch products that are both stylish and
              durable. Whether you're looking for casual wear, formal attire, or
              accessories to complete your look, we have something for everyone.
            </p>
            <p>
              Our team is passionate about fashion and strives to stay
              up-to-date with the latest industry trends. We are committed to
              providing excellent customer service and ensuring a seamless
              shopping experience from start to finish.
            </p>
            <p>
              Thank you for choosing BApparels. We value your trust and look
              forward to serving you with the best fashion options.
            </p>

            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
