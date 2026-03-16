// Page content for Mimis-kreativstudio
// Central location for all page text content

export interface PageMeta {
  title: string;
  description: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showCta?: boolean;
}

export interface IntroContent {
  quote: string;
}

// Page metadata
export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: 'Startseite',
    description: 'Mimis-kreativstudio - Handgefertigte Blumenkreationen für Ihre besonderen Momente. Blumenkränze, Sträuße, Adventskränze, Haar-Accessoires und Workshops.',
  },
  leistungen: {
    title: 'Leistungen',
    description: 'Entdecken Sie meine handgefertigten Blumenkreationen: Blumenkränze, Loops, Blumensträuße, Adventskränze, Haar-Accessoires und Workshops.',
  },
  ueberMich: {
    title: 'Über mich',
    description: 'Lernen Sie Miriam Mangold kennen – Ihre Blumenkunst-Meisterin für handgefertigte Blumenkreationen in der Region Stuttgart.',
  },
  kontakt: {
    title: 'Kontakt',
    description: 'Kontaktieren Sie Mimis-kreativstudio für individuelle Blumenkreationen, Workshops und Anfragen.',
  },
  galerie: {
    title: 'Galerie',
    description: 'Entdecken Sie meine handgefertigten Blumenkreationen – von eleganten Sträußen bis hin zu kunstvollen Kränzen und Haar-Accessoires.',
  },
  impressum: {
    title: 'Impressum',
    description: 'Impressum und rechtliche Informationen für Mimis-kreativstudio.',
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    description: 'Informationen zum Datenschutz bei Mimis-kreativstudio gemäß DSGVO.',
  },
};

// Hero sections
export const heroContent: Record<string, HeroContent> = {
  home: {
    title: 'Mimis-kreativstudio',
    subtitle: 'Handgefertigte Blumenkreationen für Ihre besonderen Momente',
    backgroundImage: '/images/pride_back_hair_landscape_background.webp',
    showCta: true,
  },
  leistungen: {
    title: 'Meine Leistungen',
    subtitle: 'Handgefertigte Blumenkreationen für Ihre besonderen Momente',
    backgroundImage: '/images/small_strauss_on_brown_hide.webp',
    showCta: false,
  },
  kontakt: {
    title: 'Kontakt',
    subtitle: 'Lassen Sie uns gemeinsam etwas Schönes erschaffen',
    backgroundImage: '/images/pink_strauss_on_brown_table_outdoors.webp',
    showCta: false,
  },
};

// Introduction section
export const introContent: IntroContent = {
  quote: '"Jede Blume erzählt eine Geschichte. Lassen Sie uns gemeinsam Ihre Geschichte in wunderschönen Arrangements verewigen."',
};

// Services section header
export const servicesHeader = {
  title: 'Meine Leistungen',
  subtitle: 'Entdecken Sie meine handgefertigten Blumenkreationen für jeden besonderen Anlass',
  ctaText: 'Alle Leistungen ansehen',
};

// About section
export const aboutContent = {
  title: 'Hallo, ich bin Miriam',
  paragraphs: [
    'Willkommen bei <strong>Mimis-kreativstudio</strong> – meinem kleinen Reich der Blumen und kreativen Gestaltung. Hier entstehen mit viel Liebe zum Detail handgefertigte Blumenkreationen, die Ihre besonderen Momente unvergesslich machen.',
    'Als Blumenkunst-Meisterin verbinde ich traditionelles Handwerk mit modernem Design. Ob Hochzeit, Adventszeit oder ein ganz persönlicher Anlass – ich gestalte individuelle Arrangements, die Ihre Vision Wirklichkeit werden lassen.',
    'In meinen Workshops teile ich meine Leidenschaft für die Kunst der Blumenbindekunst und möchte Ihnen beibringen, wie Sie selbst wunderschöne Blumenkreationen gestalten können.',
  ],
  highlights: [
    { value: '10+', label: 'Jahre Erfahrung' },
    { value: '500+', label: 'zufriedene Kunden' },
    { value: '6', label: 'Kernleistungen' },
  ],
  ctaText: 'Lernen Sie mich kennen',
  photoAlt: 'Miriam Mangold - Inhaberin von Mimis-kreativstudio',
  photoSrc: '/images/workshop_collage_packaged.webp',
};

// CTA section
export const ctaContent = {
  title: 'Bereit für Ihre Traumkreation?',
  subtitle: 'Lassen Sie uns gemeinsam etwas Besonderes gestalten. Kontaktieren Sie mich für ein unverbindliches Gespräch über Ihre Wünsche.',
  primaryButton: {
    text: 'Hallo sagen',
    href: '/kontakt',
  },
  secondaryButton: {
    text: 'Leistungen entdecken',
    href: '/services',
  },
  contactCards: [
    {
      title: 'E-Mail',
      value: 'hello@mimis-kreativstudio.de',
      icon: 'email',
    },
    {
      title: 'Telefon',
      value: '+49 (0) 123 456 789',
      icon: 'phone',
    },
    {
      title: 'Standort',
      value: 'Region Stuttgart',
      icon: 'location',
    },
  ],
};

