
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
import "./ServiceDetail.css";

const SITE_URL = "https://www.pamylka.com";

const rebarDetailingContent = {
  title: "Rebar Detailing",
  eyebrow: "OUR SERVICES / REBAR DETAILING",
  headline: "Rebar detailing for construction clarity.",
  intro:
    "Detailed reinforcement drawings help translate structural design information into clear, coordinated documentation for construction and reinforcement fabrication.",
  overview:
    "Rebar detailing is the process of interpreting structural design drawings and developing reinforcement details that communicate the arrangement, dimensions, shape and placement of reinforcing steel. The objective is to make the intended reinforcement easier to understand, review and execute.",
  paragraphs: [
    "Depending on the structure and agreed scope, detailing may cover reinforcement arrangements for foundations, columns, beams, slabs, walls, stairs and other reinforced-concrete elements.",
    "Well-organized detailing documentation helps project teams identify bar positions, reinforcement sizes, spacing, laps, anchorage and other relevant information specified by the design. Actual requirements depend on the structural drawings, project specifications and applicable standards.",
  ],
  scope: [
    {
      title: "Structural drawing interpretation",
      text: "Review the structural drawings, sections, schedules and project information provided to understand the required reinforcement arrangement and detailing constraints.",
    },
    {
      title: "Reinforcement layout drawings",
      text: "Prepare reinforcement plans, elevations and sections for the applicable structural elements, showing the bar arrangement and relevant dimensions.",
    },
    {
      title: "Bar marks and reinforcement callouts",
      text: "Organize bar references, reinforcement sizes, spacing, quantities and placement information as required by the project documentation.",
    },
    {
      title: "Sections and construction details",
      text: "Illustrate relevant reinforcement intersections, anchorage, laps and other specified details where the design information and agreed scope require them.",
    },
    {
      title: "Coordination and drawing revisions",
      text: "Update detailing outputs in response to agreed design clarifications, coordinated information and documented review comments.",
    },
  ],
  deliverables: [
    {
      title: "Reinforcement drawings",
      text: "Plans, elevations and sections for the agreed structural elements.",
      icon: FileText,
    },
    {
      title: "Bar identification",
      text: "Bar marks, sizes, spacing and placement references where required.",
      icon: Ruler,
    },
    {
      title: "Detail callouts",
      text: "Relevant sections, notes and reinforcement details for interpretation.",
      icon: Layers3,
    },
    {
      title: "Drawing issue package",
      text: "Organized drawing files in the agreed formats and revision status.",
      icon: ClipboardList,
    },
  ],
  inputs: [
    "Latest approved or issued structural drawings.",
    "Project specifications and applicable detailing standards.",
    "Architectural or coordination drawings where relevant.",
    "Required drawing format, submission requirements and project schedule.",
    "Design clarifications and revision information, where available.",
  ],
  workflow: [
    {
      number: "01",
      title: "Receive project information",
      text: "Review the supplied structural documents, project requirements, drawing status and agreed scope.",
    },
    {
      number: "02",
      title: "Develop reinforcement details",
      text: "Prepare the relevant reinforcement layouts, sections, bar references and notes based on the available design information.",
    },
    {
      number: "03",
      title: "Review and coordinate",
      text: "Check drawing consistency and address agreed review comments or coordination clarifications.",
    },
    {
      number: "04",
      title: "Issue agreed deliverables",
      text: "Provide the completed documentation in the agreed formats and issue status, subject to project review and approval requirements.",
    },
  ],
  benefits: [
    {
      title: "Clearer site interpretation",
      text: "Structured drawings help site teams understand the intended reinforcement arrangement.",
    },
    {
      title: "Organized reinforcement information",
      text: "Consistent bar references, dimensions and callouts make technical information easier to follow.",
    },
    {
      title: "Improved coordination",
      text: "Well-presented detailing provides a clearer basis for technical reviews and project communication.",
    },
  ],
};

