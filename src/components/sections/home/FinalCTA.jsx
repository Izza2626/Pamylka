
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__container">

        {/* LEFT CONTENT */}
        <div className="final-cta__content">
          <span className="section-eyebrow final-cta__eyebrow">
            DISCUSS YOUR PROJECT
          </span>

          <h2 className="final-cta__title">
            Have a Project That Requires Precise Detailing?
          </h2>

          <p className="final-cta__description">
            From rebar detailing and bar bending schedules to estimation,
            GA drawings, and BIM-integrated solutions, PAMYLKA supports
            your construction projects with technical precision and clarity.
          </p>

          <div className="final-cta__actions">
            <Link to="/contact" className="final-cta__button">
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta__whatsapp"
            >
              <MessageCircle size={19} />
              Let's Talk
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="final-cta__visual">
          <div className="final-cta__image-frame">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85"
              alt="Modern structural engineering and construction project"
              className="final-cta__image"
              loading="lazy"
            />

            <div className="final-cta__image-overlay" />

            <div className="final-cta__image-top">
              <span>ENGINEERING SOLUTIONS</span>
              <span>UAE</span>
            </div>

            <div className="final-cta__image-caption">
              <span>PRECISION IN EVERY PROJECT</span>
              <h3>
                Engineering
                <br />
                That Builds Confidence.
              </h3>
            </div>

            {/* FLOATING INFORMATION CARD */}
            <div className="final-cta__info-card">
              <div className="final-cta__info-icon">
                <MessageCircle size={19} />
              </div>

              <div className="final-cta__info-content">
                <strong>Let's discuss your project</strong>
                <span>
                  Our team is ready to hear your requirements.
                </span>
              </div>

              <ArrowRight
                size={19}
                className="final-cta__info-arrow"
              />
            </div>

            <div
              className="final-cta__corner"
              aria-hidden="true"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;
