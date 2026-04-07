# AUTH SYSTEM — TRAIN64

---

## OVERVIEW

The Train64 auth flow consists of three sequential screens, all sharing the same split-screen layout and design language:

1. **SignUp** — New user registration (email, password, confirm password + Google SSO)
2. **CreateProfile** — Post-registration profile setup (avatar, full name, date of birth, country, city)
3. **SignIn** — Returning user login (email, password + Google SSO + forgot password)

**What all three screens share:**
- Identical split-screen layout: fixed-width left form panel (480px) + fluid right visual panel
- Same chess-board decorative background on the right panel (rotated 30°, warm beige `#f5f0e8`, rounded corners)
- "Train64" wordmark positioned top-right of the visual panel
- Same `Auth/Form/Login` inner container (757px height, 40px gap between sections)
- Same form header pattern (heading h1 + subtitle text)
- Same Google SSO social button
- Same OR divider
- Same primary CTA button (near-black `#1b1b1b`, rounded-8px, with right arrow icon)
- Same footer link row (switch between Sign In / Sign Up)
- Same font family: Plus Jakarta Sans
- Same input field style (outlined, border-radius 8px, border `rgba(145,158,171,0.2)`)
- Same label style (12px semibold, color `#637381`)

**What differs per screen:**
- SignUp: 3 text fields (email, password, confirm password) + password helper text
- SignIn: 2 text fields (email, password) + "Forgot password?" link (right-aligned, underlined)
- CreateProfile: avatar circle (no file upload control visible — shows placeholder image), 4 fields (full name, date of birth, country with dropdown arrow, city), no Google SSO, no OR divider

---

## 1. GLOBAL LAYOUT SYSTEM (AUTH)

All three screens use a full-viewport horizontal split layout. There is no max-width container — the layout fills the entire screen.

### Root Wrapper
- `flex items-center bg-white w-full h-full relative`
- Direction: `flex-row` (horizontal split)
- No outer padding or margin

### Left Panel (Form Side)
- Fixed width: `w-[480px]` — does not grow or shrink
- Full height: `h-full`
- Background: `bg-white`
- Padding: `p-[64px]` on all sides
- Internal alignment: `flex flex-col items-center justify-center`
- The inner form container (`Auth/Form/Login`) is `h-[757px] w-full` with `flex flex-col gap-[40px] items-center`

### Right Panel (Visual/Decorative Side)
- Width: `flex-[1_0_0]` — takes all remaining space
- Full height: `h-full`
- Outer padding: `p-[16px]` — creates an inset gap around the chess visual
- Background: transparent (white bleeds through from root)
- Inner background container: `flex-[1_0_0] h-full overflow-clip relative`
  - Background fill: `bg-[#f5f0e8]` applied on the `img` sub-layer, `rounded-[20px]`
  - Box shadow: `shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)]`
- "Train64" wordmark: absolute-positioned, `top-[4.74%]`, right side, `text-[#1b1b1b] text-[24px] font-bold`
- Chess board: centered, rotated 30°, size `1090.457px` (overflows panel, clipped by `overflow-clip`)

### Approximate Panel Proportions
- Left form panel: ~480px (fixed)
- Right visual panel: all remaining width (roughly 60–70% at 1440px viewport)
- The split is therefore approximately 33/67 at 1440px

### Spacing System Used in Auth Screens
| Token | Value | Usage |
|-------|-------|-------|
| Form panel padding | `64px` | All sides of left panel |
| Visual panel inset | `16px` | Padding around right panel content |
| Form section gap | `40px` | Between header, social button, OR block, fields block |
| Fields stack gap | `20px` | Between form groups inside the fields block |
| Label-to-input gap | `6px` | Inside each form group container |
| Input internal padding | `16px` top/bottom, `14px` left/right | Inside text field inputs |
| Label padding | `2px` horizontal | On label container |
| Button padding | `11px` top/bottom, `16px` left, `8px` right | Primary CTA |
| Social button padding | `10px` top/bottom, `16px` left/right | Google SSO button |
| Footer link gap | `8px` | Between plain text and link text |

---

