
import React from 'react';
import type { PersonalInfo, SocialLinks } from '../types';
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from './icons';

interface HeaderProps {
    personalInfo: PersonalInfo;
    socialLinks: SocialLinks;
}

const Header: React.FC<HeaderProps> = ({ personalInfo, socialLinks }) => {
    return (
        <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
                {personalInfo.name}
            </h1>
            <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">{personalInfo.title}</h2>
            <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-slate-400">{personalInfo.about}</p>
            
            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
                <ul className="flex items-center" aria-label="Social media">
                    {socialLinks.github && <li className="mr-5 shrink-0">
                        <a className="block hover:text-slate-200" href={socialLinks.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                            <span className="sr-only">GitHub</span>
                            <GithubIcon />
                        </a>
                    </li>}
                    {socialLinks.linkedin && <li className="mr-5 shrink-0">
                        <a className="block hover:text-slate-200" href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedinIcon />
                        </a>
                    </li>}
                </ul>
                {socialLinks.resume && (
                    <a href={socialLinks.resume} target="_blank" rel="noreferrer noopener" className="inline-flex items-center rounded-full border border-sky-400/50 bg-sky-400/10 px-4 py-2 text-base font-medium text-sky-300 transition-colors hover:bg-sky-400/20 focus:outline-none focus:ring-2 focus:ring-sky-400/50">
                        View My Resume
                        <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Header;
