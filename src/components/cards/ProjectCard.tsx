type Metric = {
  label: string;
  value: string;
};

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  url?: string;
  metrics: Metric[];
  tech: string[];
};

const ProjectCard = ({ title, category, description, url, metrics, tech }: ProjectCardProps) => (
  <article className="project-card">
    <div className="project-top">
      <p className="eyebrow">{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>

    <div className="project-meta">
      <div className="metrics">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="tech-list">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>

    {url && (
      <a href={url} target="_blank" rel="noreferrer" className="ghost-link">
        Visit project ↗
      </a>
    )}
  </article>
);

export default ProjectCard;

