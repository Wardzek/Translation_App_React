import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DateTime } from 'luxon';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      format: (value, format, lng) => {
        const dateObject = DateTime.fromObject(value, { locale: lng });
        let timeZone;
        if (lng === 'es') {
          timeZone = 'America/Mexico_City';
        } else if (lng === 'fr') {
          timeZone = 'Europe/Paris';
        } else if (lng === 'en') {
          timeZone = 'America/New_York'
        }
        const localizedDateTime = dateObject.setZone(timeZone);
        if (format === 'DATE_TIME') {
          const useAmPm = lng === 'es' || lng === 'en';
          return localizedDateTime.toLocaleString({
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            hour12: useAmPm,
          }).toUpperCase();
        }
        return localizedDateTime.toLocaleString(DateTime[format]);
      },
    },
  });

export default i18n;
