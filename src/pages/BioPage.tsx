import { a } from '../utils/assets';
import CardSection from '../components/CardSection';
import { journeyCards, milestoneCards } from '../data/bio';

function BioPage() {
  return (
    <main>
      <section id="intro">
        <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-chip"><span className="dot" />AI Engineer</span>
            <span className="eyebrow-chip"><span className="dot cyan" />Full-Stack Dev</span>
            <span className="eyebrow-chip"><span className="dot green" />Agentic Systems</span>
          </div>
          <h1>CHAIMA<br />ATTAFI</h1>
          <p className="hero-tagline">
            <strong>I design intelligent systems connecting research, automation, and
            production engineering and build full-stack websites, and production-grade agentic pipelines.</strong>
          </p>
          <div className="hero-actions">
            <a href="#/projects">View Projects</a>
            <a href="#/contact" className="secondary-action">Get In Touch</a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={a('/images/chaima.jpeg')} alt="Chaima Attafi" />
          <div className="hero-portrait-badge">
            <strong>AI Consultant</strong>
            <span>Talan Tunisie</span>
          </div>
        </div>
        </div>
      </section>

      <div id="main">
        <section className="bio-section">
          <div>
            <h2>The Mission</h2>
            <p>
              I build systems that bridge the gap between research and real-world application from
              <strong> full-stack websites</strong> and custom portfolios to <strong>agentic pipelines</strong> and
              GraphRAG architectures. My work spans Generative AI, Multi-Agent Systems, and production engineering,
              always aiming for solutions that are ethical, high-performance, and built to scale.
            </p>
          </div>
        </section>

        <CardSection title="Professional Journey" cards={journeyCards} />
        <CardSection title="Success & Milestones" cards={milestoneCards} />
      </div>
    </main>
  );
}

export default BioPage;
