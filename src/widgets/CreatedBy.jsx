import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CreatedBy = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white dark:bg-slate-900 py-4 border-t border-stone-100 dark:border-stone-800 text-center transition-colors duration-300">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 font-sans">
        {t('created.by')} <a href="https://www.linkedin.com/in/kenanturgay/" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-100 font-medium tracking-widest hover:opacity-75 transition-opacity inline-block cursor-pointer">Kenan Turgay</a>
      </p>
    </div>
  );
};

export default CreatedBy;
