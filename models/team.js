const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  logo: { type: String },
  shortName: { type: String },
  primaryColor: { type: String },
  secondaryColor: { type: String },
  tertiaryColor: { type: String },
  established: { type: Number },
  division: {
    type: String,
    enum: ['NFC North', 'NFC South', 'NFC East', 'NFC West',
      'AFC North', 'AFC South', 'AFC East', 'AFC West'],
    required: 'This field is required'
  }
});

module.exports = mongoose.model('Team', teamSchema);
