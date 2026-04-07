# LANDING — COACH
> Design specification for the Train64 "Landing/ Coach" page (Figma frame `683:12034`, file `OFGf4hBBQ9ts3ISAjN1bbs`).
> Full frame dimensions: 1512 × 7624 px. This is a coach-acquisition page focused on earnings, onboarding flow, trust signals, and coaching tools.

---

## 1. PAGE CONTAINER

```
Root wrapper
  w-full                       (no max-width constraint on the outermost frame)
  bg-white
  flex flex-col items-start
  font-['Plus_Jakarta_Sans',sans-serif]

Inner content containers (per-section)
  max-w-[1320px]               (most sections use a 1320 px inner container)
  mx-auto
  px-[96px]                    (96 px horizontal gutters on the 1512 px canvas)
```

The page uses a **section-stacked** layout. Every section is `w-full` (1512 px wide) with its own background. Inner content is constrained to `max-w-[1320px]` and horizontally centered. No single outer scroll wrapper applies a background; each section sets its own.

---

## 2. GLOBAL DESIGN TOKENS

### Colors

| Token name | Hex | Tailwind / Usage |
|---|---|---|
| `Color/gold-500` | `#B76E2D` | Primary brand accent, CTA buttons, stat values, highlighted headings |
| `Color/black-500` | `#1B1B1B` | Logo text, headings on dark bg, body text on dark bg |
| `Color/browm-500` | `#B58963` | Earnings stat card backgrounds (warm brown tile) |
| `Color/beige-500` | `#F1D9B6` | Earnings stat card backgrounds (light beige tile) |
| `Color/dark-gray-500` | `#637381` | Subtitle / body text on light bg, meta text |
| `Color/yellow-500` | `#F59E0B` | Star ratings accent (amber) |
| `Color/white-500` | `#FFFFFF` | Text on dark sections, card backgrounds |
| `Background/Paper` | `#FFFFFF` | Card and section backgrounds |
| Dark section bg | `#1B1B1B` | "Why teach" section bg, CTA card bg |
| Heading text (light) | `#212B36` | Main headings on white sections |
| Border default | `#D9D9D9` | `var(--sds-color-border-default-default)` |
| Card border | `rgba(145,158,171,0.16)` | Earnings cards, badge borders |
| Beige tile (semi) | `rgba(181,137,99,0.8)` | Earnings grid cell (warm) |
| Beige tile light (semi) | `rgba(241,217,182,0.8)` | Earnings grid cell (light) |
| Nav bg | `rgba(255,255,255,0.8)` | Navigation bar (frosted white) |
| Link text | `rgba(10,10,10,0.7)` | Nav link items |

**Tailwind custom config entries (recommended):**
```js
colors: {
  'brand-gold':   '#B76E2D',
  'brand-black':  '#1B1B1B',
  'brand-brown':  '#B58963',
  'brand-beige':  '#F1D9B6',
  'brand-gray':   '#637381',
  'brand-dark':   '#212B36',
}
```

### Typography

**Primary font:** `Plus Jakarta Sans` (all weights: ExtraLight, Regular, Medium, SemiBold, Bold)
**Secondary/fallback:** `Inter` (used in a few heading instances)

| Role | Size | Weight | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|
| Logo wordmark | 24 px | Bold (700) | 36 px | — | `#1B1B1B` |
| Hero H1 — light part | 64 px | ExtraLight (200) | normal | -1.92 px | `#212B36` |
| Hero H1 — bold part | 64 px | Bold (700) | normal | -1.92 px | `#212B36` |
| Section H2 | 42 px | Bold (700) | 48 px | +0.37 px | `#212B36` or `#FFFFFF` |
| Section H2 accent | 42 px | Bold (700) | 48 px | — | `#B76E2D` |
| CTA Banner H2 | 36 px | Bold (700) | 40 px | +0.37 px | `#FFFFFF` |
| Card H3 | 21 px | Bold (700) | 28 px | — | `#FFFFFF` (dark bg) / `#1B1B1B` |
| Card H3 (earnings) | 18 px | Bold (700) | 28 px | -0.44 px | `#1B1B1B` |
| Card H4 (requirements) | ~18 px | Bold (700) | 28 px | — | `#1B1B1B` |
| Body large | 20 px | Regular (400) | normal | — | `#637381` |
| Body medium | 18 px | Regular (400) | 28 px | — | `#637381` |
| Body standard | 16 px | Regular (400) | 26 px | — | `#FFFFFF` / `#637381` |
| Body small | 14 px | Regular (400) | 20 px | -0.15 px | `rgba(10,10,10,0.7)` |
| Caption / label | 12 px | Regular (400) | 16 px | — | `#1B1B1B` |
| Stat value | 24 px | SemiBold (600) | 1.2× | -0.48 px | `#B76E2D` |
| Section eyebrow | 14 px | SemiBold (600) | 16 px | — | `#B76E2D` |
| Nav link | 14 px | Regular (400) | 20 px | -0.15 px | `rgba(10,10,10,0.7)` |
| Button label (primary) | 14–15 px | Bold (700) | 20–26 px | -0.15 px | `#FFFFFF` |
| Button label (ghost) | 14 px | Medium (500) | 20 px | -0.15 px | `#0A0A0A` |
| Quote / testimonial | 14 px | Italic Regular | 20 px | -0.15 px | `#637381` |
| Step number | ~28 px | Bold (700) | 28 px | — | `#1B1B1B` |
| Classroom feature title | 14 px | SemiBold (600) | 20 px | -0.15 px | `#1B1B1B` |
| Classroom feature desc | 12 px | Regular (400) | 16 px | — | `#637381` |

