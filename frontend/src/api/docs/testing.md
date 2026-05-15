# TaskFlow - Testing Report

## Pruebas funcionales

Se han probado las funcionalidades principales de la aplicación:

- Crear empleado
- Listar empleados
- Validación de formulario

Resultado:
✔ Todas las funcionalidades funcionan correctamente

---

## Validación de datos

Se ha probado el formulario con campos vacíos.

Resultado:
✔ El sistema impide enviar formularios incompletos
✔ Se muestra mensaje de error: "Todos los campos son obligatorios"

---

## API

Se ha verificado la integración con el backend:

- GET /api/employees → devuelve lista correctamente
- POST /api/employees → crea empleados correctamente

Resultado:
✔ Comunicación frontend-backend correcta

---

## Consola del navegador

No se detectan errores en la consola durante el uso de la aplicación.

Resultado:
✔ Sin errores

---

## Responsive design

La aplicación se adapta correctamente a diferentes tamaños de pantalla.

Resultado:
✔ Diseño responsive correcto

---

## Conclusión

La aplicación ha pasado las pruebas básicas de funcionamiento, validación, API y diseño responsive sin errores detectados.