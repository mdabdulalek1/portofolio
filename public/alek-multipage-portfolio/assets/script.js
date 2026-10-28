// Initialize Lucide icons if available
if (typeof lucide !== 'undefined' && lucide.createIcons) {
  lucide.createIcons();
}

// Current Year Updater
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu');
const navlinks = document.getElementById('navlinks');

if (menuBtn && navlinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Projects Filter Functionality
const filterBtns = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0 && projectCards.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterValue === 'all' || cat === filterValue) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });
    });
  });
}

// Project Modal Specification Dataset
const projectData = {
  'proj-medistock': {
    title: 'MediStock Pharmacy',
    category: 'PHARMACY & HEALTHCARE WEB APP · LIVE WEB PROJECT',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
    objective: 'Provide patients and pharmacy customers with an instant, accessible medicine discovery portal and streamlined digital product catalog.',
    contribution: 'Architected and built the responsive web frontend, structured medicine inventory catalogs and search filters, and configured zero-latency cloud deployment on Cloudflare Workers.',
    overview: 'A responsive, Cloudflare Workers-hosted digital pharmacy web platform engineered for instant medicine discovery, comprehensive product information, and a seamless client inquiry experience.',
    deliverables: [
      'Fast-loading medicine directory & search interface',
      'Mobile-responsive layout optimized for smartphones and desktops',
      'Edge-hosted deployment on Cloudflare Workers infrastructure',
      'Clean product information structure and inquiry flow'
    ],
    techStack: ['Cloudflare Workers', 'JavaScript', 'HTML5', 'Modern CSS', 'Responsive UI'],
    liveUrl: 'https://medistock-pharmacy.alek25860.workers.dev',
    actionLabel: 'View Live Project →'
  },
  'proj-ecommerce': {
    title: 'Modern E-Commerce Store Platform',
    category: 'E-COMMERCE & DIGITAL STORE · LIVE WEB PROJECT',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    objective: 'Build an accessible, fast-loading modern e-commerce platform with intuitive catalog navigation, responsive product showcases, and frictionless browsing.',
    contribution: 'Architected the responsive UI layout, structured the product showcase components, implemented category filters, and configured edge deployment on Cloudflare Workers.',
    overview: 'A modern e-commerce web platform deployed on Cloudflare Workers edge architecture, engineered for fast product discovery, responsive catalog browsing, clean pricing presentation, and an intuitive shopping user experience.',
    deliverables: [
      'Modern, responsive e-commerce storefront with smooth product browsing',
      'Structured product categorization, clean pricing layouts, and item cards',
      'Edge-hosted deployment on Cloudflare Workers for fast global loading',
      'Mobile-optimized shopping cart and inquiry interaction patterns'
    ],
    techStack: ['Cloudflare Workers', 'JavaScript', 'HTML5', 'Modern CSS', 'Responsive UI', 'E-Commerce'],
    liveUrl: 'https://e-commerce.alek25860.workers.dev/',
    actionLabel: 'View Live Store →'
  },
  'proj-yt-aivideo': {
    title: 'AI Video & Creative Experiments',
    category: 'AI VIDEO & CREATIVE EXPERIMENTS · CREATOR PORTFOLIO',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    objective: 'Test and document practical AI video generation capabilities, character consistency, and multimodal content creation workflows.',
    contribution: 'Crafted scene prompts, directed camera choreography, aligned voice synthesis models, and published creative experimental video productions.',
    overview: 'A YouTube channel and experimental lab exploring state-of-the-art generative video models, prompt design for cinematic camera angles, synthetic voiceover integration, and sound design workflows.',
    deliverables: [
      'Multi-scene generative video prompt engineering',
      'Synthetic voiceover design and sound alignment',
      'Cinematic lighting, camera motions, and creative pacing',
      'Active YouTube channel publications (@mdabdulalek2)'
    ],
    techStack: ['Generative Video', 'Voice Synthesis', 'Prompt Design', 'Video Editing', 'YouTube Channel'],
    liveUrl: 'https://www.youtube.com/@mdabdulalek2',
    actionLabel: 'Watch on YouTube →'
  },
  'proj-adobe-stock': {
    title: 'Stock Photography & Digital Assets',
    category: 'STOCK PHOTOGRAPHY & DIGITAL ASSETS · CREATOR PORTFOLIO',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    objective: 'Produce commercially viable, aesthetically refined stock visual assets adhering strictly to marketplace technical and licensing standards.',
    contribution: 'Conceptualized visual themes, authored high-definition asset pipelines, curated submissions, and managed stock metadata tagging on Adobe Stock.',
    overview: 'An active Adobe Stock Contributor portfolio showcasing curated digital imagery, architectural and spatial concepts, and creative backgrounds created for commercial media and marketing projects.',
    deliverables: [
      'Curated collection of high-resolution digital imagery',
      'Compliance with Adobe Stock commercial submission requirements',
      'Architectural, background, and conceptual visual themes',
      'Directly licensable visual library on Adobe Stock'
    ],
    techStack: ['Adobe Stock', 'Digital Asset Curation', 'Visual Art Direction', 'High-Res Upscaling'],
    liveUrl: 'https://stock.adobe.com/contributor/213695412/Md%20Abdul%20Alek',
    actionLabel: 'Explore My Stock Portfolio →'
  },
  'proj-1': {
    title: 'Modern Business & Portfolio Web Architecture',
    category: 'WEB DEVELOPMENT & UI/UX · DEMONSTRATION PROJECT',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    objective: 'Demonstrate how to build a clean corporate or portfolio web presence that communicates services within seconds on any device.',
    contribution: 'Designed the UI layouts, implemented semantic HTML5 and modern CSS, structured the component hierarchy, and ensured full cross-browser mobile responsiveness.',
    overview: 'A responsive, semantic website build designed to demonstrate clean structure, mobile-first design, accessibility considerations, and search engine optimization fundamentals.',
    deliverables: [
      'Mobile-first responsive interface architecture',
      'Fluid typographic scale and high-contrast color palette',
      'Clean semantic HTML5 structure with on-page SEO meta tags',
      'Lightweight navigation with accessible mobile drawer'
    ],
    techStack: ['HTML5', 'Modern CSS', 'JavaScript', 'Tailwind CSS']
  },
  'proj-2': {
    title: 'Domain, DNS & Server Deployment Workflow',
    category: 'HOSTING & INFRASTRUCTURE · ARCHITECTURE CONCEPT',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    objective: 'Provide a reliable, step-by-step technical pipeline for launching and maintaining web applications without configuration errors.',
    contribution: 'Mapped DNS record configurations, documented SSL/TLS provisioning, established automated backup routines, and organized cPanel directory structures.',
    overview: 'A practical deployment blueprint covering custom domain mapping, DNS zone records (A, CNAME, MX, TXT), automated SSL certificates, cPanel directory routing, and backup routines.',
    deliverables: [
      'DNS zone configuration & TTL optimization',
      'SSL/TLS certificate automation and HTTPS redirection',
      'cPanel directory and sub-domain architecture setup',
      'Scheduled database and site backup routines'
    ],
    techStack: ['Domain DNS', 'SSL/TLS', 'cPanel', 'Cloud Hosting', 'Nginx']
  },
  'proj-3': {
    title: 'Smart Task & Workflow Utility Application',
    category: 'AI & DIGITAL SOLUTIONS · FUNCTIONAL PROTOTYPE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    objective: 'Create a clean, distraction-free productivity dashboard with smooth client-side state handling and persistent storage.',
    contribution: 'Engineered the component architecture, state management logic, local storage persistence, responsive table layouts, and search filters.',
    overview: 'An interactive client-side utility interface engineered for organizing daily technical workflows, tracking tasks across stages, and filtering data with zero lag.',
    deliverables: [
      'Interactive task filtering, sorting, and search querying',
      'Client-side state management with local persistence',
      'Multi-breakpoint responsive layouts for phones and desktops',
      'Clean data presentation tables and status chips'
    ],
    techStack: ['JavaScript', 'React Logic', 'CSS Grid', 'Local Storage']
  },
  'proj-4': {
    title: 'Mobile-First Digital Experience Prototype',
    category: 'WEB DEVELOPMENT & UI/UX · FUNCTIONAL PROTOTYPE',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    objective: 'Test and validate responsive touch-friendly navigation patterns and clean typography for mobile visitors.',
    contribution: 'Designed wireframes, structured touch-friendly UI components, implemented fluid transitions, and tested cross-device responsiveness.',
    overview: 'A prototype exploring mobile web ergonomics, touch targets, and accessible interaction patterns for content-heavy web platforms.',
    deliverables: [
      'Thumb-optimized navigation hierarchy',
      'Lightweight gesture and button feedback',
      'Optimized asset loading for cellular connections',
      'Accessible contrast and clean typography'
    ],
    techStack: ['Responsive UI', 'Touch Interactions', 'CSS Flexbox', 'HTML5']
  },
  'proj-5': {
    title: 'AI Prompt Architecture & Visual Asset Pipeline',
    category: 'AI & DIGITAL SOLUTIONS · WORKFLOW CONCEPT',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    objective: 'Establish reliable, reproducible AI image generation workflows that maintain visual consistency across project deliverables.',
    contribution: 'Authored modular prompt structures, tuned camera/lighting parameters, refined image upscaling processes, and cataloged style templates.',
    overview: 'A repeatable creative workflow combining parameter tuning, structured prompt templates, and post-generation enhancement for digital design assets.',
    deliverables: [
      'Modular prompt architecture templates',
      'Controlled lighting and perspective parameters',
      'High-resolution upscaling and artifact cleanup pipeline',
      'Organized visual asset library structure'
    ],
    techStack: ['Prompt Engineering', 'AI Studio', 'Upscaling Tools', 'Digital Media']
  },
  'proj-6': {
    title: 'Multi-Format Digital Content Production System',
    category: 'AI & DIGITAL SOLUTIONS · WORKFLOW CONCEPT',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    objective: 'Streamline the creation of digital presentation assets using prompt engineering, AI text generation, and voice workflows.',
    contribution: 'Designed the end-to-end media production pipeline, connected voice generation tools, and established formatting standards for digital exports.',
    overview: 'A demonstration of how to combine modern AI tools into a coherent production workflow for educational content and brand presentations.',
    deliverables: [
      'Step-by-step content generation pipeline',
      'AI voice model tuning and audio export standards',
      'Visual asset integration with presentation layouts',
      'Repeatable templates for quick project turnaround'
    ],
    techStack: ['AI Workflow Design', 'Voice Synthesis', 'Prompt Design', 'Media Tools']
  }
};

