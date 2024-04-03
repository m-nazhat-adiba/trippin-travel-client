import React from "react";
import Button from "../buttons";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between py-4 items-center">
      <div>
        <h1 className="text-xl text-white">TRIPPIN</h1>
      </div>
      <div className="flex gap-1 w-fit">
        <Button variant="link">Home</Button>
        <Button variant="link">Travel</Button>
        <Button variant="link">Contact Us</Button>
        <Button variant="link">About Us</Button>
      </div>
      <div className="flex w-32">
        <Button variant="secondary">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
