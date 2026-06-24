import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { JsonLd } from "@/components/shared/json-ld";
import { Toaster } from "@/components/ui/sonner";

// Títulos: serif editorial con carácter.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

// Cuerpo y UI: sans cálido y muy legible.
const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

// Acento decorativo manuscrito (wordmark y detalles editoriales).
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const keywords = [
  "cafetería literaria la cisterna",
  "cafetería literaria santiago",
  "café de especialidad la cisterna",
  "cafetería pet friendly la cisterna",
  "cafetería con libros santiago",
  "cafetería cultural santiago",
  "cafetería en la cisterna",
  "cafetería fernández albano",
  "café y libros santiago",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Cafetería Literaria en La Cisterna`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Café, libros y buenos momentos`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Café, libros y buenos momentos`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <JsonLd />
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
        <StickyMobileCta />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
