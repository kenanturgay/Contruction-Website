import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 transition-all duration-500 bg-white/85 backdrop-blur-xl border-b border-stone-200/50 shadow-[0_8px_30px_rgb(23,23,23,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-28">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif font-bold text-2xl tracking-widest text-slate-900">
              Rayan 3D
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <a href="#" className="text-slate-900 font-medium hover:text-[var(--color-rayan-blue)] uppercase text-xs tracking-[0.2em] transition-colors">{t('nav.accueil')}</a>
            <a href="#valeur" className="text-slate-500 font-medium hover:text-[var(--color-rayan-blue)] uppercase text-xs tracking-[0.2em] transition-colors">{t('nav.valeur')}</a>
            <a href="#galerie" className="text-slate-500 font-medium hover:text-[var(--color-rayan-blue)] uppercase text-xs tracking-[0.2em] transition-colors">{t('nav.galerie')}</a>
          </nav>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="tel:0626843925" className="hidden lg:block hover:text-[var(--color-rayan-blue)] transition-colors">06 26 84 39 25</a>
            <a href="mailto:rayan@ryloproduction.com?subject=Nouveau%20Projet" className="hidden lg:block hover:text-[var(--color-rayan-blue)] transition-colors">rayan@ryloproduction.com</a>
            
            <div className="flex gap-4 items-center pl-4 border-l border-stone-200/60">
              <button onClick={toggleLanguage} className="uppercase text-xs font-bold tracking-widest hover:text-slate-500 transition-colors">
                {language === 'en' ? 'FR' : 'EN'}
              </button>
              <button onClick={toggleTheme} className="text-sm hover:text-slate-500 transition-colors">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>

            <button className="md:hidden">More</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
