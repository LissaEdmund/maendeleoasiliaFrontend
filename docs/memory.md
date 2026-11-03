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

## 2026-11-01 — Footer contact details and utility links

- Updated the shared footer with the company location, phone number, and email from the supplied reference image. Phone and email are actionable `tel:` and `mailto:` links; contact icons use Lucide React per `docs/DESIGN.md`.
- Set the footer logo tile background to white and replaced the former bottom-row contact link with Privacy Policy, Terms & Conditions, and Admin Login links.
- Added `/privacy-policy`, `/terms-and-conditions`, and `/admin/login` routes using the existing placeholder page because policy copy and an admin authentication flow are not implemented.
- Changed the “Tanzania agro-industrial ecosystem” brand subtitle and “Regional hubs” heading to the design system secondary green (`#416422`, `var(--green-700)`).
- Changed the shared footer background to black (`#000`).

## 2026-11-02 — About Us section and route

- Added an About Us overview below the home hero and a dedicated `/about-us` page that reuses the same content.
- Added About Us immediately after Home in the shared navbar, included it in footer quick navigation, and registered its path centrally in `routePaths`.
- Updated architecture and design documentation for the route, page structure, navigation order, and homepage section. About content stays within the project’s documented focus on processing at source, local production, and rural opportunity.
- Verification: `npm run build` and `npm run lint` passed. Browser checks confirmed desktop link order, the `/about-us` route, tablet menu navigation/closing, and no horizontal overflow at mobile width.
- Refined the About Us section to use the Home page canvas, a prominent “Who We Are” heading, smaller supporting subheading, highlighted catchphrase, and centered company narrative above side-by-side Vision and Mission panels on desktop (stacked on mobile).

## 2026-11-02 — Complete About Us page

- Expanded `/about-us` into six ordered, focused sections: Who We Are, Core Belief, Problem, Value Creation, Vision & Mission, and Impact. The page ends after Impact so the shared footer follows directly, with no closing CTA.
- Kept the Who We Are introduction reusable below the homepage hero. Added dedicated section components under `src/pages/about/components` and centralized image imports/alt text in `aboutImages.ts`.
- Inspected all local image assets before use. Used `farmers1.png` for the introduction, `farmers2.png` for the problem section, `factory1.jpg` for value creation, and `farmers3.png`, `factory2.png`, `factory3.png`, and `factory4.png` for the four impact items. The value-addition image shows bottled cooking oil on a production line; there is no separate standalone product image in the current assets.
- Used the existing Lucide React dependency and CSS design tokens; added responsive image/grid layouts and the specified dark gradient Core Belief section.
- Matched the Value Creation section's horizontal padding to the other sections, adapted the shared footer to two columns at tablet widths, and removed the 320px root minimum so narrow viewports with a classic scrollbar do not gain horizontal overflow.
- Corrected the architecture tree to list `aboutImages.ts` with its actual extension.
- Verification: production build and lint passed. Browser checks at 320, 390, 768, 960, 1024, and 1440px found no horizontal overflow; all seven local images decoded successfully, all six sections appeared in order, and the footer followed Impact with no closing CTA. Reload produced no browser console errors.
- Fixed About Us navigation retaining the previous route's scroll offset: opening `/about-us` now resets the viewport to the top so the complete six-section page starts at Section 01.
- Updated the About Us implementation to match the clarified page structure: the Home hero remains unchanged, followed by all six About sections; `/about-us` renders the same six sections. Both routes use the shared `AboutUsContent` composition, and the architecture/design documentation now describes this behavior.
- Verification: `npm run build`, `npm run lint`, and `git diff --check` passed. Browser checks confirmed the Home hero remains on `/`, both routes show all six About sections in order, the shared footer follows, and the 390px Home page has no horizontal overflow.

## 2026-11-03 — Product catalog and cart

- Implemented the `/products` design with search, regional-hub selection, category and in-stock filters, sorting, responsive product cards, hover/focus origin details, and a product-detail dialog with traceability and quantity controls. `/products/:slug` reuses the same detail view.
- Added three screenshot-derived products and mapped their card/detail imagery to the supplied `pdt-*` assets. Their prices, ratings, stock, origins, and descriptions are sample content for design review; the catalog is not connected to a product API and these values are not verified inventory or claims.
- Implemented client-side cart add/update/remove behavior and local-storage persistence under `maendeleo-cart`; this is not backend cart/order integration.
- Updated the architecture and design documentation to describe the implementation and its data boundary.
- Verification: `npm run build`, `npm run lint`, and `git diff --check` passed. Browser smoke checks confirmed the products page renders and all three mapped product images load without horizontal overflow at the observed 600px viewport.
