import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Advantages = () => {
  const { t } = useLanguage();
  return (
    <section id="valeur" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-5xl md:text-6xl text-slate-900 dark:text-white mb-16 text-center">{t('adv.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { num: "01.", text: t('adv.1') },
            { num: "02.", text: t('adv.2') },
            { num: "03.", text: t('adv.3') },
            { num: "04.", text: t('adv.4') },
            { num: "05.", text: t('adv.5') }
          ].map((adv, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="font-serif text-4xl text-[var(--color-primary)]">{adv.num}</span>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mt-1">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
