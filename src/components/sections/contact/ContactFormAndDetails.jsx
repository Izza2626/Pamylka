
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import "./ContactFormAndDetails.css";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Rebar Detailing",
  "Bar Bending Schedules (BBS)",
  "Rebar Estimation",
  "General Arrangement (GA) Drawings",
  "BIM-Integrated Detailing",
  "Site Support & Reconciliation",
  "Multiple Services / Other",
];

function ContactFormAndDetails() {
  const [formData, setFormData] = useState(initialForm);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formStatus) {
      setFormStatus("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // The form UI is ready, but a submission service
    // must be connected before enquiries can be delivered.
    setFormStatus(
      "The form is not connected to an email service yet. Please configure the submission integration before publishing."
    );
  };

  return (
    <section
      className="contact-details-section"
      id="contact-form"
    >
      <div className="contact-details-section__container">
        {/* Section Heading */}
        <div className="contact-details-section__heading">
          <span className="contact-details-section__eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Tell us about your <span>project.</span>
          </h2>

          <p>
            Share your requirements with us. Whether you need rebar
            detailing, quantity estimation, or technical documentation,
            we welcome the opportunity to understand your project.
          </p>
        </div>

        <div className="contact-details-section__grid">
          {/* Left Column: Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-card__heading">
              <div>
                <span className="contact-form-card__eyebrow">
                  PROJECT ENQUIRY
                </span>

                <h3>Request a Quote</h3>

                <p>
                  Complete the form with your project details.
                </p>
              </div>

              <div className="contact-form-card__icon">
                <Mail size={23} strokeWidth={1.7} />
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-company">
                    Company Name
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-email">
                    Business Email <span>*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-phone">
                    Phone / WhatsApp <span>*</span>
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 ..."
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-service">
                  Service Required <span>*</span>
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">
                  Project Requirements <span>*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Describe your project scope, drawings, quantities, or timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {formStatus && (
                <p
                  className="contact-form__status"
                  role="status"
                >
                  {formStatus}
                </p>
              )}

              <button
                type="submit"
                className="contact-form__submit"
              >
                Submit Enquiry
                <ArrowRight size={18} />
              </button>

              <p className="contact-form__privacy">
                Your project details should be shared securely
                and used only for responding to your enquiry.
              </p>
            </form>
          </div>

          {/* Right Column: Company Details */}
          <aside className="contact-info">
            <div className="contact-info__intro">
              <span className="contact-info__eyebrow">
                COMPANY CONTACT
              </span>

              <h3>
                Let's start a conversation.
              </h3>

              <p>
                Have questions about your project requirements?
                Contact our team to discuss the scope of work and
                the engineering support you need.
              </p>
            </div>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Mail size={21} strokeWidth={1.7} />
                </div>

                <div className="contact-info__content">
                  <span className="contact-info__label">
                    Email Address
                  </span>

                  <span className="contact-info__value">
                    Add official company email
                  </span>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Phone size={21} strokeWidth={1.7} />
                </div>

                <div className="contact-info__content">
                  <span className="contact-info__label">
                    Phone / WhatsApp
                  </span>

                  <span className="contact-info__value">
                    Add official contact number
                  </span>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <MapPin size={21} strokeWidth={1.7} />
                </div>

                <div className="contact-info__content">
                  <span className="contact-info__label">
                    Location
                  </span>

                  <span className="contact-info__value">
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-info__note">
              <div className="contact-info__note-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <h4>Planning a project?</h4>

                <p>
                  Include your project scope and required services
                  so the team can better understand your enquiry.
                </p>
              </div>
            </div>

            <div className="contact-info__bottom">
              <CheckCircle2 size={17} />

              <span>
                Focused on precision, clarity, and technical support.
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactFormAndDetails;
