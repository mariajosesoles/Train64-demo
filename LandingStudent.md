# LANDING — STUDENT

> Design source: Figma file `OFGf4hBBQ9ts3ISAjN1bbs`, frame `Landing/ Student` (node `717:21506`)
> Frame dimensions: 1512 × 7122 px

---

## 1. PAGE CONTAINER

The root frame is a full-width, single-column layout with no horizontal scrolling. It stacks all sections vertically.

```
w-full max-w-[1512px] mx-auto flex flex-col bg-white overflow-x-hidden
```

**Inner content container** (used by most sections):

```
w-full max-w-[1320px] mx-auto px-0
```

The page uses a **96 px horizontal inset** from the frame edge before the 1320 px max-width container begins. In Tailwind terms:

```
px-24   (96px on each side at full width)
```

All sections are stacked with `py-20` (80 px top/bottom) as the standard vertical rhythm.

---

## 2. GLOBAL DESIGN TOKENS

### 2.1 Color Palette

| Token name | Hex value | Usage |
|---|---|---|
| `primary` / `brown-500` | `#B58963` | CTA buttons, badges, accents |
| `primary-dark` / `gold-500` | `#B76E2D` | Hover state, darker accent |
| `text-primary` / `Text/Primary` | `#212B36` | Main body text, headings |
| `text-secondary` / `dark-gray-500` | `#637381` | Subtitles, captions, meta text |
| `black-500` | `#1B1B1B` | Dark section background |
| `white-500` | `#FFFFFF` | Background Paper, cards |
| `yellow-500` | `#F59E0B` | Star ratings |
| `beige-500` | `#F1D9B6` | Hero background tint, badge backgrounds |
| `beige-40` (transparent) | `#F1D9B6` at 40% | Subtle card overlays |
| `gray-600` | `#52525B` | Footer text, secondary nav |
| `border-default` | `#D9D9D9` | Card borders, dividers |

### 2.2 Typography

**Font Family:**
- Primary: `Plus Jakarta Sans` — headings, UI labels, navigation
- Secondary: `Inter` — body copy fallback (SDS system variable)

**Type Scale:**

| Role | Size | Weight | Line Height | Tailwind approximation |
|---|---|---|---|---|
| Hero Heading H1 | ~72–80 px | 700 (Bold) | 1.2 | `text-7xl font-bold leading-tight` |
| Section Heading H2 | ~48 px | 700 (Bold) | 1.25 | `text-5xl font-bold leading-snug` |
| Card Heading / H3 | ~28 px | 700 (Bold) | 1.3 | `text-[28px] font-bold` |
| Subtitle / Lead | ~21 px | 700 (Bold) | 28 px | `text-xl font-bold` — `PJ/Bold/21px` |
| Body / Regular 18 | 18 px | 400 | 28 px | `text-lg font-normal leading-7` — `PJ/Regular/18px` |
| Body / Regular 16 | 16 px | 400 | 26 px | `text-base font-normal leading-[26px]` — `PJ/Regular/16px` |
| Label / Small | ~16 px | 600 | 1.4 | `text-base font-semibold` |
| Caption / Meta | ~14–16 px | 400 | 1.4 | `text-sm font-normal` |
| Badge Text | 16 px | 600 | auto | `text-sm font-semibold` |
| Step Number | ~28 px | 700 | auto | `text-[28px] font-bold` |
| Nav link | ~16 px | 400 | 20 px | `text-base font-normal` |

### 2.3 Spacing System

Base unit: 4 px (matches SDS `--sds-size-space-100`)

| Token | Value | Tailwind |
|---|---|---|
| `space-100` | 4 px | `p-1` / `gap-1` |
| `space-200` | 8 px | `p-2` / `gap-2` |
| `space-300` | 12 px | `p-3` / `gap-3` |
| `space-400` | 16 px | `p-4` / `gap-4` |
| `space-600` | 24 px | `p-6` / `gap-6` |
| `space-800` | 32 px | `p-8` / `gap-8` |
| Page gutter | 96 px | `px-24` |
| Section vertical | 80 px | `py-20` |
| Content max-width | 1320 px | `max-w-[1320px]` |

### 2.4 Elevation / Shadow

```
Shadow/Card: box-shadow: 0 12px 24px -4px rgba(145,158,171,0.12), 0 0 2px 0 rgba(145,158,171,0.20)
```

Tailwind custom: `shadow-[0_12px_24px_-4px_rgba(145,158,171,0.12),0_0_2px_0_rgba(145,158,171,0.20)]`

### 2.5 Border Radius

| Token | Value | Tailwind |
|---|---|---|
| `radius-200` | 8 px | `rounded-lg` |
| Card radius | ~12 px | `rounded-xl` |
| Button radius | ~8 px | `rounded-lg` |
| Badge radius | ~4–6 px | `rounded-md` |
| Avatar | full circle | `rounded-full` |

---

## 3. SECTIONS BREAKDOWN

---

### SECTION: Navigation (Navbar)

**Node:** `717:21507` — position y=0, height=65 px

**Container:**
```
w-full h-16 bg-white border-b border-[#D9D9D9] sticky top-0 z-50
```

**Inner layout:**
```
max-w-[1320px] mx-auto px-24 h-full flex items-center justify-between
```

**Left — Logo / Brand:**
```
flex items-center gap-2
```
- Text element "Text" (node `717:21510`): width=85 px, height=36 px
- Rendered as a brand wordmark or logo lockup
- Tailwind: `text-xl font-bold text-[#212B36]`

