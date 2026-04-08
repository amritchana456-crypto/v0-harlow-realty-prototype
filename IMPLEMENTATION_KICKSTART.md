# Harlow Realty — Implementation Kickstart Plan

## Project Overview

**Brand:** Harlow Realty  
**Type:** Premium real estate landing page  
**Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion  
**Feel:** Modern, soft, calm, airy, trustworthy, slightly luxurious

---

## Color Palette (Final)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#7EC8D8` | Buttons, accents, links |
| Primary Light | `#E8F8FB` | Backgrounds, subtle fills |
| Primary Medium | `#B8E4F0` | Hover states, secondary accents |
| Primary Dark | `#6FAFBE` | Footer background, darker accents |
| Primary Darker | `#4E8E9D` | Text on light backgrounds, deep accents |
| White | `#FFFFFF` | Card backgrounds, text on dark |
| Black | `#0A0A0A` | Primary text, headings |
| Grays | Tailwind defaults | Supporting text, borders, dividers |

---

## Typography

**Font:** Lexend Deca (Google Fonts with `display=swap`)  
**Weights:** 300, 400, 500, 600, 700

---

## Animation Standards

- **Entrance:** `opacity: 0 → 1`, `y: 32 → 0`
- **Duration:** 0.7s
- **Easing:** `[0.22, 1, 0.36, 1]`
- **Stagger:** 100–150ms between grid items
- **Hover:** `scale` + `shadow` transitions at 0.25s `easeOut`
- **Viewport trigger:** `useInView` with `once: true`, threshold 0.2

---

## Z-Index Scale

| Element | Z-Index |
|---------|---------|
| Sticky Navbar | `z-50` |
| Mobile Overlay Menu | `z-[60]` |

---

## Placeholder Images

| Asset | Dimensions | URL Pattern |
|-------|------------|-------------|
| Hero | 1920x1080 | `https://placehold.co/1920x1080` |
| Agent Photos | 400x400 | `https://placehold.co/400x400` |
| Listing Images | 800x450 | `https://placehold.co/800x450` |

---

## File Structure

```
app/
├── layout.tsx
├── page.tsx
├── globals.css
components/
├── navbar.tsx
├── hero.tsx
├── agent-cards.tsx
├── stats.tsx
├── featured-listings.tsx
├── testimonials.tsx
├── contact.tsx
├── footer.tsx
├── ui/
│   ├── button.tsx (existing shadcn)
│   ├── glass-card.tsx
│   ├── section-wrapper.tsx
│   ├── fog-divider.tsx
│   ├── agent-card.tsx
│   ├── listing-card.tsx
│   ├── testimonial-card.tsx
│   └── ... (extract as needed)
lib/
└── utils.ts (existing)
```

---

## Phase 1 — Foundation

**Goal:** Establish design tokens, fonts, global styles, and configuration.

### Files to Create/Modify

| File | Action | Notes |
|------|--------|-------|
| `app/globals.css` | Modify | Add CSS custom properties for color palette, body gradient background |
| `tailwind.config.ts` | Modify | Extend theme with custom colors, font family |
| `next.config.mjs` | Modify | Add `placehold.co` to remotePatterns for Next.js Image |
| `app/layout.tsx` | Modify | Import Lexend Deca font, apply font variables, add SEO metadata |
| `lib/utils.ts` | Verify | Confirm `cn` utility exists |

### Checklist Before Phase 2

- [ ] Color tokens defined in globals.css and tailwind.config.ts
- [ ] Lexend Deca font loading with `display=swap`
- [ ] Body gradient background applied (`#E8F8FB` → `#B8E4F0`)
- [ ] placehold.co added to next.config.mjs remotePatterns
- [ ] SEO metadata complete (title, description, OpenGraph, robots)
- [ ] Font variables applied to body element
- [ ] No TypeScript or build errors

---

## Phase 2 — Layout Components

**Goal:** Build reusable UI primitives for consistent styling across sections.

### Files to Create

| File | Purpose |
|------|---------|
| `components/ui/glass-card.tsx` | Reusable glass-effect card with backdrop blur, border, shadow |
| `components/ui/section-wrapper.tsx` | Consistent section padding, max-width, semantic `<section>` tag with id |
| `components/ui/fog-divider.tsx` | Smooth gradient transition between sections |

### Component Specifications

**GlassCard:**
- Props: `children`, `className`, `as` (element type)
- Styles: `backdrop-blur-md`, `bg-white/10`, `border border-white/20`, `rounded-2xl`, `shadow-lg`
- Used in: Navbar, Agent cards, Listing cards, Mobile menu

**SectionWrapper:**
- Props: `children`, `id`, `className`, `as` (default `section`)
- Styles: `max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28`
- Ensures consistent horizontal padding and vertical rhythm

**FogDivider:**
- Props: `fromColor`, `toColor`, `height`
- Implementation: CSS gradient div for smooth color transitions
- Used between: Testimonials → Contact, Contact → Footer

### Checklist Before Phase 3

