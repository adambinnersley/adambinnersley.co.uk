'use client';

import { FiArrowUp } from 'react-icons/fi';
import SocialLinks from '@/components/ui/SocialLinks';
import Button from '@/components/ui/Button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm mt-2">
              &copy; {currentYear} Adam Binnersley. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="p-3 bg-primary text-white rounded-full hover:bg-primary-dark"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
