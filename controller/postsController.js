

const { request, response } = require('express');
const {Post, sequelize} = require('../models/');

const postsController = {
    index: async (request, response) => {
        let posts = await Post.findAll()
        return response.json(posts);
    },
    create: async (request, response) => {
        let {texto, img, usuarios_id, n_likes} = request.body;
        let postCriado = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        })
        return response.json(postCriado);
    },
    update: async (request, response) => {
        let {id} = request.params
        let {texto, img, usuarios_id, n_likes} = request.body
        let postUp = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        },{
            where: {
                id
            }
        })
        return response.json(postUp)
    },
    delete: async (request, response) => {
        let {id} = request.params
        let postDel = await Post.destroy({
            where:{
                id
            }
        })
        return response.json(postDel);
    },
    show: async (request, response) => {
        let {id} = request.params
        let postsUsuario = await Post.findAll({where: {usuarios_id: id}})
        return response.json(postsUsuario)

    }

}
module.exports = postsController;

