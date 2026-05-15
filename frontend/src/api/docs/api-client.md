# TaskFlow - API Client Layer

## Descripción

Este proyecto utiliza una capa de red en el frontend para centralizar todas las peticiones HTTP hacia el backend.

La capa de red se encuentra en:

src/api/client.ts

---

## Cliente API

El cliente expone funciones tipadas con TypeScript para comunicarse con el backend.

### GET empleados

getEmployees(): Promise<Employee[]>

Obtiene la lista de empleados desde el backend.

---

### POST empleado

createEmployee(employee: Omit<Employee, "id">): Promise<Employee>

Crea un nuevo empleado en el backend.

---

## Tipos

export interface Employee {
  id: string;
  name: string;
  position: string;
}

El tipo Employee está alineado con el modelo del backend.

---

## Estados de red en la UI

La aplicación gestiona tres estados principales:

loading → petición en curso
success → datos cargados correctamente
error → fallo en la petición

---

## Fuente de datos

No se usa LocalStorage para empleados
El backend es la única fuente de verdad
Todas las operaciones pasan por la API

---

## Resumen

La capa de red está centralizada, tipada y desacoplada de la UI, siguiendo buenas prácticas modernas de arquitectura frontend.