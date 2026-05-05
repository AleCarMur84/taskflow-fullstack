import { useState, useEffect, useMemo, useCallback } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function EmployeesPage() {
  const [estado, setEstado] = useState<string>("Inicial");

  // useCallback: función estable (no se recrea en cada render)
  const cambiarEstado = useCallback(() => {
    setEstado("Hooks funcionando con useCallback");
  }, []);

  useEffect(() => {
    console.log("EmployeesPage cargada");
  }, []);

  const estadoLongitud = useMemo(() => {
    return estado.length;
  }, [estado]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Empleados</h1>

      <p className="text-gray-500">{estado}</p>

      <p className="text-sm text-gray-600">
        Longitud del estado: {estadoLongitud}
      </p>

      <button
        onClick={cambiarEstado}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Probar useState
      </button>

      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}
