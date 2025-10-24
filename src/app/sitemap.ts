export default function sitemap() {
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: "https://www.rrgeminiservices.com",
      lastModified: today,
    },
    {
      url: "https://www.rrgeminiservices.com/services",
      lastModified: today,
    },
    {
      url: "https://www.rrgeminiservices.com/universities",
      lastModified: today,
    },
    {
      url: "https://www.rrgeminiservices.com/contact",
      lastModified: today,
    },
  ];
}
