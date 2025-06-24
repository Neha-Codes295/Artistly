
export interface Artist {
  id: string;
  name: string;
  category: string[];
  bio: string;
  priceRange: string;
  location: string;
  languages: string[];
  image?: string;
  featured?: boolean;
}

export interface BookingRequest {
  id: string;
  artistId: string;
  artistName: string;
  eventDate: string;
  eventType: string;
  location: string;
  budget: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export const CATEGORIES = [
  'Singers',
  'Dancers', 
  'Speakers',
  'DJs',
  'Musicians',
  'Comedians',
  'Magicians'
];

export const LANGUAGES = [
  'English',
  'Hindi',
  'Tamil',
  'Telugu',
  'Kannada',
  'Malayalam',
  'Bengali',
  'Marathi',
  'Gujarati',
  'Punjabi'
];

export const PRICE_RANGES = [
  'Under ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  'Above ₹1,00,000'
];
