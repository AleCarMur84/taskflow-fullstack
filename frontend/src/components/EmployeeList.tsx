import { useAppContext } from "../hooks/useAppContext";

export default function EmployeeList() {
  const { employees } = useAppContext();

  if (employees.length === 0) {
    return <p className="text-gray-500">No hay empleados</p>;
  }

  return (
    <div className="space-y-3">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="p-4 border rounded-lg shadow-sm bg-white"
        >
          <h3 className="font-bold">{emp.name}</h3>
          <p className="text-sm text-gray-600">{emp.position}</p>
        </div>
      ))}
    </div>
  );
}