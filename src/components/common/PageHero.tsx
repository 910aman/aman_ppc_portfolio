type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const PageHero = ({ eyebrow, title, description, ctaLabel, ctaHref }: PageHeroProps) => (
  <section className="page-hero">
    <div className="container narrow page-hero-content">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="page-hero-grid">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {ctaLabel && ctaHref && (
          <a className="cta-button" href={ctaHref}>
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;