**Token vars (SDS system):**
```
--sds-typography-heading-font-family:  Inter
--sds-typography-heading-size-base:    24px
--sds-typography-heading-font-weight:  600
--sds-typography-body-font-family:     Inter
--sds-typography-body-size-medium:     16px
--sds-typography-body-font-weight-regular: 400
--sds-typography-body-font-weight-strong:  600
```

### Spacing System

| Token | Value | Usage |
|---|---|---|
| `--sds-size-space-100` | 4 px | Tight gaps (stat sub-labels) |
| `--sds-size-space-200` | 8 px | Icon-to-text gap, small gaps |
| `--sds-size-space-300` | 12 px | Earnings cell padding |
| `--sds-size-space-400` | 16 px | Standard gap, button padding x |
| `--sds-size-space-600` | 24 px | Section internal padding, card padding |
| `--sds-size-space-800` | 32 px | Hero content gap, stats gap |
| `--sds-size-space-4000` | 160 px | (reserved / large spacing) |
| Page gutter | 96 px | `px-[96px]` on section wrappers |
| Section v-padding | 80 px | `py-[80px]` standard (some 96 px) |
| Card padding | 24 px | `p-[24px]` |
| Nav height | 64–65 px | — |
| Earnings grid gap | 12 px | `gap-[12px]` within stat grid |
| Feature grid gap | 72 px col / 60.5 px row | "Why teach" grid |
| Classroom feature gap col | 16 px | 2-col feature list |
| Classroom feature gap row | 24 px | 2-col feature list |

---

## 3. SECTIONS BREAKDOWN

---

### SECTION: Navigation
**Node:** `683:12035` — `y: 0`, height: 65 px

**Container:**
```
w-full h-[65px]
bg-[rgba(255,255,255,0.8)]
border-b border-[#E5E7EB]
flex flex-col items-start pb-px px-[96px]
```

**Layout:** Single row flex, `items-center justify-between`, inner container `max-w-[1320px] w-full h-[64px]`.

**Elements:**

**Logo (left):**
```
<a> block w-[119px] h-[40px]
  Text: "Train64"
  font-['Plus_Jakarta_Sans:Bold'] font-bold text-[24px] leading-[36px] text-[#1b1b1b]
```

**Nav links (right, flex gap-[32px]):**
- "Features" — `text-[14px] font-normal leading-[20px] text-[rgba(10,10,10,0.7)] tracking-[-0.15px]`
- "How it works" — same styles
- "Become a coach" — same styles

**CTA button group (flex gap-[16px]):**
- "Log in" ghost button: `h-[32px] px-[12px] rounded-[10px]` — no background, `text-[#0A0A0A] text-[14px] font-medium`
- "Get started" filled button: `w-[100px] h-[40px] bg-[#B76E2D] rounded-[10px]` — `text-white text-[14px] font-bold`

---

### SECTION: Hero (Coach-focused)
**Node:** `683:12053` — `y: 65`, height: 816 px

**Container:**
```
w-full h-[816px]
bg-[rgba(255,255,255,0.8)]
flex gap-[32px] items-center
px-[96px] py-[80px]
```

**Layout:** Two-column horizontal split.
- Left column: text content, `w-[747px]`, flex col gap-[32px]
- Right column: image, `w-[718px] h-[656px]`, rounded image with overlaid UI card

**Left — Text content:**

*Heading block* (`flex flex-col gap-[8px] items-center`):
```
H1 (two-part mixed-weight):
  Line 1: "Teach chess online and "
    font-['Plus_Jakarta_Sans:ExtraLight'] font-extralight text-[64px] text-[#212B36] tracking-[-1.92px]
  Line 2: "earn by sharing your expertise"
    font-['Plus_Jakarta_Sans:Bold'] font-bold text-[64px] text-[#212B36] tracking-[-1.92px]

Subtitle below heading:
  "Join Train64 and teach students from around the world using our interactive chess coaching platform."
  font-normal text-[20px] text-[#637381] w-[747px] leading-normal
```

*CTA Button:*
```
bg-[#B76E2D] rounded-[8px] px-[16px] py-[11px]
flex items-center gap-[8px]
  Label: "Apply to become a coach"
    font-bold text-[15px] text-white leading-[26px]
  Icon: right-arrow SVG, size-[16px]
```

*Stats row* (`flex gap-[32px] items-start pt-[16px]`, w-[559px]):
Three stat blocks, each `flex flex-col gap-[4px] items-center`:

| Stat | Value | Label |
|---|---|---|
| Avg. monthly earnings | `$2,847` | "Avg. monthly earnings" |
| Active coaches | `500+` | "Active Coaches" |
| Satisfaction | `4.9★` | "satisfaction" |

Stat value styles: `font-['Plus_Jakarta_Sans:SemiBold'] text-[24px] text-[#B76E2D] tracking-[-0.48px] leading-[1.2]`
Star glyph uses `#F59E0B` (amber yellow).
Stat label styles: `font-normal text-[16px] text-[#1B1B1B] capitalize text-center leading-[1.4]`

**Right — Hero image:**
```
w-[718px] h-[656px]
rounded-tl-[58px] rounded-tr-[39px] rounded-bl-[39px] rounded-br-[39px]
overflow-hidden
  img: coach at desk with laptop, covers full frame
  Overlaid floating card (UI mockup screenshot):
    absolute positioned at approx. right-center
    rotate-[2.26deg]
    w-[203px] h-[135px]
    rounded corners, shows Train64 dashboard UI
```

---

### SECTION: Why teach on Train64 (Dark section)
**Node:** `683:12078` — `y: 881`, height: 952 px

**Container:**
```
w-full
bg-[#1B1B1B]
flex flex-col gap-[226px] items-center
px-[80px] py-[96px]
relative (decorative ellipse bg element, absolute positioned)
```

**Decorative bg:** Large semi-transparent ellipse, `size-[694px]`, absolute top-left area (purely ornamental).

