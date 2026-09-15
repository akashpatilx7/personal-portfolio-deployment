'use client';

import SectionTitle from '@/components/SectionTitle';
import Divider from '@/components/Divider';
import { skillsData } from '@/data/skillsData';
import RenderConditional from '@/components/RenderConditional';
import Image from 'next/image';

export default function SkillsSection() {
  return (
    <section id='skills' className='relative min-h-[50vh] flex px-6 pt-22 pb-10'>
      <div className='container mx-auto flex flex-col gap-14'>
        <SectionTitle title={skillsData.title} />

        <div className='flex flex-col gap-10'>
          {skillsData.skillSections.map((skillSection, index) => (
            <div key={index} className='flex flex-col gap-10'>
              <div className='flex flex-col gap-6'>
                <h3 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>{skillSection.name}</h3>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-6'>
                  {skillSection.skills.map((skill, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center gap-3.5 p-4 justify-center rounded-2xl bg-bg-secondary/70 backdrop-blur-sm border border-foreground/10 hover:border-primary/50 hover:bg-primary text-foreground hover:text-background transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-default group'
                    >
                      <Image
                        src={skill.icon || ''}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className='transition-transform duration-300 group-hover:scale-110'
                      />
                      <span className='text-base md:text-lg font-medium text-center'>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <RenderConditional
                condition={index !== skillsData.skillSections.length - 1}
              >
                <Divider />
              </RenderConditional>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
