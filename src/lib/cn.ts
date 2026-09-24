/**
 * Tiny className combiner.
 * Joins truthy class strings, keeping call sites readable.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
