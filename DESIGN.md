# Design System Documentation
## Abdul Aziz Butt Memorial Website

This document outlines the current design system and provides context for branding enhancements.

---

## 🎨 Design Philosophy

The website honors Abdul Aziz Butt's legacy through **Kashmir-inspired visual design** that balances:
- **Cultural authenticity** - Real Kashmir elements (chinar leaves, kashida embroidery, Mughal architecture)
- **Dignity and respect** - Elegant, understated design befitting a memorial
- **Accessibility** - Clear typography, good contrast, mobile-friendly
- **Timelessness** - Classic design that won't feel dated

---

## 🌈 Color Palette

### Primary Colors

**Kashmir Burgundy** `#8B2635`
- Use for: Primary headings, important CTAs, brand accent
- Represents: Dignity, tradition, Kashmir's rich heritage

**Kashmir Crimson** `#A52A2A`
- Use for: Secondary accents, gradients, hover states
- Represents: Warmth, passion for education

**Kashmir Lake Blue** `#1E3A5F`
- Use for: Body text, deep backgrounds, serious content
- Represents: Dal Lake, depth, wisdom

### Secondary Colors

**Kashmir Sky Blue** `#87CEEB`
- Use for: Highlights, lighter accents
- Represents: Kashmir skies, hope

**Kashmir Forest Green** `#2C5530`
- Use for: Nature elements, secondary sections
- Represents: Chinar trees, growth

**Kashmir Gold** `#D4AF37`
- Use for: Special highlights, borders, achievement markers
- Represents: Excellence, achievement, saffron/luxury

### Neutral Colors

**Kashmir Cream** `#F8F6F0`
- Use for: Backgrounds, cards, soft sections
- Represents: Paper, traditional kashmiri shawls

**Kashmir Stone Grey** `#8B9DAF`
- Use for: Borders, dividers, subtle elements
- Represents: Himalayan stone, mountains

### Accent Colors (Less Used)

**Lotus Pink** `#E8B4B8`
**Saffron Orange** `#F4C430`
**Emerald Green** `#50C878`
**Royal Blue** `#4169E1`

---

## 📝 Typography

### Font Families

**Headings:** `'Playfair Display', serif`
- Elegant, traditional, befitting a memorial
- Weights: 400, 500, 600, 700, 800

**Body Text:** `'Inter', sans-serif`
- Modern, highly readable
- Weights: 300, 400, 500, 600, 700

### Type Scale

```css
.text-4xl   /* ~2.25rem - Major headings */
.text-3xl   /* ~1.875rem - Section titles */
.text-2xl   /* ~1.5rem - Subsection titles */
.text-xl    /* ~1.25rem - Large body/quotes */
.text-lg    /* ~1.125rem - Emphasized body */
.text-base  /* ~1rem - Standard body */
.text-sm    /* ~0.875rem - Small text/captions */
```

### Hierarchy

- **Page Titles:** text-5xl or text-6xl, Playfair Display, burgundy
- **Section Headings:** text-4xl, Playfair Display, burgundy
- **Subsections:** text-2xl or text-3xl, Playfair Display
- **Body Text:** text-base or text-lg, Inter, lake-blue
- **Quotes:** text-xl, italic, lake-blue with gold accent border

---

## 🎭 Custom Components

### 1. Chinar Leaf (`ChinaLeaf.astro`)
**Purpose:** 5-pointed Kashmir chinar leaf decoration

**Variants:**
- `color`: burgundy, crimson, gold, outline
- `size`: sm, md, lg, xl
- `animate`: true/false (adds floating animation)

**Usage:**
```astro
<ChinaLeaf size="md" color="gold" animate={true} />
```

### 2. Kashida Border (`KashidaBorder.astro`)
**Purpose:** Traditional Kashmir embroidery patterns

**Variants:**
- `floral` - Flower and vine pattern
- `vine` - Continuous vine pattern
- `geometric` - Angular traditional pattern