- [ ] GlassCard renders with correct blur and transparency
- [ ] SectionWrapper applies consistent padding at all breakpoints
- [ ] FogDivider creates smooth gradient transitions
- [ ] All components accept className for style overrides
- [ ] Components are properly typed with TypeScript

---

## Phase 3 — Sections (Top Half)

**Goal:** Build the primary visual sections from top to bottom.

### Files to Create

| File | Section | Client Component |
|------|---------|------------------|
| `components/navbar.tsx` | Navigation | Yes (scroll state, mobile menu) |
| `components/hero.tsx` | Hero | Yes (animations) |
| `components/agent-cards.tsx` | Meet Our Agents | Yes (animations, hover) |
| `components/ui/agent-card.tsx` | Individual agent card | Yes (hover effects) |
| `components/stats.tsx` | Stats/Numbers | Yes (count-up animation) |
| `components/featured-listings.tsx` | Featured Listings | Yes (animations) |
| `components/ui/listing-card.tsx` | Individual listing card | Yes (hover effects) |

### Section Specifications

**Navbar:**
- Floating state: `fixed top-6 left-6 right-6`, glass effect, `z-50`
- Sticky state: Transitions on scroll, increased blur
- Mobile: Hamburger menu, overlay panel at `z-[60]`, auto-closes on link click
- Links: Home, Properties, Agents, Testimonials, Contact
- Smooth scroll to section IDs

**Hero:**
- Full viewport height minus navbar consideration (`min-h-[85vh]`)
- Background: placehold.co 1920x1080 image with overlay gradient
- Content: Headline (h1), subheadline, CTA button
- Entrance animation on load

**Agent Cards:**
- Grid: 3 columns desktop, 2 columns tablet, 1 column mobile
- Card: GlassCard with agent photo, name, title, contact info
- Hover: Subtle scale (1.02), soft glow, shadow increase
- Staggered entrance animation

**Stats:**
- 4 stats in a row (responsive grid)
- Count-up animation: 0 → target over 1.5s
- Triggers at 20% visibility
- Special handling for "24/7" (animate "24" and "7" separately)

**Featured Listings:**
- Grid: 2 columns desktop, 1 column mobile
- Card: Image (aspect-video), price, address, beds/baths/sqft
- Hover: Subtle scale, shadow lift
- Staggered entrance animation

### Checklist Before Phase 4

- [ ] Navbar floats correctly and transitions to sticky on scroll
- [ ] Mobile menu opens/closes properly with overlay
- [ ] Hero displays with correct overlay and text hierarchy
- [ ] Agent cards grid responds correctly at all breakpoints
- [ ] Agent card hover states work (scale, glow, shadow)
- [ ] Stats count-up animation triggers correctly
- [ ] Listing cards display with consistent aspect ratios
- [ ] All sections have correct `id` attributes for anchor links
- [ ] Semantic HTML: one h1 in Hero, h2 for section titles, h3 for card titles
- [ ] All images have descriptive alt text

---

## Phase 4 — Interactive Sections

**Goal:** Complete remaining sections with interactive elements.

### Files to Create

| File | Section | Client Component |
|------|---------|------------------|
| `components/testimonials.tsx` | Testimonials | Yes (carousel, arrows) |
| `components/ui/testimonial-card.tsx` | Individual testimonial | No (static display) |
| `components/contact.tsx` | Contact Form | Yes (form state, validation) |
| `components/footer.tsx` | Footer | No (static) |
| `app/page.tsx` | Main page | No (composes all sections) |

### Section Specifications

**Testimonials:**
- Carousel: Shows 3 cards on desktop, 1 on mobile
- Navigation: Left/right arrows, advances 1 card at a time
- Non-looping: Disable arrows at ends
- Keyboard accessible: Arrow key navigation
- Entrance animation for visible cards

**Contact:**
- Form fields: Name, Email, Phone (optional), Message
- Validation: Red border + red label on error (no text messages)
- Submit button: Shows loading state for 1.5s, then success message
- No real submission (visual prototype only)
- Form resets after success

**Footer:**
- Solid background: `#6FAFBE`
- Fog divider transition from previous section
- Content: Logo, navigation links, contact info, social links, copyright
- No decorative SVG silhouettes (clean, simple)

**Page Composition (app/page.tsx):**
- Import and render all sections in order
- Sections: Navbar → Hero → AgentCards → Stats → FeaturedListings → Testimonials → Contact → Footer

### Checklist Before Phase 5

- [ ] Testimonials carousel advances correctly (1 at a time)
- [ ] Arrows disable at first/last positions
- [ ] Keyboard navigation works for carousel
- [ ] Contact form validates on submit attempt
- [ ] Invalid fields show red border and label
- [ ] Submit button shows loading → success states
- [ ] Footer renders with correct background color
- [ ] Fog divider creates smooth transition to footer
- [ ] All sections render in correct order on page
- [ ] Smooth scroll works for all navbar links

---

## Phase 5 — Polish

**Goal:** Final quality assurance across all dimensions.

### Animation Audit

