const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');


const pickSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.ObjectId, ref: 'Fixture'},
  winnerPick: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  loserPick: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  pointsScored: { type: Number }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: 'Name is required' },
  email: { type: String, required: 'Email is required', unique: true },
  password: { type: String, required: 'Password is required'},
  score: { type: Number },
  picks: [ pickSchema ]
});

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
