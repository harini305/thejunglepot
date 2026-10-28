const ROUTES = ["", "/stay", "/spa", "/dining", "/experiences", "/about", "/contact"];

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `https://thejunglepots.com${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
