import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-700 font-sans animate-fade-in-down">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#FDF9F5]/90 via-white/80 to-[#FDF9F5]/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-2xl border border-stone-200/60 dark:border-white/5 shadow-lg shadow-stone-200/20 dark:shadow-black/50 rounded-full h-[72px] flex justify-between items-center px-6 lg:px-10 transition-colors duration-500 animate-gradient-x">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-serif font-bold text-2xl tracking-[0.15em] text-slate-900 dark:text-white uppercase transition-colors">
              Rayan 3D
            </a>
          </div>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#" className="text-slate-800 dark:text-slate-200 font-medium hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] uppercase text-[10px] md:text-xs tracking-[0.25em] transition-colors">{t('nav.accueil')}</a>
            <a href="#valeur" className="text-slate-500 dark:text-slate-400 font-medium hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] uppercase text-[10px] md:text-xs tracking-[0.25em] transition-colors">{t('nav.valeur')}</a>
            <a href="#galerie" className="text-slate-500 dark:text-slate-400 font-medium hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] uppercase text-[10px] md:text-xs tracking-[0.25em] transition-colors">{t('nav.galerie')}</a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-6">
            
            {/* Custom Control Group (Pill) */}
            <div className="hidden lg:flex items-center p-1 bg-stone-100 dark:bg-slate-800 rounded-full border border-stone-200/70 dark:border-slate-700/80 transition-colors duration-500 shadow-inner">
              
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage} 
                className="relative flex items-center justify-center w-12 h-8 rounded-full overflow-hidden group focus:outline-none"
                aria-label="Toggle Language"
              >
                <div className="absolute inset-0 bg-white dark:bg-slate-900 shadow-sm border border-stone-100 dark:border-slate-700 transition-transform duration-300 transform rounded-full" />
                <span className="relative z-10 text-[10px] font-bold tracking-widest text-slate-900 dark:text-white transition-colors">
                  {language === 'en' ? 'EN' : 'FR'}
                </span>
              </button>

              <div className="w-[1px] h-4 bg-stone-300 dark:bg-slate-600 mx-1"></div>

              {/* Theme Toggle (Sun/Moon SVGs) */}
              <button 
                onClick={toggleTheme} 
                className="relative flex items-center justify-center w-10 h-8 rounded-full bg-transparent hover:bg-stone-200/80 dark:hover:bg-slate-700 transition-colors duration-300 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  // Moon SVG
                  <svg className="w-4 h-4 transition-transform duration-500 rotate-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  // Sun SVG
                  <svg className="w-5 h-5 transition-transform duration-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
              </button>

            </div>

            {/* Mobile Menu Icon (Hamburger) */}
            <button className="md:hidden text-slate-900 dark:text-white flex flex-col gap-1.5 focus:outline-none group">
              <span className="block w-6 h-[2px] bg-current rounded-full group-hover:bg-[var(--color-primary)] transition-colors"></span>
              <span className="block w-4 h-[2px] bg-current ml-auto rounded-full group-hover:bg-[var(--color-primary)] transition-colors"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