**Center-right — Navigation Links:**
```
flex items-center gap-10
```
Link items (each `text-base font-normal text-[#212B36] hover:text-[#B58963] transition-colors`):
1. "Features"
2. "Coaches"
3. "How it works"
4. "Become a coach"

**Right — Button Group:**
```
flex items-center gap-4
```

- **Log in button** (node `717:21517`): `h-8 px-3 text-sm font-medium text-[#212B36] border border-[#D9D9D9] rounded-lg hover:bg-gray-50`
- **Get started button** (node `717:21519`): `h-10 px-4 text-sm font-semibold bg-[#212B36] text-white rounded-lg hover:bg-[#1B1B1B]`

---

### SECTION: HERO

**Node:** `717:21526` — y=65, width=1512, height=816

**Container:**
```
w-full h-[816px] relative overflow-hidden bg-[#FAF6F0]
```
(Warm beige/cream background inferred from the chess-themed landing aesthetic visible in screenshot)

**Layout:** Two-column split, no explicit grid — absolutely positioned content areas
```
max-w-[1320px] mx-auto px-24 h-full flex items-center relative
```

**Left column — Text Content** (node `717:21528`): x=96, y=207, width=721, height=402
```
flex flex-col gap-6 max-w-[721px] pt-[207px]
```

**Headline block** (node `717:21529`): width=721, height=245
- Title (node `717:21530`): width=721, height=162
  ```
  text-[72px] font-bold leading-tight text-[#212B36] tracking-tight
  ```
  Content: **"Improve your chess with world-class coaches"**

- Subtitle (node `717:21531`): y=170, width=721, height=75
  ```
  text-xl font-normal text-[#637381] leading-relaxed mt-4
  ```

**CTA Button** (node `717:21532`): y=277, width=200, height=48
```
inline-flex items-center gap-2 h-12 px-6 bg-[#B58963] text-white font-semibold text-base rounded-lg hover:bg-[#B76E2D] transition-colors
```
- Label text (node `717:21534`): width=94 — "Get started"
- Right arrow icon (node `717:21536`): 16×16

**Right column — Hero Image** (node `717:21549`): x=849, y=80, width=718, height=656
```
absolute right-0 top-20 w-[718px] h-[656px] pointer-events-none
```
- Contains a laptop/chess scene illustration or photo
- Overlapping the right gutter deliberately

**Stats strip** (node `717:21532` area, hidden in primary variant): 4 stat cards positioned below the hero CTA at y=357 — see Stats Card component in section 4.

---

### SECTION: Stats Bar

**Node:** `717:22531` — x=228, y=679.5, width=1056, height=151

**Container:**
```
w-full py-0
```

**Inner layout:**
```
max-w-[1056px] mx-auto flex items-center gap-6 bg-[#1B1B1B] rounded-2xl px-6 py-6
```

**4 Stats Cards** side-by-side:
```
flex-1 flex flex-col items-center gap-1
```
Each card (node instances `717:22532` to `717:22535`): width=240, height=103

Stats visible in screenshot:
- **1,000+** / "Coaches"
- **9,156+** / "Students"
- **10,500+** / "Hours taught"
- **4.9** / (rating)

Each stat card:
```
flex flex-col items-center justify-center gap-1 px-6
heading: text-3xl font-bold text-white
label: text-sm font-normal text-[#637381]
```

Dividers between cards: `border-r border-[#637381]/30`

---

### SECTION: COACHES (Expert Instructors)

**Node:** `717:21552` — y=881, width=1512, height=1602

**Container:**
```
w-full py-20 bg-white
```

**Inner:**
```
max-w-[1320px] mx-auto px-24 flex flex-col gap-16
```

**Section Header** (node `717:21554` sub-frame `717:21554`, height=172):
```
flex flex-col items-center text-center gap-4
```

- **Eyebrow label** (node `717:21558`): x=600, y=0, width=120, height=16
  ```
  text-sm font-semibold text-[#B58963] uppercase tracking-wider
  ```
  Content: "Expert Instructors"

- **Section Title** (node `717:21559`): width=616, height=96
  ```
  text-5xl font-bold text-[#212B36] leading-snug text-center
  ```
  Content: "Learn from the best chess coaches"

- **Section Subtitle** (node `717:21560`): width=816, height=28
  ```
  text-lg font-normal text-[#637381] text-center leading-7
  ```
  Content: "Train with FIDE-certified coaches who've helped thousands of students achieve their rating goals"

**Coach Cards Grid** (node `717:21561`): y=246, width=1320, height=1086

Layout: **3-column grid, 2 rows** (6 cards total)
```
grid grid-cols-3 gap-6
```

Each column: width=424 px, gap between columns = 424 px (cols at x=0, 448, 896)
Row height: 523 px, second row starts at y=547

**"See more" Button** (node `717:21844`): x=585, y=1396, width=150, height=36
```
flex items-center gap-2 mx-auto text-sm font-semibold text-[#212B36] border border-[#D9D9D9] rounded-lg px-4 h-9 hover:bg-gray-50
```
- Label (node `717:21845`): width=90 — "See all coaches"
- Icon (node `717:21846`, `ep:right`): 20×20

---

### SECTION: HIW (How It Works)

**Node:** `717:21848` — y=2483, width=1512, height=678

