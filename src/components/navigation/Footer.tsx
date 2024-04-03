import React from "react";
import Button from "../buttons";

const Footer = () => {
  return (
    <div className="flex flex-col my-10 md:flex-row md:justify-between gap-12 xl:gap-32">
      <div className="flex flex-col md:w-[25%]">
        <h1 className="text-4xl font-medium">TRIPPIN</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 md:w-[60%] gap-10 md:gap-16 md:pl-8">
        <div className="flex flex-col">
          <p className="font-medium text-lg pb-4">Menu</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Countries</a>
            </li>
            <li>
              <a>Review</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-lg pb-4">Company</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-lg pb-4">Privacy</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a>Privacy and Policy</a>
            </li>
            <li>
              <a>Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:w-[30%] items-center md:items-start">
        <p className="font-semibold text-base pb-5 text-center md:text-start">
          Get in touch with us. We'd love to hear from you.
        </p>
        <Button variant="primary">Sign Up</Button>
      </div>
    </div>
  );
};

export default Footer;
