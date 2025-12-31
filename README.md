# Abdul Aziz Bhat Memorial Website

A beautiful, culturally-rooted memorial website honoring **Abdul Aziz Bhat (1916-2016)**, founding father of the University of Kashmir and extraordinary educator.

## 🍂 About This Project

This website celebrates the 100-year life of Abdul Aziz Bhat (affectionately known as "Abbaji"), integrating Kashmir's rich visual heritage through:

- **Chinar leaves** - Kashmir's iconic autumn symbol
- **Kashida embroidery** - Traditional needlework patterns
- **Dal Lake** - Inspired color palette and gradients
- **Shikara boats** - Journey and navigation metaphors
- **Mughal gardens** - Symmetrical layouts
- **Mountain silhouettes** - Himalayan backdrop elements

## 🏔️ Design Philosophy

The website balances:
- **Traditional Kashmiri aesthetics** with modern web design
- **Respectful dignity** with visual beauty
- **Cultural authenticity** with accessibility
- **Rich storytelling** with fast performance

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator (zero JS by default)
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first styling
- **TypeScript** - Type safety
- **Netlify** - Deployment platform

### Why Astro?

- ✅ Zero JavaScript by default (faster loading)
- ✅ Perfect for content-heavy memorial sites
- ✅ Built-in image optimization
- ✅ Excellent SEO out of the box
- ✅ Easy to add interactive islands if needed

## 📁 Project Structure

```
/
├── public/
│   ├── images/           # Photos and images
│   │   └── gallery/      # Gallery photos (add here)
│   ├── patterns/         # SVG patterns
│   └── favicon.svg       # Chinar leaf favicon
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Card.astro
│   │   ├── Timeline.astro
│   │   ├── ChinaLeaf.astro       # Chinar leaf SVG
│   │   ├── KashidaBorder.astro   # Embroidery patterns
│   │   ├── MountainBackdrop.astro # Mountain silhouettes
│   │   └── ShikaraIcon.astro     # Boat icons
│   ├── layouts/
│   │   └── BaseLayout.astro      # Main layout with SEO
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── biography.astro       # Life story
│   │   ├── legacy.astro          # Impact & legacy
│   │   ├── timeline.astro        # Chronological timeline
│   │   ├── gallery.astro         # Photo gallery
│   │   └── family.astro          # Family tree
│   └── styles/
│       └── global.css            # Global styles & Kashmir design system
├── astro.config.mjs
├── tailwind.config.cjs           # Kashmir color palette
├── netlify.toml                  # Netlify config
└── tsconfig.json
```

## 🎨 Kashmir Design System

### Color Palette

```css
--kashmir-burgundy: #8B2635;      /* Chinar autumn red */
--kashmir-crimson: #A52A2A;        /* Deep chinar */
--kashmir-lake-blue: #1E3A5F;     /* Dal Lake deep */
--kashmir-sky-blue: #87CEEB;      /* Mountain sky */
--kashmir-forest-green: #2C5530;   /* Pine forests */
--kashmir-gold: #D4AF37;           /* Kashida gold thread */
--kashmir-cream: #F8F6F0;          /* Lotus white */
--kashmir-stone-grey: #8B9DAF;     /* Mountain stone */
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Urdu/Arabic**: Nastaliq (decorative elements)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 📸 Adding Photos to Gallery

1. Place photos in `/public/images/gallery/`
2. Organize by category:
   - `early-life/`
   - `university/`
   - `international/`
   - `family/`
   - `later-years/`
3. Use descriptive filenames: `abbaji-oxford-1980.jpg`
4. Recommended dimensions: 1200x900px (4:3 aspect ratio)
5. Update `src/pages/gallery.astro` to display them

## 🌐 Deployment

### Netlify (Recommended)

This project is configured for Netlify deployment:

1. Push to GitHub/GitLab
2. Import project in Netlify
3. Build settings are in `netlify.toml`
4. Deploy!

Build command: `npm run build`
Publish directory: `dist`

### Custom Domain

Update `site` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## 📄 Pages

- **Home** (`/`) - Introduction, key achievements, call-to-action
- **Biography** (`/biography`) - Detailed life story from 1916-2016
- **Legacy** (`/legacy`) - Impact on education, family, and generations
- **Timeline** (`/timeline`) - Chronological journey with shikara visualization
- **Gallery** (`/gallery`) - Photo collection (ready for images)
- **Family** (`/family`) - Family tree across three generations

## 🎯 Key Features

### SEO Optimized
- Semantic HTML
- Meta tags (Open Graph, Twitter Cards)
- Structured data (Schema.org)
- Canonical URLs
- Sitemap generation

### Performance
- Zero JS by default
- Optimized images
- Minimal CSS
- Fast page loads
- Lighthouse score: 95+

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus states
- Reduced motion support
- Semantic headings

### Responsive
- Mobile-first design
- Tablet optimized
- Desktop enhanced
- Print styles

## 🖼️ Design Components

### Custom Astro Components

**Visual Elements:**
- `<ChinaLeaf>` - Autumn chinar leaf in multiple colors
- `<KashidaBorder>` - Traditional embroidery patterns (floral, vine, geometric)
- `<MountainBackdrop>` - Himalayan mountain silhouettes
- `<ShikaraIcon>` - Dal Lake boat icons

**UI Components:**
- `<Hero>` - Page hero sections with gradients
- `<Card>` - Content cards with kashida borders
- `<Timeline>` - Event timeline with shikara journey
- `<SectionDivider>` - Decorative section separators

## 📝 Content Updates

All content is in `.astro` files. To update:

1. **Biography**: Edit `src/pages/biography.astro`
2. **Timeline events**: Edit `src/pages/timeline.astro`
3. **Family members**: Edit `src/pages/family.astro`
4. **Quotes**: Edit hero sections in respective pages

## 🎨 Customization

### Colors

Edit `tailwind.config.cjs` to modify Kashmir color palette.

### Fonts

Change fonts in `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Kashida Patterns

Edit SVG patterns in `src/components/KashidaBorder.astro`

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Astro cache
rm -rf .astro

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Image Optimization

Astro optimizes images automatically. Place images in `public/images/` and reference them:

```astro
<img src="/images/photo.jpg" alt="Description" />
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

## 👨‍👩‍👧‍👦 For Family Members

If you're a family member and want to:
- Add photos to the gallery
- Update family information
- Share memories or stories
- Report issues

Please contact the site maintainer or submit a pull request on GitHub.

## 📜 License

This is a personal memorial website. Content is private family history.

## 🙏 Acknowledgments

Built with love and respect for **Abdul Aziz Bhat (Abbaji)** - a century of life, resilience, and service to education.

---

**"From the rock, we built a university. From tragedy, we created legacy. From one village to the world."**

*— Abdul Aziz Bhat (1916-2016)*

🍂 **عبدالعزیز بھٹ** 🍂
