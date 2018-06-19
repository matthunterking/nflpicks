const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
  homeTeam: { type: String },
  awayTeam: { type: String },
  week: { type: String },
  winner: { type: String },
  loser: { type: String },
  points: { type: Number, default: 1 }
});

module.exports = mongoose.model('Fixture', fixtureSchema);