**Inner content block:** `w-[1248px] flex flex-col gap-[74px] items-center px-[152px]`

**Section header** (`flex flex-col gap-[16px] items-center text-center text-white w-[616px]`):
```
Heading:
  "Why" + " teach on " — text-white font-bold text-[42px] leading-[48px]
  "Train 64" — text-[#B76E2D] font-bold text-[42px] leading-[48px]

Subtitle:
  "Everything you need to train and improve your chess skills"
  font-normal text-[18px] text-white leading-[28px]
```

**Feature grid** (`w-[804px] px-[36px] py-[43px]`):
```
grid grid-cols-2 grid-rows-2
gap-x-[72px] gap-y-[60.5px]
h-[573px]
```

Absolute overlay of dashed/line dividers (cross separating 4 cells) rendered as SVG lines.

**4 Feature items** (each `flex flex-col items-center gap-[35px] w-[330px] h-[200px]`):
Each item: icon (50×50 px) centered at top + text block below.

| # | Icon name | Title | Description |
|---|---|---|---|
| 1 | `famicons:calendar-outline` | Flexible Scheduling | "Complete flexibility teach, set your availability and let students book around your life" |
| 2 | `streamline:global-learning` | Global students | "We match you with motivated students who are committed to improvement and value your expertise" |
| 3 | `hugeicons:save-money-dollar` | Earn competitive income | "Set your own rates from $40-$100+/hour. Top coaches earn $4,000+ monthly while doing what they love" |
| 4 | `boxicons:chess` | Built-in classroom tools | "Teach using our interactive chess board and video classroom." |

Text block per item:
```
flex flex-col gap-[8px] items-start text-center text-white w-full
  Title: font-bold text-[21px] leading-[28px]     (PJ/Bold/21px token)
  Desc:  font-normal text-[16px] leading-[26px]   (PJ/Regular/16px token)
```

Grid dividers: two horizontal + two vertical lines rendered as thin SVG strokes (`rgba(255,255,255,0.15)` approximate).

---

### SECTION: How it works (Coach onboarding)
**Node:** `683:12151` — `y: 1833`, height: 678 px

**Container:**
```
w-full h-[678px]
bg-white
px-[96px] py-[80px]
```

**Inner layout:** `w-[1320px] flex flex-col gap-[*] items-center`

**Section header block** (`w-[1320px] h-[124px]`):
```
Eyebrow: "Getting started"
  text-[#B76E2D] font-semibold text-[14px] leading-[16px] text-center

H2: "How it works"
  font-bold text-[42px] text-[#212B36] leading-[48px] text-center w-[616px]

Subtitle: "From application to your first paying student in just a few days"
  font-normal text-[18px] text-[#637381] leading-[28px] text-center w-[517px]
```

**Progress connector row** (icon row above step cards, `w-[1320px] h-[32px]`):
Horizontal row with 4 icons connected by horizontal divider lines:
- Icon 1: `boxicons:search` (32×32)
- Connector line (`Horizontal/Inset` divider, ~298 px wide)
- Icon 2: `mynaui:calendar` (32×32)
- Connector line
- Icon 3: `streamline-plump:class-lesson` (32×32)
- Connector line
- Icon 4: `clarity:bullseye-line` (32×32)

**Step cards row** (`w-[1320px] flex gap-[353px] items-start`, effectively 4 equally spaced columns ~260 px each):

Each step card — `Block` frame, `w-[250px] h-[234px] flex flex-col`:
```
Step number badge:
  w-[48px] h-[48px] rounded (circle-like)
  bg-[#F1D9B6] or similar light warm bg
  font-bold text-[28px] leading-[28px] text-[#1B1B1B] text-center

Text content (mt-[40px]):
  Title:  font-bold text-[21px] leading-[28px] text-[#1B1B1B]
  Desc:   font-normal text-[16px] leading-[26px] text-[#637381] w-[218px]
```

| Step | Number | Title | Description |
|---|---|---|---|
| 1 | 1 | Apply as coach | "Create your profile and submit your coaching application" |
| 2 | 2 | Get approved | "Our team reviews your experience and coaching credentials." |
| 3 | 3 | Set your availability | "Choose when you want to teach and set your hourly rate." |
| 4 | 4 | Start teaching | "Accept bookings and start training students online." |

---

### SECTION: Real coaches, real earnings
**Node:** `683:12232` — `y: 2511`, height: 882 px

**Container:**
```
w-full
bg-white
px-[96px] py-[80px]
flex flex-col items-start
```

**Section header** (`text-center w-[592px] mx-auto flex flex-col gap-[16px]`):
```
Eyebrow: "Earnings"
  text-[#B76E2D] font-semibold text-[14px] leading-[16px]

H2 (mixed color):
  "Real coaches" — text-[#212B36] font-bold text-[42px] leading-[48px]
  ", " — text-[#212B36]
  "real earnings" — text-[#B76E2D] font-bold text-[42px] leading-[48px]

Subtitle:
  "See how coaches at different levels build successful careers on Train64"
  font-normal text-[18px] text-[#637381] leading-[28px] w-[592px]
```

**Earnings cards row** (`flex gap-[64px] items-start w-full`):
Two `CoachEarningsCard` components, each `flex-1`.

**CoachEarningsCard structure:**
```
bg-white
border border-[rgba(145,158,171,0.16)]
rounded-[20px]
p-[24px]
flex flex-col gap-[32px]
shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_rgba(145,158,171,0.12)]
```

