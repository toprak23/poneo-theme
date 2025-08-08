import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romance",
  description: "Romantic movies and heartfelt stories.",
  alternates: {
    canonical: "/romance"
  },
  openGraph: {
    title: "Romance | Doeda",
    description: "Romantic movies and heartfelt stories.",
    url: "/romance",
    siteName: "Doeda",
    type: "website"
  },
  robots: {
    index: true, follow: true
  }
};

export default function RomanceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
