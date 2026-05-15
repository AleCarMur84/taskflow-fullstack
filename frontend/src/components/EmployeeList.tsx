import type { Employee } from "../api/client";

type Props = {
  employees?: Employee[];
  onDelete?: (id: string) => void;
};

export default function EmployeeList({
  employees = [],
  onDelete
}: Props) {
  return (
    <div className="space-y-2">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="p-2 border rounded flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{emp.name}</p>
            <p className="text-sm text-gray-500">{emp.position}</p>
          </div>

          <button
            onClick={() => onDelete?.(emp.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}