- [ ] All sections have entrance animations
- [ ] Animations trigger at 20% visibility
- [ ] Animations only play once (`once: true`)
- [ ] Stagger timing is consistent (100-150ms)
- [ ] Hover states are smooth (0.25s easeOut)
- [ ] No springs, parallax, or rotations used
- [ ] Performance: No layout thrashing or jank

### SEO Check

- [ ] Title tag: "Harlow Realty | Premium Real Estate in Toronto & GTA"
- [ ] Meta description present and descriptive
- [ ] OpenGraph tags complete (title, description, image, url, type)
- [ ] robots: index, follow
- [ ] Semantic HTML throughout (header, main, section, footer, nav)
- [ ] Heading hierarchy: One h1, h2 for sections, h3 for cards
- [ ] All sections have id attributes matching navbar anchors

### Accessibility Pass

- [ ] All images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works for carousel arrows
- [ ] Color contrast meets WCAG AA standards
- [ ] Skip link or landmark navigation available
- [ ] Mobile menu is keyboard accessible

### Responsive QA

**Breakpoints to test:**
- Mobile: 375px (iPhone SE)
- Mobile Large: 428px (iPhone 14 Pro Max)
- Tablet: 768px (iPad)
- Desktop: 1024px, 1280px, 1440px
- Large: 1920px+

**Items to verify:**
- [ ] Navbar transitions correctly at all widths
- [ ] Mobile menu appears/disappears at correct breakpoint
- [ ] Agent cards: 3 cols → 2 cols → 1 col
- [ ] Listing cards: 2 cols → 1 col
- [ ] Testimonials: 3 visible → 1 visible
- [ ] Text sizes scale appropriately
- [ ] Padding/margins feel balanced at all sizes
- [ ] No horizontal scrolling at any breakpoint
- [ ] Touch targets are minimum 44x44px on mobile

### Placeholder Image Audit

- [ ] All images use placehold.co URLs
- [ ] Hero: 1920x1080
- [ ] Agent photos: 400x400
- [ ] Listing images: 800x450
- [ ] next.config.mjs has placehold.co in remotePatterns
- [ ] Images load without CORS errors
- [ ] Alt text accurately describes intended final image

---

## Data Requirements

### Agents (3 total)

```
Agent 1:
- Name: Sarah Mitchell
- Title: Senior Real Estate Agent
- Photo: 400x400 placeholder
- Phone: (416) 555-0101
- Email: sarah@harlowrealty.ca

Agent 2:
- Name: Michael Chen
- Title: Luxury Property Specialist
- Photo: 400x400 placeholder
- Phone: (416) 555-0102
- Email: michael@harlowrealty.ca

Agent 3:
- Name: Emily Rodriguez
- Title: First-Time Buyer Expert
- Photo: 400x400 placeholder
- Phone: (416) 555-0103
- Email: emily@harlowrealty.ca
```

### Stats (4 total)

```
- 500+ Properties Sold
- 15+ Years Experience
- 24/7 Support Available
- 98% Client Satisfaction
```

### Listings (4 total)

```
Listing 1:
- Address: 123 Lakeshore Blvd W, Toronto
- Price: $2,450,000
- Beds: 4 | Baths: 3 | Sqft: 3,200

Listing 2:
- Address: 456 King Street E, Toronto
- Price: $1,875,000
- Beds: 3 | Baths: 2 | Sqft: 2,100

Listing 3:
- Address: 789 Trafalgar Rd, Oakville
- Price: $3,200,000
- Beds: 5 | Baths: 4 | Sqft: 4,500

Listing 4:
- Address: 321 Dundas St W, Mississauga
- Price: $1,650,000
- Beds: 4 | Baths: 3 | Sqft: 2,800
```

### Testimonials (5 total for carousel)

```
Testimonial 1:
- Name: Jennifer & Mark Thompson
- Location: Oakville
- Quote: "Harlow Realty made our dream home a reality. Their attention to detail and market knowledge is unmatched."

Testimonial 2:
- Name: David Park
- Location: Toronto
- Quote: "Professional, responsive, and truly cared about finding the right property for my family. Highly recommend!"

Testimonial 3:
- Name: Lisa Chen
- Location: Mississauga
- Quote: "From our first meeting to closing day, the team at Harlow was exceptional. They exceeded every expectation."

Testimonial 4:
- Name: Robert & Maria Santos
- Location: Burlington
- Quote: "We've worked with many agents over the years. None compare to the service we received from Harlow Realty."

Testimonial 5:
- Name: Amanda Williams
- Location: Toronto
- Quote: "Sold our condo in just two weeks above asking price. The marketing strategy was brilliant."
```

---

## Approval Required

Please review this implementation plan and confirm:

1. **Phase structure** — Does the 5-phase breakdown make sense?
2. **File organization** — Is the proposed file structure acceptable?
3. **Component extraction** — Are the UI sub-components (agent-card, listing-card, testimonial-card) appropriate?
4. **Data content** — Are the placeholder names, addresses, and quotes acceptable?
5. **Checklist items** — Are there any missing quality checks?

**Reply with approval to begin Phase 1.**
