 /* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import type { ReactNode } from "react";

type Employee = {
  id: string;
  name: string;
  role: string;
  email: string;
};

type AppContextType = {
  employees: Employee[];
  addEmployee: (emp: Employee) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (emp: Employee) => {
    setEmployees((prev) => [...prev, emp]);
  };

  return (
    <AppContext.Provider value={{ employees, addEmployee }}>
      {children}
    </AppContext.Provider>
  );
}