## 2. SHARED DESIGN TOKENS

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Text/Primary | `#212B36` | Heading text, body text, link labels, button labels |
| Text/Secondary | `#637381` | Subtitle, label text, helper text |
| Text/Disabled / Placeholder | `#919EAB` | Placeholder text inside inputs, OR divider text |
| Color/Black-500 | `#1B1B1B` | Primary CTA button background, "Train64" wordmark |
| Color/White | `#FFFFFF` / `#fff` | Page background, form panel background, input fill, label mask |
| Visual Panel Background | `#F5F0E8` | Right panel warm beige fill + avatar placeholder fill |
| Input Border (default) | `rgba(145, 158, 171, 0.20)` | All text field borders at rest |
| Input Border (focus) | Not explicitly specified — inferred as `rgba(145, 158, 171, 0.5)` or brand color |
| Input Border (error) | Not specified in current screens |
| Social Button Border | `#F2F4F7` (Color/Gray (Light Mode)/100) | Google SSO button border |
| Social Button Label Color | `#344054` (Color/Gray (Light Mode)/700) | "Sign up with Google" text |
| Forgot Password / Link | `#212B36` + `underline` | Sign In screen only |
| Footer Link — plain text | `#1B1B1B` | "Already an user?" / "New user?" text |
| Footer Link — action text | `#1B1B1B` semibold | "Log in" / "Sign up" text |
| OR Divider text | `#919EAB` | Uppercase "OR" label |
| Shadow (card/panel) | `rgba(145,158,171,0.12)` offset (0,12) radius 24 spread -4 + `rgba(145,158,171,0.20)` offset (0,0) radius 2 spread 0 | Right panel visual container |

### Typography

**Font Family:** `Plus Jakarta Sans` (primary for all UI text)
**Secondary Font (variable defs):** `Public Sans` (referenced in button token `Components/Button/TextMedium` — likely a system fallback; visual output uses Plus Jakarta Sans)

| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| Heading / H1 | `24px` | `36px` | Bold (700) | Screen title ("Create account", "Sign in", "Let's set up your profile") |
| Subtitle | `14px` | `22px` | Regular (400) | Screen subtitle below heading |
| Label | `12px` | `12px` | SemiBold (600) | Input field labels |
| Input value/placeholder | `14px` | `22px` | Regular (400) | Text inside inputs |
| Helper text | `12px` | `18px` | Regular (400) | Password helper, error messages below inputs |
| OR divider | `12px` | `18px` | Bold (700) | Uppercase "OR" separator |
| Button label | `15px` | `26px` | Bold (700) | Primary CTA button |
| Social button label | `13px` | `20px` | Regular (400) | "Sign up with Google" |
| Footer plain text | `14px` | `22px` | Regular (400) | "Already an user?" / "New user?" |
| Footer link text | `14px` | `22px` | SemiBold (600) | "Log in" / "Sign up" |
| Forgot password link | `14px` | `22px` | Regular (400) + underline | Sign In screen |
| Wordmark "Train64" | `24px` | `36px` | Bold (700) | Visual panel top-right |

### Border & Shadow

| Property | Value |
|----------|-------|
| Input border-radius | `8px` |
| Primary CTA button border-radius | `8px` |
| Social button border-radius | `6px` |
| Avatar circle border-radius | `50%` (`318.75px` on 102px circle) |
| Visual panel border-radius | `20px` |
| Input border width | `1px` solid |
| Social button border width | `1px` solid |
| Social button box-shadow | `0px 0px 1px 0px rgba(0,0,0,0.18), 0px 2px 30px 0px rgba(0,0,0,0.08)` |
| Right panel box-shadow | `0px 0px 2px 0px rgba(145,158,171,0.20), 0px 12px 24px -4px rgba(145,158,171,0.12)` |

### Variable Definitions (from Figma)

```
Text/Primary:                            #212B36
Text/Secondary:                          #637381
Text/Disabled:                           #919EAB
Color/Base/white:                        #FFFFFF
Color/White-500:                         #FFFFFF
Color/Black-500:                         #1B1B1B
Color/Light_gray-500:                    #919EAB
Color/Dark-gray-500:                     #637381
Color/Gray (Light Mode)/100:             #F2F4F7
Color/Gray (Light Mode)/700:             #344054
Background/Paper:                        #FFFFFF
Background/Default:                      #FFFFFF
Components/Input/Outlined:               #919EAB
Components/Button/Contained/Inherit/Bg:  #212B36
Components/Button/Contained/Inherit/Text:#FFFFFF
Action/Active:                           #637381
```

---

## 3. SHARED COMPONENTS

---

### COMPONENT: AuthLayout

The root split-screen wrapper present in all 3 screens.

**Structure:**
```
AuthLayout (root wrapper)
  ├── FormPanel (left, fixed 480px)
  │     └── AuthForm (inner form container)
  └── VisualPanel (right, fluid)
        └── ChessBackground (decorative)
```

