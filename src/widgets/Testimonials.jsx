import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[var(--theme-soft-bg)] border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-slate-900 dark:text-white mb-16">{t('test.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center">
             <span className="block text-[var(--color-primary)] font-serif text-6xl mb-4 leading-none">"</span>
             <p className="font-serif text-2xl text-slate-800 dark:text-slate-300 leading-relaxed mb-6 italic">
               {t('test.1.text')}
             </p>
             <span className="text-stone-500 dark:text-stone-400 font-sans tracking-widest uppercase text-xs">{t('test.1.author')}</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="block text-[var(--color-primary)] font-serif text-6xl mb-4 leading-none">"</span>
             <p className="font-serif text-2xl text-slate-800 dark:text-slate-300 leading-relaxed mb-6 italic">
               {t('test.2.text')}
             </p>
             <span className="text-stone-500 dark:text-stone-400 font-sans tracking-widest uppercase text-xs">{t('test.2.author')}</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="block text-[var(--color-primary)] font-serif text-6xl mb-4 leading-none">"</span>
             <p className="font-serif text-2xl text-slate-800 dark:text-slate-300 leading-relaxed mb-6 italic">
               {t('test.3.text')}
             </p>
             <span className="text-stone-500 dark:text-stone-400 font-sans tracking-widest uppercase text-xs">{t('test.3.author')}</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="block text-[var(--color-primary)] font-serif text-6xl mb-4 leading-none">"</span>
             <p className="font-serif text-2xl text-slate-800 dark:text-slate-300 leading-relaxed mb-6 italic">
               {t('test.4.text')}
             </p>
             <span className="text-stone-500 dark:text-stone-400 font-sans tracking-widest uppercase text-xs">{t('test.4.author')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
