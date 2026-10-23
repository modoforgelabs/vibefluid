# VibeFluid website

Landing page and privacy policy for **VibeFluid**, the live-wallpaper app for Android by
ModoForge Labs. Plain HTML and CSS with one small script; no build step, no third-party
requests, no cookies.

Live at **https://modoforgelabs.github.io/vibefluid/** once GitHub Pages is on.
Privacy policy (use this URL in Play Console): **https://modoforgelabs.github.io/vibefluid/privacy/**

## Publish on GitHub Pages

1. Create the repository **`modoforgelabs/vibefluid`** on GitHub (public; Pages on private repos
   needs a paid plan). Don't add a README there, this folder already has one.
2. Push this folder:
   ```bash
   git remote add origin git@github.com:modoforgelabs/vibefluid.git
   git push -u origin main
   ```
3. Repository **Settings → Pages → Build and deployment**: Source **Deploy from a branch**,
   Branch **main**, folder **/ (root)**, Save. The site is live in a minute or two.

A different repository name changes the URL path. Pages and links are relative, so the site
itself still works, but update the absolute URLs listed under *Before going live*.

## Before going live

- [x] Contact address set to `modoforgelabs@gmail.com` (footer and privacy policy).
- [ ] Check the effective date at the top of `privacy/index.html`.
- [ ] If you publish for EU/UK users as a business, add a postal address to the contact line at
      the end of the privacy policy.
- [ ] If the repository is not `modoforgelabs/vibefluid` or you add a custom domain, update the
      absolute URLs: `<link rel="canonical">` and `og:` tags in `index.html` and
      `privacy/index.html`, `robots.txt`, `sitemap.xml`, and the `/vibefluid/` paths in `404.html`.
- [ ] When the app is on Google Play, replace the two "Coming soon to Google Play" spans in
      `index.html` with links to
      `https://play.google.com/store/apps/details?id=com.modoforge.vibefluid` (the HTML comment
      next to the first one has the snippet). Use the official "Get it on Google Play" badge if
      you want the badge artwork: https://play.google.com/intl/en_us/badges/

## Keeping the privacy policy in sync

The source of truth is `legal/PRIVACY_POLICY.md` in the app repository. When the app's data
practices change, update that file first, then regenerate or edit `privacy/index.html` here, and
keep the Play Console **Data safety** answers consistent with it.

## Structure

```
index.html            landing page
privacy/index.html    privacy policy
404.html              not-found page (GitHub Pages serves it automatically)
assets/site.css       all styles
assets/ripples.js     the touch ripples behind the hero
assets/favicon.svg    icon
assets/img/           wallpaper images (from the app's artwork and full-screen previews)
robots.txt, sitemap.xml, .nojekyll
```