**Container:**
```
w-full py-20 bg-white
```

**Inner:**
```
max-w-[1320px] mx-auto px-24 flex flex-col gap-16
```

**Section Header** (node `717:21850`): height=124
```
flex flex-col items-center text-center gap-3
```

- **Eyebrow** (node `717:21852`): width=104 — "Getting started"
  ```
  text-sm font-semibold text-[#B58963] uppercase tracking-wider
  ```

- **Heading** (node `717:21853`): width=616, height=48 — "How it works"
  ```
  text-5xl font-bold text-[#212B36] leading-snug text-center
  ```

- **Sub-heading** (node `717:21854`): width=368, height=28 — "Start improving your chess in 4 simple steps"
  ```
  text-lg font-normal text-[#637381] text-center
  ```

**Steps connector row** (node `717:21855`): y=203, height=300

Progress line icons row (node `717:21856`): `flex items-center justify-between w-full`
- Icon 1 (node `717:21857`, `boxicons:search`): 32×32 — Find
- Horizontal connector line (node `717:21859`): width=298, height=2 — `border-t border-[#D9D9D9]`
- Icon 2 (node `717:21860`, `mynaui:calendar`): 32×32 — Book
- Horizontal connector line: width=298, height=2
- Icon 3 (node `717:21863`, `streamline-plump:class-lesson`): 32×32 — Classroom
- Horizontal connector line: width=298, height=2
- Icon 4 (node `717:21868`, `clarity:bullseye-line`): 32×32 — Improve

**Steps content row** (node `717:21874`): y=46 within parent, width=1320, height=254

Layout: `flex items-start justify-between gap-0` with 4 columns at:
- Col 1: x=0 (width=260)
- Col 2: x=353 (width=260)
- Col 3: x=707 (width=260)
- Col 4: x=1060 (width=260)

Each step block (node `717:21882` "Block" pattern): width=250, height=234
```
flex flex-col gap-6
```

- **Step number circle** (node `717:21883`, "LandingPage"): 48×48
  ```
  w-12 h-12 rounded-full border-2 border-[#B58963] flex items-center justify-center text-[28px] font-bold text-[#212B36]
  ```

- **Step content** (node `717:21887`, "Top Content"):
  - Title: `text-[28px] font-bold text-[#212B36] leading-snug`
  - Description: `text-base font-normal text-[#637381] leading-relaxed`

Step content:
1. **"Find a coach"** — "Browse expert chess coaches and read reviews."
2. **"Book a session"** — "Choose a coach and schedule a lesson that fits your time."
3. **"Join the classroom"** — "Meet your coach online and train live using our interactive chess board."
4. **"Review and improve"** — "Replay your recorded sessions and analyze your moves."

---

### SECTION: Features (Dark — Everything you need)

**Node:** `717:21929` — y=3161, width=1512, height=935

**Container:**
```
w-full py-20 bg-[#1B1B1B] relative overflow-hidden
```
(Dark background with subtle radial gradient decorative ellipses)

**Decorative background elements** (node `717:21931`): large blurred ellipses — implement as:
```
absolute inset-0 overflow-hidden pointer-events-none
  <div class="absolute -left-[400px] top-[300px] w-[1388px] h-[1388px] rounded-full bg-[#B58963]/5 blur-3xl" />
```

**Inner:**
```
max-w-[1248px] mx-auto px-0 flex flex-col gap-[214px]
```
(Inner content starts at x=132 from edge, width=1248)

**Section Header** (node `717:21935`): width=616, height=140, centered
```
flex flex-col items-center text-center gap-6 mx-auto
```

- **Heading** (node `717:21937`): width=616, height=96
  ```
  text-5xl font-bold text-white leading-snug text-center
  ```
  Content: "Everything you need to **improve your chess**" (emphasis on last two words in `text-[#B58963]`)

- **Subtext** (node `717:21938`): width=483, height=28
  ```
  text-lg font-normal text-[#637381] text-center
  ```
  Content: "Everything you need to train and improve your chess skills"

**Features grid** (node `717:21939`): y=214, width=1206, height=573

Layout: `grid grid-cols-3 gap-0 relative` with internal dividing lines

Grid items at two rows (y=43 and y=330):
- Row 1: items at x=36, 438, 840
- Row 2: items at x=237, 639 (5 items total, 3+2 layout)

Grid dividers (node `717:21998`): vertical lines at x=383 and x=820, horizontal at y=286
```
absolute inset-0 pointer-events-none
  vertical: left-[383px] top-0 w-px h-[286px] bg-[#637381]/30
  vertical: left-[820px] top-0 w-px h-[286px] bg-[#637381]/30
  horizontal: top-[286px] left-0 w-full h-px bg-[#637381]/30
  vertical-row2: left-[602px] top-[286px] w-px h-[286px] bg-[#637381]/30
```

Each feature item: width=330, height=200
```
flex flex-col items-center text-center gap-8 px-4 py-10
```

- **Icon** (50×50):
  ```
  w-[50px] h-[50px] text-[#B58963]
  ```

- **Content block** (width=330, height=88):
  ```
  flex flex-col gap-3
  ```
  - Title: `text-[28px] font-bold text-white leading-snug text-center`
  - Description: `text-base font-normal text-[#637381] text-center leading-relaxed`

