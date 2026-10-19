
import {
  FileCheck2,
  Calculator,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import "./IndustrySolutions.css";

const solutions = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Clear Reinforcement Documentation",
    description:
      "Structured reinforcement drawings that communicate bar placement, dimensions, and detailing information clearly for project teams.",
    points: [
      "Rebar detailing drawings",
      "Drawing clarity and organization",
      "Project-specific documentation",
    ],
  },
  {
    number: "02",
    icon: Calculator,
    title: "Organized Quantities & Schedules",
    description:
      "Bar bending schedules and reinforcement quantity information to help teams plan fabrication, material requirements, and execution.",
    points: [
      "Bar bending schedules",
      "Steel quantity estimation",
      "Organized bar information",
    ],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Technical Coordination Support",
    description:
      "Detailing support focused on coordinating reinforcement information with project drawings, requirements, and construction workflows.",
    points: [
      "Drawing coordination",
      "BIM-integrated detailing support",
      "Site support and reconciliation",
    ],
  },
];

function IndustrySolutions() {
  return (
    <section
      className="industry-solutions"
      aria-labelledby="industry-solutions-title"
    >
      <div className="industry-solutions__container">
        <div className="industry-solutions__heading">
          <span className="industry-solutions__eyebrow">
            OUR APPROACH
          </span>

          <h2 id="industry-solutions-title">
            Practical solutions for{" "}
            <span>complex project needs.</span>
          </h2>

          <p>
            From reinforcement drawings to quantity documentation,
            our services focus on making technical information clear,
            organized, and useful throughout the construction process.
          </p>
        </div>

        <div className="industry-solutions__grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                className="industry-solutions__card"
                key={solution.number}
              >
                <div className="industry-solutions__card-header">
                  <span className="industry-solutions__number">
                    {solution.number}
                  </span>

                  <span className="industry-solutions__icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                </div>

                <h3>{solution.title}</h3>

                <p className="industry-solutions__description">
                  {solution.description}
                </p>

                <ul className="industry-solutions__list">
                  {solution.points.map((point) => (
                    <li key={point}>
                      <span
                        className="industry-solutions__check"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="industry-solutions__card-bottom">
                  <span>ENGINEERING SUPPORT</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;
