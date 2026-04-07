"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ type = "text", className = "", ...props }: InputProps) { 
  const[showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      <input
        {...props}
        type={isPassword && showPassword ? "text" : type}
        className={`flex h-[54px] w-full flex-[1_0_0] items-center rounded-[8px] border border-solid border-[rgba(145,158,171,0.2)] bg-white px-[14px] py-[16px] ${
          isPassword ? "pr-[44px]" : ""
        } text-[14px] font-normal leading-[22px] text-[#212b36] placeholder:text-[#919eab] focus:border-[rgba(145,158,171,0.5)] focus:outline-none ${className}`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[14px] text-[#637381] hover:text-[#212b36]"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}
