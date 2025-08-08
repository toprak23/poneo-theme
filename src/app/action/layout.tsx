import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action",
  description: "High-octane action movies and scenes.",
  alternates: {
    canonical: "/action"
  },
  openGraph: {
    title: "Action | Doeda",
    description: "High-octane action movies and scenes.",
    url: "/action",
    siteName: "Doeda",
    type: "website"
  },
  robots: {
    index: true, follow: true
  }
};

export default function ActionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
