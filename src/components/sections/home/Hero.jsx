import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./Hero.css";

const slides = [
  {
    id: "rebar-detailing",
    eyebrow: "ENGINEERING DETAILING • DUBAI, UAE",
    title: "Precision Rebar Detailing for Better Construction",
    description:
      "Accurate, construction-ready rebar detailing supporting contractors, structural consultants and fabricators across Dubai and the UAE.",
    primaryCta: "Request a Quote",
    primaryLink: "/contact",
    secondaryCta: "Explore Services",
    secondaryLink: "/services",
  },
  {
    id: "bbs-estimation",
    eyebrow: "BBS & REBAR ESTIMATION • UAE",
    title: "Accurate BBS and Rebar Estimation for Construction Projects",
    description:
      "Detailed bar bending schedules and rebar quantity estimation supporting material planning, fabrication and efficient project execution.",
    primaryCta: "Request a Quote",
    primaryLink: "/contact",
    secondaryCta: "View Services",
    secondaryLink: "/services",
  },
  {
    id: "bim-detailing",
    eyebrow: "BIM-INTEGRATED ENGINEERING DETAILING",
    title: "BIM-Integrated Rebar Detailing for Greater Construction Clarity",
    description:
      "Coordinated detailing workflows designed to improve reinforcement documentation, drawing clarity and construction coordination.",
    primaryCta: "Discuss Your Project",
    primaryLink: "/contact",
    secondaryCta: "Explore BIM",
    secondaryLink: "/services#bim-detailing",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  const goToNext = () => {
    setActiveSlide((previous) => (previous + 1) % slides.length);
  };

  const goToPrevious = () => {
    setActiveSlide(
      (previous) =>
        (previous - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(goToNext, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className={`home-hero home-hero--slide-${activeSlide}`}
      aria-label="PAMYLKA Engineering Services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Technical background */}
      <div className="home-hero__background" aria-hidden="true">
        <div className="home-hero__grid" />

        <div className="home-hero__technical-lines">
          <span className="technical-line technical-line--one" />
          <span className="technical-line technical-line--two" />
          <span className="technical-line technical-line--three" />
          <span className="technical-line technical-line--four" />
        </div>

        <div className="home-hero__drawing">
          <div className="drawing-top-line" />
          <div className="drawing-side-line" />

          <div className="drawing-horizontal drawing-horizontal--one" />
          <div className="drawing-horizontal drawing-horizontal--two" />
          <div className="drawing-horizontal drawing-horizontal--three" />

          <div className="drawing-rebars">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="drawing-label drawing-label--vertical">
            REBAR
          </div>

          <div className="drawing-label drawing-label--horizontal">
            DETAILING
          </div>
        </div>
      </div>

      <div className="home-hero__overlay" aria-hidden="true" />

      {/* Main content */}
      <div className="container home-hero__container">
        <div
          className="home-hero__content"
          key={currentSlide.id}
        >
          <div className="home-hero__eyebrow">
            <span className="home-hero__eyebrow-line" />
            {currentSlide.eyebrow}
          </div>

          {activeSlide === 0 ? (
            <h1>{currentSlide.title}</h1>
          ) : (
            <h2>{currentSlide.title}</h2>
          )}

          <p>{currentSlide.description}</p>

          <div className="home-hero__actions">
            <Link
              to={currentSlide.primaryLink}
              className="btn btn-primary"
            >
              {currentSlide.primaryCta}

              <ArrowRight
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            </Link>

            <Link
              to={currentSlide.secondaryLink}
              className="btn home-hero__secondary-button"
            >
              {currentSlide.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="home-hero__controls">
          <button
            type="button"
            className="home-hero__arrow"
            onClick={goToPrevious}
            aria-label="Previous hero slide"
          >
            <ChevronLeft
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

          <div className="home-hero__dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`home-hero__dot ${
                  index === activeSlide ? "is-active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  index === activeSlide ? "true" : undefined
                }
              />
            ))}
          </div>

          <button
            type="button"
            className="home-hero__arrow"
            onClick={goToNext}
            aria-label="Next hero slide"
          >
            <ChevronRight
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;