// Spayda Man Theme Constants
export const SPAYDA_MAN_THEME = {
  colors: {
    primary: '#FF6B35',      // Vibrant orange
    secondary: '#004E89',    // Deep blue
    accent: '#F7931E',       // Golden orange
    light: '#F5F5F5',        // Off white
    dark: '#1A1A1A',         // Near black
    success: '#00D084',      // Fresh green
    warning: '#FFB800',      // Warm yellow
  },
  fonts: {
    primary: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    heading: 'Arial, Helvetica, sans-serif',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const SPAYDA_MAN_TEXT = {
  appTitle: 'Spayda Man',
  tagline: 'The Friendly Neighborhood Web Hero',
  heroHeading: 'Welcome to Spayda Man\'s Web',
  heroSubheading: 'Spinning webs of awesome content',
  ctaButton: 'Start Your Adventure',
  features: {
    responsive: 'Responsive Design',
    playful: 'Playful Theme',
    modern: 'Modern Stack',
  },
} as const;

export const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1578296566078-840f4433b414?w=800&q=80';
