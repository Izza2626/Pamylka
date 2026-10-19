
import "./WhoWeAre.css";

function WhoWeAre() {
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are__container">
        {/* Left: Company introduction */}
        <div className="who-we-are__content">
          <span className="who-we-are__eyebrow">
            <span className="who-we-are__eyebrow-line" />
            WHO WE ARE
          </span>

          <h2 id="who-we-are-title" className="who-we-are__title">
            Engineering Clarity
            <br />
            for <span>Better Construction.</span>
          </h2>

          <p className="who-we-are__description">
            PAMYLKA Engineering Services is a Dubai-based detailing firm
            dedicated to providing high-quality rebar detailing, bar bending
            schedules, and steel quantity estimation. We support contractors,
            structural consultants, and fabricators with accurate,
            standards-compliant drawings that improve construction efficiency
            and minimize errors.
          </p>

          <p className="who-we-are__description who-we-are__description--secondary">
            With over a year of experience, PAMYLKA is built on a
            forward-thinking mindset, technical rigor, and a drive to support
            modern construction with clarity and precision.
          </p>

          <div className="who-we-are__principles">
            <div className="who-we-are__principle">
              <span className="who-we-are__principle-number">01</span>
              <div>
                <h3>Engineering Accuracy</h3>
                <p>Detail-oriented technical documentation.</p>
              </div>
            </div>

            <div className="who-we-are__principle">
              <span className="who-we-are__principle-number">02</span>
              <div>
                <h3>Construction Clarity</h3>
                <p>Drawings designed to support construction workflows.</p>
              </div>
            </div>

            <div className="who-we-are__principle">
              <span className="who-we-are__principle-number">03</span>
              <div>
                <h3>Technical Adaptability</h3>
                <p>A forward-thinking approach to modern detailing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Decorative engineering drawing */}
        <div className="who-we-are__visual">
          <div className="who-we-are__visual-frame">
            <div className="who-we-are__visual-header">
              <span>ENGINEERING DETAIL</span>
              <span className="who-we-are__status">
                <span />
                TECHNICAL VIEW
              </span>
            </div>

            <div className="who-we-are__drawing">
              <svg
                className="who-we-are__drawing-svg"
                viewBox="0 0 520 430"
                role="img"
                aria-label="Illustrative technical drawing showing a reinforced concrete structural section with reinforcement bars and dimension guides"
              >
                <defs>
                  <linearGradient
                    id="who-concrete"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#16A6A0" stopOpacity=".14" />
                    <stop offset="100%" stopColor="#045C59" stopOpacity=".04" />
                  </linearGradient>

                  <pattern
                    id="who-grid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke="#087F7A"
                      strokeOpacity=".10"
                      strokeWidth=".7"
                    />
                  </pattern>
                </defs>

                {/* Drawing background */}
                <rect width="520" height="430" fill="url(#who-grid)" />

                {/* Construction guide lines */}
                <g
                  fill="none"
                  stroke="#087F7A"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                  opacity=".5"
                >
                  <path d="M80 55 V365" />
                  <path d="M440 55 V365" />
                  <path d="M48 92 H470" />
                  <path d="M48 332 H470" />
                  <path d="M260 36 V385" />
                </g>

                {/* Structural section */}
                <rect
                  x="145"
                  y="84"
                  width="230"
                  height="250"
                  rx="2"
                  fill="url(#who-concrete)"
                  stroke="#087F7A"
                  strokeWidth="1.8"
                />

                <rect
                  x="165"
                  y="104"
                  width="190"
                  height="210"
                  fill="none"
                  stroke="#087F7A"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity=".75"
                />

                {/* Reinforcement representation */}
                <g
                  fill="none"
                  stroke="#045C59"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <path d="M184 119 V299" />
                  <path d="M221 119 V299" />
                  <path d="M258 119 V299" />
                  <path d="M295 119 V299" />
                  <path d="M332 119 V299" />
                  <path d="M184 143 H332" />
                  <path d="M184 180 H332" />
                  <path d="M184 217 H332" />
                  <path d="M184 254 H332" />
                  <path d="M184 291 H332" />
                </g>

                {/* Gold detail markers */}
                <g
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M184 119 H199" />
                  <path d="M317 299 H332" />
                  <path d="M184 291 V276" />
                  <path d="M332 143 V158" />
                </g>

                {/* Dimension lines */}
                <g
                  fill="none"
                  stroke="#087F7A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                >
                  <path d="M145 64 H375" />
                  <path d="M145 57 V71" />
                  <path d="M375 57 V71" />
                  <path d="M395 84 V334" />
                  <path d="M388 84 H402" />
                  <path d="M388 334 H402" />
                  <path d="M145 350 H375" />
                  <path d="M145 344 V356" />
                  <path d="M375 344 V356" />
                </g>

                {/* Measurement labels */}
                <g
                  fill="#045C59"
                  fontSize="10"
                  fontFamily="monospace"
                  letterSpacing="1"
                >
                  <text x="260" y="54" textAnchor="middle">
                    SECTION A–A
                  </text>
                  <text
                    x="413"
                    y="209"
                    textAnchor="middle"
                    transform="rotate(90 413 209)"
                  >
                    DETAIL ELEVATION
                  </text>
                  <text x="260" y="370" textAnchor="middle">
                    STRUCTURAL DETAIL
                  </text>
                </g>

                {/* Reference callouts */}
                <g
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M332 180 L375 154 H430" />
                  <path d="M221 254 L166 278 H100" />
                </g>

                <g fill="#D4AF37">
                  <circle cx="332" cy="180" r="3.5" />
                  <circle cx="221" cy="254" r="3.5" />
                </g>

                <g
                  fill="#526665"
                  fontSize="9"
                  fontFamily="monospace"
                  letterSpacing=".5"
                >
                  <text x="430" y="147" textAnchor="end">
                    REF. 01
                  </text>
                  <text x="100" y="294">
                    REF. 02
                  </text>
                </g>

                {/* Drawing corner marks */}
                <g
                  fill="none"
                  stroke="#16A6A0"
                  strokeWidth="2"
                  opacity=".8"
                >
                  <path d="M24 42 V24 H42" />
                  <path d="M478 24 H496 V42" />
                  <path d="M24 388 V406 H42" />
                  <path d="M478 406 H496 V388" />
                </g>
              </svg>
            </div>

            <div className="who-we-are__visual-footer">
              <div>
                <span className="who-we-are__footer-label">OUR APPROACH</span>
                <strong>Precision in Every Detail</strong>
              </div>

              <span className="who-we-are__footer-mark" aria-hidden="true">
                P.
              </span>
            </div>
          </div>

          <div className="who-we-are__visual-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
 