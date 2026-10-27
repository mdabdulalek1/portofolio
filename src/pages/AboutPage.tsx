import React from 'react';
import { PageType } from '../types/portfolio';
import { technicalSkillsMatrix, verifiedCredentials } from '../data/portfolioData';
import { Award, GraduationCap, Server, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const principles = [
    {
      num: '01',
      title: 'Clear Communication',
      desc: 'Understand the project goal and agree on exact deliverables, timelines, and technical constraints before work begins.'
    },
    {
      num: '02',
      title: 'Practical Solutions',
      desc: 'Choose tools and frameworks that fit the genuine requirement, avoiding unnecessary complexity or bloated dependencies.'
    },
    {
      num: '03',
      title: 'Responsive by Design',
      desc: 'Build with a mobile-first philosophy, ensuring ergonomics and legible typography on handheld devices up to large screens.'
    },
    {
      num: '04',
      title: 'Maintainable Delivery',
      desc: 'Structure code, directory paths, and documentation cleanly so the client or future maintainers can manage updates with ease.'
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
        <div className="w-[min(1160px,92%)] mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a77800] mb-2">
              ABOUT MD. ABDUL ALEK
            </div>
            <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-[68px] leading-[1.0] text-[#171717] my-3">
              ENGINEERING<br />
              <span className="text-[#d99a00]">MEETS CREATIVITY.</span>
            </h1>
            <p className="max-w-[560px] text-xs sm:text-[14px] leading-[1.9] text-[#686868]">
              I am a Computer Engineering graduate based in Tongi, Gazipur, Bangladesh. I combine front-end development, domain &amp; server setup, and modern AI workflows to bring digital ideas online.
            </p>
          </div>

          {/* Portrait Showcase with Golden Accent */}
          <div className="shrink-0 relative self-center md:self-auto">
            <div className="w-[190px] sm:w-[220px] aspect-square rounded-2xl overflow-hidden border-2 border-[#ffbd20] shadow-[0_12px_30px_rgba(0,0,0,0.06)] bg-[#faf8f3]">
              <img
                src="/public/assets/aistudio/image_0c1aed62.png"
                alt="Md. Abdul Alek — Web Developer & Technologist"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-3 -right-2 bg-white px-3 py-1.5 rounded-md border border-[#eee9e1] shadow-xs text-[10px] font-extrabold text-[#111] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ffbd20]"></span>
              <span>Md. Abdul Alek · CGPA 3.68</span>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND & CREDENTIALS SECTION */}
      <section className="w-[min(1160px,92%)] mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Background & Working Philosophy */}
          <div className="space-y-4">
            <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a77800]">
              BACKGROUND &amp; PHILOSOPHY
            </div>

            <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#111] m-0">
              THINK CLEARLY.<br />
              BUILD WITH <span className="text-[#d99a00]">PURPOSE.</span>
            </h2>

            <p className="text-xs sm:text-[13px] text-[#55514b] leading-[2.0]">
              My technical path began with a rigorous <strong className="text-[#111]">Diploma in Computer Engineering</strong>, where I developed strong foundations in programming logic, computer architecture, network administration, and databases, graduating with a <strong className="text-[#111]">CGPA of 3.68 / 4.00</strong>.
            </p>

            <p className="text-xs sm:text-[13px] text-[#55514b] leading-[2.0]">
              To expand practical capabilities, I completed specialized <strong className="text-[#111]">Advanced AI &amp; Digital Workflow Training</strong> under the Department of Youth Development in Tongi, Gazipur. This experience taught me how to integrate prompt engineering, image generation pipelines, and automation tools into client projects.
            </p>

            <p className="text-xs sm:text-[13px] text-[#55514b] leading-[2.0]">
              I see web development as an end-to-end craft: not just writing HTML, CSS, and JavaScript, but also ensuring DNS zones are routed properly, SSL encryption is tight, servers are healthy, and user interfaces are responsive.
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#ffbd20] hover:bg-[#f4a900] text-[#111] px-5 py-3 rounded-[5px] text-xs font-extrabold transition-all hover:-translate-y-0.5 border-0 cursor-pointer shadow-xs"
              >
                DISCUSS A PROJECT ↗
              </button>
            </div>
          </div>

          {/* Right Column: Verified Credentials Panel */}
          <div className="bg-white border border-[#ebe7df] rounded-[12px] p-6 sm:p-7 shadow-xs space-y-6">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-4 pb-2 border-b border-[#f0ede6]">
                ACADEMIC &amp; TECHNICAL CREDENTIALS
              </h3>

              <div className="space-y-4">
                {verifiedCredentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 pb-4 border-b border-[#f0ede6] last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-md bg-[#fff3cf] flex items-center justify-center text-sm font-bold text-[#d99a00] shrink-0 mt-0.5">
                      {idx === 0 && <GraduationCap className="w-4 h-4 text-[#d99a00]" />}
                      {idx === 1 && <Award className="w-4 h-4 text-[#d99a00]" />}
                      {idx === 2 && <Server className="w-4 h-4 text-[#d99a00]" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111] m-0 leading-snug">
                        {cred.title}
                      </h4>
                      <p className="text-[10px] text-[#d99a00] font-semibold mt-0.5 m-0">
                        {cred.institution}
                      </p>
                      <p className="text-[11px] text-[#666] mt-1 m-0 leading-relaxed">
                        {cred.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div className="pt-2 border-t border-[#f0ede6]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#111] mb-3">
                CONCISE TECHNICAL SKILLS MATRIX
              </h3>

              <div className="space-y-3">
                {Object.entries(technicalSkillsMatrix).map(([key, group]) => (
                  <div key={key} className="bg-[#faf9f6] p-3 rounded-[6px] border border-[#eee9e1]">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#a77800] mb-1.5">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] font-medium bg-white text-[#222] px-2 py-0.5 rounded border border-[#e5e1d8]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 WORK PRINCIPLES */}
      <section className="w-[min(1160px,92%)] mx-auto py-10 sm:py-14 border-t border-[#dedbd4]/60 mb-8">
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a77800] mb-1">
          WORK PRINCIPLES
        </div>
        <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#111] m-0 mb-8">
          WHAT YOU CAN EXPECT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p) => (
            <article key={p.num} className="bg-white border border-[#e9e5dd] rounded-[9px] p-5 shadow-xs">
              <div className="font-display text-[#d99a00] text-3xl leading-none mb-2">
                {p.num}
              </div>
              <h3 className="text-xs font-bold text-[#111] leading-snug mb-2">
                {p.title}
              </h3>
              <p className="text-[11px] leading-[1.8] text-[#666] m-0">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
