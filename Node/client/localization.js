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

    keySeparator: true, // we use content as keys

    react: {
        wait: true
    }

});

export default i18n;