*Profile row* (`flex gap-[16px] items-start`):
```
Avatar:
  size-[80px] rounded-full overflow-hidden
  img: coach headshot

Info block (w-[427px] flex flex-col gap-[4px]):
  Name:  font-bold text-[18px] leading-[28px] text-[#1B1B1B] tracking-[-0.44px]
  Line 2: "Grandmaster • FIDE 2350"  font-normal text-[14px] text-[#637381] leading-[20px] tracking-[-0.15px]
  Line 3: "Time commitment: 8/40hrs" — same styles
```

*Stats grid* (`grid grid-cols-2 gap-[12px]`, 4 cells):
Each cell: `rounded-[12px] pt-[12px] px-[12px] flex flex-col gap-[4px]`
- Warm tile (brown): `bg-[rgba(181,137,99,0.8)]`
- Light tile (beige): `bg-[rgba(241,217,182,0.8)]`

Cell layout:
```
Label: font-normal text-[12px] text-[#1B1B1B] leading-[16px]
Value: font-bold text-[16px] text-[#1B1B1B] leading-[24px] tracking-[-0.31px]
```

| Cell | Label | Value | Tile color |
|---|---|---|---|
| TL | Weekly hours | 8 hrs/week | warm brown |
| TR | Hourly rate | $50/hr | light beige |
| BL | Active students | 6 active students | light beige |
| BR | Monthly earnings | $1,600 | warm brown |

*Divider:* `Horizontal/Inset` thin line separator between stats grid and quote.

*Quote block* (`pt-[17px]`):
```
Italic quote text:
  font-italic font-normal text-[14px] text-[#637381] leading-[20px] tracking-[-0.15px]
  '"Perfect side income! I teach Saturday mornings and Sunday evenings while working my day job."'
```

*Card data — Coach 1:*
- Name: David Kim
- Title: Grandmaster • FIDE 2350
- Time commitment: 8/40hrs

*Card data — Coach 2:*
- Name: Daniela Naroditsky
- Title: Grandmaster • FIDE 2350
- Time commitment: 8/40hrs

**"Apply now" CTA** (below cards, centered):
```
bg-[#B58963] rounded-[8px] px-[16px] py-[5px]
flex items-center gap-[8px]
  Label: "Apply now" — font-bold text-[12px] text-white leading-[26px]
  Icon: ep:right arrow, size-[20px]
```

---

### SECTION: Tools for coaches
**Node:** `683:12325` — `y: 3393`, height: 947 px

**Container:**
```
w-full h-[947px]
bg-[#FAF6F1]   (warm off-white / beige background — inferred from screenshot)
px-[96px] py-[80px]
```

**Section header** (`w-[616px] mx-auto flex flex-col gap-[16px] items-center`):
```
H2:
  "Tools designed for" — text-[#1B1B1B] font-bold text-[42px] leading-[48px] text-center
  "chess coaches" — text-[#B76E2D] font-bold text-[42px] text-center
  (or combined single h2 with color split)

Subtitle:
  "Everything you need to train and improve your chess skills"
  font-normal text-[18px] text-[#637381] leading-[28px] text-center w-[483px]
```

**Feature grid** (`w-[1206px] px-[21px]`):
```
grid grid-cols-3 grid-rows-2
gap-x-[72px] gap-y-[60.5px]
px-[36px] py-[43px]
```

Absolute overlay of dashed divider lines (same cross/grid pattern as "Why teach" section).

**5 Feature items** (each `flex flex-col items-center gap-[35px] w-[330px] h-[200px]`):
Icon centered, 48–50 px. Text block below.

| # | Icon name | Title | Description |
|---|---|---|---|
| 1 | `streamline:chess-pawn` | Interactive Classroom | "Play and analyze games in real time with your coach." |
| 2 | `hugeicons:video-01` | Session Recordings | "Review your lessons anytime and track your progress." |
| 3 | `mage:dashboard-2` | Coach dashboard | "Track sessions, earnings, and student progress." |
| 4 | `famicons:calendar-outline` | Flexible Scheduling | "Book lessons based on your availability." |
| 5 | `glyphs:users` | Student management | "Keep track of your students and training sessions." |

Text styles per feature card:
```
Title: font-bold text-[21px] leading-[28px] text-[#1B1B1B] text-center w-full
Desc:  font-normal text-[16px] leading-[26px] text-[#637381] text-center w-full
```

Note: 5 items in a 3-col grid — row 1 has 3 items, row 2 has 2 items centered (cols 2 and 3 of 3, or centered via offset).

---

### SECTION: Classroom (Your virtual chess classroom)
**Node:** `683:12435` — `y: 4340`, height: 732 px

**Container:**
```
w-full h-[732px]
bg-white
px-[96px] py-[80px]
flex flex-col items-start
```

**Section header** (`w-full flex flex-col gap-[16px] items-center`):
```
Eyebrow: "Interactive Learning"
  text-[#B76E2D] font-semibold text-[14px] leading-[16px] text-center

H2: "Your virtual chess classroom"
  font-bold text-[42px] text-[#1B1B1B] leading-[48px] text-center

Subtitle:
  "Experience cutting-edge technology designed specifically for chess coaching"
  font-normal text-[18px] text-[#637381] leading-[28px] text-center w-[592px]
```

**Content row** (`flex items-center justify-between w-full mt-[64px]`):
- Left: feature list, `w-[613px]`
- Right: laptop product image, `w-[653px] h-[364px]`

**Feature list** (`w-[613px]`):
```
grid grid-cols-2 gap-x-[16px] gap-y-[24px]
3 rows × 2 cols = 6 items
```

Each feature item (`flex items-start gap-[12px]`):
```
Icon: size-[20px]
Text block (flex flex-col gap-[2px] w-[239–267px]):
  Title: font-semibold text-[14px] text-[#1B1B1B] leading-[20px] tracking-[-0.15px]
  Desc:  font-normal text-[12px] text-[#637381] leading-[16px]
```

