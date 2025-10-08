import { IconType } from 'react-icons';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export const defaultSocialLinks: SocialLink[] = [
  { icon: FiGithub, href: 'https://github.com/adambinnersley', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/adam-binnersley', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:abinnersley@gmail.com', label: 'Email' },
];

export interface SocialLinksProps {
  links?: SocialLink[];
  variant?: 'default' | 'large' | 'card';
  className?: string;
}

export default function SocialLinks({ 
  links = defaultSocialLinks, 
  variant = 'default',
  className = '' 
}: SocialLinksProps) {
  const variantStyles = {
    default: {
      container: 'flex items-center gap-4',
      link: 'p-2 text-muted-foreground hover:text-primary transition-colors',
      icon: 'w-5 h-5',
    },
    large: {
      container: 'flex justify-center gap-6',
      link: 'p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110',
      icon: 'w-6 h-6',
    },
    card: {
      container: 'flex justify-center lg:justify-start gap-4',
      link: 'p-3 bg-card rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110',
      icon: 'w-6 h-6',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`${styles.container} ${className}`}>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className={styles.link}
          aria-label={social.label}
        >
          <social.icon className={styles.icon} />
        </a>
      ))}
    </div>
  );
}
