export interface Employee {
  id: string;
  name: string;
  position: string;
}

const BASE_URL = "https://taskflow-fullstack-1-lrsm.onrender.com/api/employees";
// GET empleados
export const getEmployees = async (): Promise<Employee[]> => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Error al obtener empleados");
  }

  return res.json();
};

// POST empleado
export const createEmployee = async (
  employee: Omit<Employee, "id">
): Promise<Employee> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  });

  if (!res.ok) {
    throw new Error("Error al crear empleado");
  }

  return res.json();
};

export async function deleteEmployee(id: string) {
  const res = await fetch(`http://localhost:3000/api/employees/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Error al eliminar empleado");
  }

  return res.json();
}