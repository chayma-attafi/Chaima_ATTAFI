import type { CertificateSection } from '../types';

export const certificates: CertificateSection[] = [
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
