import SectionIntro from '../components/common/SectionIntro';
import ServiceCard from '../components/cards/ServiceCard';
import StatHighlight from '../components/common/StatHighlight';
import PageHero from '../components/common/PageHero';
import { coreServices, growthPrograms, premiumServices, signatureProcess } from '../data/content';

const Services = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="One studio for product-grade web development, pipeline growth, and paid media."
      description="I partner with founders and marketing leaders who need airtight execution—no handoffs, just measurable progress."
    />

    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Core build services"
          title="Boutique engineering for modern commerce stacks"
          description="Custom themes, headless builds, and scalable frontend systems across Shopify Plus, SFCC, WordPress, and bespoke React apps."
        />
        <div className="grid-three">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Revenue programs"
          title="Growth sprints that keep your pipeline full"
          description="Three outcome-oriented programs align websites, demand generation, and paid media so conversations and revenue stay predictable."
        />
        <div className="grid-three">
          {growthPrograms.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Solution playbooks"
          title="Embedded squads with clear deliverables and instrumentation"
          description="Each playbook pairs engineering with analytics, QA, and documentation so in-house teams can scale, iterate, and operate post-launch."
        />
        <div className="capability-grid">
          {premiumServices.map((service) => (
            <article key={service.title} className="capability-card">
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Engagement model"
          title="A four-step delivery rhythm inspired by battle-tested studios"
          description="Same polish and clarity you admired, but centered on Shoaib’s processes and communication style."
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
        <div className="stats-row compact">
          <StatHighlight value="2 weeks" label="Average discovery time" />
          <StatHighlight value="95%" label="Milestones hit on schedule" />
          <StatHighlight value="24 hrs" label="Reporting cadence" />
        </div>
      </div>
    </section>
  </>
);

export default Services;

