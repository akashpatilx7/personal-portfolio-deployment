'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/utils';

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-10 h-10 rounded-full border border-foreground/10 bg-bg-secondary/60 flex items-center justify-center',
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'w-10 h-10 rounded-full border border-foreground/15 bg-bg-secondary/70 backdrop-blur-sm',
        'hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer',
        'flex items-center justify-center text-foreground',
        className
      )}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <Sun className='w-5 h-5 text-primary transition-transform duration-300 hover:rotate-45' />
      ) : (
        <Moon className='w-5 h-5 text-primary transition-transform duration-300 hover:-rotate-12' />
      )}
    </button>
  );
}
