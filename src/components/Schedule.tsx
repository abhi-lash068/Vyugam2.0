import React from 'react';
import { Star } from 'lucide-react';

export const Schedule: React.FC = () => {
  const scheduleNodes = [
    { time: '08:30 AM', title: 'Arrival', desc: 'Gates open. Squads assemble.' },
    { time: '09:00 AM', title: 'Check-In', desc: 'Badges out. Track assignments locked.' },
    { time: '09:30 AM', title: 'Prelims', desc: 'First cut. Prove you belong here.' },
    { time: '12:00 PM', title: 'Finalist Stage', desc: 'Top squads. Full pressure. Full focus.' },
    { time: '02:30 PM', title: 'Showcase', desc: 'Work goes on display for all.' },
    { time: '04:00 PM', title: 'Results', desc: 'Winners named. Tension breaks.' },
    { time: '04:30 PM', title: 'Closing Blast', desc: 'One last spark before the arena empties.' },
  ];

  return (
    <section id="path" className="py-24 px-4 bg-path relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <span className="font-heading font-extrabold text-sm uppercase tracking-widest bg-marigold text-obsidian px-5 py-2 clip-polygon shadow-[4px_4px_0_#7A0606] inline-block mb-4">
          Competition Path
        </span>

        <h2 className="font-display text-4xl sm:text-5xl text-smoke uppercase tracking-tight mb-16">
          How The Day Unfolds
        </h2>

        {/* Timeline Scroll */}
        <div className="relative overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-marigold scrollbar-track-carbon">
          {/* Connecting Track Line */}
          <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-transparent via-marigold to-transparent z-0" />

          <div className="flex gap-4 min-w-max justify-between px-6 relative z-10">
            {scheduleNodes.map((node, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-40 group">
                <div className="w-12 h-12 rounded-full bg-obsidian border-2 border-marigold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-ember transition-all shadow-[0_0_10px_rgba(253,181,21,0.4)]">
                  <Star className="w-5 h-5 text-marigold group-hover:text-obsidian fill-current" />
                </div>

                <span className="font-heading font-extrabold text-lg text-smoke uppercase tracking-wider mb-1">
                  {node.title}
                </span>

                <span className="font-mono text-xs text-marigold tracking-widest mb-2 font-bold">
                  {node.time}
                </span>

                <p className="font-body text-xs text-cream/80 leading-snug">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
