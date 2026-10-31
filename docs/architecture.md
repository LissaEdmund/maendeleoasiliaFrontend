# Maendeleo Asilia Frontend Architecture

## System boundary

This repository contains the customer-facing React frontend, built with Vite and TypeScript. It communicates with a separate Next.js backend through REST APIs. Requests use the shared Axios client in `src/services/api/axios.ts`; `VITE_API_BASE_URL` configures the backend and defaults to `http://localhost:3000/api`. No backend or database is part of this repository.

## Runtime and routing

`src/main.tsx` loads the reset, variables, and global styles, then mounts `App` inside React `StrictMode` and the single `BrowserRouter`. `src/App.tsx` provides TanStack Query for server state. `src/routes/AppRoutes.tsx` declares the route tree without creating another router. Public website routes use `MainLayout`, which composes the reusable `Header`, `Footer`, and an `Outlet`. `Header` composes the shared `Navbar` and an accessible cart icon link. Checkout routes use the simplified `CheckoutLayout` with its own header and `Outlet`, without the main website navigation or customer type toggle.

| Route | Layout | Page owner |
| --- | --- | --- |
| `/` | Main | `pages/home` |
| `/products`, `/products/:slug` | Main | `features/catalog/pages` |
| `/cart` | Main | `features/cart/pages` |
| `/hubs`, `/hubs/:slug` | Main | `pages/hubs` |
| `/jobs`, `/jobs/:id`, `/jobs/:id/apply` | Main | `pages/jobs` |
| `/contacts` | Main | `pages/contacts` |
| `/checkout/customer-details`, `/checkout/payment`, `/checkout/confirmation` | Checkout | `features/checkout/pages` |

`src/routes/routePaths.ts` centralizes route patterns. `ProtectedRoute` accepts authentication state and a redirect path for future account-only routes; none of the listed public storefront or checkout routes is currently guarded.

## State, forms, and API boundaries

- TanStack Query is for remote/server state. Feature hooks own queries and mutations and call service modules.
- Zustand is for shared client-side state. Checkout state lives in the checkout feature; cart state belongs to the cart feature. Shared auth/UI stores remain under `src/store` until those domains are moved into dedicated features.
- React Hook Form manages form state. Independent B2C and B2B Zod schemas live under `features/checkout/schemas` and use `@hookform/resolvers`.
- UI components do not make direct network requests. Feature service modules use the shared Axios instance.

## Feature boundaries

- **Catalog:** product and category pages, hooks, API services, and product/category types.
- **Cart:** cart page, hook, service, Zustand store, and cart types.
- **Checkout:** customer details, payment and confirmation pages; B2C/B2B forms; independent schemas; checkout store and types. The customer type toggle appears only on customer details. B2C currently captures name, phone, and delivery location. B2B account loading is a placeholder and does not request duplicate registration data; its continue action stays disabled until the registered business profile is connected. Mobile, card, and till payments and B2C receipt/B2B invoice outputs are future integrations.
- **Orders:** order pages, services, and types.
- **Website pages:** home, hubs, jobs, and contacts live under `src/pages`.

## Current folder structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logos/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Button/ Input/ Select/ SearchInput/ FilterBar/
│   │   │   ├── DataTable/ Pagination/ Modal/ Badge/ Tabs/ Dropdown/
│   │   │   └── DatePicker/ FileUpload/ EmptyState/ Loader/
│   │   └── layout/
│   │       └── Header/ Footer/ Navbar/ Container/
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   ├── CheckoutLayout.tsx
│   │   └── AuthLayout.tsx (reserved)
│   ├── pages/
│   │   ├── home/HomePage.tsx
│   │   ├── hubs/{HubsPage,HubDetailsPage}.tsx
│   │   ├── jobs/{JobsPage,JobDetailsPage,JobApplicationPage}.tsx
│   │   └── contacts/ContactsPage.tsx
│   ├── features/
│   │   ├── catalog/{pages,components,services,hooks,types}/
│   │   ├── cart/{pages,components,store,services,hooks,types}/
│   │   ├── checkout/
│   │   │   ├── pages/ components/b2c/ components/b2b/
│   │   │   ├── components/payment/ components/confirmation/
│   │   │   └── schemas/ services/ hooks/ store/ types/
│   │   └── orders/{pages,components,services,types}/
│   ├── routes/{AppRoutes.tsx,ProtectedRoute.tsx,routePaths.ts}
│   ├── services/api/axios.ts
│   ├── hooks/ types/ utils/ constants/ config/
│   ├── store/                 # Shared auth/UI state
│   ├── styles/{globals.css,variables.css,reset.css}
│   ├── App.tsx
│   └── main.tsx
├── .env
├── .env.example
├── package.json
└── vite.config.ts
```

Shared component and asset folders are scaffold slots; the reusable controls listed there are not implemented yet. `.gitkeep` markers preserve empty folders in version control. Authentication and account pages/services remain in their existing global folders because the requested tree does not assign them to a feature. Most legacy auth/account modules are empty placeholders.

## Conventions

- Use TypeScript and functional React components.
- Keep feature-specific pages, components, hooks, services, state, and types inside their feature boundary. Keep global site sections under `src/pages` and genuinely shared UI under `src/components`.
- Use TanStack Query for server state and Zustand for client state.
- Keep B2C and B2B presentation and validation independent; do not repeat the customer type toggle on payment or confirmation pages.
- Use relative imports until a path alias is configured.
- Prefer existing dependencies over adding new ones.

## Implementation status

The route/layout structure, main navigation, checkout type toggle, B2C form/schema, B2B account placeholder, checkout client state, and centralized API client are present. Catalog, cart, orders, hubs, jobs, and contacts are architecture placeholders. Location detection/geocoding, business authentication/profile loading, cart/order data, payment processing, receipt/invoice generation, and backend integration remain future work.
