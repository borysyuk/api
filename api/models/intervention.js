'use strict';

require('./trial');

const bookshelf = require('../../config').bookshelf;
const BaseModel = require('./base');

const Intervention = BaseModel.extend({
  tableName: 'interventions',
  visible: [
    'id',
    'name',
    'type',
  ],
  trials: function () {
    return this.belongsToMany('Trial', 'trials_interventions');
  },
});

module.exports = bookshelf.model('Intervention', Intervention);
