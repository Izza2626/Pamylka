import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  FileText,
  MessagesSquare,
  PackageCheck,
} from "lucide-react";

import "./HowWeWork.css";

const processSteps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Project Brief",
    description:
      "Understand the project requirements, available drawings and required detailing scope.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Technical Review",
    description:
      "Review the available structural information and identify the technical requirements for detailing.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Detailing & Documentation",
    description:
      "Develop the required reinforcement detailing, schedules and technical documentation.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Coordination",
    description:
      "Address detailing requirements and coordinate information with the relevant project stakeholders.",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Delivery & Support",
    description:
      "Provide organized technical deliverables and support related to the detailing scope.",
  },
];

function HowWeWork() {
  return (
    <section
      className="how-we-work"
      aria-labelledby="how-we-work-title"
    >
      <div className="container">
        <div className="how-we-work__header">
          <div>
            <span className="how-we-work__eyebrow">
              HOW WE WORK
            </span>

            <h2 id="how-we-work-title">
              A Structured Approach to Engineering Detailing
            </h2>
          </div>

          <p className="how-we-work__intro">
            Our workflow is organized around clear technical
            requirements, structured documentation and practical
            coordination throughout the detailing process.
          </p>
        </div>

        <div className="how-we-work__timeline">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;

            return (
              <div
                className={`how-we-work__step ${
                  isLast ? "how-we-work__step--last" : ""
                }`}
                key={step.number}
              >
                <div className="how-we-work__marker">
                  <span className="how-we-work__number">
                    {step.number}
                  </span>

                  <span className="how-we-work__icon">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {!isLast && (
                  <span
                    className="how-we-work__connector"
                    aria-hidden="true"
                  />
                )}

                <div className="how-we-work__content">
                  <span className="how-we-work__step-label">
                    STEP {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="how-we-work__footer">
          <span className="how-we-work__footer-line" />

          <p>
            Clear requirements. Structured detailing.
            Construction-focused documentation.
          </p>

          <span className="how-we-work__footer-line" />
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;