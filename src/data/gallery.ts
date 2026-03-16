// Gallery data for Mimis-kreativstudio
// Central location for all gallery images organized by category

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryCategory {
  name: string;
  description: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    name: 'Blumenkränze',
    description: 'Zeitlose Eleganz aus natürlichen Blumen',
    images: [
      { src: '/images/kranz_standard.webp', alt: 'Blumenkranz Standard', caption: 'Klassischer Blumenkranz' },
      { src: '/images/kranz_hortensie_mit_kerze.webp', alt: 'Hortensienkranz mit Kerze', caption: 'Hortensienkranz mit LED-Kerze' },
      { src: '/images/kranz_lang_kerzen_weiss.webp', alt: 'Langer Kranz mit weißen Kerzen', caption: 'Langer Kranz mit weißen Kerzen' },
      { src: '/images/Kranz Standard .webp', alt: 'Blumenkranz Standard Variante', caption: 'Standard Blumenkranz' },
    ],
  },
  {
    name: 'Loops',
    description: 'Moderne Eleganz – der zeitgemäße Kranz',
    images: [
      { src: '/images/loop_standard_rot_gruen.webp', alt: 'Loop in Rot und Grün', caption: 'Loop in Rot und Grün' },
      { src: '/images/loop_gross_arbeitstisch.webp', alt: 'Großer Loop am Arbeitstisch', caption: 'Großer Loop' },
      { src: '/images/loop_workshop_done_small.webp', alt: 'Workshop Loop fertiggestellt', caption: 'Workshop Ergebnis' },
      { src: '/images/loop_workshop_klein.webp', alt: 'Kleiner Workshop Loop', caption: 'Kleiner Workshop Loop' },
    ],
  },
  {
    name: 'Blumensträuße',
    description: 'Natürliche Schönheit für jeden Anlass',
    images: [
      { src: '/images/brautsrauss_lila.webp', alt: 'Lila Brautstrauß', caption: 'Lila Brautstrauß' },
      { src: '/images/strauss_weiss.webp', alt: 'Weißer Blumenstrauß', caption: 'Weißer Blumenstrauß' },
    ],
  },
  {
    name: 'Adventskränze',
    description: 'Festliche Tradition für die schönste Zeit',
    images: [
      { src: '/images/kranz_hortensie_mit_kerze.webp', alt: 'Adventskranz mit Hortensien', caption: 'Adventskranz mit Hortensien' },
    ],
  },
  {
    name: 'Frisuren',
    description: 'Romantischer Blütenschmuck für Ihr Haar',
    images: [
      { src: '/images/haarkranz_ganz.webp', alt: 'Haarkranz ganz', caption: 'Haarkranz – Blütenschmuck' },
    ],
  },
  {
    name: 'Workshops',
    description: 'Kreative Erlebnisse in der Blumenkunst',
    images: [
      { src: '/images/loop_workshop_done_small.webp', alt: 'Workshop Teilnehmer', caption: 'Workshop Teilnehmer' },
      { src: '/images/loop_workshop_klein.webp', alt: 'Workshop Kleinarbeit', caption: 'Workshop Kleinarbeit' },
      { src: '/images/workshop_schere.webp', alt: 'Workshop Schere', caption: 'Mein Werkzeug' },
    ],
  },
  {
    name: 'Trauerkränze',
    description: 'Ehrende Kreationen für Abschiede',
    images: [
      { src: '/images/trauerkranz.webp', alt: 'Trauerkranz', caption: 'Trauerkranz' },
      { src: '/images/trauerkranz_auf_fell_weiss.webp', alt: 'Trauerkranz auf weißem Fell', caption: 'Trauerkranz auf Fell' },
    ],
  },
];

// Helper function to generate category ID (for anchor links)
export function getCategoryId(name: string): string {
  return name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/\s/g, '-');
}

// Helper function to get all images flattened
export function getAllImages(): GalleryImage[] {
  return galleryCategories.flatMap(category => 
    category.images.map(img => ({ ...img, category: category.name }))
  );
}
