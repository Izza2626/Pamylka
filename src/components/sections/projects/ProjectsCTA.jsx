
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectsCTA.css";

function ProjectsCTA() {
  return (
    <section className="projects-cta" aria-labelledby="projects-cta-title">
      <div className="projects-cta__container">
        <div className="projects-cta__content">
          <span className="projects-cta__eyebrow">
            <span className="projects-cta__eyebrow-line" />
            LET'S WORK TOGETHER
          </span>

          <h2 id="projects-cta-title">
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Let's discuss your reinforcement detailing, scheduling,
            or estimation requirements.
          </p>

          <div className="projects-cta__actions">
            <Link to="/contact" className="projects-cta__primary">
              Discuss Your Project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/services" className="projects-cta__secondary">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="projects-cta__visual" aria-hidden="true">
          <div className="projects-cta__visual-ring projects-cta__visual-ring--outer" />
          <div className="projects-cta__visual-ring projects-cta__visual-ring--inner" />

          <div className="projects-cta__visual-card">
            <div className="projects-cta__visual-icon">
              <MessageCircle size={27} strokeWidth={1.5} />
            </div>

            <span>ENGINEERING SUPPORT</span>

            <strong>Let's build with precision.</strong>

            <div className="projects-cta__visual-line">
              <span />
            </div>
          </div>

          <span className="projects-cta__gold-dot projects-cta__gold-dot--one" />
          <span className="projects-cta__gold-dot projects-cta__gold-dot--two" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsCTA;
