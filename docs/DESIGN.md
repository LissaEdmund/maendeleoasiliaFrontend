# Maendeleo Asilia — Design System & UI/UX Guidelines

**Project:** Maendeleo Asilia Ltd  
**Document:** Frontend Design Specification  
**Purpose:** Authoritative visual design and user experience implementation guide.

Maendeleo Asilia is a Tanzania-focused agro-industrial e-commerce and manufacturing ecosystem connecting farmers, regional processing hubs, businesses, and consumers. The interface must communicate agricultural transformation, industrial development, local manufacturing, farmer empowerment, economic independence, professionalism, and commercial credibility. It should feel like a modern agro-industrial enterprise, not a conventional agricultural information website.

## 1. Scope and design authority

This document governs frontend design decisions. Use the specifications here as the shared source of truth; do not independently invent new brand colours, type scales, layout rules, component states, or workflows. Preserve valid established requirements; where a detail is not specified, extend existing patterns conservatively. Do not create business workflows or capabilities as a design assumption. More specific established product requirements (including the separate B2C and B2B checkout experiences) remain in force.

## 2. Document identity and brand intent

**Project:** Maendeleo Asilia Ltd  
**Document:** Frontend Design Specification  
**Purpose:** Authoritative visual design and user experience implementation guide.

Maendeleo Asilia is a Tanzania-focused agro-industrial e-commerce and manufacturing ecosystem connecting farmers, regional processing hubs, businesses, and consumers. The interface must communicate agricultural transformation, industrial development, local manufacturing, farmer empowerment, economic independence, professionalism, and commercial credibility. It should feel like a modern agro-industrial enterprise, not a conventional agricultural information website.

## 3. Mandatory brand colour system

The three foundational colours are fixed. White is dominant, #F5F5F5 is the general page background, and green is a strategic action colour. Use green to direct attention, not as a page-wide decorative fill. Form cards must be white against the #F5F5F5 page background. Do not add brand colours without approval.

| Colour | HEX | Purpose |
|---|---|---|
| Primary | `#FFFFFF` | Cards, forms, content surfaces, and navigation backgrounds; dominant brand surface |
| Secondary | `#416422` | Primary buttons, selected/active interactive elements, important links, and restrained hover emphasis |
| Tertiary | `#F5F5F5` | General page and quiet section backgrounds |

Supporting and semantic colours are functional tokens. They do not replace or expand the foundational brand palette.

| Token | HEX | Use |
|---|---|---|
| Primary Text | `#1A1A1A` | Headings and high-priority body copy on light surfaces |
| Secondary Text | `#666666` | Paragraphs, descriptions, and supporting labels |
| Muted Text | `#888888` | Captions, hints, metadata, and low-emphasis text; never for essential instructions that become hard to read |
| Border | `#E5E5E5` | Dividers, field borders, card outlines, and quiet structural separation |
| Deep Green | `#304B19` | Pressed/strong brand emphasis and text/icon emphasis where contrast is sufficient |
| Light Green | `#EEF3E8` | Subtle selected surfaces or quiet brand-tinted notices; not a replacement for white form cards |
| Success | `#15803D` | Confirmed success states, paired with a label or icon |
| Error | `#DC2626` | Validation errors and failed states, paired with explanatory text or an icon |
| Warning | `#D97706` | Caution states that need attention, paired with a label or icon |
| Information | `#2563EB` | Neutral informational status, paired with a label or icon |
| Disabled | `#A3A3A3` | Disabled control text/border/fill as appropriate; disabled states must also be conveyed semantically |

Check text/background contrast for every use. Do not rely on colour alone to convey status, selection, required fields, or errors.

## 4. Typography

Use **Inter** throughout, with this exact fallback stack: `Inter, "Segoe UI", sans-serif`. Load or bundle Inter consistently when implementing the design. Use tabular numerals for prices, quantities, dates, and order references where alignment helps scanning. Keep line lengths comfortable (roughly 65–75 characters for long-form copy) and use sentence case except for proper names and established acronyms.

