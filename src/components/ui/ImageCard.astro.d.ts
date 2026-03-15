// TypeScript definitions for ImageCard component
// Auto-generated from ImageCard.astro

export type ImagePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type ImageCardVariant = 'small' | 'medium' | 'large';

export interface ImageCardProps {
  /** Image source URL */
  src: string;
  
  /** Alt text for accessibility */
  alt: string;
  
  /** Position of the image in the card (default: 'top-right') */
  imagePosition?: ImagePosition;
  
  /** Title text shown in the card */
  title: string;
  
  /** Optional subtitle displayed below title */
  subtitle?: string;
  
  /** Optional description text */
  description?: string;
  
  /** Link to navigate when card is clicked (makes card interactive) */
  href?: string;
  
  /** Size variant of the card (default: 'medium') */
  variant?: ImageCardVariant;
  
  /** Optional additional CSS classes */
  className?: string;
}