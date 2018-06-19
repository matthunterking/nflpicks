const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
  homeTeam: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  awayTeam: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  week: { type: String },
  winner: { type: String },
  loser: { type: String },
  points: { type: Number, default: 1 }
});

module.exports = mongoose.model('Fixture', fixtureSchema);
