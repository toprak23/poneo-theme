import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comedy",
  description: "Best comedy clips and stand-ups to make your day.",
  alternates: {
    canonical: "/comedy"
  },
  openGraph: {
    title: "Comedy | Doeda",
    description: "Best comedy clips and stand-ups to make your day.",
    url: "/comedy",
    siteName: "Doeda",
    type: "website"
  },
  robots: {
    index: true, follow: true
  }
};

export default function ComedyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
