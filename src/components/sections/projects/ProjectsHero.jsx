
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectsHero.css";

function ProjectsHero() {
  return (
    <section className="projects-hero" aria-labelledby="projects-hero-title">
      <div className="projects-hero__panel">
        <div className="projects-hero__layout">
          {/* Left: Main message */}
          <div className="projects-hero__content">
            <span className="projects-hero__eyebrow">
              <span className="projects-hero__eyebrow-dot" />
              PAMYLKA ENGINEERING SERVICES
            </span>

            <h1 id="projects-hero-title">
              Precision in
              <br />
              every <span>detail.</span>
            </h1>

            <p className="projects-hero__description">
              Explore the engineering thinking behind reinforcement
              detailing, bar bending schedules, and construction
              documentation.
            </p>

            <div className="projects-hero__actions">
              <Link
                to="/projects#project-portfolio"
                className="projects-hero__button"
              >
                Explore Portfolio
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                className="projects-hero__secondary-link"
              >
                Discuss a Project
                <MoveUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="projects-hero__brand-note">
              <span className="projects-hero__brand-line" />
              <span>Engineering clarity. Built on precision.</span>
            </div>
          </div>

          {/* Right: Layered visual composition */}
          <div className="projects-hero__collage">
            <div className="projects-hero__image projects-hero__image--main">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=85"
                alt="Illustrative construction site with structural work in progress"
                fetchPriority="high"
              />
              <span className="projects-hero__image-tag">
                CONSTRUCTION
              </span>
            </div>

            <div className="projects-hero__image projects-hero__image--detail">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85"
                alt="Illustrative architectural and engineering design workspace"
                loading="lazy"
              />
            </div>

            <div className="projects-hero__service-card projects-hero__service-card--top">
              <span className="projects-hero__service-icon">
                <span className="projects-hero__icon-grid" />
              </span>
              <span className="projects-hero__service-text">
                <strong>Rebar Detailing</strong>
                <small>Structural documentation</small>
              </span>
              <ArrowUpRight
                className="projects-hero__service-arrow"
                size={17}
                aria-hidden="true"
              />
            </div>

            <div className="projects-hero__service-card projects-hero__service-card--bottom">
              <span className="projects-hero__service-accent" />
              <span className="projects-hero__service-text">
                <strong>BBS & Estimation</strong>
                <small>Clear technical information</small>
              </span>
            </div>

            <div className="projects-hero__collage-caption">
              <span />
              Illustrative engineering visuals — not actual PAMYLKA projects
            </div>

            <div className="projects-hero__decor" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default ProjectsHero;
