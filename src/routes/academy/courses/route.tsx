import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/academy/courses")({
  component: CoursesLayout,
});

/** Path-prefix layout for the course routes; `index` and `$slug` render here. */
function CoursesLayout() {
  return <Outlet />;
}