// Modal Handler
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openModal(id) {
  const data = projectData[id];
  if (!data || !modal) return;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalCategory').textContent = data.category;
  document.getElementById('modalImg').src = data.image;
  document.getElementById('modalImg').alt = data.title;
  document.getElementById('modalObjective').textContent = data.objective;
  document.getElementById('modalContribution').textContent = data.contribution;
  document.getElementById('modalOverview').textContent = data.overview;

  const delivList = document.getElementById('modalDeliverables');
  delivList.innerHTML = '';
  data.deliverables.forEach(d => {
    const li = document.createElement('li');
    li.textContent = d;
    delivList.appendChild(li);
  });

  const techBox = document.getElementById('modalTech');
  techBox.innerHTML = '';
  data.techStack.forEach(t => {
    const span = document.createElement('span');
    span.textContent = t;
    techBox.appendChild(span);
  });

  const modalLiveBtn = document.getElementById('modalLiveBtn');
  if (modalLiveBtn) {
    if (data.liveUrl) {
      modalLiveBtn.href = data.liveUrl;
      modalLiveBtn.textContent = data.actionLabel || 'View Live Project →';
      modalLiveBtn.style.display = 'inline-flex';
    } else {
      modalLiveBtn.style.display = 'none';
    }
  }

  const modalScopeNote = document.getElementById('modalScopeNote');
  if (modalScopeNote) {
    modalScopeNote.textContent = data.category || 'Technical Demonstration';
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = btn.getAttribute('data-project');
    openModal(id);
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
    closeModal();
  }
});

