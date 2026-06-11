export type PageKey = 'bio' | 'projects' | 'resume' | 'certificates' | 'contact';

export type NavItem = {
  key: PageKey;
  label: string;
  path: string;
};

export type SocialLink = {
  href: string;
  className: string;
  label: string;
};

export type MilestoneCard = {
  border?: string;
  image: string;
  date: string;
  title: string;
  body: string;
};

export type ProjectLink = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  body: string;
  tags: string[];
  links?: ProjectLink[];
};

export type ProjectGroup = {
  group: string;
  logo: string;
  items: Project[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Certificate = {
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

export type CertificateSection = {
  section: string;
  accent: string;
  items: Certificate[];
};