| Role | Desktop size / weight / line height | Mobile size / weight / line height | Use |
|---|---|---|---|
| Hero heading | 56–72px / 700 / 1.08 | 36–44px / 700 / 1.12 | One primary message on a major landing section |
| Page heading | 40px / 700 / 1.15 | 32px / 700 / 1.18 | The page's single H1 |
| Section heading | 32px / 650 / 1.2 | 26px / 650 / 1.22 | Major content groups |
| Subheading | 24px / 600 / 1.25 | 20px / 600 / 1.3 | Supporting sections and form groups |
| Card heading | 18px / 600 / 1.3 | 18px / 600 / 1.3 | Product, hub, job, and content cards |
| Body text | 16px / 400 / 1.55 | 16px / 400 / 1.55 | Standard copy and form instructions |
| Caption | 13px / 400 / 1.4 | 12px / 400 / 1.4 | Metadata, hints, and secondary labels |
| Button text | 15px / 600 / 1.2 | 15px / 600 / 1.2 | Action labels; keep labels concise and verb-led |

Use the hierarchy semantically: one H1 per page, then ordered H2/H3 headings. Do not use font size alone to fake heading semantics. Use 400 for regular, 500 for medium, 600 for semibold, and 700 for bold; avoid decorative weights and all-caps paragraphs.

## 5. UX laws and implementation principles

### Fitts's Law

Make frequent and consequential actions easy to reach and activate. Interactive controls should generally have a **minimum 44 × 44px touch target** (WCAG 2.2 AA target-size guidance applies; use larger targets where practical). Keep Add to cart, quantity controls, checkout continuation, job application actions, and mobile navigation controls prominent and separated enough to avoid accidental activation. Make the cart reachable from every main website page. Do not make small icons the only target for important actions; pair them with a clear label when space permits.

### Hick's Law

Reduce decision time by showing a manageable set of relevant choices at each step. Use meaningful product categories and filters instead of exposing every catalogue option at once. Let users narrow hubs by useful region or content attributes only when those filters exist. In checkout, show the B2C/B2B choice at the top of Customer Details, then render only that customer's form. Keep payment methods grouped and legible without forcing unrelated choices into one crowded panel. Do not add workflow steps or business choices that have not been established.

### Chunking

Group related information into scannable units with clear headings. Product cards should separate image, name, essential price/unit information, and action. The cart should make each line item and its quantity/price relationship clear. Break application and customer forms into purposeful groups, preserving separate B2C and B2B information. Farmer partnership and manufacturing-hub information should use concise sections (for example, overview, location, and relevant details only where the product content provides them) rather than uninterrupted walls of text.

### Doherty Threshold

Aim to show visible interface feedback within **400ms** after a user action: pressed/selected state, spinner, skeleton, optimistic local quantity feedback, or an announced status. This is an interface-feedback target only. It does **not** require backend operations, searches, uploads, orders, or payment processing to finish within 400ms. Keep loading state visible for longer operations, prevent duplicate submissions, and explain recoverable failures. Never show payment or order success before the backend confirms it.

### Proximity Law

Place labels close to their fields, error messages next to the field they explain, and each action close to the content it affects. Keep product price with its product; keep cart quantity controls with the matching line item; keep a form's primary action at the end of that form. On B2C/B2B checkout, visually separate customer types and their distinct information so fields cannot be mistaken as one combined form. Use whitespace to make section relationships obvious.

### Von Restorff Effect

Use one clear visual focal point for each major section. Reserve the strong brand green for the primary action or selected item, while secondary and tertiary actions remain quieter. A featured product, manufacturing capability, or farmer partnership may receive emphasis when it is genuinely important to the user's task. Avoid highlighting many cards, buttons, badges, or banners at once; excessive emphasis removes the value of the important one.

## 6. Global layout system

- Use `#F5F5F5` for the general page canvas and `#FFFFFF` for cards, forms, navigation, and primary content surfaces.
- Center primary content and cap it at **1280px**. On wide screens, use consistent gutters rather than stretching text and forms edge to edge.
- Page horizontal padding: **24px mobile**, **32px tablet**, and **48px desktop**; large desktop may use up to **64px** while preserving the 1280px content cap.
- Use a 4px spacing base and the shared scale in the token example below. Align page titles, section edges, cards, and grid columns to consistent content boundaries.
- Use flexible grids that reduce columns at breakpoints. Keep form cards at a readable width; do not expand checkout fields across an entire desktop viewport.
- Use white surfaces with a thin `#E5E5E5` border or a restrained shadow for separation. Avoid heavy borders and layered panels that compete with the content.
- Prevent horizontal overflow, including from tables, media, filter chips, and navigation. Prefer wrapping, responsive layouts, or a clearly contained horizontal scroller where the content requires it.

