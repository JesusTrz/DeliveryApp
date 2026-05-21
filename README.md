# AppDelivery

Aplicación de delivery desarrollada con **React + Vite** como proyecto académico para la materia de **Administración de Proyectos** en la UTTT.

## Propósito del proyecto

El objetivo principal es aprender y practicar la **colaboración en equipo** utilizando herramientas de gestión y control de versiones de la industria:

| Herramienta | Uso en el proyecto |
|---|---|
| **Zoho** | Gestión de tareas y comunicación del equipo |
| **Jira** | Planificación de sprints y tableros ágiles |
| **GitHub** | Control de versiones y revisión de código mediante Pull Requests |

---

## Tecnologías utilizadas

- [React 19](https://react.dev/) — librería principal de UI
- [Vite 8](https://vite.dev/) — bundler y servidor de desarrollo
- [React Router DOM 7](https://reactrouter.com/) — navegación entre vistas
- [React Icons](https://react-icons.github.io/react-icons/) — iconografía
- [gh-pages](https://github.com/tschaub/gh-pages) — despliegue en GitHub Pages

---

## Estructura del proyecto

```
src/
├── views/
│   ├── Login/       # Pantalla de inicio de sesión
│   ├── Home/        # Pantalla principal con platillos y promociones
│   ├── Search/      # Búsqueda de platillos y restaurantes
│   ├── Orders/      # Historial de pedidos
│   ├── Profile/     # Perfil del usuario
│   └── Cart/        # Carrito y flujo de pago
├── componentes/
│   ├── BottomNav/   # Barra de navegación inferior
│   └── CartFab/     # Botón flotante del carrito
└── context/
    └── CartContext/ # Estado global del carrito
```

---

## Funcionalidades principales

- **Login** — pantalla de acceso al inicio de la app.
- **Home** — muestra categorías de comida, promociones del día y platillos populares cercanos.
- **Carrito** — permite agregar/quitar platillos, ver subtotal, costo de envío y total.
- **Flujo de pago** — selección de método de pago (tarjeta, pago móvil, efectivo) con estados de procesamiento, éxito y error simulado.
- **Navegación global** — barra inferior con acceso a Home, Search, Orders y Profile.
- **Estado global** — el carrito se gestiona con React Context API, compartiendo datos entre todas las vistas.

---

## Configuración para GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages:

- `vite.config.js` — incluye `base: '/DeliveryApp/'` para que los assets se resuelvan correctamente en el servidor estático.
- `App.jsx` — usa `HashRouter` (`/#/ruta`) en lugar de `BrowserRouter`, ya que GitHub Pages no soporta rutas del lado del servidor.

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Despliegue en GitHub Pages

```bash
npm run deploy
```

Este comando ejecuta `npm run build` y publica el contenido de `dist/` en la rama `gh-pages` automáticamente.

**URL del proyecto:** https://jesustrz.github.io/DeliveryApp/
