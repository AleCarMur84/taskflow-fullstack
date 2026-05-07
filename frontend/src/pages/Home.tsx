import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        TaskFlow Employee Manager 
      </h1>

      <EmployeeForm />

      <EmployeeList />
    </div>
  );
}