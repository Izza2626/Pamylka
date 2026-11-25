
import { SITE_NAME, SITE_URL } from "./seoConfig";

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Engineering services specializing in rebar detailing, bar bending schedules, rebar estimation and BIM-integrated detailing.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
}

export default StructuredData;