**Root wrapper:**
- `flex items-center bg-white relative w-full h-screen` (or `h-full` on full-viewport context)

**FormPanel (left):**
- `w-[480px] shrink-0 h-full bg-white flex flex-col items-center justify-center p-[64px]`

**VisualPanel (right):**
- `flex-[1_0_0] h-full overflow-clip p-[16px] flex items-start`
- Inner background layer: `flex-[1_0_0] h-full overflow-clip relative rounded-[20px] bg-[#f5f0e8] shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)]`
- "Train64" brand mark inside: absolute, top ~4.74%, right-side, `text-[#1b1b1b] text-[24px] font-bold font-['Plus_Jakarta_Sans']`
- Chess board: absolute-centered, rotated `rotate-[30deg]`, ~1090px square, overflowing (clipped)

**Responsive (assumed — not specified in desktop-only frames):**
- `lg+`: full split layout as described
- `md`: VisualPanel may shrink or stack below
- `sm`: VisualPanel hidden (`hidden`), FormPanel becomes `w-full`, padding reduces to `p-[24px]`

---

### COMPONENT: AuthForm

The form content container inside FormPanel, shared across all screens.

- `flex flex-col gap-[40px] items-center w-full h-[757px] bg-white`
- Slots (top to bottom):
  1. **FormHeader** — heading + subtitle
  2. **SocialLoginButton** (Google) — only on SignUp and SignIn
  3. **Divider** (OR) — only on SignUp and SignIn
  4. **Fields stack** — `flex flex-col gap-[20px] items-center w-full`
     - Contains FormGroup instances, the CTA button, and footer links
- On CreateProfile: slots 2 and 3 are absent; an AvatarUpload appears between FormHeader and Fields stack

---

### COMPONENT: FormHeader

Present in all three screens, always at the top of AuthForm.

**Structure:**
```
FormHeader
  ├── Heading (h1)
  └── Subtitle (p)
```

**Tailwind classes:**
- Container: `flex flex-col gap-[4px] items-start w-full overflow-clip shrink-0`
- Heading: `text-[#212b36] text-[24px] font-bold leading-[36px] font-['Plus_Jakarta_Sans'] whitespace-nowrap`
- Subtitle: `text-[#637381] text-[14px] font-normal leading-[22px] font-['Plus_Jakarta_Sans'] w-full`

**Content per screen:**
- SignUp — Heading: "Create account" / Subtitle: "Sign up to start your chess training journey"
- SignIn — Heading: "Sign in" / Subtitle: "Sign up to start your chess training journey"
- CreateProfile — Heading: "Let's set up your profile" / Subtitle: "Sign up to start your chess training journey"

---

### COMPONENT: Input

Used in all three screens for text fields. All inputs share the same visual style regardless of content type.

**Default (rest) state:**
- Container: `flex flex-col items-start w-full`
- Input box: `border border-[rgba(145,158,171,0.2)] border-solid rounded-[8px] px-[14px] py-[16px] flex items-center w-full h-[54px] bg-white`
- Placeholder/value text: `text-[#919eab] text-[14px] font-normal leading-[22px] font-['Plus_Jakarta_Sans'] flex-[1_0_0]`
- When value is entered (opacity shown): placeholder `opacity-0`, value at full opacity in `text-[#212b36]`

**With helper text (below input):**
- HelpText container: `flex items-start pl-[12px] pt-[8px] w-full`
- Helper text: `text-[#637381] text-[12px] font-normal leading-[18px] font-['Plus_Jakarta_Sans'] flex-[1_0_0]`
- Used on: SignUp "Password" field — "Use 8 or more characters with a mix of letters, numbers & symbols"

**With dropdown arrow (Select variant):**
- Same input box as above
- Chevron arrow icon: `absolute right-[12px] top-[18px] w-[20px] h-[20px]` (down-arrow SVG)
- Used on: CreateProfile "Country" field

**With date placeholder (Date variant):**
- Same input box as above
- Placeholder text: "MM/DD/YYYY" in `text-[#919eab]`
- Used on: CreateProfile "Date of birth" field

**Password variant:**
- Input type would be password; placeholder shows "••••••••" (8 dots)
- No visible password toggle icon in the current screens

**Focus state (inferred from label behavior):**
- Border color transitions to a more visible state (no explicit focus color specified in current frames)
- Label "mask" element (`h-[2px] bg-white`) lifts to sit over the border line, creating a "floating label notch" effect in the border

