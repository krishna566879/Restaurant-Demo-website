/**
 * Generates optimized Unsplash URLs with automatic WebP/AVIF format negotiation
 * and responsive srcSet strings while preserving original cropping and aspect ratios.
 */
export function optimizeUnsplashUrl(url: string, width?: number, quality = 80): string {
  if (!url.includes('images.unsplash.com')) {
    return url;
  }
  const baseUrl = url.split('?')[0];
  const targetWidth = width ?? 1200;
  return `${baseUrl}?auto=format&fit=crop&w=${targetWidth}&q=${quality}`;
}

export function getUnsplashSrcSet(
  url: string,
  widths: number[] = [400, 800, 1200, 1600],
  quality = 80
): string | undefined {
  if (!url.includes('images.unsplash.com')) {
    return undefined;
  }
  const baseUrl = url.split('?')[0];
  return widths
    .map((w) => `${baseUrl}?auto=format&fit=crop&w=${w}&q=${quality} ${w}w`)
    .join(', ');
}
