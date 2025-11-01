
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} aria-label={title} className="py-8 md:py-12 border-t border-slate-800 first:border-t-0">
      <h2 className="text-3xl font-bold text-sky-400 mb-8">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
