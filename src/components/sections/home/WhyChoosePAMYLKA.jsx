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
          <div className="why-choose-pamylka__visual">
            <div className="why-choose-pamylka__visual-frame">
              <div
                className="why-choose-pamylka__grid-lines"
                aria-hidden="true"
              />

              <div
                className="why-choose-pamylka__drawing"
                aria-hidden="true"
              >
                <div className="why-choose-pamylka__drawing-top">
                  <span>STRUCTURAL DETAIL</span>
                  <span>A-01</span>
                </div>

                <div className="why-choose-pamylka__drawing-area">
                  <div className="why-choose-pamylka__vertical">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="why-choose-pamylka__horizontal">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="why-choose-pamylka__bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="why-choose-pamylka__dimension why-choose-pamylka__dimension--horizontal">
                    6000
                  </div>

                  <div className="why-choose-pamylka__dimension why-choose-pamylka__dimension--vertical">
                    300
                  </div>
                </div>

                <div className="why-choose-pamylka__drawing-bottom">
                  <span>REBAR DETAILING</span>
                  <span>REV. 01</span>
                </div>
              </div>

              <div className="why-choose-pamylka__technical-tag">
                <Check
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span>Detailing with precision</span>
              </div>

              <div
                className="why-choose-pamylka__accent"
                aria-hidden="true"
              />
            </div>
          </div>

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

            <div className="why-choose-pamylka__strengths">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    className="why-choose-pamylka__strength"
                    key={strength.number}
                  >
                    <div className="why-choose-pamylka__strength-number">
                      {strength.number}
                    </div>

                    <div className="why-choose-pamylka__strength-icon">
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="why-choose-pamylka__strength-content">
                      <h3>{strength.title}</h3>
                      <p>{strength.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

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