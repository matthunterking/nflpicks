const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');


const pickSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.ObjectId, ref: 'Fixture'},
  winnerPick: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  loserPick: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  lock: { type: Boolean, default: false },
  week: { type: String },
  pointsScored: { type: Number, default: 0 }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: 'Name is required' },
  email: { type: String, required: 'Email is required', unique: true },
  password: { type: String, required: 'Password is required'},
  favouriteTeam: { type: mongoose.Schema.ObjectId, ref: 'League' },
  score: { type: Number, default: 0 },
  picks: [ pickSchema ],
  locks: [{ type: mongoose.Schema.ObjectId, ref: 'Team' } ],
  leagues: [{ type: mongoose.Schema.ObjectId, ref: 'League' }]
});

userSchema.methods.checkPicks = function checkPicks(fixture) {
  const pickToUpdate = this.picks.filter(pick => pick.gameId.toString() === fixture._id.toString())[0];
  console.log('we are updating =>', pickToUpdate);
  if(pickToUpdate) {
    if (pickToUpdate.winnerPick.toString() === fixture.winner.toString()) {
      if(pickToUpdate.lock) {
        pickToUpdate.pointsScored = 5;
      } else {
        pickToUpdate.pointsScored = 1;
      }
    } else {
      pickToUpdate.pointsScored = 0;
    }
  }
};

userSchema.methods.updateLeagues = function updateLeagues(league) {
  this.leagues.push(league.id.toString());
  this.save();
};

userSchema.methods.setLock = function setLock(lock) {
  this.locks.push(lock.winnerPick);
  this.save();
};

userSchema.methods.totalScore = function totalScore() {
  console.log('this.picks =>', this.picks);
  console.log('this.picks.reduce((total, pick) => total + pick.pointsScored, 0) =>', this.picks.reduce((total, pick) => total + pick.pointsScored, 0));
  this.score = this.picks.reduce((total, pick) => total + pick.pointsScored, 0);
  console.log(this);
  this.save();
};

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next){
  if(!this.googleId && !this.password) {
    this.invalidate('password', 'Password is required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('User', userSchema);
