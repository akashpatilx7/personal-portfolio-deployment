'use client';

import ContactInfo from '@/components/ContactInfoItem';
import SectionTitle from '@/components/SectionTitle';
import SectionTitleSmall from '@/components/SectionTitleSmall';
import { contactSectionData } from '@/data/contactSectionData';
import { LucideProps } from 'lucide-react';
import { RefAttributes, useState } from 'react';
import { ForwardRefExoticComponent } from 'react';
import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Buttons';
import { useReCaptcha } from 'next-recaptcha-v3';
import { toast } from 'sonner';

export function SocialLink({
  link,
  Icon,
}: {
  link: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Link
      href={link}
      className='rounded-full p-4 border border-foreground/10 text-foreground hover:bg-primary hover:border-primary hover:text-background transition-all duration-300 flex items-center justify-center'
    >
      <Icon className='w-5 h-5' />
    </Link>
  );
}

export function ContactCard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-6 rounded-3xl bg-bg-secondary p-10'>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState<Record<string, string>>(
    contactSectionData.form.fields.reduce(
      (acc, field) => {
        acc[field.name] = '';
        return acc;
      },
      {} as Record<string, string>
    )
  );

  const [isLoading, setIsLoading] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = await executeRecaptcha('contact_form');

      const response = await fetch('/api/contact/send', {
        method: 'POST',
        body: JSON.stringify({ token, ...formData }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(contactSectionData.form.successMessage);
      } else {
        toast.error(contactSectionData.form.errorMessage);
      }
    } catch {
      toast.error(contactSectionData.form.errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='contact'
      className='relative min-h-[50vh] flex px-6 pt-22 pb-10'
    >
      {/* Decorative Styling Separator */}
      <div className='container mx-auto flex flex-col gap-16'>
        <div className='relative w-full rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] group'>
          
          {/* Animated Background Gradients */}
          <div className='absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-700 pointer-events-none'></div>
          <div className='absolute -bottom-32 -right-32 w-64 h-64 bg-[#00cfff]/20 rounded-full blur-[80px] group-hover:bg-[#00cfff]/30 transition-colors duration-700 pointer-events-none'></div>
          
          {/* Abstract Grid Pattern (CSS) */}
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none'></div>

          <div className='z-10 flex flex-col gap-5 text-center md:text-left max-w-2xl'>
            <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
              Ready to scale your <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00cfff]'>infrastructure?</span>
            </h2>
            <p className='text-lg md:text-xl text-foreground/60 leading-relaxed max-w-xl'>
              Let&apos;s collaborate to build secure, reliable, and automated systems that drive your business forward.
            </p>
          </div>
          
          <div className='z-10 shrink-0'>
            <div className='w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)] transition-all duration-500'>
              <svg className='w-8 h-8 text-primary animate-bounce mt-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-col gap-14'>
          <SectionTitle title={contactSectionData.title} />

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Details */}
            <ContactCard>
              {/* Items */}
              <SectionTitleSmall title={contactSectionData.detailsTitle} />
              {contactSectionData.contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}

              {/* Social Links */}
              <div className='flex flex-col mt-6 gap-6'>
                <SectionTitleSmall title={contactSectionData.socialTitle} />
                <div className='flex gap-4'>
                  {contactSectionData.socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                  ))}
                </div>
              </div>
            </ContactCard>

            {/* Form */}
            <ContactCard>
              {/* Items */}
              <SectionTitleSmall title={contactSectionData.form.title} />

              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                {contactSectionData.form.fields.map((field, index) => (
                  <Input
                    key={index}
                    {...field}
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]: e.target.value,
                      })
                    }
                  />
                ))}

                <Button type='submit' variant='primary' disabled={isLoading}>
                  {contactSectionData.form.buttonText}
                </Button>
              </form>
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
}
