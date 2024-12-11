'use strict';

/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
    async find(ctx) {
        const reviews = await strapi.entityService.findMany('api::review.review', {
            populate: '*',
        });

        if (reviews.length == 0) {
            return ctx.send({message: 'Ainda não há avaliação para as receitas'})
        }

        return ctx.send({ data: reviews}, 200);
    },

    async finOne(ctx) {
        const { id } = ctx.params;
        const review = await strapi.entityService.findOne('api::review.review', id, {
            populate: '*',
        });

        if (!review) {
            return ctx.send({ message: 'Avaliação não encontrada'}, 404);
        }

        return ctx.send({ data: review }, 200);
    },

    async create(ctx) {
        try{
            const review = await strapi.entityService.create('api::review.review', {
                data: ctx.request.body,
            });

            return ctx.send({ data: review}, 201);
        } catch (error) {
            return ctx.send({ message: 'Erro ao criar a avaliação', error: error.message }, 400);
        }
    },

    async delete(ctx) {
        const { id } = ctx.params;
        const review = await strapi.entityService.delete('api::review.review', id);

        if (!review) {
            return ctx.send({ message: 'Avaliação não encontrada'}, 404);
        }

        return ctx.send({ message: 'Avaliação excluída com sucesso'}, 200);
    }
}));
