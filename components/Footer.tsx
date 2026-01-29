import React from 'react';
import { ARTIST_NAME } from '../constants';
import { Instagram, Twitter, Youtube } from 'lucide-react';

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

export default Footer;