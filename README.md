# Minazh Hair Salon

A one page website for a private home hair studio in Aurora, Ontario.
Plain HTML, CSS and a little JavaScript. No build step, no framework, nothing
to install. Open `index.html` and it works.

```
index.html        the whole page
css/style.css     all the styling
js/main.js        menu, scroll fades, footer year
images/           your photos go here (see images/README.md)
favicon.svg       the little tab icon
```

## Before it goes live

A few things still need your real details. Search the files for `REPLACE_`
and swap in the real value.

| Token | Where | What to put |
|---|---|---|
| `REPLACE_PHONE` | `index.html` | Your number as people should read it, e.g. `(905) 555 0142` |
| `REPLACE_PHONE_DIGITS` | `index.html` | The same number, digits only, e.g. `+19055550142`. This is what the "Text to book" button dials. |
| `REPLACE_INSTAGRAM_URL` | `index.html` | Full link to your profile |
| `REPLACE_INSTAGRAM_HANDLE` | `index.html` | Your handle without the @ |
| `REPLACE_SITE_URL` | `index.html` | Your domain once you have one, e.g. `https://minazhhair.com` |

Also worth a look:

- **Photos.** Read `images/README.md`. The page looks finished without them,
  but real photos are what will actually sell the appointment.
- **Prices.** The services section says pricing depends on length and
  thickness. If you'd rather show starting prices, add them under each
  service in the `svc__body` blocks.
- **Hours.** Right now it says "by appointment" and asks people to text. If
  you keep set hours, put them in the Hours row of the Visit section.
- **Reviews.** The quotes are real ones from your Google page, trimmed for
  length. Swap or add more in the `words` section any time.

## Running it locally

Double click `index.html`, or serve it so the paths behave exactly like they
will online:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Putting it online

Any static host works, and the free tiers are plenty for a site like this.

- **Netlify or Vercel**: drag the folder onto their dashboard. Done.
- **GitHub Pages**: repo Settings, Pages, deploy from `main`, root folder.
- **Cloudflare Pages**: connect the repo, leave the build command empty,
  output directory `/`.

Then point your domain at it and add the link to your Google Business profile
and your Instagram bio.

## Notes

- The fonts (Fraunces and Karla) load from Google Fonts. If they're ever
  unavailable the page falls back to Georgia and Helvetica and still holds
  together.
- Photo slots use CSS background images, so a missing file shows a warm wash
  instead of a broken image icon.
- Structured data for local search is in the `<head>`, which helps you show up
  for things like "balayage Aurora".
