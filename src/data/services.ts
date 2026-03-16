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
    subtitle: 'Handgemachte Liebesbriefe aus Blüten und Blättern',
    shortDescription: 'Entdecken Sie Kranzwerke, die Räume mit Eleganz erfüllen und Herzen berühren. Jeder Kranz ist ein einzigartiges Kunstwerk aus sorgfältig ausgewählten, duftenden Saisonblüten.',
    fullDescription: 'Ein handgefertigter Blumenkranz von Miriam Mangold ist mehr als Dekoration – er ist ein lebendiges Kunstwerk, das Emotionen weckt und Momente unvergesslich macht. Mit geschickten Händen und einem Gespür für natürliche Ästhetik arrangiert sie frische, aromatische Blüten zu harmonischen Kompositionen, die den Raum mit sanftem Duft und visueller Magie erfüllen. Ob als beeindruckende Tischdekoration für Ihre Hochzeit, als herzliches Willkommenszeichen an der Haustür oder als verschenkte Freude an liebe Menschen – jeder Kranz trägt die Handschrift authentischer Handwerkskunst und wird zu einem liebevollen Begleiter besonderer Augenblicke.',
    heroImage: '/images/services/blumenkraenze/kranz_standard.webp',
    images: [
      { src: '/images/services/blumenkraenze/kranz_standard.webp', alt: 'Standard Blumenkranz', corner: 'top-right' },
      { src: '/images/services/blumenkraenze/Kranz Standard .webp', alt: 'Standard Blumenkranz Variant', corner: 'top-right' },
      { src: '/images/services/blumenkraenze/trauerkranz.webp', alt: 'Trauerkranz', corner: 'bottom-left' },
      { src: '/images/services/blumenkraenze/trauerkranz_auf_fell_weiss.webp', alt: 'Trauerkranz auf weißem Fell', corner: 'bottom-left' },
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
    subtitle: 'Zeitlos-modernes Statement für anspruchsvolle Momente',
    shortDescription: 'Lassen Sie sich verzaubern von organischen Formen, die Tradition neu interpretieren. Florale Loops sind die perfekte Balance zwischen natürlicher Eleganz und zeitgenössischem Design.',
    fullDescription: 'Florale Loops sind die moderne Seele der Floristik – offen, fließend und voller Leichtigkeit. Anders als geschlossene Kränze atmen diese Kompositionen durch ihre organische Form, schaffen visuelle Spannung und lassen Raum für Emotionen. Miriam Mangold erschafft aus sorgfältig auserwählten Saisonblumen und zarten Zweigen künstlerische Statement-Stücke, die sowohl bei stilvollen Hochzeiten als auch als besondere Geschenke begeistern. Die natürliche Textur der Blüten, das Spiel aus Farbe und Form – jeder Loop wird zu einem einzigartigen Kunstwerk, das zeitlose Eleganz mit modernem Flair verbindet und Ihre Räume mit natürlicher Schönheit erfüllt.',
    heroImage: '/images/services/loops/loop_standard_rot_gruen.webp',
    images: [
      { src: '/images/services/loops/loop_standard_rot_gruen.webp', alt: 'Loop in Rot und Grün', corner: 'top-right' },
      { src: '/images/services/loops/Loop Standard .webp', alt: 'Standard Floral Loop', corner: 'top-right' },
      { src: '/images/services/loops/loop_gross_arbeitstisch.webp', alt: 'Großer Loop am Arbeitstisch', corner: 'top-right' },
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
    subtitle: 'Einzigartige Blütenkompositionen, die Herzen öffnen',
    shortDescription: 'Verschenken Sie Freude mit Sträußen, die Geschichten erzählen und Emotionen wecken. Jede Blume wird mit Bedacht gewählt, um ein harmonisches Kunstwerk aus Farbe, Form und Duft zu erschaffen.',
    fullDescription: 'Ein Blumenstrauß von Miriam Mangold ist eine Liebeserklärung an die Schönheit des Augenblicks – ob als Begleiter Ihres großen Tages, als Überraschung für einen lieben Menschen oder als farbenfroher Akzent für Ihr Zuhause. Mit einem feinen Gespür für Farbharmonie und Textur arrangiert sie ausgewählte Saisonblüten zu lebendigen Kompositionen, die den Betrachter verzaubern. Fühlen Sie die Seide der Blütenblätter, riechen Sie den sanften Duft frischer Blumen, erleben Sie die Freude, die ein handgefertigter Strauss verschenkt. Perfekt als Brautbegleiter, Geburtstagsüberraschung oder einfach, um jemandem zu sagen: Du bist mir wichtig.',
    heroImage: '/images/services/blumenstrausse/brautsrauss_lila.webp',
    images: [
      { src: '/images/services/blumenstrausse/brautsrauss_lila.webp', alt: 'Brautstrauß in Lila', corner: 'bottom-left' },
      { src: '/images/services/blumenstrausse/strauss_weiss.webp', alt: 'Weißer Blumenstrauß', corner: 'bottom-left' },
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
    subtitle: 'Magie der Weihnachtszeit, handgefertigt mit Herz',
    shortDescription: 'Erleben Sie die Vorfreude auf Weihnachten mit einem Kranz, der Tradition und Gemütlichkeit atmet. Frischer Tannengrün, aromatische Zapfen und warmes Kerzenlicht erfüllen Ihr Zuhause mit festlicher Stimmung.',
    fullDescription: 'In den Wochen vor Weihnachten entstehen bei Miriam Mangold Adventskränze, die Herzen erwärmen und die Magie der Festtage spürbar machen. Mit denselben liebevollen Händen, die das ganze Jahr über zauberhafte Floristik schaffen, bindet sie frischen, duftenden Tannengrün zu Kränzen, die Geschichten erzählen. Natürliche Zapfen, filigrane Beeren und vier Kerzen für die vier Sonntage ergeben ein Ensemble, das Ihr Zuhause in eine Oase der Gemütlichkeit verwandelt. Der aromatische Duft von frischem Tannengrün, das warme Kerzenlicht beim Adventssingen – jeder Kranz wird zum Mittelpunkt liebevoller Familienmomente und begleitet Sie durch die besinnlichste Zeit des Jahres.',
    heroImage: '/images/services/adventskraenze/kranz_hortensie_mit_kerze.webp',
    images: [
      { src: '/images/services/adventskraenze/kranz_hortensie_mit_kerze.webp', alt: 'Adventskranz mit Hortensien und Kerze', corner: 'top-right' },
      { src: '/images/services/adventskraenze/kranz_lang_kerzen_weiss.webp', alt: 'Langer Adventskranz mit weißen Kerzen', corner: 'top-right' },
    ],
    ctaText: 'Adventskranz bestellen',
    ctaLink: '/kontakt',
  },
  {
    id: 'frisuren',
    slug: 'frisuren',
    title: 'Blumenkränze & Haar-Accessoires',
    subtitle: 'Natürliche Schönheit für Ihre kostbarsten Momente',
    shortDescription: 'Verwandeln Sie sich mit floralem Haarschmuck, der wie ein zarter Schleier aus Blüten auf Ihrem Haar liegt. Perfekt für Bräute, Fotoshootings und alle magischen Augenblicke, die unvergessen bleiben sollen.',
    fullDescription: 'Florale Haar-Accessoires sind die Krönung jeder besonderen Frisur – ein Hauch von Natur, der Schönheit auf subtile Weise betont. Miriam Mangold erschafft zarte Kreationen aus frischen oder konservierten Blüten, die wie ein lebendiger Schmuck im Haar wirken und bei jedem Kopfbewegung sanft schwingen. Fühlen Sie die leichte Berührung der Blütenblätter, spüren Sie die Anmut, die solch ein Accessoire verleiht. Ob als Brautschmuck, der den wichtigsten Tag Ihres Lebens verschönert, für romantische Fotoshootings oder besondere Anlässe – jeder Haarkranz wird zu einem vergänglichen Schatz, der Erinnerungen festhält und Ihre Schönheit auf natürliche Weise unterstreicht.',
    heroImage: '/images/services/frisuren/haarkranz_ganz.webp',
    images: [
      { src: '/images/services/frisuren/haarkranz_ganz.webp', alt: 'Voller Haarkranz', corner: 'top-right' },
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
    subtitle: 'Tauchen Sie ein in die zauberhafte Welt der Floristik',
    shortDescription: 'Entdecken Sie Ihre kreative Seite in inspirierenden Workshops, die Freude bereiten und neue Fähigkeiten wecken. Unter Miriams liebevoller Anleitung erschaffen Sie Ihr eigenes Blumenkunstwerk – ein unvergessliches Erlebnis für alle Sinne.',
    fullDescription: 'Miriam Mangolds Workshops laden Sie ein, selbst zum Florist zu werden und die Magie der Blumen hautnah zu erleben. In gemütlicher Atmosphäre, begleitet von aromatischem Kaffee und guter Musik, vermittelt sie nicht nur Techniken des Handwerks, sondern weckt die Freude am kreativen Gestalten. Fühlen Sie die Textur verschiedener Blüten zwischen Ihren Fingern, riechen Sie den Duft frischen Grüns, erleben Sie den Stolz, als Ihr eigenes Kunstwerk Gestalt annimmt. Ob als unvergesslicher Junggesellinnenabschied, kreatives Teambuilding-Event mit Kollegen oder als entspannter Ausgleich zum Alltag – jeder Workshop wird zu einem Erlebnis, das Inspiration schenkt und den Alltag für ein paar Stunden vergisst macht.',
    heroImage: '/images/services/workshops/loop_workshop_done_small.webp',
    images: [
      { src: '/images/services/workshops/loop_workshop_done_small.webp', alt: 'Workshop Loop Ergebnis klein', corner: 'bottom-right' },
      { src: '/images/services/workshops/loop_workshop_klein.webp', alt: 'Kleiner Workshop Loop', corner: 'bottom-right' },
      { src: '/images/services/workshops/workshop_schere.webp', alt: 'Workshop mit Schere', corner: 'bottom-right' },
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