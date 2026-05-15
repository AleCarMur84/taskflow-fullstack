# TaskFlow FullStack - Deployment

## Frontend (Vercel)

URL:
https://taskflow-fullstack-nine.vercel.app

Configuración:
Framework: Vite + React
Build: npm run build
Output: dist
Deploy automático desde GitHub (main)

---

## Backend (Render)

URL:
https://taskflow-fullstack-1-lrsm.onrender.com

Configuración:
Node + Express
Root directory: server
Build: npm install
Start: node index.js
Deploy automático desde GitHub (main)

---

## Conexión Frontend → Backend

En frontend/src/api/client.ts:

const BASE_URL = "https://taskflow-fullstack-1-lrsm.onrender.com/api/employees";

---

## Resultado

Frontend desplegado en Vercel
Backend desplegado en Render
API conectada correctamente
Proyecto funcionando en producción