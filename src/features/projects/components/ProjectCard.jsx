import React from 'react';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ title, description, image, onClick }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-full" onClick={onClick || (() => alert(`Opening details for ${title}`))}>
      <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden mb-6 transition-transform duration-700 group-hover:scale-105 shadow-xl shadow-stone-200/50 relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:opacity-90 transition-all duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 p-8 text-center transition-colors duration-500 group-hover:bg-stone-300">
            <span className="font-serif italic text-lg opacity-50">Aucune image</span>
          </div>
        )}
      </div>
      <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-3 text-center">{title}</h3>
      {description && <p className="text-stone-500 text-sm md:text-base mb-5 max-w-sm text-center leading-relaxed font-light">{description}</p>}
      <Button variant="link" className="font-serif text-xl italic font-normal tracking-normal lowercase">Découvrir</Button>
    </div>
  );
};

export default ProjectCard;
