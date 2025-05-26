import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import authAr from "./translation/ar/auth.json";
import headerAr from "./translation/ar/header.json";
import indexAr from "./translation/ar/index.json";
import settingMenuAr from "./translation/ar/settingsMenu.json";
import sidebarAr from "./translation/ar/sidebar.json";
import authEn from "./translation/en/auth.json";
import headerEn from "./translation/en/header.json";
import indexEn from "./translation/en/index.json";
import settingMenuEn from "./translation/en/settingsMenu.json";
import sidebarEn from "./translation/en/sidebar.json";
import authTr from "./translation/tr/auth.json";
import headerTr from "./translation/tr/header.json";
import indexTr from "./translation/tr/index.json";
import settingMenuTr from "./translation/tr/settingsMenu.json";
import sidebarTr from "./translation/tr/sidebar.json";

let resources = {
  en: {
    sidebar: { ...sidebarEn },
    header: { ...headerEn },
    index: { ...indexEn },
    settingMenu: { ...settingMenuEn },
    auth: { ...authEn },
  },
  tr: {
    sidebar: { ...sidebarTr },
    header: { ...headerTr },
    index: { ...indexTr },
    settingMenu: { ...settingMenuTr },
    auth: { ...authTr },
  },
  ar: {
    sidebar: { ...sidebarAr },
    header: { ...headerAr },
    index: { ...indexAr },
    settingMenu: { ...settingMenuAr },
    auth: { ...authAr },
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
    defualtNS: "trnaslation",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