// Contact page content
export const contactContent = {
  hero: {
    title: 'Kontakt',
    subtitle: 'Lassen Sie uns gemeinsam etwas Schönes erschaffen',
  },
  form: {
    title: 'Schreiben Sie mir',
    fields: {
      name: { label: 'Name *', placeholder: 'Ihr vollständiger Name' },
      email: { label: 'E-Mail *', placeholder: 'ihre@email.de' },
      phone: { label: 'Telefon', placeholder: 'Ihre Telefonnummer' },
      message: { label: 'Nachricht *', placeholder: 'Erzählen Sie mir von Ihrer Vision...' },
    },
    submitButton: 'Nachricht senden',
    honeypotLabel: "Don't fill this out if you're human:",
  },
  businessInfo: {
    title: 'Mimis-Kreativstudio',
    description: 'Individuelle Blumenkreationen für Ihre besonderen Momente. Ich freue mich darauf, Ihre Visionen zu verwirklichen.',
  },
  contactDetails: {
    title: 'Kontaktdaten',
    address: { label: 'Atelier', value: 'Coming soon' },
    email: { label: 'E-Mail' },
  },
  businessHours: {
    title: 'Öffnungszeiten',
    days: [
      { day: 'Montag - Freitag', hours: 'Coming soon' },
      { day: 'Samstag', hours: 'Coming soon' },
      { day: 'Sonntag', hours: 'Geschlossen' },
    ],
    note: '* Gerne fertige ich auf Wunsch Ihre Traumkreation. Kontaktieren Sie mich!',
  },
  mapSection: {
    title: 'Mein Atelier finden',
    subtitle: 'Hier entsteht Ihre individuelle Blumenkreation',
    workshopTitle: 'Workshop-Standort',
    workshopDescription: 'Gerne stelle ich eine schöne Location für euren Workshop zur Verfügung oder wir finden gemeinsam einen Ort, an dem Ihr euch wohl fühlt.<br>Du möchtest den Workshop bei dir Zuhause machen? <br> Sehr gerne komme ich zu dir!',
    locationRange: '📍 60km Umkreis Böbingen an der Rems',
  },
  socialSection: {
    title: 'Folgen Sie mir',
    subtitle: 'Lassen Sie sich von meinen Kreationen inspirieren',
    platforms: [
      { name: 'Instagram', href: 'https://www.instagram.com/mimis_kreativstudio/' },
      { name: 'Pinterest', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  },
  ctaSection: {
    title: 'Was wünschst Du dir?',
    subtitle: 'Ich stehe Ihnen gerne zur Verfügung. Kontaktieren Sie mich für individuelle Anfragen oder um einen Termin zu vereinbaren.',
    buttonText: 'Jetzt kontaktieren',
  },
};

// Gallery page content
export const galleryContent = {
  hero: {
    title: 'Galerie',
    subtitle: 'Entdecken Sie meine handgefertigten Blumenkreationen – von eleganten Sträußen bis hin zu kunstvollen Kränzen und romantischen Haar-Accessoires.',
  },
  cta: {
    title: 'Gefällt Ihnen was Sie sehen?',
    subtitle: 'Lassen Sie uns gemeinsam Ihre Traumkreation gestalten. Kontaktieren Sie mich für ein unverbindliches Gespräch.',
    primaryButton: { text: 'Hallo sagen', href: '/kontakt' },
    secondaryButton: { text: 'Alle Leistungen', href: '/leistungen' },
  },
};

// Legal pages
export const legalContent = {
  impressum: {
    title: 'Impressum',
    sections: {
      provider: {
        title: 'Angaben gemäß § 5 TMG',
        lines: ['businessName', 'ownerName', 'street', 'city'],
      },
      contact: {
        title: 'Kontakt',
      },
      vat: {
        title: 'Umsatzsteuer-ID',
        text: 'Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:',
      },
      content: {
        title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
        lines: ['ownerName', 'fullAddress'],
      },
    },
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    sections: [
      {
        title: '1. Datenschutz auf einen Blick',
        subsections: [
          {
            title: 'Allgemeine Hinweise',
            text: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
          },
          {
            title: 'Datenerfassung auf dieser Website',
            text: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
          },
        ],
      },
      {
        title: '2. Kontaktformular',
        text: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      },
      {
        title: '3. Ihre Rechte',
        text: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.',
      },
      {
        title: '4. Hosting',
        text: 'Diese Website wird gehostet bei [Hosting-Provider]. Der Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, die Adresse der besuchten Webseiten, Datum und Uhrzeit der Anfrage, übertragene Datenmenge, Browsertyp und -version, Betriebssystem, Referrer URL und anfragender Provider.',
      },
    ],
    footer: 'Stand: März 2026',
  },
};

// Navigation
export const navContent = {
  items: [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/services' },
    { label: 'Über mich', href: '/ueber-mich' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
};

// Footer
export const footerContent = {
  brand: {
    title: 'Mimis-kreativstudio',
    description: 'Handgefertigte Blumenkreationen für Ihre besonderen Momente. Mit Liebe zum Detail und natürlicher Schönheit.',
  },
  services: {
    title: 'Leistungen',
    links: [
      { label: 'Blumenkränze', href: '/services/blumenkraenze' },
      { label: 'Loops', href: '/services/loops' },
      { label: 'Blumensträuße', href: '/services/bluemenstrausse' },
      { label: 'Adventskränze', href: '/services/adventskraenze' },
      { label: 'Frisuren', href: '/services/frisuren' },
      { label: 'Workshops', href: '/services/workshops' },
    ],
  },
  company: {
    title: 'Unternehmen',
    links: [
      { label: 'Über mich', href: '/ueber-mich' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
  copyright: 'Alle Rechte vorbehalten.',
};
