
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ServicesOverview.css";

const services = [
  {
    number: "01",
    title: "Rebar Detailing",
    description:
      "Precise reinforcement drawings for clear, efficient construction.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    slug: "/services/rebar-detailing",
  },
  {
    number: "02",
    title: "Bar Bending Schedules",
    description:
      "Structured reinforcement schedules for fabrication and site execution.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    slug: "/services/bar-bending-schedules",
  },
  {
    number: "03",
    title: "Rebar Estimation",
    description:
      "Reinforcement quantity assessment to support material planning.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    slug: "/services/rebar-estimation",
  },
  {
    number: "04",
    title: "GA Drawings",
    description:
      "Clear general arrangement drawings for coordinated project delivery.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
    slug: "/services/ga-drawings",
  },
  {
    number: "05",
    title: "BIM-Integrated Detailing",
    description:
      "Digitally coordinated detailing to support construction workflows.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85",
    slug: "/services/bim-integrated-detailing",
  },
  {
    number: "06",
    title: "Site Support & Reconciliation",
    description:
      "Detailing support aligned with site requirements and quantities.",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=900&q=85",
    slug: "/services/site-support-reconciliation",
  },
];

function ServicesOverview() {
  const scrollRef = useRef(null);

  const scrollCards = (direction) => {
    if (!scrollRef.current) return;

    const firstCard = scrollRef.current.querySelector(
      ".service-overview__card"
    );

    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 360;

    scrollRef.current.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="service-overview"
      id="services-overview"
      aria-labelledby="service-overview-title"
    >
      <div className="service-overview__container">
        <div className="service-overview__header">
          <div className="service-overview__intro">
            <span className="service-overview__eyebrow">
              WHAT WE DO
            </span>

            <h2 id="service-overview-title">
              Engineering clarity,
              <br />
              at every stage.
            </h2>

            <p>
              Explore our technical detailing services designed to
              translate structural requirements into clear,
              coordinated construction information.
            </p>
          </div>

          <div className="service-overview__controls">
            <span className="service-overview__count">
              <strong>06</strong> SERVICES
            </span>

            <div className="service-overview__arrows">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                aria-label="Scroll to previous services"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => scrollCards(1)}
                aria-label="Scroll to next services"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="service-overview__track"
          ref={scrollRef}
          aria-label="Our engineering services"
        >
          {services.map((service) => (
            <Link
              to={service.slug}
              className="service-overview__card"
              key={service.number}
              aria-label={`Explore ${service.title}`}
            >
              <div className="service-overview__image-wrap">
                <img
                  src={service.image}
                  alt=""
                  className="service-overview__image"
                  loading="lazy"
                />

                <span className="service-overview__number">
                  {service.number}
                </span>

                <span className="service-overview__card-arrow">
                  <ArrowUpRight size={21} />
                </span>
              </div>

              <div className="service-overview__card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <span className="service-overview__link-text">
                  Explore service
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="service-overview__footer">
          <span>SCROLL TO EXPLORE</span>
          <div className="service-overview__scroll-line">
            <span />
          </div>
          <span>01 — 06</span>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
