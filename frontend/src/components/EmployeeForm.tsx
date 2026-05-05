import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";

export default function EmployeeForm() {
  const { addEmployee } = useAppContext();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addEmployee({
      id: crypto.randomUUID(),
      name,
      role,
      email,
    });

    setName("");
    setRole("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded-lg bg-white">
      <input
        className="border p-2 w-full"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Rol"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Añadir empleado
      </button>
    </form>
  );
}