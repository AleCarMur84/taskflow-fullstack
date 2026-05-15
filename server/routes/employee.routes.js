console.log("ROUTES EMPLEADOS CARGADAS");

const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

router.get("/", employeeController.getEmployees);
router.post("/", employeeController.createEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;