# Hooks en React - Fase 5 (Punto 7)

Este documento explica el uso de los hooks de React implementados en el git aproyecto TaskFlow Fullstack.

---

## useState

useState es un hook que permite crear y gestionar estado dentro de un componente funcional.

Se utiliza para almacenar valores que pueden cambiar con el tiempo, como texto, listas o estados de la interfaz.

### Ejemplo de uso en el proyecto:
Gestión del estado "estado" en la página EmployeesPage
Permite actualizar valores dinámicamente en la interfaz

---

## useEffect

useEffect permite ejecutar efectos secundarios en un componente.

Se ejecuta después del renderizado y se utiliza para:

Ejecutar código al cargar la página
Escuchar cambios en estados o props
Simular ciclos de vida

### Ejemplo en el proyecto:
Mostrar un log cuando se carga EmployeesPage

---

## useMemo

useMemo se utiliza para memorizar cálculos costosos y evitar que se recalculen en cada render.

Solo se vuelve a ejecutar si cambian sus dependencias.

### Ejemplo en el proyecto:
Cálculo de la longitud del estado (estado.length)

Esto mejora el rendimiento evitando cálculos innecesarios.

---

## useCallback

useCallback memoriza funciones para evitar que se vuelvan a crear en cada render.

Es útil cuando se pasan funciones a componentes hijos o se quieren evitar renders innecesarios.

### Ejemplo en el proyecto:
Función activarEstado en EmployeesPage
Función cambiarEstado en el hook global

---

## Custom Hook: useAppContext

Se ha utilizado un custom hook llamado useAppContext.

Este hook:

Centraliza el acceso al Context API
Permite compartir estado global entre componentes
Evita el uso repetitivo de useContext directamente

### Ejemplo de uso:

const { estado, setEstado } = useAppContext();

---

## Conclusión

Los hooks permiten gestionar estado, efectos y lógica reutilizable en React de forma estructurada.

En este proyecto se han utilizado para:

Controlar estado local
Optimizar rendimiento
Centralizar estado global
Reutilizar lógica mediante custom hooks