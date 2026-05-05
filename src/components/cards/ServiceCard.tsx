type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
};

const ServiceCard = ({ icon, title, description, highlights }: ServiceCardProps) => (
  <article className="service-card">
    <div className="service-icon">{icon}</div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <ul>
      {highlights.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);

export default ServiceCard;

