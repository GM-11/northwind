import type { Metadata } from "next";
import "../globals.css";

// ✅ FIXED: Separate viewport export for Next.js 14+
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Northwind Sanctuary - Premium Sustainable Real Estate Development",
  description:
    "Northwind Sanctuary is more than just a real estate development — it’s a statement of refined living.Rooted in trust, transparency, and timeless design, Northwind Sanctuary reflects a commitment to crafting spaces where luxury meets functionality. Every element is thoughtfully designed to offer not just a place to live, but a lifestyle to embrace." ,
  keywords:
    "Northwind Sanctuary, sustainable real estate, green living, premium development, eco-friendly homes, natural landscapes, environmental conservation, modern amenities, green spaces, sustainable community",
  authors: [{ name: "Northwind Sanctuary Development" }],
  category: "Real Estate",
  alternates: {
    canonical: "https://www.northwindestates.com/sanctuary",
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
    title: "Northwind Sanctuary - Premium Sustainable Real Estate Development",
    description:
      "Discover Northwind Sanctuary, where sustainable living meets luxury. Premium real estate development with abundant greenery and natural landscapes.",
    type: "website",
    locale: "en_US",
    siteName: "Northwind Sanctuary",
    url: "https://www.northwindestates.com/sanctuary",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Northwind Sanctuary - Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwind Sanctuary - Premium Sustainable Real Estate Development",
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
  return <>{children}</>;
}
