import { useTranslation } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { lang, changeLanguage } = useTranslation();

  return (
    <div className="flex gap-2 mb-4 justify-end">
      <button 
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'pt' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600'}`}
      >
        PT
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600'}`}
      >
        EN
      </button>
    </div>
  );
};