## 7. Navbar design

The shared navbar contains the company logo/name and links for **Home, About Us, Products, Hubs, Jobs, Contacts**, plus **shopping cart** and **account/profile** access. About Us follows Home and links to `/about-us`. Use existing routes or account capabilities when available; this specification does not establish a new account workflow or route. The cart count reflects the current cart state and updates when that state changes; hide the count when it is zero unless an explicit empty-cart design calls for it. Provide an accessible name for icon-only cart/account controls.

Use a white background or translucent white (`rgba(255, 255, 255, 0.92)`) with a subtle backdrop blur where supported. The opaque white fallback must retain clear text and separation when `backdrop-filter` is unsupported. Use `#416422` for the active link and restrained hover/focus feedback. Keep the company identity, nav items, cart, and account affordance aligned on desktop.

At mobile widths, replace the full link row with a clearly labelled hamburger/menu button and an accessible menu that exposes the same primary destinations and cart/account access. The menu must open/close with keyboard and pointer input, close after navigation, preserve focus sensibly, and expose expanded state. Animate state changes briefly without delaying interaction. Do not let the cart become hidden behind an unreachable overflow region.

## 8. Reusable component specifications

All controls use the shared tokens, keyboard states, and consistent geometry. Provide visible hover, focus-visible, active/pressed, disabled, loading, and error states whenever those states apply.

### Buttons

- **Primary:** one main action per section/card/form. Use `#416422` fill, white label/icon, minimum 44px height (48px preferred for form actions), 16–24px horizontal padding, 8px radius, and 15px semibold text. Hover/pressed may move to `#304B19`; keep focus clearly outlined. Disabled uses the Disabled token and cannot submit. Loading keeps its label or an accessible status and prevents duplicate activation.
- **Secondary:** white or transparent surface, `#416422` text, and a `#416422` or `#E5E5E5` border as appropriate. Match primary height and radius. Hover may use `#EEF3E8`.
- **Tertiary:** text or subtle surface action for low-priority tasks. Use primary/secondary text and a visible focus outline; maintain the same 44px target even when the visual label is compact.
- Labels are short, specific verbs (“Add to cart”, “Continue to payment”). Do not use ambiguous labels such as “Submit” when a clearer action is known.

### Inputs and forms

Use full-width fields inside their form column, with a white background, `#E5E5E5` 1px border, 8px radius, 12px horizontal padding, and a 44px minimum height (48px preferred). Labels sit above fields and remain visible when filled. Use `#1A1A1A` for labels, `#666666` for hints, and a 2px visible focus treatment using the brand green. Error state uses the Error token, a concise message adjacent to the field, and programmatic association; do not indicate errors by border colour alone. Disabled/read-only fields must be distinguishable and correctly exposed to assistive technology.

Form cards always use white surfaces over `#F5F5F5`, 24–32px padding, a subtle border, and 12px radius. On mobile use 16–20px padding. Keep required/optional status clear, preserve entered values after validation failures, and place submission feedback near the action.

### General cards

Use white surface, 1px Border outline, 12px radius, and 20–24px padding. Align repeated cards consistently. Product cards prioritize image, product name, price/unit, and Add to cart; hub cards prioritize identity/location and meaningful industrial imagery; job cards prioritize role, location, and application action. Hover elevation is subtle and only used when the card is interactive. Focus the linked/actionable area clearly. Do not make an entire card clickable if it contains conflicting nested controls.

### Modals

Use a white dialog surface with 12px radius and restrained shadow, a clear title, concise content, and explicit actions. Constrain width and height to the viewport with internal scrolling when needed. Provide a labelled dialog, move focus inside on open, keep keyboard focus contained, support Escape when safe, and return focus to the opener on close. Never close or erase entered form data unexpectedly.

### Tabs and filters

Tabs should communicate the selected state with a clear green indicator or selected surface and support the standard keyboard tab pattern. Use tabs only for peer content views; do not use them to hide required steps in a linear checkout. Filters should be compact, labelled, removable/resettable, and usable on touch screens. Show applied-filter state and a clear empty result state. On narrow screens, allow filters to wrap or open in an accessible filter panel instead of causing page overflow.

