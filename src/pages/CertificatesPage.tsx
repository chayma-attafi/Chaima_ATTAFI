import { a } from '../utils/assets';
import { certificates } from '../data/certificates';

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
                    {cert.image ? <img src={a(cert.image)} alt={cert.title} /> : <i className={cert.icon} />}
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
                      {cert.footerImage && <img src={a(cert.footerImage)} alt="" />}
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

export default CertificatesPage;
