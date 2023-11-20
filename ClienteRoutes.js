const express = require("express");
const routes = express.Router();
const ClienteController = require("../controllers/ClienteController");

routes.post("/clientes", ClienteController.cadastrar);

routes.get("/clientes/cadastrar", ClienteController.cadastrarGet);

routes.get("/clientes/", ClienteController.listar);

routes.get("/clientes/remover/:id", ClienteController.remover);

routes.get("/clientes/:id", ClienteController.detalhar);


module.exports = routes;