import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 text-xs font-sans tracking-widest text-slate-600 dark:text-slate-400 uppercase mb-4">
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors text-[10px]">{t('footer.tag1')}</span>
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors text-[10px]">{t('footer.tag2')}</span>
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors text-[10px]">{t('footer.tag3')}</span>
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors text-[10px]">{t('footer.tag4')}</span>
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors text-[10px]">{t('footer.tag5')}</span>
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors text-[10px]">{t('footer.tag6')}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.link1')}</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.link2')}</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.link3')}</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.link4')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
