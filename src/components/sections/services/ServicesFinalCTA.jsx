
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ServicesFinalCTA.css";

function ServicesFinalCTA() {
  return (
    <section
      className="services-final-cta"
      aria-labelledby="services-final-cta-title"
    >
      <div className="services-final-cta__container">
        <span className="services-final-cta__eyebrow">
          LET'S WORK TOGETHER
        </span>

        <h2 id="services-final-cta-title">
          Have a project in mind?
        </h2>

        <p className="services-final-cta__description">
          Let's discuss your reinforcement detailing requirements
          and find the right engineering support for your project.
        </p>

        <div className="services-final-cta__actions">
          <Link
            to="/contact"
            className="services-final-cta__button services-final-cta__button--primary"
          >
            Request a Quote
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>

          <Link
            to="/services"
            className="services-final-cta__button services-final-cta__button--secondary"
          >
            Explore Our Services
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

       
      </div>
    </section>
  );
}

export default ServicesFinalCTA;
