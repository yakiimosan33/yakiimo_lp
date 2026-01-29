import React, { useState } from 'react';
import { DISCOGRAPHY } from '../constants';
import { Play } from 'lucide-react';
import { Album } from '../types';

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

export default Discography;