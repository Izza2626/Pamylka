import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__container">
        <div className="final-cta__content">
          <span className="section-eyebrow final-cta__eyebrow">
            DISCUSS YOUR PROJECT
          </span>

          <h2 className="final-cta__title">
            Have a Project That Requires Precise Detailing?
          </h2>

          <p className="final-cta__description">
            Discuss your rebar detailing, BBS, estimation, GA drawing or
            BIM-integrated detailing requirements with PAMYLKA Engineering
            Services.
          </p>

          <div className="final-cta__actions">
            <Link to="/contact" className="final-cta__button final-cta__button--primary">
              Request a Quote
              <ArrowRight size={18} strokeWidth={2} />
            </Link>

            <a
              href="https://wa.me/"
              className="final-cta__button final-cta__button--secondary"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} strokeWidth={2} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="final-cta__technical">
          <div className="final-cta__grid" />

          <div className="final-cta__frame">
            <span className="final-cta__line final-cta__line--one" />
            <span className="final-cta__line final-cta__line--two" />
            <span className="final-cta__line final-cta__line--three" />

            <div className="final-cta__dimension final-cta__dimension--top">
              <span />
              <small>DETAIL</small>
              <span />
            </div>

            <div className="final-cta__dimension final-cta__dimension--side">
              <span />
              <small>PRECISION</small>
              <span />
            </div>

            <div className="final-cta__badge">
              <strong>P</strong>
              <span>ENGINEERING DETAILING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;