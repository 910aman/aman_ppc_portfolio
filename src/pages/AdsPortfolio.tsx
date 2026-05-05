import SectionIntro from '../components/common/SectionIntro';
import ProjectCard from '../components/cards/ProjectCard';
import PageHero from '../components/common/PageHero';
import { adsProjects, signatureProcess } from '../data/content';

const AdsPortfolio = () => (
  <>
    <PageHero
      eyebrow="Google Ads Portfolio"
      title="Paid media built on creative testing, zero-party data, and ruthless optimisation."
      description="Shoaib operates as your in-house performance lead—aligning media, landing pages, and CRM signals for maximum ROAS."
    />

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Performance"
          title="Campaigns engineered for profitable scale"
          description="From keyword research to creative testing, every dollar is tied back to CRM revenue."
        />
        <div className="grid-two">
        {adsProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        </div>
      </div>
    </section>

    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Optimization cadence"
          title="Testing loops that keep ROAS steady"
          description="Media, creative, landing pages, and reporting march through the same four checkpoints used across full-funnel clients."
        />
        <div className="process-steps">
          {signatureProcess.map((step) => (
            <article key={step.step} className="process-card">
              <span>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AdsPortfolio;

