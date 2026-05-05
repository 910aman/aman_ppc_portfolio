import { Link } from 'react-router-dom';
import SectionIntro from '../components/common/SectionIntro';
import StatHighlight from '../components/common/StatHighlight';
import ServiceCard from '../components/cards/ServiceCard';
import ProjectCard from '../components/cards/ProjectCard';
import {
  heroHighlights,
  coreServices,
  growthPrograms,
  growthStats,
  testimonials,
  webProjects,
  skillColumns,
  storyboardSteps,
} from '../data/content';

const Home = () => (
  <>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Fractional growth partner · End-to-end delivery</p>
          <h1>
            I build high-converting web experiences
            <span> and scalable demand engines.</span>
          </h1>
          <p className="lead">
            Muhammad Shoaib blends full-stack web development with lead generation and paid media to help service
            businesses win consistent revenue.
          </p>
          <div className="hero-actions">
            <Link className="cta-button" to="/contact">
              Book a call
            </Link>
            <Link className="ghost-link" to="/services">
              Explore services →
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          {heroHighlights.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
      <div className="container stats-row">
        <StatHighlight value="50+" label="Sites & funnels launched" />
        <StatHighlight value="180%" label="Average pipeline lift" />
        <StatHighlight value="12" label="Countries served" />
        <StatHighlight value="5 days" label="Avg. kickoff time" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title="Full-stack execution across the entire revenue engine"
          description="From research to launch to optimisation—one partner stays close to your KPIs and owns the delivery."
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
          eyebrow="Growth Focus"
          title="Balanced execution across acquisition pillars"
          description="Borrowed from Shoaib’s original portfolio, this breakdown shows how each engagement keeps SEO, paid media, and product in sync."
        />
        <div className="progress-grid">
          {growthStats.map((stat) => (
            <article key={stat.label} className="progress-card">
              <div className="progress-value">{stat.value}</div>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
        <div className="grid-three growth-program-grid">
          {growthPrograms.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>

    <section className="section section--contrast">
      <div className="container two-column">
        <div>
          <SectionIntro
            eyebrow="Capability"
            title="Web engineering meets growth operations"
            description="Shoaib works as an embedded partner—translating positioning into interfaces, automations, and acquisition loops."
          />
        </div>
        <div className="skill-grid">
          {skillColumns.map((column, index) => (
            <ul key={index}>
              {column.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Featured Web Builds"
          title="Designed for clarity, speed, and measurable conversion"
          description="Every engagement aligns design, engineering, and analytics so marketing can scale without tech debt."
        />
        <div className="grid-three">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>

    <section className="section testimonials">
      <div className="container two-column">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.author}>
            <p>{testimonial.quote}</p>
            <footer>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>

    <section className="section gradient-panel">
      <div className="container">
        <SectionIntro
          eyebrow="Storyboard"
          title="Work starts immediately with a clear game plan"
          description="Inspired by the SkillsRoom site, we outline each phase so stakeholders stay aligned before and after launch."
        />
        <div className="storyboard-grid">
          {storyboardSteps.map((step) => (
            <article key={step.title} className="storyboard-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;

