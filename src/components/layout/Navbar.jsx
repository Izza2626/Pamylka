
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route or hash changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile navigation with the Escape key.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `navbar__link${isActive ? " is-active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `navbar__mobile-link${isActive ? " is-active" : ""}`;

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* BRAND LOGO */}
        <Link
          to="/"
          className="navbar__brand"
          aria-label="PAMYLKA Engineering Services Home"
          onClick={closeMobileMenu}
        >
          <img
            src="/images/brand/pamylka-logo-horizontal.svg"
            alt="PAMYLKA Engineering Services"
            className="navbar__logo"
            width="190"
            height="64"
            fetchPriority="high"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="navbar__desktop-nav"
          aria-label="Primary navigation"
        >
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Services links directly to the Services page. */}
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/industries" className={navLinkClass}>
            Industries
          </NavLink>
        </nav>

        {/* DESKTOP CALL TO ACTION */}
        <Link to="/contact" className="navbar__cta">
          <span>Request a Quote</span>
          <ArrowRight
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="navbar__menu-button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <X size={23} strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu size={23} strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="navbar__mobile-inner">
          <nav
            className="navbar__mobile-nav"
            aria-label="Mobile navigation"
          >
            <NavLink
              to="/"
              end
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>

            {/* No dropdown or individual service links. */}
            <NavLink
              to="/services"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>

            <NavLink
              to="/industries"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Industries
            </NavLink>
          </nav>

          {/* MOBILE CALL TO ACTION */}
          <div className="navbar__mobile-bottom">
            <Link
              to="/contact"
              className="navbar__mobile-cta"
              onClick={closeMobileMenu}
            >
              <span>Request a Quote</span>
              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            <p className="navbar__mobile-location">
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <button
        type="button"
        className={`navbar__overlay${mobileOpen ? " is-visible" : ""}`}
        onClick={closeMobileMenu}
        aria-label="Close navigation menu"
        tabIndex={mobileOpen ? 0 : -1}
        aria-hidden={!mobileOpen}
      />
    </header>
  );
}

export default Navbar;
