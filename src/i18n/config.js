import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de/translations.json";
import en from "./locales/en/translations.json";
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: localStorage.getItem("lang"),
  resources: {
    de: {
      translations: de,
    },
    en: {
      translations: en,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "de"];

export default i18n;
