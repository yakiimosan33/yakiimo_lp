export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Release' | 'Tour' | 'Media' | 'Other';
}

export interface Track {
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  type: 'Album' | 'EP' | 'Single';
  coverUrl: string;
  tracks: Track[];
}

export interface TourDate {
  id: string;
  date: string;
  city: string;
  venue: string;
  ticketStatus: 'Available' | 'Sold Out' | 'Coming Soon';
  ticketUrl?: string;
}