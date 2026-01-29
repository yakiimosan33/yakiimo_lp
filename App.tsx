import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import Discography from './components/Discography';
import Footer from './components/Footer';
import { LATEST_NEWS, TOUR_DATES } from './constants';
import { ArrowUpRight } from 'lucide-react';

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

export default App;