Feature items with icons:
1. Icon: `lucide:chess-rook` — **"1-on-1 Coaching"** — "Personalized training with experienced chess coaches."
2. Icon: `streamline:chess-pawn` — **"Interactive Classroom"** — "Play and analyze games in real time with your coach."
3. Icon: `hugeicons:video-01` — **"Session Recordings"** — "Review your lessons anytime and track your progress."
4. Icon: `famicons:calendar-outline` — **"Flexible Scheduling"** — "Book lessons based on your availability."
5. Icon: `hugeicons:chart-up` — **"Game Analysis"** — "Review moves, tactics, and strategies after each session."

---

### SECTION: What You Can Learn

**Node:** `717:22090` — y=4096, width=1512, height=740

**Container:**
```
w-full py-20 bg-white
```

**Inner:**
```
max-w-[1320px] mx-auto px-24 flex flex-col gap-16
```

**Section Header** (node `717:22092`): height=152
```
flex flex-col items-center text-center gap-4
```

- Eyebrow (node `717:22093`): "Comprehensive Curriculum" — `text-sm font-semibold text-[#B58963] uppercase tracking-wider`
- Title (node `717:22094`): width=384, height=48 — "What you can learn" — `text-5xl font-bold text-[#212B36] text-center`
- Description (node `717:22095`): width=759, height=56 — `text-lg font-normal text-[#637381] text-center leading-7`

**Content area** (node `717:22096`): y=216, height=364

**Layout:** Split — left side is a laptop mockup image, right side is a 2-column features list

Left: `instance 717:22206 "laptop"`: x=667, width=653, height=364
```
w-[653px] h-[364px] rounded-xl overflow-hidden object-cover
```
(Laptop mockup component showing chess interface)

Right features list (node `717:22146`): x=0 (but conceptually right side), width=613.5, height=194

Actually in this section the left side is features (`717:22102` at x=0) and right is laptop (`717:22206` at x=667):
```
flex items-center gap-16
```

Left features block: `flex flex-col gap-0 w-[613.5px]`

Features grid: `grid grid-cols-2 gap-x-8 gap-y-[70px]` (items at y=0 and y=70 and y=140)

Each feature item (width=298.75, height=54):
```
flex items-start gap-4
```
- Icon container: `w-5 h-5 mt-0.5 text-[#B58963] shrink-0` (icon at 20×20, node `717:22037`)
- Content:
  - Title: `text-base font-semibold text-[#212B36] leading-5`
  - Subtitle: `text-sm font-normal text-[#637381] leading-4 mt-0.5`

Feature items:
1. **"Opening theory"** / "Build a solid repertoire for white and black"
2. **"Tactical patterns"** / "Master forks, pins, skewers, and discovered attacks"
3. **"Positional understanding"** / "Learn pawn structures, weak squares, and strategic plans"
4. **"Endgame technique"** / "Essential king & pawn, rook, and minor piece endings"
5. **"Game analysis"** / "Find your mistakes and understand critical moments"
6. **"Mental preparation"** / "Tournament psychology, time management, and focus"

---

### SECTION: Your Virtual Chess Classroom

**Node:** `717:22207` — y=4836, width=1512, height=740

**Container:**
```
w-full py-20 bg-white
```

**Inner:**
```
max-w-[1320px] mx-auto px-24 flex flex-col gap-16
```

**Section Header** (node `717:22209`): height=152
```
flex flex-col items-center text-center gap-4
```

- Eyebrow (node `717:22210`): "Interactive Learning" — `text-sm font-semibold text-[#B58963] uppercase tracking-wider`
- Title (node `717:22211`): width=575, height=48 — "Your virtual chess classroom" — `text-5xl font-bold text-[#212B36] text-center`
- Description (node `717:22212`): width=592, height=56 — "Experience cutting-edge technology designed specifically for chess coaching" — `text-lg font-normal text-[#637381] text-center leading-7`

**Content area** (node `717:22213`): y=216, height=364

**Layout:** Split left-right (reversed from "Learn" section)
```
flex items-start gap-16
```

Left: Laptop instance (`717:22219`): x=0, width=653, height=364
```
w-[653px] h-[364px] rounded-xl overflow-hidden shrink-0
```

Right features (node `717:22220`): x=706.5, y=41, width=613.5, height=282
```
flex flex-col gap-0 pt-10
```

Features grid (node `717:22264`): `grid grid-cols-2 gap-x-8 gap-y-[78px]` (items at y=0, 78, 156)

Each feature item (width=298.75, height=54):
```
flex items-start gap-4
```

Feature items with icons:
1. Icon: `boxicons:chess` (20×20) — **"Live chessboard"** / "Play and analyze moves together in real-time with a synchronized chess board."
2. Icon: `ph:chat` (20×20) — **"Chat"** / "Share PGN files, links, and notes with your coach"
3. Icon: `hugeicons:video-01` (20×20) — **"Live video sessions"** / "Crystal-clear HD video connection"
4. Icon: `hugeicons:video-01` (20×20) — **"Session recordings"** / "Review every lesson at your own pace"
5. Icon: `hugeicons:chart-up` (20×20) — **"Game analysis"** / "Engine analysis, opening explorer, and performance tracking"
6. Icon: `iconamoon:trend-up-light` (20×20) — **"Progress dashboard"** / "Track your improvement over time"

