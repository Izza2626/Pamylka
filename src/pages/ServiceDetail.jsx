
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  FileText,
  Layers3,
  Ruler,
} from "lucide-react";

import servicesData from "../data/servicesData";
import {
  SITE_NAME,
  getCanonicalUrl,
  getServiceSeo,
} from "../seo/seoConfig";

import "./ServiceDetail.css";

const deliverableIcons = [FileText, Ruler, Layers3, ClipboardList];

function TechnicalDrawing() {
  return (
    <div
      className="sd-drawing"
      role="img"
      aria-label="Illustrative technical drawing showing a reinforced concrete section and reinforcement layout. This is a decorative concept visual, not a construction drawing."
    >
      <div className="sd-drawing__topline">
        <span>PAMYLKA ENGINEERING</span>
        <span>TECHNICAL DETAIL</span>
      </div>

      <div className="sd-drawing__canvas">
        <div className="sd-drawing__grid" />

        <div className="sd-drawing__dimension sd-drawing__dimension--top">
          <span>SECTION A—A</span>
        </div>

        <div className="sd-drawing__slab">
          <div className="sd-drawing__rebar sd-drawing__rebar--horizontal" />
          <div className="sd-drawing__rebar sd-drawing__rebar--vertical" />
          <div className="sd-drawing__core" />
        </div>

        <div className="sd-drawing__dimension sd-drawing__dimension--left">
          <span>STRUCTURAL DETAIL</span>
        </div>

        <div className="sd-drawing__callout sd-drawing__callout--one">
          <span className="sd-drawing__callout-dot" />
          <span>BAR LAYOUT</span>
        </div>

        <div className="sd-drawing__callout sd-drawing__callout--two">
          <span className="sd-drawing__callout-dot" />
          <span>SECTION DETAIL</span>
        </div>

        <div className="sd-drawing__section-marker">
          <span>A</span>
          <i />
          <span>A</span>
        </div>
      </div>

      <div className="sd-drawing__footer">
        <div>
          <span className="sd-drawing__label">DRAWING TYPE</span>
          <strong>ENGINEERING DETAIL</strong>
        </div>

        <div>
          <span className="sd-drawing__label">REFERENCE</span>
          <strong>ILLUSTRATIVE ONLY</strong>
        </div>

        <span className="sd-drawing__accent" />
      </div>
    </div>
  );
}