// Contact Page Handlers
const copyEmailBtn = document.getElementById('copyEmailBtn');
const contactEmail = document.getElementById('contactEmail');

if (copyEmailBtn && contactEmail) {
  copyEmailBtn.addEventListener('click', () => {
    const email = contactEmail.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      copyEmailBtn.textContent = 'Copied!';
      setTimeout(() => { copyEmailBtn.textContent = 'Copy'; }, 2000);
    });
  });
}

const inquiryForm = document.getElementById('inquiryForm');
const copyDraftBtn = document.getElementById('copyDraftBtn');
const formStatus = document.getElementById('formStatus');

function getDraftBody() {
  if (!inquiryForm) return '';
  const data = new FormData(inquiryForm);
  return [
    'Hello Md. Abdul Alek,',
    '',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Service Category: ${data.get('service')}`,
    '',
    'Project Details:',
    data.get('details'),
    '',
    'Sent via ALEK.DEV Portfolio'
  ].join('\n');
}

if (copyDraftBtn && inquiryForm) {
  copyDraftBtn.addEventListener('click', () => {
    if (!inquiryForm.reportValidity()) return;
    const body = getDraftBody();
    navigator.clipboard.writeText(body).then(() => {
      if (formStatus) {
        formStatus.textContent = 'Inquiry draft copied to clipboard! You can paste and send it from your preferred email service.';
        formStatus.classList.add('visible');
      }
    });
  });
}

if (inquiryForm) {
  inquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const data = new FormData(inquiryForm);
    const honey = data.get('_honey') || '';
    if (honey) {
      if (formStatus) {
        formStatus.textContent = 'Thank you! Your message has been sent directly to alek25860@gmail.com.';
        formStatus.className = 'form-status-msg visible success';
      }
      inquiryForm.reset();
      return;
    }

    const submitBtn = inquiryForm.querySelector('#submitInquiryBtn') || inquiryForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'SEND INQUIRY ↗';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Inquiry...';
    }

    if (formStatus) {
      formStatus.textContent = 'Submitting your inquiry...';
      formStatus.className = 'form-status-msg visible';
    }

    try {
      const payload = {
        name: data.get('name'),
        email: data.get('email'),
        _replyto: data.get('email'),
        service: data.get('service'),
        message: data.get('details'),
        _subject: `New Project Inquiry from ${data.get('name')} (${data.get('service')}) — ALEK.DEV`,
        _template: 'table',
        _captcha: 'false'
      };

      const res = await fetch('https://formsubmit.co/ajax/alek25860@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const resData = await res.json();

      if (res.ok || resData.success === 'true' || resData.success === true) {
        if (formStatus) {
          formStatus.textContent = '✓ Message delivered directly to Md. Abdul Alek (alek25860@gmail.com)! We will review your project and reply shortly.';
          formStatus.className = 'form-status-msg visible success';
        }
        inquiryForm.reset();
      } else {
        throw new Error(resData.message || 'Service returned an error');
      }
    } catch (err) {
      const subject = `Project Inquiry — ${data.get('service')}`;
      const body = getDraftBody();
      const mailto = `mailto:alek25860@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (formStatus) {
        formStatus.innerHTML = `Direct dispatch could not complete. <a href="${mailto}" style="color:#d99a00;text-decoration:underline;font-weight:bold;">Click here to open your email client</a> or send directly to alek25860@gmail.com.`;
        formStatus.className = 'form-status-msg visible';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

// Floating Scroll-To-Top Button
(function() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'scroll-to-top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.setAttribute('title', 'Go to top');
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

