# Design Tokens

## Colors (from global-styles-inline-css)
| Token | Value | Usage |
|-------|-------|-------|
| `--wp--preset--color--base` | `#FFFFFF` | Background |
| `--wp--preset--color--contrast` | `#111111` | Text |
| `--wp--preset--color--accent-1` | `#FFEE58` | Yellow accent |
| `--wp--preset--color--accent-2` | `#F6CFF4` | Pink accent |
| `--wp--preset--color--accent-3` | `#503AA8` | Purple accent |
| `--wp--preset--color--accent-4` | `#686868` | Gray accent |
| `--wp--preset--color--accent-5` | `#FBFAF3` | Off-white |

## CartFlows/Elementor Global Colors (from wcf-frontend-global-inline-css)
| Token | Value |
|-------|-------|
| `--e-global-color-wcfgcpprimarycolor` | `#f16334` (orange) |
| `--e-global-color-wcfgcpsecondarycolor` | `#000000` |
| `--e-global-color-wcfgcptextcolor` | `#4B5563` |
| `--e-global-color-wcfgcpaccentcolor` | `#1F2937` |

## Essential Blocks Colors
| Token | Value |
|-------|-------|
| `--eb-global-primary-color` | `#101828` |
| `--eb-global-secondary-color` | `#475467` |
| `--eb-global-link-color` | `#444CE7` |

## Fonts
| Family | Weights | Usage |
|--------|---------|-------|
| Manrope | 200–800 (variable) | Body, headings (primary) |
| "Fira Code" | 300–700 (variable) | Monospace |
| Roboto, Roboto Slab, Montserrat, Poppins | Various | Elementor widget fonts |

Font source: Google Fonts (loaded externally via CSS links in index.html)
Local variable fonts in theme: `/wp-content/themes/twentytwentyfive/assets/fonts/`

## Spacing Scale
| Token | Value |
|-------|-------|
| `--wp--preset--spacing--20` | `10px` |
| `--wp--preset--spacing--30` | `20px` |
| `--wp--preset--spacing--40` | `30px` |
| `--wp--preset--spacing--50` | `clamp(30px, 5vw, 50px)` |
| `--wp--preset--spacing--60` | `clamp(30px, 7vw, 70px)` |
| `--wp--preset--spacing--70` | `clamp(50px, 7vw, 90px)` |
| `--wp--preset--spacing--80` | `clamp(70px, 10vw, 140px)` |

## Font Sizes
| Token | Value |
|-------|-------|
| `--wp--preset--font-size--small` | `0.875rem` |
| `--wp--preset--font-size--medium` | `clamp(1rem, 1rem + ((1vw - 0.2rem) * 0.196), 1.125rem)` |
| `--wp--preset--font-size--large` | `clamp(1.125rem, 1.125rem + ((1vw - 0.2rem) * 0.392), 1.375rem)` |
| `--wp--preset--font-size--x-large` | `clamp(1.75rem, 1.75rem + ((1vw - 0.2rem) * 0.392), 2rem)` |
| `--wp--preset--font-size--xx-large` | `clamp(2.15rem, 2.15rem + ((1vw - 0.2rem) * 1.333), 3rem)` |

## Breakpoints (Elementor)
| Name | Value | Direction |
|------|-------|-----------|
| mobile | 767px | max-width |
| tablet | 1024px | max-width |
| (desktop) | >1024px | — |

## Layout
| Token | Value |
|-------|-------|
| `--wp--style--global--content-size` | `645px` |
| `--wp--style--global--wide-size` | `1340px` |

## Missing Assets
- `coert-world.long_.png` — used as background slideshow in ProvenStrategies section. Not in downloaded files. Section falls back to solid background color.
