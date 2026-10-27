export interface CreativeProject {
  id: string;
  category: 'web' | 'app' | 'ai';
  categoryLabel: string;
  projectType: 'Live Web Project' | 'Creator Portfolio' | 'Demonstration Project' | 'Functional Prototype' | 'Architecture Concept' | 'Workflow Concept';
  title: string;
  description: string;
  fullOverview: string;
  objective: string;
  contribution: string;
  image: string;
  scopeBadge: string;
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
  actionLabel?: string;
  iconType?: 'pill' | 'youtube' | 'camera';
}

export const socialProfiles = {
  facebook: {
    name: 'Facebook',
    handle: '@mdabdulalek2',
    url: 'https://www.facebook.com/mdabdulalek2',
  },
  instagram: {
    name: 'Instagram',
    handle: '@mdabdulalek2',
    url: 'https://www.instagram.com/mdabdulalek2',
  },
  youtube: {
    name: 'YouTube',
    handle: '@mdabdulalek2',
    url: 'https://www.youtube.com/@mdabdulalek2',
  },
  email: {
    name: 'Email',
    address: 'alek25860@gmail.com',
    url: 'mailto:alek25860@gmail.com',
  },
};

export const creativeProjects: CreativeProject[] = [
  {
    id: 'proj-medistock',
    category: 'web',
    categoryLabel: 'PHARMACY & HEALTHCARE WEB APP',
    projectType: 'Live Web Project',
    title: 'MediStock Pharmacy',
    description: 'A pharmacy-focused digital project exploring medicine discovery, product information, and a more convenient online user experience.',
    fullOverview: 'A responsive, Cloudflare Workers-hosted digital pharmacy web platform engineered for instant medicine discovery, comprehensive product information, and a seamless client inquiry experience.',
    objective: 'Create an accessible, fast-loading digital medicine discovery and product consultation platform for pharmacy users.',
    contribution: 'Designed the user interface, structured medicine catalog categorization, implemented responsive views, and configured edge deployment on Cloudflare Workers.',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'LIVE WEB APPLICATION',
    deliverables: [
      'Fast-loading medicine directory & search interface',
      'Mobile-responsive layout optimized for smartphones and desktops',
      'Edge-hosted deployment on Cloudflare Workers infrastructure',
      'Clean product information structure and inquiry flow'
    ],
    techStack: ['Cloudflare Workers', 'JavaScript', 'HTML5', 'Modern CSS', 'Responsive UI'],
    liveUrl: 'https://medistock-pharmacy.alek25860.workers.dev',
    actionLabel: 'View Live Project →',
    iconType: 'pill'
  },
  {
    id: 'proj-yt-aivideo',
    category: 'ai',
    categoryLabel: 'AI VIDEO & CREATIVE EXPERIMENTS',
    projectType: 'Creator Portfolio',
    title: 'AI Video & Creative Experiments',
    description: 'Generative video experiments, cinematic visual storytelling, voice synthesis integration, and creative workflows published on YouTube.',
    fullOverview: 'A YouTube channel and experimental lab exploring state-of-the-art generative video models, prompt design for cinematic camera angles, synthetic voiceover integration, and sound design workflows.',
    objective: 'Test and document practical AI video generation capabilities, character consistency, and multimodal content creation workflows.',
    contribution: 'Crafted scene prompts, directed camera choreography, aligned voice synthesis models, and published creative experimental video productions.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'YOUTUBE CREATIVE WORK',
    deliverables: [
      'Multi-scene generative video prompt engineering',
      'Synthetic voiceover design and sound alignment',
      'Cinematic lighting, camera motions, and creative pacing',
      'Active YouTube channel publications (@mdabdulalek2)'
    ],
    techStack: ['Generative Video', 'Voice Synthesis', 'Prompt Design', 'Video Editing', 'YouTube Channel'],
    liveUrl: 'https://www.youtube.com/@mdabdulalek2',
    actionLabel: 'Watch on YouTube →',
    iconType: 'youtube'
  },
  {
    id: 'proj-adobe-stock',
    category: 'ai',
    categoryLabel: 'STOCK PHOTOGRAPHY & DIGITAL ASSETS',
    projectType: 'Creator Portfolio',
    title: 'Stock Photography & Digital Assets',
    description: 'Explore my stock image portfolio and visual content created for digital and creative projects.',
    fullOverview: 'An active Adobe Stock Contributor portfolio showcasing curated digital imagery, architectural and spatial concepts, and creative backgrounds created for commercial media and marketing projects.',
    objective: 'Produce commercially viable, aesthetically refined stock visual assets adhering strictly to marketplace technical and licensing standards.',
    contribution: 'Conceptualized visual themes, authored high-definition asset pipelines, curated submissions, and managed stock metadata tagging on Adobe Stock.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'ADOBE STOCK CONTRIBUTOR',
    deliverables: [
      'Curated collection of high-resolution digital imagery',
      'Compliance with Adobe Stock commercial submission requirements',
      'Architectural, background, and conceptual visual themes',
      'Directly licensable visual library on Adobe Stock'
    ],
    techStack: ['Adobe Stock', 'Digital Asset Curation', 'Visual Art Direction', 'High-Res Upscaling'],
    liveUrl: 'https://stock.adobe.com/contributor/213695412/Md%20Abdul%20Alek',
    actionLabel: 'Explore My Stock Portfolio →',
    iconType: 'camera'
  },
  {
    id: 'proj-1',
    category: 'web',
    categoryLabel: 'WEB DEVELOPMENT & UI/UX',
    projectType: 'Demonstration Project',
    title: 'Modern Business & Portfolio Web Architecture',
    description: 'A responsive website demonstration emphasizing fast load times, clear typographic hierarchy, and intuitive navigation.',
    fullOverview: 'A responsive, semantic website build designed to demonstrate clean structure, mobile-first design, accessibility considerations, and search engine optimization fundamentals.',
    objective: 'Demonstrate how to build a clean corporate or portfolio web presence that communicates services within seconds on any device.',
    contribution: 'Designed the UI layouts, implemented semantic HTML5 and modern CSS, structured the component hierarchy, and ensured full cross-browser mobile responsiveness.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'WEB & UI/UX',
    deliverables: [
      'Mobile-first responsive interface architecture',
      'Fluid typographic scale and high-contrast color palette',
      'Clean semantic HTML5 structure with on-page SEO meta tags',
      'Lightweight navigation with accessible mobile drawer'
    ],
    techStack: ['HTML5', 'Modern CSS', 'JavaScript', 'Tailwind CSS']
  },
  {
    id: 'proj-2',
    category: 'web',
    categoryLabel: 'HOSTING & INFRASTRUCTURE',
    projectType: 'Architecture Concept',
    title: 'Domain, DNS & Server Deployment Workflow',
    description: 'A structured deployment architecture for custom domain routing, SSL/TLS certificates, and cPanel/cloud hosting.',
    fullOverview: 'A practical deployment blueprint covering custom domain mapping, DNS zone records (A, CNAME, MX, TXT), automated SSL certificates, cPanel directory routing, and backup routines.',
    objective: 'Provide a reliable, step-by-step technical pipeline for launching and maintaining web applications without configuration errors.',
    contribution: 'Mapped DNS record configurations, documented SSL/TLS provisioning, established automated backup routines, and organized cPanel directory structures.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'INFRASTRUCTURE',
    deliverables: [
      'DNS zone configuration & TTL optimization',
      'SSL/TLS certificate automation and HTTPS redirection',
      'cPanel directory and sub-domain architecture setup',
      'Scheduled database and site backup routines'
    ],
    techStack: ['Domain DNS', 'SSL/TLS', 'cPanel', 'Cloud Hosting', 'Nginx']
  },
  {
    id: 'proj-3',
    category: 'app',
    categoryLabel: 'AI & DIGITAL SOLUTIONS',
    projectType: 'Functional Prototype',
    title: 'Smart Task & Workflow Utility Application',
    description: 'A web-based tool prototype for managing tasks, tracking project milestones, and filtering information efficiently.',
    fullOverview: 'An interactive client-side utility interface engineered for organizing daily technical workflows, tracking tasks across stages, and filtering data with zero lag.',
    objective: 'Create a clean, distraction-free productivity dashboard with smooth client-side state handling and persistent storage.',
    contribution: 'Engineered the component architecture, state management logic, local storage persistence, responsive table layouts, and search filters.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'APPLICATION PROTOTYPE',
    deliverables: [
      'Interactive task filtering, sorting, and search querying',
      'Client-side state management with local persistence',
      'Multi-breakpoint responsive layouts for phones and desktops',
      'Clean data presentation tables and status chips'
    ],
    techStack: ['JavaScript', 'React', 'CSS Grid', 'Local Storage']
  },
  {
    id: 'proj-4',
    category: 'app',
    categoryLabel: 'WEB DEVELOPMENT & UI/UX',
    projectType: 'Functional Prototype',
    title: 'Mobile-First Digital Experience Prototype',
    description: 'A focused mobile web experience concept emphasizing thumb ergonomics, readable typography, and quick interaction feedback.',
    fullOverview: 'A prototype exploring mobile web ergonomics, touch targets, and accessible interaction patterns for content-heavy web platforms.',
    objective: 'Test and validate responsive touch-friendly navigation patterns and clean typography for mobile visitors.',
    contribution: 'Designed wireframes, structured touch-friendly UI components, implemented fluid transitions, and tested cross-device responsiveness.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'MOBILE UI/UX',
    deliverables: [
      'Thumb-optimized navigation hierarchy',
      'Lightweight gesture and button feedback',
      'Optimized asset loading for cellular connections',
      'Accessible contrast and clean typography'
    ],
    techStack: ['Responsive UI', 'Touch Interactions', 'CSS Flexbox', 'HTML5']
  },
  {
    id: 'proj-5',
    category: 'ai',
    categoryLabel: 'AI & DIGITAL SOLUTIONS',
    projectType: 'Workflow Concept',
    title: 'AI Prompt Architecture & Visual Asset Pipeline',
    description: 'A structured workflow for creating consistent, high-resolution visual assets and architectural concepts using AI tools.',
    fullOverview: 'A repeatable creative workflow combining parameter tuning, structured prompt templates, and post-generation enhancement for digital design assets.',
    objective: 'Establish reliable, reproducible AI image generation workflows that maintain visual consistency across project deliverables.',
    contribution: 'Authored modular prompt structures, tuned camera/lighting parameters, refined image upscaling processes, and cataloged style templates.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'AI WORKFLOW',
    deliverables: [
      'Modular prompt architecture templates',
      'Controlled lighting and perspective parameters',
      'High-resolution upscaling and artifact cleanup pipeline',
      'Organized visual asset library structure'
    ],
    techStack: ['Prompt Engineering', 'AI Studio', 'Upscaling Tools', 'Digital Media']
  },
  {
    id: 'proj-6',
    category: 'ai',
    categoryLabel: 'AI & DIGITAL SOLUTIONS',
    projectType: 'Workflow Concept',
    title: 'Multi-Format Digital Content Production System',
    description: 'An integrated workflow connecting script ideas, visual prompts, and voice synthesis for digital communication.',
    fullOverview: 'A demonstration of how to combine modern AI tools into a coherent production workflow for educational content and brand presentations.',
    objective: 'Streamline the creation of digital presentation assets using prompt engineering, AI text generation, and voice workflows.',
    contribution: 'Designed the end-to-end media production pipeline, connected voice generation tools, and established formatting standards for digital exports.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    scopeBadge: 'DIGITAL MEDIA',
    deliverables: [
      'Step-by-step content generation pipeline',
      'AI voice model tuning and audio export standards',
      'Visual asset integration with presentation layouts',
      'Repeatable templates for quick project turnaround'
    ],
    techStack: ['AI Workflow Design', 'Voice Synthesis', 'Prompt Design', 'Media Tools']
  }
];

