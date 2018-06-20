/* global api, describe, it, expect, beforeEach */

const Fixture = require('../../../models/fixture');
const Team = require('../../../models/team');

const teamData = [{
  name: 'test1',
  division: 'NFC North'
},{
  name: 'test2',
  division: 'AFC North'
}];



describe('GET /fixtures', () => {
  beforeEach(done => {
    Fixture.remove({})
      .then(() => {
        Team.remove({});
        Team.create(teamData)
          .then(teams => {
            Fixture.create({
              homeTeam: teams[0]._id,
              awayTeam: teams[1]._id,
              week: '12'
            });
          })
          .then(() => done());
      });
  });

  it('should return a 200 response', done => {
    api
      .get('/api/fixtures')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array as response body', done => {
    api
      .get('/api/fixtures')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

});
