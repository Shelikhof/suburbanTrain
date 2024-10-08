import React from "react";
import { cn } from "../utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn("text-white bg-purple-500 py-4 px-7 rounded-lg w-full hover:bg-purple-600 transition", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
