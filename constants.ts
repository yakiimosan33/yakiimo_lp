import { Album, NavItem, NewsItem, TourDate } from './types';

export const ARTIST_NAME = "YAKIIMO";

export const NAV_ITEMS: NavItem[] = [
  { label: 'News', href: '#news' },
  { label: 'Music', href: '#music' },
  { label: 'Tour', href: '#tour' },
  { label: 'Contact', href: '#contact' },
];

export const LATEST_NEWS: NewsItem[] = [
  { id: '1', date: '2024.05.20', title: 'New EP "Sweet Skin" Releases Worldwide', category: 'Release' },
  { id: '2', date: '2024.05.15', title: 'YAKIIMO Autumn Tour 2024 Announced', category: 'Tour' },
  { id: '3', date: '2024.04.01', title: 'Featured in "Minimalist Soundscapes" Magazine', category: 'Media' },
];

export const DISCOGRAPHY: Album[] = [
  {
    id: 'a1',
    title: 'STEAM',
    year: '2024',
    type: 'Album',
    coverUrl: 'https://picsum.photos/600/600?grayscale&random=1',
    tracks: [
      { title: 'Vapor', duration: '3:45' },
      { title: 'Roasted', duration: '4:12' },
      { title: 'Golden Hue', duration: '3:20' },
    ]
  },
  {
    id: 'a2',
    title: 'EMBER',
    year: '2023',
    type: 'EP',
    coverUrl: 'https://picsum.photos/600/600?grayscale&random=2',
    tracks: [
      { title: 'Burning Low', duration: '2:55' },
      { title: 'Ash White', duration: '3:30' },
    ]
  },
  {
    id: 'a3',
    title: 'HOLLOW',
    year: '2022',
    type: 'Single',
    coverUrl: 'https://picsum.photos/600/600?grayscale&random=3',
    tracks: [
      { title: 'Hollow Inside', duration: '4:01' },
    ]
  },
];

export const TOUR_DATES: TourDate[] = [
  { id: 't1', date: '2024.10.15', city: 'Tokyo', venue: 'Liquid Room', ticketStatus: 'Available', ticketUrl: '#' },
  { id: 't2', date: '2024.10.17', city: 'Osaka', venue: 'Big Cat', ticketStatus: 'Sold Out' },
  { id: 't3', date: '2024.10.20', city: 'Kyoto', venue: 'Muse', ticketStatus: 'Available', ticketUrl: '#' },
  { id: 't4', date: '2024.10.25', city: 'Fukuoka', venue: 'Drum Logos', ticketStatus: 'Coming Soon' },
];