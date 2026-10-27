import React from 'react';
import { PageType } from '../types/portfolio';
import { Globe, Server, Cpu, Check, Layers, Code2, ShieldCheck, RefreshCw } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const serviceCategories = [
    {
      id: 'web-dev',
      letter: 'A',
      title: 'Web Development & UI/UX',
      icon: Globe,
      summary: 'Building fast, responsive, and easy-to-navigate websites tailored to your specific audience and business objectives.',
      deliverables: [
        {
          name: 'Business Websites',
          desc: 'Clean corporate and company pages with clear service offerings, contact pathways, and mobile responsiveness.'
        },
        {
          name: 'Personal Portfolios',
          desc: 'Distinguished portfolio sites for consultants, creatives, technologists, and independent professionals.'
        },
        {
          name: 'Landing Pages',
          desc: 'Focused single-page sites designed to showcase a single product, service, or event with clear calls to action.'
        },
        {
          name: 'Responsive Interfaces',
          desc: 'Mobile-first layouts tested across smartphones, tablets, laptops, and ultra-wide desktop monitors.'
        },
        {
          name: 'Web-Based Tools',
          desc: 'Interactive calculators, form builders, and client-side utilities with clean JavaScript logic.'
        }
      ]
    },
    {
      id: 'hosting-infra',
      letter: 'B',
      title: 'Hosting & Technical Infrastructure',
      icon: Server,
      summary: 'Hands-on domain routing, SSL certificate setup, and server management to keep your web presence secure and accessible.',
      deliverables: [
        {
          name: 'Domain & DNS Configuration',
          desc: 'Custom domain mapping, DNS zone file records (A, CNAME, MX, TXT), and TTL calibration.'
        },
        {
          name: 'SSL Setup',
          desc: 'Provisioning and configuring SSL/TLS certificates for HTTPS encryption and security badge compliance.'
        },
        {
          name: 'cPanel & Cloud Hosting',
          desc: 'Setting up hosting accounts, directory structures, FTP accounts, database connections, and sub-domains.'
        },
        {
          name: 'Website Deployment & Migration',
          desc: 'Moving files, assets, and databases from local development or old hosts to new servers with minimal downtime.'
        },
        {
          name: 'Technical Maintenance',
          desc: 'Regular updates, broken link fixes, asset optimization, database backups, and health checks.'
        }
      ]
    },
    {
      id: 'ai-solutions',
      letter: 'C',
      title: 'AI & Digital Solutions',
      icon: Cpu,
      summary: 'Using modern AI-assisted engineering and prompt architecture to prototype interfaces and produce digital media efficiently.',
      deliverables: [
        {
          name: 'Application Prototypes',
          desc: 'Interactive client-side prototypes to test product concepts, user flows, and interface layouts before full backend build.'
        },
        {
          name: 'AI-Assisted Creative Workflows',
          desc: 'Structured generation of tailored visual assets, architectural concepts, and graphics using refined AI tools.'
        },
        {
          name: 'Prompt Engineering',
          desc: 'Carefully tuned text and image prompts designed to produce predictable, high-quality outputs with visual consistency.'
        },
        {
          name: 'Digital Content Workflows',
          desc: 'Multi-modal workflows connecting copy, voice synthesis, and visual assets into cohesive presentation packages.'
        },
        {
          name: 'Practical Automation Concepts',
          desc: 'Streamlining repetitive digital tasks through lightweight scripts and AI-assisted workflows.'
        }
      ]
    }
  ];

  const deliverySteps = [
    {
      step: '01',
      title: 'Clarify & Plan',
      icon: Layers,
      description: 'We define the project goal, audience, requirements, content, and timeline before writing code.'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      icon: Code2,
      description: 'We structure the wireframes, responsive layouts, color harmony, and content hierarchy for review.'
    },
    {
      step: '03',
      title: 'Build & Test',
      icon: ShieldCheck,
      description: 'We write clean, semantic code, test responsiveness across multiple devices, and verify interactions.'
    },
    {
      step: '04',
      title: 'Deploy & Maintain',
      icon: RefreshCw,
      description: 'We configure domains, SSL, hosting, verify live URLs, and agree on any needed maintenance support.'
    }
  ];

  return (
    <div>
      {/* PAGE HERO */}
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-[#dedbd4]/50">
        <div
          className="absolute -right-28 -top-20 w-[330px] h-[330px] rounded-full bg-[#ffbd20]/20 pointer-events-none"
          aria-hidden="true"
        />
        <div className="w-[min(1160px,92%)] mx-auto relative z-10">
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a77800] mb-2">
            PRACTICAL TECHNICAL SERVICES
          </div>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-[70px] leading-[1.0] text-[#111] my-3">
            TECHNICAL EXPERTISE.<br />
            <span className="text-[#d99a00]">RELIABLE EXECUTION.</span>
          </h1>
          <p className="max-w-[650px] text-xs sm:text-[14px] leading-[1.9] text-[#57534d]">
            Focused services across three core areas: front-end web development, technical server infrastructure, and AI-assisted digital solutions. I deliver demonstrable work without unsupported claims.
          </p>
        </div>
      </section>

      {/* 3 CORE SERVICE CATEGORIES */}
      <section className="w-[min(1160px,92%)] mx-auto py-12 sm:py-16 space-y-10">
        {serviceCategories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <article
              key={cat.id}
              className="bg-white border border-[#ebe7df] rounded-[14px] p-6 sm:p-9 shadow-xs hover:border-[#ffbd20] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#f0ede6]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ffbd20] flex items-center justify-center text-[#111] shrink-0 mt-0.5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#a77800]">
                      CATEGORY {cat.letter}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#111] m-0">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-[#555] leading-relaxed mt-1 max-w-2xl">
                      {cat.summary}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="self-start md:self-auto bg-[#faf9f6] hover:bg-[#ffbd20] text-[#111] border border-[#dedbd4] hover:border-[#ffbd20] px-4 py-2 rounded-[5px] text-[11px] font-extrabold transition-all cursor-pointer shrink-0"
                >
                  INQUIRE ABOUT THIS ↗
                </button>
              </div>

              {/* Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                {cat.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-[#faf9f6] p-4 rounded-[8px] border border-[#eee9e1]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd20]"></span>
                      <h3 className="text-xs font-bold text-[#111] m-0">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-[11px] text-[#666] leading-relaxed m-0 pl-3.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      {/* 4-STEP DELIVERY PIPELINE */}
      <section className="w-[min(1160px,92%)] mx-auto py-10 sm:py-14 border-t border-[#dedbd4]/60">
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a77800] mb-1">
          HOW I WORK
        </div>
        <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#111] m-0 mb-3">
          FROM IDEA TO DEPLOYMENT
        </h2>
        <p className="max-w-[650px] text-xs sm:text-[13px] leading-[1.9] text-[#666] mb-8">
          A structured 4-stage process ensures transparency, realistic expectations, and organized project delivery from the first consultation through post-launch verification.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverySteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.step} className="bg-white border border-[#e9e5dd] rounded-[10px] p-5 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-[#d99a00] text-3xl leading-none">
                    {step.step}
                  </span>
                  <Icon className="w-5 h-5 text-[#888]" />
                </div>
                <h3 className="text-xs font-bold text-[#111] leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] leading-[1.8] text-[#666] m-0">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CONTACT TEASER */}
      <section className="w-[min(1160px,92%)] mx-auto py-8 mb-8">
        <div className="bg-[#171717] text-white rounded-[17px] p-7 sm:p-9 relative overflow-hidden shadow-lg">
          <div
            className="absolute -right-6 -bottom-16 w-36 h-36 border border-dotted border-[#ffbd20] rounded-full pointer-events-none opacity-40"
            aria-hidden="true"
          />
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#ffbd20] mb-2">
            HAVE A PROJECT SPECIFICATION?
          </div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-white my-3">
            LET'S DISCUSS YOUR SCOPE.
          </h2>
          <p className="text-xs text-[#dddddd] leading-[1.9] max-w-[580px] mb-5">
            Send me an overview of what you are planning to build. I provide clear communication and realistic project timelines.
          </p>
          <button
            type="button"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#ffbd20] hover:bg-[#f4a900] text-[#111] px-5 py-3 rounded-[5px] text-[11px] font-extrabold transition-all hover:-translate-y-0.5 cursor-pointer border-0 shadow-sm"
          >
            REQUEST A QUOTE ↗
          </button>
        </div>
      </section>
    </div>
  );
};
