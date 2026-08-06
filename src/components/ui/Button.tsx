import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-[10px] px-[26px] py-[14px] rounded-[12px] font-semibold text-[0.95rem] no-underline cursor-pointer border border-[#232c40] text-[#e8ecf3] transition-all duration-[250ms] ease-[ease] self-center`;

  return (
    <button
      className={twMerge(baseClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
}