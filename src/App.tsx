import { useEffect, useState } from 'react';
import type { PageKey } from './types';
import { navItems } from './data/nav';
import { a } from './utils/assets';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BioPage from './pages/BioPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

function getPageFromPath(): PageKey {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const map: Record<string, PageKey> = {
    '/': 'bio', '/projects': 'projects', '/resume': 'resume',
    '/certificates': 'certificates', '/contact': 'contact',
  };
  return map[hash] || 'bio';
}

function App() {
  const [page, setPage] = useState(getPageFromPath);

  useEffect(() => {
    const onHash = () => setPage(getPageFromPath());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.title = page === 'bio' ? 'Chaima Attafi | AI Engineer' : `${navItems.find((item) => item.key === page)?.label} | Chaima Attafi`;
  }, [page]);

  return (
    <>
      <div className="page-video-bg" aria-hidden="true">
        <video autoPlay muted loop playsInline>
          <source src={a('/videos/bg.mp4')} type="video/mp4" />
        </video>
        <div className="page-video-overlay" />
      </div>
      <Nav activePage={page} onNavigate={setPage} />
      {page === 'bio' && <BioPage />}
      {page === 'projects' && <ProjectsPage />}
      {page === 'resume' && <ResumePage />}
      {page === 'certificates' && <CertificatesPage />}
      {page === 'contact' && <ContactPage />}
      <Footer compact={page === 'resume' || page === 'certificates' || page === 'contact'} />
    </>
  );
}

export default App;
