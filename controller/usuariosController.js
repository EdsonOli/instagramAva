
const { response } = require('../app');
const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        let usuarios =  await Usuario.findAll();
        
        return response.render('usuarios', {listaUsuarios: usuarios});
    },

    create: async (req, res) => {
        let {nome, email, senha} = req.body;

        let  novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });
        return res.json(novoUsuario);
    },

    update: async (req, res) => {
        let {id} = req.params;
        let {nome, email, senha} = req.body;

        let  usuarioUp = await Usuario.update({
            nome,
            email,
            senha
        },{
        where: {id}})

        return res.json(usuarioUp);
    },

    delete: async (req, res) => {
        let {id} = req.params;
        let usuarioDel = await Usuario.destroy({
            where: {id}
        })
        return res.json(usuarioDel)
    }
}

module.exports = usuariosController;