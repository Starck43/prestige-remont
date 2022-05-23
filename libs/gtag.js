export const

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag("config", GA_ANALYTICS_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Log specific events, i.e search terms
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}
