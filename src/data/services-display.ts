// Services display data for list and grid components
// Simplified version of services for display components

export interface DisplayService {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

// Services for display in ServicesList and ServicesGrid components
// These match the display needs and reference the detailed services data
export const displayServices: DisplayService[] = [
  {
    slug: 'blumenkraenze',
    title: 'Blumenkränze',
    subtitle: 'Zeitlose Eleganz',
    description: 'Handgefertigte Blumenkränze aus natürlichen Blumen, mit Liebe zum Detail gestaltet.',
    image: '/images/lush_kranz_white_hide_grass_bg.webp',
  },
  {
    slug: 'loops',
    title: 'Loops',
    subtitle: 'Moderne Eleganz',
    description: 'Der zeitgemäße Schwester des traditionellen Kranzes – minimalistisch und stilvoll.',
    image: '/images/loop_in_progress_workshop.webp',
  },
  {
    slug: 'bluemenstrausse',
    title: 'Blumensträuße',
    subtitle: 'Natürliche Schönheit',
    description: 'Frische Blumen, mit Liebe zusammengestellt – ein persönliches Statement.',
    image: '/images/lush_strauss_in_hand_garden_background.webp',
  },
  {
    slug: 'adventskraenze',
    title: 'Adventskränze',
    subtitle: 'Festliche Tradition',
    description: 'Traditionelles Handwerk für die schönste Zeit des Jahres mit weihnachtlicher Gemütlichkeit.',
    image: '/images/adventskranz_white_candles_tall_white_bg.webp',
  },
  {
    slug: 'frisuren',
    title: 'Frisuren',
    subtitle: 'Romantischer Schmuck',
    description: 'Zarte Blüten für Ihr Haar – romantischer Schmuck für unvergessliche Momente.',
    image: '/images/services/frisuren/haarkranz_ganz.webp',
  },
  {
    slug: 'workshops',
    title: 'Workshops',
    subtitle: 'Kreatives Erlebnis',
    description: 'Lernen Sie die Kunst der Floristik – für sich selbst oder im Team.',
    image: '/images/services/workshops/loop_workshop_done_small.webp',
  },
];