**Usage:**
```astro
<KashidaBorder variant="floral" />
```

### 3. Mountain Backdrop (`MountainBackdrop.astro`)
**Purpose:** Himalayan mountain silhouettes

**Variants:**
- `full` - Full gradient mountain range
- `silhouette` - Simple dark silhouette
- `misty` - Faded atmospheric mountains

**Usage:**
```astro
<MountainBackdrop variant="full" />
```

### 4. Shikara Icon (`ShikaraIcon.astro`)
**Purpose:** Dal Lake boat representing journey/progress

**Variants:**
- `simple` - Clean minimal boat
- `ornate` - Detailed decorative boat

**Usage:**
```astro
<ShikaraIcon variant="ornate" />
```

### 5. Hero Component (`Hero.astro`)
**Purpose:** Page headers with mountain backdrop

**Props:**
- `variant`: "home" (full screen) or "page" (shorter)
- `title`: Main heading
- `subtitle`: Secondary text
- `quote`: Optional quote
- `quoteAuthor`: Quote attribution

---

## 🏗️ Layout Patterns

### Container Widths
```css
.container-custom {
  max-width: 85rem;  /* ~1360px */
  padding: 0 1.5rem;
}

.max-w-5xl {
  max-width: 64rem;  /* ~1024px - used for content */
}

.max-w-3xl {
  max-width: 48rem;  /* ~768px - used for text */
}
```

### Spacing
- **Section Padding:** `section-padding` class = 4rem (64px) top/bottom
- **Card Gaps:** Usually 1.5rem to 2rem (24-32px)
- **Element Spacing:** Follows Tailwind's spacing scale (4, 8, 12, 16, 24, 32, 48, 64px)

### Grid Layouts
```css
.mughal-grid     /* 2 columns on desktop, 1 on mobile */
.mughal-grid-3   /* 3 columns on desktop, responsive */
```

---

## 🎨 Special Design Elements

### Kashmir Card
```css
.kashmir-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(27, 58, 95, 0.08);
  overflow: hidden;
}
```

### Dal Lake Background
```css
.dal-lake-bg {
  background: linear-gradient(135deg,
    var(--kashmir-lake-blue) 0%,
    var(--kashmir-burgundy) 100%);
}
```

### Kashida Border (CSS)
```css
.kashida-border {
  border-top: 2px solid var(--kashmir-gold);
  border-bottom: 2px solid var(--kashmir-gold);
  padding: 1.5rem 0;
}
```

### Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Used on chinar leaves and decorative elements */
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

### Mobile-First Approach
All designs start mobile and scale up using `md:`, `lg:` prefixes.

