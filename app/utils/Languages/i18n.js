import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'Theme':'Theme',
        'Languages':'Languages',
        'Home Sreen':'Home Sreen',
        'Login':'Login',
        'Login Status':'Login Status',
        'Forgot Password':'Forgot Password',
        
      },
    },
    es: {
      translation: {
        'Theme': 'Tema',
        'Languages':'Idiomas',
        'Home Sreen':'Pantalla de inicio',
        'Login':'Acceso',
        'Login Status':'Estado de inicio de sesión',
        'Forgot Password':'Has olvidado tu contraseña',
      },
    },
    de: {
      translation: {
        'Theme': 'Thema',
        'Languages':'Sprachen',
        'Home Sreen':'Startbildschirm',
        'Login':'Anmeldung',
        'Login Status':'Login-Status',
        'Forgot Password':'Passwort vergessen',
      },
    },
  },
});
export default i18n;