import React from 'react';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const AboutContact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--theme-soft-bg)] transition-colors duration-300 text-center">
       <div className="max-w-3xl mx-auto px-6">
         <h2 className="font-serif text-5xl md:text-6xl text-slate-900 dark:text-white mb-8">{t('about.title')}</h2>
         <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-12">
           {t('about.text')}
         </p>
         <div className="flex flex-col items-center gap-3">
            <span className="text-slate-900 dark:text-slate-100 text-sm font-sans mb-1">
              {t('hero.book')}
            </span>
            <Button variant="primary">
              {t('hero.appointment')}
            </Button>
         </div>
       </div>
    </section>
  );
};

export default AboutContact;
