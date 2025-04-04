
import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { LanguageContext } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="ghost" 
      className="text-xs font-medium px-0"
    >
      {language === "en" ? "हिंदी" : "ENGLISH"}
    </Button>
  );
};

export default LanguageSwitcher;
