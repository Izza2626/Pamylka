
import { Helmet } from "react-helmet-async";

import {
  PAGE_SEO,
  SITE_NAME,
  DEFAULT_SEO,
  getCanonicalUrl,
} from "../seo/seoConfig";

import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesOverview from "../components/sections/services/ServicesOverview";
import WhyChooseServices from "../components/sections/services/WhyChooseServices";
import ServicesFinalCTA from "../components/sections/services/ServicesFinalCTA";

function Services() {
  const seo = PAGE_SEO.services;
  const canonicalUrl = getCanonicalUrl(seo.path);
  const ogImage = DEFAULT_SEO.ogImage;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="PAMYLKA Engineering Services — Rebar Detailing and BBS Services"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <main>
        <ServicesHero />
        <ServicesOverview />
        <WhyChooseServices />
        <ServicesFinalCTA />
      </main>
    </>
  );
}

export default Services;
