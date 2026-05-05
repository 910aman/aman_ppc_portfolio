import SectionIntro from '../components/common/SectionIntro';
import ProjectCard from '../components/cards/ProjectCard';
import PageHero from '../components/common/PageHero';
import { spotlightProjects, webProjects } from '../data/content';

const WebPortfolio = () => (
  <>
    <PageHero
      eyebrow="Web Development"
      title="High-performance web platforms that pair brand storytelling with measurable UX."
      description="Shoaib leads design, engineering, and QA to deliver React, Shopify, and WordPress experiences that are easy to iterate and scale."
    />

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Spotlight"
          title="Large-scale builds & migrations"
          description="Inspired by the tonal palette of Shoaib’s reference sites, these hero projects prove he can shepherd complex platforms end to end."
        />
        <div className="spotlight-grid">
          {spotlightProjects.map((project) => (
            <article key={project.title} className="spotlight-card">
              <div className="spotlight-top">
                <div>
                  <p className="eyebrow">{project.badge}</p>
                  <h3>{project.title}</h3>
                </div>
                <span>{project.domain}</span>
              </div>
              <p>{project.description}</p>
              <div className="spotlight-highlights">
                {project.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="tech-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Case studies"
          title="Selected web engagements"
          description="Every build pairs handcrafted UI with instrumentation so ops teams can measure performance."
        />
        <div className="grid-three">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WebPortfolio;

