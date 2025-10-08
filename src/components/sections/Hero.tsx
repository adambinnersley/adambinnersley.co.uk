'use client';

import { useEffect, useState, useMemo, useRef, useCallback, memo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import SocialLinks from '@/components/ui/SocialLinks';
import Button from '@/components/ui/Button';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'React Specialist',
  'Laravel Developer',
  'Android and iOS App Developer',
];

// Separate component for typewriter effect to prevent re-renders of parent
const TypewriterText = memo(function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  const roleIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  const typeCharacter = useCallback(() => {
    const currentRole = roles[roleIndexRef.current];

    if (!isDeletingRef.current) {
      setDisplayText(prev => {
        const newText = currentRole.substring(0, prev.length + 1);
        if (newText === currentRole) {
          setTimeout(() => {
            isDeletingRef.current = true;
          }, 2000);
        }
        return newText;
      });
    } else {
      setDisplayText(prev => {
        const newText = prev.substring(0, prev.length - 1);
        if (newText === '') {
          isDeletingRef.current = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        }
        return newText;
      });
    }
  }, []);

  useEffect(() => {
    const getDelay = () => isDeletingRef.current ? 50 : 100;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      typeCharacter();
      timeoutId = setTimeout(tick, getDelay());
    };

    timeoutId = setTimeout(tick, getDelay());
    return () => clearTimeout(timeoutId);
  }, [typeCharacter]);

  return (
    <>
      <span>{displayText}</span>
      <span className="animate-pulse text-primary">|</span>
    </>
  );
});

export default function Hero() {
  const { theme } = useTheme();
  const [particlesReady, setParticlesReady] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? '#60a5fa' : '#3b82f6',
      },
      links: {
        color: theme === 'dark' ? '#60a5fa' : '#3b82f6',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
      number: {
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [theme]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Particles Background */}
      {particlesReady && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm md:text-base">
            Welcome
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="text-primary">Adam Binnersley</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12"
        >
          <TypewriterText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg"
        >
          Based in Pontefract, West Yorkshire, UK. Crafting elegant solutions to complex problems
          with modern technologies and best practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-12"
        >
          <SocialLinks variant="large" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="primary"
            size="md"
          >
            View My Work
          </Button>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            size="md"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
