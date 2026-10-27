import React, { useState } from 'react';
import { creativeProjects, CreativeProject } from '../data/portfolioData';
import { X, Layers, Code, CheckCircle, Info, Pill, Youtube, Camera, ExternalLink, ArrowUpRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'app' | 'ai'>('all');
  const [selectedProject, setSelectedProject] = useState<CreativeProject | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = creativeProjects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  const filterButtons: { label: string; value: 'all' | 'web' | 'app' | 'ai' }[] = [
    { label: 'ALL WORK', value: 'all' },
    { label: 'WEB & HOSTING', value: 'web' },
    { label: 'APPLICATIONS', value: 'app' },
    { label: 'AI & DIGITAL SOLUTIONS', value: 'ai' },
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
            PROJECT PORTFOLIO
          </div>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-[70px] leading-[1.0] text-[#111] my-3">
            TECHNICAL BUILDS &amp;<br />
            <span className="text-[#d99a00]">DEMONSTRATION PROJECTS.</span>
          </h1>
          <p className="max-w-[660px] text-xs sm:text-[14px] leading-[1.9] text-[#57534d]">
            A showcase of demonstration web platforms, application prototypes, infrastructure blueprints, and AI creative workflows. Each project clearly outlines its specific objective, architecture, and my direct contribution.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="w-[min(1160px,92%)] mx-auto py-10 sm:py-14">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter portfolio projects">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              type="button"
              onClick={() => setFilter(btn.value)}
              className={`px-3 py-2 rounded-[4px] text-[10px] font-extrabold transition-all border cursor-pointer ${
                filter === btn.value
                  ? 'bg-[#ffbd20] border-[#ffbd20] text-[#111]'
                  : 'bg-transparent border-[#d8d2c7] text-[#111] hover:bg-[#ffbd20] hover:border-[#ffbd20]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <article
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-white border border-[#ebe7df] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-full h-48 bg-[#eee] overflow-hidden relative">
                  {!imgErrors[proj.id] ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setImgErrors((prev) => ({ ...prev, [proj.id]: true }))}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#f7f5f0] text-xs font-bold text-[#666]">
                      {proj.title}
                    </div>
                  )}

                  <div className="absolute top-2.5 left-2.5 bg-[#111]/85 backdrop-blur-xs text-white px-2 py-0.5 rounded-[3px] text-[9px] font-bold tracking-wider uppercase">
                    {proj.projectType}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[9px] font-extrabold text-[#a77800] uppercase tracking-[1px] mb-1.5">
                    {proj.categoryLabel}
                  </div>

                  <h3 className="text-sm font-bold text-[#111] group-hover:text-[#d99a00] transition-colors leading-snug mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#555] leading-[1.8] m-0 mb-3 line-clamp-2">
                    {proj.description}
                  </p>

                  <div className="bg-[#faf9f6] p-3 rounded-[6px] border border-[#f0ede6] text-[11px] text-[#444] space-y-1">
                    <div>
                      <strong className="text-[#111]">Objective:</strong> {proj.objective}
                    </div>
                    <div>
                      <strong className="text-[#111]">Contribution:</strong> {proj.contribution}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="flex flex-wrap gap-1.5 border-t border-[#f0ede6] pt-3 mb-3">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-semibold bg-[#f4f2ec] text-[#333] px-2 py-0.5 rounded-[3px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {proj.liveUrl ? (
                  <div className="space-y-2">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-1.5 w-full bg-[#ffbd20] hover:bg-[#f4a900] text-[#111] px-3.5 py-2.5 rounded-[5px] text-[11px] font-extrabold transition-all hover:-translate-y-0.5 shadow-xs"
                    >
                      {proj.iconType === 'pill' && <Pill className="w-3.5 h-3.5" />}
                      {proj.iconType === 'youtube' && <Youtube className="w-3.5 h-3.5" />}
                      {proj.iconType === 'camera' && <Camera className="w-3.5 h-3.5" />}
                      {!['pill', 'youtube', 'camera'].includes(proj.iconType || '') && <ExternalLink className="w-3.5 h-3.5" />}
                      <span>{proj.actionLabel || 'View Live Project →'}</span>
                    </a>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-[#686868] hover:text-[#111] hover:underline">
                        View Technical Specification ↗
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-right">
                    <span className="text-[10px] font-extrabold text-[#d99a00] group-hover:underline">
                      View Specification ↗
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Honest Disclosure Note */}
        <div className="mt-10 p-4 rounded-[8px] bg-white border border-[#ebe7df] flex items-start gap-3 text-xs text-[#666]">
          <Info className="w-5 h-5 text-[#d99a00] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#111] block mb-0.5">Portfolio Transparency Note</strong>
            The projects above are personal technical demonstrations, architecture concepts, and prototypes engineered by Md. Abdul Alek to illustrate specific coding, hosting, and AI workflow capabilities.
          </div>
        </div>
      </section>

      {/* DETAILED PROJECT SPECIFICATION MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#faf9f6] rounded-[14px] border border-[#dedbd4] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#faf9f6]/95 backdrop-blur-md px-6 py-4 border-b border-[#dedbd4] flex items-center justify-between z-10">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#a77800]">
                  {selectedProject.categoryLabel} · {selectedProject.projectType}
                </span>
                <h3 id="modal-title" className="text-base font-extrabold text-[#111] m-0">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#dedbd4] flex items-center justify-center text-[#111] hover:bg-[#ffbd20] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div className="w-full h-56 rounded-lg overflow-hidden bg-neutral-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-1.5">
                  Project Objective
                </h4>
                <p className="text-xs text-[#555] leading-relaxed m-0 bg-white p-3.5 rounded-md border border-[#ebe7df]">
                  {selectedProject.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-1.5">
                  My Specific Contribution
                </h4>
                <p className="text-xs text-[#555] leading-relaxed m-0 bg-white p-3.5 rounded-md border border-[#ebe7df]">
                  {selectedProject.contribution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-1.5">
                  Full Overview
                </h4>
                <p className="text-xs text-[#555] leading-relaxed m-0">
                  {selectedProject.fullOverview}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#d99a00]" />
                  <span>Key Deliverables &amp; Technical Scope</span>
                </h4>
                <ul className="space-y-1.5 list-none p-0 m-0 text-xs text-[#444]">
                  {selectedProject.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white px-3 py-2 rounded border border-[#ebe7df]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd20] mt-1.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-2 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#d99a00]" />
                  <span>Technologies &amp; Tools Used</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold bg-[#ffbd20]/20 text-[#111] px-2.5 py-1 rounded-[4px] border border-[#ffbd20]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-white border-t border-[#dedbd4] flex flex-wrap justify-between items-center gap-3">
              <span className="text-[10px] text-[#666]">
                Identified as: {selectedProject.projectType}
              </span>
              <div className="flex items-center gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#ffbd20] hover:bg-[#f4a900] text-[#111] px-4 py-2 rounded text-xs font-extrabold transition-all shadow-xs"
                  >
                    {selectedProject.iconType === 'pill' && <Pill className="w-3.5 h-3.5" />}
                    {selectedProject.iconType === 'youtube' && <Youtube className="w-3.5 h-3.5" />}
                    {selectedProject.iconType === 'camera' && <Camera className="w-3.5 h-3.5" />}
                    {!['pill', 'youtube', 'camera'].includes(selectedProject.iconType || '') && <ExternalLink className="w-3.5 h-3.5" />}
                    <span>{selectedProject.actionLabel || 'View Live Project →'}</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#111] text-white hover:bg-[#d99a00] px-4 py-2 rounded text-xs font-bold transition-colors cursor-pointer border-0"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
