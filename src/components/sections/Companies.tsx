'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { companies } from '@/data/companies';

export default function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Double the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Companies I&apos;ve <span className="text-primary">Worked With</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:pause">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="w-40 h-24 bg-card rounded-xl border border-border flex items-center justify-center p-6 group-hover:border-primary transition-colors">
                {/* Placeholder logo - using text-based logos */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {company.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {company.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Alternative Static Grid for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:hidden"
      >
        <div className="grid grid-cols-2 gap-4">
          {companies.slice(0, 4).map((company) => (
            <div
              key={company.name}
              className="bg-card rounded-xl border border-border p-4 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-muted-foreground">
                  {company.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