| Icon | Title | Description |
|---|---|---|
| `boxicons:chess` | Interactive chess board | "Synchronized board for real-time position analysis" |
| `ph:chat` | Chat | "Built-in chat for questions, and follow-ups" |
| `hugeicons:video-01` | Live video sessions | "Video and audio quality ensures you never miss a detail" |
| `hugeicons:payment-01` | Automatic payments | "Get paid weekly via direct deposit" |
| `iconamoon:trend-up-light` | Progress dashboard | "Track rating gains, upcoming sessions, and skill improvements" |
| `mynaui:calendar` | Smart scheduling | "Automated booking system that prevents double-bookings" |

**Laptop illustration** (right side):
```
w-[653px] h-[364px]
Laptop mockup image (dark-frame laptop)
Screen content: Train64 classroom UI screenshot
  - Video feed of student (top-left quadrant)
  - Live chess board (right panel)
  - Sidebar navigation
```

---

### SECTION: Testimonials (What coaches say)
**Node:** `683:12565` — `y: 5072`, height: 654 px

**Container:**
```
w-full h-[654px]
bg-white
px-[96px] py-[80px]
flex flex-col items-start
```

**Section header** (`w-[1320px] h-[126px] flex flex-col gap-[*] items-center`):
```
Eyebrow: "Success Stories"
  text-[#B76E2D] font-semibold text-[14px] text-center leading-[16px]

H2: "What coaches say"
  font-bold text-[42px] text-[#212B36] leading-[48px] text-center w-[370px]

Subtitle:
  "See how our students have transformed their chess journey"
  font-normal text-[18px] text-[#637381] leading-[28px] text-center w-[288px]
```

**Testimonial cards row** (`flex gap-[32px] items-start w-[1320px] mt-[64px]`):
Three cards displayed horizontally.

**Card 1:** `w-[401px] h-[260px]`
**Card 2:** `w-[401px] h-[260px]`
**Card 3:** `w-[421px] h-[260px]`

Each testimonial card structure (`bg-white border border-[rgba(145,158,171,0.16)] rounded-[16px] p-[24px]`):
```
Star rating row (top):
  5 × icon-star, each size-[16px], gap-[4px] between
  Color: #F59E0B (amber)

Quote text block (mt-[16px]):
  "Quote text truncated..."
  font-normal text-[14px] text-[#1B1B1B] leading-[26px]
  h-[104px] (multi-line)

Author row (mt-[auto] / bottom):
  Avatar: size-[48px] rounded-full
  Name:   font-bold text-[18px] text-[#1B1B1B] leading-[24px]
  Role:   font-normal text-[14px] text-[#637381] leading-[20px]
```

**Testimonial data:**

| Name | Role | Quote (truncated from Figma) |
|---|---|---|
| Sarah Johnson | 2480 FIDE • Grandmaster | "In just 6 months, my rating jumped 250 points! The..." |
| David Kim | 2480 FIDE • International Master | "The structured approach and custom opening prepar..." |
| Jose luis Rodriguez | 2480 FIDE • FIDE Master | "Breaking through 2300 seemed impossible until I s..." |

---

### SECTION: Requirements (Who can become a coach)
**Node:** `683:12633` — `y: 5726`, height: 908 px

**Container:**
```
w-full h-[908px]
bg-white
px-[96px] py-[80px]
flex flex-col items-start
```

**Section header** (`w-[1320px] h-[116px]`):
```
Eyebrow: "Requirements"
  text-[#B76E2D] font-semibold text-[14px] text-center

H2: "Who can become a coach"
  font-bold text-[42px] text-[#1B1B1B] leading-[48px] text-center

Subtitle:
  "Experience cutting-edge technology designed specifically..."
  font-normal text-[18px] text-[#637381] text-center w-[592px]
```

**Two-column requirements layout** (`flex gap-[64px] items-start w-[1320px] mt-[64px]`):
Each column: `w-[628px]`

**Column header** (both columns, `flex items-center gap-[12px] h-[56px]`):
```
Icon container: size-[40px] rounded bg-light, p-[8px]
  Icon: size-[24px]

Text block:
  Column title:   font-bold text-[~24px] leading-[32px] text-[#1B1B1B]
  Column subtitle: font-normal text-[14px] text-[#637381] leading-[20px]
```

- **Column 1:** "Must-Have Requirements" / "Essential qualifications for all coaches"
- **Column 2:** "Nice-to-Have" / "Boost your profile and stand out"

**Requirement cards** (each column has 4, stacked with `gap-[16px]`):
Each card: `w-[628px] h-[108px] bg-white border border-[rgba(145,158,171,0.16)] rounded-[12px]`

Inside card (`p-[24px] flex items-start gap-[16px]`):
```
Emoji icon: size ~30×36px (rendered as text emoji)

Content block (w-[534px] flex flex-col gap-[8px]):
  Header row (flex items-center justify-between):
    Title (H4): font-bold text-[~18px] leading-[28px] text-[#1B1B1B]
    Badge: w-[~68px] h-[20px] rounded text-[12px] font-semibold
      "Required" badge: bg-[#B76E2D] text-white   (or outlined variant)
      "Optional" badge: bg-transparent text-[#637381] border border-[#D9D9D9]

  Description:
    font-normal text-[14px] text-[#637381] leading-[20px]
```

**Must-Have Requirements (left column):**

| Emoji | Title | Badge | Description |
|---|---|---|---|
| 🏆 | FIDE 2000+ or equivalent strength | Required | "National ratings accepted, proven experience considered" |
| 💬 | Fluent English communication | Required | "Written & spoken — ability to explain concepts clearly" |
| ❤️ | Teaching passion & student-first mindset | Required | "Genuine desire to help students improve and succeed" |
| 🌐 | Stable internet connection | Required | "Minimum 5 Mbps upload speed for smooth video sessions" |

