import { useState } from "react";
import { createEmployee } from "../api/client";

type Props = {
  onEmployeeCreated?: () => void;
};

export default function EmployeeForm({ onEmployeeCreated }: Props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !position) {
      setError("Todos los campos son obligatorios");
      setSuccess(false);
      return;
    }

    try {
      await createEmployee({
        name,
        position
      });

      setName("");
      setPosition("");
      setError("");
      setSuccess(true);

      onEmployeeCreated?.();

      setTimeout(() => setSuccess(false), 2000);

    } catch {
      setError("Error al crear empleado");
      setSuccess(false);
    }
  };

  return (
    <div className="space-y-2">
      {success && (
        <p className="text-green-600">
          Empleado añadido correctamente
        </p>
      )}

      {error && (
        <p className="text-red-600">
          {error}
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
