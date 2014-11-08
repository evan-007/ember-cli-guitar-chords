import Ember from 'ember';

export default Ember.Component.extend({
  name: 'D',
  positions: 'xx0232',
  fingers: '---132',
  size: '3',
  didInsertElement: function() {
    chords.replaceOne(this.get('element'));
  },
  click: function() {
    this.sendAction();
  },
  actions: {
    playMusic: function() {
      var acoustic = Synth.createInstrument('acoustic');
      acoustic.play('C', 4, 2);
    }
  }
});
