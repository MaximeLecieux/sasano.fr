import clsx from 'clsx';
import React from 'react';

interface Props {
    variant?: 
        "accent" 
        | "secondary" 
        | "icon"
    className?: string;
    children: React.ReactNode;
}

export const Button = ({
  variant = "accent",
  className,
  children,
}: Props) => {

  let variantStyle = "";

  switch (variant) {
    case "accent":
      variantStyle = "bg-primary-400 text-white";
      break;
    case "secondary":
      variantStyle = "bg-back-400"
      break;
    case "icon":
        variantStyle = "bg-back-400 rounded-full"
    default:
      variantStyle = "";
  }

  return (
    <button
      className={clsx(
        variantStyle,
        className,
        "py-[15px] px-[16px] rounded" // Styles par défaut
      )}
    >
      {children}
    </button>
  );
};