**CTA Button** (node `717:22336`): y=242, width=180, height=40
```
inline-flex items-center gap-2 h-10 px-5 bg-[#212B36] text-white text-sm font-semibold rounded-lg hover:bg-[#1B1B1B] transition-colors
```
- Label (node `717:22337`): "Try for free" / "Book a session"
- Right icon (`ep:right`, 20×20)

---

### SECTION: Testimonials (What our students say)

**Node:** `717:22422` — y=5576, width=1512, height=654

**Container:**
```
w-full py-20 bg-white
```

**Inner:**
```
max-w-[1320px] mx-auto px-24 flex flex-col gap-16
```

**Section Header** (node `717:22424`): height=124
```
flex flex-col items-center text-center gap-4
```

- Eyebrow (node `717:22425`): "Success Stories" — `text-sm font-semibold text-[#B58963] uppercase tracking-wider`
- Title (node `717:22426`): width=452, height=48 — "What our students say" — `text-5xl font-bold text-[#212B36] text-center`
- Subtitle (node `717:22427`): width=485, height=28 — "See how our students have transformed their chess game" — `text-lg font-normal text-[#637381] text-center`

**Testimonials grid** (node `717:22428`): y=210.75, width=1320, height=260

Layout: `flex items-stretch gap-8` (3 cards)

Cards:
- Card 1 (node `717:22429`): x=0, width=401.66, height=260
- Card 2 (node `717:22450`): x=433.66, width=401.66, height=260
- Card 3 (node `717:22471`): x=867.33, width=421.66, height=260

**Testimonial data:**
1. Stars + quote: *"In just 6 months, my rating jumped 250 points! The..."* | **Sarah Johnson** | 1850 → 2100
2. Stars + quote: *"The structured approach and custom opening preparation..."* | **David Kim** | 1400 → 1750
3. Stars + quote: *"Breaking through 2300 seemed impossible until I started..."* | **Jose Luis Rodriguez** | 2000 → 2300

---

### SECTION: CTA (Ready to elevate — WTT)

**Node:** `717:22493` — y=6230, width=1512, height=424

**Container:**
```
w-full py-[110px] bg-white
```

**Card** (node `717:22494`): x=96, y=110, width=1320, height=204
```
max-w-[1320px] mx-auto bg-[#1B1B1B] rounded-2xl relative overflow-hidden
```

**Decorative ellipses** (nodes `717:22495`, `717:22498`): large translucent circles positioned at left and right edges of card
```
absolute left-[84px] -top-5 w-[347px] h-[347px] rounded-full bg-[#B58963]/10 blur-2xl pointer-events-none
absolute right-[140px] -top-[72px] w-[347px] h-[347px] rounded-full bg-[#B58963]/10 blur-2xl pointer-events-none
```

**Chess piece decoration** (node `717:22514`): x=992, y=41, width=348, height=340
```
absolute right-24 -bottom-6 w-[348px] h-[340px] pointer-events-none opacity-20
```
(Chess rook/piece silhouette)

**Text + CTA block** (node `717:22501`): x=118, y=32, width=632, height=140
```
relative z-10 flex flex-col gap-8 pl-[118px] py-8
```

- **Heading** (node `717:22503`): width=632, height=40
  ```
  text-[40px] font-bold text-white leading-tight
  ```
  Content: "Ready to elevate your chess game?"

- **Subtext** (node `717:22504`): width=539, height=28
  ```
  text-lg font-normal text-[#637381]
  ```
  Content: "Join thousands of players improving their skills with top coaches"

- **CTA Button** (node `717:22505`): y=100, width=180, height=40
  ```
  inline-flex items-center gap-2 h-10 px-6 bg-[#B58963] text-white text-sm font-semibold rounded-lg hover:bg-[#B76E2D] transition-colors
  ```
  - Label: "Find a coach"
  - Right icon (node `717:22511`): 16×16

---

### SECTION: Footer

**Node:** `717:22515` — y=6654, width=1512, height=468

**Container:**
```
w-full py-8 bg-[#1B1B1B] border-t border-[#637381]/20
```

**Layout:**
```
max-w-[1320px] mx-auto px-24 flex items-start gap-16
```

**Left column — Brand + Social** (node `717:22516`): x=208, y=32, width=262, height=130
```
flex flex-col gap-6
```

- **Brand wordmark** (node `717:22517`): 85×36
  ```
  text-2xl font-bold text-white
  ```

- **Social links row** (node `717:22519`): width=104, height=24
  ```
  flex items-center gap-4
  ```
  - Instagram icon (node `717:22520`): 24×24 — `text-[#637381] hover:text-white transition-colors`
  - YouTube icon (node `717:22522`): 24×24
  - LinkedIn icon (node `717:22524`): 24×24

- **Footer legal text** (node `717:22526`): width=262, height=22 — one visible link item

**Right column — Link Lists** (node `717:22527`): x=486, y=32, width=818, height=276
```
flex items-start gap-16
```

**Link List 1** (node `717:22528`): x=278, width=262, height=208
```
flex flex-col gap-4
```
- **Column heading** (node `0:73`): `text-sm font-bold text-white uppercase tracking-wider mb-2`
- Links (nodes `0:77` through `0:85`): 5 visible items
  ```
  text-sm font-normal text-[#637381] hover:text-white transition-colors leading-[22px]
  ```

**Link List 2** (node `717:22529`): x=556, width=262, height=106
```
flex flex-col gap-4
```
- **Column heading** (node `0:13`): same as above
- Links (nodes `0:18`, `0:20`): 2 visible items

