# Forms - TaskFlow

## Descripción

En este proyecto se han implementado formularios controlados con React para gestionar la creación de empleados.

## Implementación

Uso de `useState` para controlar los inputs
Formulario controlado (name, position)
Envío de datos mediante `handleSubmit`

## Validación

Campos obligatorios (name y position)
Si están vacíos se muestra un mensaje de error con `alert`

## Confirmación

Cuando un empleado se añade correctamente, se muestra un mensaje de éxito temporal en pantalla
El mensaje desaparece automáticamente después de 2 segundos

## Integración

Los datos se almacenan en un contexto global (`AppContext`) para su uso en otras partes de la aplicación.