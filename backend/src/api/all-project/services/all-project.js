'use strict';

/**
 * all-project service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-project.all-project');