**Error state:**
- Not shown in current screens; to be defined

---

### COMPONENT: Label

Floating label above each input field. Present in all screens, all fields.

**Structure:**
```
Label wrapper (label focus)
  ├── Mask (white rectangle behind label text that breaks the input border visually)
  └── Label text
```

**Tailwind classes:**
- Wrapper: `flex items-center px-[2px] relative shrink-0`
- Mask (border-break element): `absolute bg-white h-[2px] left-0 right-0 top-[5px]` — sits behind the label text to visually break the top border of the input
- Label text: `text-[#637381] text-[12px] font-semibold leading-[12px] font-['Plus_Jakarta_Sans'] whitespace-nowrap`

**Note:** The label is positioned above the input box, not inside it (not a true "floating label" animation pattern in the frames shown — it is statically positioned above). The mask creates a border-notch optical effect.

---

### COMPONENT: FormGroup

Wrapper combining Label + Input (+ optional HelpText). Present in all form fields across all screens.

**Tailwind classes:**
- `flex flex-col gap-[6px] items-start w-full shrink-0`
- Children: Label wrapper (top) → TextField (Input box + optional HelpText)

**Error state (inferred):**
- Label text color changes to error red
- Input border changes to error red
- HelpText appears with error icon + error message

---

### COMPONENT: Button (Primary CTA)

Single solid dark button used as the main action button in all three screens.

**Visual spec:**
- Background: `#1b1b1b` (near-black)
- Text color: `#ffffff`
- Border-radius: `rounded-[8px]`
- Height: ~48px (padding: `py-[11px]`)
- Width: `w-full` (full width of form)
- Padding: `pl-[16px] pr-[8px] py-[11px]`
- Gap between label and icon: `gap-[8px]`
- Layout: `flex items-center justify-center`

**Label:**
- `text-white text-[15px] font-bold leading-[26px] font-['Plus_Jakarta_Sans'] whitespace-nowrap`

**End icon (right arrow chevron):**
- Size: `24px × 24px`
- Positioned to the right of label
- SVG arrow icon (right-facing chevron/arrow)

**Tailwind classes (full):**
- `bg-[#1b1b1b] flex gap-[8px] items-center justify-center pl-[16px] pr-[8px] py-[11px] rounded-[8px] w-full shrink-0 cursor-pointer`

**Hover/focus states:** Not specified in current frames. Inferred: `hover:bg-[#333333]` or `hover:opacity-90`.

**CTA label per screen:**
- SignUp: "Create account"
- SignIn: "Sign in"
- CreateProfile: "Create profile"

---

### COMPONENT: SocialLoginButton

Present in SignUp and SignIn screens. Absent in CreateProfile.

**Visual spec:**
- Background: `white` (`var(--color/base/white, white)`)
- Border: `1px solid #f2f4f7`
- Border-radius: `rounded-[6px]`
- Padding: `px-[16px] py-[10px]`
- Width: `w-full`
- Layout: `flex gap-[6px] items-center justify-center`
- Shadow: `shadow-[0px_0px_1px_0px_rgba(0,0,0,0.18),0px_2px_30px_0px_rgba(0,0,0,0.08)]`

**Content:**
- Google icon: `24px × 24px` (full-color Google "G" multi-color SVG)
- Label: "Sign up with Google" — `text-[#344054] text-[13px] font-normal leading-[20px] font-['Plus_Jakarta_Sans'] whitespace-nowrap text-center`

**Tailwind classes (full):**
- `bg-white border border-[#f2f4f7] border-solid flex gap-[6px] items-center justify-center px-[16px] py-[10px] rounded-[6px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.18),0px_2px_30px_0px_rgba(0,0,0,0.08)] w-full shrink-0`

**Hover state (inferred):** `hover:bg-[#f9fafb]` or `hover:shadow-md`

**Note:** Only Google is shown. No Apple or Facebook variants are present in these screens.

---

### COMPONENT: Divider

"OR" text separator between the social login button and the manual fields. Present in SignUp and SignIn. Absent in CreateProfile.

**Structure:**
```
Divider
  └── "OR" text (centered)
```

**Tailwind classes:**
- Wrapper: `flex items-center justify-center overflow-clip w-full shrink-0`
- OR text: `text-[#919eab] text-[12px] font-bold leading-[18px] uppercase w-[40px] text-center font-['Plus_Jakarta_Sans']`

