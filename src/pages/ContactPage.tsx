import React, { useState } from 'react';
import { Copy, Check, Mail, MapPin, Globe, Send, MessageSquare, Facebook, Instagram, Youtube } from 'lucide-react';
import { socialProfiles } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const CONTACT_EMAIL = 'alek25860@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getFormattedMessage = () => {
    return [
      'Hello Md. Abdul Alek,',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Service Requested: ${service}`,
      '',
      'Project Details:',
      details.trim(),
      '',
      'Sent via ALEK.DEV Portfolio Contact Form'
    ].join('\n');
  };

  const handleCopyDraft = () => {
    if (!name.trim() || !email.trim() || !service || !details.trim()) {
      setFormStatus('Please complete all fields before copying the draft.');
      return;
    }
    navigator.clipboard.writeText(getFormattedMessage());
    setCopiedDraft(true);
    setFormStatus('Inquiry draft copied to clipboard! You can paste and send it from your preferred email provider.');
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !service || !details.trim()) {
      setFormStatus('Please complete all required fields.');
      return;
    }

    const subject = `Project Inquiry — ${service}`;
    const body = getFormattedMessage();

    setFormStatus(
      `Your email application is opening with your formatted message. If your browser does not open an email client automatically, click "Copy Formatted Draft" below and send it to ${CONTACT_EMAIL}.`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

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
            START A CONVERSATION
          </div>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-[70px] leading-[1.0] text-[#111] my-3">
            HAVE A PROJECT<br />
            <span className="text-[#d99a00]">IN MIND?</span>
          </h1>
          <p className="max-w-[650px] text-xs sm:text-[14px] leading-[1.9] text-[#57534d]">
            Whether you need a new website built, domain and server infrastructure set up, or an application prototype, let's discuss your requirements.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM */}
      <section className="w-[min(1160px,92%)] mx-auto py-12 sm:py-16">
        {/* Contact Strip Panel */}
        <div className="bg-[#171717] text-white rounded-[16px] p-7 sm:p-9 relative overflow-hidden shadow-lg mb-12">
          <div
            className="absolute -right-6 -bottom-16 w-36 h-36 border border-dotted border-[#ffbd20] rounded-full pointer-events-none opacity-40"
            aria-hidden="true"
          />

          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#ffbd20] mb-5">
            VERIFIED DIRECT CHANNELS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Email Channel */}
            <div className="flex items-center justify-between gap-3 border-b md:border-b-0 md:border-r border-neutral-700/80 pb-5 md:pb-0 pr-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#ffbd20] text-[#111] grid place-items-center text-sm font-bold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-white">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#ffbd20] transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </strong>
                  <small className="block text-[#ffbd20] text-[9px] uppercase tracking-wider mt-1">
                    PRIMARY PROJECT INQUIRIES
                  </small>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer border-0"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#ffbd20]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-neutral-700/80 pb-5 md:pb-0 pr-4">
              <div className="w-10 h-10 rounded-md bg-[#ffbd20] text-[#111] grid place-items-center text-sm font-bold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-white">
                  Tongi, Gazipur
                </strong>
                <small className="block text-[#ffbd20] text-[9px] uppercase tracking-wider mt-1">
                  Dhaka Division, Bangladesh
                </small>
              </div>
            </div>

            {/* Worldwide Availability */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#ffbd20] text-[#111] grid place-items-center text-sm font-bold shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-white">
                  Worldwide Remote
                </strong>
                <small className="block text-[#ffbd20] text-[9px] uppercase tracking-wider mt-1">
                  OPEN TO GLOBAL CLIENTS
                </small>
              </div>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="mt-6 pt-6 border-t border-neutral-700/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div>
              <div className="text-[10px] font-bold tracking-wider text-[#ffbd20] uppercase">
                OFFICIAL SOCIAL MEDIA
              </div>
              <div className="text-xs text-neutral-300 mt-0.5">
                Connect directly with @mdabdulalek2 on verified platforms
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={socialProfiles.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#ffbd20] text-white hover:text-[#111] px-3.5 py-2 rounded-md text-xs font-bold transition-all hover:-translate-y-0.5"
                aria-label="Facebook: @mdabdulalek2"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>

              <a
                href={socialProfiles.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#ffbd20] text-white hover:text-[#111] px-3.5 py-2 rounded-md text-xs font-bold transition-all hover:-translate-y-0.5"
                aria-label="Instagram: @mdabdulalek2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href={socialProfiles.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#ffbd20] text-white hover:text-[#111] px-3.5 py-2 rounded-md text-xs font-bold transition-all hover:-translate-y-0.5"
                aria-label="YouTube: @mdabdulalek2"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Inquiry Form */}
        <div className="max-w-[780px] bg-white border border-[#ebe7df] rounded-[14px] p-6 sm:p-9 shadow-xs">
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#a77800] mb-1">
            PROJECT INQUIRY FORM
          </div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#111] m-0 mb-3">
            TELL ME ABOUT YOUR PROJECT
          </h2>
          <p className="text-xs text-[#666] leading-relaxed mb-6">
            Fill in the details below. This static website does not silently store submissions in a database; clicking "Prepare Email Inquiry" prepares a message directly in your email client for full transparency.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold text-[#333] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-[6px] text-xs bg-[#faf9f6] text-[#111] border border-[#dedbd4] focus:outline-none focus:border-[#ffbd20] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-[#333] mb-1.5">
                  Your Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={254}
                  placeholder="e.g. you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-[6px] text-xs bg-[#faf9f6] text-[#111] border border-[#dedbd4] focus:outline-none focus:border-[#ffbd20] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-[11px] font-bold text-[#333] mb-1.5">
                Service Category *
              </label>
              <select
                id="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-3 rounded-[6px] text-xs bg-[#faf9f6] text-[#111] border border-[#dedbd4] focus:outline-none focus:border-[#ffbd20] transition-colors"
              >
                <option value="" disabled>Select service required</option>
                <option value="A. Web Development & UI/UX (Business / Portfolio Site)">A. Web Development &amp; UI/UX (Business / Portfolio Site)</option>
                <option value="B. Hosting & Infrastructure (Domain, DNS, SSL, cPanel)">B. Hosting &amp; Infrastructure (Domain, DNS, SSL, cPanel)</option>
                <option value="C. AI & Digital Solutions (Prototypes, Prompt Workflows)">C. AI &amp; Digital Solutions (Prototypes, Prompt Workflows)</option>
                <option value="Comprehensive Package (Web + Hosting + Setup)">Comprehensive Package (Web + Hosting + Setup)</option>
                <option value="Other Custom Project">Other Custom Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-[11px] font-bold text-[#333] mb-1.5">
                Project Scope &amp; Details *
              </label>
              <textarea
                id="details"
                required
                rows={5}
                maxLength={5000}
                placeholder="Briefly describe what you're looking to build, any technical requirements, or deadlines..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full p-3 rounded-[6px] text-xs bg-[#faf9f6] text-[#111] border border-[#dedbd4] focus:outline-none focus:border-[#ffbd20] transition-colors resize-vertical leading-relaxed"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#ffbd20] hover:bg-[#f4a900] text-[#111] px-6 py-3 rounded-[5px] text-xs font-extrabold transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-0 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>PREPARE EMAIL INQUIRY ↗</span>
              </button>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center justify-center gap-1.5 bg-[#faf9f6] hover:bg-[#eee] text-[#333] border border-[#dedbd4] px-4 py-3 rounded-[5px] text-xs font-bold transition-all cursor-pointer"
              >
                {copiedDraft ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDraft ? 'Draft Copied!' : 'Copy Formatted Draft'}</span>
              </button>
            </div>

            {formStatus && (
              <div className="p-3.5 rounded-[6px] bg-[#fff9ea] border border-[#ffbd20]/50 text-xs text-[#8a5d00] leading-relaxed mt-3" role="status">
                {formStatus}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
