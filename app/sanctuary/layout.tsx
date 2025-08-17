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
    "Northwind Sanctuary is a premium real estate development that integrates sustainable living with abundant greenery and natural landscapes, offering residents a harmonious blend of modern amenities and environmental conservation.",
  keywords:
    "Northwind Sanctuary, sustainable real estate, green living, premium development, eco-friendly homes, natural landscapes, environmental conservation, modern amenities, green spaces, sustainable community",
  authors: [{ name: "Northwind Sanctuary Development" }],
  category: "Real Estate",
  alternates: {
    canonical: "https://www.northwindsanctuary.com",
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
    url: "https://www.northwindsanctuary.com",
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
