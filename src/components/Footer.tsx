import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#06070a] border-t border-[#1a1b24] text-xs text-zinc-400 pb-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <p className="font-semibold text-zinc-200">
            Arfa Anjum · AI Music Creator & Neural Sound Architect
          </p>
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Arfa Anjum (<a href="mailto:arfaanjum407@gmail.com" className="text-amber-400 hover:underline">arfaanjum407@gmail.com</a>). All Master Recordings & Publishing registered with ASCAP/BMI.
          </p>
        </div>

        {/* Quiet Clean Links */}
        <div className="flex items-center gap-6 text-zinc-400">
          <a href="#discography" className="hover:text-zinc-200 transition-colors">
            Discography
          </a>
          <a href="#sound-lab" className="hover:text-zinc-200 transition-colors">
            Sound Lab
          </a>
          <a href="#philosophy" className="hover:text-zinc-200 transition-colors">
            Sonic Manifesto
          </a>
          <a href="#accolades" className="hover:text-zinc-200 transition-colors">
            Accolades
          </a>
          <a href="#licensing" className="hover:text-zinc-200 transition-colors">
            Sync Desk
          </a>
        </div>

      </div>
    </footer>
  );
};
