import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/utils";

const inputVariants = cva("peer transition-all px-5 pt-[30px] pb-3 h-[60px] w-full rounded-lg outline-none", {
  variants: {
    variant: {
      default: "border-purple-100 bg-purple-100 focus:bg-white border focus:border-black",
      secondary: "border border-gray-500",
    },
  },
});

const placeholderVariants = cva(
  "absolute pointer-events-none transition-all left-5 top-3 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-black",
  {
    variants: {
      variant: {
        default: " text-black ",
        secondary: "font-semibold",
      },
    },
  }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: VariantProps<typeof inputVariants>["variant"];
}

const Input: React.FC<InputProps> = ({ className, placeholder, variant = "default", ...props }) => {
  return (
    <div className="relative">
      <input type="text" className={cn(inputVariants({ variant }), className)} placeholder="" {...props} />
      <span className={cn(placeholderVariants({ variant }))}>{placeholder}</span>
    </div>
  );
};

export default Input;