### Status badges

Use compact pill or softly rounded labels with readable text and an optional Lucide icon. Apply the matching semantic token, but always include a text label (e.g. “In stock”, “Processing”, “Failed”); colour alone is not status communication. Keep badges secondary to the card heading and primary action.

### Loading indicators and empty states

Use skeletons that match the shape of the expected content for initial page/data loading. Use a small spinner or inline progress state for a single action. Pair progress with understandable text for assistive technology and longer waits. Empty states should explain what is empty and provide a relevant next action when one exists (for example, continue browsing from an empty cart). Never present an empty state as an error unless the request failed.

## 9. Iconography

Use **Lucide React (`lucide-react`)** as the standard icon library. Do not introduce another icon set for routine UI. Use consistent 20px icons for standard controls, 16px in dense metadata, and 24px for prominent feature illustrations; align icons optically with text and use `currentColor`. Icons that add meaning need an accessible name or adjacent text. Decorative icons are hidden from assistive technology.

Recommended Lucide icons (choose the closest available named export in the installed version):

| Meaning | Recommended icon |
|---|---|
| Agriculture / growth | `Sprout`, `Wheat` |
| Farmer partnerships | `Handshake`, `UsersRound` |
| Manufacturing / processing | `Factory`, `Cog` |
| Vision and mission | `Eye`, `Target` |
| Products | `Package`, `Boxes` |
| Shopping cart | `ShoppingCart` |
| Jobs | `BriefcaseBusiness` |
| Location / hubs | `MapPin` |
| Contact | `ContactRound` |
| Email | `Mail` |
| Success / error | `CircleCheck`, `CircleX` |
| Search | `Search` |
| Account / profile | `UserRound` |

Do not use an icon without a text label for an unfamiliar action. Avoid emoji as interface icons.

## 10. Images and media

Use authentic, high-quality imagery that represents Tanzania's agricultural and industrial context respectfully: productive agricultural landscapes, farmers, rice cultivation/harvesting, sunflower farming, machinery, processing facilities, finished locally manufactured products, and youth participating in agro-industrial work. Prefer real working contexts, capable subjects, and visible production activity over generic stock imagery or staged stereotypes. Obtain appropriate usage rights and avoid imagery that implies a service or facility that is not actually represented.

- Use a consistent crop within repeated card sets: **4:3** for product/hub cards and **3:2** for editorial or job imagery. Hero media may use a wide **16:9** crop with a legible text-safe area.
- Supply responsive sizes and modern compressed formats where supported. Do not ship oversized originals for small cards. Reserve intrinsic dimensions or aspect ratio to prevent layout shift.
- Add meaningful alternative text when the image conveys information. Use `alt=""` for decorative imagery already explained by nearby text.
- Lazy-load below-the-fold images and provide dimensions, fallback, and loading behavior. Keep the primary hero poster eager/high priority when needed for fast first paint.
- The Home hero may use an optimized background video with autoplay, muted playback, looping, and inline playback. Always provide a visually appropriate poster fallback, use a video that does not contain essential text, and respect reduced-motion/data constraints by showing the static poster. Do not make controls or navigation illegible over video; use a restrained approved neutral overlay if needed.

## 11. Animation and micro-interactions

Use **Framer Motion** for restrained interface animation. Motion should confirm state, establish continuity, or guide attention—not decorate content. Keep common state feedback around **120–200ms**, menu/tab transitions around **160–240ms**, modal entry/exit around **180–260ms**, and section entrance motion brief and subtle. Do not delay an action until an animation completes.

- Buttons: slight colour/elevation response on hover and a small tap/pressed response; do not shift layout.
- Cards: small shadow/elevation increase on hover only when interactive.
- Navbar: short active/hover transitions; the mobile menu may slide/fade with opacity and a small translation.
- Modals: fade with a restrained scale/translate; preserve focus management independently of animation.
- Tabs: animate the active indicator or content opacity without obscuring the selected state.
- Sections: use brief opacity/low-distance entrance when it aids orientation; do not animate every card independently on every scroll.
- Loading: use subtle, non-flashing motion. Keep progress understandable if motion is disabled.

