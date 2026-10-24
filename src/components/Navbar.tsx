import React from 'react';

interface NavbarProps {
  onOpenLicensing: () => void;
  onOpenSoundLab: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLicensing, onOpenSoundLab }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090a0f]/90 border-b border-[#20222e]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark with creator portrait */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 group"
        >
          <img 
            src="/assets/aistudio/WhatsApp_Image_2026-10-24_at_4.03.01_PM_d12c0709.jpeg" 
            alt="Arfa Anjum" 
            className="w-8 h-8 rounded-full object-cover object-top border border-amber-400/40 group-hover:border-amber-400 transition-colors"
          />
          <span>Arfa Anjum</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#discography" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Discography
          </a>
          <button 
            onClick={onOpenSoundLab}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Neural Sound Lab
          </button>
          <a href="#philosophy" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Process & Bio
          </a>
          <a href="#accolades" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Accolades
          </a>
          <a href="#licensing" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Licensing Desk
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button 
            onClick={onOpenLicensing}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            License Track / Hire
          </button>
        </div>
      </div>
    </header>
  );
};
