
export const SITE_URL = "https://www.pamylka.com";

export const SITE_NAME = "PAMYLKA Engineering Services";

export const DEFAULT_SEO = {
  title: "PAMYLKA Engineering Services | Rebar Detailing in Dubai",
  description:
    "PAMYLKA Engineering Services provides rebar detailing, bar bending schedules, rebar estimation, GA drawings and BIM-integrated detailing solutions.",
  canonical: SITE_URL,
  ogImage: `${SITE_URL}/images/og-image.jpg`,
  locale: "en_AE",
};

export const PAGE_SEO = {
  home: {
    title: "Rebar Detailing Services in Dubai | PAMYLKA Engineering",
    description:
      "Explore rebar detailing, BBS preparation, rebar estimation and BIM-integrated detailing services from PAMYLKA Engineering Services.",
    path: "/",
  },

  about: {
    title: "About Us | PAMYLKA Engineering Services",
    description:
      "Learn about PAMYLKA Engineering Services and our approach to precise, efficient and dependable rebar detailing solutions.",
    path: "/about",
  },

  services: {
    title: "Rebar Detailing & BBS Services | PAMYLKA Engineering",
    description:
      "Discover rebar detailing, bar bending schedules, rebar estimation, GA drawings, BIM-integrated detailing and site support.",
    path: "/services",
  },

  projects: {
    title: "Projects | PAMYLKA Engineering Services",
    description:
      "Explore project information and rebar detailing capabilities from PAMYLKA Engineering Services.",
    path: "/projects",
  },

  industries: {
    title: "Industries We Serve | PAMYLKA Engineering Services",
    description:
      "Discover the construction professionals and project teams supported by PAMYLKA Engineering Services.",
    path: "/industries",
  },

  contact: {
    title: "Contact Us | PAMYLKA Engineering Services",
    description:
      "Contact PAMYLKA Engineering Services to discuss your rebar detailing, BBS, estimation or drawing requirements.",
    path: "/contact",
  },

  privacy: {
    title: "Privacy Policy | PAMYLKA Engineering Services",
    description:
      "Read the privacy policy for the PAMYLKA Engineering Services website.",
    path: "/privacy-policy",
  },

  terms: {
    title: "Terms and Conditions | PAMYLKA Engineering Services",
    description:
      "Review the terms and conditions governing use of the PAMYLKA Engineering Services website.",
    path: "/terms",
  },
};

export const SERVICE_SEO = {
  "rebar-detailing": {
    title: "Rebar Detailing Services in Dubai | PAMYLKA",
    description:
      "Explore reinforcement detailing drawings, bar marks and reinforcement arrangement documentation from PAMYLKA Engineering Services.",
    path: "/services/rebar-detailing",
  },

  "bar-bending-schedules": {
    title: "Bar Bending Schedule Services in Dubai | PAMYLKA",
    description:
      "Explore bar bending schedules with bar marks, shapes, dimensions and quantity information for reinforcement projects.",
    path: "/services/bar-bending-schedules",
  },

  "rebar-estimation": {
    title: "Rebar Estimation Services in Dubai | PAMYLKA",
    description:
      "Explore reinforcement quantity take-offs and structured rebar quantity summaries to support construction planning and procurement.",
    path: "/services/rebar-estimation",
  },

  "ga-drawings": {
    title: "General Arrangement Drawings in Dubai | PAMYLKA",
    description:
      "Explore general arrangement drawing services for structural layouts, dimensions and construction project coordination.",
    path: "/services/ga-drawings",
  },

  "bim-integrated-detailing": {
    title: "BIM-Integrated Rebar Detailing | PAMYLKA",
    description:
      "Explore BIM-integrated detailing workflows and coordinated reinforcement documentation based on agreed project requirements.",
    path: "/services/bim-integrated-detailing",
  },

  "site-support-reconciliation": {
    title: "Site Support & Rebar Reconciliation | PAMYLKA",
    description:
      "Explore reinforcement drawing clarification, revision support and quantity reconciliation services from PAMYLKA Engineering Services.",
    path: "/services/site-support-reconciliation",
  },
};

export function getCanonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
}

export function getServiceSeo(slug) {
  return SERVICE_SEO[slug] || null;
}

