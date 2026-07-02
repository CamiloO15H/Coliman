# Roadmap de Migración a React + Screaming Architecture

Este directorio contiene las plantillas y la guía estructurada para migrar la landing page de Coliman Construction a **React + Vite** en el futuro, cumpliendo con las pautas de arquitectura limpia.

---

## 1. Estructura de Directorios Propuesta (Screaming Architecture)

Cuando realices la migración a React, te recomendamos organizar el código bajo `src/` de la siguiente forma:

```
src/
├── main.jsx                 # Punto de entrada de React
├── App.jsx                  # Componente raíz
├── core/                    # Núcleo de la aplicación
│   ├── theme/               # Estilos globales y variables de diseño (colors_and_type.css, styles.css)
│   └── i18n/                # Sistema de traducción (Contexto + diccionarios)
├── features/                # Módulos de funcionalidades de negocio
│   └── landing/             # La landing page y sus secciones
│       ├── components/      # Componentes específicos (Hero, Nav, Services, etc.)
│       └── hooks/           # Hooks específicos (ej. useTweaks, useStatCounter)
├── services/                # Servicios y APIs externas
│   └── adapters/            # Adaptadores de integraciones (WhatsApp, bids email, etc.)
└── shared/                  # Componentes y utilidades compartidas
    ├── components/          # UI común y reutilizable (Button, Card, SectionHeader)
    └── hooks/               # Hooks compartidos
```

---

## 2. Pautas de Desarrollo

### A. Componentes Presentacionales y Hooks Personalizados
*   **Regla:** Los componentes en React deben ser puramente presentacionales (recibir props y renderizar JSX).
*   **Regla:** Toda la lógica de negocio, efectos secundarios (APIs, scroll reveals, observadores) y estado complejo debe residir en **Custom Hooks**.
*   *Ejemplo:* El contador de estadísticas de la sección Hero se controla mediante un hook `useStatCounter.js`. El componente `Hero.jsx` simplemente lee el valor del contador e imprime el número.

### B. Patrón Adaptador para Integraciones Externas
*   Cualquier integración con APIs externas (ej. el botón de WhatsApp o un submit de formulario de cotizaciones por email) debe declararse mediante una interfaz o adaptador en `src/services/adapters/`.
*   Esto asegura que si el proveedor cambia en el futuro, solo debas modificar el adaptador y no tus componentes de UI. Ver el ejemplo en `whatsapp-adapter-boilerplate.js`.

### C. Sistema de Diccionario de Traducción (i18n)
*   No uses cadenas de texto crudas (hard-coded strings) en tus componentes.
*   Crea un archivo de idioma para Inglés (`en.json` o `en.js`) y otro para Español (`es.json` o `es.js`) en `src/core/i18n/`.
*   Implementa un contexto de React para proveer la función `t('key')` que resuelva las traducciones en base al idioma seleccionado. Ver ejemplo en `i18n-boilerplate.js`.