**Nice-to-Have (right column):**

| Emoji | Title | Badge | Description |
|---|---|---|---|
| ⭐ | Prior online teaching experience | Optional | "National ratings accepted, proven experience considered" |
| 📜 | Coaching certifications | Optional | "Written & spoken — ability to explain concepts clearly" |
| 📊 | Chess software proficiency | Optional | "Genuine desire to help students improve and succeed" |
| 🌍 | Additional languages beyond English | Optional | "Minimum 5 Mbps upload speed for smooth video sessions" |

---

### SECTION: CTA Banner (Ready to start teaching?)
**Node:** `684:12923` — `y: 6634`, height: 522 px

**Container:**
```
w-full h-[522px]
bg-white
px-[96px] py-[110px]
flex flex-col gap-[10px] items-center justify-center
```

**Dark card** (`w-[1320px] h-[302px]`):
```
bg-[#1B1B1B]
rounded-[16px]
overflow-hidden
px-[118px] py-[48px]
flex gap-[64px] items-center
relative (decorative ellipse bg, absolute top-right)
```

**Card — left text block** (`w-[616px] flex flex-col gap-[16px]`):
```
H2: "Ready to start teaching?"
  font-bold text-[36px] text-white leading-[40px] tracking-[+0.37px]

Subtitle:
  "Join our community of elite chess coaches and turn your expertise into a thriving career"
  font-normal text-[20px] text-white leading-[28px] tracking-[-0.45px] w-[616px]

CTA button:
  bg-[#B76E2D] border border-[rgba(183,110,45,0.2)]
  rounded-[10px] px-[16px] py-[10px] w-[180px]
  flex items-center gap-[4px] justify-center
  Label: "Apply now" — font-bold text-[14px] text-white leading-[20px] tracking-[-0.15px]
  Icon: right-arrow, size-[16px]

Trust line below button:
  "No upfront costs  •  Start earning immediately after approval"
  font-normal text-[14px] text-white text-center leading-[22px] tracking-[-0.45px]
```

**Card — right visual** (chess board image card):
```
Absolute positioned, right side of dark card
w-[348px] h-[340px]
rounded-[14px]
border border-[rgba(145,158,171,0.16)]
shadow-[0px_0px_1.35px_rgba(145,158,171,0.2),0px_8px_16px_rgba(145,158,171,0.12)]
Overlapping/floating slightly above the dark card baseline
  img: chess board (standard position) with wooden board texture
```

**Decorative element:** Blurred ellipse, `size-[347px]`, absolute top-right of card, ornamental only.

---

### SECTION: Footer
**Node:** `683:12775` — `y: 7156`, height: 468 px

**Container:**
```
w-full h-[468px]
bg-white
flex items-start
px-[208px] py-[32px]
```

**Layout:** Horizontal flex, left brand block + right link columns.

**Left brand block** (`w-[262px] flex flex-col gap-[*]`):
```
Logo area (h-[36px]):
  Text: "Train64" (or brand wordmark)
  font-bold text-[24px] text-[#1B1B1B] leading-[36px]

Social icons row (mt-[24px], flex gap-[16px] h-[24px]):
  Instagram logo icon — size-[24px]
  YouTube logo icon  — size-[24px]
  LinkedIn logo icon — size-[24px]

Legal/copyright text (mt-[24px]):
  Small text link row
  font-normal text-[14px] text-[#637381]
```

**Right link columns** (`w-[818px] flex gap-[*]` — two visible link lists with titles):

**Link list 1** (`w-[262px]`):
```
Title: font-strong text-[14px] text-[#1B1B1B] (SemiBold) h-[38px]
Links (5 visible):
  - "How it works"     (102 px wide)
  - "Become a coach"   (128 px wide)
  - "Features"         (96 px wide)
  - "Pricing"          (89 px wide)
  - "Blog"             (63 px wide)
Each: font-normal text-[14px] text-[#637381] leading-[22px] h-[22px]
```

**Link list 2** (`w-[262px]`):
```
Title: font-strong text-[14px] text-[#1B1B1B] (SemiBold) h-[38px]
Links (2 visible):
  - "Privacy policy"   (122 px wide)
  - "Terms of use"     (104 px wide)
Each: font-normal text-[14px] text-[#637381] leading-[22px] h-[22px]
```

---

## 4. FRAME → COMPONENT BREAKDOWN

### COMPONENT: Button

**Variant: Primary Gold (filled CTA)**
```
bg-[#B76E2D]
rounded-[8px] or rounded-[10px]
px-[16px] py-[10–11px]
flex items-center gap-[4–8px] justify-center
min-w-[100px]

Label: font-['Plus_Jakarta_Sans'] font-bold text-[14–15px] text-white leading-[20–26px] tracking-[-0.15px]
Icon-right (optional): size-[16px] right-arrow SVG

Hover state (inferred): bg-[#9F5E25] (darker gold)
Active state: scale-[0.98] or brightness-90
Border variant: border border-[rgba(183,110,45,0.2)]
```

**Variant: Ghost / Outline (Log in)**
```
No background, no border
rounded-[10px]
h-[32px] px-[12px]
flex items-center justify-center

Label: font-medium text-[14px] text-[#0A0A0A] leading-[20px] tracking-[-0.15px]
Hover: bg-[rgba(0,0,0,0.05)]
```

**Variant: Small brown (Apply now, earnings)**
```
bg-[#B58963]
rounded-[8px]
px-[16px] py-[5px]
flex items-center gap-[8px]

Label: font-bold text-[12px] text-white leading-[26px]
Icon: ep:right, size-[20px]
```

**Variant: Hero CTA (large)**
```
bg-[#B76E2D]
rounded-[8px]
px-[16px] py-[11px] (h-[48px] total)
min-w-[242px]
flex items-center gap-[8px] justify-center

Label: font-bold text-[15px] text-white leading-[26px]
Icon-right: size-[16px]
```

