import React from 'react';
import { PageType } from '../types/portfolio';
import { creativeProjects, technicalSkillsMatrix, socialProfiles } from '../data/portfolioData';
import { Globe, Server, Cpu, ArrowUpRight, CheckCircle2, Code2, Database, Brain, Facebook, Instagram, Youtube, Mail, Pill, Camera, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Featured 3 projects for homepage
  const featuredProjects = creativeProjects.slice(0, 3);

  return (
    <div className="bg-[#FAF8F3] text-[#171717]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-6 sm:pt-10 sm:pb-8">
        {/* Subtle Organic Background Accents matching reference image */}
        <div
          className="absolute -left-16 -top-16 w-[220px] h-[220px] bg-[#FFBD20] rounded-[0_0_85%_0] pointer-events-none z-0 opacity-90"
          aria-hidden="true"
        />

        <div className="w-[min(1180px,92%)] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-6 items-center min-h-[480px]">
            {/* Left Column: Name & Positioning */}
            <div className="space-y-4 pt-2">
              <div className="font-script text-[#FFBD20] sm:text-[#D99A00] text-3xl sm:text-[38px] leading-tight select-none font-bold">
                Hi, I'm
              </div>

              {/* MD. ABDUL ALEK - Shown strictly once in the hero */}
              <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[86px] leading-[0.95] tracking-[-1.5px] text-[#171717] m-0 font-bold">
                MD. ABDUL<br />ALEK
              </h1>

              {/* Role pill badge */}
              <div className="pt-1">
                <span className="inline-block bg-[#FFBD20] text-[#171717] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.6px] rounded-[4px] shadow-xs">
                  WEB DEVELOPER | IT TECHNOLOGIST
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-xl sm:text-[23px] font-bold tracking-tight text-[#171717] leading-snug pt-1 m-0">
                I Build <span className="text-[#D99A00]">Digital Solutions.</span><br />
                I Engineer <span className="text-[#D99A00]">Possibilities.</span>
              </h2>

              {/* Introduction Paragraph */}
              <p className="text-xs sm:text-[13px] text-[#686868] leading-[1.9] max-w-[480px] m-0">
                I'm Md. Abdul Alek, a Computer Engineering graduate. I build responsive websites, create practical digital experiences, and handle the technical infrastructure that brings them online.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#FFBD20] hover:bg-[#F4A900] text-[#171717] px-6 py-3.5 rounded-[6px] text-xs font-extrabold transition-all hover:-translate-y-0.5 border-0 cursor-pointer shadow-xs"
                >
                  EXPLORE MY WORK ↗
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-white text-[#171717] border border-[#DEDBD4] px-6 py-3.5 rounded-[6px] text-xs font-extrabold transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  LET'S CONNECT
                </button>
              </div>

              {/* Social Channels & Connect Tag */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href={socialProfiles.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5 text-xs font-bold"
                  aria-label="Facebook: @mdabdulalek2"
                  title="Facebook (@mdabdulalek2)"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={socialProfiles.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5 text-xs font-bold"
                  aria-label="Instagram: @mdabdulalek2"
                  title="Instagram (@mdabdulalek2)"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={socialProfiles.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5 text-xs font-bold"
                  aria-label="YouTube: @mdabdulalek2"
                  title="YouTube (@mdabdulalek2)"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href={socialProfiles.email.url}
                  className="w-[36px] h-[36px] rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5 text-xs font-bold"
                  aria-label="Email Md. Abdul Alek"
                  title="Email: alek25860@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <div className="border-l border-[#DEDBD4] pl-3 text-[11px] font-bold text-[#686868] leading-tight">
                  Let's Connect<br /><span className="text-[#171717]">&amp; Create</span>
                </div>
              </div>
            </div>

            {/* Right Column: Seamless Portrait (NO rectangular border, NO white card, NO rounded frame, NO shadow box, NO duplicate badge) */}
            <div className="relative flex justify-center items-center select-none">
              <div className="relative w-full max-w-[540px] lg:max-w-[580px] flex items-center justify-center">
                <img
                  src="/assets/aistudio/alek_transparent.png"
                  alt="Md. Abdul Alek"
                  className="w-full h-auto max-h-[560px] object-contain drop-shadow-none"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                  }}
                  onError={(e) => {
                    // Fallback to blended image asset if needed
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('alek_blended.png')) {
                      target.src = '/assets/aistudio/alek_blended.png';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLAR SUMMARY STRIP (Directly under Hero, matching reference image) */}
      <section className="w-[min(1180px,92%)] mx-auto py-6 sm:py-8 border-t border-b border-[#DEDBD4]/70">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#DEDBD4]/70">
          <div className="flex items-center gap-4 py-2 md:py-0 md:px-4 first:pl-0">
            <div className="w-12 h-12 rounded-[10px] bg-[#FFF3CF] flex items-center justify-center text-[#171717] shrink-0 font-mono text-sm font-bold">
              <Code2 className="w-5 h-5 text-[#171717]" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#171717] m-0">Web Development</h3>
              <p className="text-xs text-[#686868] m-0 mt-0.5">Modern &amp; Responsive</p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-3 md:py-0 md:px-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#FFF3CF] flex items-center justify-center text-[#171717] shrink-0 font-mono text-sm font-bold">
              <Database className="w-5 h-5 text-[#171717]" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#171717] m-0">Hosting &amp; IT</h3>
              <p className="text-xs text-[#686868] m-0 mt-0.5">Secure &amp; Reliable</p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-3 md:py-0 md:px-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#FFF3CF] flex items-center justify-center text-[#171717] shrink-0 font-mono text-sm font-bold">
              <Brain className="w-5 h-5 text-[#171717]" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#171717] m-0">AI Solutions</h3>
              <p className="text-xs text-[#686868] m-0 mt-0.5">Creative &amp; Smart</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE DETAILED SERVICE CARDS */}
      <section className="w-[min(1180px,92%)] mx-auto py-12 sm:py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#A77800] mb-1">
            CORE CAPABILITIES
          </div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#171717] m-0">
            WHAT I CAN BUILD FOR YOU
          </h2>
          <p className="text-xs sm:text-[13px] text-[#686868] leading-relaxed mt-2">
            Clear, demonstrable technical services delivered from initial planning to live production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service A */}
          <article className="bg-white border border-[#EBE7DF] rounded-[12px] p-6 shadow-xs hover:border-[#FFBD20] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFBD20] flex items-center justify-center text-[#171717] mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#171717] mb-2 tracking-wide">
                A. Web Development &amp; UI/UX
              </h3>
              <p className="text-xs text-[#686868] leading-relaxed mb-4">
                Fast, responsive websites built with clean code and modern interface design principles.
              </p>
              <ul className="space-y-2 text-xs text-[#444] border-t border-[#F0EDE6] pt-4 list-none p-0 m-0">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Business websites &amp; company pages
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Personal portfolios &amp; creator sites
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Conversion-focused landing pages
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Responsive interfaces &amp; web-based tools
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-4 border-t border-[#F0EDE6]">
              <button
                type="button"
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[11px] font-extrabold text-[#D99A00] hover:text-[#B67E00] flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer"
              >
                <span>Explore Web Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Service B */}
          <article className="bg-white border border-[#EBE7DF] rounded-[12px] p-6 shadow-xs hover:border-[#FFBD20] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFBD20] flex items-center justify-center text-[#171717] mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#171717] mb-2 tracking-wide">
                B. Hosting &amp; Technical Infrastructure
              </h3>
              <p className="text-xs text-[#686868] leading-relaxed mb-4">
                Hands-on domain routing, SSL certificate setup, and reliable server deployment.
              </p>
              <ul className="space-y-2 text-xs text-[#444] border-t border-[#F0EDE6] pt-4 list-none p-0 m-0">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Domain and DNS zone configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  SSL certificate installation &amp; HTTPS security
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  cPanel and cloud hosting environment setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Website deployment, migration &amp; maintenance
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-4 border-t border-[#F0EDE6]">
              <button
                type="button"
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[11px] font-extrabold text-[#D99A00] hover:text-[#B67E00] flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer"
              >
                <span>Explore Hosting &amp; IT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Service C */}
          <article className="bg-white border border-[#EBE7DF] rounded-[12px] p-6 shadow-xs hover:border-[#FFBD20] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFBD20] flex items-center justify-center text-[#171717] mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#171717] mb-2 tracking-wide">
                C. AI &amp; Digital Solutions
              </h3>
              <p className="text-xs text-[#686868] leading-relaxed mb-4">
                Practical application prototyping and structured AI-assisted media workflows.
              </p>
              <ul className="space-y-2 text-xs text-[#444] border-t border-[#F0EDE6] pt-4 list-none p-0 m-0">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Interactive application prototypes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  AI-assisted creative workflows &amp; asset pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Prompt engineering &amp; style consistency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD20]"></span>
                  Practical automation &amp; digital content workflows
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-4 border-t border-[#F0EDE6]">
              <button
                type="button"
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[11px] font-extrabold text-[#D99A00] hover:text-[#B67E00] flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer"
              >
                <span>Explore AI Solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURED PROJECTS (DEMONSTRATIONS & PROTOTYPES) */}
      <section className="w-[min(1180px,92%)] mx-auto py-12 sm:py-14 border-t border-[#DEDBD4]/70">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#A77800] mb-1">
              DEMONSTRATION &amp; PROTOTYPE WORK
            </div>
            <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#171717] m-0">
              FEATURED PROJECTS
            </h2>
            <p className="text-xs text-[#686868] mt-1">
              Demonstration builds highlighting architecture, code, and user experience.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border border-[#BDB8AD] hover:bg-white text-[#171717] px-4 py-2.5 rounded-[5px] text-[11px] font-extrabold transition-all hover:-translate-y-0.5 bg-transparent cursor-pointer shrink-0 self-start sm:self-auto"
          >
            VIEW ALL WORK ↗
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((proj) => (
            <article
              key={proj.id}
              onClick={() => {
                onNavigate('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-[#EBE7DF] rounded-[10px] overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[200px] overflow-hidden bg-[#eee]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-[4px] text-[9px] font-bold tracking-wider uppercase">
                    {proj.projectType}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[9px] font-extrabold text-[#A77800] uppercase tracking-[1px] mb-1.5">
                    {proj.categoryLabel}
                  </div>
                  <h3 className="text-sm font-bold text-[#171717] leading-snug group-hover:text-[#D99A00] transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#555] leading-relaxed mb-3">
                    {proj.description}
                  </p>

                  <div className="bg-[#FAF8F3] p-3 rounded-[6px] border border-[#F0EDE6] text-[11px] text-[#444] space-y-1 mb-3">
                    <div>
                      <strong className="text-[#171717]">Objective:</strong> {proj.objective}
                    </div>
                    <div>
                      <strong className="text-[#171717]">Contribution:</strong> {proj.contribution}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <div className="flex flex-wrap gap-1.5 border-t border-[#F0EDE6] pt-3 mb-3">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-semibold bg-[#F4F2EC] text-[#333] px-2 py-0.5 rounded-[3px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1.5 w-full bg-[#FFBD20] hover:bg-[#F4A900] text-[#171717] px-3.5 py-2.5 rounded-[5px] text-[11px] font-extrabold transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    {proj.iconType === 'pill' && <Pill className="w-3.5 h-3.5" />}
                    {proj.iconType === 'youtube' && <Youtube className="w-3.5 h-3.5" />}
                    {proj.iconType === 'camera' && <Camera className="w-3.5 h-3.5" />}
                    {!['pill', 'youtube', 'camera'].includes(proj.iconType || '') && <ExternalLink className="w-3.5 h-3.5" />}
                    <span>{proj.actionLabel || 'View Live Project →'}</span>
                  </a>
                ) : (
                  <div className="text-right">
                    <span className="text-[10px] font-extrabold text-[#D99A00] group-hover:underline">
                      Explore Blueprint ↗
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMPACT SKILLS OVERVIEW */}
      <section className="w-[min(1180px,92%)] mx-auto py-12 border-t border-[#DEDBD4]/70">
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#A77800] mb-1">
          TECHNICAL STACK
        </div>
        <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#171717] m-0 mb-6">
          COMPACT SKILLS OVERVIEW
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(technicalSkillsMatrix).map(([key, group]) => (
            <div key={key} className="bg-white border border-[#EBE7DF] rounded-[10px] p-5 shadow-xs">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#171717] mb-3 pb-2 border-b border-[#F0EDE6] flex items-center justify-between">
                <span>{group.category}</span>
                <span className="w-2 h-2 rounded-full bg-[#FFBD20]"></span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-medium bg-[#F9F8F5] text-[#222] px-2.5 py-1.5 rounded-[4px] border border-[#E8E4DC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHORT ABOUT PREVIEW */}
      <section className="w-[min(1180px,92%)] mx-auto py-12 border-t border-[#DEDBD4]/70">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-center bg-white border border-[#EBE7DF] rounded-[14px] p-6 sm:p-8 shadow-xs">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#A77800] mb-2">
              ABOUT THE DEVELOPER
            </div>
            <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#171717] m-0 mb-3">
              FOCUSED ON PRACTICAL RESULTS
            </h2>
            <p className="text-xs sm:text-[13px] text-[#686868] leading-[1.9] mb-4">
              I graduated with a Diploma in Computer Engineering and hold specialized training from the Department of Youth Development in Tongi, Gazipur. My focus is on writing clean, accessible code, configuring stable server environments, and integrating modern AI tools to accelerate workflows without compromising clarity.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D99A00] hover:text-[#B67E00] bg-transparent border-0 p-0 cursor-pointer"
              >
                <span>Read Full Background &amp; Credentials ↗</span>
              </button>
            </div>
          </div>

          <div className="bg-[#FAF8F3] border border-[#DEDBD4] rounded-[10px] p-5 space-y-3 text-xs text-[#333]">
            <div className="font-bold text-[#A77800] text-[11px] uppercase tracking-wider">
              Key Highlights
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D99A00] shrink-0 mt-0.5" />
              <span>Diploma in Computer Engineering (academic foundations in systems &amp; software)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D99A00] shrink-0 mt-0.5" />
              <span>Advanced AI &amp; Digital Workflow Training (Dept. of Youth Development, Tongi)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D99A00] shrink-0 mt-0.5" />
              <span>Practical server administration: domain DNS, SSL/TLS, and cPanel</span>
            </div>
          </div>
        </div>
      </section>

      {/* STRONG CONTACT CTA */}
      <section className="w-[min(1180px,92%)] mx-auto py-8 mb-8">
        <div className="bg-[#171717] text-white rounded-[17px] p-7 sm:p-10 relative overflow-hidden shadow-lg">
          <div
            className="absolute -right-6 -bottom-16 w-36 h-36 border border-dotted border-[#FFBD20] rounded-full pointer-events-none opacity-40"
            aria-hidden="true"
          />
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#FFBD20]">
            READY TO COLLABORATE?
          </div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-white my-3">
            LET'S DISCUSS YOUR PROJECT.
          </h2>
          <p className="text-xs text-[#DDDDDD] leading-[1.9] max-w-[580px] mb-5">
            Whether you need a new website, domain &amp; hosting configuration, or an application prototype, I am available for worldwide freelance and remote opportunities.
          </p>
          <button
            type="button"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#FFBD20] hover:bg-[#F4A900] text-[#171717] px-5 py-3 rounded-[5px] text-[11px] font-extrabold transition-all hover:-translate-y-0.5 cursor-pointer border-0 shadow-sm"
          >
            START A PROJECT CONVERSATION ↗
          </button>
        </div>
      </section>
    </div>
  );
};
