import React from "react";
import Button from "../buttons";

const Navbar = () => {
  const handleSignIn = () => {
    window.location.href =
      "https://trippin-travel-admin-ui-93ir-338wpktjf-m-nazhat-adiba.vercel.app/";
  };

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
        <Button action={handleSignIn} variant="secondary">
          Sign in
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
