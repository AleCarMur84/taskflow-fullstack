 /* eslint-disable react-refresh/only-export-components */

import { createContext, useState, type ReactNode } from "react";

export interface Employee {
  id: string;
  name: string;
  position: string;
}

interface AppContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  removeEmployee: (id: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const removeEmployee = (id: string) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <AppContext.Provider value={{ employees, addEmployee, removeEmployee }}>
      {children}
    </AppContext.Provider>
  );
}