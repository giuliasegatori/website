export const GTM_ID = 'GTM-56D6BFN'

export const pageview = url => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: 'pageview', page: url })
  }
}
