const express = require("express");
const cors = require("cors");

console.log("INDEX.JS EJECUTÁNDOSE");

const employeeRoutes = require("./routes/employee.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "TaskFlow API funcionando 🚀" });
});

// Rutas API
app.use("/api/employees", employeeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});