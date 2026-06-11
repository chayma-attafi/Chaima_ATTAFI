import { MouseEvent, useEffect, useState } from 'react';
import type { NavItem, PageKey } from '../types';
import { navItems, socialLinks } from '../data/nav';

function Nav({ activePage, onNavigate }: { activePage: PageKey; onNavigate: (page: PageKey) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavigate(event: MouseEvent<HTMLAnchorElement>, item: NavItem) {
    event.preventDefault();
    window.location.hash = item.path;
    onNavigate(item.key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navClass = ['', scrolled ? 'scrolled' : '', menuOpen ? 'menu-open' : ''].filter(Boolean).join(' ');

  return (
    <nav id="nav" className={navClass} aria-label="Primary navigation">
      <ul className="links">
        {navItems.map((item) => (
          <li key={item.key} className={activePage === item.key ? 'active' : ''}>
            <a href={item.path} onClick={(event) => handleNavigate(event, item)}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <ul className="icons">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={link.className} aria-label={link.label} target="_blank" rel="noreferrer" />
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
