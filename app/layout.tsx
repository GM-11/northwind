import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Monaco", "Menlo", "monospace"],
});

// ✅ FIXED: Separate viewport export for Next.js 14+
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Northwind Estates- Premium Sustainable Real Estate Development",
  description:
    "Northwind Estate is more than just a real estate development — it’s a statement of refined living.Rooted in trust, transparency, and timeless design, Northwind Estate reflects a commitment to crafting spaces where luxury meets functionality. Every element is thoughtfully designed to offer not just a place to live, but a lifestyle to embrace.",
  keywords:
    "Northwind Estates, sustainable real estate, green living, premium development, eco-friendly homes, natural landscapes, environmental conservation, modern amenities, green spaces, sustainable community",
  authors: [{ name: "Northwind Estates Development" }],
  category: "Real Estate",
  alternates: {
    canonical: "https://www.northwindestates.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: ["/favvicon.svg"],
  openGraph: {
    title: "Northwind Estates - Premium Sustainable Real Estate Development",
    description:
      "Northwind Estate is more than just a real estate development — it’s a statement of refined living.Rooted in trust, transparency, and timeless design, Northwind Estate reflects a commitment to crafting spaces where luxury meets functionality. Every element is thoughtfully designed to offer not just a place to live, but a lifestyle to embrace.",
    type: "website",
    locale: "en_US",
    siteName: "Northwind Estates",
    url: "https://www.northwindestates.com",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Northwind Estates- Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwind Estates - Premium Sustainable Real Estate Development",
    description:
      "Premium real estate development integrating sustainable living with abundant greenery and natural landscapes.",
    images: ["/social-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional Safari-specific meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <GoogleTagManager />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
