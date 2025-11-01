
import React, { useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import {
  experiences,
  projects,
  education,
  skills,
  achievements,
  socialLinks,
  personalInfo
} from './constants';
import type { Education, SkillCategory } from './types';

const App: React.FC = () => {
    
  useEffect(() => {
    const cursorLight = document.getElementById('cursor-light');
    if (!cursorLight) return;

    const handler = (e: MouseEvent) => {
      cursorLight.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <header className="mb-16 md:mb-24">
        <Header personalInfo={personalInfo} socialLinks={socialLinks} />
      </header>
      
      <main id="content">
        <Section title="Experience" id="experience">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </Section>

        <Section title="Projects" id="projects">
          <ul className="group/list space-y-12">
            {projects.map((proj, index) => (
                <li key={index}>
                    <ProjectCard project={proj} />
                </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills" id="skills">
          <div className="space-y-6">
            {skills.map((category: SkillCategory, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-sky-400 mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, i) => (
                    <SkillBadge key={i} skill={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education" id="education">
          <div className="space-y-6">
            {education.map((edu: Education, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <div className="flex justify-between items-start flex-col sm:flex-row">
                  <div>
                    <h3 className="font-bold text-slate-100 text-lg">{edu.institution}</h3>
                    <p className="text-sky-400 text-base">{edu.degree}</p>
                  </div>
                  <p className="text-base text-slate-400 text-right whitespace-nowrap mt-2 sm:mt-0">{edu.duration}</p>
                </div>
                <p className="text-base mt-1">{edu.score}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Achievements" id="achievements">
          <ul className="space-y-3 list-disc list-inside text-slate-400 text-lg">
            {achievements.map((ach, index) => (
              <li key={index}><span className="text-slate-300">{ach}</span></li>
            ))}
          </ul>
        </section>

        <footer className="text-center pt-16">
          <p className="text-base text-slate-500">
            Coded with passion and deployed with purpose. <br/>
            &copy; {new Date().getFullYear()} Anubhav Kumar Rao. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;