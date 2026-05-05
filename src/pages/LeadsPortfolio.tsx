import SectionIntro from '../components/common/SectionIntro';
import ProjectCard from '../components/cards/ProjectCard';
import PageHero from '../components/common/PageHero';
import { leadProjects, signatureProcess } from '../data/content';

const LeadsPortfolio = () => (
  <>
    <PageHero
      eyebrow="Leads Generation"
      title="Acquisition systems that warm up intent and keep your pipeline full."
      description="From ICP research to messaging to automation, every campaign ships with dashboards that connect spend to revenue."
    />

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Pipelines"
          title="Outbound and inbound programs with crystal-clear attribution"
          description="Sprints mix landing pages, nurturing, and sales operations so your team can follow up faster."
        />
        <div className="grid-two">
        {leadProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        </div>
      </div>
    </section>

    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Engagement rhythm"
          title="Every lead program ships with transparent checkpoints"
          description="We keep research, build, launch, and optimization loops close to your revenue team so follow-ups never stall."
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

export default LeadsPortfolio;

