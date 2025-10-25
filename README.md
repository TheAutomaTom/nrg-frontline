# nrg-frontline

This template should help get you started developing with Vue 3 in Vite.

## Special Thanks to

`https://alexop.dev/posts/create-pwa-vue3-vite-4-steps/`

### Notes

We’ll use the vite-plugin-pwa to integrate Workbox, which will handle our service worker and caching strategies.

Before we dive into the configuration, let’s understand the runtime caching strategies we’ll be using:

StaleWhileRevalidate for static resources (styles, scripts, and workers):

This strategy serves cached content immediately while fetching an update in the background.
It’s ideal for frequently updated resources that aren’t 100% up-to-date.
We’ll limit the cache to 50 entries and set an expiration of 30 days.
CacheFirst for images:

This strategy serves cached images immediately without network requests if they’re available.
It’s perfect for static assets that don’t change often.
We’ll limit the image cache to 100 entries and set an expiration of 60 days.
These strategies ensure that your PWA remains functional offline while efficiently managing cache storage.

## Naive UI

`https://www.naiveui.com/en-US/dark/docs`

### Icons

> Refer to `https://github.com/07akioni/xicons#installation`

We'll try out @vicons/fluent to begin:
`https://developer.microsoft.com/en-us/fluentui#/styles/web/icons`
