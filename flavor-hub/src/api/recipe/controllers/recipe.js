'use strict';

/**
 * recipe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recipe.recipe', ({ strapi }) => ({
  async find(ctx) {
    const recipes = await strapi.entityService.findMany('api::recipe.recipe', {
      populate: '*', // Inclui relacionamentos (como categorias ou comentários)
    });

    return ctx.send({ data: recipes }, 200);
  },

  async findOne(ctx) {
    const { id } = ctx.params; 
    const recipe = await strapi.entityService.findOne('api::recipe.recipe', id, {
      populate: '*', 
    });

    if (!recipe) {
      return ctx.send({ message: 'Receita não encontrada' }, 404);
    }

    return ctx.send({ data: recipe }, 200);
  },

  async create(ctx) {
    try {
      const recipe = await strapi.entityService.create('api::recipe.recipe', {
        data: ctx.request.body,
      });

      return ctx.send({ data: recipe }, 201);

    } catch (error) {
      return ctx.send({ message: 'Erro ao criar a receita', error: error.message }, 400);
    }
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const recipe = await strapi.entityService.delete('api::recipe.recipe', id);

    if (!recipe) {
      return ctx.send({ message: 'Receita não encontrada' }, 404);
    }

    return ctx.send({ message: 'Receita excluída com sucesso' }, 200);
  }
}));


