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

export default Footer;