**Note:** In the current design, the OR divider appears as only the text label — there are no horizontal lines flanking it. The overflow-clip on the wrapper is the only visual boundary. If horizontal rules are desired, they must be added as a design decision not present in these frames.

---

### COMPONENT: FormFooter

Footer link row at the bottom of the form. Present in all three screens (but hidden/opacity-0 on CreateProfile).

**Structure:**
```
FormFooter
  ├── Plain text ("Already an user?" / "New user?")
  └── Link text ("Log in" / "Sign up")
```

**Tailwind classes:**
- Wrapper: `flex gap-[8px] items-center w-full text-[14px] leading-[22px] text-[#1b1b1b] whitespace-nowrap shrink-0`
- Plain text: `font-normal font-['Plus_Jakarta_Sans']`
- Link text: `font-semibold font-['Plus_Jakarta_Sans']` (no underline visible in frames, but functionally a link)

**On CreateProfile:** The footer row is present in the DOM but has `opacity-0` — it is invisible and non-interactive. No footer link is displayed.

---

### COMPONENT: AvatarUpload

Present only in CreateProfile screen. Displayed as an avatar circle with a chess knight icon overlay. Positioned between FormHeader and Fields stack, centered horizontally.

**Visual spec:**
- Circle background: `bg-[#f5f0e8]` — matches the visual panel's warm beige
- Shape: perfectly circular, `rounded-full`
- Size: `w-[102px] h-[102px]` (102px diameter)
- Content: Chess knight piece icon centered inside (`~72px`, black silhouette)
- The knight icon is a chess piece SVG overlaid via a `Component 4` layer

**Tailwind classes:**
- Avatar circle: `bg-[#f5f0e8] rounded-[318.75px] shrink-0 size-[102px]`
- Icon overlay: `absolute overflow-clip size-[89.805px]` centered on avatar (positioned absolutely relative to a containing element)

**Upload behavior:** Not defined in the current frame — the screen shows a pre-filled state (knight icon placeholder). An upload trigger (camera icon, click, or file input) would need to be designed separately.

**Note:** There is no visible upload control (file input, camera icon button) in the current frame. The avatar acts as a display placeholder.

---

### COMPONENT: SelectInput / Dropdown

Present only in CreateProfile for the "Country" field.

**Visual spec:**
- Identical box styling to standard Input (same border, padding, border-radius)
- Adds a downward-pointing chevron arrow icon: `absolute right-[12px] top-[18px] size-[20px]`
- The container must be `relative` to allow absolute positioning of the arrow

**Tailwind classes (field wrapper):**
- `relative flex flex-col items-start w-full h-[54px]`
- Input box: same as Input component — `border border-[rgba(145,158,171,0.2)] border-solid rounded-[8px] px-[14px] py-[16px] flex gap-[8px] items-center w-full`
- Chevron: `absolute right-[12px] top-[18px] size-[20px]` with SVG arrow icon

**Two-column layout (Country + City):**
- The Country and City fields sit side by side in a row
- Row container: `flex gap-[20px] items-start w-full`
- Each field column: `flex flex-col gap-[4px] items-start w-[190px] shrink-0`

---

### COMPONENT: DateInput

Present only in CreateProfile for the "Date of birth" field.

**Visual spec:**
- Same box styling as standard Input
- Placeholder text: "MM/DD/YYYY" in `text-[#919eab]`
- No calendar icon visible in the current frame
- Full width (takes the full form width, not split)

**Tailwind classes:**
- Container: `flex flex-col gap-[4px] items-start w-full`
- Input box: same as Input — `border border-[rgba(145,158,171,0.2)] rounded-[8px] px-[14px] py-[16px] flex gap-[8px] items-center w-full`
- Placeholder: `text-[#919eab] text-[14px] font-normal leading-[22px] flex-[1_0_0]`

---

## 4. VARIANTS PER SCREEN

---

### SCREEN: SignUp

**Node ID:** `968:8206`
**Figma location:** Auth/ Student > Desktop > Signup

**Heading:** "Create account"
**Subtitle:** "Sign up to start your chess training journey"
**CTA:** "Create account" button

**Unique fields (in order, inside the fields stack):**
1. **Email** — label "Email", placeholder "jhondoe@email.com" (opacity-0 in shown state = empty)
2. **Password** — label "Password", value "••••••••", helper text below: "Use 8 or more characters with a mix of letters, numbers & symbols"
3. **Confirmed password** — label "Confirmed password", empty (no placeholder visible)