Footer bottom bar (implied): `mt-8 pt-6 border-t border-[#637381]/20 flex items-center justify-between text-xs text-[#637381]`

---

## 4. FRAME → COMPONENT BREAKDOWN

---

### COMPONENT: Button (Primary — CTA)

Used in: Hero CTA, CTA section, Classroom section

```
inline-flex items-center justify-center gap-2
h-10 px-6 (standard) | h-12 px-6 (hero large)
bg-[#B58963] text-white
text-sm font-semibold rounded-lg
hover:bg-[#B76E2D] active:opacity-90 transition-colors
```

With end icon variant:
```
inline-flex items-center gap-2
[label text] + <Icon className="w-4 h-4 ml-1" />
```

---

### COMPONENT: Button (Secondary / Ghost)

Used in: Navbar "Log in", Coaches "See all"

```
inline-flex items-center justify-center gap-2
h-8 px-3 (small) | h-9 px-4 (medium)
bg-transparent text-[#212B36]
border border-[#D9D9D9] rounded-lg text-sm font-medium
hover:bg-gray-50 transition-colors
```

---

### COMPONENT: Button (Dark)

Used in: Navbar "Get started", Classroom section CTA

```
inline-flex items-center justify-center gap-2
h-10 px-5 bg-[#212B36] text-white
text-sm font-semibold rounded-lg
hover:bg-[#1B1B1B] transition-colors
```

---

### COMPONENT: CoachCard

**Node pattern:** `729:26416` "Card 7" (and siblings) — width=424, height=523

**Outer:**
```
w-[424px] rounded-xl overflow-hidden bg-white
shadow-[0_12px_24px_-4px_rgba(145,158,171,0.12),0_0_2px_0_rgba(145,158,171,0.20)]
```

**Image area** (node `729:26417`, "img"): height=258
```
w-full h-[258px] relative overflow-hidden bg-gray-100
```
- Photo fills full area: `w-full h-full object-cover`
- (Heart icon overlay — hidden in primary state)
- (Badge overlay on image — hidden in primary state)

**Body area** (node `729:26439`, "bottom"): height=265
```
w-full p-6 flex flex-col gap-5
```

**Name + Badge row** (node `729:26443`, "Frame 276"): height=24
```
flex items-center justify-between
```
- Coach name: `text-[#212B36] text-base font-bold` (width ~145)
- Badge (node `729:26449`): width=113, height=24
  ```
  inline-flex items-center gap-1 px-2 py-0.5 bg-[#F1D9B6] text-[#B58963] text-xs font-semibold rounded-md
  ```
  - Label: "Grandmaster"
  - Trophy icon (node `729:26451`, `mdi:trophy-award`): 16×16

**Rating row** (node `729:26453`, "Rating"): height=22
```
flex items-center gap-2 flex-wrap
```
- FIDE rating text: `text-sm font-semibold text-[#212B36]` — e.g. "FIDE 2200"
- Dot separator: `text-[#637381] text-xs`
- Students count with person icon (node `729:26456`): `flex items-center gap-1 text-sm text-[#637381]` — e.g. "127 students"
- Dot separator
- Star rating (node `729:26466`): `flex items-center gap-1`
  - Star icon 20×20: `text-[#F59E0B]`
  - Rating number: `text-sm font-semibold text-[#212B36]` — "4.9"
- Review count: `text-sm text-[#637381]` — "(120 reviews)"

**Bio text** (node `729:26476`): height=45
```
text-sm font-normal text-[#637381] leading-relaxed line-clamp-3
```

**Language row** (node `729:26477`): height=18
```
flex items-center gap-1
```
- Globe icon (`ic:round-language`): 16×16, `text-[#637381]`
- Language text: `text-sm text-[#637381]`

**Footer row** (node `729:26481`): height=36
```
flex items-center justify-between
```
- Price/availability info (node `729:26482`): `flex items-center gap-2 text-sm text-[#637381]`
  - Price label: `text-sm text-[#637381]`
  - Dot: `text-[#637381]`
  - Value (e.g. hourly rate): `text-sm font-semibold text-[#212B36]`
- **Book button** (node `729:26490`): width=106, height=36
  ```
  inline-flex items-center justify-center h-9 px-4 bg-[#B58963] text-white text-sm font-semibold rounded-lg hover:bg-[#B76E2D]
  ```

---

### COMPONENT: StatsCard

**Node instances:** `717:22532` to `717:22535` — each 240×103

Part of the stats bar strip overlapping the Hero/Coaches boundary. Dark background strip.

```
flex flex-col items-center justify-center gap-1 px-6
```

- **Number / Metric:**
  ```
  text-3xl font-bold text-white
  ```
  e.g. "1,000+", "9,156+", "10,500+", "4.9"

- **Label:**
  ```
  text-sm font-normal text-[#637381]
  ```
  e.g. "Coaches", "Students", "Hours taught", [star icon]

---

### COMPONENT: TestimonialCard

**Node pattern:** `717:22429`, `717:22450`, `717:22471` — width ~401–421, height=260

**Outer:**
```
flex-1 rounded-xl bg-white p-6 flex flex-col justify-between
border border-[#D9D9D9]
shadow-[0_12px_24px_-4px_rgba(145,158,171,0.12),0_0_2px_0_rgba(145,158,171,0.20)]
```

