import { createContext, useState } from "react";
import { translation } from "./translation";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pl");

  function handleChangeLanguage(language) {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        translation: translation[language],
        handleChangeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
