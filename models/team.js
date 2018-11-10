const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  logo: { type: String },
  fixtureImage: { type: String },
  primaryColor: { type: String },
  secondaryColor: { type: String },
  tertiaryColor: { type: String },
  textColor: { type: String },
  established: { type: Number },
  division: {
    type: String,
    enum: ['NFC North', 'NFC South', 'NFC East', 'NFC West',
      'AFC North', 'AFC South', 'AFC East', 'AFC West'],
    required: 'This field is required'
  },
  record: {
    wins: [{ type: Number }],
    loss: [{ type: Number }],
    tie: [{ type: Number }]
  }
});

// teamSchema.virtual('streak')
//   .get(function (){
// TODO: WORK OUT A WAY TO SHOW HOW MANY WINS IN A ROW
//   });

teamSchema.methods.updateRecord = function updateRecord(fixture) {
  const winnerId = fixture.winner._id.toString();
  const loserId = fixture.loser._id.toString();

  if(fixture.homeTeam._id.toString() !==  this._id.toString() &&
    fixture.awayTeam._id.toString() !==  this._id.toString()) {
    return;
  }

  if(winnerId === this._id.toString()) {
    // this.record.loss.splice(this.record.loss.indexOf(fixture.week), 1);
    // this.record.tie.splice(this.record.tie.indexOf(fixture.week), 1);
    this.record.wins.push(fixture.week);

  } else if(loserId === this._id.toString()) {
    // this.record.wins.splice(this.record.wins.indexOf(fixture.week), 1);
    // this.record.tie.splice(this.record.tie.indexOf(fixture.week), 1);
    this.record.loss.push(fixture.week);

  } else {
    // this.record.wins.splice(this.record.wins.indexOf(fixture.week), 1);
    // this.record.loss.splice(this.record.loss.indexOf(fixture.week), 1);
    this.record.tie.push(fixture.week);
  }
  this.save();
};

module.exports = mongoose.model('Team', teamSchema);
