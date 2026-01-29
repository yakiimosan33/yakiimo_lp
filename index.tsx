import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, X, Play, Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

// --- Types ---
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

// --- Constants ---
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

// --- Components ---

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-widest z-50 mix-blend-difference text-neutral-900">
            {ARTIST_NAME}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden z-50 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif italic hover:text-gray-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="z-10 text-center px-4 animate-slide-up">
        <h1 className="text-[12vw] leading-none font-serif italic font-thin tracking-tighter text-neutral-900 mix-blend-multiply opacity-90">
          YAKIIMO
        </h1>
        <p className="mt-6 text-sm md:text-base uppercase tracking-[0.3em] text-gray-500 font-light">
          Ephemeral Sounds / Tokyo
        </p>
      </div>

      <div className="absolute bottom-12 animate-pulse">
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
      </div>
    </section>
  );
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <div className="mb-16 md:mb-24 flex items-baseline border-b border-gray-100 pb-4">
        <h2 className="text-4xl md:text-5xl font-serif italic text-neutral-900 mr-6">
          {title}
        </h2>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          {`// ${id}`}
        </span>
      </div>
      <div className="animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-timeline:view()] [animation-range:entry_10%_cover_30%]">
        {children}
      </div>
    </section>
  );
};

const AlbumCard: React.FC<{ album: Album }> = ({ album }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
        <img 
          src={album.coverUrl} 
          alt={album.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
        <div 
          className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-white rounded-full p-4 pl-5 hover:scale-110 transition-transform">
            <Play size={24} className="fill-neutral-900 text-neutral-900" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-serif leading-tight">{album.title}</h3>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{album.type} — {album.year}</p>
        </div>
      </div>
      
      {/* Tracklist expands on hover (desktop) or remains hidden/modal ideally, keep minimal here */}
      <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <ul className="text-xs text-gray-600 space-y-1">
          {album.tracks.map((track, idx) => (
            <li key={idx} className="flex justify-between border-b border-gray-100 pb-1">
              <span>{idx + 1}. {track.title}</span>
              <span className="font-mono">{track.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Discography: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {DISCOGRAPHY.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold tracking-widest mb-2">{ARTIST_NAME}</h2>
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <Navigation />
      
      <Hero />

      {/* News Section */}
      <Section id="news" title="Latest News">
        <div className="space-y-8">
          {LATEST_NEWS.map((news) => (
            <div key={news.id} className="group flex flex-col md:flex-row md:items-baseline border-b border-gray-100 pb-8 cursor-pointer">
              <span className="text-xs font-mono text-gray-400 w-32 shrink-0 mb-2 md:mb-0">{news.date}</span>
              <span className="text-xs font-bold uppercase tracking-wider w-24 shrink-0 text-gray-900 group-hover:text-gray-500 transition-colors mb-2 md:mb-0">{news.category}</span>
              <h3 className="text-lg md:text-xl font-light group-hover:translate-x-2 transition-transform duration-300">
                {news.title}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Music Section */}
      <Section id="music" title="Discography">
        <Discography />
      </Section>

      {/* Tour Section */}
      <Section id="tour" title="Tour Dates">
        <div className="w-full">
          {TOUR_DATES.map((tour) => (
            <div key={tour.id} className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors px-2 md:px-4">
              <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                <span className="font-serif text-2xl italic w-32 shrink-0">{tour.date}</span>
                <div className="flex flex-col md:ml-8">
                  <span className="text-xl font-bold uppercase tracking-wide">{tour.city}</span>
                  <span className="text-sm text-gray-500 font-light">{tour.venue}</span>
                </div>
              </div>
              
              <div className="w-full md:w-auto text-center">
                {tour.ticketStatus === 'Available' ? (
                  <a 
                    href={tour.ticketUrl}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <span>Get Tickets</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-xs uppercase tracking-widest text-gray-400 px-6 py-3 border border-transparent cursor-not-allowed">
                    {tour.ticketStatus}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl font-serif italic mb-6">
              For booking inquiries and press, please contact management.
            </p>
            <a href="mailto:info@yakiimo-music.com" className="text-3xl md:text-4xl font-light hover:underline decoration-1 underline-offset-4">
              info@yakiimo-music.com
            </a>
          </div>
          <div className="bg-gray-50 p-8">
            <h4 className="text-xs uppercase tracking-widest mb-6 font-bold">Newsletter</h4>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-sm placeholder:text-gray-400"
              />
              <button className="self-start text-xs uppercase tracking-widest hover:text-gray-500 transition-colors pt-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

// --- Mount ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);