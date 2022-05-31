'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'connect-src': [
        "'self'",
        'http://localhost:3000/',
        'http://localhost:4200/',
        "'unsafe-eval'",
        'https://fonts.gstatic.com/',
        'https://fonts.googleapis.com/',
      ],
      'script-src': ["'unsafe-eval'", 'http://localhost:7357/'],
      'font-src': ['https://fonts.gstatic.com/'],
      'img-src': [
        'https://upload.wikimedia.org/',
        'https://api.mapbox.com/',
        'http://localhost:7357',
        'https://https//upload.wikimedia.org/',
      ],
      'style-src-elem': [
        'http://localhost:7357/',
        'https://fonts.gstatic.com/',
        'https://fonts.googleapis.com/',
      ],
      'style-src': [
        'http://localhost:7357/assets/test-support.css',
        'http://localhost:7357/assets/vendor.css',
        'http://localhost:7357/assets/super-rentals.css',
      ],
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.MAPBOX_ACCESS_TOKEN = ''
    //Replace with your own Mapbox API Default public token

  return ENV;
};
