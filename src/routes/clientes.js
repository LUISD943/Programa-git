const { Router } = require("express");
const controller = require("../controller/clientes.controller");
const routerClientes = Router();


routerClientes.get('/', controller.obtenerClientes)
  
routerClientes.post('/', controller.agregarClientes)
  
routerClientes.put('/:id', controller.actualizarClientes)
  
routerClientes.delete('/:id', controller.eliminarClientes);

module.exports = routerClientes;