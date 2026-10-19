import "./MissionVision.css";

function MissionVision() {
  return (
    <section
      className="mission-vision"
      aria-labelledby="mission-vision-title"
    >
      <div className="mission-vision__container">
        <div className="mission-vision__heading">
          <span className="mission-vision__eyebrow">
            OUR PURPOSE
          </span>

          <h2 id="mission-vision-title">
            Engineering <span>with purpose.</span>
          </h2>

          <p>
            A clear mission. A forward-looking vision.
          </p>
        </div>

        <div className="mission-vision__content">
          <article className="mission-vision__item">
            <div className="mission-vision__item-top">
              <span className="mission-vision__number">01</span>
              <span className="mission-vision__label">
                OUR MISSION
              </span>
            </div>

            <h3>Precision in every solution.</h3>

            <p>
              To deliver precise, efficient, and dependable rebar
              detailing solutions that help our clients build with
              confidence.
            </p>
          </article>

          <article className="mission-vision__item mission-vision__item--vision">
            <div className="mission-vision__item-top">
              <span className="mission-vision__number">02</span>
              <span className="mission-vision__label">
                OUR VISION
              </span>
            </div>

            <h3>A trusted detailing partner.</h3>

            <p>
              To become a trusted rebar detailing partner, recognized
              for technical accuracy, responsiveness, and a
              client-first approach.
            </p>
          </article>
        </div>

        <div className="mission-vision__accent" aria-hidden="true" />
      </div>
    </section>
  );
}

export default MissionVision;