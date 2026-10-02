import type { ReactNode } from "react";

/** Editorial H2 used across the inner pages. */
export function EditorialHeading({
  children,
  id,
  size = "lg",
  className,
}: {
  children: ReactNode;
  id?: string;
  size?: "xl" | "lg" | "sm";
  className?: string;
}) {
  return (
    <h2 id={id} className={`pg-heading is-${size}${className ? ` ${className}` : ""}`}>
      {children}
    </h2>
  );
}
