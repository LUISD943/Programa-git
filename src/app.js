const express = require('express');
const morgan = require("morgan")  // para visualizar las solicitudes http en la consola
const conexionDB = require("./db");
const routerCliente = require("./routes/clientes");
const app = express();


// Conexion DB
conexionDB();

//Settings
app.set("port", process.env.port || 4000)


app.use(express.json());
app.use(morgan("common"))

//Llamado de Rutas
/*app.get("/",(req, res) => {
    res.send('hello world');
  });
*/

app.use(express.static("public"))
app.use("/api/clientes", routerCliente)


module.exports = app;