Respect `prefers-reduced-motion: reduce`: remove nonessential movement, parallax, and looping decorative motion; make state changes immediate or use minimal opacity changes. Avoid excessive animations and decorative movement that does not improve usability.

## 12. Approved frontend technologies and responsibilities

Use the following stack for frontend implementation. Keep responsibilities distinct and do not add alternatives without a clear need and justification.

### Core technologies

| Technology | Responsibility |
|---|---|
| React.js | Component-based UI development |
| Vite | Development server and production build |
| TypeScript | Type safety |
| CSS | Styling and responsive layouts |
| React Router DOM | Client-side routing |

### State management and data handling

| Technology | Responsibility |
|---|---|
| Zustand | Shared client-side state, including cart, quantities, customer type, and relevant checkout state |
| TanStack Query | Server state, API fetching, caching, and synchronization |
| React `useState` / `useReducer` | Local component state |
| Axios | Centralized HTTP communication with the separate backend |

Ownership rules: Zustand owns shared client-side state; TanStack Query owns server data; `useState`/`useReducer` own local component state. Do not copy server query data into Zustand. Persist only necessary client-side state, such as an explicitly required cart or checkout preference; do not persist sensitive payment credentials. Do not introduce another state-management library without justification.

### Form handling and validation

| Technology | Responsibility |
|---|---|
| React Hook Form | Form state and submission |
| Zod | Data validation |
| `@hookform/resolvers` | React Hook Form and Zod integration |

Keep B2C and B2B checkout forms, schemas, and customer information separate. Render only the selected customer's form on Customer Details; do not repeat customer type selection on Payment or Order Confirmation.

### UI and visual interaction

| Technology | Responsibility |
|---|---|
| Framer Motion | Animations and micro-interactions |
| Lucide React (`lucide-react`) | Iconography |

## 13. Component and CSS organization

- Put genuinely reusable application-wide controls and patterns under `src/components/shared/`; keep structural Header/Footer/Navbar/Container concerns under `src/components/layout/`.
- Keep page-specific UI near its page. Keep catalog, cart, checkout, and order components inside their feature folders. Do not promote a one-page component to shared solely to fill a directory.
- Shared visual elements must use the same tokens and component states. Do not duplicate buttons, fields, card patterns, or modal behavior with slightly different values across pages.
- Centralize design tokens in CSS custom properties (currently `src/styles/variables.css`) and global foundations in `src/styles/`. Use component-scoped styles or clearly named classes for component-specific presentation. Avoid scattered one-off hex values and duplicate token definitions.
- Define responsive styles at the shared breakpoints in Section 16; components may adapt internally but must not establish conflicting breakpoint systems.
- Use consistent names: PascalCase React component files/exports, camelCase hooks/functions, descriptive kebab-case CSS classes, and `--category-name` CSS variables. Prefer semantic HTML and composition over large page-specific style overrides.

Use this token foundation as the canonical CSS variable example (extend only with justified semantic tokens; do not redefine the same value under multiple names):

```css
:root {
  /* Foundational brand colours */
  --color-primary: #FFFFFF;
  --color-secondary: #416422;
  --color-tertiary: #F5F5F5;

  /* Supporting colours */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-muted: #888888;
  --color-border: #E5E5E5;
  --color-green-deep: #304B19;
  --color-green-light: #EEF3E8;
  --color-disabled: #A3A3A3;

  /* Semantic colours */
  --color-success: #15803D;
  --color-error: #DC2626;
  --color-warning: #D97706;
  --color-information: #2563EB;

  /* Typography */
  --font-sans: Inter, "Segoe UI", sans-serif;
  --text-hero: clamp(2.25rem, 5vw, 4.5rem);
  --text-page: 2.5rem;
  --text-section: 2rem;
  --text-body: 1rem;
  --line-body: 1.55;

  /* Layout and spacing: 4px base */
  --content-max: 80rem;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Shape and elevation */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-pill: 999px;
  --shadow-card: 0 2px 8px rgb(26 26 26 / 0.08);
  --shadow-modal: 0 12px 32px rgb(26 26 26 / 0.16);
}
```

## 14. Page-specific design application

