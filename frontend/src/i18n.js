// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // carga traducciones usando HTTP
  .use(LanguageDetector) // detecta el idioma del navegador automáticamente
  .use(initReactI18next) // permite usar react-i18next
  .init({
    detection: {
        // opciones de detección aquí
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage', 'cookie'], // guarda la elección en localStorage o cookies
      },
    fallbackLng: 'es', // idioma por defecto
    debug: true,
    interpolation: {
      escapeValue: false, // no escapa los valores
    },
    resources: {
        en: {
          translation: {
            "Recursos": "Resources",
            "Artículos": "Articles",
            "Videos": "Videos",
            "Herramientas": "Tools",
            "Indicadores Financieros": "Financial Indicators",
            "Noticias": "News",
            "Comunidad": "Community",
            "Foro": "Forum",
            "Actividad": "Activity",
            "Consultoría": "Consulting",
            "Reportes": "Reports",
            "Reglas": "Rules",
            "Modo Oscuro": "Dark Mode",
            "Modo Claro": "Light Mode",
            "Logout": "Logout",
            "Login": "Login",
            "Register": "Register"
          }
        },
        es: {
          translation: {
            "Recursos": "Recursos",
          "Artículos": "Artículos",
          "Videos": "Videos",
          "Herramientas": "Herramientas",
          "Indicadores Financieros": "Indicadores Financieros",
          "Noticias": "Noticias",
          "Comunidad": "Comunidad",
          "Foro": "Foro",
          "Actividad": "Actividad",
          "Consultoría": "Consultoría",
          "Reportes": "Reportes",
          "Reglas": "Reglas",
          "Modo Oscuro": "Modo Oscuro",
          "Modo Claro": "Modo Claro",
          "Logout": "Cerrar sesión",
          "Login": "Iniciar sesión",
          "Register": "Registrar"
          }
        }
      }
      
  });

export default i18n;
