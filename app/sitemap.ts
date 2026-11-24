import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gidtechnologies.com";

  const publicPages = [
    {
      path: "",
      priority: 1,
    },
    {
      path: "/solutions",
      priority: 0.9,
    },
    {
      path: "/contact",
      priority: 0.9,
    },
    {
      path: "/about",
      priority: 0.8,
    },
    {
      path: "/products",
      priority: 0.7,
    },
    {
      path: "/statbet",
      priority: 0.7,
    },
  ];

  return publicPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
