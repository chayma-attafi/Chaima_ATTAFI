import type { ProjectGroup } from '../types';

export const projects: ProjectGroup[] = [
  {
      
    group: 'Personal Projects',
    logo: '/images/github.svg',
    items: [
      {
        title: 'RagFAQ - ShopVite FAQ Assistant',
        body: 'Retrieval-Augmented Generation system that ingests documents and answers FAQs using LangChain, Groq, and ChromaDB, with semantic search via vector embeddings and RAGAS-based evaluation.',
        tags: ['LangChain', 'Groq', 'ChromaDB', 'RAG', 'React'],
        links: [
          { href: 'https://github.com/chayma-attafi/RagFAQ', label: 'GitHub Code' },
          { href: 'https://www.linkedin.com/posts/chaima-attafi_llmsecurity-rag-promptinjection-activity-7467884334084001792-JwrM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTWOqABJAFPxXfykhqK1BxG1Gp76wrlYwg', label: 'View Demo' },
        ],
      },
      {
        title: 'SecondLife Exchange',
        body: 'A second-hand marketplace platform for buying, selling, and exchanging used items, built with a React/Vite/Tailwind frontend and a Python backend.',
        tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Python'],
        links: [
          { href: 'https://github.com/chayma-attafi/ScondLife-Exchange', label: 'GitHub Code' },
        ],
      },
      {
        title: 'AI Code Generation Assistant',
        body: 'A VS Code extension that brings AI-assisted development into the editor, enabling file creation/updates and workspace search through a chat interface powered by MCP or the Groq API.',
        tags: ['TypeScript', 'Python', 'VS Code Extension', 'MCP', 'Groq'],
        links: [
          { href: 'https://github.com/chayma-attafi/Code-Generation', label: 'GitHub Code' },
        ],
      },
      {
        title: 'Multi-Agent AI Writer Crew',
        body: 'A multi-agent content writing system orchestrating researcher, writer, and editor agents with CrewAI to collaboratively research and produce articles.',
        tags: ['CrewAI', 'Python', 'Multi-Agent'],
        links: [
          { href: 'https://github.com/chayma-attafi/Multi_Agent_AIWriter_Crew', label: 'GitHub Code' },
        ],
      },
      {
        title: 'Presentation Generator Agent',
        body: 'An AI agent that automatically generates presentations from content, with implementations for both HTML and PowerPoint output.',
        tags: ['Python', 'AI Agents', 'Automation'],
        links: [
          { href: 'https://github.com/chayma-attafi/PresentationGenerator_Agent', label: 'GitHub Code' },
        ],
      },
      {
        title: 'SalaTunisian',
        body: 'An AI-powered search app for Tunisian TV series, using RAG with semantic data to enable natural-language search over series content.',
        tags: ['RAG', 'Semantic Search', 'Python', 'NLP'],
        links: [
          { href: 'https://github.com/chayma-attafi/SalaTunisian', label: 'GitHub Code' },
        ],
      },
      {
        title: 'SummRAG',
        body: 'An AI-powered platform that summarizes articles, extracts key insights, and detects whether content has been verified, with a Python backend and TypeScript frontend.',
        tags: ['RAG', 'Python', 'TypeScript', 'Content Verification'],
        links: [
          { href: 'https://github.com/chayma-attafi/SummRAG', label: 'GitHub Code' },
        ],
      },
      {
        title: 'SummRAG - Voice Summarization Agent',
        body: 'A RAG-based AI agent that processes and summarizes voice content into concise, structured text summaries.',
        tags: ['RAG', 'Python', 'AI Agents', 'Voice Processing'],
        links: [
          { href: 'https://github.com/chayma-attafi/SummRag_AgentForVoiceSummarization', label: 'GitHub Code' },
        ],
      },
    ],
  },
  {
    group: 'Innovation Factory AI @ Talan',
    logo: '/images/talan.png',
    items: [
      {
        title: 'CobolNext - Code Modernization Framework',
        body: 'Automated migration of legacy COBOL systems to modern full-stack architectures. Developed a multi-agent pipeline for dependency analysis and a GraphRAG chat assistant for system exploration.',
        tags: ['Semantic Kernel', 'Neo4j', 'GraphRAG', 'FastAPI'],
      },
      {
        title: 'APItesting - LLM-Driven API Testing Pipeline',
        body: 'An automated pipeline that parses API documentation (PDFs, Word docs, OpenAPI specs) into a layered Single Source of Truth knowledge base using AI agents, then generates ready-to-run Postman collections with real test assertions and Newman-based test reports.',
        tags: ['FastAPI', 'RLM Agents', 'Docling', 'Postman & Newman'],
      },
      {
        title: 'SciAgent - Multi-Agent Scientific Research Assistant',
        body: 'A suite of agentic tools including Science Watch, AI Writer with citation and LaTeX support, and a presentation generator using research papers.',
        tags: ['CrewAI', 'LangGraph', 'Crawl4ai', 'AgenticRAG'],
        links: [
          { href: 'https://www.linkedin.com/posts/chaima-attafi_fact-latex-activity-7379238665937416192-8vMK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTWOqABJAFPxXfykhqK1BxG1Gp76wrlYwg', label: 'View Demo' },
        ],
      },
      {
        title: 'Mirror of Life',
        body: 'Winner of the Audience Award. Leveraged ML algorithms to boost CRISPR off-target prediction accuracy to 88%.',
        tags: ['Multimodal RAG', 'Scikit-Learn', 'BLAST Automation'],
        links: [
          { href: 'https://www.linkedin.com/posts/chaima-attafi_crispr-geneticediting-machinelearning-activity-7232038482397863937-eOTp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTWOqABJAFPxXfykhqK1BxG1Gp76wrlYwg', label: 'View Demo' },
        ],
      },
    ],
  },
  {
    group: 'Open Source & Academic',
    logo: '/images/espritLogo.jpeg',
    items: [
      {
        title: 'CO2 Emission Calculator',
        body: 'Estimating vehicle emissions using machine learning models trained on Canadian vehicle datasets.',
        tags: ['Python', 'Flask', 'Angular', 'Scrum'],
        links: [
          { href: 'https://www.linkedin.com/posts/chaima-attafi-914a56208_machinelearning-datascience-ai-activity-7202415580170170369-M6IK', label: 'View Demo' },
        ],
      },
      {
        title: 'COCO-ESPRIT Platform',
        body: 'Student carpooling and roommate app with real-time chat via WebSockets and an EasyOCR security layer.',
        tags: ['Spring Boot', 'WebSockets', 'NLP Chatbot', 'EasyOCR'],
        links: [
          { href: 'https://github.com/hssan861/COCO-ESPRIT', label: 'GitHub Code' },
        ],
      },
      {
        title: 'Web Scraping Automation',
        body: 'Selenium-based engine for dynamic websites to extract, filter, and store scientific articles in structured JSON formats.',
        tags: ['Selenium', 'Python', 'Automation'],
        links: [
          { href: 'https://github.com/chayma-attafi/Web_Scraping', label: 'GitHub Code' },
        ],
      },
    ],
  }

];
