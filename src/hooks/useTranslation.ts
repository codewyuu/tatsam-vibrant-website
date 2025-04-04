
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key itself if translation is missing
      }
    }
    
    return typeof value === 'string' ? value : key;
  }
  
  return t;
};
