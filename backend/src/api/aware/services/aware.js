'use strict';

/**
 * aware service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aware.aware');
