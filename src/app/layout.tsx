import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata: Metadata = {
  title: {
    default: "Centivo Technologies Ltd | ICT Solutions Kenya",
    template: "%s | Centivo Technologies Ltd",
  },
  description:
    "Centivo Technologies Ltd provides reliable ICT solutions in Kenya, including CCTV installation, networking, server infrastructure, web design, solar systems, and IT support.",
  keywords: [
    "ICT solutions Kenya",
    "CCTV installation Kenya",
    "networking services Kenya",
    "web design Kenya",
    "server maintenance Kenya",
    "solar installation Kenya",
    "Nairobi ICT company",
    "Kisumu ICT solutions",
  ],
  alternates: {
    canonical: "https://centivotechnology.co.ke",
  },
  openGraph: {
    title: "Centivo Technologies Ltd | ICT Solutions Kenya",
    description:
      "Professional ICT services in Kenya for businesses, schools, NGOs, and homes.",
    url: "https://centivotechnology.co.ke",
    siteName: "Centivo Technologies Ltd",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centivo Technologies Ltd | ICT Solutions Kenya",
    description:
      "Reliable ICT solutions in Kenya, from CCTV and networking to web design and solar installation.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <ThemeRegistry>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