---

### COMPONENT: CoachEarningsCard

```
bg-white
border border-[rgba(145,158,171,0.16)]
rounded-[20px]
p-[24px]
flex flex-col gap-[32px]
shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_rgba(145,158,171,0.12)]
w-full (flex-1 within 2-col layout)
```

Sub-sections (in order):
1. **Profile header** — avatar (80px circle) + name + subtitle lines
2. **Stats 2×2 grid** — gap-[12px], rounded-[12px] tiles, warm/light alternating bg
3. **Horizontal divider** — 1px `rgba(145,158,171,0.2)` inset line
4. **Quote block** — italic 14px gray text

Stats tile colors (alternating per card):
- Card 1 TL + Card 2 BR: `rgba(181,137,99,0.8)` — warm brown
- Card 1 TR + Card 1 BL + Card 2 TL + Card 2 BR: `rgba(241,217,182,0.8)` — light beige

---

### COMPONENT: StepCard

```
w-[250px] min-h-[234px]
flex flex-col items-start gap-[40px]
(within the HIW 4-step row)
```

**Step number badge:**
```
size-[48px]
bg-[#F1D9B6] (warm beige)
rounded-[8px] or rounded-[50%]
flex items-center justify-center
  Number text: font-bold text-[28px] text-[#1B1B1B] leading-[28px]
```

**Content block:**
```
flex flex-col gap-[8px]
  Title: font-bold text-[21px] leading-[28px] text-[#1B1B1B]
  Desc:  font-normal text-[16px] leading-[26px] text-[#637381] w-[218px]
```

---

### COMPONENT: FeatureCard (Why teach / Tools grids)

```
flex flex-col items-center gap-[35px]
w-[330px] h-[200px]
```

```
Icon container:
  size-[48–52px]
  flex items-center justify-center
  Icon SVG (iconify/outlined style, white or gold depending on bg)

Text block:
  flex flex-col gap-[8px] text-center w-full
  Title: font-bold text-[21px] leading-[28px]
         text-white (dark bg) / text-[#1B1B1B] (light bg)
  Desc:  font-normal text-[16px] leading-[26px]
         text-white (dark bg) / text-[#637381] (light bg)
```

---

### COMPONENT: RequirementItem

```
w-[628px] h-[108px]
bg-white border border-[rgba(145,158,171,0.16)]
rounded-[12px]
p-[24px] flex items-center gap-[16px]
```

```
Emoji icon:
  w-[30px] h-[36px]
  font-size ~28px emoji character

Content (flex flex-col gap-[8px] w-[534px]):
  Header row (flex items-center justify-between h-[28px]):
    Title H4: font-bold text-[18px] text-[#1B1B1B] leading-[28px]
    Badge (right): see Badge component

  Description:
    font-normal text-[14px] text-[#637381] leading-[20px]
```

---

### COMPONENT: Badge

**Variant: Required (filled gold)**
```
w-[69px] h-[20px]
bg-[#B76E2D] (or red/filled per design)
rounded-full (pill shape)
px-[8px]
flex items-center justify-center

Text: "Required"
  font-semibold text-[12px] text-white leading-[16px]
```

**Variant: Optional (outlined)**
```
w-[68px] h-[20px]
bg-transparent
border border-[#D9D9D9]
rounded-full
px-[8px]
flex items-center justify-center

Text: "Optional"
  font-semibold text-[12px] text-[#637381] leading-[16px]
```

---

### COMPONENT: Icon

Sizes used in the design:

| Size | Usage context |
|---|---|
| 16×16 px | Button trailing arrow, small inline icons |
| 20×20 px | Classroom feature list icons |
| 24×24 px | Footer social icons, nav icon placeholders |
| 32×32 px | HIW progress connector row icons |
| 48×50 px | Feature grid icons (Why teach, Tools sections) |
| 52×52 px | Feature grid icons (larger variants) |
| 80×80 px | Coach avatar (not an icon but img) |

Icon library: Mix of `famicons`, `boxicons`, `hugeicons`, `streamline`, `mynaui`, `clarity`, `mage`, `glyphs`, `ph`, `iconamoon`, `ep`.

---

### COMPONENT: SectionWrapper

**Light variant (default):**
```
w-full bg-white
px-[96px] py-[80px]
flex flex-col items-start
```

**Dark variant:**
```
w-full bg-[#1B1B1B]
px-[80px] py-[96px]
flex flex-col items-center
```

**Warm/beige variant (Tools section):**
```
w-full bg-[#FAF6F1]  (approximate — warm off-white)
px-[96px] py-[80px]
```

**Inner content constrained:**
```
max-w-[1320px] w-full mx-auto
```

---

## 5. LAYOUT PATTERNS

### Split Layouts

**Hero split (text left / image right):**
```
flex flex-row gap-[32px] items-center
Left:  flex-none w-[747px]  (text column)
Right: flex-none w-[718px]  (image column)
No responsive notes in desktop frame
```

**Classroom split (feature list left / laptop right):**
```
flex flex-row items-center justify-between
Left:  w-[613px] (2-col feature grid)
Right: w-[653px] (laptop mockup image)
```

**CTA Banner split (text left / chess board right):**
```
dark card: flex flex-row gap-[64px] items-center px-[118px]
Left:  w-[616px] text+button block
Right: w-[348px] chess board card (absolute-ish, slightly overflows card top)
```

### Card Grids

**Earnings cards:** `flex flex-row gap-[64px]` — 2 equal cards using `flex-1`

**Testimonial cards:** `flex flex-row gap-[~32px]` — 3 cards, slightly unequal widths (~401 + 401 + 421 px)

### Feature Grids

