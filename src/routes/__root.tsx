import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import brand from "@/lib/og/brand.json";
import appCss from "../styles.css?url";

const APP_NAME = brand.name;

function brandFontHref() {
  const family = (face: string) => face.replaceAll(" ", "+");
  return (
    "https://fonts.googleapis.com/css2?family=" +
    `${family(brand.displayFace)}:ital,wght@0,400;0,700;1,400` +
    `&family=${family(brand.bodyFace)}:ital,wght@0,400;0,600;0,700;1,400` +
    "&display=swap"
  );
}

/** Live plate and faces. Unlayered, so this wins over Tailwind's `@theme` layer. */
function brandRootCss() {
  const { background, foreground, copper } = brand.plate;
  return (
    `:root{--color-bg:${background};--color-fg:${foreground};--color-accent:${copper};` +
    `--font-sans:"${brand.bodyFace}", ui-sans-serif, system-ui, sans-serif;` +
    `--font-display:"${brand.displayFace}", ui-serif, Georgia, serif}`
  );
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
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: brandFontHref(),
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
