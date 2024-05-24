import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
 
function App() {
  const { t } = useTranslation();
  
  // Obtenez la date actuelle pour passer à i18n
  const currentDate = new Date();

  const lngs = [
    { code: 'es', nativeName: 'Mexico City 🇪🇸' },
    { code: 'fr', nativeName: 'Paris 🇫🇷' },
    { code: 'en', nativeName: 'New York 🇺🇸' },
  ];

  return (
    < Suspense fallback = " ...est en cours de chargement " >
      <div style={{
        backgroundImage: `url("images/background.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <h2 className='title'>{t('Welcome.text')}</h2>
        <p className='date'>{t('Welcome.date', { date: currentDate })}</p>
        <div>
          <select
            className="select m-4 p-2 bg-blue-600 rounded"
            style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'solid 1px black'
            }}
            value={i18n.resolvedLanguage} 
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {lngs.map((lng) => (
              <option key={lng.code} value={lng.code}>
                {lng.nativeName}
              </option>
            ))}
          </select>
        </div>
      </div> 
    </ Suspense >
  );
}
 
export default App;