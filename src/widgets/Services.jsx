import React from 'react';
import ProjectCard from '../features/projects/components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  return (
    <section id="galerie" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-slate-900 dark:text-white mb-20">{t('services.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <ProjectCard 
            title={t('services.ecom')}
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
          />
          <ProjectCard 
            title={t('services.arch')}
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
          />
          <ProjectCard 
            title={t('services.anim')}
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
