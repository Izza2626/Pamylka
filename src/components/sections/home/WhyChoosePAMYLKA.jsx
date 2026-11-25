
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Compass,
  FileCheck2,
  Layers3,
  MessageSquareText,
} from "lucide-react";

import "./WhyChoosePAMYLKA.css";

const strengths = [
  {
    number: "01",
    icon: Layers3,
    title: "Construction-Focused",
    description:
      "Detailing is approached with practical construction requirements and clear reinforcement information in mind.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Technical Clarity",
    description:
      "Structured drawings and documentation help project teams interpret reinforcement information with greater clarity.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Coordinated Workflows",
    description:
      "A structured detailing approach supports coordination between contractors, consultants, fabricators and engineering teams.",
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "Responsive Technical Support",
    description:
      "Clear communication helps address detailing requirements and technical coordination throughout the workflow.",
  },
];

function WhyChoosePAMYLKA() {
  return (
    <section
      className="why-choose-pamylka"
      aria-labelledby="why-choose-pamylka-title"
    >
      <div className="container">
        <div className="why-choose-pamylka__grid">

          {/* IMAGE VISUAL */}
          <div className="why-choose-pamylka__visual">

            <div className="why-choose-pamylka__image-frame">

              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85"
                alt="Construction site showing structural engineering and building work"
                className="why-choose-pamylka__image"
                loading="lazy"
              />

              <div className="why-choose-pamylka__image-overlay" />

              {/* IMAGE TOP LABEL */}
              <div className="why-choose-pamylka__image-label">
                <span>ENGINEERING EXCELLENCE</span>
                <span>01 / 04</span>
              </div>

              {/* IMAGE BOTTOM CONTENT */}
              <div className="why-choose-pamylka__image-caption">
                <span className="why-choose-pamylka__caption-line" />

                <p>Precision in every detail.</p>

                <h3>
                  Built Around
                  <br />
                  Construction Needs.
                </h3>
              </div>

              {/* FLOATING TECHNICAL CARD */}
              <div className="why-choose-pamylka__floating-card">
                <span className="why-choose-pamylka__floating-icon">
                  <Check size={17} strokeWidth={2.2} />
                </span>

                <div>
                  <strong>Detailing with precision</strong>
                  <span>Clarity. Coordination. Confidence.</span>
                </div>
              </div>

              {/* DECORATIVE GOLD CORNER */}
              <div
                className="why-choose-pamylka__image-corner"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="why-choose-pamylka__content">

            <span className="why-choose-pamylka__eyebrow">
              WHY PAMYLKA
            </span>

            <h2 id="why-choose-pamylka-title">
              Technical Precision for Construction Workflows
            </h2>

            <p className="why-choose-pamylka__lead">
              PAMYLKA combines structured engineering detailing
              with a construction-focused approach to help
              project teams work with clearer reinforcement
              information.
            </p>

            {/* STRENGTHS */}
            <div className="why-choose-pamylka__strengths">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    className="why-choose-pamylka__strength"
                    key={strength.number}
                  >
                    <span className="why-choose-pamylka__strength-number">
                      {strength.number}
                    </span>

                    <span className="why-choose-pamylka__strength-icon">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="why-choose-pamylka__strength-content">
                      <h3>{strength.title}</h3>

                      <p>{strength.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="why-choose-pamylka__cta"
            >
              Discuss Your Project

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoosePAMYLKA;
