export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  country: string;
  businessHours: string;
  timezone: string;
}

export const contactsConfig = {
  nigeria: {
    email: 'info@smartbesttechnology.com',
    phone: '+234 812 109 6818',
    whatsapp: 'https://wa.me/2348121096818',
    address: '7B UDECO MEDICAL ROAD CHEVY VIEW ESTATE, CHEVRON DRIVE',
    city: 'LAGOS, NIGERIA',
    country: 'Nigeria',
    businessHours: 'Monday - Friday, 9:00 AM - 6:00 PM',
    timezone: 'WAT (West Africa Time)'
  } as ContactInfo,
  
  usa: {
    email: 'info@smartbesttechnology.com',
    phone: '+1 (260) 234-0752',
    whatsapp: 'https://wa.me/12602340752',
    address: '2908 LYNN AVE, FORT WAYNE, IN 46805',
    city: 'USA',
    country: 'United States',
    businessHours: 'Monday - Friday, 9:00 AM - 6:00 PM',
    timezone: 'EST (Eastern Standard Time)'
  } as ContactInfo
};

export const getContactInfo = (): ContactInfo => {
  // Default to USA contacts
  return contactsConfig.usa;
};