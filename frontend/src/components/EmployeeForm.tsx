import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";

export default function EmployeeForm() {
  const { addEmployee } = useAppContext();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !position) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newEmployee = {
      id: crypto.randomUUID(),
      name,
      position
    };

    addEmployee(newEmployee);

    setName("");
    setPosition("");

    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="space-y-2">
      {success && (
        <p className="text-green-600">
          Empleado añadido correctamente
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Puesto"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Añadir empleado
        </button>
      </form>
    </div>
  );
}