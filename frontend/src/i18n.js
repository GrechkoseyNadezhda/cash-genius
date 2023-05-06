import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navigation: {
            game: "Home",
            articles: "Articles",
            about: "About Us",
          },

          articles: {
            title: "All ARTICLES here!",
          },
          pages: {
            page: "page",
          },
          rules: {
            title: "All RULES here!",
          },
          about: {
            title: "All ABOUT US here!",
          },
          page404: {
            title: "PAGE NOT FOUND!",
          },
          article: {
            back: "Back to search",
          },
        },
      },
      ua: {
        translation: {
          navigation: {
            game: "Головна",
            articles: "Статті",
            about: "Про нас",
          },
          articles: {
            title: "Усі СТАТТІ тут!",
          },
          pages: {
            page: "сторінка",
          },
          rules: {
            title: "Усі ПРАВИЛА тут!",
          },
          about: {
            title: "Усі ПРО НАС тут!",
          },
          page404: {
            title: "ТАКОЇ СТОРІНКИ НЕМАЄ!",
          },
          article: {
            back: "Назад до пошуку",
          },
        },
      },
    },
  });

export default i18n;