**Layout differences from base AuthLayout:**
- All standard: FormHeader → SocialLoginButton → OR Divider → Fields block → CTA → FormFooter
- The fields block contains 3 FormGroups (email, password, confirm-password) and then the Button and Footer
- Password FormGroup has the helper text sub-row visible

**Special elements unique to this screen:**
- Password helper text: `text-[#637381] text-[12px] font-normal leading-[18px]` displayed below the password input — "Use 8 or more characters with a mix of letters, numbers & symbols"
- Confirm password field has no helper text

**Footer link:**
- Plain: "Already an user?"
- Action: "Log in" → links to SignIn screen

---

### SCREEN: SignIn

**Node ID:** `981:7463`
**Figma location:** Auth/ Student > Desktop > Sign in

**Heading:** "Sign in"
**Subtitle:** "Sign up to start your chess training journey"
**CTA:** "Sign in" button

**Unique fields (in order):**
1. **Email** — label "Email", placeholder "jhondoe@email.com" (opacity-0 = empty)
2. **Password** — label "Password", value "••••••••" (no helper text)

**Unique element — Forgot Password link:**
- Positioned between the Password field and the CTA button
- Text: "Forgot password?"
- Style: `text-[#212b36] text-[14px] font-normal leading-[22px] underline text-right w-full`
- Right-aligned to the full form width

**Layout differences:**
- Standard layout: FormHeader → SocialLoginButton → OR Divider → Email field → Password field → Forgot Password → CTA → FormFooter
- Fewer fields than SignUp (no confirm password)
- No helper text below password

**Footer link:**
- Plain: "New user?"
- Action: "Sign up" → links to SignUp screen

---

### SCREEN: CreateProfile

**Node ID:** `981:7015`
**Figma location:** Auth/ Student > Desktop > Create profile

**Heading:** "Let's set up your profile"
**Subtitle:** "Sign up to start your chess training journey"
**CTA:** "Create profile" button

**Unique layout — deviates significantly from base:**
- No SocialLoginButton
- No OR Divider
- Avatar circle inserted between FormHeader and Fields stack
- Fields stack contains 4 form groups (not 2–3 like other screens)

**Unique fields (in order):**
1. **Full name** — label "Full name", placeholder "jhondoe@email.com" (opacity-0 = empty), full width
2. **Date of birth** — label "Date of birth", placeholder "MM/DD/YYYY", full width
3. **Country** (SelectInput) + **City** (text input) — side-by-side, each `w-[190px]`, `gap-[20px]`
   - Country has a dropdown chevron arrow icon
   - City has no special icon

**Two-column row specifics:**
- Row: `flex gap-[20px] items-start w-full`
- Country column: `flex flex-col gap-[4px] items-start w-[190px]`
- City column: `flex flex-col gap-[4px] items-start w-[190px]`
- Both columns have the standard label + input box structure

**Avatar section:**
- Centered avatar circle (`102px` diameter, `bg-[#f5f0e8]`) positioned between FormHeader and Fields
- Chess knight icon overlay centered on avatar circle

**Footer link:**
- Present in DOM but `opacity-0` — not visible to user
- Content: "Already an user?" / "Log in" (same as SignUp)
- This implies CreateProfile does not need a sign-in redirect link in the current design

**Special input types:**
- SelectInput (Country): dropdown arrow icon, `relative` container, chevron positioned `absolute right-[12px] top-[18px]`
- DateInput (Date of birth): text input with MM/DD/YYYY placeholder, no date-picker chrome visible in frame

---

## 5. LAYOUT PATTERNS

### Split Layout
- 33/67 proportional split (480px fixed left, remainder fluid right) at typical desktop widths
- Left panel vertically and horizontally centers its content
- Right panel overflows its content (chess board) intentionally — `overflow-clip` clips to bounds

### Centered Form with Constrained Width
- The Auth/Form container inside the left panel is `h-[757px] w-full` (full width of padded panel = 352px usable width: 480px − 64px × 2 = 352px)
- Form content is centered vertically within the left panel via `justify-center` on the panel

### Vertical Form Stack
- Form groups are stacked vertically with `gap-[20px]` between each group
- Each group internally uses `gap-[6px]` between label and input
- Sections (header, social button, divider, fields, CTA, footer) use `gap-[40px]` between them

