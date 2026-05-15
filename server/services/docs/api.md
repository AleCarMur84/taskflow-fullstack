# TaskFlow API - Documentation

## Base URL
http://localhost:3000/api/employees

---

## GET /api/employees

Devuelve todos los empleados.

### Response

```json
[]

## POST /api/employees

Crea un nuevo empleado.

### Body

```json
{
  "name": "Juan",
  "position": "Developer"
}


## Response

```json
{
  "id": "123456",
  "name": "Juan",
  "position": "Developer"
}

## Códigos HTTP

200 OK → GET correcto  
201 Created → POST correcto  
400 Bad Request → campos obligatorios faltantes