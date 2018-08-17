const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
  homeTeam: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  awayTeam: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  week: { type: String },
  winner: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  loser: { type: mongoose.Schema.ObjectId, ref: 'Team'  },
  tie: { type: Boolean, default: true },
  points: { type: Number, default: 1 }
});

fixtureSchema.virtual('active')
  .get(function() {
    return !this.winner;    
  });


fixtureSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Fixture', fixtureSchema);
