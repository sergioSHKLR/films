import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import brand from "@/lib/og/brand.json";
import appCss from "../styles.css?url";

const APP_NAME = brand.name;

/** Live plate. Unlayered, so this wins over Tailwind's `@theme` layer.
 *  Faces come from styles.css (SHKLR brand kit: system fonts for content, SHKLR Mono Narrow self-hosted for the wordmark). */
function brandRootCss() {
  const { background, foreground, copper } = brand.plate;
  return `:root{--color-bg:${background};--color-fg:${foreground};--color-accent:${copper}}`;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Thirty-one films and series for a prepared civilian mindset: posters, cast, synopses, and discussion questions.",
      },
      { name: "theme-color", content: brand.plate.background },
      { name: "apple-mobile-web-app-title", content: APP_NAME },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { property: "og:site_name", content: APP_NAME },
      { property: "og:title", content: APP_NAME },
      { property: "og:image", content: "/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/x-card.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "apple-touch-startup-image", href: "/splash/splash-iphone-se-750x1334.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", href: "/splash/splash-iphone-13-14-1170x2532.png", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", href: "/splash/splash-iphone-15-16-1179x2556.png", media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", href: "/splash/splash-iphone-16-pro-max-1320x2868.png", media: "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", href: "/splash/splash-ipad-air-11-1640x2360.png", media: "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      {
        rel: "preload",
        href: "/fonts/SHKLRMonoNarrow[wght].woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <style>{brandRootCss()}</style>
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <div className="plate-frame min-h-screen">
            <Outlet />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
