# Migration Notes

## Decisions

### Styling approach
Option B chosen: all original WordPress CSS files copied verbatim into `public/` and linked in `index.html` in original load order. All Elementor/EKit class names preserved exactly on JSX elements.

### No React Router
The source is a CartFlows "canvas" template — no WordPress header or footer navigation. This is a single marketing/landing page. No internal routing needed.

### Swiper version
Swiper 8.x installed from npm. The WP theme uses Swiper CSS from the downloaded `swiper.min.css` and `e-swiper.min.css` files (kept verbatim). Only the JS is sourced from npm.

### Body class
The full original WordPress body class string is applied to `<body>` in `index.html`. This is essential — Elementor CSS targets many class combinations on the body element.

### TypeScript / Swiper resolution
Swiper 8.x does not expose `./modules` in its `package.json` exports field, which is incompatible with `moduleResolution: "bundler"`. Changed to `moduleResolution: "node"` with `ignoreDeprecations: "5.0"`, `allowSyntheticDefaultImports: true`, and `esModuleInterop: true`. All module imports resolved from `'swiper'` directly.

## Missing Assets

### `coert-world.long_.png`
- **Used in:** ProvenStrategies section (`elementor-element-7309ad10`) as background slideshow image
- **Not present** in the downloaded wp-page files
- **Workaround:** Section has a fallback `background-color: #1a1a2e` applied inline
- **Fix:** Obtain `coert-world.long_.png` from the live site, copy to `react-app/public/`, then update ProvenStrategies.tsx to use it as a background-image

### Website fonts (Manrope, Fira Code variable fonts)
- Source is `https://events.wealthmastersclub.com/wp-content/themes/...`
- Not downloaded locally — requires live internet access or manual download
- Google Fonts (Roboto, Montserrat, Poppins, Roboto Slab) are loaded externally — requires internet

## Stubs / TODOs

### Registration / booking
- All "Secure your seat" and "BOOK NOW" buttons link to external Quicket.co.za URLs
- These are live links, not stubbed

### Analytics
- Facebook Pixel (ID: 1361266612389502) — NOT implemented in React version
- Google Tag Manager (GT-5TNL24MC) — NOT implemented
- PixelYourSite — NOT implemented
- **TODO:** If analytics are required, add them back to `index.html` or a dedicated analytics component

### WooCommerce / CartFlows
- WooCommerce CSS files are included for visual fidelity but WooCommerce JS is not loaded
- CartFlows checkout functionality is not replicated (page has no checkout form)

### Social share links
- Facebook, Instagram, LinkedIn, YouTube icons render correctly
- The `elementskit-social-share` widget on the original site may open a share dialog or navigate to a URL — in the React version the icons are rendered but no href/onClick is wired
- **TODO:** Add appropriate href or onClick handlers to each social icon

### Cape Town event (3rd city card)
- The original page links `href="http://x/"` for the Cape Town page — this appears to be a placeholder indicating no event page exists yet
- Preserved as-is in the React version

## Visual Differences

### Elementor lazy-loading
- The original site lazy-loads background images on Elementor containers using IntersectionObserver
- React version disables this entirely (all containers get `e-lazyloaded` behaviour immediately via CSS override)
- Visual: all section backgrounds appear immediately on page load instead of fading in on scroll
