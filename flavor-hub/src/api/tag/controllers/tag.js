'use strict';

/**
 * tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tag.tag', ({ strapi }) => ({
    async find(ctx) {
        const tags = await strapi.entityService.findMany('api::tag.tag', {
            populate: '*',
        });

        return ctx.send({ data: tags}, 200);
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        const tag = await strapi.entityService.findOne('api::tag.tag', id, {
            populate: '*',
        });

        if (!tag) {
            return ctx.send({ message: 'Tag não encontrada'}, 404);
        }

        return ctx.send({ data: tag }, 200);
    },

    async create(ctx) {
        try {
            const tag = await strapi.entityService.create('api::tag.tag', {
                data: ctx.request.body,
            });

            return ctx.send({ data: tag }, 201);
        } catch (error) {
            return ctx.send({ message: 'Erro ao criar a tag', error: error.message }, 400);
        }
    },

    async delete(ctx) {
        const { id } = ctx.params;
        const tag = await strapi.entityService.delete('api::tag.tag', id);

        if(!tag) {
            return ctx.send({ message: 'Receita não encontrada'}, 404);
        }

        return ctx.send({ message: 'Tag excluída com sucesso' }, 200);
    }
    
}));
