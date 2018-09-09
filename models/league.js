const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  leagueName: { type: String, required: 'This field is required' },
  code: { type: String },
  users: [ {
    userId: { type: mongoose.Schema.ObjectId, ref: 'User' },
    position: { type: Number, default: 1 }
  }]
});

leagueSchema.methods.updatePositions = function updatePositions() {
  let position = 0;
  let lastIndex;
  this.users.sort((a, b) => b.userId.score - a.userId.score).map((user, index, array) => {
    position += 1;
    lastIndex = index - 1;
    if(index === 0) {
      user.position = position;
      return user;
    }
    if(user.userId.score === array[lastIndex].userId.score) {
      user.position = array[lastIndex].position;
      return user;
    } else {
      user.position = position;
      return user;
    }
  });
  this.save();
};

// tableSchema.virtual('position')
//   .get(function(){
//     return this.table.indexOf()
//   })



//TODO: CREATE A METHOD WHICH SORTS THE TABLE AND UPDATES THE POSITIONS OF EACH USER IN LEAGUE


// leagueSchema.virtual('table')
//   .get(function(){
//     return this.members.sort((a, b) => a.score - b.score).map((member, index) => {
//       const position = index + 1;
//       const entry = { position, member };
//       return entry;
//     });
//   });

leagueSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('League', leagueSchema);
