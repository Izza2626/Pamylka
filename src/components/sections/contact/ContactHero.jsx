
import { ArrowDownRight, ArrowUpRight, DraftingCompass } from "lucide-react";
import { Link } from "react-router-dom";
import "./ContactHero.css";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        {/* Left: Hero Content */}
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">
            CONTACT PAMYLKA
          </span>

          <h1>
            Let's Build Something{" "}
            <span>Precise Together.</span>
          </h1>

          <p className="contact-hero__description">
            Have a project in mind? Connect with our team to discuss
            your rebar detailing, bar bending schedules, and
            engineering documentation requirements.
          </p>

          <div className="contact-hero__actions">
            <a
              href="#contact-form"
              className="contact-hero__button contact-hero__button--primary"
            >
              Discuss Your Project
              <ArrowDownRight size={18} />
            </a>

            <Link
              to="/services"
              className="contact-hero__button contact-hero__button--secondary"
            >
              Explore Services
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="contact-hero__note">
            <span className="contact-hero__note-line" />
            <p>
              Technical precision. Clear communication. Reliable support.
            </p>
          </div>
        </div>

        {/* Right: Construction Image */}
        <div className="contact-hero__visual">
          <img
            className="contact-hero__image"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
            alt="Building construction site representing engineering and project coordination"
            loading="eager"
            fetchPriority="high"
          />

          <div
            className="contact-hero__image-overlay"
            aria-hidden="true"
          />

          <div className="contact-hero__image-label">
            <span className="contact-hero__image-icon">
              <DraftingCompass size={21} strokeWidth={1.7} />
            </span>

            <div className="contact-hero__image-text">
              <strong>Engineering Support</strong>
              <span>Built around your project needs</span>
            </div>

            <span className="contact-hero__image-arrow">
              <ArrowUpRight size={19} />
            </span>
          </div>

          <div
            className="contact-hero__image-accent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="contact-hero__bottom-line" aria-hidden="true" />
    </section>
  );
}

export default ContactHero;
