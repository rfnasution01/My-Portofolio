import { cva } from "class-variance-authority";

const variants = {
  outlined: ["bg-background", "border"],
};

const colors = {
  black: ["text-black", "border-black"],
  gray: ["text-black", "border-border"],
  warning: ["text-warning", "border-warning"],
  success: ["text-success", "border-success"],
  general: ["text-general", "border-general"],
  primary: ["text-primary", "border-primary"],
};

const radius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

const hover = {
  general: ["hover:text-black", "hover:bg-background"],
  primary: ["hover:text-background", "hover:bg-primary"],
};

export type CardVariants = keyof typeof variants;
export type CardColors = keyof typeof colors;
export type CardRadius = keyof typeof radius;
export type CardHover = keyof typeof hover;

export const cardVariants = cva("p-24", {
  variants: {
    variant: variants,
    color: colors,
    hover: hover,
    radius,
  },
  defaultVariants: {
    variant: "outlined",
    color: "black",
    hover: "general",
    radius: "2xl",
  },
});
