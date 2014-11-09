import Ember from 'ember';

export default Ember.Component.extend({
  music: true,
  title: 'D',
  fret: 'x,8,7,5,6,5',
  label: 'x,4,3,1,2,1',
  footer: '',
  id: function(){
    return this.get('fret')
  }.property('fret'),
  didInsertElement: function() {
    // chords.replaceOne(this.get('element'));
    // var placeholder = this.get('element');
    var id = this.$().find('svg').attr('id')
    // this comes from chordography
    var placeholder = document.getElementById(id);
    var csi = {title:this.get('title'),fret:this.get('fret'),
      label:this.get('label'),footer: this.get('footer')};
    var myChart = chartMaker();
    myChart(placeholder,csi);
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
      var chord = this.get('fret').split(',');

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
