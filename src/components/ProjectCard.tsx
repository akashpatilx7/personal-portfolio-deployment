'use client';

import { cn } from '@/utils';
import Image from 'next/image';
import Button from './Buttons';
import { Github } from 'lucide-react';
import RenderConditional from './RenderConditional';
import Chip from './Chip';

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  codeLink?: string;
  liveLink?: string;
  comingSoon?: boolean;
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  codeLink,
  liveLink,
  comingSoon = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group rounded-3xl bg-bg-secondary/80 backdrop-blur-md relative overflow-hidden',
        'flex flex-col',
        'border border-foreground/10',
        'shadow-md hover:shadow-2xl hover:shadow-primary/5',
        'transition-all duration-500',
        'hover:border-primary/40 hover:-translate-y-1.5'
      )}
    >
      {/* Coming Soon Tag */}
      <RenderConditional condition={comingSoon}>
        <div className='absolute -top-2 -right-2 rounded-full bg-primary text-background px-2 py-1 text-sm z-10 font-medium'>
          Coming Soon
        </div>
      </RenderConditional>

      {/* Image */}
      <div className='relative w-full h-64 overflow-hidden rounded-t-3xl'>
        <Image
          src={image}
          className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
          alt='project-image'
          fill
        />
        <div className='absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300'></div>
      </div>

      {/* Content */}
      <div className='flex flex-col p-6 md:p-7 gap-3.5 flex-grow justify-between'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-300'>{title}</h3>

          <p className='text-foreground/80 leading-relaxed'>{description}</p>
        </div>

        {/* Tags */}
        <div className='flex gap-2 flex-wrap mt-4'>
          {tags.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </div>

        {/* Buttons */}
        <RenderConditional condition={!!codeLink || !!liveLink}>
          <div className='flex flex-col sm:flex-row gap-4 justify-between mt-4'>
            {/* Code */}
            <RenderConditional condition={!!codeLink}>
              <Button
                variant='secondary'
                className='flex items-center justify-center gap-2'
                isExternal
                href={codeLink}
              >
                <Github className='w-5 h-5' />
                Code
              </Button>
            </RenderConditional>

            {/* Live Preview */}
            <RenderConditional condition={!!liveLink}>
              <Button variant='primary' isExternal href={liveLink}>
                View
              </Button>
            </RenderConditional>
          </div>
        </RenderConditional>
      </div>
    </div>
  );
}
