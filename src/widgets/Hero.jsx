import React from 'react';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
          {t('hero.title1')}<br />{t('hero.title2')}
        </h1>
        <h2 className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto mb-12 font-light leading-snug">
          {t('hero.subtitle')}
        </h2>
        <div className="flex flex-col items-center gap-3">
          <span className="text-slate-900 dark:text-slate-100 text-sm font-sans mb-1">
            {t('hero.book')}
          </span>
          <Button href="#contact" variant="primary" className="mt-2">
            {t('hero.appointment')}
          </Button>
        </div>
      </div>

      {/* Marquee / Collab banner */}
      <div className="mt-24 py-6 border-y border-stone-200 dark:border-stone-800 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee text-stone-400 text-sm tracking-widest uppercase">
          {t('hero.collab')} L'Oréal Paris - Erborian - Sanofi - Moduland - YOTTA - LAUDEVCO - Agence M - Androme Medical - MIP boulogne - Nextlane - CFP 56 fermeture - Pleasure Land - Bakuza Next - Room22
        </div>
      </div>
    </section>
  );
};

export default Hero;
