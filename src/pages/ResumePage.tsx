import { a } from '../utils/assets';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import { skillGroups } from '../data/resume';

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
            <a href={a('/images/Chayma_resume/Chaima-Attafi.pdf')} download className="download-action">
              <i className="fas fa-cloud-download-alt" /> Download Official PDF
            </a>
            <div className="preview-window">
              <iframe src={a('/images/Chayma_resume/Chaima-Attafi.pdf') + '#toolbar=0'} title="Chaima Attafi CV" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ResumePage;
