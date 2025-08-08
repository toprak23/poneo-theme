import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV Shows",
  description: "Top TV shows and series with instant playback and no signup.",
  alternates: {
    canonical: "/tv-shows"
  },
  openGraph: {
    title: "TV Shows | Doeda",
    description: "Top TV shows and series with instant playback and no signup.",
    url: "/tv-shows",
    siteName: "Doeda",
    type: "website"
  },
  robots: {
    index: true, follow: true
  }
};

export default function TvShowsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
