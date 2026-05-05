import ContactForm from '../components/forms/ContactForm';
import StatHighlight from '../components/common/StatHighlight';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import { signatureProcess } from '../data/content';

const Contact = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Tell me about the product, the pipeline, and the KPIs you need to hit."
      description="Replies land within one business day. We will audit your current assets, map the roadmap, and kickoff with a documented plan."
    />

    <section className="section gradient-panel">
      <div className="container contact-grid">
        <div>
          <h3>Typical response time</h3>
          <p>I reply within 24 hours, usually sooner. Introduce the problem, target market, and timeline.</p>
          <div className="stats-row compact">
            <StatHighlight value="24 hrs" label="Response time" />
            <StatHighlight value="30 min" label="Avg. intro call" />
            <StatHighlight value="4-6 wks" label="Implementation" />
          </div>
          <div className="contact-meta">
            <a href="mailto:hello@shoaibstudio.com">hello@shoaibstudio.com</a>
            <a href="tel:+923008559911">+92 300 855 9911</a>
            <p>Lahore · Working with teams worldwide</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>

    <section className="section section--contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Project kickoff"
          title="What happens after you hit send"
          description="Discovery, planning, build, and optimization run on a tight cadence so nothing lingers in limbo."
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

export default Contact;

