import clsx from 'clsx';
import React from 'react';
import { IconBaseProps } from 'react-icons';

interface Props {
    variant?: 
        "accent" 
        | "secondary" 
        | "icon"
    icon?: React.ComponentType<IconBaseProps>
    className?: string;
    children?: React.ReactNode;
}

export const Button = ({
  variant = "accent",
  icon: Icon,
  className,
  children,
}: Props) => {

  let variantStyle = "";

  switch (variant) {
    case "accent":
      variantStyle = "bg-primary-400 text-white hover:bg-secondary";
      break;
    case "secondary":
      variantStyle = "bg-back-400 hover:bg-back"
      break;
    case "icon":
        variantStyle = "bg-back-400 rounded-full hover:bg-back"
  }

  return (
    <button
      className={clsx(
        variantStyle,
        className,
        "py-[15px] px-[16px] rounded" // Styles par défaut
      )}
    >
      {Icon && <Icon className='text-xl' />}
      {children && variant !== "icon" && children}
    </button>
  );
};
