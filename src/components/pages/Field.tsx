import type { ReactNode } from "react";

/** Labelled form field with hint and inline validation message. */
export function Field({
  label,
  htmlFor,
  required = false,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string | undefined;
  hint?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className={`pg-field${error ? " has-error" : ""}`}>
      <label className="pg-field-label" htmlFor={htmlFor}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="pg-field-hint">{hint}</p> : null}
      {error ? (
        <p className="pg-field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
