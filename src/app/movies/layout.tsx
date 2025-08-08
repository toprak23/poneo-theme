import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
  description: "Watch the latest full-length movies in HD with fast streaming.",
  alternates: {
    canonical: "/movies"
  },
  openGraph: {
    title: "Movies | Doeda",
    description: "Watch the latest full-length movies in HD with fast streaming.",
    url: "/movies",
    siteName: "Doeda",
    type: "website"
  },
  robots: {
    index: true, follow: true
  }
};

export default function MoviesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
