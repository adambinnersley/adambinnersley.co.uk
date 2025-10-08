'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiSmartphone, FiCloud } from 'react-icons/fi';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const services = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications with React, Next.js, and modern CSS frameworks.',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'Developing robust APIs and services using Laravel, Node.js, and cloud-native architectures.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native and Expo for iOS and Android.',
  },
  {
    icon: FiCloud,
    title: 'DevOps & Cloud',
    description: 'Implementing CI/CD pipelines, containerization with Docker, and infrastructure on AWS.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <SectionHeader
            preTitle="About Me"
            title="Passionate About Creating"
            highlightedText="Digital Excellence"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="w-[90%] h-[90%] bg-card rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">AB</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Adam Binnersley</h3>
                    <p className="text-muted-foreground">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-center lg:text-left"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Full Stack Software Engineer based in{' '}
              <span className="text-foreground font-medium">Pontefract, West Yorkshire, UK</span>,
              with over 15 years of experience in building scalable web and mobile applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My passion lies in creating elegant solutions to complex problems, leveraging modern
              technologies like <span className="text-primary">React</span>,{' '}
              <span className="text-primary">Laravel</span>, and{' '}
              <span className="text-primary">MySQL</span> to deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me spending time with my wife and two kids, exploring the countryside (weather dependent).
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card variant="hover" className="p-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