**Stars row** (node `717:22430`): height=16
```
flex items-center gap-1
```
- 5 star icons: each 16×16, `text-[#F59E0B]`

**Quote text** (node `717:22441`): height varies (78–104 px)
```
text-sm font-normal text-[#212B36] leading-relaxed italic mt-4
```
Content examples:
- *"In just 6 months, my rating jumped 250 points! The coaching was incredible..."*
- *"The structured approach and custom opening preparation helped me..."*
- *"Breaking through 2300 seemed impossible until I started with this platform..."*

**Author row** (node `717:22443`): height=48
```
flex items-center gap-4 mt-4
```
- Avatar (node `717:22444`): 48×48, `rounded-full object-cover`
- Author info:
  - Name: `text-sm font-bold text-[#212B36]` — e.g. "Sarah Johnson"
  - Rating progress: `text-xs font-normal text-[#B58963]` — e.g. "1850 → 2100"

---

### COMPONENT: SectionEyebrow (Label)

Reused in every section header.

```
text-sm font-semibold text-[#B58963] uppercase tracking-wider
```

---

### COMPONENT: SectionHeader (Centered)

Pattern repeated across: Coaches, HIW, Features, Learn, Classroom, Testimonials

```
flex flex-col items-center text-center gap-3 max-w-[816px] mx-auto
```

- Eyebrow: `text-sm font-semibold text-[#B58963] uppercase tracking-wider`
- Title: `text-5xl font-bold text-[#212B36] leading-snug`
- Subtitle: `text-lg font-normal text-[#637381] leading-7`

**Dark variant** (used in Features section):
- Title: `text-5xl font-bold text-white`
- Subtitle: `text-lg text-[#637381]`

---

### COMPONENT: FeatureItem (Icon + Title + Description)

Used in: Features dark grid, Learn section, Classroom section

```
flex flex-col items-center gap-4
```

(For centered/grid layout in Features dark section)

```
flex items-start gap-4
```

(For left-aligned list in Learn/Classroom sections)

Icon wrapper:
```
w-[50px] h-[50px] flex items-center justify-center text-[#B58963] shrink-0
```
(Dark section: `w-[50px] h-[50px]`)
(List layout: `w-5 h-5 mt-0.5`)

Text block:
```
flex flex-col gap-1
```
- Title: `text-[28px] font-bold text-white` (dark) or `text-base font-semibold text-[#212B36]` (light)
- Description: `text-base font-normal text-[#637381] leading-relaxed`

---

### COMPONENT: StepBlock (How It Works)

```
flex flex-col gap-6 max-w-[250px]
```

Number badge:
```
w-12 h-12 rounded-full border-2 border-[#B58963] flex items-center justify-center
text-[28px] font-bold text-[#212B36]
```

Title: `text-[28px] font-bold text-[#212B36]`
Description: `text-base font-normal text-[#637381] leading-relaxed`

---

### COMPONENT: Badge (Grandmaster / Title)

```
inline-flex items-center gap-1 px-2 py-0.5
bg-[#F1D9B6] text-[#B58963]
text-xs font-semibold rounded-md
```

With icon variant: includes `mdi:trophy-award` 16×16 at end.

---

### COMPONENT: NavLink

```
text-base font-normal text-[#212B36]
hover:text-[#B58963] transition-colors
cursor-pointer
```

---

### COMPONENT: FooterLinkList

```
flex flex-col gap-2
```

Column heading:
```
text-sm font-bold text-white uppercase tracking-wider mb-2
```

Link items:
```
text-sm font-normal text-[#637381] hover:text-white transition-colors
```

---

### COMPONENT: SocialIconButton

```
w-6 h-6 text-[#637381] hover:text-white transition-colors cursor-pointer
```

---

## 5. LAYOUT PATTERNS

### 5.1 Full-Width Dark Section with Decorative Ellipses
Used in: Features section (`#1B1B1B` bg), CTA card
- Background: `bg-[#1B1B1B]`
- Decorative circles: `absolute rounded-full bg-[#B58963]/5 blur-3xl pointer-events-none`
- Content stays within max-width container

### 5.2 Centered Section (Text + Cards Below)
Used in: Coaches, Testimonials, HIW
Pattern:
```
flex flex-col items-center gap-16
  <SectionHeader centered />
  <grid or flex layout>
```

### 5.3 Split Layout (Image / Text)
Used in: "What You Can Learn" and "Your Virtual Chess Classroom"
- "Learn": features list left, laptop right
- "Classroom": laptop left, features list right
```
flex items-center gap-16
  <content w-[613.5px]>
  <image w-[653px]>
```

### 5.4 3-Column Coach Card Grid
```
grid grid-cols-3 gap-6
```
Cards: 424×523 each. Two rows = 6 coaches.

### 5.5 4-Column Steps Row
```
flex items-start justify-between
```
With connector lines above, step blocks below. Columns at 1/4 intervals of 1320 px.

### 5.6 Stats Overlay Strip
Dark pill/strip that visually bridges the Hero and Coaches sections:
```
bg-[#1B1B1B] rounded-2xl
flex items-center justify-around
absolute or relative with negative margin to overlap sections
```

### 5.7 Grid with Internal Dividers (Features Dark)
5 features in a 3+2 grid with hairline dividers:
- Row 1: 3 columns
- Row 2: 2 columns centered
- Dividers: `absolute` positioned `div` elements with `bg-[#637381]/30`

---

## 6. RESPONSIVE BEHAVIOR

