import { optimizeUnsplashUrl } from './images';

const routeImporters: Record<string, () => Promise<unknown>> = {
  '/menu': () => import('../pages/MenuPage'),
  '/about': () => import('../pages/AboutPage'),
  '/contact': () => import('../pages/ContactPage'),
  '/reservations': () => import('../pages/ContactPage'),
};

const routeHeroImages: Record<string, string> = {
  '/': optimizeUnsplashUrl('https://images.unsplash.com/photo-1414235077428-338989a2e8c0', 1200),
  '/menu': optimizeUnsplashUrl('https://images.unsplash.com/photo-1555396273-367ea4eb4db5', 1200),
  '/about': optimizeUnsplashUrl('https://images.unsplash.com/photo-1559329007-40df8a9345d8', 1200),
  '/contact': optimizeUnsplashUrl('https://images.unsplash.com/photo-1414235077428-338989a2e8c0', 1200),
  '/reservations': optimizeUnsplashUrl('https://images.unsplash.com/photo-1414235077428-338989a2e8c0', 1200),
};

const prefetchedRoutes = new Set<string>();

export function prefetchRoute(path: string) {
  if (prefetchedRoutes.has(path)) return;
  prefetchedRoutes.add(path);

  const importer = routeImporters[path];
  if (importer) {
    importer().catch(() => {
      prefetchedRoutes.delete(path);
    });
  }

  const heroImg = routeHeroImages[path];
  if (heroImg && typeof window !== 'undefined') {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    img.decoding = 'async';
    img.src = heroImg;
  }
}

export function prefetchAllRoutes() {
  Object.keys(routeImporters).forEach((path) => prefetchRoute(path));
}
