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
