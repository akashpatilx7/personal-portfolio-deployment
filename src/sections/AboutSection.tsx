'use client';

import SectionTitle from '@/components/SectionTitle';
import { aboutSectionData } from '@/data';
import Divider from '@/components/Divider';
import Button from '@/components/Buttons';
import { Cloud, Cpu, ShieldCheck, Activity, Terminal, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Cloud,
      title: 'Dual-Cloud Infrastructure',
      value: 'AWS & Azure',
      desc: 'Enterprise VPC/VNet, EKS, AKS, Bedrock, Serverless',
    },
    {
      icon: Terminal,
      title: 'Infrastructure as Code',
      value: 'Terraform & Ansible',
      desc: 'Automated provisioning with zero configuration drift',
    },
    {
      icon: Cpu,
      title: 'Continuous Delivery',
      value: 'CI/CD & GitOps',
      desc: 'CodePipeline, Jenkins, ArgoCD, Helm rolling updates',
    },
    {
      icon: Activity,
      title: 'Observability & SRE',
      value: 'Splunk & Prometheus',
      desc: 'Grafana, CloudWatch, Azure Monitor, 35% MTTR reduction',
    },
  ];

  const specializations = [
    'Container Orchestration (Kubernetes, Docker)',
    'DevSecOps (SonarQube, Trivy, Secrets Manager)',
    'Cloud-Native AI Workflows (Amazon Bedrock, Gemini AI)',
    'High Availability & Auto-Scaling (99.9% Uptime)',
  ];

  return (
    <section id='about' className='relative min-h-[50vh] flex px-6 pt-22 pb-10'>
      <div className='container mx-auto flex flex-col gap-16'>
        <SectionTitle title={aboutSectionData.title} />

        {/* Executive Bio Card */}
        <div className='relative w-full rounded-3xl bg-bg-secondary/70 backdrop-blur-md border border-foreground/10 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group'>
          {/* Subtle Ambient Glow inside Card */}
          <div className='absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-primary/15 transition-colors duration-500'></div>

          <div className='relative z-10 flex flex-col gap-6 max-w-5xl mx-auto'>
            <div className='flex flex-wrap items-center gap-3'>
              <span className='inline-flex items-center gap-2 text-xs md:text-sm font-mono text-primary bg-primary/10 border border-primary/25 px-3.5 py-1 rounded-full font-medium shadow-xs'>
                <Sparkles className='w-3.5 h-3.5' />
                DevOps & Site Reliability Engineer
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs md:text-sm font-mono text-foreground/70 bg-foreground/5 border border-foreground/10 px-3 py-1 rounded-full'>
                Pune, India
              </span>
            </div>

            <p className='text-lg md:text-2xl text-foreground/90 leading-relaxed font-normal'>
              Hi, I&apos;m <strong className='text-foreground font-semibold'>Akash Patil</strong>, a DevOps & Site Reliability Engineer with <span className='text-primary font-semibold'>2+ years of experience</span> architecting, deploying, and scaling robust <span className='text-foreground font-semibold underline decoration-primary/40 underline-offset-4'>AWS & Azure</span> cloud platforms.
            </p>

            <p className='text-base md:text-lg text-foreground/75 leading-relaxed'>
              Specialized in end-to-end CI/CD automation, infrastructure as code with <span className='text-foreground font-medium'>Terraform & Ansible</span>, containerized workloads on <span className='text-foreground font-medium'>Kubernetes & Docker</span>, and production-grade observability via <span className='text-foreground font-medium'>Splunk, Prometheus, Grafana, CloudWatch, and Azure Monitor</span> to maintain 99.9% uptime for enterprise and AI-powered systems.
            </p>

            {/* Specialization Pills */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'>
              {specializations.map((spec, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 p-3 rounded-xl bg-foreground/[0.03] border border-foreground/10 hover:border-primary/30 transition-colors'
                >
                  <ShieldCheck className='w-4 h-4 text-primary shrink-0' />
                  <span className='text-sm md:text-base text-foreground/80 font-medium'>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Key Pillar Highlight Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className='flex flex-col gap-3 p-6 rounded-2xl bg-bg-secondary/70 backdrop-blur-md border border-foreground/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/5 group'
              >
                <div className='w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-300'>
                  <IconComponent className='w-5 h-5' />
                </div>
                <div>
                  <h4 className='text-xs md:text-sm font-medium text-foreground/60 tracking-wider uppercase'>{item.title}</h4>
                  <p className='text-lg md:text-xl font-bold text-foreground mt-0.5'>{item.value}</p>
                </div>
                <p className='text-xs md:text-sm text-foreground/70 leading-relaxed mt-auto pt-1 border-t border-foreground/10'>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <Divider />

        {/* Secondary Showcase with Video */}
        <div className='flex flex-col w-full items-center justify-center xl:flex-row gap-10 xl:gap-14'>
          {/* Video */}
          <div className='rounded-3xl relative overflow-hidden h-80 md:h-[400px] xl:h-[422px] w-full xl:w-[586px] border border-foreground/10 shadow-xl group'>
            <div className='absolute w-full h-full flex-none'>
              <video
                src={aboutSectionData.secondSection.video}
                loop={true}
                preload='auto'
                muted={true}
                autoPlay={true}
                playsInline={true}
                style={{
                  cursor: 'auto',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0px',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                }}
              ></video>
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-bg-secondary/40 via-transparent to-transparent opacity-60 pointer-events-none'></div>
          </div>

          {/* Content */}
          <div className='flex-1 w-full h-min flex flex-col gap-6'>
            <h3 className='text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight'>
              {aboutSectionData.secondSection.title}
            </h3>
            <p className='text-foreground/80 leading-relaxed text-base md:text-lg'>
              {aboutSectionData.secondSection.description}
            </p>
            <p className='text-foreground/80 leading-relaxed text-base md:text-lg font-medium border-l-2 border-primary pl-4'>
              {aboutSectionData.secondSection.closingLine}
            </p>
            <Button
              className='w-fit mt-2'
              href={aboutSectionData.secondSection.button.href}
            >
              {aboutSectionData.secondSection.button.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
