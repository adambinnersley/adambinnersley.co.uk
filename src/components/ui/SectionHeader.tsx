export interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  preTitle,
  title,
  highlightedText,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      {preTitle && (
        <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
          {preTitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        {title}
        {highlightedText && (
          <>
            {' '}
            <span className="text-primary">{highlightedText}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
