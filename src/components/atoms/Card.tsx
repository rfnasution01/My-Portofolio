import { VariantProps } from "class-variance-authority";
import { cardVariants } from "../../libs/variants/card";

export interface CardProps
  extends Omit<React.ComponentProps<"div">, "color">,
    VariantProps<typeof cardVariants> {
  classes?: string;
}

export const Card = ({
  children,
  classes = "",
  variant,
  color,
  radius,
  hover,
  ...props
}: CardProps) => {
  return (
    <div
      className={`${cardVariants({
        variant,
        color,
        radius,
        hover,
      })} ${classes} h-full`}
      {...props}
    >
      {children}
    </div>
  );
};
