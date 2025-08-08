import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://doeda.example/", changeFrequency: "daily", priority: 1 },
    { url: "https://doeda.example/movies", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://doeda.example/tv-shows", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://doeda.example/comedy", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://doeda.example/action", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://doeda.example/horror", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://doeda.example/romance", changeFrequency: "weekly", priority: 0.7 },
  ];
}
