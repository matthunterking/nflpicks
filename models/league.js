const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  leagueName: { type: String, required: 'This field is required' },
  code: { type: String },
  members: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ]
});


leagueSchema.virtual('table')
  .get(function(){
    return this.members.sort((a, b) => a.score - b.score);
  });

leagueSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('League', leagueSchema);
