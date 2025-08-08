import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horror",
  description: "Scariest horror movies and thrillers.",
  alternates: {
    canonical: "/horror"
  },
  openGraph: {
    title: "Horror | Doeda",
    description: "Scariest horror movies and thrillers.",
    url: "/horror",
    siteName: "Doeda",
    type: "website"
  },
  robots: {
    index: true, follow: true
  }
};

export default function HorrorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
