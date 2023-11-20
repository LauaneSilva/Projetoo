const Usuario = require("./Usuario");
const vetorUsuarios = [];

class UsuarioController {
     static cadastrar(req, res){
            const usuario = req.body;
            vetorUsuarios.push(new Usuario(usuario.id, usuario.nome, usuario.idade));
            res.redirect("/Usuarios?s=1")   
     }
     static cadastrarGet(req, res){
     res.render("usuario/cadastrar")

     }
     static listar(req, res){
    const salvo = req.query.s;
    res.render("usuario/relatorio", {vetorUsuarios, salvo});
    
     }
     static detalhar(req,res){
        const id = req.params.id;
        let encontrou = false;
        for(const usuario of vetorUsuarios) {
         if(id == usuario.id){
             encontrou = true;
             res.render("usuario/detalhar", {usuario});
             break;
         }
     }
     if(encontrou == false){
         res.render("Usuario não encontrado");
     }

     }
}
module.exports = UsuarioController;