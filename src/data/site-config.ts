// Site-wide configuration for Mimis-Kreativstudio
// Central location for all site metadata, contact info, and social links

export interface SiteConfig {
  // Business Info
  businessName: string;
  ownerName: string;

  // Address
  address: {
    street: string;
    zipCode: string;
    city: string;
    fullAddress: string;
  };

  // Contact
  email: string;
  phone?: string;

  // Social Links
  social: {
    instagram: string;
    facebook?: string;
    pinterest?: string;
  };

  // Legal
  vatId?: string;
}

export const siteConfig: SiteConfig = {
  businessName: 'Mimis-Kreativstudio',
  ownerName: 'Miriam Mangold',

  address: {
    street: 'Amselweg 3',
    zipCode: '73560',
    city: 'Böbingen an der Rems',
    get fullAddress() {
      return `${this.street}, ${this.zipCode} ${this.city}`;
    },
  },

  // Note: Email removed - using Instagram for contact instead
  // email: 'hello@mimis-kreativstudio.de',
  phone: undefined,

  social: {
    instagram: 'https://www.instagram.com/mimis_kreativstudio/',
    facebook: undefined,
    pinterest: undefined,
  },

  vatId: undefined,
};
