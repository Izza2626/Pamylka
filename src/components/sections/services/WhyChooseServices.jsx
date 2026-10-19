    
import {
  Target,
  ClipboardCheck,
  MessageCircle,
  Layers,
} from "lucide-react";
import "./WhyChooseServices.css";

const benefits = [
  {
    icon: Target,
    title: "Precision in Detailing",
    description: "Accurate detailing for clear construction execution.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Documentation",
    description: "Well-structured drawings and reinforcement schedules.",
  },
  {
    icon: MessageCircle,
    title: "Responsive Coordination",
    description: "Clear communication throughout project requirements.",
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "Detailing, estimation, schedules, and project support.",
  },
];

function WhyChooseServices() {
  return (
    <section className="why-services">
      <div className="why-services__container">
        <span className="why-services__label">WHY PAMYLKA</span>

        <h2>Engineering support you can rely on.</h2>

        <p className="why-services__intro">
          We focus on precision, clear documentation, and practical
          detailing solutions for construction projects.
        </p>

        <div className="why-services__grid">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div className="why-services__item" key={item.title}>
                <Icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseServices;
