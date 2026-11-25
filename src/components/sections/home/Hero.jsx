
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Boxes,
  FileSpreadsheet,
  DraftingCompass,
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
    visualLabel: "REBAR DETAILING",
    visualType: "rebar",
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
    visualLabel: "BBS & ESTIMATION",
    visualType: "bbs",
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
    visualLabel: "BIM DETAILING",
    visualType: "bim",
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&q=85";

function HeroVisual({ currentSlide }) {
  return (
    <div className="hero-visual" aria-hidden="true">

      {/* Decorative orbit */}
      <div className="hero-visual__orbit">
        <span className="hero-visual__orbit-dot" />
      </div>

      {/* Secondary orbit */}
      <div className="hero-visual__small-orbit" />

      {/* Background glow */}
      <div className="hero-visual__glow" />

      {/* Main circular image */}
      <div
        className={`hero-visual__main hero-visual__main--${currentSlide.visualType}`}
      >
        <div className="hero-visual__main-inner">

          <img
            className="hero-visual__image"
            src={HERO_IMAGE}
            alt=""
            loading="eager"
            fetchPriority="high"
          />

          <div className="hero-visual__image-overlay" />

          <div className="hero-visual__main-caption">
            <span className="caption-indicator" />
            {currentSlide.visualLabel}
          </div>

        </div>
      </div>

      {/* Floating structural drawing card */}
      <div className="hero-visual__floating-card hero-visual__floating-card--top">
        <div className="floating-card__icon">
          <DraftingCompass size={23} strokeWidth={1.7} />
        </div>

        <span>
          Structural
          <br />
          Drawings
        </span>
      </div>

      {/* Floating BBS card */}
      <div className="hero-visual__floating-card hero-visual__floating-card--left">
        <div className="floating-card__icon">
          <FileSpreadsheet size={23} strokeWidth={1.7} />
        </div>

        <span>
          Bar Bending
          <br />
          Schedule
        </span>
      </div>

      {/* Floating BIM card */}
      <div className="hero-visual__floating-card hero-visual__floating-card--bottom">
        <div className="floating-card__icon">
          <Boxes size={23} strokeWidth={1.7} />
        </div>

        <span>
          BIM Model
          <br />
          Coordination
        </span>
      </div>

    </div>
  );
}

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

      {/* Background */}
      <div className="home-hero__background" aria-hidden="true">
        <div className="home-hero__grid" />
        <div className="home-hero__background-glow" />
      </div>

      {/* Main container */}
      <div className="container home-hero__container">

        {/* Left content */}
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

          {/* CTA buttons */}
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

        {/* Right engineering visual */}
        <HeroVisual currentSlide={currentSlide} />

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
