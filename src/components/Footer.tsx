import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-4 bg-signal border-t-4 border-marigold relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <span className="font-heading font-extrabold text-sm uppercase tracking-widest bg-marigold text-obsidian px-5 py-2 clip-polygon shadow-[4px_4px_0_#7A0606] inline-block mb-4">
          Ping Us
        </span>

        <h2 className="font-display text-4xl sm:text-5xl text-smoke uppercase tracking-tight mb-4">
          Questions Before You Enter?
        </h2>

        <p className="font-body text-base text-cream/90 max-w-xl mx-auto mb-12">
          Ask us about registration, event rules, or team participation — we'll get back fast.
        </p>

        {/* Contact Chips */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 text-left mb-12">
          <a
            href="https://wa.me/917558108034"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-carbon border-2 border-mustard p-4 hover:border-marigold transition-all group"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-marigold block mb-1">
              Mr. H. Abhilash (Secretary)
            </span>
            <div className="font-body font-semibold text-smoke text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-marigold" /> 7558108034
            </div>
          </a>

          <a
            href="https://wa.me/916381359507"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-carbon border-2 border-mustard p-4 hover:border-marigold transition-all group"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-marigold block mb-1">
              Ms. M. Madhusree (Joint Sec)
            </span>
            <div className="font-body font-semibold text-smoke text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-marigold" /> 6381359507
            </div>
          </a>

          <a
            href="https://wa.me/918610234748"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-carbon border-2 border-mustard p-4 hover:border-marigold transition-all group"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-marigold block mb-1">
              Mr. S. Oviyan (Addl Sec)
            </span>
            <div className="font-body font-semibold text-smoke text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-marigold" /> 8610234748
            </div>
          </a>

          <a
            href="https://wa.me/917598682797"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-carbon border-2 border-mustard p-4 hover:border-marigold transition-all group"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-marigold block mb-1">
              Mr. M. Kabilan (Treasurer)
            </span>
            <div className="font-body font-semibold text-smoke text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-marigold" /> 7598682797
            </div>
          </a>

          <a
            href="mailto:Vyugam2k262.0@gmail.com"
            className="bg-carbon border-2 border-mustard p-4 hover:border-marigold transition-all group col-span-1 xs:col-span-2 lg:col-span-1"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-marigold block mb-1">
              Official Email
            </span>
            <div className="font-body font-semibold text-smoke text-xs flex items-center gap-2 break-all">
              <Mail className="w-4 h-4 text-marigold flex-shrink-0" /> Vyugam2k262.0@gmail.com
            </div>
          </a>
        </div>

        {/* Steve Jobs Quote */}
        <div className="my-8 sm:my-10 py-6 border-y border-marigold/20">
          <p className="font-heading italic text-lg sm:text-xl md:text-2xl text-marigold tracking-wide px-2">
            &quot;Innovation distinguishes between a leader and a follower.&quot;
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-mustard mt-2">
            — Steve Jobs
          </p>
        </div>

        {/* Social Chips */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <a
            href="https://www.instagram.com/pacet_castle"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-carbon text-cream border-2 border-marigold px-5 py-2.5 shadow-[3px_3px_0_#7A0606] hover:bg-marigold hover:text-obsidian hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" /> Instagram @pacet_castle
          </a>

          <a
            href="https://chat.whatsapp.com/EtqLdlkEg3V7eQI9r6ci8R?s=cl&p=a&ilr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-carbon text-cream border-2 border-marigold px-5 py-2.5 shadow-[3px_3px_0_#7A0606] hover:bg-marigold hover:text-obsidian hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" /> Join WhatsApp Group
          </a>

          <a
            href="https://www.linkedin.com/in/pacet-pollachi-5a003a2b7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-carbon text-cream border-2 border-marigold px-5 py-2.5 shadow-[3px_3px_0_#7A0606] hover:bg-marigold hover:text-obsidian hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn PACET
          </a>
        </div>

        <div className="font-heading font-extrabold text-lg sm:text-2xl text-marigold uppercase tracking-wider mb-4">
          Bring your strategy. Build your vision. Enter the arena.
        </div>

        <p className="font-mono text-xs text-mustard/70 tracking-wider">
          VYUGAM 2.0 &mdash; Dept. of Information Technology, P.A. College of Engineering and Technology (Autonomous), Pollachi, Coimbatore &ndash; 642002 &copy; 2026
        </p>
      </div>
    </footer>
  );
};
