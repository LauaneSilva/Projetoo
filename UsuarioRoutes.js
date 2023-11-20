const express = require("express");
const routes = express.Router();
const UsuarioController = require("../controllers/UsuarioController");

routes.post("/usuarios", UsuarioController.cadastrar);

routes.get("/usuarios/cadastrar", UsuarioController.cadastrarGet);

routes.get("/usuarios/", UsuarioController.listar);

routes.get("/usuarios/remover/:id", UsuarioController.remover);

routes.get("/usuarios/:id", UsuarioController.detalhar);


module.exports = routes;