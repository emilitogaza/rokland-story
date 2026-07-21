import type { Metadata, Viewport } from "next";
import { Mona_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Runs synchronously during HTML parsing, before first paint, so the saved (or
// system) theme is applied to <html> with no flash of the wrong colours. Falls
// back to the OS preference when the user hasn't chosen one yet.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

const SITE_NAME = "Fuel Lab";
const SITE_TITLE = "Fuel Lab — nutritional science for athletes";
const SITE_DESCRIPTION =
  "An evidence-based course on nutritional science — protein and amino acids, vitamins and supplements, fuelling performance, and losing fat while keeping muscle. Built for athletes, from the fundamentals to the current research.";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(10, 60%, 97%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(10, 55%, 4%)" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Lets Next.js disable the CSS smooth scroll while it resets the scroll
      // position on navigation, so route transitions don't animate a scroll.
      data-scroll-behavior="smooth"
      // The inline theme script sets the `dark` class before React hydrates.
      suppressHydrationWarning
      className={`${monaSans.variable} h-full antialiased selection:text-ink-flip selection:bg-brand`}
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted inline theme script, no user input */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
