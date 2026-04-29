import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/components/AuthProvider";
import { AntiInspect } from "@/components/AntiInspect";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:glow-sm transition-shadow"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tamim Mostafa — Cybersecurity & Embedded Systems" },
      { name: "description", content: "Personal portfolio of Tamim Mostafa — cybersecurity & embedded systems student from Cairo, with a passion for cars and performance tuning." },
      { property: "og:title", content: "Tamim Mostafa — Cybersecurity & Embedded Systems" },
      { name: "twitter:title", content: "Tamim Mostafa — Cybersecurity & Embedded Systems" },
      { property: "og:description", content: "Personal portfolio of Tamim Mostafa — cybersecurity & embedded systems student from Cairo, with a passion for cars and performance tuning." },
      { name: "twitter:description", content: "Personal portfolio of Tamim Mostafa — cybersecurity & embedded systems student from Cairo, with a passion for cars and performance tuning." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e3c0c775-43f8-4d6c-89ae-77b0f02e739f/id-preview-6de2076e--addd9d41-5a83-4b32-b9e0-51f1eba65884.lovable.app-1777458634399.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e3c0c775-43f8-4d6c-89ae-77b0f02e739f/id-preview-6de2076e--addd9d41-5a83-4b32-b9e0-51f1eba65884.lovable.app-1777458634399.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
  return (
    <AuthProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <AntiInspect />
        <Cursor />
        <Nav />
        <Outlet />
        <footer className="border-t border-border/50 py-10 px-6 text-center text-sm text-muted-foreground font-mono">
          © 2026 Tamim Mostafa — built with intention.
        </footer>
        <Toaster />
      </div>
    </AuthProvider>
  );
}
