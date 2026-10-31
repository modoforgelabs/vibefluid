# VibeFluid website

Website for **VibeFluid**, interactive live wallpapers for Android by ModoForge Labs.

- Website: https://modoforgelabs.app/vibefluid/
- Privacy policy: https://modoforgelabs.app/vibefluid/privacy/
- Contact: modoforgelabs@gmail.com

Plain HTML and CSS with one small script, served by GitHub Pages. No build step, no cookies and
no third-party requests.

## Structure

```
index.html            landing page
privacy/index.html    privacy policy
404.html              not-found page
assets/site.css       styles
assets/ripples.js     touch ripples behind the hero
assets/favicon.svg    icon
assets/img/           wallpaper images
robots.txt, sitemap.xml, .nojekyll
```

To view it locally, serve the parent folder so paths match the live site:

```bash
python3 -m http.server 8000 --directory ..
```

then open http://localhost:8000/vibefluid/.
