import React from 'react';

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

export default Hero;