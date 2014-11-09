'use strict';

module.exports = {
  name: 'ember-cli-guitar-chords',

  included: function(app) {
    app.import('vendor/chordsJs/chords.js');
    app.import('vendor/audiosynth/audiosynth.js ')
    app.import('vendor/chordography/chordography.js')
    app.import('vendor/chordography/chordography.css')
  }

};