**Why teach (2×2):**
```
grid grid-cols-2 gap-x-[72px] gap-y-[60.5px]
w-[804px] px-[36px] py-[43px]
Visible separator lines (SVG overlay)
```

**Tools for coaches (3+2 in 3-col):**
```
grid grid-cols-3 gap-x-[72px] gap-y-[60.5px]
w-[1206px] px-[21px]
Row 1: 3 items; Row 2: 2 items (items 4+5, col 2 and 3 only — item 6 is hidden)
```

### Dual-Column Requirement Lists

```
flex flex-row gap-[64px] items-start
Each column: w-[628px] flex flex-col gap-[16px]
Column header row at top (icon + title + subtitle)
Then 4 requirement cards stacked vertically
```

### Section Alternation Pattern

| Order | Section | Background |
|---|---|---|
| 1 | Navigation | `rgba(255,255,255,0.8)` with border |
| 2 | Hero | `rgba(255,255,255,0.8)` (white) |
| 3 | Why teach | `#1B1B1B` (dark) |
| 4 | How it works | `#FFFFFF` |
| 5 | Real coaches earnings | `#FFFFFF` |
| 6 | Tools for coaches | `#FAF6F1` (warm beige) |
| 7 | Classroom | `#FFFFFF` |
| 8 | Testimonials | `#FFFFFF` |
| 9 | Requirements | `#FFFFFF` |
| 10 | CTA Banner | `#FFFFFF` outer / `#1B1B1B` card |
| 11 | Footer | `#FFFFFF` |

---

## 6. RESPONSIVE BEHAVIOR

The Figma frame is desktop-only at 1512 px. The following responsive transformations should be applied:

### Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| `lg` | ≥ 1024 px | Full desktop layout as designed |
| `md` | 768–1023 px | 2-col grids, reduced gutters |
| `sm` | < 768 px | Single column, stacked layout |

### Split → Single Column

- **Hero:** `lg:flex-row` → `flex-col` — image stacks below text on `< lg`
- **Classroom:** `lg:flex-row` → `flex-col` — laptop image moves below feature list on `< lg`
- **CTA Banner:** `lg:flex-row` → chess board image hides or stacks below text

### Grid Collapsing

- **Why teach 2×2:** stays 2-col on `md`, collapses to 1-col on `sm`
- **Tools 3-col:** `lg:grid-cols-3` → `md:grid-cols-2` → `sm:grid-cols-1`
- **Testimonials 3-col:** `lg:flex-row` → `md:grid grid-cols-2` → `sm:flex-col`
- **Requirements 2-col:** `lg:flex-row` → `sm:flex-col` (must-have above nice-to-have)
- **Earnings cards:** `lg:flex-row gap-[64px]` → `sm:flex-col`

### Padding / Gutter Reduction

- Page gutters: `px-[96px]` → `md:px-[32px]` → `sm:px-[16px]`
- Section padding: `py-[80px]` → `md:py-[48px]` → `sm:py-[32px]`

### CTA Resizing

- Hero CTA button stays full-width on mobile: `sm:w-full`
- Banner CTA button: `sm:w-full`

### Navigation

- Nav links + CTA group collapses to hamburger menu on `sm`
- Logo remains visible at all sizes

### Typography Scaling

- Hero H1 64 px: `lg:text-[64px]` → `md:text--[48px]` → `sm:text-[36px]`
- Section H2 42 px: `lg:text-[42px]` → `sm:text-[28px]`
- Section max-widths (e.g. `w-[616px]`): `lg:w-[616px]` → `sm:w-full`

---

## 7. REUSABLE COMPONENTS LIST

### Core UI

| Component | Description |
|---|---|
| `Button` | 4 variants: Primary Gold, Ghost, Small Brown, Hero Large. All support optional icon-right slot. |
| `Icon` | Thin-line icon system, 5 sizes (16/20/24/32/50 px). Uses Iconify-style names. |
| `Badge` | 2 variants: Required (gold filled pill), Optional (outlined gray pill). |

### Cards

| Component | Props / Variants |
|---|---|
| `CoachEarningsCard` | avatar, name, title, commitment, stats (4 cells), quote |
| `TestimonialCard` | avatar, name, rating, title, quote text |
| `StepCard` | stepNumber (1–4), title, description |
| `FeatureCard` | icon, title, description; variant: dark-bg / light-bg |
| `RequirementItem` | emoji, title, description, badge variant (required/optional) |

### Sections

| Component | Key props |
|---|---|
| `HeroCoachSection` | heading (two-weight), subtitle, ctaLabel, stats[3], heroImage |
| `WhyTeachSection` | heading, subtitle, features[4] |
| `HowItWorksSection` | heading, subtitle, steps[4] |
| `RealEarningsSection` | heading, subtitle, coaches[2], ctaLabel |
| `ToolsSection` | heading, subtitle, features[5] |
| `ClassroomSection` | eyebrow, heading, subtitle, features[6], laptopImage |
| `TestimonialsSection` | heading, subtitle, testimonials[3] |
| `RequirementsSection` | heading, subtitle, mustHave[4], niceToHave[4] |
| `CTASection` | heading, subtitle, ctaLabel, trustLine, chessboardImage |

### Layout

| Component | Description |
|---|---|
| `Navbar` | Logo + nav links (3) + button group (ghost + gold). Frosted white bg, sticky top. |
| `Footer` | Brand logo + social icons (3) + 2 link columns + copyright/legal link. |
| `SectionWrapper` | Background variant (white/dark/warm), inner max-width container, py padding. |
| `SectionHeader` | Eyebrow + H2 + subtitle, centered layout. Used across all content sections. |

---

*End of LandingCoach design specification.*
*Visual reference screenshot captured from Figma node `683:12034` at the time of this document's creation.*
