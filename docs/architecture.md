# Maendeleo Asilia Frontend Architecture

## System boundary

This repository is the customer-facing React frontend. It is built with Vite and TypeScript and is intended to communicate with a separate Next.js backend through REST APIs. API requests are centralized in `src/services/api/axios.ts`; the base URL is read from `VITE_API_BASE_URL` and defaults to `http://localhost:3000/api` for local development. No backend or database is part of this repository.

## Runtime flow

`src/main.tsx` loads shared CSS and mounts `App`. `src/App.tsx` provides the TanStack Query client for server state. `src/routes/AppRoutes.tsx` owns route composition and selects the appropriate layout. Main website routes render inside `MainLayout`; checkout routes render inside the simplified `CheckoutLayout`.

## Route map

| Route | Layout | Current page |
| --- | --- | --- |
| `/` | Main | Home |
| `/products`, `/products/:slug` | Main | Product placeholders |
| `/cart` | Main | Cart placeholder |
| `/hubs`, `/hubs/:slug` | Main | Hub placeholders |
| `/jobs`, `/jobs/:id`, `/jobs/:id/apply` | Main | Job placeholders |
| `/contacts` | Main | Contacts placeholder |
| `/checkout/customer-details` | Checkout | B2C/B2B customer details |
| `/checkout/payment` | Checkout | Payment methods placeholder |
| `/checkout/confirmation` | Checkout | Receipt/invoice placeholder |

`MainLayout` shares the site header and footer, including a cart link. Checkout keeps a focused header without the main site navigation. `src/routes/routePaths.ts` centralizes route path constants for subsequent navigation work.

## State and data

- **Server state:** TanStack Query is provided at the application root. Feature hooks should own queries/mutations and call service functions.
- **Client state:** Zustand is used for cross-route checkout selection/details. Existing cart/auth/UI stores are reserved for client-side state; they are not yet functional implementations.
- **Forms:** React Hook Form handles form state. Zod schemas are separate for B2C and B2B and are connected through `@hookform/resolvers`.
- **HTTP:** Feature service modules should use the shared Axios instance. UI components should not issue direct network requests.

## Checkout boundary and flow

The checkout flow is Catalogue → Cart → Customer Details → Payment → Order Confirmation. The customer details page presents the B2C/B2B toggle first and mounts only the selected customer experience. B2C currently captures full name, phone, and delivery location. B2B has an account details placeholder and an independent schema ready for account data; checkout does not ask the customer to re-enter registration details. Business sign-in/profile integration is not connected, so the B2B continue action is disabled until registered details can be loaded. B2C customer type/details are stored in `features/checkout/store/checkoutStore.ts` for later steps. Payment methods are reserved for mobile payment, card, and till. Confirmation is designed to present a B2C receipt or B2B invoice. Payment, account loading, geolocation/geocoding, and document generation require future API and feature work.

## Source tree

```text
src/
├── assets/                 # Static image, icon, and logo assets
├── components/             # Shared common and layout components
├── config/                 # Environment and app configuration
├── constants/              # Shared constants and route/API values
├── features/
│   └── checkout/
│       ├── components/     # Customer type, B2C, B2B, payment, confirmation UI
│       ├── hooks/           # Checkout-specific hooks (future)
│       ├── pages/           # Customer details, payment, confirmation
│       ├── schemas/         # Independent B2C and B2B Zod validation
│       ├── services/        # Checkout API operations (future)
│       ├── store/           # Checkout client state
│       └── types/           # Feature-local types (shared checkout types currently in src/types)
├── hooks/                  # Cross-feature hooks
├── layouts/                # Main and checkout shells
├── pages/                  # Main website pages and placeholders
├── routes/                 # Route table and route constants
├── services/               # API client and feature service modules
├── store/                  # Shared client-side Zustand stores
├── styles/                 # Reset, design variables, global styles
├── types/                  # Shared TypeScript domain types
└── utils/                  # Pure formatting, validation, and storage helpers
```

## Conventions

- Use TypeScript and functional React components.
- Keep page composition, reusable components, domain logic, schemas, state, and API calls in their appropriate layers.
- Use TanStack Query for remote/server state and Zustand for local shared state.
- Keep B2C and B2B validation and presentation independent; do not put the customer-type toggle on later checkout pages.
- Use relative imports until a path alias is deliberately configured.
- Avoid adding dependencies when existing packages cover the need.

## Existing and planned modules

Product, category, cart, order, payment, authentication, and account service/page files existed before this architecture setup. Their presence does not imply the corresponding features are implemented. Additional required folders for assets and feature-specific hooks/services/components can be populated as the associated features are built; empty directory placeholders are not tracked by Git.
