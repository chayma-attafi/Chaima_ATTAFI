import type { NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { key: 'bio', label: 'Bio', path: '#/' },
  { key: 'projects', label: 'Projects', path: '#/projects' },
  { key: 'resume', label: 'Resume', path: '#/resume' },
  { key: 'certificates', label: 'Certificates', path: '#/certificates' },
  { key: 'contact', label: 'Contact', path: '#/contact' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/chaima-attafi-914a56208', className: 'fa-brands fa-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/chayma-attafi', className: 'fa-brands fa-github', label: 'GitHub' },
];
