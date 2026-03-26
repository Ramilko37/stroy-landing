const defaultLandingContent = require('./data/default-landing-content');

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    const uid = 'api::landing-page.landing-page';

    try {
      const existingDraft = await strapi.documents(uid).findFirst({
        status: 'draft',
      });
      const existingPublished = await strapi.documents(uid).findFirst({
        status: 'published',
      });

      if (existingDraft || existingPublished) {
        return;
      }

      const created = await strapi.documents(uid).create({
        data: defaultLandingContent,
        status: 'draft',
      });

      await strapi.documents(uid).publish({
        documentId: created.documentId,
      });

      strapi.log.info('Landing page seeded with initial content.');
    } catch (error) {
      strapi.log.error(`Failed to seed landing content: ${error.message}`);
    }
  },
};
