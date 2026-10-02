import { Link } from "@tanstack/react-router";
import type { StaticPath } from "@/data/studio";

export type Crumb = { label: string; to?: StaticPath };

/** Accessible breadcrumb trail for the inner pages. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="pg-breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${crumb.label}-${index}`}>
              {!isLast && crumb.to ? (
                <Link to={crumb.to}>{crumb.label}</Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
              )}
              {!isLast ? <i aria-hidden="true">/</i> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
