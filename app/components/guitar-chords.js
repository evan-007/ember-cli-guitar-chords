import Ember from 'ember';

export default Ember.Component.extend({
  music: true,
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
      var notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
      var strings = ['E','A','D','G','B','E']
      // starting octaves of the open strings
      var octaves = [2,2,3,3,3,4]
      var chord = this.get('positions').split('');

      var chordNotes = strings.map(function(stringName, index){
        if (chord[index] === 'x') {
          return 'x'
        } else {
          var startingNote = parseInt(notes.indexOf(stringName));
          // console.log(startingNote)
          var noteAdjust = parseInt(chord[index]);
          var chordtone = startingNote + noteAdjust;
          // hack to handle going up an octave
          // when chordtone is longer than array of notes
          if(chordtone >= 12) {
              octaves[index]++
            chordtone = (parseInt(chordtone) - 12)
          }
          return notes[chordtone]
        }
      })
      var acoustic = Synth.createInstrument('acoustic');
      chordNotes.forEach(function(value, index) {
        if(value !== 'x') {
          setTimeout(function(){
            acoustic.play(value, octaves[index], 2);
          }, index*500)
        }
      });
    }
  }
});
