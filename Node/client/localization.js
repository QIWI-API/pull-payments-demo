import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    lng: 'ru',
    fallbackLng: "ru",
    debug: true,


    resources: {
        ru: {
            translations: {
                "key": "Оплатить",
            }
        },
        en: {
            translations: {
                "key": "Pay now",
            }
        }
    },
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },
    react: {
        wait: true
    }

});

export default i18n;
