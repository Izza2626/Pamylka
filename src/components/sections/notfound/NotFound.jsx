
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Home, TriangleAlert } from "lucide-react";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | PAMYLKA Engineering Services</title>
        <meta
          name="description"
          content="The page you are looking for could not be found. Return to PAMYLKA Engineering Services."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="not-found">
        <div className="not-found__content">
          <div className="not-found__icon">
            <TriangleAlert size={30} strokeWidth={1.6} />
          </div>

          <p className="not-found__eyebrow">
            PAMYLKA ENGINEERING SERVICES
          </p>

          <h1>
            4<span>0</span>4
          </h1>

          <h2>Page Not Found</h2>

          <p className="not-found__description">
            Sorry, the page you are looking for doesn't exist,
            has been moved, or the link may be incorrect.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="not-found__button">
              <Home size={18} />
              Back to Home
            </Link>

            <button
              className="not-found__back"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={17} />
              Go Back
            </button>
          </div>

          <div className="not-found__footer">
            Precision. Efficiency. Reliability.
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
