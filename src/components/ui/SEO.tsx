import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { restaurantData } from '../../data/restaurant';
import { chefData } from '../../data/chef';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalLink(url: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export const baseRestaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurantData.name,
  description: restaurantData.description,
  slogan: restaurantData.tagline,
  servesCuisine: restaurantData.cuisine,
  foundingDate: String(restaurantData.year),
  founder: {
    '@type': 'Person',
    name: chefData.name,
    jobTitle: chefData.role,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 Willow Street',
    addressLocality: 'Indore',
    addressCountry: 'IN',
  },
  telephone: restaurantData.phone,
  email: restaurantData.email,
  acceptsReservations: false,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '18:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
      opens: '18:00',
      closes: '23:59',
    },
  ],
};

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
}: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${pathname}`;

    document.title = title;
    setMetaTag('name', 'description', description);
    setCanonicalLink(canonicalUrl);

    // Open Graph
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', restaurantData.name);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Page-specific JSON-LD
    const scriptId = 'page-json-ld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, image, type, pathname, jsonLd]);

  return null;
}
