import { createContext, useState, useContext } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('app-lang') || 'pt');

  const t = (key) => translations[lang][key] || key;

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('app-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ t, lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);