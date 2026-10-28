import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { socialProfiles } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 sm:py-10 border-t border-[#dedbd4]/50 bg-[#faf9f6]">
      <div className="w-[min(1160px,92%)] mx-auto space-y-3">
        <div className="font-display text-xl sm:text-[23px] tracking-[5px] font-semibold text-[#111111] uppercase">
          IDEAS. CRAFTED <span className="text-[#d99a00]">VISUALLY.</span>
        </div>

        <div className="text-[9px] font-bold tracking-[2px] text-[#66635f] uppercase">
          WEB DEVELOPMENT · HOSTING &amp; INFRASTRUCTURE · AI SOLUTIONS
        </div>

        {/* Official Social Links */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <a
            href={socialProfiles.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5"
            aria-label="Facebook: @mdabdulalek2"
            title="Facebook (@mdabdulalek2)"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href={socialProfiles.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5"
            aria-label="Instagram: @mdabdulalek2"
            title="Instagram (@mdabdulalek2)"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href={socialProfiles.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5"
            aria-label="YouTube: @mdabdulalek2"
            title="YouTube (@mdabdulalek2)"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
          <a
            href={socialProfiles.email.url}
            className="w-8 h-8 rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] flex items-center justify-center transition-all hover:-translate-y-0.5"
            aria-label="Email Md. Abdul Alek"
            title="Email (alek25860@gmail.com)"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="text-[10px] text-[#777777] pt-1">
          © {currentYear} Md. Abdul Alek. Web Developer &amp; Digital Solutions Technologist · Tongi, Gazipur, Bangladesh
        </div>
      </div>
    </footer>
  );
};
