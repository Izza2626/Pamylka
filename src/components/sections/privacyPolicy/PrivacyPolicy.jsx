
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  Cookie,
  Mail,
  FileText,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import "./PrivacyPolicy.css";

const policySections = [
  {
    id: "introduction",
    title: "Introduction",
    shortTitle: "Introduction",
    icon: ShieldCheck,
    paragraphs: [
      "PAMYLKA Engineering Services respects your privacy. This policy explains how information may be collected, used, and protected when you visit our website or contact us about our engineering services.",
      "Where consent is legally required for a particular activity, we will seek it separately as applicable.",
    ],
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    shortTitle: "Information collected",
    icon: Database,
    paragraphs: [
      "When you contact us, we may collect information you choose to provide, such as your name, company name, email address, phone number, requested service, and project details.",
      "Technical information, such as browser type, device information, and website usage data, may be collected if the relevant technologies are enabled.",
    ],
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    shortTitle: "How we use data",
    icon: Eye,
    paragraphs: [
      "Information may be used to respond to enquiries, understand project requirements, prepare quotations, communicate about our services, maintain website functionality, and improve the visitor experience.",
      "Information will only be used for applicable purposes that reflect our actual website configuration and business practices.",
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection and Retention",
    shortTitle: "Data protection",
    icon: LockKeyhole,
    paragraphs: [
      "We take reasonable steps to protect information against unauthorized access, loss, misuse, or disclosure. However, no method of online transmission or electronic storage can be guaranteed completely secure.",
      "Information is retained for as long as reasonably necessary for its intended purpose, business requirements, and applicable legal obligations.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Third-Party Services",
    shortTitle: "Cookies & services",
    icon: Cookie,
    paragraphs: [
      "Our website may use cookies or similar technologies for functionality, preferences, security, or analytics, depending on the technologies actually implemented.",
      "Third-party hosting, form-processing, analytics, or communication providers may process information when their services are used. Their own privacy policies may also apply.",
    ],
  },
  {
    id: "sharing-rights",
    title: "Information Sharing and Your Rights",
    shortTitle: "Sharing & your rights",
    icon: ShieldCheck,
    paragraphs: [
      "We do not sell personal information. Information may be shared with service providers when necessary to operate the website or respond to your enquiry, or where disclosure is required by law.",
      "Subject to applicable law, you may request access to, correction of, or deletion of personal information you have provided. We may need to verify your identity before responding.",
    ],
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    shortTitle: "Policy updates",
    icon: FileText,
    paragraphs: [
      "This policy may be updated when our website, services, or legal requirements change. The latest version will be published on this page with an updated revision date.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    shortTitle: "Contact us",
    icon: Mail,
    paragraphs: [
      "For questions or requests concerning your personal information, contact PAMYLKA Engineering Services using the verified contact details published on our website.",
      "Please avoid sending confidential personal or project information unless it is necessary for your enquiry.",
    ],
  },
];

function PrivacyPolicy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const activeSection = policySections[activeIndex];
  const ActiveIcon = activeSection.icon;

  const lastUpdated = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());

  const progress = ((activeIndex + 1) / policySections.length) * 100;

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
      Math.min(index, policySections.length - 1)
    );

    setActiveIndex(nextIndex);
    setMenuOpen(false);

    // Keep the selected document below the navbar.
    requestAnimationFrame(() => {
      const documentElement = document.querySelector(
        ".privacy-policy__document"
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
        <title>Privacy Policy | PAMYLKA Engineering Services</title>
        <meta
          name="description"
          content="Read the Privacy Policy of PAMYLKA Engineering Services to understand how website enquiries and personal information may be handled."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pamylka.com/privacy-policy"
        />
      </Helmet>

      <main className="privacy-policy">
        <div
          className="privacy-policy__top-progress"
          role="progressbar"
          aria-label="Privacy policy section progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="privacy-policy__container">
          <header className="privacy-policy__header">
            <span className="privacy-policy__eyebrow">
              <ShieldCheck size={16} />
              PRIVACY &amp; DATA PROTECTION
            </span>

            <h1>
              Privacy <span>Policy</span>
            </h1>

            <p className="privacy-policy__intro">
              Your trust matters. Learn how PAMYLKA Engineering Services
              handles information when you interact with our website
              or enquire about our services.
            </p>

            <div className="privacy-policy__meta">
              <span className="privacy-policy__updated">
                <span className="privacy-policy__status-dot" />
                Last updated: {lastUpdated}
              </span>

              <span className="privacy-policy__section-total">
                {policySections.length} sections
              </span>
            </div>
          </header>

          <div className="privacy-policy__reader">
            <aside className="privacy-policy__sidebar">
              <div className="privacy-policy__sidebar-heading">
                <span>ON THIS PAGE</span>

                <button
                  type="button"
                  className="privacy-policy__mobile-toggle"
                  onClick={() => setMenuOpen((previous) => !previous)}
                  aria-expanded={menuOpen}
                  aria-label={
                    menuOpen ? "Close policy menu" : "Open policy menu"
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
                className={`privacy-policy__nav ${
                  menuOpen ? "privacy-policy__nav--open" : ""
                }`}
                aria-label="Privacy policy sections"
              >
                {policySections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      type="button"
                      key={section.id}
                      className={`privacy-policy__nav-item ${
                        isActive ? "is-active" : ""
                      }`}
                      onClick={() => goToSection(index)}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <Icon size={17} strokeWidth={1.8} />

                      <span className="privacy-policy__nav-label">
                        {section.shortTitle}
                      </span>

                      <span className="privacy-policy__nav-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="privacy-policy__sidebar-progress">
                <div className="privacy-policy__progress-label">
                  <span>POLICY PROGRESS</span>
                  <strong>{Math.round(progress)}%</strong>
                </div>

                <div className="privacy-policy__progress-track">
                  <span style={{ width: `${progress}%` }} />
                </div>

                <p>
                  Section {activeIndex + 1} of {policySections.length}
                </p>
              </div>
            </aside>

            <section
              className="privacy-policy__document"
              key={activeSection.id}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="privacy-policy__document-top">
                <span className="privacy-policy__document-index">
                  SECTION {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="privacy-policy__document-label">
                  <ShieldCheck size={15} />
                  Official policy information
                </span>
              </div>

              <article className="privacy-policy__active-content">
                <div className="privacy-policy__section-heading">
                  <div className="privacy-policy__section-icon">
                    <ActiveIcon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="privacy-policy__section-kicker">
                      PAMYLKA ENGINEERING SERVICES
                    </span>

                    <h2>{activeSection.title}</h2>
                  </div>
                </div>

                <div className="privacy-policy__paragraphs">
                  {activeSection.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {activeSection.id === "contact" && (
                  <div className="privacy-policy__contact-note">
                    <Mail size={19} />
                    <p>
                      For privacy-related enquiries, please use the
                      company&apos;s verified contact information on the
                      Contact page.
                    </p>
                  </div>
                )}
              </article>

              <div className="privacy-policy__pager">
                <button
                  type="button"
                  className="privacy-policy__pager-button"
                  onClick={() => goToSection(activeIndex - 1)}
                  disabled={activeIndex === 0}
                >
                  <ChevronLeft size={19} />

                  <span>
                    <small>PREVIOUS SECTION</small>
                    <strong>
                      {activeIndex > 0
                        ? policySections[activeIndex - 1].shortTitle
                        : "Beginning"}
                    </strong>
                  </span>
                </button>

                <button
                  type="button"
                  className="privacy-policy__pager-button privacy-policy__pager-button--next"
                  onClick={() => goToSection(activeIndex + 1)}
                  disabled={activeIndex === policySections.length - 1}
                >
                  <span>
                    <small>
                      {activeIndex === policySections.length - 1
                        ? "COMPLETED"
                        : "NEXT SECTION"}
                    </small>

                    <strong>
                      {activeIndex < policySections.length - 1
                        ? policySections[activeIndex + 1].shortTitle
                        : "End of policy"}
                    </strong>
                  </span>

                  <ChevronRight size={19} />
                </button>
              </div>

              <div className="privacy-policy__document-progress">
                <span style={{ width: `${progress}%` }} />
              </div>
            </section>
          </div>

          <footer className="privacy-policy__footer">
            <ShieldCheck size={17} />
            <span>
              {activeIndex === policySections.length - 1
                ? "You have reached the final section of this policy."
                : "Your privacy is important to us."}
            </span>
          </footer>
        </div>

        {showTop && (
          <button
            type="button"
            className="privacy-policy__back-top"
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

export default PrivacyPolicy;
