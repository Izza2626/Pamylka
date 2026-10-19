
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  Layers3,
  MoveUpRight,
  Ruler,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectsPortfolio.css";

const projects = [
  {
    id: "rebar-detailing",
    number: "01",
    category: "STRUCTURAL DOCUMENTATION",
    title: "Rebar Detailing",
    shortDescription:
      "Detailed reinforcement drawings designed to communicate structural requirements clearly.",
    overview:
      "Rebar detailing translates structural design information into coordinated reinforcement drawings that help project teams understand bar placement, reinforcement arrangements, and detailing requirements.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Architecture and engineering design workspace",
    icon: Layers3,
    servicePath: "/services/rebar-detailing",
    scope: [
      "Reinforcement layouts and member details",
      "Bar marks and reinforcement arrangements",
      "Drawing coordination and technical review",
      "Clear construction documentation",
    ],
    deliverables: [
      "Reinforcement detail drawings",
      "Bar identification and callouts",
      "Organized drawing documentation",
    ],
  },
  {
    id: "bar-bending-schedules",
    number: "02",
    category: "REINFORCEMENT SCHEDULING",
    title: "Bar Bending Schedules",
    shortDescription:
      "Structured reinforcement schedules for easier review, planning, and execution.",
    overview:
      "Bar Bending Schedules (BBS) organize reinforcement information into a consistent schedule, helping teams review bar shapes, quantities, cutting lengths, and associated reinforcement references.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Construction site with structural work in progress",
    icon: ClipboardList,
    servicePath: "/services/bar-bending-schedules",
    scope: [
      "Bar marks and shape references",
      "Bar diameter and quantity information",
      "Cutting-length calculations and scheduling",
      "Schedule checking and organization",
    ],
    deliverables: [
      "Bar Bending Schedule tables",
      "Bar shape and mark references",
      "Structured reinforcement data",
    ],
  },
  {
    id: "rebar-estimation",
    number: "03",
    category: "QUANTITY ESTIMATION",
    title: "Rebar Estimation",
    shortDescription:
      "Organized reinforcement quantity take-offs to support project planning and cost control.",
    overview:
      "Rebar estimation involves reviewing the available structural information and preparing organized reinforcement quantity take-offs to support material planning, quantity review, and project coordination.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Modern building structures and architectural forms",
    icon: Ruler,
    servicePath: "/services/rebar-estimation",
    scope: [
      "Review of supplied structural drawings",
      "Reinforcement quantity take-offs",
      "Quantity summaries and categorization",
      "Documentation for quantity review",
    ],
    deliverables: [
      "Reinforcement quantity summaries",
      "Quantity take-off documentation",
      "Organized estimation records",
    ],
  },
];

function ProjectsPortfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = previouslyFocusedRef.current;

    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveProject(null);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const focusable = Array.from(focusableElements).filter(
        (element) => element.getClientRects().length > 0
      );

      if (focusable.length === 0) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === firstElement ||
          document.activeElement === modalRef.current)
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      if (previouslyFocused?.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [activeProject]);

  function openProject(project, event) {
    previouslyFocusedRef.current = event.currentTarget;
    setActiveProject(project);
  }

  function closeProject() {
    setActiveProject(null);
  }

  return (
    <section
      className="projects-portfolio"
      id="project-portfolio"
      aria-labelledby="projects-portfolio-title"
    >
      <div className="projects-portfolio__container">
        <div className="projects-portfolio__header">
          <div className="projects-portfolio__heading">
            <span className="projects-portfolio__eyebrow">
              <span className="projects-portfolio__eyebrow-line" />
              OUR TECHNICAL CAPABILITIES
            </span>

            <h2 id="projects-portfolio-title">
              Engineering expertise,
              <br />
              <span>clearly delivered.</span>
            </h2>

            <p className="projects-portfolio__intro">
              Explore how our detailing, scheduling, and estimation
              services translate engineering information into organized
              technical documentation.
            </p>
          </div>

          <Link
            to="/services"
            className="projects-portfolio__all-services"
          >
            Explore all services
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="projects-portfolio__grid">
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <button
                className="projects-portfolio__card"
                key={project.id}
                type="button"
                onClick={(event) => openProject(project, event)}
                aria-haspopup="dialog"
                aria-label={`View details about ${project.title}`}
              >
                <div className="projects-portfolio__image-wrap">
                  <img
                    className="projects-portfolio__image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />

                  <span className="projects-portfolio__number">
                    {project.number}
                  </span>

                  <span
                    className="projects-portfolio__card-icon"
                    aria-hidden="true"
                  >
                    <ProjectIcon size={21} strokeWidth={1.7} />
                  </span>

                  <span
                    className="projects-portfolio__image-arrow"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={21} />
                  </span>
                </div>

                <div className="projects-portfolio__card-content">
                  <span className="projects-portfolio__category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.shortDescription}</p>

                  <span className="projects-portfolio__view">
                    View details
                    <MoveUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="projects-portfolio__footnote">
          <span className="projects-portfolio__footnote-icon">
            <Check size={15} aria-hidden="true" />
          </span>
          <p>
            These examples describe our service capabilities. Specific
            deliverables depend on the project drawings, specifications,
            and agreed scope of work.
          </p>
        </div>
      </div>

      {activeProject &&
        createPortal(
          <div
            className="projects-modal__overlay"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <div
              className="projects-modal__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="projects-modal-title"
              aria-describedby="projects-modal-description"
              tabIndex={-1}
              ref={modalRef}
            >
              <button
                className="projects-modal__close"
                type="button"
                onClick={closeProject}
                aria-label="Close service details"
                ref={closeButtonRef}
              >
                <X size={21} aria-hidden="true" />
              </button>

              <div className="projects-modal__visual">
                <img
                  className="projects-modal__image"
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                />

                <div className="projects-modal__visual-overlay" />

                <div className="projects-modal__visual-content">
                  <span className="projects-modal__number">
                    CAPABILITY {activeProject.number}
                  </span>

                  <h3>{activeProject.title}</h3>

                  <p>{activeProject.category}</p>
                </div>
              </div>

              <div className="projects-modal__content">
                <span className="projects-modal__eyebrow">
                  SERVICE OVERVIEW
                </span>

                <h2 id="projects-modal-title">
                  {activeProject.title}
                </h2>

                <p
                  className="projects-modal__description"
                  id="projects-modal-description"
                >
                  {activeProject.overview}
                </p>

                <div className="projects-modal__details-grid">
                  <div className="projects-modal__detail">
                    <div className="projects-modal__detail-heading">
                      <span className="projects-modal__detail-icon">
                        <Layers3 size={18} aria-hidden="true" />
                      </span>
                      <h4>Scope of work</h4>
                    </div>

                    <ul>
                      {activeProject.scope.map((item) => (
                        <li key={item}>
                          <Check
                            size={15}
                            aria-hidden="true"
                            className="projects-modal__check"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects-modal__detail">
                    <div className="projects-modal__detail-heading">
                      <span className="projects-modal__detail-icon">
                        <ClipboardList size={18} aria-hidden="true" />
                      </span>
                      <h4>Typical deliverables</h4>
                    </div>

                    <ul>
                      {activeProject.deliverables.map((item) => (
                        <li key={item}>
                          <Check
                            size={15}
                            aria-hidden="true"
                            className="projects-modal__check"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="projects-modal__note">
                  <span className="projects-modal__note-line" />
                  <p>
                    Final deliverables are determined by the supplied
                    drawings, project specifications, and agreed
                    requirements.
                  </p>
                </div>

                <div className="projects-modal__actions">
                  <Link
                    to={activeProject.servicePath}
                    className="projects-modal__primary-button"
                    onClick={closeProject}
                  >
                    Explore this service
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>

                  <Link
                    to="/contact"
                    className="projects-modal__secondary-button"
                    onClick={closeProject}
                  >
                    Discuss your requirements
                    <ArrowDownRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default ProjectsPortfolio;
