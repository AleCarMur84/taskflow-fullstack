import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";

export default function EmployeeForm() {
  const { addEmployee } = useAppContext();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !position) return;

    const newEmployee = {
      id: crypto.randomUUID(),
      name,
      position
    };

    addEmployee(newEmployee);

    setName("");
    setPosition("");
  };

  return (
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
  );
}