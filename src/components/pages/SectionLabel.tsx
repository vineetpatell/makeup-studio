import type { ReactNode } from "react";

/** Small editorial section label with an optional chapter number. */
export function SectionLabel({
  children,
  number,
  className,
}: {
  children: ReactNode;
  number?: string;
  className?: string;
}) {
  return (
    <p className={`pg-label${className ? ` ${className}` : ""}`}>
      {number ? <span className="pg-label-number">{number}</span> : null}
      <span>{children}</span>
    </p>
  );
}
