const employeeService = require("../services/employee.service");

const getEmployees = (req, res) => {
  const employees = employeeService.getAllEmployees();
  res.status(200).json(employees);
};

const createEmployee = (req, res) => {
  const { name, position } = req.body;

  if (!name || !position) {
    return res.status(400).json({
      error: "Name y position son obligatorios"
    });
  }

  const newEmployee = employeeService.createEmployee({
    name,
    position
  });

  res.status(201).json(newEmployee);
};

const deleteEmployee = (req, res) => {
  const { id } = req.params;

  const deleted = employeeService.deleteEmployee(id);

  if (!deleted) {
    return res.status(404).json({
      error: "Empleado no encontrado"
    });
  }

  res.status(200).json({
    message: "Empleado eliminado correctamente"
  });
};

module.exports = {
  getEmployees,
  createEmployee,
  deleteEmployee
};