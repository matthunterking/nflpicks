const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Fixtures = require('../models/fixture');

Fixtures.collection.drop();

Fixtures.create([{
  homeTeam: 'PHI',
  awayTeam: 'ATL',
  week: 1
},
{
  homeTeam: 'BAL',
  awayTeam: 'BUF',
  week: 1
},
{
  homeTeam: 'IND',
  awayTeam: 'CIN',
  week: 1
},
{
  homeTeam: 'NE',
  awayTeam: 'HOU',
  week: 1
},
{
  homeTeam: 'NYG',
  awayTeam: 'JAX',
  week: 1
},
{
  homeTeam: 'CLE',
  awayTeam: 'PIT',
  week: 1
},
{
  homeTeam: 'MIN',
  awayTeam: 'SF',
  week: 1
},
{
  homeTeam: 'NO',
  awayTeam: 'TB',
  week: 1
},
{
  homeTeam: 'MIA',
  awayTeam: 'TEN',
  week: 1
},
{
  homeTeam: 'LAC',
  awayTeam: 'KC',
  week: 1
},
{
  homeTeam: 'CAR',
  awayTeam: 'DAL',
  week: 1
},
{
  homeTeam: 'DEN',
  awayTeam: 'SEA',
  week: 1
},
{
  homeTeam: 'ARI',
  awayTeam: 'WAS',
  week: 1
},
{
  homeTeam: 'GB',
  awayTeam: 'CHI',
  week: 1
},
{
  homeTeam: 'DET',
  awayTeam: 'NYJ',
  week: 1
},
{
  homeTeam: 'OAK',
  awayTeam: 'LAR',
  week: 1
},


{
  homeTeam: 'CIN',
  awayTeam: 'BAL',
  week: 2
},
{
  homeTeam: 'ATL',
  awayTeam: 'CAR',
  week: 2
},
{
  homeTeam: 'NO',
  awayTeam: 'CLE',
  week: 2
},
{
  homeTeam: 'TEN',
  awayTeam: 'HOU',
  week: 2
},
{
  homeTeam: 'WAS',
  awayTeam: 'IND',
  week: 2
},
{
  homeTeam: 'PIT',
  awayTeam: 'KC',
  week: 2
},
{
  homeTeam: 'BUF',
  awayTeam: 'LAC',
  week: 2
},
{
  homeTeam: 'NYJ',
  awayTeam: 'MIA',
  week: 2
},
{
  homeTeam: 'GB',
  awayTeam: 'MIN',
  week: 2
},
{
  homeTeam: 'TB',
  awayTeam: 'PHI',
  week: 2
},
{
  homeTeam: 'LAR',
  awayTeam: 'ARI',
  week: 2
},
{
  homeTeam: 'SF',
  awayTeam: 'DET',
  week: 2
},
{
  homeTeam: 'JAX',
  awayTeam: 'NE',
  week: 2
},
{
  homeTeam: 'DEN',
  awayTeam: 'OAK',
  week: 2
},
{
  homeTeam: 'DAL',
  awayTeam: 'NYG',
  week: 2
},
{
  homeTeam: 'CHI',
  awayTeam: 'SEA',
  week: 2
},


{
  homeTeam: 'CLE',
  awayTeam: 'NYJ',
  week: 3
},
{
  homeTeam: 'MIN',
  awayTeam: 'BUF',
  week: 3
},
{
  homeTeam: 'CAR',
  awayTeam: 'CIN',
  week: 3
},
{
  homeTeam: 'BAL',
  awayTeam: 'DEN',
  week: 3
},
{
  homeTeam: 'WAS',
  awayTeam: 'GB',
  week: 3
},
{
  homeTeam: 'PHI',
  awayTeam: 'IND',
  week: 3
},
{
  homeTeam: 'ATL',
  awayTeam: 'NO',
  week: 3
},
{
  homeTeam: 'HOU',
  awayTeam: 'NYG',
  week: 3
},
{
  homeTeam: 'MIA',
  awayTeam: 'OAK',
  week: 3
},
{
  homeTeam: 'KC',
  awayTeam: 'SF',
  week: 3
},
{
  homeTeam: 'JAX',
  awayTeam: 'TEN',
  week: 3
},
{
  homeTeam: 'LAR',
  awayTeam: 'LAC',
  week: 3
},
{
  homeTeam: 'ARI',
  awayTeam: 'CHI',
  week: 3
},
{
  homeTeam: 'SEA',
  awayTeam: 'DAL',
  week: 3
},
{
  homeTeam: 'DET',
  awayTeam: 'NE',
  week: 3
},
{
  homeTeam: 'TB',
  awayTeam: 'PIT',
  week: 3
},


{
  homeTeam: 'LAR',
  awayTeam: 'MIN',
  week: 4
},
{
  homeTeam: 'GB',
  awayTeam: 'BUF',
  week: 4
},
{
  homeTeam: 'ATL',
  awayTeam: 'CIN',
  week: 4
},
{
  homeTeam: 'DAL',
  awayTeam: 'DET',
  week: 4
},
{
  homeTeam: 'IND',
  awayTeam: 'HOU',
  week: 4
},
{
  homeTeam: 'NE',
  awayTeam: 'MIA',
  week: 4
},
{
  homeTeam: 'JAX',
  awayTeam: 'NYJ',
  week: 4
},
{
  homeTeam: 'TEN',
  awayTeam: 'PHI',
  week: 4
},
{
  homeTeam: 'CHI',
  awayTeam: 'TB',
  week: 4
},
{
  homeTeam: 'OAK',
  awayTeam: 'CLE',
  week: 4
},
{
  homeTeam: 'ARI',
  awayTeam: 'SEA',
  week: 4
},
{
  homeTeam: 'NYG',
  awayTeam: 'NO',
  week: 4
},
{
  homeTeam: 'LAC',
  awayTeam: 'SF',
  week: 4
},
{
  homeTeam: 'PIT',
  awayTeam: 'BAL',
  week: 4
},
{
  homeTeam: 'DEN',
  awayTeam: 'KC',
  week: 4
},



{
  homeTeam: 'NE',
  awayTeam: 'IND',
  week: 5
},
{
  homeTeam: 'PIT',
  awayTeam: 'ATL',
  week: 5
},
{
  homeTeam: 'CLE',
  awayTeam: 'BAL',
  week: 5
},
{
  homeTeam: 'NYJ',
  awayTeam: 'DEN',
  week: 5
},
{
  homeTeam: 'DET',
  awayTeam: 'GB',
  week: 5
},
{
  homeTeam: 'KC',
  awayTeam: 'JAX',
  week: 5
},
{
  homeTeam: 'CIN',
  awayTeam: 'MIA',
  week: 5
},
{
  homeTeam: 'CAR',
  awayTeam: 'NYG',
  week: 5
},
{
  homeTeam: 'BUF',
  awayTeam: 'TEN',
  week: 5
},
{
  homeTeam: 'LAC',
  awayTeam: 'OAK',
  week: 5
},
{
  homeTeam: 'SF',
  awayTeam: 'ARI',
  week: 5
},
{
  homeTeam: 'SEA',
  awayTeam: 'LAR',
  week: 5
},
{
  homeTeam: 'PHI',
  awayTeam: 'MIN',
  week: 5
},
{
  homeTeam: 'HOU',
  awayTeam: 'DAL',
  week: 5
},
{
  homeTeam: 'NO',
  awayTeam: 'WAS',
  week: 5
},



{
  homeTeam: 'NYG',
  awayTeam: 'PHI',
  week: 6
},
{
  homeTeam: 'MIN',
  awayTeam: 'ARI',
  week: 6
},
{
  homeTeam: 'HOU',
  awayTeam: 'BUF',
  week: 6
},
{
  homeTeam: 'WAS',
  awayTeam: 'CAR',
  week: 6
},
{
  homeTeam: 'MIA',
  awayTeam: 'CHI',
  week: 6
},
{
  homeTeam: 'NYJ',
  awayTeam: 'IND',
  week: 6
},
{
  homeTeam: 'CLE',
  awayTeam: 'LAC',
  week: 6
},
{
  homeTeam: 'CIN',
  awayTeam: 'PIT',
  week: 6
},
{
  homeTeam: 'OAK',
  awayTeam: 'SEA',
  week: 6
},
{
  homeTeam: 'ATL',
  awayTeam: 'TB',
  week: 6
},
{
  homeTeam: 'DEN',
  awayTeam: 'LAR',
  week: 6
},
{
  homeTeam: 'TEN',
  awayTeam: 'BAL',
  week: 6
},
{
  homeTeam: 'DAL',
  awayTeam: 'JAX',
  week: 6
},
{
  homeTeam: 'NE',
  awayTeam: 'KC',
  week: 6
},
{
  homeTeam: 'GB',
  awayTeam: 'SF',
  week: 6
},



{
  homeTeam: 'ARI',
  awayTeam: 'DEN',
  week: 7
},
{
  homeTeam: 'LAC',
  awayTeam: 'TEN',
  week: 7
},
{
  homeTeam: 'IND',
  awayTeam: 'BUF',
  week: 7
},
{
  homeTeam: 'PHI',
  awayTeam: 'CAR',
  week: 7
},
{
  homeTeam: 'KC',
  awayTeam: 'CIN',
  week: 7
},
{
  homeTeam: 'TB',
  awayTeam: 'CLE',
  week: 7
},
{
  homeTeam: 'MIA',
  awayTeam: 'DET',
  week: 7
},
{
  homeTeam: 'JAX',
  awayTeam: 'HOU',
  week: 7
},
{
  homeTeam: 'NYJ',
  awayTeam: 'MIN',
  week: 7
},
{
  homeTeam: 'CHI',
  awayTeam: 'NE',
  week: 7
},
{
  homeTeam: 'BAL',
  awayTeam: 'NO',
  week: 7
},
{
  homeTeam: 'WAS',
  awayTeam: 'DAL',
  week: 7
},
{
  homeTeam: 'SF',
  awayTeam: 'LAR',
  week: 7
},
{
  homeTeam: 'ATL',
  awayTeam: 'NYG',
  week: 7
},



{
  homeTeam: 'HOU',
  awayTeam: 'MIA',
  week: 8
},
{
  homeTeam: 'JAX',
  awayTeam: 'PHI',
  week: 8
},
{
  homeTeam: 'CAR',
  awayTeam: 'BAL',
  week: 8
},
{
  homeTeam: 'PIT',
  awayTeam: 'CLE',
  week: 8
},
{
  homeTeam: 'KC',
  awayTeam: 'DEN',
  week: 8
},
{
  homeTeam: 'CHI',
  awayTeam: 'NYJ',
  week: 8
},
{
  homeTeam: 'DET',
  awayTeam: 'SEA',
  week: 8
},
{
  homeTeam: 'CIN',
  awayTeam: 'TB',
  week: 8
},
{
  homeTeam: 'NYG',
  awayTeam: 'WAS',
  week: 8
},
{
  homeTeam: 'OAK',
  awayTeam: 'IND',
  week: 8
},
{
  homeTeam: 'LAR',
  awayTeam: 'GB',
  week: 8
},
{
  homeTeam: 'ARI',
  awayTeam: 'SF',
  week: 8
},
{
  homeTeam: 'MIN',
  awayTeam: 'NO',
  week: 8
},
{
  homeTeam: 'BUF',
  awayTeam: 'NE',
  week: 8
},



{
  homeTeam: 'SF',
  awayTeam: 'OAK',
  week: 9
},
{
  homeTeam: 'WAS',
  awayTeam: 'ATL',
  week: 9
},
{
  homeTeam: 'BUF',
  awayTeam: 'CHI',
  week: 9
},
{
  homeTeam: 'MIN',
  awayTeam: 'DET',
  week: 9
},
{
  homeTeam: 'CLE',
  awayTeam: 'KC',
  week: 9
},
{
  homeTeam: 'MIA',
  awayTeam: 'NYJ',
  week: 9
},
{
  homeTeam: 'BAL',
  awayTeam: 'PIT',
  week: 9
},
{
  homeTeam: 'CAR',
  awayTeam: 'TB',
  week: 9
},
{
  homeTeam: 'DEN',
  awayTeam: 'HOU',
  week: 9
},
{
  homeTeam: 'SEA',
  awayTeam: 'LAC',
  week: 9
},
{
  homeTeam: 'NO',
  awayTeam: 'LAR',
  week: 9
},
{
  homeTeam: 'NE',
  awayTeam: 'GB',
  week: 9
},
{
  homeTeam: 'DAL',
  awayTeam: 'TEN',
  week: 9
},



{
  homeTeam: 'PIT',
  awayTeam: 'CAR',
  week: 10
},
{
  homeTeam: 'KC',
  awayTeam: 'ARI',
  week: 10
},
{
  homeTeam: 'CLE',
  awayTeam: 'ATL',
  week: 10
},
{
  homeTeam: 'NYJ',
  awayTeam: 'BUF',
  week: 10
},
{
  homeTeam: 'CHI',
  awayTeam: 'DET',
  week: 10
},
{
  homeTeam: 'IND',
  awayTeam: 'JAX',
  week: 10
},
{
  homeTeam: 'GB',
  awayTeam: 'MIA',
  week: 10
},
{
  homeTeam: 'TEN',
  awayTeam: 'NE',
  week: 10
},
{
  homeTeam: 'CIN',
  awayTeam: 'NO',
  week: 10
},
{
  homeTeam: 'TB',
  awayTeam: 'WAS',
  week: 10
},
{
  homeTeam: 'OAK',
  awayTeam: 'LAC',
  week: 10
},
{
  homeTeam: 'LAR',
  awayTeam: 'SEA',
  week: 10
},
{
  homeTeam: 'PHI',
  awayTeam: 'DAL',
  week: 10
},
{
  homeTeam: 'SF',
  awayTeam: 'NYG',
  week: 10
},



{
  homeTeam: 'SEA',
  awayTeam: 'GB',
  week: 11
},
{
  homeTeam: 'DET',
  awayTeam: 'CAR',
  week: 11
},
{
  homeTeam: 'BAL',
  awayTeam: 'CIN',
  week: 11
},
{
  homeTeam: 'ATL',
  awayTeam: 'DAL',
  week: 11
},
{
  homeTeam: 'WAS',
  awayTeam: 'HOU',
  week: 11
},
{
  homeTeam: 'CHI',
  awayTeam: 'MIN',
  week: 11
},
{
  homeTeam: 'NO',
  awayTeam: 'PHI',
  week: 11
},
{
  homeTeam: 'NYG',
  awayTeam: 'TB',
  week: 11
},
{
  homeTeam: 'IND',
  awayTeam: 'TEN',
  week: 11
},
{
  homeTeam: 'LAC',
  awayTeam: 'DEN',
  week: 11
},
{
  homeTeam: 'ARI',
  awayTeam: 'OAK',
  week: 11
},
{
  homeTeam: 'JAX',
  awayTeam: 'PIT',
  week: 11
},




{
  homeTeam: 'DET',
  awayTeam: 'CHI',
  week: 12
},
{
  homeTeam: 'DAL',
  awayTeam: 'WAS',
  week: 12
},
{
  homeTeam: 'NO',
  awayTeam: 'ATL',
  week: 12
},
{
  homeTeam: 'CIN',
  awayTeam: 'CLE',
  week: 12
},
{
  homeTeam: 'BUF',
  awayTeam: 'JAX',
  week: 12
},
{
  homeTeam: 'IND',
  awayTeam: 'MIA',
  week: 12
},
{
  homeTeam: 'NYJ',
  awayTeam: 'NE',
  week: 12
},
{
  homeTeam: 'PHI',
  awayTeam: 'NYG',
  week: 12
},
{
  homeTeam: 'BAL',
  awayTeam: 'OAK',
  week: 12
},
{
  homeTeam: 'TB',
  awayTeam: 'SF',
  week: 12
},
{
  homeTeam: 'CAR',
  awayTeam: 'SEA',
  week: 12
},
{
  homeTeam: 'LAC',
  awayTeam: 'ARI',
  week: 12
},
{
  homeTeam: 'DEN',
  awayTeam: 'PIT',
  week: 12
},
{
  homeTeam: 'MIN',
  awayTeam: 'GB',
  week: 12
},
{
  homeTeam: 'HOU',
  awayTeam: 'TEN',
  week: 12
},



{
  homeTeam: 'DAL',
  awayTeam: 'NO',
  week: 13
},
{
  homeTeam: 'GB',
  awayTeam: 'ARI',
  week: 13
},
{
  homeTeam: 'ATL',
  awayTeam: 'BAL',
  week: 13
},
{
  homeTeam: 'MIA',
  awayTeam: 'BUF',
  week: 13
},
{
  homeTeam: 'TB',
  awayTeam: 'CAR',
  week: 13
},
{
  homeTeam: 'NYG',
  awayTeam: 'CHI',
  week: 13
},
{
  homeTeam: 'HOU',
  awayTeam: 'CLE',
  week: 13
},
{
  homeTeam: 'CIN',
  awayTeam: 'DEN',
  week: 13
},
{
  homeTeam: 'JAX',
  awayTeam: 'IND',
  week: 13
},
{
  homeTeam: 'PIT',
  awayTeam: 'LAC',
  week: 13
},
{
  homeTeam: 'DET',
  awayTeam: 'LAR',
  week: 13
},
{
  homeTeam: 'OAK',
  awayTeam: 'KC',
  week: 13
},
{
  homeTeam: 'TEN',
  awayTeam: 'NYJ',
  week: 13
},
{
  homeTeam: 'NE',
  awayTeam: 'MIN',
  week: 13
},
{
  homeTeam: 'SEA',
  awayTeam: 'SF',
  week: 13
},
{
  homeTeam: 'PHI',
  awayTeam: 'WAS',
  week: 13
},


{
  homeTeam: 'TEN',
  awayTeam: 'JAX',
  week: 14
},
{
  homeTeam: 'GB',
  awayTeam: 'ATL',
  week: 14
},
{
  homeTeam: 'KC',
  awayTeam: 'BAL',
  week: 14
},
{
  homeTeam: 'CLE',
  awayTeam: 'CAR',
  week: 14
},
{
  homeTeam: 'HOU',
  awayTeam: 'IND',
  week: 14
},
{
  homeTeam: 'CHI',
  awayTeam: 'LAR',
  week: 14
},
{
  homeTeam: 'MIA',
  awayTeam: 'NE',
  week: 14
},
{
  homeTeam: 'TB',
  awayTeam: 'NO',
  week: 14
},
{
  homeTeam: 'WAS',
  awayTeam: 'NYG',
  week: 14
},
{
  homeTeam: 'BUF',
  awayTeam: 'NYJ',
  week: 14
},
{
  homeTeam: 'LAC',
  awayTeam: 'CIN',
  week: 14
},
{
  homeTeam: 'SF',
  awayTeam: 'DEN',
  week: 14
},
{
  homeTeam: 'ARI',
  awayTeam: 'DET',
  week: 14
},
{
  homeTeam: 'DAL',
  awayTeam: 'PHI',
  week: 14
},
{
  homeTeam: 'OAK',
  awayTeam: 'PIT',
  week: 14
},
{
  homeTeam: 'SEA',
  awayTeam: 'MIN',
  week: 14
},


{
  homeTeam: 'KC',
  awayTeam: 'LAC',
  week: 15
},
{
  homeTeam: 'DEN',
  awayTeam: 'CLE',
  week: 15
},
{
  homeTeam: 'NYJ',
  awayTeam: 'HOU',
  week: 15
},
{
  homeTeam: 'ATL',
  awayTeam: 'ARI',
  week: 15
},
{
  homeTeam: 'IND',
  awayTeam: 'DAL',
  week: 15
},
{
  homeTeam: 'BUF',
  awayTeam: 'DET',
  week: 15
},
{
  homeTeam: 'CHI',
  awayTeam: 'GB',
  week: 15
},
{
  homeTeam: 'MIN',
  awayTeam: 'MIA',
  week: 15
},
{
  homeTeam: 'CIN',
  awayTeam: 'OAK',
  week: 15
},
{
  homeTeam: 'BAL',
  awayTeam: 'TB',
  week: 15
},
{
  homeTeam: 'NYG',
  awayTeam: 'TEN',
  week: 15
},
{
  homeTeam: 'JAX',
  awayTeam: 'WAS',
  week: 15
},
{
  homeTeam: 'SF',
  awayTeam: 'SEA',
  week: 15
},
{
  homeTeam: 'PIT',
  awayTeam: 'NE',
  week: 15
},
{
  homeTeam: 'LAR',
  awayTeam: 'PHI',
  week: 15
},
{
  homeTeam: 'CAR',
  awayTeam: 'NO',
  week: 15
},


{
  homeTeam: 'CAR',
  awayTeam: 'ATL',
  week: 16
},
{
  homeTeam: 'NE',
  awayTeam: 'BUF',
  week: 16
},
{
  homeTeam: 'CLE',
  awayTeam: 'CIN',
  week: 16
},
{
  homeTeam: 'NYJ',
  awayTeam: 'GB',
  week: 16
},
{
  homeTeam: 'PHI',
  awayTeam: 'HOU',
  week: 16
},
{
  homeTeam: 'MIA',
  awayTeam: 'JAX',
  week: 16
},
{
  homeTeam: 'DET',
  awayTeam: 'MIN',
  week: 16
},
{
  homeTeam: 'IND',
  awayTeam: 'NYG',
  week: 16
},
{
  homeTeam: 'DAL',
  awayTeam: 'TB',
  week: 16
},
{
  homeTeam: 'TEN',
  awayTeam: 'WAS',
  week: 16
},
{
  homeTeam: 'LAC',
  awayTeam: 'BAL',
  week: 16
},
{
  homeTeam: 'SF',
  awayTeam: 'CHI',
  week: 16
},
{
  homeTeam: 'ARI',
  awayTeam: 'LAR',
  week: 16
},
{
  homeTeam: 'NO',
  awayTeam: 'PIT',
  week: 16
},
{
  homeTeam: 'SEA',
  awayTeam: 'KC',
  week: 16
},
{
  homeTeam: 'OAK',
  awayTeam: 'DEN',
  week: 16
},


{
  homeTeam: 'TB',
  awayTeam: 'ATL',
  week: 17
},
{
  homeTeam: 'NO',
  awayTeam: 'CAR',
  week: 17
},
{
  homeTeam: 'MIN',
  awayTeam: 'CHI',
  week: 17
},
{
  homeTeam: 'PIT',
  awayTeam: 'CIN',
  week: 17
},
{
  homeTeam: 'BAL',
  awayTeam: 'CLE',
  week: 17
},
{
  homeTeam: 'NYG',
  awayTeam: 'DAL',
  week: 17
},
{
  homeTeam: 'GB',
  awayTeam: 'DET',
  week: 17
},
{
  homeTeam: 'TEN',
  awayTeam: 'IND',
  week: 17
},
{
  homeTeam: 'HOU',
  awayTeam: 'JAX',
  week: 17
},
{
  homeTeam: 'BUF',
  awayTeam: 'MIA',
  week: 17
},
{
  homeTeam: 'NE',
  awayTeam: 'NYJ',
  week: 17
},
{
  homeTeam: 'KC',
  awayTeam: 'OAK',
  week: 17
},
{
  homeTeam: 'WAS',
  awayTeam: 'PHI',
  week: 17
},
{
  homeTeam: 'SEA',
  awayTeam: 'ARI',
  week: 17
},
{
  homeTeam: 'DEN',
  awayTeam: 'LAC',
  week: 17
},
{
  homeTeam: 'LAR',
  awayTeam: 'SF',
  week: 17
}])
  .then(fixtures => console.log(`${fixtures.length} fixtures created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
