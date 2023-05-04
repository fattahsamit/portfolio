import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 bg-neutral text-neutral-content min-h-[50vh]">
      <section className="footer container mx-auto my-16">
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </div>
        <div>
          <span className="footer-title">Product</span>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">afaefaef</a>
          <a className="link link-hover">64366364</a>
        </div>
      </section>

      <p className="text-center pt-10">
        Copyright &copy; 2023 - All right reserved by{" "}
        <strong>Fattah Samit</strong>
      </p>
    </footer>
  );
};

export default Footer;
