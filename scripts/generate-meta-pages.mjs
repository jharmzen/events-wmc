/**
 * Post-build script: generate per-route HTML files with correct OG meta.
 *
 * WhatsApp / Facebook / Google bots don't execute JavaScript, so they see
 * only the static index.html — which has the wrong (Durban) meta for all
 * other routes.  This script copies dist/index.html for each route and
 * patches the <head> meta block so bots get the right content.
 *
 * Add a new page: add one object to ROUTES below, then rebuild.
 * Run manually: node scripts/generate-meta-pages.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');

const SITE = 'https://events.wealthmastersclub.com';

/** One entry per route that needs its own OG meta. */
const ROUTES = [
  {
    path: '30th-birthday',
    title: '30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club',
    description: 'Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | 09:00–17:00 | R800 per person.',
    ogDescription: 'Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | R800 per person.',
    ogImage: `${SITE}/images/30th-birthday/bg-30-years-hero-jhb.png`,
  },
  {
    path: 'cpt-30th-birthday',
    title: '30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club',
    description: 'Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | 09:00–17:00 | R800 per person.',
    ogDescription: 'Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | R800 per person.',
    ogImage: `${SITE}/images/30th-birthday/bg-30-years-hero-cpt.png`,
  },
];

const base = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

for (const route of ROUTES) {
  const url = `${SITE}/${route.path}`;

  const metaBlock = `  <title>${route.title}</title>
  <meta name="description" content="${route.description}" />
  <meta name="robots" content="max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Open Graph -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="events.wealthmastersclub.com" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.ogDescription}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${route.ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.ogDescription}" />
  <meta name="twitter:image" content="${route.ogImage}" />`;

  // Replace everything from <title> through the last <meta name="twitter:card"> line
  const patched = base.replace(
    /<title>[\s\S]*?<meta name="twitter:card"[^>]*>/,
    metaBlock
  );

  const outFile = path.join(DIST, `${route.path}-meta.html`);
  fs.writeFileSync(outFile, patched, 'utf8');
  console.log(`✓ ${route.path}-meta.html`);
}

console.log(`Generated ${ROUTES.length} meta page(s).`);
