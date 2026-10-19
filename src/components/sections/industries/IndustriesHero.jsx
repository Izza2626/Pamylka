
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./IndustriesHero.css";

function IndustriesHero() {
  return (
    <section
      className="industries-hero"
      aria-labelledby="industries-hero-title"
    >
      <div className="industries-hero__container">
        <div className="industries-hero__content">
          <span className="industries-hero__eyebrow">
            <span className="industries-hero__eyebrow-line" />
            INDUSTRIES WE SUPPORT
          </span>

          <h1 id="industries-hero-title">
            Engineering support
            <br />
            for <span>every stakeholder.</span>
          </h1>

          <p className="industries-hero__description">
            From contractors to structural consultants and rebar
            fabricators, PAMYLKA provides reinforcement detailing,
            bar bending schedules, and estimation support tailored
            to project requirements.
          </p>

          <div className="industries-hero__actions">
            <Link
              to="/industries#industries-we-serve"
              className="industries-hero__primary-button"
            >
              Explore Industries
              <ArrowDownRight size={18} aria-hidden="true" />
            </Link>

            <Link
              to="/contact"
              className="industries-hero__secondary-button"
            >
              Discuss Your Project
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="industries-hero__footer-note">
            <span className="industries-hero__footer-line" />
            <span>Clarity in detailing. Confidence in construction.</span>
          </div>
        </div>

        <div className="industries-hero__visual">
          <div className="industries-hero__image-frame">
            <img
              className="industries-hero__image"
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
              alt="Construction site showing structural work in progress"
              fetchPriority="high"
            />

            <div className="industries-hero__image-overlay" />

            <div className="industries-hero__image-caption">
              <span className="industries-hero__caption-mark" />
              <div>
                <span className="industries-hero__caption-label">
                  ENGINEERING EXCELLENCE
                </span>
                <p>Supporting better-informed construction.</p>
              </div>
            </div>
          </div>

          

          <div
            className="industries-hero__decor-grid"
            aria-hidden="true"
          />
          <span
            className="industries-hero__decor-dot"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default IndustriesHero;
