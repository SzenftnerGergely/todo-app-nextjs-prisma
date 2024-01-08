"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  stye?: string
}

const Button = ({ type, text, onClick, actionButton, stye }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
          `${stye} hover:cursor-pointer hover:bg-slate-300 p-2 rounded-full transition-all`
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
