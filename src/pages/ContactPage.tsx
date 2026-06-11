import { FormEvent, useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'bb0f1a1b-50d5-4238-98be-d67ed4fbb34f',
          subject: `Portfolio Contact from ${name}`,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setName(''); setEmail(''); setMessage('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <div className="container contact-container">
        <header className="major">
          <h1>Get In Touch</h1>
          <p>Have a project in mind, need a full-stack website, an agentic system, or just want to collaborate? I'd love to hear from you.</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's build something intelligent</h3>
            <p>Available for AI consulting, full-stack web development, custom portfolios, and agentic pipeline design.</p>
            <div className="contact-links">
              <a href="mailto:chaymaattafi3@gmail.com">
                <i className="fas fa-envelope" />
                chaymaattafi3@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/chaima-attafi-914a56208" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" />
                LinkedIn Profile
              </a>
              <a href="https://github.com/chayma-attafi" target="_blank" rel="noreferrer">
                <i className="fab fa-github" />
                GitHub
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                />
              </label>
            </div>
            <label>
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your project…"
                rows={6}
              />
            </label>
            {sent ? (
              <div className="sent-confirmation">
                <i className="fas fa-check-circle" /> Message sent! I'll get back to you soon.
              </div>
            ) : (
              <>
                {error && <p className="form-error"><i className="fas fa-exclamation-circle" /> {error}</p>}
                <button type="submit" disabled={loading}>
                  {loading
                    ? <><i className="fas fa-spinner fa-spin" /> Sending…</>
                    : <><i className="fas fa-paper-plane" /> Send Message</>}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
