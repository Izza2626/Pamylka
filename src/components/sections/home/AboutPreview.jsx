
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import "./AboutPreview.css";

const approachPoints = [
  "Construction-focused detailing",
  "Clear reinforcement documentation",
  "Structured technical workflows",
];

function AboutPreview() {
  return (
    <section
      className="about-preview"
      aria-labelledby="about-preview-title"
    >
      <div className="container">
        <div className="about-preview__grid">

          {/* LEFT SIDE — CONTENT */}
          <div className="about-preview__content">
            <span className="about-preview__eyebrow">
              ABOUT PAMYLKA
            </span>

            <h2 id="about-preview-title">
              Engineering Detailing Built Around Precision
            </h2>

            <p className="about-preview__lead">
              PAMYLKA Engineering Services is a Dubai-based
              engineering detailing firm providing technical
              support for reinforcement detailing and
              construction documentation.
            </p>

            <p>
              We support contractors, structural consultants
              and fabricators with rebar detailing, bar bending
              schedules, rebar estimation, GA drawings and
              BIM-integrated detailing workflows.
            </p>

            <div className="about-preview__points">
              {approachPoints.map((point) => (
                <div
                  className="about-preview__point"
                  key={point}
                >
                  <span className="about-preview__check">
                    <Check
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="about-preview__link"
            >
              About PAMYLKA

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* RIGHT SIDE — IMAGE COLLAGE */}
          <div className="about-preview__visual">
            <div className="about-preview__collage">

              {/* IMAGE 1 — LEFT */}
              <div className="about-preview__image about-preview__image--one">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85"
                  alt="Modern building construction project"
                  loading="lazy"
                />
              </div>

              {/* IMAGE 2 — CENTER */}
              <div className="about-preview__image about-preview__image--two">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85"
                  alt="Construction professionals working on site"
                  loading="lazy"
                />
              </div>

              {/* IMAGE 3 — RIGHT */}
              <div className="about-preview__image about-preview__image--three">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85"
                  alt="Architectural engineering drawings"
                  loading="lazy"
                />
              </div>

              {/* BUILT ON PRECISION LABEL */}
              <div className="about-preview__label">
                <span className="about-preview__label-dot" />

                <div className="about-preview__label-content">
                  <strong>Built on Precision</strong>
                  <span>Engineering with clarity</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
