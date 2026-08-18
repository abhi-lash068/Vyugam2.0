import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';

export const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 18; // left-right
    const rotateX = (0.5 - py) * 12; // top-bottom
    const translateZ = 18;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    el.style.transform = '';
  };

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-extrabold text-marigold">Gallery</h2>
        <p className="mt-2 text-sm text-smoke/80">Moments from our events. Hover to tilt, click to enlarge.</p>

        <div className="gallery-3d mt-6 gallery-tilt-anim">
          <div className="gallery-3d-inner">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="gallery-card relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelected(src)}
                role="button"
                tabIndex={0}
              >
                <img src={src} alt={`Event ${idx + 1}`} />
                <div className="card-deco" />
              </div>
            ))}
          </div>
        </div>

        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelected(null)}
          >
            <img src={selected} alt="Selected" className="max-h-[90%] max-w-[90%] rounded shadow-lg" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
