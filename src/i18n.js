import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; 
import LanguageDetector from 'i18next-browser-languagedetector';

const version = 1;

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .on("languageChanged", (lng) => {
        document.documentElement.lang = lng;
    })
    .init({
        /*debug: true,*//*Uncomment it for debugging*/
        suportedLngs: ["en", "ca", "es"],
        fallbackLng: import.meta.env.FALLBACK_LANG,
        backend: {
            loadPath: `/locales/{{lng}}/{{ns}}/translation.json?v=${version}`
        },
        interpolation: {
            escapeValue: false
        }
    })