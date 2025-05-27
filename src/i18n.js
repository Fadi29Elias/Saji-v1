import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import navbarAr from "./translation/ar/navbar.json";
import homeAr from "./translation/ar/home.json";
import locationAr from "./translation/ar/location.json";
import contactAr from "./translation/ar/contact.json";

import navbarEn from "./translation/en/navbar.json";
import homeEn from "./translation/en/home.json";
import locationEn from "./translation/en/location.json";
import contactEn from "./translation/en/contact.json";

import navbarPl from "./translation/pl/navbar.json";
import homePl from "./translation/pl/home.json";
import locationPl from "./translation/pl/location.json";
import contactPl from "./translation/pl/contact.json";

let resources = {
  en: {
    navbar: { ...navbarEn },
    home: { ...homeEn },
    location: { ...locationEn },
    contact: { ...contactEn },
  },
  ar: {
    navbar: { ...navbarAr },
    home: { ...homeAr },
    location: { ...locationAr },
    contact: { ...contactAr },
  },
  pl: {
    navbar: { ...navbarPl },
    home: { ...homePl },
    location: { ...locationPl },
    contact: { ...contactPl },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    debug: false,
    ns: ["translation"],
    defaultNS: "translation", // Fixed typo: defualtNS -> defaultNS, trnaslation -> translation
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;