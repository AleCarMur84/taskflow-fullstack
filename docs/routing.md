# Routing - TaskFlow

## Herramienta utilizada

Se utiliza React Router DOM para gestionar la navegación de la aplicación (SPA - Single Page Application).

---

## Rutas disponibles

`/` → Home (pantalla principal de la aplicación)
`/employees` → Gestión y visualización de empleados
`*` → 404 Not Found (página de error para rutas inexistentes)

---

## Navegación

La navegación se realiza mediante el componente `Link` de React Router.

Esto permite:

Cambios de vista sin recargar la página  
Mejor experiencia de usuario  
Mantener el estado de la aplicación  

---

## Configuración técnica

Las rutas están definidas en `App.tsx` utilizando `Routes` y `Route`.

Ejemplo:

```tsx
<Route path="/" element={<Home />} />
<Route path="/employees" element={<Employees />} />
<Route path="*" element={<h1>404</h1>} />

## Arquitectura

Este sistema de routing sigue una arquitectura SPA basada en componentes. Cada ruta representa una vista independiente que se renderiza sin recargar el navegador, permitiendo una navegación fluida y escalable dentro de la aplicación.

---

## Nota

El proyecto está construido como una Single Page Application (SPA) utilizando React Router DOM. Esto permite una navegación eficiente sin recargas y facilita la escalabilidad del frontend.