'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/landing-content',
      handler: 'landing-page.public',
      config: {
        auth: false,
      },
    },
  ],
};
