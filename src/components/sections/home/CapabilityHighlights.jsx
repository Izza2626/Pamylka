import {
  Building2,
  FileCheck2,
  Layers3,
  Ruler,
} from "lucide-react";

import "./CapabilityHighlights.css";

const capabilities = [
  {
    icon: Building2,
    title: "Dubai-Based",
    description:
      "Engineering detailing support for construction projects across Dubai and the UAE.",
  },
  {
    icon: Ruler,
    title: "Precision Detailing",
    description:
      "Clear and structured reinforcement documentation focused on construction requirements.",
  },
  {
    icon: Layers3,
    title: "BIM-Integrated",
    description:
      "Coordinated digital detailing workflows supporting modern construction processes.",
  },
  {
    icon: FileCheck2,
    title: "Construction-Focused",
    description:
      "Practical detailing support for contractors, consultants and fabricators.",
  },
];

function CapabilityHighlights() {
  return (
    <section
      className="capability-highlights"
      aria-labelledby="capability-highlights-title"
    >
      <div className="container">
        <div className="capability-highlights__intro">
          <span className="capability-highlights__eyebrow">
            PAMYLKA ENGINEERING SERVICES
          </span>

        </div>

        <div className="capability-highlights__grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                className="capability-highlights__item"
                key={capability.title}
              >
                <div className="capability-highlights__icon">
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div className="capability-highlights__content">
                  <h3>{capability.title}</h3>

                  <p>{capability.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CapabilityHighlights;