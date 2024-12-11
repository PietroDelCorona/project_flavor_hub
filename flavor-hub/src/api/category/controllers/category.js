'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
    async find(ctx) {
        const categories = await strapi.entityService.findMany('api::category.category', {
            populate: '*',
        });

        return ctx.send({ data: categories }, 200);
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        const category = await strapi.entityService.findOne('api::category.category', id, {
            populate: '*',
        });

        if (!category) {
            return ctx.send({ message: 'Categoria não encontrada'}, 404);
        }

        return ctx.send({ data: category}, 200);
    },

    async create(ctx) {
        try {
            const category = await strapi.enrtityService.create('api::category.category', {
                data: ctx.request.body,
            });

            return ctx.send({ data: category}, 201);
        } catch (error) {
            return ctx.send({message: 'Erro ao criar a categoria', error: error.message }, 400);
        }
    },

    async delete(ctx) {
        const { id } = ctx.params;
        const category = await strapi.entityService.delete('api::category.category', id);

        if (!category) {
            return ctx.send({ message: 'Categoria não encontrada'}, 404);
        }
        
        return ctx.send({ message: 'Categoria excluída com sucesso'}, 200);
    }
}));