### Two-Column Field Row
- Used only in CreateProfile for Country + City
- `flex gap-[20px]` row, each child `w-[190px]`
- Total: 190 + 20 + 190 = 400px, but the form usable width is 352px — this implies the row may scroll or the columns are slightly narrower in implementation; observe actual rendered sizes carefully

### Footer Link Row
- `flex gap-[8px] items-center` — plain text + link side by side
- Placed after the CTA button inside the fields stack

### Visual Panel Chess Board
- Chess board grid is a `flex flex-col` of 8 rows, each row a `flex` of 8 cells
- Each cell is `99.784px × 99.784px` square
- Board is rotated `30deg` and centered with translate-center transforms
- Isolated piece images overlaid on cells via absolute positioning

---

## 6. RESPONSIVE BEHAVIOR

The Figma file contains desktop-only frames (`1512px × 1024px`). The following responsive behaviors are inferred from the layout structure and common patterns:

### Desktop (lg+, ≥1024px)
- Full split layout: `flex-row`, left panel `w-[480px]`, right panel `flex-[1_0_0]`
- Right panel chess visual fully visible
- Form panel padded `p-[64px]`

### Tablet (md, 768px–1023px)
- Left panel may reduce padding to `p-[32px]` or `p-[40px]`
- Right panel may shrink proportionally or hide
- Form container may reduce from `w-[352px]` to `w-full`
- Two-column row (Country + City) remains if form width allows

### Mobile (sm, <768px)
- Right visual panel: `hidden` (chess board background not shown)
- Left form panel: `w-full h-full`, padding reduces to `p-[24px]` or `px-[16px] py-[32px]`
- Form container: `w-full`, max-width may be `max-w-[400px]` with `mx-auto`
- Two-column row (Country + City): `flex-col` — stacks vertically
- Input height remains `54px` (sufficient for touch targets)
- CTA button height remains `~48px` (sufficient for touch targets)
- Social button height remains `~44px`

---

## 7. FINAL COMPONENT SYSTEM

### Core UI

| Component | Variants | Notes |
|-----------|----------|-------|
| **Button** | Primary (dark `#1b1b1b` + arrow icon) | Full-width, `h-~48px`, `rounded-[8px]` |
| **Input** | Default, With helper text, Password (masked), Select (dropdown), Date (placeholder) | `h-[54px]`, `rounded-[8px]`, `border-[rgba(145,158,171,0.2)]` |
| **Label** | Default | Floating above input, `12px semibold #637381`, with border-notch mask |
| **FormGroup** | Standard, With helper text | `gap-[6px]` label-to-input |
| **Divider** | OR text only | `12px bold uppercase #919eab`, no horizontal lines |

### Form System

| Component | Present In | Notes |
|-----------|-----------|-------|
| **AuthForm** | All screens | `flex flex-col gap-[40px] h-[757px] w-full` |
| **FormHeader** | All screens | Heading (24px bold) + subtitle (14px regular), `gap-[4px]` |
| **FormFooter** | All screens (hidden on CreateProfile) | Plain text + semibold link, `gap-[8px]` |
| **SocialLoginButton** | SignUp, SignIn | Google only, white with gray border and shadow |
| **AvatarUpload** | CreateProfile only | 102px circle, `bg-[#f5f0e8]`, knight icon placeholder |
| **SelectInput** | CreateProfile / Country | Chevron arrow `absolute right-[12px]`, `relative` wrapper |
| **DateInput** | CreateProfile / Date of birth | Text input, "MM/DD/YYYY" placeholder |

### Layout System

| Component | Description |
|-----------|-------------|
| **AuthLayout** | Root `flex-row` wrapper, full viewport, `bg-white` |
| **FormPanel** | Left panel, `w-[480px]` fixed, `p-[64px]`, vertically centered |
| **VisualPanel** | Right panel, `flex-[1_0_0]`, `p-[16px]`, inner `bg-[#f5f0e8] rounded-[20px]` |

### Auth Screens (Assembled from Above)

| Screen | Components Used |
|--------|----------------|
| **SignUpScreen** | AuthLayout → FormPanel → AuthForm → [FormHeader, SocialLoginButton, Divider, FormGroup(email), FormGroup(password+helper), FormGroup(confirmPassword), Button("Create account"), FormFooter("Already an user? Log in")] → VisualPanel |
| **SignInScreen** | AuthLayout → FormPanel → AuthForm → [FormHeader, SocialLoginButton, Divider, FormGroup(email), FormGroup(password), ForgotPasswordLink, Button("Sign in"), FormFooter("New user? Sign up")] → VisualPanel |
| **CreateProfileScreen** | AuthLayout → FormPanel → AuthForm → [FormHeader, AvatarUpload, FormGroup(fullName), FormGroup(dateOfBirth/DateInput), TwoColumnRow(SelectInput(country) + FormGroup(city)), Button("Create profile")] → VisualPanel |

