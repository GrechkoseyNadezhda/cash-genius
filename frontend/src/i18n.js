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
            title1: "About project",
            text: "Cash Genius is a non-commercial project created by the participants of the IT BootCamp 2023 program held by the Kharkiv Information Technology Cluster Public Union. The goals of the project are to spread knowledge about finances and increase the financial literacy of teenagers and adults.",
            title2: "Get to know our team",
            title3: "Our partners",
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
            title1: "Про проєкт",
            text: "Cash Genius — некомерційний проєкт, створений учасниками програми IT BootCamp 2023, що проводилася Громадською спілкою «Харківський кластер інформаційних технологій». Цілі проєкту — поширення знань про фінанси та підвищення фінансової грамотності підлітків та дорослих.",
            title2: "Познайомтеся з нашою командою",
            title3: "Наші партнери",
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
