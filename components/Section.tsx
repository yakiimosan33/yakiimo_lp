import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <div className="mb-16 md:mb-24 flex items-baseline border-b border-gray-100 pb-4">
        <h2 className="text-4xl md:text-5xl font-serif italic text-neutral-900 mr-6">
          {title}
        </h2>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          {`// ${id}`}
        </span>
      </div>
      <div className="animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-timeline:view()] [animation-range:entry_10%_cover_30%]">
        {children}
      </div>
    </section>
  );
};

export default Section;