**Example:**
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 col mobile, 2 col tablet, 3 col desktop -->
</div>
```

---

## 🎯 Current Pages

1. **Home** (`/`) - Hero, personality quotes, key achievements
2. **Biography** (`/biography`) - Full life story with corroboration notes
3. **Legacy** (`/legacy`) - Educational impact, family legacy
4. **Timeline** (`/timeline`) - Chronological journey 1916-2016
5. **Gallery** (`/gallery`) - Photo categories (placeholder structure)

---

## 🚀 Areas for Branding Enhancement

### High Priority
1. **Logo/Wordmark** - Currently just text, could use a distinctive mark
2. **Photo Integration** - Gallery is placeholder, needs real photos with captions
3. **Loading States** - Could add elegant loading animations
4. **Print Styles** - Optimize for printing/PDF generation

### Medium Priority
5. **Favicon Set** - Currently using default, needs custom chinar/Kashmir icon
6. **Social Media Cards** - Open Graph images for sharing
7. **Email Signatures** - If family wants branded email footer
8. **QR Code Design** - For physical memorial or events

### Nice to Have
9. **Certificate/Award Templates** - If family creates scholarships in his name
10. **Video Introduction** - Motion graphics with kashmir elements
11. **Interactive Timeline** - Enhanced timeline with photos/documents
12. **Multi-language** - Urdu/Kashmiri translations

---

## 📐 Design Specifications for Designer

### Logo Requirements (If Creating)
- **Formats needed:** SVG (primary), PNG (multiple sizes)
- **Color variations:** Full color, burgundy monochrome, white on dark
- **Elements to consider:** Chinar leaf, book, university building, mountains
- **Style:** Classic, timeless, not trendy

### Icon Set
- Favicon: 16x16, 32x32, 48x48, 64x64
- Apple Touch Icon: 180x180
- Android Chrome: 192x192, 512x512
- Windows Tile: 270x270

### Open Graph Images
- Size: 1200x630px
- Safe zone: Keep text/important elements in center 1000x500px
- Format: JPG or PNG
- Include: Name, dates (1916-2016), tagline

### Typography Pairings
Current pairing works well, but alternatives could include:
- **Headings:** Cormorant Garamond, EB Garamond, Crimson Text
- **Body:** Source Sans Pro, Open Sans, Lato

---

## 🎨 Kashmir Visual References

### Cultural Elements Currently Used
✅ Chinar leaves (5-pointed maple-like)
✅ Kashida embroidery patterns
✅ Himalayan mountains
✅ Shikara boats (Dal Lake)
✅ Mughal architecture (grid patterns)

### Additional Elements to Consider
- Papier-mâché patterns (traditional craft)
- Persian calligraphy borders
- Traditional Kashmiri window patterns (latticework)
- Saffron flower illustrations
- Book/scroll motifs (education theme)

---

## 🔧 Technical Notes

### Build System
- **Framework:** Astro 4.x (static site generation)
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Google Fonts
- **Icons:** Currently custom SVG components

### Design Tokens
All colors are defined as CSS custom properties in `/src/styles/global.css`:
```css
:root {
  --kashmir-burgundy: #8B2635;
  --kashmir-crimson: #A52A2A;
  /* ... etc */
}
```

### Adding New Components
1. Create in `/src/components/`
2. Use `.astro` format
3. Export props with TypeScript types
4. Document usage in this file

---

## 📚 Resources for Designer

### Research References
- University of Kashmir campus photos (for authenticity)
- Traditional Kashmiri art books
- Mughal miniature paintings
- Contemporary memorial website best practices

### Accessibility Requirements
- **Contrast ratio:** Minimum 4.5:1 for body text, 3:1 for large text
- **Font sizes:** Minimum 16px for body text
- **Touch targets:** Minimum 44x44px for interactive elements
- **Color blindness:** Don't rely on color alone to convey information

---

## 💡 Brand Voice & Messaging

### Tone
- **Respectful** - This is a memorial
- **Dignified** - Befitting an academic and social leader
- **Warm** - He was known as "ever-smiling, soft spoken"
- **Inspirational** - His story should motivate others

### Key Messages
1. "From one village to thousands" - accessibility of education
2. "From tragedy to transformation" - resilience after 1947
3. "Ever-smiling, soft spoken, meticulously dressed" - personality
4. "Sink your differences and Cement your relationships" - core philosophy

### Avoid
- Overly dramatic or sensationalized language
- Political commentary
- Unverified claims (mark with "[To be corroborated]")
- Generic stock photography

---

## 📞 Questions for Branding Work

When designing, consider:
1. Should the site feel more **traditional** or more **contemporary**?
2. Is the burgundy/gold color scheme hitting the right tone?
3. Do we want to incorporate Urdu/Arabic calligraphy elements?
4. Should there be a stronger University of Kashmir visual tie-in?
5. Would animated elements (subtle) enhance or distract?
6. What should the social media presence look like?

---

## ✅ Current Strengths to Preserve

- Clean, uncluttered layout
- Strong cultural identity without being cliché
- Good mobile experience
- Fast loading (static site)
- Authentic quotes from historical sources
- Clear information hierarchy

---

**Last Updated:** January 2026
**Website URL:** [To be deployed]
**Contact:** Family maintains content accuracy
