# Train64 — Landing Page Design System

> Source: Figma frame `Landing/ Student` (node `717:21506`) — 1512 × 7122px

---

## 1. PAGE STRUCTURE

```
Landing Page (Landing/ Student)
 ├── Navigation                          [y=0,    h=65]
 │    ├── Logo / NavLink
 │    ├── NavLinks (Features, Coaches, How it works, Become a coach)
 │    └── ButtonGroup (Log in · Get started)
 │
 ├── Hero Section                        [y=65,   h=816]
 │    ├── SectionHeader (heading + subtitle)
 │    ├── Button (primary CTA)
 │    └── SocialProofRow (review body blocks)
 │
 ├── Coaches Section                     [h=1602]
 │    ├── SectionHeader (badge + heading + subtitle)
 │    ├── CoachCard × 6 (carousel/grid)
 │    └── Button (see all coaches)
 │
 ├── How It Works Section (HIW)          [h=678]
 │    ├── SectionHeader (badge + heading + subtitle)
 │    └── HowItWorksStep × 4 (numbered steps)
 │
 ├── Features Section                    [h=~787]
 │    ├── SectionHeader (heading + subtitle)
 │    └── FeatureListItem × 6 (icon + title + description)
 │
 ├── Curriculum Section (tabs)           [multiple sections]
 │    ├── SectionHeader (badge + heading + subtitle)
 │    ├── CurriculumTabGroup
 │    │    ├── CurriculumTab ("Comprehensive Curriculum")
 │    │    ├── CurriculumTab ("Interactive Learning")
 │    │    └── CurriculumTab ("What you can learn")
 │    ├── FeatureListItem × 6 (curriculum topics)
 │    └── Button (Try a Demo Session)
 │
 ├── Testimonials Section                [within Sections]
 │    ├── SectionHeader (badge + heading + subtitle)
 │    └── TestimonialCard × 3
 │
 ├── CTA Banner (WTT)                    [y=6230, h=424]
 │    ├── Heading
 │    ├── Subtext
 │    └── Button (Find a coach)
 │
 └── Footer                             [y=6654, h=468]
      ├── Logo
      ├── SocialLinks (Instagram, YouTube, LinkedIn)
      ├── FooterNavGroup × N (columns with title + links)
      └── Slot (legal / copyright)
```

---

## 2. COMPONENT INVENTORY

### Atoms

---

#### Button

- **Type:** Atom
- **Description:** Triggers a primary action or navigation. Used across all sections.
- **Variants:**
  - `ghost` — text-only, no background (Log in)
  - `primary` — filled background (Get started, Find a coach)
  - `secondary` — outlined or muted fill (Try a Demo Session)
  - `icon-right` — primary with trailing icon (See all →)
- **Sizes:**
  - `sm` — h=32px, used in navbar ghost variant
  - `md` — h=40px, default usage
  - `lg` — h=48px, hero CTA
- **States:** default, hover, disabled
- **Props:**
  - `label`: text
  - `variant`: `ghost` | `primary` | `secondary`
  - `size`: `sm` | `md` | `lg`
  - `icon`: optional trailing icon
  - `iconPosition`: `left` | `right`

---

#### Badge

- **Type:** Atom
- **Description:** Short contextual label that categorizes a section or component. Non-interactive.
- **Variants:**
  - `section` — used as a section eyebrow label (e.g., "Expert Instructors", "Getting started")
  - `coach-rank` — displays coach title (e.g., "Grandmaster", "FIDE 2200")
  - `availability` — indicates session availability (e.g., "Available today")
- **Sizes:** fixed h=24px, variable width (93–113px)
- **States:** static only
- **Props:**
  - `label`: text
  - `variant`: `section` | `coach-rank` | `availability`
  - `icon`: optional leading icon

---

#### NavLink

- **Type:** Atom
- **Description:** A single navigation item linking to a page section or route.
- **Variants:** default, active, hover
- **Props:**
  - `label`: text
  - `href`: string
  - `active`: boolean

---

#### RatingStars

- **Type:** Atom
- **Description:** Displays a numeric rating alongside a star icon row. Used inside CoachCard.
- **Variants:** static display only
- **Props:**
  - `score`: number (e.g., 4.9)
  - `reviewCount`: number
  - `maxStars`: number (default 5)

---

#### AvailabilityIndicator

- **Type:** Atom
- **Description:** A dot or badge that signals whether a coach is currently available for booking.
- **Variants:** `available`, `unavailable`
- **Props:**
  - `status`: `available` | `unavailable`
  - `label`: optional text (e.g., "Available today")