---

## APPENDIX: Figma Node Reference

| Screen | Figma Section | Node ID |
|--------|--------------|---------|
| SignUp | Auth/ Student > Desktop > Signup | `968:8206` |
| Sign In | Auth/ Student > Desktop > Sign in | `981:7463` |
| Create Profile | Auth/ Student > Desktop > Create profile | `981:7015` |
| Auth/ Student section | — | `84:6693` |
| Desktop subsection | — | `845:23232` |
| File Key | — | `OFGf4hBBQ9ts3ISAjN1bbs` |

---

## APPENDIX: Tailwind Quick Reference — Reconstruct Any Screen

### The split wrapper
```
flex items-center bg-white relative w-full h-screen
```

### Left form panel
```
w-[480px] shrink-0 h-full bg-white flex flex-col items-center justify-center p-[64px]
```

### Inner form container
```
flex flex-col gap-[40px] h-[757px] items-center w-full bg-white
```

### FormHeader
```
flex flex-col gap-[4px] items-start w-full overflow-clip shrink-0
  > h1: text-[#212b36] text-[24px] font-bold leading-[36px] whitespace-nowrap
  > p:  text-[#637381] text-[14px] font-normal leading-[22px]
```

### FormGroup (label + input)
```
flex flex-col gap-[6px] items-start w-full shrink-0
  > label-focus: flex items-center px-[2px] relative shrink-0
      > mask: absolute bg-white h-[2px] left-0 right-0 top-[5px]
      > text: text-[#637381] text-[12px] font-semibold leading-[12px] whitespace-nowrap
  > TextField: flex flex-col items-start w-full shrink-0
      > input: border border-[rgba(145,158,171,0.2)] rounded-[8px] px-[14px] py-[16px]
               flex items-center w-full h-[54px] bg-white
          > value/placeholder: text-[#919eab] text-[14px] font-normal leading-[22px] flex-[1_0_0]
```

### SocialLoginButton (Google)
```
bg-white border border-[#f2f4f7] flex gap-[6px] items-center justify-center
px-[16px] py-[10px] rounded-[6px] w-full shrink-0
shadow-[0px_0px_1px_0px_rgba(0,0,0,0.18),0px_2px_30px_0px_rgba(0,0,0,0.08)]
  > icon: size-[24px] (Google G SVG)
  > label: text-[#344054] text-[13px] font-normal leading-[20px]
```

### OR Divider
```
flex items-center justify-center overflow-clip w-full shrink-0
  > text: text-[#919eab] text-[12px] font-bold leading-[18px] uppercase w-[40px] text-center
```

### Primary CTA Button
```
bg-[#1b1b1b] flex gap-[8px] items-center justify-center
pl-[16px] pr-[8px] py-[11px] rounded-[8px] w-full shrink-0 cursor-pointer
  > label: text-white text-[15px] font-bold leading-[26px] whitespace-nowrap
  > icon: size-[24px] (right arrow/chevron SVG)
```

### FormFooter
```
flex gap-[8px] items-center w-full text-[14px] leading-[22px] text-[#1b1b1b] shrink-0
  > plain: font-normal
  > link:  font-semibold
```

### Avatar (CreateProfile)
```
bg-[#f5f0e8] rounded-full size-[102px] shrink-0 relative
  > icon: absolute centered, size-[89.805px] (chess knight SVG)
```

### Right visual panel
```
flex-[1_0_0] h-full overflow-clip p-[16px] flex items-start
  > inner: flex-[1_0_0] h-full overflow-clip relative rounded-[20px] bg-[#f5f0e8]
           shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)]
```

### ForgotPassword link (SignIn only)
```
text-[#212b36] text-[14px] font-normal leading-[22px] underline text-right w-full shrink-0
```

### Two-column row (CreateProfile — Country + City)
```
flex gap-[20px] items-start w-full shrink-0
  > each column: flex flex-col gap-[4px] items-start w-[190px] shrink-0
```

### SelectInput chevron (Country field)
```
TextField wrapper: relative flex flex-col items-start w-full h-[54px]
  > chevron: absolute right-[12px] top-[18px] size-[20px] (down-chevron SVG)
```
