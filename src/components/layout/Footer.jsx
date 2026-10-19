import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">

          {/* Company */}
          <div className="footer__company">
            <Link to="/" className="footer__brand">
              <span className="footer__brand-mark">P</span>

              <span className="footer__brand-name">
                PAMYLKA
                <small>ENGINEERING SERVICES</small>
              </span>
            </Link>

            <p className="footer__description">
              Dubai-based engineering detailing services focused on
              precision rebar detailing, BBS, estimation, GA drawings
              and BIM-integrated technical documentation.
            </p>

            <Link to="/contact" className="footer__cta">
              Request a Quote
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          {/* Navigation */}
          <div className="footer__column">
            <h3 className="footer__heading">Company</h3>

            <nav className="footer__links">
              <Link to="/about">About PAMYLKA</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h3 className="footer__heading">Services</h3>

            <nav className="footer__links">
              <Link to="/services#rebar-detailing">
                Rebar Detailing
              </Link>

              <Link to="/services#bbs">
                Bar Bending Schedules
              </Link>

              <Link to="/services#rebar-estimation">
                Rebar Estimation
              </Link>

              <Link to="/services#ga-drawings">
                GA Drawings
              </Link>

              <Link to="/services#bim-detailing">
                BIM-Integrated Detailing
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__column footer__contact">
            <h3 className="footer__heading">Contact</h3>

            <div className="footer__contact-list">

              <div className="footer__contact-item">
                <MapPin size={18} strokeWidth={1.7} />

                <span>
                  Dubai, United Arab Emirates
                </span>
              </div>

              <a
                href="mailto:info@pamylka.com"
                className="footer__contact-item"
              >
                <Mail size={18} strokeWidth={1.7} />

                <span>
                  info@pamylka.com
                </span>
              </a>

              <a
                href="tel:+971000000000"
                className="footer__contact-item"
              >
                <Phone size={18} strokeWidth={1.7} />

                <span>
                  +971 XX XXX XXXX
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">

          <p className="footer__copyright">
            © {currentYear} PAMYLKA Engineering Services.
            All rights reserved.
          </p>

          <div className="footer__legal">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;