---

#### Icon

- **Type:** Atom
- **Description:** Renders a single icon from the design's icon set (Iconify-based). Used throughout feature lists, buttons, and cards.
- **Sizes:** 16×16, 24×24, 28×28
- **Props:**
  - `name`: string (icon identifier)
  - `size`: `sm` | `md` | `lg`
  - `color`: optional override

---

#### SocialLink

- **Type:** Atom
- **Description:** An icon-only link to an external social media profile. Used in the footer.
- **Props:**
  - `platform`: `instagram` | `youtube` | `linkedin`
  - `href`: string

---

### Molecules

---

#### SectionHeader

- **Type:** Molecule
- **Description:** Eyebrow label + section heading + optional subtitle. Used at the top of every section to introduce its content.
- **Variants:**
  - `centered` — heading and subtitle aligned to center
  - `left` — aligned to left (features, curriculum sections)
- **Props:**
  - `badge`: optional Badge props
  - `heading`: text
  - `subtitle`: optional text
  - `align`: `center` | `left`

---

#### CoachCard

- **Type:** Molecule
- **Description:** Displays a coach's profile summary with key credentials and a booking action. The primary unit of the Coaches section.
- **Variants:**
  - `featured` — includes availability indicator and expanded score panel
  - `standard` — base card without availability emphasis
- **Sizes:** ~422 × 260px (standard), ~614 × 410px (featured/wide)
- **States:** default, hover (assumed), favorited
- **Props:**
  - `avatar`: image
  - `name`: text
  - `title`: text (e.g., "Grandmaster")
  - `fideRating`: text (e.g., "FIDE 2200")
  - `peakRating`: optional text
  - `studentCount`: number
  - `rating`: RatingStars props
  - `availability`: AvailabilityIndicator props
  - `badges`: Badge[]
  - `languages`: string[]
  - `specialties`: icon list (chess disciplines)
  - `isFavorited`: boolean
  - `onBook`: action

---

#### HowItWorksStep

- **Type:** Molecule
- **Description:** A single numbered step in a sequential process flow. Used in groups of 4.
- **Props:**
  - `stepNumber`: number (1–4)
  - `icon`: Icon props
  - `title`: text
  - `description`: text

---

#### FeatureListItem

- **Type:** Molecule
- **Description:** An icon + heading + short description unit. Used in the Features section and inside CurriculumTab content panels.
- **Props:**
  - `icon`: Icon props
  - `heading`: text
  - `description`: text

---

#### CurriculumTabGroup

- **Type:** Molecule
- **Description:** A horizontal tab bar that switches between curriculum content panels. Each tab reveals a FeatureListItem grid and an optional image.
- **Props:**
  - `tabs`: CurriculumTab[]
  - `activeTab`: string
  - `onTabChange`: action

---

#### CurriculumTab

- **Type:** Molecule
- **Description:** A single tab within CurriculumTabGroup. Contains a label and maps to a content panel.
- **Props:**
  - `label`: text
  - `value`: string
  - `active`: boolean

---

#### TestimonialCard

- **Type:** Molecule
- **Description:** Displays a student quote, name, and rating progression (before → after). Used in the Success Stories section.
- **Props:**
  - `quote`: text
  - `studentName`: text
  - `ratingBefore`: number
  - `ratingAfter`: number

---

#### FooterNavGroup

- **Type:** Molecule
- **Description:** A labelled column of navigation links in the footer.
- **Props:**
  - `title`: text
  - `links`: `{ label: string; href: string }[]`

---

### Organisms

---

#### Navbar

- **Type:** Organism
- **Description:** Top-level navigation bar. Contains the logo, nav links, and auth button group. Fixed height of 65px across the full 1512px canvas.
- **Props:**
  - `links`: NavLink[]
  - `ctaButtons`: Button[]
  - `logo`: image or text

---

#### CoachesSection

- **Type:** Organism
- **Description:** Full section containing SectionHeader and a scrollable or paginated grid of CoachCards plus a CTA button to view all coaches.
- **Props:**
  - `sectionHeader`: SectionHeader props
  - `coaches`: CoachCard[]
  - `viewAllButton`: Button props

---

#### HowItWorksSection

- **Type:** Organism
- **Description:** Full section presenting the 4-step onboarding process with SectionHeader and HowItWorksStep list.
- **Props:**
  - `sectionHeader`: SectionHeader props
  - `steps`: HowItWorksStep[]

