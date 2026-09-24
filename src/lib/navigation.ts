/**
 * Home-page anchor and solution links shared by global navigation and
 * solution detail pages. Only server-solutions currently has a dedicated
 * route; other solution links lead to their existing cards on the homepage.
 */
export function homeAnchor(id: string): string {
  const anchor = `#${id.replace(/^#/, "")}`;
  return window.location.pathname === "/" ? anchor : `/${anchor}`;
}

export function solutionHref(slug: string): string {
  if (slug === "server-solutions") return "/solutions/server-solutions";
  return homeAnchor(`solution-${slug}`);
}