| Page | Design direction |
|---|---|
| Home | Visual storytelling, company identity, and authentic agricultural/manufacturing imagery. Keep the existing hero message and primary next action, then render the complete six-section About Us content directly below the hero using the shared `#F5F5F5` page canvas. |
| About Us | Implement six sections in order: Who We Are, Core Belief, The Problem We Are Solving, How We Create Value, Our Vision & Mission, and Our Impact. Reuse this same complete section composition beneath the Home hero and on `/about-us`; do not replace or disturb the Home hero. Use local agricultural/factory assets only; keep image mappings centralized and provide descriptive alt text. The introduction has a centered title/subtitle and constrained copy with farmer imagery. Give Core Belief a full-width dark teal-to-charcoal gradient, gold label, and centered white statement. Use light-background problem cards and a light-green opportunity panel; show the three value stages in sequence; use balanced editorial Vision/Mission cards; finish with a two-column desktop impact grid. Stack grids responsively, preserve image aspect ratios, and end directly after Impact with the shared site footer—do not add a closing CTA. |
| Product | E-commerce catalogue with scannable product cards, useful filters, clear price/unit information, product detail hierarchy, and an always-accessible shopping cart. Show loading, empty, and error states distinctly. |
| Hubs | Regional browsing/filtering when supported by available data, processing-hub cards, location context, and industrial imagery. Keep hub facts easy to compare and avoid adding unsupported claims. |
| Jobs | Clear job opportunities and farmer partnership application workflows. Distinguish opportunity information from its application action; keep forms accessible and explain field errors beside the relevant input. |
| Contact | Structured contact information and accessible communication options. Group available channels clearly; do not invent contact details or promise unsupported response times. |

All pages use the same brand colours, typography, spacing, iconography, and interaction states. Vary imagery and content hierarchy to suit the page purpose without changing the underlying identity.

## 15. Checkout design

Use the established sequence: **Shopping Cart → Customer Details → Payment → Order Confirmation**. Show a simple progress indication when it helps users understand their place in the flow; use clear labels and a distinct current step. The checkout layout is quieter and more focused than the main website layout, but retains the company identity and an appropriate way back to the cart.

Customer Details begins with the B2C/B2B selection. Show only the relevant customer's fields and keep the two experiences and validation logically separate. Group related information into meaningful sections, keep the primary continuation action prominent, preserve input after validation errors, and provide clear validation/loading feedback. Do not collect duplicate business registration details during checkout when the established requirement is to use the registered business account. Do not invent further business requirements or payment steps.

Payment and Order Confirmation do not repeat the customer-type toggle. Display payment progress and order outcomes truthfully. **Never show payment or order success until the backend confirms successful processing.** On failure, retain safe context, explain the next available action, and do not imply an order was completed.

## 16. Responsive design

| Device | Width |
|---|---|
| Mobile | 0–639px |
| Tablet | 640–1023px |
| Desktop | 1024–1279px |
| Large Desktop | 1280px and above |

Adapt rather than shrink desktop layouts:

- **Navigation:** full horizontal navigation on suitable desktop widths; accessible hamburger menu on mobile and any width where links no longer fit without crowding.
- **Grids/cards:** use fewer columns as width decreases; keep card actions visible and card content readable. Avoid narrow multi-column product cards on phones.
- **Forms:** one column on mobile; preserve comfortable field height and label visibility. Wider forms may use columns only for closely related fields when there is room.
- **Images/video:** use responsive source sizes and intentional crops; keep focal subjects and text-safe areas visible. Static poster is the small-screen/reduced-motion fallback for hero video.
- **Buttons:** full width when it improves mobile clarity for a primary form/checkout action; otherwise maintain 44px targets and adequate separation.
- **Tables/filters:** do not force a full desktop table into the viewport. Reformat rows into readable cards or contain intentional horizontal scrolling within the table region. Filters wrap or use an accessible panel.
- **Spacing and type:** use the mobile sizes in Section 4 and page padding from Section 6. Maintain hierarchy without clipping or causing horizontal scrolling.

## 17. Accessibility

Target **WCAG 2.2 AA**. Accessibility is part of the component definition, not a finishing pass.

