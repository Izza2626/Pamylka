
import { Target, Compass, ArrowUpRight } from "lucide-react";
import "./TheMindBehind.css";

function TheMindBehind() {
  return (
    <section
      className="mind-behind"
      aria-labelledby="mind-behind-title"
    >
      <div className="mind-behind__container">
        <div className="mind-behind__visual">
          <div className="mind-behind__visual-card">
            <div className="mind-behind__visual-top">
              <span>THE THINKING BEHIND THE DETAIL</span>
              <span className="mind-behind__visual-index">P / 03</span>
            </div>

            <div className="mind-behind__diagram">
              <div className="mind-behind__circle mind-behind__circle--outer" />
              <div className="mind-behind__circle mind-behind__circle--middle" />
              <div className="mind-behind__circle mind-behind__circle--inner" />

              <div className="mind-behind__cross mind-behind__cross--horizontal" />
              <div className="mind-behind__cross mind-behind__cross--vertical" />

              <div className="mind-behind__center">
                <span className="mind-behind__center-mark">P</span>
                <span className="mind-behind__center-label">
                  ENGINEERING
                </span>
              </div>

              <span className="mind-behind__diagram-label mind-behind__diagram-label--top">
                PRECISION
              </span>

              <span className="mind-behind__diagram-label mind-behind__diagram-label--right">
                CLARITY
              </span>

              <span className="mind-behind__diagram-label mind-behind__diagram-label--bottom">
                PURPOSE
              </span>

              <span className="mind-behind__diagram-label mind-behind__diagram-label--left">
                DETAIL
              </span>

              <span className="mind-behind__diagram-dot mind-behind__diagram-dot--one" />
              <span className="mind-behind__diagram-dot mind-behind__diagram-dot--two" />
              <span className="mind-behind__diagram-dot mind-behind__diagram-dot--three" />
            </div>

            <div className="mind-behind__visual-bottom">
              <span>BUILT ON TECHNICAL RIGOR</span>
              <span className="mind-behind__gold-line" />
            </div>
          </div>

          <div
            className="mind-behind__accent"
            aria-hidden="true"
          />
        </div>

        <div className="mind-behind__content">
          <span className="mind-behind__eyebrow">
            <span />
            THE MIND BEHIND PAMYLKA
          </span>

          <h2 id="mind-behind-title" className="mind-behind__title">
            A Vision Driven
            <br />
            by <span>Precision.</span>
          </h2>

          <p className="mind-behind__intro">
            Every detail begins with a clear understanding of the
            challenge it needs to solve.
          </p>

          <p className="mind-behind__description">
            Founded by Mohamed Yusuf, PAMYLKA was born from years of
            personal exposure to civil engineering, industry insights,
            and a clear vision to solve recurring challenges in
            reinforcement detailing.
          </p>

          <p className="mind-behind__description">
            With a sharp eye for detail and a deep understanding of
            construction workflows, Mohamed leads the company with a
            commitment to engineering accuracy, service excellence,
            and digital adaptability.
          </p>

          <div className="mind-behind__focus">
            <div className="mind-behind__focus-icon">
              <Target size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h3>Accuracy in Every Detail</h3>
              <p>
                A commitment to precise, dependable reinforcement
                detailing.
              </p>
            </div>

            <ArrowUpRight
              className="mind-behind__focus-arrow"
              size={19}
              aria-hidden="true"
            />
          </div>

          <div className="mind-behind__focus">
            <div className="mind-behind__focus-icon">
              <Compass size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h3>A Forward-Thinking Approach</h3>
              <p>
                Adapting to evolving construction workflows and
                digital practices.
              </p>
            </div>

            <ArrowUpRight
              className="mind-behind__focus-arrow"
              size={19}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheMindBehind;
