
import {
  HardHat,
  DraftingCompass,
  Factory,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import "./IndustriesWeServe.css";

const industries = [
  {
    number: "01",
    title: "General Contractors",
    description:
      "Reinforcement detailing and organized bar schedules to support construction planning, drawing coordination, and site execution.",
    icon: HardHat,
    focus: "Construction execution",
  },
  {
    number: "02",
    title: "Structural Consultants",
    description:
      "Detailed reinforcement drawings and technical documentation aligned with structural design information and project requirements.",
    icon: DraftingCompass,
    focus: "Structural documentation",
  },
  {
    number: "03",
    title: "Rebar Fabricators",
    description:
      "Bar bending schedules and reinforcement quantity information to support cutting, bending, and fabrication planning.",
    icon: Factory,
    focus: "Fabrication coordination",
  },
  {
    number: "04",
    title: "Project Management Teams",
    description:
      "Organized detailing information and quantity documentation to support coordination between project stakeholders.",
    icon: ClipboardCheck,
    focus: "Project coordination",
  },
];

function IndustriesWeServe() {
  return (
    <section
      className="industries-serve"
      id="industries-we-serve"
      aria-labelledby="industries-serve-title"
    >
      <div className="industries-serve__container">
        <div className="industries-serve__heading">
          <div className="industries-serve__intro">
            <span className="industries-serve__eyebrow">
              WHO WE SUPPORT
            </span>

            <h2 id="industries-serve-title">
              Supporting the people behind{" "}
              <span>every structure.</span>
            </h2>
          </div>

          <p className="industries-serve__lead">
            Every construction project involves different teams and
            responsibilities. PAMYLKA provides reinforcement detailing
            support designed around project requirements, technical
            documentation, and coordination needs.
          </p>
        </div>

        <div className="industries-serve__grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                className="industries-serve__card"
                key={industry.number}
              >
                <div className="industries-serve__card-top">
                  <span className="industries-serve__number">
                    {industry.number}
                  </span>

                  <span className="industries-serve__icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                </div>

                <h3>{industry.title}</h3>

                <p className="industries-serve__description">
                  {industry.description}
                </p>

                <div className="industries-serve__card-footer">
                  <span>{industry.focus}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>

        <p className="industries-serve__note">
          Our support can be tailored to the scope and documentation
          requirements of each project.
        </p>
      </div>
    </section>
  );
}

export default IndustriesWeServe;
