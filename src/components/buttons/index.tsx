import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "link";
  action?: any;
}

const VARIANTS = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-white text-blue-500",
  link: "text-white",
};

const Button = ({ children, variant, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`p-2 rounded-full w-full items-center whitespace-nowrap text-base ${VARIANTS[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
