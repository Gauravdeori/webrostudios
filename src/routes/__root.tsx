import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import {
  AnnouncementBar,
  FloatingButtons,
  Footer,
  Navbar,
  SectionRail,
  SmoothScroll,
} from "../components/site/Layout";
import { themeInitScript } from "../lib/theme";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-6 w-64 border-4 border-ink bg-slate-light p-3 shadow-[var(--shadow-px-lg)]"
        >
          <div className="grid h-36 place-items-center border-4 border-navy bg-navy font-pixel text-6xl text-lime">
            404
          </div>
          <div className="mx-auto mt-3 h-3 w-24 bg-navy" />
        </div>
        <h1 className="text-5xl font-bold text-foreground">Error 404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border-2 border-ink bg-ink px-5 py-2.5 font-mono text-sm font-bold text-background shadow-[var(--shadow-px-lime)] transition-transform hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border-2 border-ink bg-ink px-5 py-2.5 font-mono text-sm font-bold text-background shadow-[var(--shadow-px-lime)] transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border-2 border-ink bg-surface px-5 py-2.5 font-mono text-sm font-bold text-ink shadow-[var(--shadow-px)] transition-transform hover:-translate-y-0.5"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Each content route, / included, sets its own head(). Never add og:image or twitter:image
    // here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#F7F8FA", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#0B1020", media: "(prefers-color-scheme: dark)" },
      { title: "Webro Studios — Web & Product Studio, Assam" },
      {
        name: "description",
        content: "Student-led product & web development studio from Dibrugarh, Assam.",
      },
      { name: "author", content: "Webro Studios" },
      { property: "og:site_name", content: "Webro Studios" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Webro Studios",
              parentOrganization: { "@type": "Organization", name: "THEPOSTERZZ" },
            },
            {
              "@type": "LocalBusiness",
              name: "Webro Studios",
              email: "help@webrostudios.in",
              telephone: "+91-6003275519",
              priceRange: "₹5,000+",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dibrugarh",
                addressRegion: "Assam",
                addressCountry: "IN",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the saved/system colour theme before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (st) => st.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SmoothScroll />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-lime focus:p-2 focus:text-navy"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main" key={pathname} className="animate-page-in">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <SectionRail />
    </QueryClientProvider>
  );
}
