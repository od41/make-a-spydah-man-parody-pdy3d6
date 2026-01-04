import type { ImgHTMLAttributes } from 'react';

interface SpaydaImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

/**
 * Responsive, accessible image component for Spayda Man
 * Features:
 * - Responsive sizing that adapts to container
 * - Proper alt text for accessibility and SEO
 * - Semantic HTML
 * - Loading optimization with lazy loading
 */
export function SpaydaImage({
  src,
  alt,
  title,
  className = '',
  ...props
}: SpaydaImageProps) {
  return (
    <figure className="spayda-image-container">
      <img
        src={src}
        alt={alt}
        title={title || alt}
        className={`spayda-image ${className}`}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </figure>
  );
}

export default SpaydaImage;
