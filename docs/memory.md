# Project Memory

## 2026-10-31 — Frontend architecture initialization

- Inspected the existing Vite + React + TypeScript project. The starter `App.tsx` was active; requested dependencies (React Router DOM, TanStack Query, Zustand, Axios, React Hook Form, Zod, and the Zod resolver) were already installed.
- Replaced the Vite starter screen with a routed application and a TanStack Query provider. Added the requested main website routes and the separate checkout route group, plus shared main and simplified checkout layouts.
- Added basic home/placeholder pages, responsive shared navigation with an always-visible cart link, and shared styles.
- Added an Axios API client configured by `VITE_API_BASE_URL` and documented its local default in `.env.example`.
- Added separate B2C and B2B checkout types, schemas, forms, customer type toggle, and a Zustand checkout store so only the selected customer form renders and submitted details persist across checkout routes.
- Kept B2B registration details account-sourced: its checkout UI is an explicit integration placeholder with continuation disabled until authenticated business profile data is available.
- Added `docs/architecture.md` to describe the current project structure and boundaries.
- No dependencies were installed. Existing product, cart, order, account, authentication, and service files were retained; most are currently empty placeholders and are not represented as completed functionality.
- Scope limitation: location detection/geocoding, business account authentication/profile loading, cart/order data, payment processing, receipt/invoice generation, and backend integration are not implemented. Payment and confirmation screens are architecture placeholders; the frontend is ready for those feature implementations.
- Verification: `npm.cmd run build` passed, including the TypeScript project build and Vite production bundle. `npm.cmd run lint` passed. The route table and layout nesting were reviewed against the requested route list. No separate browser-based route smoke test was run.

## 2026-10-31 — Feature-oriented folder structure

- Moved product/category, cart, and order page/service/hook/type/store placeholders into `src/features/catalog`, `src/features/cart`, and `src/features/orders`. Moved checkout shared types into `src/features/checkout/types`.
- Added dedicated hub, job, and contact page modules. Routed catalog and cart paths to feature-owned page modules and the main section routes to their dedicated page modules.
- Added the requested shared component, asset, and feature extension folders. Empty slots contain `.gitkeep` markers and are scaffolding, not implemented UI components.
- Rewrote `docs/architecture.md` to reflect the current directory structure, feature boundaries, and retained auth/account scaffolding.
- Verification: `npm.cmd run build` passed (TypeScript and Vite production bundle); `npm.cmd run lint` passed. A checkout type import surfaced after the move and was corrected before the successful build.

## 2026-10-31 — Router and shared layout foundation

- Moved the single `BrowserRouter` to `src/main.tsx` under `StrictMode`; `App.tsx` retains the TanStack Query provider and renders `AppRoutes` without creating another router.
- Updated `AppRoutes.tsx` to use centralized `routePaths` and nested main/checkout layouts for all requested storefront and checkout routes. Added a checkout index redirect to customer details and a main-layout not-found placeholder.
- Extracted reusable `Header`, `Navbar`, and `Footer` components under `src/components/layout`. The shared header includes all five primary links and an accessible cart icon link; `MainLayout` renders Header, Outlet, and Footer.
- Kept `CheckoutLayout` simplified with its own header and Outlet. The B2C/B2B toggle remains exclusive to customer details. Added a reusable `ProtectedRoute` guard that accepts authentication state and redirects when unauthenticated.
- Verification: `npm.cmd run build` and `npm.cmd run lint` passed. A temporary SSR route smoke check rendered all 13 requested paths and confirmed main header/footer versus checkout layout, plus no customer toggle on payment/confirmation. No permanent test file was added.
