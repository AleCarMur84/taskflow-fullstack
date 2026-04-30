# Arquitectura - TaskFlow

## 5.1 Estructura de componentes principales

La aplicación se organizará en los siguientes bloques:

### Layout
- Componente principal que envuelve toda la app
- Incluye navegación y estructura general

### Pages
HomePage
EmployeesPage
TasksPage

### Components reutilizables
Navbar
EmployeeList
EmployeeForm
TaskList
TaskItem

### Routing
React Router para navegación entre páginas
Cada página tendrá su ruta independiente

## 5.2 Componentes reutilizables

Los siguientes componentes serán reutilizados en distintas partes de la aplicación:

Navbar: navegación principal
Button: botón genérico reutilizable
Modal: ventanas emergentes
Input: campos de formulario
Card: contenedor visual de información
List: estructura base para listados

## 5.3 Gestión del estado de la aplicación

El estado de la aplicación se gestionará de la siguiente forma:

useState para estado local de componentes
useEffect para efectos secundarios y carga de datos
Context API para estado global (empleados y tareas)
Posible uso de localStorage para persistencia simple

El objetivo es evitar prop drilling y mantener el estado centralizado cuando sea necesario.

## 5.4 Diseño del backend/API

### Recursos principales

- /api/v1/employees
- /api/v1/tasks

### Métodos HTTP

Employees:
GET /employees → obtener todos
POST /employees → crear empleado
PUT /employees/:id → actualizar empleado
DELETE /employees/:id → eliminar empleado

Tasks:
GET /tasks → obtener tareas
POST /tasks → crear tarea
PUT /tasks/:id → actualizar tarea
DELETE /tasks/:id → eliminar tarea

### Contratos de datos

Empleado:
{
  id: string,
  name: string,
  role: string,
  email: string
}

Tarea:
{
  id: string,
  title: string,
  description: string,
  completed: boolean,
  employeeId: string
}

## 5.5 Persistencia de datos

Se dividirá la gestión de datos de la siguiente forma:

### Datos en el servidor
Empleados
Tareas

Estos datos se gestionarán mediante la API REST.

### Datos en el cliente
Estado de filtros
UI state (modales abiertos/cerrados)
Formularios temporales

### Persistencia opcional
Se podrá usar localStorage para mantener datos en desarrollo

## 5.6 Flujo de datos

El flujo de datos de la aplicación será:

Frontend (React)
    ↓
Componentes (UI)
    ↓
Context API / State
    ↓
API REST (fetch/axios)
    ↓
Backend (Node/Express)
    ↓
Datos (memoria / futura base de datos)

### Flujo inverso:
Backend → API → Frontend → UI actualizada

El frontend siempre será el encargado de mostrar el estado actualizado recibido desde la API.

