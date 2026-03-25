import Link from 'next/link';
import RenderConditional from './RenderConditional';

export interface ExperienceCardProps {
  company: string;
  position: string;
  timeline: string;
  location: string;
  companyLink: string;
  descriptions: string[];
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
}: ExperienceCardProps) {
  return (
    <div className='flex flex-col gap-6 w-full p-8 rounded-2xl bg-gradient-to-br from-bg-secondary/50 to-bg-secondary/30 border border-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5'>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-2 justify-between'>
        <div className='flex flex-col gap-3 lg:gap-2 shrink-0'>
          <h3 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>{position}</h3>
          <RenderConditional condition={!!companyLink}>
            <Link
              href={companyLink}
              target='_blank'
              rel='noopener noreferrer'
              className={companyClasses}
            >
              <span className='inline-flex items-center gap-2'>
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
        <div className='flex flex-col gap-3 lg:gap-2 shrink-0 justify-end'>
          <p className='md:text-lg lg:text-right text-foreground/80 font-medium'>{timeline}</p>
          <p className='md:text-lg lg:text-right text-foreground/60 flex items-center lg:justify-end gap-1'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            {location}
          </p>
        </div>
      </div>

      <ul className='list-none space-y-3'>
        {descriptions.map((description, index) => (
          <li key={index} className='md:text-lg text-foreground/80 flex gap-3 items-start'>
            <span className='text-primary mt-1.5 flex-shrink-0'>▹</span>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
