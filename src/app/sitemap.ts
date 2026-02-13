import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fitbinary.com";
  const lastModified = "2026-02-14T03:00:00.000Z";

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/fitcloud`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fitstock`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/accounts`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
