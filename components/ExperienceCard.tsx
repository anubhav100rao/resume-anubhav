
import React from 'react';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{experience.company}</h3>
          <p className="text-md font-medium text-sky-400 mt-1">{experience.role}</p>
        </div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mt-1 sm:mt-0 sm:text-right flex-shrink-0">
          {experience.duration}
        </p>
      </div>
      <ul className="mt-2 space-y-2 list-disc list-inside text-slate-400 text-base">
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;