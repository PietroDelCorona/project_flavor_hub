'use strict';

/**
 * comentary controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comentary.comentary', ({ strapi }) => ({

    async find(ctx) {
        const coments = await strapi.entityService.findMany('api::comentary.comentary', {
            populate: '*',
        });

        if (!coments || coments.length === 0) {
            return ctx.send({
            data: coments,
            message: 'Nenhum comentário encontrado. Seja o primeiro a comentar!',
            }, 200);
        }

        return ctx.send({ data: coments}, 200);
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        const coment = await strapi.entityService.findOne('api::comentary.comentary', id, {
            populate: '*',
        });

        if (!coment) {
            return ctx.send({ message: 'Comentário não encontrado'}, 404);
        }

        return ctx.send({ data: coment}, 200);
    },

    async create(ctx) {
        try{
            const coment = await strapi.entityService.create('api::comentary.comentary', {
                data: ctx.request.body,
            });

            return ctx.send({ data: coment}, 201);
        } catch (error) {
            return ctx.send({ message: 'Erro ao criar o comentário', error: error.message}, 400);
        }
    },

    async delete(ctx) {
        const { id } = ctx.params;
        const coment = await strapi.entityService.delete('api::comentary.comentary', id);

        if (!coment) {
            return ctx.send({ message: 'Comentário não encontrado'}, 404);
        }

        return ctx.send({ message: 'Comentário excluído com sucesso'}, 200);
    
    }
}));
