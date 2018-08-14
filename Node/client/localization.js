import i18n from 'i18next';
import {reactI18nextModule} from 'react-i18next';
import en from './locale/en';
import ru from './locale/ru';

i18n.use(reactI18nextModule).init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: true,
    resources: {
        ru,
        en
    },
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    },
    react: {
        wait: true
    }

});

export default i18n;
