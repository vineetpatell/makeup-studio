# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File                     | URL                                                     |
| ------------------------ | ------------------------------------------------------- |
| `index.tsx`              | `/`                                                     |
| `about.tsx`              | `/about`                                                |
| `users/index.tsx`        | `/users`                                                |
| `users/$id.tsx`          | `/users/:id` (dynamic — bare `$`, no curly braces)      |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment)                  |
| `files/$.tsx`            | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx`            | layout route (renders children via `<Outlet />`)        |
| `academy/courses/route.tsx` | path prefix for the directory; `index.tsx` and `$slug.tsx` render through its `<Outlet />` |
| `__root.tsx`             | app shell — wraps every page; preserve `<Outlet />`     |

A nested directory such as `academy/courses/` needs its own `route.tsx` so the
generator has a declared parent to nest `index.tsx` and `$slug.tsx` under. Without
it the generated tree references an undeclared parent and the dynamic child 404s.

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
