import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; 
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        debug: true,
        suportedLngs: ["en", "ca", "es"],
        fallbackLng: "en",
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}/translation.json"
        },
        interpolation: {
            escapeValue: false
        }
    })