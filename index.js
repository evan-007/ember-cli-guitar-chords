'use strict';

module.exports = {
  name: 'ember-cli-guitar-chords',

  included: function(app) {
    app.import('vendor/chordsJs/chords.js');
  }

};
