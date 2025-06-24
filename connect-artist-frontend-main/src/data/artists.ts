
import { Artist } from '@/types/artist';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    category: ['Singers', 'Musicians'],
    bio: 'Classical and Bollywood vocalist with 10+ years of experience. Perfect for weddings and cultural events.',
    priceRange: '₹25,000 - ₹50,000',
    location: 'Mumbai, Maharashtra',
    languages: ['Hindi', 'English', 'Marathi'],
    image: 'https://images.unsplash.com/photo-1494790108755-2616c96da99d?w=400&h=400&fit=crop&crop=face',
    featured: true
  },
  {
    id: '2',
    name: 'DJ Arjun',
    category: ['DJs'],
    bio: 'Professional DJ specializing in Bollywood, EDM, and Punjabi beats. 500+ successful events.',
    priceRange: '₹50,000 - ₹1,00,000',
    location: 'Delhi, NCR',
    languages: ['Hindi', 'English', 'Punjabi'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    featured: true
  },
  {
    id: '3',
    name: 'Kavya Dance Troupe',
    category: ['Dancers'],
    bio: 'Contemporary and classical dance performances. Award-winning choreography team.',
    priceRange: '₹10,000 - ₹25,000',
    location: 'Bangalore, Karnataka',
    languages: ['English', 'Kannada', 'Tamil'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Rohit Kumar',
    category: ['Comedians', 'Speakers'],
    bio: 'Stand-up comedian and motivational speaker. Corporate events specialist.',
    priceRange: '₹25,000 - ₹50,000',
    location: 'Pune, Maharashtra',
    languages: ['Hindi', 'English', 'Marathi'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Sitar Strings',
    category: ['Musicians'],
    bio: 'Traditional Indian classical music ensemble featuring sitar, tabla, and harmonium.',
    priceRange: '₹10,000 - ₹25,000',
    location: 'Jaipur, Rajasthan',
    languages: ['Hindi', 'English'],
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'Magic Mike',
    category: ['Magicians'],
    bio: 'Professional magician and illusionist. Perfect for birthday parties and corporate events.',
    priceRange: 'Under ₹10,000',
    location: 'Chennai, Tamil Nadu',
    languages: ['English', 'Tamil', 'Telugu'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
  }
];
