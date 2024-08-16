const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/auth", require("./routes/auth"));
app.use("/events", require("./routes/events"));

// Escuchar peticiones
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
