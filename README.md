# Minazh Hair Salon

A one page website for a private home hair studio in Aurora, Ontario.
Plain HTML, CSS and a little JavaScript. No build step, no framework, nothing
to install. Open `index.html` and it works.

```
index.html        the whole page
css/style.css     all the styling
js/main.js        menu, scroll fades, footer year
images/           your photos go here (see images/README.md)
tools/crop.html   crops photos to the right shape and filename
favicon.svg       the little tab icon
```

## This is a spec build

The site was built on spec to show the salon owner, not commissioned by her.
Two things follow from that:

- There's a `noindex` tag in the `<head>` so the demo stays out of Google
  while it's being shown around. It's commented. Delete it on launch day,
  otherwise the site will never rank for anything.
- The photos and review quotes belong to her business. Use her own photos
  rather than ones customers uploaded to her listing, and she'll want her
  clients' okay before any of their hair goes on a public site.

## Before it goes live

Name, address, phone, hours and Instagram are all real and match the Google
listing, which is what local search wants. What's left:

- **A domain.** Once there is one, add `"url"` and `"image"` back to the
  structured data block in the `<head>` as absolute URLs.
- **The address.** 8 Gilbank Dr is a house. It's public on the Google
  listing and there's a sign on the building, so the site shows it. If she'd
  rather hold it back until an appointment is confirmed, that's the Where row
  in the Visit section.

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
