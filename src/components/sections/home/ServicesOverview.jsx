import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Calculator,
  ClipboardList,
  Layers3,
  Ruler,
  Wrench,
} from "lucide-react";

import "./ServicesOverview.css";

const services = [
  {
    number: "01",
    icon: Ruler,
    title: "Rebar Detailing",
    description:
      "Accurate reinforcement detailing prepared to support clear construction documentation and site execution.",
    href: "/services#rebar-detailing",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Bar Bending Schedules",
    description:
      "Structured BBS documentation providing clear reinforcement information for fabrication and construction workflows.",
    href: "/services#bbs",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Rebar Estimation",
    description:
      "Rebar quantity estimation to support material planning, procurement and construction cost control.",
    href: "/services#rebar-estimation",
  },
  {
    number: "04",
    icon: Layers3,
    title: "GA Drawings",
    description:
      "General arrangement drawings developed to communicate structural information clearly across project teams.",
    href: "/services#ga-drawings",
  },
  {
    number: "05",
    icon: Boxes,
    title: "BIM-Integrated Detailing",
    description:
      "BIM-integrated detailing workflows supporting coordinated reinforcement information and improved construction clarity.",
    href: "/services#bim-detailing",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Site Support & Reconciliation",
    description:
      "Technical support for resolving detailing requirements and reconciling reinforcement information during construction.",
    href: "/services#site-support",
  },
];

function ServicesOverview() {
  return (
    <section
      className="services-overview"
      aria-labelledby="services-overview-title"
    >
      <div className="container">
        <div className="services-overview__header">
          <div className="services-overview__heading">
            <span className="services-overview__eyebrow">
              OUR SERVICES
            </span>

            <h2 id="services-overview-title">
              Engineering Detailing Capabilities
            </h2>
          </div>

          <p className="services-overview__intro">
            PAMYLKA provides construction-focused detailing and
            technical documentation services for contractors,
            structural consultants, fabricators and engineering
            teams across Dubai and the UAE.
          </p>
        </div>

        <div className="services-overview__grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="services-overview__card"
                key={service.number}
              >
                <div className="services-overview__card-top">
                  <span className="services-overview__number">
                    {service.number}
                  </span>

                  <span className="services-overview__icon">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="services-overview__card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <Link
                  to={service.href}
                  className="services-overview__link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="services-overview__footer">
          <Link
            to="/services"
            className="services-overview__all-link"
          >
            View All Services
            <ArrowRight
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;