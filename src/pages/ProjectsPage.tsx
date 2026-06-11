import { a } from '../utils/assets';
import { projects } from '../data/projects';

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
              <img src={a(group.logo)} width="50" height="50" alt="" />
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
                  {project.links && project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a className="btn-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                          {link.label} <i className={link.label.includes('GitHub') ? 'fab fa-github' : 'fas fa-external-link-alt'} />
                        </a>
                      ))}
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

export default ProjectsPage;