The Figma frame is designed at 1512 px wide (large desktop). The following breakpoint adaptations are inferred:

### lg (1024 px — standard desktop)
- Container: `max-w-[1320px]` remains, padding reduces to `px-16`
- Coach grid: `grid-cols-3` maintained
- Split layouts: columns maintained at ~50/50

### md (768 px — tablet)
- Container padding: `px-8`
- Coach grid: `grid-cols-2`
- 4-step row: `grid grid-cols-2 gap-8`
- Split layouts: `flex-col` stacking, text on top, image below
- Hero: single column, image becomes background or stacks below text
- Stats bar: `grid grid-cols-2 gap-4`
- Testimonials: `flex-col gap-6`
- Features grid (dark section): `grid-cols-2` with divider adjustments

### sm (640 px — mobile)
- Container: `px-4`
- Navbar: hamburger menu, hide nav links, keep logo + "Get started"
- Hero heading: `text-4xl` (reduced from `text-7xl`)
- Coach grid: `grid-cols-1`
- 4-step row: `grid-cols-1 gap-8`
- Features dark section: `grid-cols-1`
- Split sections: full-width `flex-col`
- Stats bar: `grid-cols-2`
- Testimonials: `flex-col`
- Footer: `flex-col gap-8`
- CTA card: reduce padding, stack text+button

---

## 7. REUSABLE COMPONENTS LIST

### Core UI

| Component | Description | Key classes |
|---|---|---|
| `Button` (primary) | Brown CTA button | `bg-[#B58963] text-white rounded-lg h-10 px-6 font-semibold hover:bg-[#B76E2D]` |
| `Button` (secondary) | Ghost/outline | `border border-[#D9D9D9] text-[#212B36] rounded-lg h-9 px-4 hover:bg-gray-50` |
| `Button` (dark) | Dark fill | `bg-[#212B36] text-white rounded-lg h-10 px-5 font-semibold hover:bg-[#1B1B1B]` |
| `Icon` | Inline SVG wrapper | `w-4 h-4` / `w-5 h-5` / `w-6 h-6` |
| `Badge` | Grandmaster/title label | `bg-[#F1D9B6] text-[#B58963] px-2 py-0.5 rounded-md text-xs font-semibold` |
| `StarRating` | Row of star icons | `flex items-center gap-1 text-[#F59E0B]` |
| `NavLink` | Navigation text link | `text-base text-[#212B36] hover:text-[#B58963]` |
| `SocialIconButton` | Icon-only social | `w-6 h-6 text-[#637381] hover:text-white` |
| `EyebrowLabel` | Section category tag | `text-sm font-semibold text-[#B58963] uppercase tracking-wider` |

### Cards

| Component | Dimensions | Description |
|---|---|---|
| `CoachCard` | 424×523 | Coach photo, name, badge, FIDE, students, rating, bio, language, book CTA |
| `TestimonialCard` | ~401×260 | Stars, quote, avatar, name, rating progress |
| `StatsCard` | 240×103 | Number + label on dark strip |
| `FeatureItemCard` | 330×200 | Icon + title + description (dark grid) |

### Sections

| Component | Node | Height |
|---|---|---|
| `HeroSection` | `717:21526` | 816 px |
| `CoachesSection` | `717:21552` | 1602 px |
| `HowItWorksSection` | `717:21848` | 678 px |
| `FeaturesSection` (dark) | `717:21929` | 935 px |
| `LearnSection` | `717:22090` | 740 px |
| `ClassroomSection` | `717:22207` | 740 px |
| `TestimonialsSection` | `717:22422` | 654 px |
| `CTASection` | `717:22493` | 424 px |

### Layout

| Component | Description |
|---|---|
| `Navbar` | Sticky top bar, logo + links + buttons, height=65 |
| `Footer` | Dark footer, brand + social + link columns, height=468 |
| `PageContainer` | Root max-width wrapper `max-w-[1512px] mx-auto` |
| `SectionContainer` | Inner max-width `max-w-[1320px] mx-auto px-24 py-20` |
| `SectionHeader` | Centered eyebrow + title + subtitle block |
| `SplitLayout` | `flex items-center gap-16` for image+text pairs |
| `StatsStrip` | Dark `bg-[#1B1B1B] rounded-2xl` overlay strip with 4 stat cards |
| `StepConnector` | Horizontal line connecting step icons |
| `DarkCTACard` | Dark rounded card with ellipse decorations and chess piece |

---

## APPENDIX: Section Vertical Map

| Section | Y start | Height | Background |
|---|---|---|---|
| Navbar | 0 | 65 | `#FFFFFF` |
| Hero | 65 | 816 | Warm cream/beige |
| Stats Strip | 679 | 151 | `#1B1B1B` (overlaps Hero/Coaches) |
| Coaches | 881 | 1602 | `#FFFFFF` |
| How It Works | 2483 | 678 | `#FFFFFF` |
| Features (dark) | 3161 | 935 | `#1B1B1B` |
| What You Can Learn | 4096 | 740 | `#FFFFFF` |
| Virtual Classroom | 4836 | 740 | `#FFFFFF` |
| Testimonials | 5576 | 654 | `#FFFFFF` |
| CTA | 6230 | 424 | `#FFFFFF` (inner card `#1B1B1B`) |
| Footer | 6654 | 468 | `#1B1B1B` |
| **Total** | | **~7122 px** | |
