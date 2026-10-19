import {
  Crosshair,
  ShieldCheck,
  Clock3,
  RefreshCw,
  Handshake,
} from "lucide-react";
import "./CoreValues.css";

const coreValues = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every bar, bend, and schedule must be accurate.",
    icon: Crosshair,
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We communicate openly and deliver honestly.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Responsiveness",
    description:
      "Timely delivery is just as important as technical quality.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Adaptability",
    description:
      "We stay updated with codes, software, and industry needs.",
    icon: RefreshCw,
  },
  {
    number: "05",
    title: "Client Satisfaction",
    description:
      "Your success is the measure of our success.",
    icon: Handshake,
  },
];

function CoreValues() {
  return (
    <section
      className="core-values"
      aria-labelledby="core-values-title"
    >
      <div className="core-values__container">
        <div className="core-values__header">
          <div>
            <span className="core-values__eyebrow">
              WHAT GUIDES US
            </span>

            <h2 id="core-values-title">
              Our Core <span>Values.</span>
            </h2>
          </div>

          <p className="core-values__intro">
            The principles behind every detail, decision, and
            client relationship.
          </p>
        </div>

        <div className="core-values__grid">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <article
                className="core-values__item"
                key={value.number}
              >
                <div className="core-values__top">
                  <span className="core-values__number">
                    {value.number}
                  </span>

                  <span className="core-values__icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <span
                  className="core-values__line"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;