---

#### FeaturesSection

- **Type:** Organism
- **Description:** Full section showcasing platform capabilities as a grid of FeatureListItems with a SectionHeader.
- **Props:**
  - `sectionHeader`: SectionHeader props
  - `features`: FeatureListItem[]

---

#### CurriculumSection

- **Type:** Organism
- **Description:** Full tabbed section with SectionHeader, CurriculumTabGroup, and a content panel (image + FeatureListItem list + CTA button).
- **Props:**
  - `sectionHeader`: SectionHeader props
  - `tabs`: CurriculumTabGroup props
  - `ctaButton`: Button props

---

#### TestimonialsSection

- **Type:** Organism
- **Description:** Full section with SectionHeader and a row of TestimonialCards.
- **Props:**
  - `sectionHeader`: SectionHeader props
  - `testimonials`: TestimonialCard[]

---

#### CTABanner

- **Type:** Organism
- **Description:** Full-width call-to-action panel with a decorative background pattern, heading, subtext, and primary button.
- **Props:**
  - `heading`: text
  - `subtext`: text
  - `button`: Button props

---

#### Footer

- **Type:** Organism
- **Description:** Page footer with logo, social links, navigation columns, and a legal/copyright slot.
- **Props:**
  - `logo`: image or text
  - `socialLinks`: SocialLink[]
  - `navGroups`: FooterNavGroup[]
  - `legalSlot`: slot / render prop

---

## 3. DESIGN TOKENS → TAILWIND MAPPING

### 3.1 Colors

Exact hex values are not exposed in the metadata. Mapped to closest Tailwind scale based on context and component semantics.

| Token                 | Role                                      | Tailwind Class         |
|-----------------------|-------------------------------------------|------------------------|
| `primary`             | Primary action buttons, active states     | `blue-600`             |
| `primary-hover`       | Button hover state                        | `blue-700`             |
| `primary-light`       | Badge backgrounds, highlights             | `blue-50`              |
| `surface`             | Page background                           | `white` / `neutral-50` |
| `surface-card`        | Card backgrounds                          | `white`                |
| `surface-section-alt` | Alternating section background            | `neutral-50`           |
| `cta-bg`              | CTABanner background                      | `neutral-900`          |
| `neutral-900`         | Primary headings, body text               | `neutral-900`          |
| `neutral-600`         | Secondary / muted body text               | `neutral-600`          |
| `neutral-400`         | Placeholder, disabled text                | `neutral-400`          |
| `neutral-200`         | Borders, dividers                         | `neutral-200`          |
| `neutral-100`         | Subtle backgrounds, card borders          | `neutral-100`          |
| `rating-star`         | Star icons in RatingStars                 | `amber-400`            |
| `availability`        | AvailabilityIndicator dot (available)     | `green-500`            |
| `badge-section-bg`    | Section eyebrow badge background          | `blue-50`              |
| `badge-section-text`  | Section eyebrow badge text                | `blue-600`             |
| `badge-rank-bg`       | Coach rank badge background               | `neutral-100`          |
| `badge-rank-text`     | Coach rank badge text                     | `neutral-700`          |

---

### 3.2 Typography

Derived from text node heights observed across the frame.

| Role                  | Height (Figma) | Tailwind Class              | Weight             |
|-----------------------|----------------|-----------------------------|--------------------|
| Hero Heading          | ~78px          | `text-6xl` / `text-7xl`    | `font-bold`        |
| Section Heading H2    | ~52–56px       | `text-5xl`                 | `font-bold`        |
| Section Heading alt   | ~45–48px       | `text-4xl`                 | `font-semibold`    |
| Card Heading H3       | ~32px          | `text-2xl`                 | `font-semibold`    |
| Subheading / Label    | ~28px          | `text-xl`                  | `font-medium`      |
| Body Large            | ~24–26px       | `text-lg`                  | `font-normal`      |
| Body Base             | ~20–22px       | `text-base`                | `font-normal`      |
| Body Small            | ~18px          | `text-sm`                  | `font-normal`      |
| Caption / Badge label | ~16px          | `text-xs`                  | `font-medium`      |
| Nav links             | ~20px          | `text-sm` / `text-base`    | `font-medium`      |

---

### 3.3 Spacing

