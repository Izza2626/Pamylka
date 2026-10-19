
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./IndustriesCTA.css";

function IndustriesCTA() {
  return (
    <section className="industries-cta">
      <div className="industries-cta__container">
        <div className="industries-cta__content">
          <span className="industries-cta__eyebrow">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Have a project in mind?
          </h2>

          <p>
            Let's discuss your reinforcement detailing and engineering
            requirements.
          </p>
        </div>

        <div className="industries-cta__actions">
          <Link
            to="/contact"
            className="industries-cta__button industries-cta__button--primary"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/services"
            className="industries-cta__button industries-cta__button--secondary"
          >
            Explore Services
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustriesCTA;