const normalizeSlug = (value = "") =>
  value.replace(/^\/+|\/+$/g, "").replace(/^services\//, "");

function TechnicalDrawing() {
  return (
    <div
      className="sd-drawing"
      role="img"
      aria-label="Illustrative technical drawing showing a reinforced concrete section and reinforcement layout. This is a decorative concept visual, not a construction drawing."
    >
      <div className="sd-drawing__topline">
        <span>PAMYLKA ENGINEERING</span>
        <span>DETAIL / 01</span>
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
          <span>REINFORCEMENT</span>
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
          <strong>REINFORCEMENT DETAIL</strong>
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

  const service = servicesData.find(
    (item) => normalizeSlug(item.slug) === normalizeSlug(slug)
  );

  // This layout is currently written specifically for Rebar Detailing.
  // Other service pages should receive their own service-specific content.
  if (!service || normalizeSlug(service.slug) !== "rebar-detailing") {
    return <Navigate to="/services" replace />;
  }

  const page = rebarDetailingContent;
  const canonicalUrl = `${SITE_URL}/services/rebar-detailing`;

  return (
    <>
      <Helmet>
        <title>
          Rebar Detailing Services in Dubai | PAMYLKA Engineering
        </title>
        <meta
          name="description"
          content="Explore PAMYLKA Engineering Services' rebar detailing scope, reinforcement drawing deliverables, project inputs and workflow for reinforced-concrete construction."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rebar Detailing Services | PAMYLKA Engineering"
        />
        <meta
          property="og:description"
          content={page.intro}
        />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <main className="service-detail">
        <section className="sd-hero" aria-labelledby="sd-hero-title">
          <div className="sd-container">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Rebar Detailing</span>
            </nav>

            <div className="sd-hero__grid">
              <div className="sd-hero__content">
                <p className="sd-eyebrow">
                  <span />
                  {page.eyebrow}
                </p>

                <h1 id="sd-hero-title">{page.headline}</h1>

                <p className="sd-hero__intro">{page.intro}</p>

                <div className="sd-hero__actions">
                  <Link className="sd-button sd-button--primary" to="/contact">
                    Discuss Your Project
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>

                  <a className="sd-text-link" href="#sd-scope">
                    Explore the scope
                    <ArrowDown size={16} aria-hidden="true" />
                  </a>
                </div>

                <div className="sd-hero__note">
                  <span className="sd-hero__note-line" />
                  <p>
                    Reinforcement documentation shaped around project
                    requirements and supplied structural information.
                  </p>
                </div>
              </div>

              <div className="sd-hero__visual">
                <TechnicalDrawing />
                <div className="sd-hero__visual-caption">
                  <span>TECHNICAL CLARITY</span>
                  <span>STRUCTURED DETAILING</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sd-overview sd-section" aria-labelledby="sd-overview-title">
          <div className="sd-container sd-overview__grid">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">
                <span />
                THE SERVICE
              </p>
              <h2 id="sd-overview-title">
                Turning structural intent into clear reinforcement details.
              </h2>
            </div>

            <div className="sd-overview__copy">
              <p>{page.overview}</p>
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a className="sd-inline-link" href="#sd-deliverables">
                View typical deliverables
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

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
                <h2 id="sd-scope-title">What the detailing scope can include</h2>
              </div>
              <p>
                The final scope is defined by the project documents, structural
                design information and agreed deliverables.
              </p>
            </div>

            <div className="sd-scope__list">
              {page.scope.map((item, index) => (
                <article className="sd-scope-item" key={item.title}>
                  <span className="sd-scope-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
                  Documentation designed to communicate clearly.
                </h2>
              </div>
              <p>
                Deliverables vary by structural element and contract scope.
                Confirm the required formats and schedules at project kickoff.
              </p>
            </div>

            <div className="sd-deliverables__grid">
              {page.deliverables.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className="sd-deliverable" key={item.title}>
                    <div className="sd-deliverable__top">
                      <span className="sd-deliverable__number">
                        0{index + 1}
                      </span>
                      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>

            <div className="sd-note">
              <span className="sd-note__mark">i</span>
              <p>
                Bar bending schedules, reinforcement quantities, native CAD
                files and other supplementary outputs should be confirmed
                separately in the quotation unless expressly included in the
                agreed scope.
              </p>
            </div>
          </div>
        </section>

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
                Information that helps us define the work.
              </h2>
              <p>
                Providing current, coordinated project information helps
                establish the detailing scope, clarify assumptions and identify
                outstanding design queries.
              </p>
            </div>

            <div className="sd-inputs__list">
              {page.inputs.map((input) => (
                <div className="sd-input-row" key={input}>
                  <Check size={18} aria-hidden="true" />
                  <p>{input}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="sd-workflow sd-section"
          aria-labelledby="sd-workflow-title"
        >
          <div className="sd-container">
            <div className="sd-section-intro">
              <div>
                <p className="sd-eyebrow">
                  <span />
                  WORKING PROCESS
                </p>
                <h2 id="sd-workflow-title">
                  A clear process from input to issue.
                </h2>
              </div>
              <p>
                The sequence below is a proposed project workflow. Actual
                review stages, turnaround times and approvals must be agreed
                for each project.
              </p>
            </div>

            <div className="sd-workflow__grid">
              {page.workflow.map((step) => (
                <article className="sd-workflow-step" key={step.number}>
                  <span className="sd-workflow-step__number">
                    {step.number}
                  </span>
                  <div className="sd-workflow-step__rule" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                Clearer information for better coordination.
              </h2>
              <p className="sd-benefits__intro">
                Rebar detailing supports the communication of reinforcement
                requirements. It does not replace the structural engineer's
                design responsibility or project-specific approval process.
              </p>
            </div>

            <div className="sd-benefits__list">
              {page.benefits.map((benefit, index) => (
                <article className="sd-benefit-row" key={benefit.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-cta" aria-labelledby="sd-cta-title">
          <div className="sd-container sd-cta__inner">
            <div>
              <p className="sd-eyebrow">
                <span />
                LET'S DISCUSS YOUR PROJECT
              </p>
              <h2 id="sd-cta-title">
                Need reinforcement detailing support?
              </h2>
              <p>
                Share your project requirements and available structural
                information to discuss the appropriate scope of work.
              </p>
            </div>

            <Link className="sd-button sd-button--primary" to="/contact">
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
