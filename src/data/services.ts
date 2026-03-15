export interface ServiceSize {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  images: { src: string; alt: string; corner: string }[];
  sizes?: ServiceSize[];
  ctaText: string;
  ctaLink: string;
}

export const services: Service[] = [
  {
    id: 'blumenkraenze',
    slug: 'blumenkraenze',
    title: 'Blumenkränze',
    subtitle: 'Zeitlose Eleganz aus natürlichen Blumen',
    shortDescription: 'Handgefertigte Blumenkränze mit Liebe zum Detail. Jeder Kranz ist ein Unikat aus sorgfältig ausgewählten frischen Blüten.',
    fullDescription: 'Ein handgefertigter Blumenkranz von Miriam Mangold ist weit mehr als nur Dekoration – er ist ein Ausdruck von Schönheit und Individualität. Mit geschickten Händen und einem Gespür für Ästhetik komponiert sie jeden Kranz zu einem kleinen Kunstwerk, das natürliche Eleganz verkörpert. Die Verwendung frischer, hochwertiger Blumen sorgt für eine lebendige Ausstrahlung und einen subtilen Duft, der jeden Raum verwandelt. Ob als traumhafte Tischdekoration für Ihr Hochzeitsfest, als stimmungsvoller Wandschmuck oder als eleganter Blickfang bei besonderen Anlässen – Miriam Mangolds Blumenkränze hinterlassen einen bleibenden Eindruck.',
    heroImage: '/images/services/blumenkraenze/kranz_standard.jpg',
    images: [
      { src: '/images/services/blumenkraenze/kranz_standard.jpg', alt: 'Standard Blumenkranz', corner: 'top-right' },
      { src: '/images/services/blumenkraenze/Kranz Standard .jpg', alt: 'Standard Blumenkranz Variant', corner: 'top-right' },
      { src: '/images/services/blumenkraenze/trauerkranz.jpg', alt: 'Trauerkranz', corner: 'bottom-left' },
      { src: '/images/services/blumenkraenze/trauerkranz_auf_fell_weiss.jpg', alt: 'Trauerkranz auf weißem Fell', corner: 'bottom-left' },
    ],
    sizes: [
      { name: 'Groß', description: 'Beeindruckende Statement-Stücke für Eingänge, Tische und festliche Inszenierungen' },
      { name: 'Mittel', description: 'Perfekte Balance zwischen Präsenz und Feinheit für mittlere Räume' },
      { name: 'Klein', description: 'Intime Akzente für Fensterbänke, Nachttische und persönliche Gestecke' },
    ],
    ctaText: 'Kontakt aufnehmen',
    ctaLink: '/kontakt',
  },
  {
    id: 'loops',
    slug: 'loops',
    title: 'Moderne Florale Loops',
    subtitle: 'Der zeitgemäße Schwester des traditionellen Kranzes',
    shortDescription: 'Moderne, reduzierte Alternative zum traditionellen Kranz. Organische Form mit stilvollen Akzenten.',
    fullDescription: 'Florale Loops verbinden die traditionelle Kunst der Floristik mit modernem minimalistischem Design – eine Synthese, die Miriam Mangold meisterhaft beherrscht. Im Gegensatz zum klassischen Rundkranz präsentiert sich der Loop als offene, fließende Komposition, die Raum für Atemluft und visuelle Leichtigkeit lässt. Diese moderne Interpretation eignet sich besonders für zeitgenössische Bräute, die Individualität und Understatement gleichermaßen suchen. Die Loops werden aus sorgfältig ausgewählten Saisonblumen gefertigt, die in ihrer natürlichen Schönheit harmonieren und doch jeden für sich strahlen lassen.',
    heroImage: '/images/services/loops/loop_standard_rot_gruen.jpg',
    images: [
      { src: '/images/services/loops/loop_standard_rot_gruen.jpg', alt: 'Loop in Rot und Grün', corner: 'top-right' },
      { src: '/images/services/loops/Loop Standard .jpg', alt: 'Standard Floral Loop', corner: 'top-right' },
      { src: '/images/services/loops/loop_gross_arbeitstisch.jpg', alt: 'Großer Loop am Arbeitstisch', corner: 'top-right' },
    ],
    sizes: [
      { name: 'Groß', description: 'Dramatische, raumgreifende Installationen für prächtige Festlocation' },
      { name: 'Mittel', description: 'Ausgewogene Proportionen für Dining-Tische und Empfangsbereiche' },
      { name: 'Klein', description: 'Subtiler Luxus als Anstecker, Tischkarten-Accessoire oder Braut-Haarschmuck' },
    ],
    ctaText: 'Kontakt aufnehmen',
    ctaLink: '/kontakt',
  },
  {
    id: 'bluemenstrausse',
    slug: 'bluemenstrausse',
    title: 'Individuelle Blumensträuße',
    subtitle: 'Frische Blumen, mit Liebe zusammengestellt',
    shortDescription: 'Jeder Strauss ist eine Liebeserklärung an die Schönheit der Natur. Persönlich und einzigartig.',
    fullDescription: 'Ein Blumenstrauß von Miriam Mangold ist weit mehr als die Summe seiner Einzelteile – er ist ein durchdachtes Kunstwerk, das Emotionen weckt und Momente unvergesslich macht. Mit geschlossenen Augen wählt sie jede Blume mit Bedacht aus, denn sie weiß: Ein perfekter Strauss entsteht aus der harmonischen Verbindung von Form, Farbe und Duft. Die Verwendung ausschließlich frischer, sorgfältig behandelter Blumen garantiert eine lange Haltbarkeit und strahlende Frische bis zum letzten Moment Ihres Festes.',
    heroImage: '/images/services/bluemenstrausse/brautsrauss_lila.jpg',
    images: [
      { src: '/images/services/bluemenstrausse/brautsrauss_lila.jpg', alt: 'Brautstrauß in Lila', corner: 'bottom-left' },
      { src: '/images/services/bluemenstrausse/strauss_weiss.jpg', alt: 'Weißer Blumenstrauß', corner: 'bottom-left' },
    ],
    sizes: [
      { name: 'Brautstrauß', description: 'Der elegante Begleiter Ihres großen Tages – maßgeschneidert zu Ihrem Kleid und Ihrer Vision' },
      { name: 'Besondere Anlässe', description: 'Geburtstage, Jubiläen, Taufen und alle Momente, die gefeiert werden sollen' },
      { name: 'Liebesgrüße', description: 'Romantische Gestecke als Zeichen der Zuneigung' },
    ],
    ctaText: 'Individuellen Strauss anfragen',
    ctaLink: '/kontakt',
  },
  {
    id: 'adventskraenze',
    slug: 'adventskraenze',
    title: 'Traditionelle Adventskränze',
    subtitle: 'Gemütlichkeit und Vorfreude',
    shortDescription: 'Traditionelles Handwerk für die schönste Zeit des Jahres. Natürliche Materialien und frische Tannenzweige.',
    fullDescription: 'In der Werkstatt von Miriam Mangold entstehen Adventskränze, die das Herz erwärmen und Tradition lebendig halten. Jeder Kranz wird mit denselben sorgfältigen Händen gefertigt, die auch die großen Momente des Jahres verschönern – nur diesmal mit dem Zauber der Weihnachtszeit. Frischer Tannengrün, aromatische Zapfen, leuchtende Dekorationen und vier Kerzen für die vier Adventssonntage ergeben ein Ensemble, das Gemütlichkeit und Vorfreude verströmt. Der Duft von Tanne erfüllt den Raum.',
    heroImage: '/images/services/adventskraenze/kranz_hortensie_mit_kerze.jpg',
    images: [
      { src: '/images/services/adventskraenze/kranz_hortensie_mit_kerze.jpg', alt: 'Adventskranz mit Hortensien und Kerze', corner: 'top-right' },
      { src: '/images/services/adventskraenze/kranz_lang_kerzen_weiss.jpg', alt: 'Langer Adventskranz mit weißen Kerzen', corner: 'top-right' },
    ],
    ctaText: 'Adventskranz bestellen',
    ctaLink: '/kontakt',
  },
  {
    id: 'frisuren',
    slug: 'frisuren',
    title: 'Blumenkränze & Haar-Accessoires',
    subtitle: 'Zarte Blüten für Ihr Haar',
    shortDescription: 'Romantischer Schmuck für unvergessliche Momente. Florale Haar-Accessoires die Bräute verzaubern.',
    fullDescription: 'Ein floraler Haarschmuck von Miriam Mangold ist das i-Tüpfelchen, das Ihre Frisur vollständig macht und Ihr Erscheinungsbild in ein Kunstwerk verwandelt. Mit dem geschickten Einsatz frischer oder sorgfältig konservierter Blumen entstehen kronenartige Kreationen, die wie ein zarter Schleier auf dem Haar liegen und gleichzeitig auffallen. Besonders für Bräute ist dieser Accessoire der Moment, in dem der Traum vom perfekten Hochzeitstag sichtbar wird.',
    heroImage: '/images/services/frisuren/haarkranz_ganz.jpg',
    images: [
      { src: '/images/services/frisuren/haarkranz_ganz.jpg', alt: 'Voller Haarkranz', corner: 'top-right' },
    ],
    sizes: [
      { name: 'Bräute', description: 'Der perfekte Braut-Schmuck für den großen Tag' },
      { name: 'Festanlässe', description: 'Abschlüsse, Fotoshootings, romantische Abendessen' },
      { name: 'Fotoshootings', description: 'Professionelle Accessoires für unvergessliche Bilder' },
    ],
    ctaText: 'Haarschmuck anfragen',
    ctaLink: '/kontakt',
  },
  {
    id: 'workshops',
    slug: 'workshops',
    title: 'Kreative Blumen-Workshops',
    subtitle: 'Lernen Sie die Kunst der Floristik',
    shortDescription: 'Workshops für Anfänger und Fortgeschrittene. Lernen Sie in entspannter Atmosphäre.',
    fullDescription: 'Die Workshops von Miriam Mangold bieten Ihnen die einzigartige Möglichkeit, in die Welt der Floristik einzutauchen und selbst zum Künstler zu werden. In entspannter, herzlicher Atmosphäre vermittelt sie nicht nur Techniken und Kniffe des Handwerks, sondern auch die Liebe zum Detail und die Freude am kreativen Schaffen. Ob als Private Party mit Freunden, als Team-Event zur Stärkung des Zusammenhalts oder als Einzelperson auf der Suche nach neuem Hobby – jeder Workshop wird zu einem Erlebnis.',
    heroImage: '/images/services/workshops/loop_workshop_done_small.jpg',
    images: [
      { src: '/images/services/workshops/loop_workshop_done_small.jpg', alt: 'Workshop Loop Ergebnis klein', corner: 'bottom-right' },
      { src: '/images/services/workshops/loop_workshop_klein.jpg', alt: 'Kleiner Workshop Loop', corner: 'bottom-right' },
      { src: '/images/services/workshops/workshop_schere.jpg', alt: 'Workshop mit Schere', corner: 'bottom-right' },
    ],
    sizes: [
      { name: 'Private Parties', description: 'Feiern Sie einen besonderen Anlass mit einem kreativen Blumen-Workshop' },
      { name: 'Team Events', description: 'Stärken Sie Ihr Team durch gemeinsames kreatives Erleben' },
      { name: 'Einzelpersonen', description: 'Entdecken Sie Ihre kreative Ader in entspannter Einzelstunde' },
    ],
    ctaText: 'Workshop buchen',
    ctaLink: '/kontakt',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}