function ServiceDetail() {
  const { slug } = useParams();

  // Match the route to the actual slug in servicesData.js.
  const service = servicesData.find((item) => item.slug === slug);

  // Redirect invalid service URLs to the main Services page.
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Retrieve the matching SEO entry from seoConfig.js.
  const serviceSeo = getServiceSeo(service.slug);

  const canonicalUrl = getCanonicalUrl(
    serviceSeo?.path || `/services/${service.slug}`
  );

  const seoTitle =
    serviceSeo?.title ||
    `${service.title} | ${SITE_NAME}`;

  const seoDescription =
    serviceSeo?.description ||
    service.description;

  const pageUrl = canonicalUrl;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Helmet>

      <main className="service-detail">
        {/* HERO */}
        <section className="sd-hero" aria-labelledby="sd-hero-title">
          <div className="sd-container">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className="sd-hero__grid">
              <div className="sd-hero__content">
                <p className="sd-eyebrow">
                  <span />
                  OUR SERVICES / {service.title.toUpperCase()}
                </p>

                <h1 id="sd-hero-title">{service.title}</h1>

                <p className="sd-hero__intro">{service.description}</p>

                <div className="sd-hero__actions">
                  <Link
                    className="sd-button sd-button--primary"
                    to="/contact"
                  >
                    Discuss Your Project
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>

                  <a className="sd-text-link" href="#sd-scope">
                    Explore the service
                    <ArrowDown size={16} aria-hidden="true" />
                  </a>
                </div>

                <div className="sd-hero__note">
                  <span className="sd-hero__note-line" />
                  <p>
                    {service.subtitle} Our scope and deliverables are
                    defined according to your project requirements.
                  </p>
                </div>
              </div>

              <div className="sd-hero__visual">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={`${service.title} engineering service`}
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <TechnicalDrawing />
                )}

                <div className="sd-hero__visual-caption">
                  <span>TECHNICAL CLARITY</span>
                  <span>STRUCTURED ENGINEERING</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section
          className="sd-overview sd-section"
          aria-labelledby="sd-overview-title"
        >
          <div className="sd-container sd-overview__grid">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">
                <span />
                THE SERVICE
              </p>

              <h2 id="sd-overview-title">{service.title}</h2>
            </div>

            <div className="sd-overview__copy">
              <p>{service.overview}</p>

              <p>{service.description}</p>

              <a className="sd-inline-link" href="#sd-deliverables">
                View service deliverables
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* SCOPE */}
        <section
          className="sd-scope sd-section"
          id="sd-scope"
          aria-labelledby="sd-scope-title"
        >
          <div className="sd-container">
            <div className="sd-section-intro">
              <div>
                <p className="sd-eyebrow">
                  <span />
                  SCOPE OF WORK
                </p>

                <h2 id="sd-scope-title">
                  What this service can include
                </h2>
              </div>

              <p>
                The final scope depends on the available project
                information, agreed requirements and required deliverables.
              </p>
            </div>

            <div className="sd-scope__list">
              {service.deliverables.map((deliverable, index) => (
                <article
                  className="sd-scope-item"
                  key={deliverable}
                >
                  <span className="sd-scope-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{deliverable}</h3>

                  <p>
                    Prepared according to the supplied project
                    documentation and agreed scope of work.
                  </p>

                  <ArrowUpRight
                    className="sd-scope-item__icon"
                    size={19}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section
          className="sd-deliverables sd-section"
          id="sd-deliverables"
          aria-labelledby="sd-deliverables-title"
        >
          <div className="sd-container">
            <div className="sd-section-intro">
              <div>
                <p className="sd-eyebrow">
                  <span />
                  PROJECT OUTPUTS
                </p>

                <h2 id="sd-deliverables-title">
                  Structured documentation for your project.
                </h2>
              </div>

              <p>
                Deliverables and submission formats are confirmed
                according to the project requirements and agreed scope.
              </p>
            </div>

            <div className="sd-deliverables__grid">
              {service.deliverables.map((deliverable, index) => {
                const Icon =
                  deliverableIcons[index % deliverableIcons.length];

                return (
                  <article
                    className="sd-deliverable"
                    key={deliverable}
                  >
                    <div className="sd-deliverable__top">
                      <span className="sd-deliverable__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{deliverable}</h3>

                    <p>
                      Included where required by the project brief
                      and agreed service scope.
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="sd-note">
              <span className="sd-note__mark">i</span>

              <p>
                Final deliverables, file formats, revisions and
                submission requirements should be confirmed in the
                project quotation or agreed scope.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT INFORMATION */}
        <section
          className="sd-inputs sd-section"
          aria-labelledby="sd-inputs-title"
        >
          <div className="sd-container sd-inputs__grid">
            <div className="sd-inputs__heading">
              <p className="sd-eyebrow">
                <span />
                PROJECT PREPARATION
              </p>

              <h2 id="sd-inputs-title">
                Information that helps define the work.
              </h2>

              <p>
                Providing current and coordinated project information
                helps establish requirements, clarify assumptions and
                identify outstanding questions.
              </p>
            </div>

            <div className="sd-inputs__list">
              {[
                "Relevant structural drawings and project documents.",
                "Project specifications and applicable requirements.",
                "Required deliverables and submission formats.",
                "Project schedule and agreed scope of work.",
                "Available revisions and design clarifications.",
              ].map((input) => (
                <div className="sd-input-row" key={input}>
                  <Check size={18} aria-hidden="true" />
                  <p>{input}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          className="sd-benefits sd-section"
          aria-labelledby="sd-benefits-title"
        >
          <div className="sd-container sd-benefits__grid">
            <div>
              <p className="sd-eyebrow">
                <span />
                THE VALUE
              </p>

              <h2 id="sd-benefits-title">
                Support for clearer project coordination.
              </h2>

              <p className="sd-benefits__intro">
                Our service approach focuses on clear documentation
                and agreed project requirements. The exact scope and
                responsibilities are established for each project.
              </p>
            </div>

            <div className="sd-benefits__list">
              {service.benefits.map((benefit, index) => (
                <article
                  className="sd-benefit-row"
                  key={benefit.title}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          className="sd-related sd-section"
          aria-labelledby="sd-related-title"
        >
          <div className="sd-container">
            <div className="sd-section-intro">
              <div>
                <p className="sd-eyebrow">
                  <span />
                  EXPLORE MORE
                </p>

                <h2 id="sd-related-title">
                  Other engineering services
                </h2>
              </div>

              <p>
                Explore other PAMYLKA Engineering Services capabilities
                that may align with your project requirements.
              </p>
            </div>

            <div className="sd-related__grid">
              {servicesData
                .filter((item) => item.slug !== service.slug)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    className="sd-related__card"
                    to={`/services/${item.slug}`}
                    key={item.slug}
                  >
                    <span className="sd-related__number">
                      {item.number}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.subtitle}</p>

                    <span className="sd-inline-link">
                      Explore service
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sd-cta" aria-labelledby="sd-cta-title">
          <div className="sd-container sd-cta__inner">
            <div>
              <p className="sd-eyebrow">
                <span />
                LET'S DISCUSS YOUR PROJECT
              </p>

              <h2 id="sd-cta-title">
                Need support with {service.title.toLowerCase()}?
              </h2>

              <p>
                Share your project requirements and available
                documentation to discuss the appropriate scope of work.
              </p>
            </div>

            <Link
              className="sd-button sd-button--primary"
              to="/contact"
            >
              Request a Quote
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ServiceDetail;
