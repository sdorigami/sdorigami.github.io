# Greater San Diego Origami Group — Website

A clean, fast, fully hand-coded website. No frameworks, no dependencies, no monthly fees.

---

## File Structure

```
sdorigami/
├── index.html          ← Homepage
├── css/
│   └── style.css       ← All styles — edit freely
├── js/
│   └── main.js         ← Nav behavior, scroll reveal, lightbox
├── images/             ← Drop ALL your photos here
│   └── (your photos)
└── pages/
    ├── gallery.html    ← Photo gallery
    ├── resources.html  ← Origami links
    ├── history.html    ← Group history & timeline
    ├── tribute.html    ← Tribute to founders
    └── contact.html    ← Meeting info & contact form
```

---

## How to Add Photos

1. Drop your `.jpg` or `.png` files into the `/images/` folder
2. Open `pages/gallery.html` in a text editor
3. Find a `<div class="gallery-item">` block with a placeholder
4. Replace it with:

```html
<div class="gallery-item">
  <img src="../images/YOUR-FILENAME.jpg" alt="Description of photo" loading="lazy" />
  <div class="gallery-item-caption">Your caption here</div>
</div>
```

5. Save and upload. Done!

For the homepage photo strip, open `index.html` and replace the `<img>` src attributes in the `.strip-item` divs.

---

## How to Update Meeting Info

Open `pages/contact.html` and find the two `<div class="contact-detail">` blocks for **When** and **Where**. Replace the placeholder text with your actual meeting details.

---

## How to Add Timeline Events (History Page)

Open `pages/history.html` and copy/paste this block inside `<div class="timeline">`:

```html
<div class="timeline-item">
  <span class="timeline-year">YEAR</span>
  <h3>Event Title</h3>
  <p>Description of what happened.</p>
</div>
```

---

## How to Set Up the Contact Form (Free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll get an endpoint URL like `https://formspree.io/f/abcdefgh`
3. Open `pages/contact.html` and replace `REPLACE_WITH_YOUR_ID` in the form action with your endpoint
4. Done — form submissions go straight to your email

---

## How to Publish on GitHub Pages (Free Hosting)

1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** — name it `sdorigami` (or anything you like)
3. Upload all these files (drag and drop works in the browser)
4. Go to **Settings → Pages**
5. Under "Source", select **main branch** and click Save
6. Your site is live at `https://yourusername.github.io/sdorigami`

**To use a custom domain** (like `sdorigamigroup.org`):
- Buy domain from Namecheap, Google Domains, etc. (~$12/yr)
- In GitHub Pages settings, enter your custom domain
- Follow GitHub's DNS instructions (takes ~24 hours to activate)

---

## Colors & Fonts

Everything is in `css/style.css` under `:root {}` at the top:

```css
--indigo:  #1e2a4a   ← Dark navy (primary)
--gold:    #c9a84c   ← Gold accent
--ivory:   #f7f4ee   ← Light background
```

Fonts are loaded from Google Fonts:
- **Cormorant Garamond** — headings (elegant, editorial)
- **DM Sans** — body text (clean, readable)

---

## Tips

- All images should be under 500KB for fast loading. Use [Squoosh](https://squoosh.app) (free) to compress them.
- Add `alt=""` text to every image — helps search engines and screen readers.
- The site is fully responsive — looks great on phones too.
