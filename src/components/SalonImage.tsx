import {useState} from 'react';
import {Sparkles} from 'lucide-react';

interface SalonImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function SalonImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: SalonImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F4EEE5] via-[#FAF7F2] to-[#E8DEC8] p-6 text-center text-[#30241F] ${className}`}
      >
        <Sparkles className="mb-3 h-6 w-6 text-[#C6A46A]" strokeWidth={1.5} />
        <p className="font-serif text-lg font-medium tracking-wide text-[#30241F]">
          {fallbackLabel || 'Begum Tareen Beauty Salon'}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
