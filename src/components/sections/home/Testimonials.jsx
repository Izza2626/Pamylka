import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  UserRound,
} from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "PAMYLKA's approach to detailing focuses on accuracy, clear documentation and practical coordination throughout the project.",
    name: "Client Representative",
    role: "Contractor",
    gender: "male",
  },
  {
    quote:
      "The detailing workflow provides a clear technical foundation that supports better coordination between design and construction teams.",
    name: "Project Consultant",
    role: "Structural Consultant",
    gender: "female",
  },
  {
    quote:
      "Well-organized detailing and quantity information can make fabrication and site execution more efficient and easier to coordinate.",
    name: "Technical Manager",
    role: "Fabrication Partner",
    gender: "male",
  },
  {
    quote:
      "A precise and construction-focused approach to reinforcement detailing helps reduce uncertainty and improve project communication.",
    name: "Engineering Coordinator",
    role: "Engineering Firm",
    gender: "female",
  },
];

const AUTO_PLAY_TIME = 5000;

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const nextTestimonial = () => {
    setActiveIndex(
      (current) => (current + 1) % total
    );
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + total) % total
    );
  };

  const selectTestimonial = (index) => {
    setActiveIndex(index);
  };

  /*
   * Automatic testimonial rotation
   */
  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      nextTestimonial();
    }, AUTO_PLAY_TIME);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  /*
   * Keyboard navigation
   */
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousTestimonial();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextTestimonial();
    }
  };

  /*
   * Get previous, active and next testimonial.
   */
  const getAvatarIndexes = () => {
    const previous =
      (activeIndex - 1 + total) % total;

    const next =
      (activeIndex + 1) % total;

    return [
      previous,
      activeIndex,
      next,
    ];
  };

  const visibleIndexes = getAvatarIndexes();

  const activeTestimonial =
    testimonials[activeIndex];

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials__container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="testimonials__header">
          <span className="testimonials__eyebrow">
            CLIENT FEEDBACK
          </span>

          <h2 id="testimonials-title">
            What Our Clients Say
          </h2>

          <p className="testimonials__intro">
            Clear communication, technical precision
            and dependable detailing support for
            construction projects.
          </p>
        </div>

        {/* =========================
            TESTIMONIAL CAROUSEL
        ========================== */}

        <div
          className="testimonials__carousel"
          tabIndex="0"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
          onFocus={() =>
            setIsPaused(true)
          }
          onBlur={() =>
            setIsPaused(false)
          }
          onKeyDown={handleKeyDown}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >

          {/* =========================
              TESTIMONIAL TEXT
          ========================== */}

          <div
            className="testimonials__quote"
            key={activeIndex}
            aria-live="polite"
          >
            <p>
              {activeTestimonial.quote}
            </p>
          </div>

          {/* =========================
              PEOPLE / AVATARS
          ========================== */}

          <div className="testimonials__people">

            {/* Previous */}
            <button
              type="button"
              className="testimonials__arrow testimonials__arrow--left"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>

            {/* Avatars */}
            <div className="testimonials__avatars">
              {visibleIndexes.map(
                (
                  testimonialIndex,
                  position
                ) => {
                  const testimonial =
                    testimonials[
                      testimonialIndex
                    ];

                  const isActive =
                    testimonialIndex ===
                    activeIndex;

                  return (
                    <button
                      key={`${testimonialIndex}-${position}`}
                      type="button"
                      className={`testimonials__avatar-button ${
                        isActive
                          ? "is-active"
                          : ""
                      }`}
                      onClick={() =>
                        selectTestimonial(
                          testimonialIndex
                        )
                      }
                      aria-label={`View testimonial from ${testimonial.name}`}
                      aria-current={
                        isActive
                          ? "true"
                          : undefined
                      }
                    >
                      <span
                        className={`testimonials__avatar ${
                          testimonial.gender ===
                          "female"
                            ? "is-female"
                            : "is-male"
                        }`}
                      >
                        <UserRound
                          size={
                            isActive
                              ? 28
                              : 23
                          }
                          strokeWidth={
                            isActive
                              ? 1.6
                              : 1.5
                          }
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {/* Next */}
            <button
              type="button"
              className="testimonials__arrow testimonials__arrow--right"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* =========================
              ACTIVE PERSON
          ========================== */}

          <div
            className="testimonials__person"
            key={`person-${activeIndex}`}
          >
            <h3>
              {activeTestimonial.name}
            </h3>

            <p>
              {activeTestimonial.role}
            </p>
          </div>

          {/* =========================
              DOT NAVIGATION
          ========================== */}

          <div className="testimonials__dots">
            {testimonials.map(
              (testimonial, index) => (
                <button
                  key={`${testimonial.name}-${index}`}
                  type="button"
                  className={`testimonials__dot ${
                    index === activeIndex
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() =>
                    selectTestimonial(index)
                  }
                  aria-label={`Go to testimonial ${
                    index + 1
                  }`}
                  aria-current={
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;