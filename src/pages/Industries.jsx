
import { Helmet } from "react-helmet-async";

import {
  PAGE_SEO,
  SITE_NAME,
  DEFAULT_SEO,
  getCanonicalUrl,
} from "../seo/seoConfig";

import IndustriesHero from "../components/sections/industries/IndustriesHero";
import IndustriesWeServe from "../components/sections/industries/IndustriesWeServe";
import IndustrySolutions from "../components/sections/industries/IndustrySolutions";
import IndustriesCTA from "../components/sections/industries/IndustriesCTA";

function Industries() {
  const seo = PAGE_SEO.industries;
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
          content="Industries served by PAMYLKA Engineering Services"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <main>
        <IndustriesHero />
        <IndustriesWeServe />
        <IndustrySolutions />
        <IndustriesCTA />
      </main>
    </>
  );
}

export default Industries;
