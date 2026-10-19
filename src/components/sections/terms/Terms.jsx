
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Scale,
  FileText,
  BriefcaseBusiness,
  ClipboardCheck,
  ShieldCheck,
  CreditCard,
  Copyright,
  AlertTriangle,
  RefreshCw,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import "./Terms.css";

const termsSections = [
  {
    id: "introduction",
    title: "Introduction and Acceptance",
    shortTitle: "Introduction",
    icon: FileText,
    paragraphs: [
      "These Terms and Conditions govern your access to and use of the PAMYLKA Engineering Services website. By accessing or using this website, you agree to these terms.",
      "If you do not agree with these terms, please discontinue use of the website. These website terms do not replace any separately signed service agreement, quotation, or project contract.",
    ],
  },
  {
    id: "services",
    title: "Our Services",
    shortTitle: "Our services",
    icon: BriefcaseBusiness,
    paragraphs: [
      "PAMYLKA Engineering Services provides engineering support services that may include rebar detailing, bar bending schedules, reinforcement quantity estimation, general arrangement drawings, BIM-integrated detailing, and site support or reconciliation.",
      "The exact scope, deliverables, technical requirements, applicable standards, timelines, and responsibilities for a project will be confirmed separately in the relevant quotation or written agreement.",
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and Project Information",
    shortTitle: "Enquiries & projects",
    icon: ClipboardCheck,
    paragraphs: [
      "Information submitted through our website should be accurate and sufficient for us to understand your enquiry. Submitting an enquiry does not automatically create a contract or guarantee acceptance of a project.",
      "Clients are responsible for providing the relevant drawings, specifications, revisions, project requirements, and other information needed for the agreed scope of work.",
    ],
  },
  {
    id: "quotations",
    title: "Quotations and Agreements",
    shortTitle: "Quotations",
    icon: FileText,
    paragraphs: [
      "Any pricing, delivery schedule, or service description provided during an initial enquiry is indicative unless expressly confirmed in a formal quotation or written agreement.",
      "Work will proceed according to the scope, deliverables, assumptions, exclusions, revision arrangements, and timelines mutually agreed for the project.",
    ],
  },
  {
    id: "payments",
    title: "Fees and Payments",
    shortTitle: "Fees & payments",
    icon: CreditCard,
    paragraphs: [
      "Project fees, payment milestones, applicable taxes, and payment deadlines will be specified in the relevant quotation, invoice, or signed agreement.",
      "Any deposits, cancellation charges, late-payment terms, or additional-work fees will apply only where agreed in the applicable written terms.",
    ],
  },
  {
    id: "responsibilities",
    title: "Client Responsibilities and Revisions",
    shortTitle: "Responsibilities",
    icon: ShieldCheck,
    paragraphs: [
      "Clients should review supplied drawings, schedules, estimates, and other deliverables against their project requirements and communicate corrections or requested revisions within the agreed review process.",
      "Changes to approved information, project requirements, scope, or source drawings may affect cost and delivery time. Any changes will be handled according to the applicable project agreement.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    shortTitle: "Intellectual property",
    icon: Copyright,
    paragraphs: [
      "Website text, visual design, branding, graphics, and other website materials may be protected by intellectual property laws. They may not be copied, republished, or commercially reused without appropriate permission.",
      "Ownership, licensing, permitted use, and transfer of project-specific drawings or deliverables will be determined by the applicable written agreement.",
    ],
  },
  {
    id: "liability",
    title: "Accuracy and Limitation of Liability",
    shortTitle: "Accuracy & liability",
    icon: AlertTriangle,
    paragraphs: [
      "We aim to provide professional engineering detailing support based on the information and requirements agreed for each project. Project deliverables should be reviewed and approved by the appropriately qualified professionals responsible for the relevant construction work.",
      "Nothing in these website terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law. Any other limitations or exclusions must be expressly agreed where legally permitted.",
    ],
  },
  {
    id: "website-use",
    title: "Website Use and Availability",
    shortTitle: "Website use",
    icon: ShieldCheck,
    paragraphs: [
      "You agree not to misuse this website, attempt unauthorized access, interfere with its operation, or use it for unlawful purposes.",
      "We may update, suspend, or discontinue website content or functionality when reasonably necessary. We do not guarantee uninterrupted availability or that the website will always be free of errors.",
    ],
  },
  {
    id: "external-links",
    title: "External Links",
    shortTitle: "External links",
    icon: BriefcaseBusiness,
    paragraphs: [
      "This website may contain links to third-party websites or services for convenience. We do not control those external resources and are not responsible for their content, availability, or privacy practices.",
      "Your use of third-party websites is subject to their own terms and policies.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    shortTitle: "Changes to terms",
    icon: RefreshCw,
    paragraphs: [
      "We may revise these Terms and Conditions as our website, services, or business requirements change. Updated terms will be published on this page with a revised date.",
      "Your continued use of the website after updated terms are published indicates your use of the website under the revised terms, to the extent permitted by applicable law.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    shortTitle: "Governing law",
    icon: Scale,
    paragraphs: [
      "The applicable law and dispute-resolution arrangements for a project should be specified in the relevant written agreement.",
      "The governing law for these website terms must be confirmed by PAMYLKA Engineering Services before publication, taking account of the company's legal establishment and applicable requirements.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    shortTitle: "Contact us",
    icon: Mail,
    paragraphs: [
      "For questions about these Terms and Conditions, contact PAMYLKA Engineering Services using the verified contact information published on our website.",
      "Please include enough information to identify your enquiry, but avoid sending confidential information unless it is necessary.",
    ],
  },
];

function Terms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const activeSection = termsSections[activeIndex];
  const ActiveIcon = activeSection.icon;

  const lastUpdated = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());

  const progress = ((activeIndex + 1) / termsSections.length) * 100;

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToSection = (index) => {
    const nextIndex = Math.max(
      0,
      Math.min(index, termsSections.length - 1)
    );

    setActiveIndex(nextIndex);
    setMenuOpen(false);

    requestAnimationFrame(() => {
      const documentElement = document.querySelector(
        ".terms-page__document"
      );

      if (!documentElement) return;

      const navbar = document.querySelector(
        "header nav, nav[aria-label='Main navigation'], .navbar, .navbar__container"
      );

      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : window.innerWidth <= 700
          ? 72
          : 80;

      const targetPosition =
        documentElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        16;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
      });
    });
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | PAMYLKA Engineering Services</title>
        <meta
          name="description"
          content="Review the Terms and Conditions for accessing the PAMYLKA Engineering Services website and enquiring about its engineering services."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pamylka.com/terms"
        />
      </Helmet>

      <main className="terms-page">
        <div
          className="terms-page__top-progress"
          role="progressbar"
          aria-label="Terms section progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="terms-page__container">
          <header className="terms-page__header">
            <span className="terms-page__eyebrow">
              <Scale size={16} />
              WEBSITE TERMS &amp; CONDITIONS
            </span>

            <h1>
              Terms <span>&amp; Conditions</span>
            </h1>

            <p className="terms-page__intro">
              Please review these terms before using the PAMYLKA
              Engineering Services website or enquiring about our
              engineering services.
            </p>

            <div className="terms-page__meta">
              <span className="terms-page__updated">
                <span className="terms-page__status-dot" />
                Last updated: {lastUpdated}
              </span>

              <span className="terms-page__section-total">
                {termsSections.length} sections
              </span>
            </div>
          </header>

          <div className="terms-page__reader">
            <aside className="terms-page__sidebar">
              <div className="terms-page__sidebar-heading">
                <span>ON THIS PAGE</span>

                <button
                  type="button"
                  className="terms-page__mobile-toggle"
                  onClick={() => setMenuOpen((previous) => !previous)}
                  aria-expanded={menuOpen}
                  aria-label={
                    menuOpen ? "Close terms menu" : "Open terms menu"
                  }
                >
                  <span>{activeSection.shortTitle}</span>

                  <ChevronRight
                    size={18}
                    className={menuOpen ? "is-rotated" : ""}
                  />
                </button>
              </div>

              <nav
                className={`terms-page__nav ${
                  menuOpen ? "terms-page__nav--open" : ""
                }`}
                aria-label="Terms and conditions sections"
              >
                {termsSections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      type="button"
                      key={section.id}
                      className={`terms-page__nav-item ${
                        isActive ? "is-active" : ""
                      }`}
                      onClick={() => goToSection(index)}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <Icon size={17} strokeWidth={1.8} />

                      <span className="terms-page__nav-label">
                        {section.shortTitle}
                      </span>

                      <span className="terms-page__nav-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="terms-page__sidebar-progress">
                <div className="terms-page__progress-label">
                  <span>TERMS PROGRESS</span>
                  <strong>{Math.round(progress)}%</strong>
                </div>

                <div className="terms-page__progress-track">
                  <span style={{ width: `${progress}%` }} />
                </div>

                <p>
                  Section {activeIndex + 1} of {termsSections.length}
                </p>
              </div>
            </aside>

            <section
              className="terms-page__document"
              key={activeSection.id}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="terms-page__document-top">
                <span className="terms-page__document-index">
                  SECTION {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="terms-page__document-label">
                  <ShieldCheck size={15} />
                  Terms and conditions
                </span>
              </div>

              <article className="terms-page__active-content">
                <div className="terms-page__section-heading">
                  <div className="terms-page__section-icon">
                    <ActiveIcon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="terms-page__section-kicker">
                      PAMYLKA ENGINEERING SERVICES
                    </span>

                    <h2>{activeSection.title}</h2>
                  </div>
                </div>

                <div className="terms-page__paragraphs">
                  {activeSection.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <div className="terms-page__pager">
                <button
                  type="button"
                  className="terms-page__pager-button"
                  onClick={() => goToSection(activeIndex - 1)}
                  disabled={activeIndex === 0}
                >
                  <ChevronLeft size={19} />

                  <span>
                    <small>PREVIOUS SECTION</small>
                    <strong>
                      {activeIndex > 0
                        ? termsSections[activeIndex - 1].shortTitle
                        : "Beginning"}
                    </strong>
                  </span>
                </button>

                <button
                  type="button"
                  className="terms-page__pager-button terms-page__pager-button--next"
                  onClick={() => goToSection(activeIndex + 1)}
                  disabled={activeIndex === termsSections.length - 1}
                >
                  <span>
                    <small>
                      {activeIndex === termsSections.length - 1
                        ? "COMPLETED"
                        : "NEXT SECTION"}
                    </small>

                    <strong>
                      {activeIndex < termsSections.length - 1
                        ? termsSections[activeIndex + 1].shortTitle
                        : "End of terms"}
                    </strong>
                  </span>

                  <ChevronRight size={19} />
                </button>
              </div>

              <div className="terms-page__document-progress">
                <span style={{ width: `${progress}%` }} />
              </div>
            </section>
          </div>

          <footer className="terms-page__footer">
            <Scale size={17} />
            <span>
              {activeIndex === termsSections.length - 1
                ? "You have reached the final section of these terms."
                : "Please review the terms relevant to your use of our website."}
            </span>
          </footer>
        </div>

        {showTop && (
          <button
            type="button"
            className="terms-page__back-top"
            onClick={goToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </main>
    </>
  );
}

export default Terms;
