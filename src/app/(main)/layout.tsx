import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const prata = Prata({ weight: "400", subsets: ["latin"], variable: "--font-prata" });

export const viewport: import('next').Viewport = {
  themeColor: "#0c0c0c",
};

export const metadata: Metadata = {
  title: {
    default: "Atelier North Motor Works | Vintage Automotive Restoration",
    template: "%s | Atelier North Motor Works"
  },
  description: "Bespoke automotive preservation and restoration for collectors, enthusiasts, and legacy owners specializing in air-cooled and vintage analog machines.",
  metadataBase: new URL("https://atelier-motor-works.vercel.app"),
  keywords: ["vintage automotive restoration", "air-cooled porsche", "concours restoration", "mechanical preservation", "classic car restoration", "boutique restoration agency"],
  openGraph: {
    title: "Atelier North Motor Works",
    description: "Bespoke automotive preservation for collectors, enthusiasts, and legacy owners.",
    url: "https://atelier-motor-works.vercel.app",
    siteName: "Atelier North Motor Works",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier North Motor Works - Vintage Automotive Restoration",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier North Motor Works",
    description: "Bespoke automotive preservation for collectors.",
    images: ["/images/og-image.jpg"],
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Atelier North Motor Works",
  "image": "https://atelier-motor-works.vercel.app/images/og-image.jpg",
  "url": "https://atelier-motor-works.vercel.app",
  "telephone": "+1-555-0198",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Vintage Way",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90001",
    "addressCountry": "US"
  },
  "description": "Bespoke automotive preservation and restoration for collectors, enthusiasts, and legacy owners specializing in air-cooled and vintage analog machines."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${prata.variable}`}>
      <body className="bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-primary selection:text-brand-bg flex flex-col min-h-screen">
        <MotionProvider>
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <PageTransition>
            <main className="flex-grow">{children}</main>
          </PageTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
