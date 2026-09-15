import Link from 'next/link';
import RenderConditional from './RenderConditional';

export interface ProjectEngagement {
  name: string;
  technologies?: string;
  descriptions: string[];
}

export interface ExperienceCardProps {
  company: string;
  position: string;
  timeline: string;
  location: string;
  companyLink: string;
  descriptions?: string[];
  projects?: ProjectEngagement[];
}

const companyClasses =
  'hover:text-primary text-lg md:text-xl transition-all duration-300';

export default function ExperienceCard({
  company,
  position,
  timeline,
  location,
  companyLink,
  descriptions,
  projects,
}: ExperienceCardProps) {
  return (
    <div className='flex flex-col gap-8 w-full p-8 md:p-10 rounded-3xl bg-bg-secondary/70 backdrop-blur-md border border-foreground/10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/5'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 justify-between'>
        <div className='flex flex-col gap-2 shrink-0'>
          <h3 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent'>{position}</h3>
          <RenderConditional condition={!!companyLink}>
            <Link
              href={companyLink}
              target='_blank'
              rel='noopener noreferrer'
              className={companyClasses}
            >
              <span className='inline-flex items-center gap-2 font-medium'>
                {company}
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </span>
            </Link>
          </RenderConditional>
          <RenderConditional condition={!companyLink}>
            <p className={companyClasses}>{company}</p>
          </RenderConditional>
        </div>
        <div className='flex flex-col gap-1.5 shrink-0 justify-end'>
          <p className='md:text-lg lg:text-right text-foreground font-semibold'>{timeline}</p>
          <p className='md:text-base lg:text-right text-foreground/60 flex items-center lg:justify-end gap-1.5'>
            <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            {location}
          </p>
        </div>
      </div>

      {/* Render Sub-projects if provided */}
      {projects && projects.length > 0 && (
        <div className='flex flex-col gap-10 mt-2'>
          {projects.map((project, pIndex) => (
            <div key={pIndex} className='flex flex-col gap-4'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-foreground/10 pb-3.5'>
                <h4 className='text-xl md:text-2xl font-bold text-foreground flex items-center gap-2.5'>
                  <span className='w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] inline-block shrink-0'></span>
                  {project.name}
                </h4>
                {project.technologies && (
                  <span className='text-xs md:text-sm font-mono text-primary bg-primary/10 border border-primary/30 px-3.5 py-1 rounded-full w-fit font-medium shadow-xs'>
                    {project.technologies}
                  </span>
                )}
              </div>
              <ul className='list-none space-y-3.5 pl-1'>
                {project.descriptions.map((description, dIndex) => (
                  <li key={dIndex} className='md:text-lg text-foreground/80 flex gap-3.5 items-start leading-relaxed'>
                    <span className='text-primary mt-1 flex-shrink-0 font-bold'>▹</span>
                    <span>{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Render flat descriptions if provided */}
      {descriptions && descriptions.length > 0 && (
        <ul className='list-none space-y-3'>
          {descriptions.map((description, index) => (
            <li key={index} className='md:text-lg text-foreground/80 flex gap-3 items-start'>
              <span className='text-primary mt-1.5 flex-shrink-0'>▹</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
