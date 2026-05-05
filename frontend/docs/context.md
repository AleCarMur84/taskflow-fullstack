# Context API - Estado global

## ¿Qué es Context API?

Context API es una herramienta de React que permite compartir estado entre componentes sin necesidad de pasar props manualmente (prop drilling).

---

## ¿Para qué se ha usado en este proyecto?

En este proyecto se utiliza Context API para gestionar de forma global la lista de empleados.

Esto permite que diferentes componentes (formulario y lista) puedan acceder y modificar los mismos datos sin conexión directa entre ellos.

---

## Implementación

Se ha creado un contexto llamado `AppContext` que contiene:

### Estado global:
`employees`: lista de empleados

### Funciones globales:
`addEmployee`: añade un nuevo empleado
`removeEmployee`: elimina un empleado por ID

---

## Provider

El `AppProvider` envuelve toda la aplicación y proporciona acceso al estado global.

Esto se configura en el punto de entrada de la aplicación (`main.tsx`).

---

## Consumo del contexto

Para acceder al contexto se utiliza un hook personalizado:

```ts
useAppContext()
```

Ejemplo:

```ts
const { employees, addEmployee, removeEmployee } = useAppContext();
```

---

## Ventajas de Context en este proyecto

Evita prop drilling
Permite compartir estado fácilmente entre componentes
Mantiene la lógica centralizada
Facilita la escalabilidad de la aplicación

---

## Conclusión

Context API se ha utilizado para gestionar el estado global de empleados de forma sencilla y estructurada, evitando librerías externas y manteniendo el proyecto ligero.