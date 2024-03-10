import { ReactNode } from "react";
import { Card } from "../atoms/Card";

export function CardHelper({ children }: { children?: ReactNode }) {
  return (
    <Card variant="outlined" color="primary" radius="2xl" hover="primary">
      {children}
    </Card>
  );
}
