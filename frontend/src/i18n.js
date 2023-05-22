import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const selectedLanguage = localStorage.getItem("i18nextLng");

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: selectedLanguage || "ua",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
    ns: ["header", "game", "articles", "about", "footer"],
    backend: {
      loadPath: "/assets/locales/{{ns}}/{{lng}}.json",
    },
  });

export default i18n;
