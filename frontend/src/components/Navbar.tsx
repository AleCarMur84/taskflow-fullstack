import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">TaskFlow</h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/employees" className="hover:text-blue-400">
          Employees
        </Link>
        <Link to="/tasks" className="hover:text-blue-400">
          Tasks
        </Link>
      </div>
    </nav>
  );
}
