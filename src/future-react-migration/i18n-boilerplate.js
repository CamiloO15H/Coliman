/**
 * Boilerplate para la Internacionalización (i18n)
 * Ubicación sugerida en React: src/core/i18n/
 */

import React, { createContext, useState, useContext } from 'react';

// 1. Diccionario en Inglés
export const en = {
  hero: {
    headline: "We build with precision, reliability, and purpose.",
    cta: "Request a Quote",
    stats: {
      operation: "In Operation",
      delivered: "Projects Delivered",
      cities: "Cities Served",
      team: "Team Members"
    }
  },
  about: {
    title: "About",
    headline: "A specialist trade partner for projects where precision is non-negotiable.",
    storyTitle: "Our Story",
    storyLede: "Founded in 2021, Coliman began with a clear vision...",
    teamTitle: "Our Team"
  }
};

// 2. Diccionario en Español
export const es = {
  hero: {
    headline: "Construimos con precisión, confianza y propósito.",
    cta: "Solicitar una cotización",
    stats: {
      operation: "Años en Operación",
      delivered: "Proyectos Entregados",
      cities: "Ciudades Servidas",
      team: "Miembros del Equipo"
    }
  },
  about: {
    title: "Nosotros",
    headline: "Un socio comercial especializado para proyectos donde la precisión es innegociable.",
    storyTitle: "Nuestra Historia",
    storyLede: "Fundada en 2021, Coliman comenzó con una visión clara...",
    teamTitle: "Nuestro Equipo"
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // Idioma por defecto

  const translations = lang === 'es' ? es : en;

  // Función traductora para buscar llaves anidadas como: t('hero.stats.operation')
  const t = (path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], translations) || path;
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook de traducción para usar en componentes presentacionales
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation debe usarse dentro de un LanguageProvider");
  }
  return context;
}
