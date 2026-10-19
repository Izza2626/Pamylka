import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Compass,
  DraftingCompass,
} from "lucide-react";

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
          {/* Content */}
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

          {/* Technical visual */}
          <div className="about-preview__visual">
            <div className="about-preview__visual-frame">
              <div
                className="about-preview__technical-grid"
                aria-hidden="true"
              />

              <div
                className="about-preview__drawing"
                aria-hidden="true"
              >
                <div className="about-preview__drawing-header">
                  <span>TECHNICAL DETAIL</span>
                  <span>01 / 01</span>
                </div>

                <div className="about-preview__drawing-main">
                  <div className="about-preview__column">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="about-preview__beam">
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className="about-preview__rebar">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="about-preview__dimension about-preview__dimension--one">
                  4500
                </div>

                <div className="about-preview__dimension about-preview__dimension--two">
                  300
                </div>

                <div className="about-preview__drawing-footer">
                  <span>REINFORCEMENT</span>
                  <span>DETAILING</span>
                </div>
              </div>

              <div className="about-preview__badge">
                <DraftingCompass
                  size={19}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />

                <span>
                  <strong>Technical Approach</strong>
                  <small>Detailing with clarity</small>
                </span>
              </div>
            </div>

            <div className="about-preview__compass">
              <Compass
                size={74}
                strokeWidth={0.8}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;