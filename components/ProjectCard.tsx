
import React from 'react';
import type { Project } from '../types';
import SkillBadge from './SkillBadge';
import { ArrowUpRightIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
            <h3>
                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 group/link text-lg" href={project.link} target="_blank" rel="noreferrer noopener" aria-label={project.title}>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {project.title}
                      <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                </a>
            </h3>
            <p className="mt-2 text-base leading-normal text-slate-400">{project.description}</p>
        </div>
        <div className="z-10 col-span-full sm:col-span-2">
            <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, index) => (
                    <SkillBadge key={index} skill={tech} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;
