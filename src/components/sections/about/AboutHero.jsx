import { ArrowRight, Crosshair } from "lucide-react";
import { Link } from "react-router-dom";

import "./AboutHero.css";

function AboutHero() {
  return (
    <section
      className="about-hero"
      aria-labelledby="about-hero-title"
    >
      {/* =====================================================
          BACKGROUND SYSTEM
          ===================================================== */}

      <div className="about-hero__background" aria-hidden="true">
        <div className="about-hero__grid" />

        <div className="about-hero__technical-lines">
          <span className="about-technical-line about-technical-line--one" />
          <span className="about-technical-line about-technical-line--two" />
          <span className="about-technical-line about-technical-line--three" />
          <span className="about-technical-line about-technical-line--four" />
        </div>
      </div>

      <div className="about-hero__overlay" aria-hidden="true" />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="about-hero__container">
        <div className="about-hero__content">

          <h1 id="about-hero-title">
            Engineering Detailing
            <span>Built on Precision.</span>
          </h1>

          <p className="about-hero__description">
            PAMYLKA Engineering Services provides accurate rebar
            detailing, bar bending schedules, and steel quantity
            estimation to support better construction coordination
            across Dubai and the UAE.
          </p>

          <div className="about-hero__actions">

            <Link
              to="/contact"
              className="about-hero__primary-button"
            >
              Discuss Your Project

              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/services"
              className="about-hero__secondary-button"
            >
              Explore Services
            </Link>

          </div>
        </div>

        {/* =====================================================
            ENGINEERING VISUAL
            ===================================================== */}

        <div
          className="about-hero__visual"
          aria-hidden="true"
        >
          <div className="about-hero__drawing">

            <div className="about-hero__drawing-grid" />

            <div className="about-hero__drawing-frame">

              <div className="about-hero__drawing-corner about-hero__drawing-corner--top-left" />
              <div className="about-hero__drawing-corner about-hero__drawing-corner--top-right" />
              <div className="about-hero__drawing-corner about-hero__drawing-corner--bottom-left" />
              <div className="about-hero__drawing-corner about-hero__drawing-corner--bottom-right" />

              <div className="about-hero__structure">

                {/* Main structural beams */}

                <span className="about-hero__beam about-hero__beam--horizontal" />
                <span className="about-hero__beam about-hero__beam--vertical-left" />
                <span className="about-hero__beam about-hero__beam--vertical-right" />

                {/* Horizontal technical lines */}

                <span className="about-hero__technical-line about-hero__technical-line--one" />
                <span className="about-hero__technical-line about-hero__technical-line--two" />
                <span className="about-hero__technical-line about-hero__technical-line--three" />

                {/* Rebar representation */}

                <div className="about-hero__rebar-group">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                {/* Structural nodes */}

                <span className="about-hero__node about-hero__node--one" />
                <span className="about-hero__node about-hero__node--two" />
                <span className="about-hero__node about-hero__node--three" />
                <span className="about-hero__node about-hero__node--four" />

                {/* Dimensions */}

                <div className="about-hero__dimension about-hero__dimension--horizontal">
                  <span />
                  <strong>2400</strong>
                  <span />
                </div>

                <div className="about-hero__dimension about-hero__dimension--vertical">
                  <span />
                  <strong>1200</strong>
                  <span />
                </div>

                {/* Crosshair */}

                <div className="about-hero__crosshair">
                  <Crosshair
                    size={30}
                    strokeWidth={1}
                  />
                </div>

              </div>
            </div>

            {/* Technical labels */}

            <div className="about-hero__label about-hero__label--top">
              <span>TECHNICAL</span>
              <strong>01</strong>
            </div>

            <div className="about-hero__label about-hero__label--bottom">
              <span>PRECISION</span>
              <strong>DETAILING</strong>
            </div>

          </div>

          <div className="about-hero__gold-accent" />
        </div>
      </div>

      {/* =====================================================
          BOTTOM INFORMATION BAR
          ===================================================== */}

      <div className="about-hero__bottom">

        <span>
          DUBAI · UNITED ARAB EMIRATES
        </span>

      </div>
    </section>
  );
}

export default AboutHero;