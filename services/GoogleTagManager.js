export const GTM_ID = 'GTM-56D6BFN'

export const pageview = url => {
  const pageEvent = {
    event: 'pageview',
    page: url
  }
  if (window && window.dataLayer) {
    window.dataLayer.push(pageEvent)
  }
}
