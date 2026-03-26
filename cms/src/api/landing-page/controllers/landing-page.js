'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { normalizeLandingContent } = require('../../../utils/normalize-landing-content');

module.exports = createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
  async public(ctx) {
    const entry = await strapi.documents('api::landing-page.landing-page').findFirst({
      status: 'published',
      populate: '*',
    });

    ctx.body = {
      data: normalizeLandingContent(entry),
      meta: {
        source: 'strapi',
        updatedAt: entry?.updatedAt ?? null,
      },
    };
  },
}));
