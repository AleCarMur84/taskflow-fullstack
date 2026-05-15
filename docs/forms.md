# Forms - TaskFlow

## Descripción

En este proyecto se han implementado formularios controlados con React para gestionar la creación de empleados.

---

## Implementación

Se utilizan formularios controlados con `useState` para gestionar los inputs:

name (nombre del empleado)
position (puesto del empleado)

El formulario se envía mediante `handleSubmit`.

---

## Validación

Los campos son obligatorios:

No se permite enviar el formulario si name o position están vacíos
La validación se realiza antes de crear el empleado

En lugar de usar alert, la aplicación muestra un mensaje de error en la interfaz.

---

## Confirmación

Cuando un empleado se añade correctamente:

Se muestra un mensaje de éxito en pantalla
El mensaje desaparece automáticamente después de 2 segundos

---

## Integración

Los datos se gestionan mediante un contexto global (`AppContext`), lo que permite compartir el estado de empleados entre componentes sin necesidad de props.