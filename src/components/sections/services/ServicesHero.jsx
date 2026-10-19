
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ServicesHero.css";

const services = [
  {
    number: "01",
    title: "Rebar Detailing",
    short: "REINFORCEMENT DRAWINGS",
    headline: "Every detail shapes what we build.",
    description:
      "Precise reinforcement drawings that translate structural intent into clear, construction-ready information.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
    slug: "/services/rebar-detailing",
  },
  {
    number: "02",
    title: "Bar Bending Schedules",
    short: "SHAPE. SIZE. QUANTITY.",
    headline: "Every bend. Clearly defined.",
    description:
      "Structured bar bending schedules that help teams understand reinforcement shapes, dimensions and quantities.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85",
    slug: "/services/bar-bending-schedules",
  },
  {
    number: "03",
    title: "Rebar Estimation",
    short: "MATERIAL QUANTIFICATION",
    headline: "Clarity begins with quantity.",
    description:
      "Reinforcement quantity estimation to support material planning, cost awareness and informed project decisions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    slug: "/services/rebar-estimation",
  },
  {
    number: "04",
    title: "GA Drawings",
    short: "STRUCTURAL LAYOUTS",
    headline: "See the structure more clearly.",
    description:
      "General arrangement drawings that communicate structural layouts and essential project information.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=85",
    slug: "/services/ga-drawings",
  },
  {
    number: "05",
    title: "BIM-Integrated Detailing",
    short: "CONNECTED DIGITAL DETAILING",
    headline: "A clearer view in three dimensions.",
    description:
      "BIM-integrated detailing that supports coordinated reinforcement information and digital construction workflows.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    slug: "/services/bim-integrated-detailing",
  },
  {
    number: "06",
    title: "Site Support & Reconciliation",
    short: "DRAWINGS MEET SITE REALITY",
    headline: "Connecting detail to delivery.",
    description:
      "Technical support and reinforcement reconciliation to help address detailing requirements during construction.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85",
    slug: "/services/site-support-reconciliation",
  },
];

function ServicesHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const selectService = (index) => {
    setActiveIndex((index + services.length) % services.length);
  };

  return (
    <section className="service-stage">
      <div
        className="service-stage__image"
        key={activeService.number}
        style={{ backgroundImage: `url("${activeService.image}")` }}
        aria-hidden="true"
      />

      <div className="service-stage__shade" aria-hidden="true" />
      <div className="service-stage__grid" aria-hidden="true" />

      <div className="service-stage__frame">
        <header className="service-stage__top">
          <Link to="/" className="service-stage__brand">
            <span className="service-stage__brand-icon">P.</span>
            <span>
              <strong>PAMYLKA</strong>
              <small>ENGINEERING SERVICES</small>
            </span>
          </Link>

          <span className="service-stage__location">
            <span />
            DUBAI, UNITED ARAB EMIRATES
          </span>

          <span className="service-stage__index">
            SERVICES <b> / 01—06</b>
          </span>
        </header>

        <div className="service-stage__body">
          <div className="service-stage__copy" key={activeService.number}>
            <div className="service-stage__eyebrow">
              <span />
              {activeService.short}
            </div>

            <p className="service-stage__overline">
              ENGINEERING SERVICES / {activeService.number}
            </p>

            <h1>{activeService.headline}</h1>

            <p className="service-stage__description">
              {activeService.description}
            </p>

            <div className="service-stage__actions">
              <Link
                to={activeService.slug}
                className="service-stage__cta"
              >
                <span>EXPLORE SERVICE</span>
                <span className="service-stage__cta-icon">
                  <ArrowUpRight size={19} />
                </span>
              </Link>

              <a
                href="#services-overview"
                className="service-stage__scroll"
              >
                <span>SCROLL TO DISCOVER</span>
                <ArrowDownRight size={16} />
              </a>
            </div>
          </div>

          <aside className="service-stage__selector">
            <div className="service-stage__selector-heading">
              <span>OUR CAPABILITIES</span>
              <span>06 / SERVICES</span>
            </div>

            <div className="service-stage__list">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    type="button"
                    key={service.number}
                    className={`service-stage__item ${
                      isActive ? "is-active" : ""
                    }`}
                    onClick={() => selectService(index)}
                    aria-pressed={isActive}
                  >
                    <span className="service-stage__item-number">
                      {service.number}
                    </span>

                    <span className="service-stage__item-title">
                      {service.title}
                    </span>

                    <span className="service-stage__item-arrow">
                      <MoveUpRight size={17} />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="service-stage__selector-footer">
              <span>PRECISION IN EVERY DETAIL</span>
              <div>
                <button
                  type="button"
                  onClick={() => selectService(activeIndex - 1)}
                  aria-label="Previous service"
                >
                  <ArrowLeft size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => selectService(activeIndex + 1)}
                  aria-label="Next service"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </aside>
        </div>

        
      </div>
    </section>
  );
}

export default ServicesHero;