| Role                         | Value (Figma) | Tailwind Class   |
|------------------------------|---------------|------------------|
| Section vertical padding     | 80px          | `py-20`          |
| Container horizontal padding | 96px          | `px-24`          |
| Card internal padding        | ~24px         | `p-6`            |
| Inline gap (nav links)       | ~32px         | `gap-8`          |
| Stack gap (feature items)    | ~24px         | `gap-6`          |
| Grid column gap              | ~24–32px      | `gap-6` / `gap-8`|
| Button internal padding      | ~12px × 24px  | `px-6 py-3`      |
| Badge internal padding       | ~8px × 12px   | `px-3 py-1.5`    |
| Step number margin           | ~16px         | `mb-4`           |

---

### 3.4 Border Radius

| Role             | Tailwind Class  |
|------------------|-----------------|
| Button (default) | `rounded-lg`    |
| Badge            | `rounded-full`  |
| Card             | `rounded-2xl`   |
| Avatar image     | `rounded-full`  |
| Icon container   | `rounded-xl`    |
| Input fields     | `rounded-md`    |

---

### 3.5 Shadows

| Role                   | Tailwind Class  |
|------------------------|-----------------|
| CoachCard default      | `shadow-md`     |
| CoachCard hover        | `shadow-lg`     |
| TestimonialCard        | `shadow-sm`     |
| CTABanner card inset   | `shadow-inner`  |
| Navbar (scroll)        | `shadow-sm`     |

---

### 3.6 Icons

Icons are sourced from multiple Iconify sets, used consistently per domain:

| Set                          | Usage context                                  |
|------------------------------|------------------------------------------------|
| `boxicons`                   | Search, chess, navigation actions              |
| `hugeicons`                  | Video, chart, calendar                         |
| `solar`                      | Heart (favorite), interaction icons            |
| `material-symbols`           | Verified badge                                 |
| `mdi`                        | Trophy / achievement                           |
| `jam`                        | Medal, achievement                             |
| `lucide`                     | Chess rook, generic UI                         |
| `streamline` / `streamline-plump` | Pawn, class/lesson                        |
| `ic:round-language`          | Language indicator on CoachCard               |
| `gg:check-o`                 | Checklist items in curriculum                  |
| `ep:right`                   | CTA trailing arrow                             |
| `tabler:chess-king`          | Section badge icon                             |

---

## 4. LAYOUT SYSTEM

### 4.1 Canvas & Container

| Property             | Value                        | Tailwind                          |
|----------------------|------------------------------|-----------------------------------|
| Full canvas width    | 1512px                       | `w-full` (no max-width on canvas) |
| Content container    | 1320px                       | `max-w-[1320px] mx-auto`          |
| Horizontal padding   | 96px (48px each side)        | `px-24`                           |

---

### 4.2 Grid

| Section            | Grid structure                              | Tailwind                          |
|--------------------|---------------------------------------------|-----------------------------------|
| CoachCard row      | 6 cards horizontal (scrollable) or 3-col   | `grid-cols-3` / scroll container  |
| HowItWorksStep     | 4 columns equal width                       | `grid-cols-4 gap-8`               |
| FeatureListItem    | 2 columns (icon-list layout)                | `grid-cols-2 gap-6`               |
| TestimonialCard    | 3 columns equal width                       | `grid-cols-3 gap-6`               |
| CurriculumSection  | 2 columns (list left, image right)          | `grid-cols-2 gap-12`              |
| Footer             | 4–5 columns                                 | `grid-cols-4 gap-8`               |

---

### 4.3 Section Heights (reference only)

| Section               | Height (Figma) |
|-----------------------|----------------|
| Navbar                | 65px           |
| Hero                  | 816px          |
| Coaches               | 1602px         |
| How It Works          | 678px          |
| Features              | ~787px         |
| Curriculum (per tab)  | ~variable      |
| CTA Banner            | 424px          |
| Footer                | 468px          |

---

### 4.4 Breakpoints

Not explicitly defined in the frame (desktop-first at 1512px). Inferred responsive intent:

| Breakpoint | Width    | Tailwind prefix | Likely behavior                          |
|------------|----------|-----------------|------------------------------------------|
| xs         | <640px   | (none/default)  | Single column, stacked sections          |
| sm         | ≥640px   | `sm:`           | 2-col grids begin                        |
| md         | ≥768px   | `md:`           | Navigation collapses to hamburger below  |
| lg         | ≥1024px  | `lg:`           | 3-col coach grid, full HIW row           |
| xl         | ≥1280px  | `xl:`           | Full layout matches Figma 1320px container |
| 2xl        | ≥1536px  | `2xl:`          | Matches 1512px canvas (Figma design base)|