- Maintain sufficient text and UI contrast; verify each token pairing, including muted text, disabled controls, focus indicators, and green buttons.
- Support keyboard-only navigation with a logical tab order, working links/buttons, visible `:focus-visible` states, and no keyboard traps except a correctly managed modal dialog.
- Use semantic landmarks, headings, buttons, links, lists, tables, and form elements. Do not use clickable `div` elements where native controls are appropriate.
- Associate every input with a persistent label. Associate hints/errors programmatically, announce async status appropriately, and move focus to relevant errors when useful.
- Give controls descriptive accessible names. Icon-only cart, menu, search, and account controls require labels; hide decorative icons from assistive technology.
- Supply meaningful alt text for informative images and empty alt for decorative images. Do not put essential instructions only into image/video content.
- Communicate success, error, warning, loading, active, and disabled states with text or semantics as well as colour.
- Make mobile menus and modals keyboard accessible and manage focus on open/close. Preserve reduced-motion preferences.
- Keep touch targets generally at least 44 × 44px and do not rely on hover as the only way to reveal an action.

## 18. Performance requirements

- Optimize image and video delivery; serve responsive formats/sizes, reserve dimensions, lazy-load below-the-fold media, and provide a lightweight hero poster fallback.
- Minimize unnecessary React renders through appropriate component boundaries and state ownership; do not add premature memoization that obscures simple code.
- Provide immediate local interaction feedback and skeleton loading states for content that is being fetched. Use clear loading/error indicators rather than blank screens.
- Avoid blocking operations on the main thread and avoid loading large media or animation code before it is needed.
- Keep animation brief and respect reduced motion. Ensure motion does not delay keyboard or pointer response.
- Treat perceived/interface responsiveness separately from backend duration. A spinner or pending label should appear promptly, but backend search, upload, order, or payment completion time is not guaranteed to be under 400ms. Never replace a confirmed backend result with a false optimistic payment/order success.

## 19. Design acceptance checklist

- [ ] Foundational brand colours are exactly `#FFFFFF`, `#416422`, and `#F5F5F5`; white remains dominant and green is used selectively.
- [ ] Supporting and semantic colours use the documented tokens; no unapproved brand colour or duplicate token was added.
- [ ] Typography uses Inter/fallbacks and follows the hierarchy across desktop and mobile.
- [ ] Fitts, Hick, Chunking, Doherty, Proximity, and Von Restorff principles are reflected in real interactions and content hierarchy.
- [ ] Major sections have one clear focal point; targets are generally at least 44 × 44px.
- [ ] Content is centered consistently, capped at 1280px, and uses the documented gutters and 4px spacing scale.
- [ ] Navbar includes company identity, six primary links (Home followed by About Us), cart, and account/profile access where supported; mobile menu is accessible and cart count is state-driven.
- [ ] Shared components use consistent geometry and include relevant focus, active, disabled, loading, and error behavior.
- [ ] Forms have persistent labels, clear grouping, inline validation, white form cards, and accessible submission feedback.
- [ ] B2C and B2B checkout experiences remain separate; only Customer Details presents the customer toggle.
- [ ] Checkout progress/actions are clear, and payment/order success is shown only after backend confirmation.
- [ ] Icons use Lucide React consistently and have accessible naming where meaningful.
- [ ] Images/video are appropriate, optimized, described accessibly, and do not create layout shift; hero has a usable poster fallback.
- [ ] Animation is restrained, purposeful, and respects `prefers-reduced-motion`.
- [ ] Mobile, tablet, desktop, and large desktop layouts are intentionally adapted with no unintended horizontal overflow.
- [ ] WCAG 2.2 AA contrast, keyboard use, focus, semantic markup, status communication, labels, and modal/menu behavior are checked.
- [ ] Loading states and immediate interface feedback are present without claiming backend completion times.
- [ ] Design tokens are centralized and reused; there are no scattered duplicate colour/spacing definitions.
- [ ] Home, Product, Hubs, Jobs, and Contact pages share the same brand identity while serving their distinct user goals.
- [ ] Home retains its hero and displays the complete six-section About Us content beneath it; `/about-us` displays the same sections independently. Both use local inspected assets, adapt to mobile, and end after Impact with the shared footer and no closing CTA.

## 20. Final design directive

Maendeleo Asilia must communicate **agricultural identity, industrial professionalism, and commercial usability** in every part of the frontend. Every design decision must support clarity, accessibility, usability, truthful system feedback, and a consistent visual identity. When a design choice is not specified here, extend the established tokens and patterns conservatively; do not invent a new brand direction or business workflow.
