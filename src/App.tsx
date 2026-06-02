import { ReactNode, MouseEvent, useEffect, useState } from 'react';

type PageKey = 'bio' | 'projects' | 'resume' | 'certificates';

type NavItem = {
  key: PageKey;
  label: string;
  path: string;
};

type SocialLink = {
  href: string;
  className: string;
  label: string;
};

type MilestoneCard = {
  border?: string;
  image: string;
  date: string;
  title: string;
  body: string;
};

type Project = {
  title: string;
  body: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
};

type ProjectGroup = {
  group: string;
  logo: string;
  items: Project[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

type Certificate = {
  icon?: string;
  image?: string;
  issuer: string;
  title: string;
  points: string[];
  date?: string;
  href?: string;
  featured?: boolean;
  note?: string;
  footerImage?: string;
};

type CertificateSection = {
  section: string;
  accent: string;
  items: Certificate[];
};

const navItems: NavItem[] = [
  { key: 'bio', label: 'Bio', path: '/' },
  { key: 'projects', label: 'Projects', path: '/projects' },
  { key: 'resume', label: 'Resume', path: '/resume' },
  { key: 'certificates', label: 'Certificates', path: '/certificates' },
];

const socialLinks: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/chaima-attafi-914a56208', className: 'fa-brands fa-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/chayma-attafi', className: 'fa-brands fa-github', label: 'GitHub' },
];

const journeyCards: MilestoneCard[] = [
  {
    border: '#10b981',
    image: '/images/succ/work.jpeg',
    date: 'Current',
    title: 'AI Engineer Consultant @ Talan',
    body: 'Architecting GraphRAG and multi-agent systems for code modernization.',
  },
  {
    border: '#8b5cf6',
    image: '/images/succ/team.jpeg',
    date: 'December 2025',
    title: 'Innovation Team',
    body: 'Special moments with the team Innovation, celebrating new year 2026.',
  },
  {
    border: '#fbbf24',
    image: '/images/succ/graduation.jpeg',
    date: '24 September 2025',
    title: 'Engineering Degree',
    body: 'Specializing in Software Engineering and AI at ESPRIT.',
  },
  {
    image: '/images/succ/bootcamp2025.jpeg',
    date: 'April 2025',
    title: 'Bootcamp 2025 - Talan Tunisie',
    body: 'Worked with different teams, learned from experts, gained new skills, and integrated into a dynamic and innovative environment.',
  },
  {
    border: '#fbbf24',
    image: '/images/succ/GDSC.jpeg',
    date: 'January 2024',
    title: 'Leading workshop on Symfony at GDSC',
    body: 'Fostering technical growth as GDSC Lead and AI community organizer at ESPRIT.',
  },
];

const milestoneCards: MilestoneCard[] = [
  {
    image: '/images/succ/blid2025.jpeg',
    date: 'September 2025',
    title: 'BLID 2025',
    body: 'Joined the Arab-German Summer School on Biomedical Imaging with Deep Learning, covering segmentation, uncertainty estimation, and vision transformers.',
  },
  {
    image: '/images/succ/grandpublique.jpeg',
    date: 'July 2024',
    title: 'Audience Award',
    body: 'Recognized for the research paper "Mirror of Life", focused on gene editing and Digital Twin technology for biotechnology solutions.',
  },
  {
    image: '/images/succ/aiAcademy.jpeg',
    date: 'June 2024',
    title: 'AI for Predictive Maintenance Training',
    body: 'First place in the AI for Predictive Maintenance training program with NVIDIA and ESPRIT.',
  },
  {
    image: '/images/succ/PFA.jpeg',
    date: 'February 2024',
    title: 'PI project celebrating Co&Co',
    body: 'Development of a carpooling and roommate application for ESPRIT students.',
  },
  {
    image: '/images/succ/AIHack2022.png',
    date: 'August 2022',
    title: 'AI Hack Tunisia',
    body: 'Organized one of the largest hackathons in the region.',
  },
];

const projects: ProjectGroup[] = [
  {
    group: 'Industrial AI @ Talan',
    logo: '/images/talan.png',
    items: [
      {
        title: 'CobolNext - Code Modernization Framework',
        body: 'Automated migration of legacy COBOL systems to modern full-stack architectures. Developed a multi-agent pipeline for dependency analysis and a GraphRAG chat assistant for system exploration.',
        tags: ['Semantic Kernel', 'Neo4j', 'GraphRAG', 'FastAPI'],
      },
      {
        title: 'SciAgent - Multi-Agent Scientific Research Assistant',
        body: 'A suite of agentic tools including Science Watch, AI Writer with citation and LaTeX support, and a presentation generator using research papers.',
        tags: ['CrewAI', 'LangGraph', 'Crawl4ai', 'AgenticRAG'],
        href: 'https://www.linkedin.com/posts/chaima-attafi_fact-latex-activity-7379238665937416192-8vMK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTWOqABJAFPxXfykhqK1BxG1Gp76wrlYwg',
        linkLabel: 'View Demo',
      },
      {
        title: 'Mirror of Life',
        body: 'Winner of the Audience Award. Leveraged ML algorithms to boost CRISPR off-target prediction accuracy to 88%.',
        tags: ['Multimodal RAG', 'Scikit-Learn', 'BLAST Automation'],
        href: 'https://www.linkedin.com/posts/chaima-attafi_crispr-geneticediting-machinelearning-activity-7232038482397863937-eOTp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTWOqABJAFPxXfykhqK1BxG1Gp76wrlYwg',
        linkLabel: 'View Demo',
      },
    ],
  },
  {
    group: 'Open Source & Academic',
    logo: '/images/espritLogo.jpeg',
    items: [
      {
        title: 'CO2 Emission Calculator',
        body: 'Estimating vehicle emissions using machine learning models trained on Canadian vehicle datasets.',
        tags: ['Python', 'Flask', 'Angular', 'Scrum'],
        href: 'https://www.linkedin.com/posts/chaima-attafi-914a56208_machinelearning-datascience-ai-activity-7202415580170170369-M6IK',
        linkLabel: 'View Demo',
      },
      {
        title: 'COCO-ESPRIT Platform',
        body: 'Student carpooling and roommate app with real-time chat via WebSockets and an EasyOCR security layer.',
        tags: ['Spring Boot', 'WebSockets', 'NLP Chatbot', 'EasyOCR'],
        href: 'https://github.com/hssan861/COCO-ESPRIT',
        linkLabel: 'GitHub Code',
      },
      {
        title: 'Web Scraping Automation',
        body: 'Selenium-based engine for dynamic websites to extract, filter, and store scientific articles in structured JSON formats.',
        tags: ['Selenium', 'Python', 'Automation'],
        href: 'https://github.com/chayma-attafi/Web_Scraping',
        linkLabel: 'GitHub Code',
      },
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Artificial Intelligence & Agents',
    skills: ['Agentic AI', 'GraphRAG', 'LLM Architectures', 'CrewAI', 'LangChain', 'Semantic Kernel', 'Crawl4AI', 'MCP'],
  },
  {
    title: 'Engineering',
    skills: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'Neo4j', 'React.js', 'Angular', 'Docker'],
  },
];

const certificates: CertificateSection[] = [
  {
    section: 'Agentic AI & MCP',
    accent: 'var(--primary-color)',
    items: [
      {
        icon: 'fas fa-robot',
        issuer: 'Anthropic Education',
        title: 'Model Context Protocol: Advanced Topics',
        points: ['Complex Server-Client Orchestration', 'Advanced Resource Fetching & Tooling', 'Multi-agent Communication Frameworks'],
        date: 'Jan 2, 2026',
        href: 'https://verify.skilljar.com/c/h84u3m65ccmw',
        featured: true,
      },
      {
        icon: 'fas fa-project-diagram',
        issuer: 'Anthropic Education',
        title: 'Introduction to Model Context Protocol',
        points: ['Standardizing AI-Data Interactions', 'Building MCP Servers & Clients', 'Context Injection for LLMs'],
        date: 'Jan 2, 2026',
        href: 'https://verify.skilljar.com/c/fxkbweu4eys5',
      },
    ],
  },
  {
    section: 'NVIDIA DLI Specializations',
    accent: 'var(--accent-color)',
    items: [
      {
        image: '/images/certifnvidia.jpeg',
        issuer: 'NVIDIA',
        title: 'Natural Language Processing (NLP)',
        points: ['Named Entity Recognition (NER)', 'Machine Translation & Generation', 'Sentiment Analysis & Opinion Mining'],
      },
      {
        image: '/images/AI.png',
        issuer: 'NVIDIA',
        title: 'AI for Predictive Maintenance',
        points: ['Anomaly Detection & Failure Prediction', 'Time Series Forecasting', 'Maintenance Optimization Algorithms'],
      },
      {
        image: '/images/deepcertif.png',
        issuer: 'NVIDIA',
        title: 'Fundamentals of Deep Learning',
        points: ['Neural Network Architecture Design', 'Training & Optimization Frameworks', 'CNNs, RNNs, and LSTMs'],
      },
    ],
  },
  {
    section: 'Geospatial Engineering',
    accent: '#4ade80',
    items: [
      {
        image: '/images/QGISLogo.png',
        issuer: 'Instructor-Led',
        title: 'QGIS Master Training',
        points: ['Geospatial Data Analysis & Mapping', 'Spatial Problem Solving', 'Cartographic Visualization'],
        note: 'Led by Prof. Aissaoui Ahmed',
        footerImage: '/images/QGIS_certif.jpeg',
        date: 'Certified Practitioner',
      },
    ],
  },
];

function getPageFromPath() {
  const legacyPaths: Record<string, PageKey> = {
    '/index.html': 'bio',
    '/projects.html': 'projects',
    '/cv.html': 'resume',
    '/certif.html': 'certificates',
  };
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  if (legacyPaths[pathname]) {
    return legacyPaths[pathname];
  }
  return navItems.find((item) => item.path === pathname)?.key || 'bio';
}

function App() {
  const [page, setPage] = useState(getPageFromPath);

  useEffect(() => {
    const onPopState = () => setPage(getPageFromPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = page === 'bio' ? 'Chaima Attafi | AI Engineer' : `${navItems.find((item) => item.key === page)?.label} | Chaima Attafi`;
  }, [page]);

  return (
    <>
      <Nav activePage={page} onNavigate={setPage} />
      {page === 'bio' && <BioPage />}
      {page === 'projects' && <ProjectsPage />}
      {page === 'resume' && <ResumePage />}
      {page === 'certificates' && <CertificatesPage />}
      <Footer compact={page === 'resume' || page === 'certificates'} />
    </>
  );
}

function Nav({ activePage, onNavigate }: { activePage: PageKey; onNavigate: (page: PageKey) => void }) {
  function handleNavigate(event: MouseEvent<HTMLAnchorElement>, item: NavItem) {
    event.preventDefault();
    window.history.pushState({}, '', item.path);
    onNavigate(item.key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav id="nav" aria-label="Primary navigation">
      <ul className="links">
        {navItems.map((item) => (
          <li key={item.key} className={activePage === item.key ? 'active' : ''}>
            <a href={item.path} onClick={(event) => handleNavigate(event, item)}>{item.label}</a>
          </li>
        ))}
      </ul>
      <ul className="icons">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={link.className} aria-label={link.label} target="_blank" rel="noreferrer" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BioPage() {
  return (
    <main>
      <section id="intro">
        <h1>CHAIMA ATTAFI</h1>
        <p>
          AI Engineer specializing in <span>Agentic AI</span>, RAG, LLM, and MCP.
        </p>
      </section>

      <div id="main">
        <section className="bio-section">
          <img src="/images/chaima.jpeg" alt="Chaima Attafi" />
          <div>
            <h2>The Mission</h2>
            <p>
              I build systems that bridge the gap between research and real-world application, leveraging Generative AI
              and Multi-Agent Systems to create ethical, high-performance, and scalable solutions.
            </p>
          </div>
        </section>

        <CardSection title="Professional Journey" cards={journeyCards} />
        <CardSection title="Success & Milestones" cards={milestoneCards} />
      </div>
    </main>
  );
}

function CardSection({ title, cards }: { title: string; cards: MilestoneCard[] }) {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="milestone-grid">
        {cards.map((card) => (
          <article className="milestone-card" style={{ borderTopColor: card.border || 'var(--accent-color)' }} key={card.title}>
            <img src={card.image} alt={card.title} />
            <div className="milestone-content">
              <span style={{ color: card.border || 'var(--accent-color)' }}>{card.date}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <header className="major">
          <h1>Engineering & Innovation</h1>
          <p>A collection of industrial AI systems and open-source contributions.</p>
        </header>

        {projects.map((group) => (
          <section key={group.group}>
            <div className="section-title">
              <img src={group.logo} width="50" height="50" alt="" />
              <h2>{group.group}</h2>
            </div>
            <div className="project-grid">
              {group.items.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.href && (
                    <a className="btn-link" href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel} <i className={project.linkLabel.includes('GitHub') ? 'fab fa-github' : 'fas fa-external-link-alt'} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function ResumePage() {
  return (
    <main className="page-shell">
      <div className="container resume-container">
        <section className="resume-section">
          <SectionHeader icon="fas fa-layer-group" title="Technical Stack" />
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <div className="skills-container">
                {group.skills.map((skill) => <span className="skill-badge" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <SectionHeader icon="fas fa-terminal" title="Professional Experience" />
          <TimelineItem date="Oct 2025 - Present" title="Junior AI Consultant" org="TALAN Tunisie">
            <ul>
              <li><strong>Intelligent Code Modernization:</strong> Architecting a framework to automate legacy COBOL migration using Knowledge Graph reasoning.</li>
              <li><strong>Knowledge Graph Visualization:</strong> Built a Neo4j-based dependency graph allowing engineers to explore business logic flow and inter-module relationships.</li>
              <li><strong>Multi-Agent Pipeline:</strong> Developed an AI pipeline using Atomic Agent to migrate CBP/JCL to modern Spring Boot and Angular stacks.</li>
            </ul>
          </TimelineItem>
        </section>

        <section className="resume-section">
          <SectionHeader icon="fas fa-graduation-cap" title="Education" />
          <TimelineItem date="2022 - 2025" title="BSc. in Engineering (Computer Science)" org="ESPRIT (Private School of Engineering and Technologies)">
            <p>Focus: Data Science, AI, and Software Engineering.</p>
          </TimelineItem>
          <TimelineItem date="2019 - 2022" title="BSc. Urban Planning and Development" org="Higher Institute of Environmental Technologies">
            <p>Research on social housing approaches (ARRU).</p>
          </TimelineItem>
        </section>

        <section className="resume-section">
          <div className="pdf-card">
            <h2>Full Professional CV</h2>
            <p>Download the official document for complete details, including research theses and full contact information.</p>
            <a href="/images/Chayma_resume/Chaima-Attafi.pdf" download className="download-action">
              <i className="fas fa-cloud-download-alt" /> Download Official PDF
            </a>
            <div className="preview-window">
              <iframe src="/images/Chayma_resume/Chaima-Attafi.pdf#toolbar=0" title="Chaima Attafi CV" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="section-header">
      <i className={icon} />
      <h2>{title}</h2>
    </div>
  );
}

function TimelineItem({ date, title, org, children }: { date: string; title: string; org: string; children: ReactNode }) {
  return (
    <article className="timeline-item">
      <span className="timeline-date">{date}</span>
      <h3 className="timeline-title">{title}</h3>
      <span className="timeline-org">{org}</span>
      <div className="timeline-desc">{children}</div>
    </article>
  );
}

function CertificatesPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <header className="major">
          <h1>Certifications</h1>
          <p>Advanced specializations in Agentic AI, Deep Learning, and Geospatial Data.</p>
        </header>

        {certificates.map((section) => (
          <section key={section.section}>
            <h2 className="accent-heading" style={{ borderLeftColor: section.accent }}>{section.section}</h2>
            <div className="cert-grid">
              {section.items.map((cert) => (
                <article className={`cert-card ${cert.featured ? 'featured' : ''}`} key={cert.title}>
                  <div className="cert-img-container">
                    {cert.image ? <img src={cert.image} alt={cert.title} /> : <i className={cert.icon} />}
                  </div>
                  <div className="cert-content">
                    <span className="cert-badge">{cert.issuer}</span>
                    <h3>{cert.title}</h3>
                    <ul>
                      {cert.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    {cert.note && <p className="cert-note">{cert.note}</p>}
                  </div>
                  {(cert.date || cert.href || cert.footerImage) && (
                    <div className="cert-footer">
                      {cert.footerImage && <img src={cert.footerImage} alt="" />}
                      {cert.date && <span className="date-label">{cert.date}</span>}
                      {cert.href && <a href={cert.href} target="_blank" rel="noreferrer">Verified <i className="fas fa-external-link-alt" /></a>}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function Footer({ compact }: { compact: boolean }) {
  return (
    <footer id="footer" className={compact ? 'compact' : ''}>
      <div className="container">
        <h3>Let's Build Something Intelligent</h3>
        <p>
          Reach out: <a href="mailto:chayma.attafi@esprit.tn">chayma.attafi@esprit.tn</a>
        </p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/chaima-attafi-914a56208" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://github.com/chayma-attafi" aria-label="GitHub" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>
          <a href="https://x.com/ChaymaAttafi2" aria-label="X" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter" /></a>
        </div>
      </div>
    </footer>
  );
}

export default App;
