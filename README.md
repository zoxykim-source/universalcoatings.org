# Universal Coatings — website files

## What's here
- `index.html` — Home
- `products.html` — Products (all 12 products + gallery + specs)
- `services.html` — Services, testimonials, "Why choose us", tech support form
- `about.html` — Team, history, vision, process
- `contact.html` — FAQs, visit us, socials, contact form
- `css/styles.css` — all styling
- `js/main.js` — mobile menu, FAQ accordion, form messages

## Adding your real photos
Dashed boxes marked "Photo — ..." are placeholders (I didn't have real image
files, only screenshots of the site editor). To add a photo:

1. Save your image into the `images/` folder, e.g. `images/team.jpg`
2. In the matching HTML file, find the placeholder `<div class="ph ...">…</div>`
   block and replace it with:
   `<img src="images/team.jpg" alt="Describe the photo">`

## Putting this on GitHub Pages
1. Create a free GitHub account and a new **public** repository
   (e.g. `universalcoatings.org`)
2. On the repo page: **Add file → Upload files**, then drag in everything
   in this folder (keep the `css` and `js` folders intact)
3. Go to **Settings → Pages**, choose branch `main`, folder `/root`, Save
4. To use your own domain: in that same Pages settings, enter
   `universalcoatings.org` as the custom domain, then add the DNS records
   GitHub shows you at your domain registrar (A records for the apex domain,
   or a CNAME if using a `www` subdomain)

## Forms
The Contact and Technical Support forms currently just show a confirmation
message in the browser — they don't send email yet. The simplest free way to
make them work is a service like Formspree (formspree.io): sign up, get a
form endpoint URL, and set each `<form>` tag's `action` to that URL.
