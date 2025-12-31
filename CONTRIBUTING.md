# Contributing to the Abdul Aziz Bhat Memorial Website

Thank you for wanting to contribute to Abbaji's memorial website! This guide will help you add content, photos, and updates.

## 🖼️ Adding Photos

### Step 1: Prepare Your Photos

**Recommended specifications:**
- **Format**: .jpg, .jpeg, .png, or .webp
- **Size**: 1200x900px minimum (4:3 aspect ratio preferred)
- **File size**: Under 2MB (compress if needed)
- **Naming**: Use descriptive names
  - Good: `abbaji-oxford-1980.jpg`
  - Good: `family-reunion-2010.jpg`
  - Bad: `IMG_1234.jpg`

### Step 2: Organize by Category

Place photos in the appropriate folder:

```
/public/images/gallery/
  ├── early-life/        # Childhood, Bhalessa village, early education
  ├── university/        # University of Kashmir years
  ├── international/     # Oxford, Warwick, travels
  ├── family/            # Family gatherings, celebrations
  └── later-years/       # Elder years, recent photos
```

### Step 3: Add Photo Information

For each photo, note:
- **Date** (approximate is fine)
- **Location**
- **People** in the photo
- **Context** (what was happening)

### Step 4: Update the Gallery Page

Edit `src/pages/gallery.astro`:

```astro
// Replace placeholder with actual photo
<img
  src="/images/gallery/university/abbaji-teaching-1960.jpg"
  alt="Abbaji teaching at University of Kashmir, 1960"
  class="rounded-lg shadow-lg"
/>
```

## ✍️ Adding or Updating Text Content

### Biography Updates

Edit: `src/pages/biography.astro`

Add new sections or update existing ones:

```astro
<p>
  Your new content here...
</p>
```

### Timeline Events

Edit: `src/pages/timeline.astro`

Add to the `timelineEvents` array:

```javascript
{
  year: '1975',
  title: 'New Achievement',
  description: 'Description of what happened',
  category: 'achievement', // or 'education', 'career', 'personal'
  icon: 'leaf', // or 'shikara'
}
```

### Family Information

Edit: `src/pages/family.astro`

Update family member cards or add new ones.

## 📝 Adding Stories or Memories

### Where to Add

You can add personal stories in:
- Biography page (contextual stories)
- Legacy page (impact stories)
- Family page (family memories)

### Format

```astro
<blockquote class="kashmir-card p-8 border-l-4 border-kashmir-gold">
  <p class="text-lg italic mb-4">
    "Your memory or story here..."
  </p>
  <cite class="text-sm font-semibold text-kashmir-burgundy">
    — Your Name, Relationship
  </cite>
</blockquote>
```

## 🎨 Maintaining the Design

### Colors

The Kashmir-inspired color palette is defined in `tailwind.config.cjs`. These colors represent:
- **Burgundy/Crimson**: Chinar leaves in autumn
- **Lake Blue**: Dal Lake waters
- **Gold**: Kashida embroidery thread
- **Forest Green**: Kashmir's pine forests

### Components

Use existing components to maintain consistency:

```astro
import Card from '../components/Card.astro';
import ChinaLeaf from '../components/ChinaLeaf.astro';

<Card title="Your Title" variant="bordered" showLeafWatermark={true}>
  <p>Your content...</p>
</Card>
```

## 🚀 Testing Your Changes

### Local Development

1. Make your changes
2. Run `npm run dev`
3. View at `http://localhost:4321`
4. Test on mobile and desktop

### Build Test

```bash
npm run build
npm run preview
```

## 📤 Submitting Changes

### Option 1: Direct Edit (If You Have Access)

1. Make your changes
2. Test locally
3. Commit with clear message:
   ```bash
   git add .
   git commit -m "Add Oxford photos from 1980s"
   git push
   ```

### Option 2: Submit via Pull Request

1. Fork the repository
2. Make your changes
3. Submit a pull request with:
   - Clear description
   - List of changes
   - Any new photos included

### Option 3: Send to Maintainer

If you're not comfortable with Git:
1. Email photos and information to the site maintainer
2. Include all context (dates, names, locations)
3. Specify where it should go on the site

## 📋 Content Guidelines

### Writing Style

- **Respectful and dignified**: This is a memorial site
- **Factual**: Verify dates and facts when possible
- **Personal but appropriate**: Share memories, but keep tone respectful
- **Clear**: Write for family members who may not have known Abbaji

### Photo Guidelines

- **Quality over quantity**: Choose meaningful, clear photos
- **Family privacy**: Get permission before adding photos of living family members
- **Historical value**: Older photos are especially valuable
- **Context**: Always provide context for photos

## 🆘 Getting Help

### Questions?

- Check the main [README.md](README.md)
- Review existing pages for examples
- Contact the site maintainer

### Technical Issues?

See "Troubleshooting" in README.md

## 🙏 Thank You

Your contributions help preserve and honor Abbaji's legacy for future generations. Whether you're adding a single photo or a detailed story, every contribution matters.

---

**"From the rock, we built a university."**

Let's build this memorial together. 🍂
