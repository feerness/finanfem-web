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
            "Register": "Register",
            "¡Bienvenida": "Welcome",
            "Progresemos juntas.": "Let's progress together",
            "Descubre lo último en el mundo financiero.": "Discover the latest in the financial world",
            "Infórmate, avanza & descubre en finanzas.": "Get informed, advance & discover in finance",
            "Información": "Information",
            "Acerca de nosotras": "About us",
            "Testimonios": "Testimonials",
            "Links de Ayuda": "Helpful Links",
            "Archivos": "Files",
            "Nuestros Servicios": "Our Services",
            "Perfil": "Profile",
            "Contacto": "Contact",
            "Calle 123, Santiago, Chile": "123 Street, Santiago, Chile",
            "Todos los derechos reservados": "All rights reserved"
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
          "Register": "Registrar",
          "¡Bienvenida": "¡Bienvenida",
          "Progresemos juntas.": "Progresemos juntas.",
          "Descubre lo último en el mundo financiero.": "Descubre lo último en el mundo financiero.",
          "Infórmate, avanza & descubre en finanzas.": "Infórmate, avanza & descubre en finanzas.",
          "Información": "Información",
          "Acerca de nosotras": "Acerca de nosotras",
          "Testimonios": "Testimonios",
          "Links de Ayuda": "Links de Ayuda",
          "Archivos": "Archivos",
          "Nuestros Servicios": "Nuestros Servicios",
          "Perfil": "Perfil",
          "Contacto": "Contacto",
          "Calle 123, Santiago, Chile": "Calle 123, Santiago, Chile",
          "Todos los derechos reservados": "Todos los derechos reservados"
          }
        }
      }
      
  });

export default i18n;
