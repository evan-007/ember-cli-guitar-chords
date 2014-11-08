import Ember from 'ember';

export default Ember.Component.extend({
  name: 'D',
  positions: 'xx0232',
  fingers: '---132',
  size: '3',
  didInsertElement: function() {
    chords.replace();
    console.log('hi')
  }
});
