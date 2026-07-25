# 🎮 Juego del Ahorcado (Hangman PWA)

¡Un clásico juego del ahorcado modernizado, interactivo y convertido en una **Progressive Web App (PWA)**! Desarrollado con tecnologías web nativas, limpio, rápido y con soporte para instalación en dispositivos móviles y de escritorio, además de funcionamiento sin conexión.

![Versión](https://img.shields.io/badge/version-2.0.0-success?style=flat-square)
![PWA Ready](https://img.shields.io/badge/PWA-enabled-blue?style=flat-square)
![Licencia](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## ✨ Características Principales

*   🧠 **Banco de 100 palabras:** Sistema de filtrado inteligente basado en tres niveles de dificultad:
    *   🟢 **Fácil** (40 palabras)
    *   🟡 **Medio** (30 palabras)
    *   🔴 **Difícil** (30 palabras)
*   📱 **Aplicación Web Progresiva (PWA):** Instalable directamente en smartphones, tablets y ordenadores como una aplicación nativa.
*   📶 **Modo Sin Conexión (Offline):** Gracias a su *Service Worker*, el juego sigue funcionando a la perfección incluso sin conexión a internet.
*   🔊 **Efectos de Sonido:** Retroalimentación de audio integrada mediante la **Web Audio API** para aciertos, errores y victoria/derrota.
*   🎨 **Diseño Moderno y Responsivo:** Interfaz adaptada a cualquier tamaño de pantalla con transiciones suaves y un estilo visual atractivo.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5** (Estructura semántica)
*   **CSS3** (Diseño adaptable, variables y estilos modernos)
*   **JavaScript (ES6+)** (Lógica del juego, manipulación del DOM y gestión de eventos)
*   **Web Audio API** (Generación de efectos de sonido sin archivos externos)
*   **Service Workers & Web App Manifest** (Conversión a PWA y caché offline)

---

## 📂 Estructura del Proyecto

```text
├── index.html         # Interfaz principal, estructura visual y firma
├── style.css          # Estilos, diseño responsive y temas
├── script.js          # Lógica del juego, banco de palabras y Web Audio API
├── manifest.json      # Configuración de la identidad de la PWA
├── sw.js              # Service Worker para gestión de caché y modo offline
└── images/            # Recursos gráficos e iconos de la aplicación
    ├── icon-192.png   # Icono PWA (192x192 px)
    └── icon-512.png   # Icono PWA (512x512 px)
```
---
## 📲 Cómo Instalar la App
Abre el enlace del juego en el navegador de tu móvil o tablet (Chrome, Safari o Edge).

Toca el menú de opciones del navegador (los tres puntos o el botón de compartir).

Selecciona la opción "Instalar aplicación" o "Añadir a la pantalla de inicio".

¡Listo! El icono del Ahorcado aparecerá en tu pantalla de inicio como cualquier otra aplicación.

---
## 📜 Historial de Versiones
v2.0.0 - Conversión a PWA instalable, integración de Service Worker, manifest, diseño de iconos y firma de autoría.

v1.0.0 - Versión inicial del juego con selección de dificultad, banco de 100 palabras y efectos de audio.

👨‍💻 Autoría
Creado con ❤️ por Eugenia Coarasa. ¡Visita mi perfil para descubrir más proyectos y trabajos!
