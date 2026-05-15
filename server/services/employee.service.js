const employees = [];

const getAllEmployees = () => {
  return employees;
};

const createEmployee = (data) => {
  const newEmployee = {
    id: Date.now().toString(),
    name: data.name,
    position: data.position
  };

  employees.push(newEmployee);
  return newEmployee;
};

const deleteEmployee = (id) => {
  const index = employees.findIndex(emp => emp.id === id);

  if (index === -1) {
    return false;
  }

  employees.splice(index, 1);
  return true;
};

module.exports = {
  getAllEmployees,
  createEmployee,
  deleteEmployee
};