export const technicalSkillsMatrix = {
  web: {
    category: 'Web Development & UI/UX',
    skills: ['HTML5 & Semantic Markup', 'Modern CSS & Flexbox/Grid', 'JavaScript (ES6+)', 'Responsive UI/UX Design', 'Tailwind CSS', 'SEO Fundamentals']
  },
  infrastructure: {
    category: 'Hosting & Infrastructure',
    skills: ['Domain & DNS Configuration', 'SSL/TLS Security Setup', 'cPanel Administration', 'Cloud Server Deployment', 'Website Migration', 'Technical Maintenance']
  },
  ai: {
    category: 'AI & Digital Solutions',
    skills: ['Application Prototyping', 'Prompt Engineering', 'AI Visual Workflows', 'Digital Content Automation', 'Workflow Optimization']
  }
};

export const verifiedCredentials = [
  {
    title: 'Diploma in Engineering — Computer Technology',
    institution: 'Academic Credential · CGPA: 3.68 / 4.00',
    note: 'Foundations in computer systems, programming logic, networks, and database fundamentals.'
  },
  {
    title: 'Advanced AI & Digital Workflow Training',
    institution: 'Department of Youth Development · Tongi, Gazipur · 2026',
    note: 'Hands-on practical training covering modern AI tools, prompt architecture, and commercial digital asset production.'
  },
  {
    title: 'Institutional IT Administration',
    institution: 'Systems, Hardware & Network Operations',
    note: 'Practical experience configuring local networks, maintaining computing hardware, and managing institutional IT environments.'
  }
];
