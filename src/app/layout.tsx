import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doeda.example"),
  title: {
    default: "Doeda — Fast HD Streaming",
    template: "%s | Doeda"
  },
  description: "Doeda: hızlı, reklama hazır HD video izleme deneyimi. Kategorilere göre filtrele, Bunny.Net embed ile ışık hızında oynat.",
  applicationName: "Doeda",
  referrer: "origin-when-cross-origin",
  keywords: ["Doeda","video","stream","Bunny","embed","HD","movies","tv shows","comedy","action","horror","romance"],
  authors: [{ name: "Doeda" }],
  creator: "Doeda",
  publisher: "Doeda",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Doeda — Fast HD Streaming",
    description: "Hızlı, mobil uyumlu, Bunny.Net ile çalışan video platformu",
    siteName: "Doeda"
  },
  twitter: {
    card: "summary_large_image",
    title: "Doeda — Fast HD Streaming",
    description: "Hızlı, mobil uyumlu, Bunny.Net ile çalışan video platformu"
  },
  alternates: {
    canonical: "/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
              <link rel="preconnect" href="https://iframe.mediadelivery.net" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
