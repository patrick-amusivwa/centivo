import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6a4655a7539b7e1d4b7d3078/1jshbt6gm';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
