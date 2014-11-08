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
      // refactor!
      var notes = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
      var strings = ['E','A','D','G','B','E']
      // starting octaves of the open strings
      var octaves = [2,2,3,3,4,4]
      var chord = this.get('positions').split('');

      var stuff = strings.map(function(stringName, index){
        if (chord[index] === 'x') {
          return 'x'
        } else {
          var startingNote = parseInt(notes.indexOf(stringName));
          // console.log(startingNote)
          var noteAdjust = parseInt(chord[index]);
          var chordtone = startingNote + noteAdjust;
          // hack to handle going up an octave
          if(chordtone >= 12) {
            // ensures that notes go up an octave where appropriate
            chordtone = 12-chordtone
            if(chordtone > 12){
              octaves[index]++
            }
          }
          // console.log((parseInt(notes.indexOf(stringName)) + parseInt(chord[index])))
          return notes[chordtone]
        }
      })
      var acoustic = Synth.createInstrument('acoustic');
      // acoustic.play('C', 4, 2);
      // to access properties
      // then play notes with stuff
      stuff.forEach(function(value, index) {
        if(value !== 'x') {
          setTimeout(function(){
            acoustic.play(value, octaves[index], 2);
          }, index*500)
        }
      });
    }
  }
});
