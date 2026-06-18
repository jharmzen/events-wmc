import { useEffect } from 'react'

interface RouteHeadProps {
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
}

/**
 * Per-route <head> override. index.html ships static (Durban) meta shared by
 * every route; this component swaps in page-specific values while mounted and
 * restores the originals on unmount, so other routes' heads are unaffected.
 * It only updates tags that already exist in index.html — never creates/removes.
 */
export default function RouteHead({ title, description, canonical, ogTitle, ogDescription }: RouteHeadProps) {
  useEffect(() => {
    const descEl = document.querySelector('meta[name="description"]')
    const canonicalEl = document.querySelector('link[rel="canonical"]')
    const ogTitleEl = document.querySelector('meta[property="og:title"]')
    const ogDescEl = document.querySelector('meta[property="og:description"]')
    const ogUrlEl = document.querySelector('meta[property="og:url"]')

    const previous = {
      title: document.title,
      description: descEl ? descEl.getAttribute('content') : null,
      canonical: canonicalEl ? canonicalEl.getAttribute('href') : null,
      ogTitle: ogTitleEl ? ogTitleEl.getAttribute('content') : null,
      ogDescription: ogDescEl ? ogDescEl.getAttribute('content') : null,
      ogUrl: ogUrlEl ? ogUrlEl.getAttribute('content') : null,
    }

    document.title = title
    if (descEl) descEl.setAttribute('content', description)
    if (canonicalEl) canonicalEl.setAttribute('href', canonical)
    if (ogTitleEl) ogTitleEl.setAttribute('content', ogTitle)
    if (ogDescEl) ogDescEl.setAttribute('content', ogDescription)
    if (ogUrlEl) ogUrlEl.setAttribute('content', canonical)

    return () => {
      document.title = previous.title
      if (descEl && previous.description !== null) descEl.setAttribute('content', previous.description)
      if (canonicalEl && previous.canonical !== null) canonicalEl.setAttribute('href', previous.canonical)
      if (ogTitleEl && previous.ogTitle !== null) ogTitleEl.setAttribute('content', previous.ogTitle)
      if (ogDescEl && previous.ogDescription !== null) ogDescEl.setAttribute('content', previous.ogDescription)
      if (ogUrlEl && previous.ogUrl !== null) ogUrlEl.setAttribute('content', previous.ogUrl)
    }
  }, [title, description, canonical, ogTitle, ogDescription])

  return null
}
