const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Fixtures = require('../models/fixture');
const Team = require('../models/team');


mongoose.connect(dbURI, (err, db) => {

  db.dropDatabase();
  Team.create([{
    name: 'Arizona Cardinals',
    logo: 'cardinals.png',
    primaryColor: '#97233F',
    secondaryColor: '#FFB612',
    tertiaryColor: '#000000',
    division: 'NFC West',
    established: 1920,
    shortName: 'ARI'
  },{
    name: 'Chicago Bears',
    logo: 'bears.png',
    primaryColor: '#F26522',
    secondaryColor: '#00143F',
    tertiaryColor: '#ffffff',
    division: 'NFC North',
    established: 1920,
    shortName: 'CHI'
  },{
    name: 'Green Bay Packers',
    logo: 'packers.png',
    primaryColor: '#24423C',
    secondaryColor: '#FCBE14',
    tertiaryColor: '#ffffff',
    division: 'NFC North',
    established: 1921,
    shortName: 'GB'
  },{
    name: 'New York Giants',
    logo: 'giants.png',
    primaryColor: '#192E6C',
    secondaryColor: '#B20032',
    tertiaryColor: '#ffffff',
    division: 'NFC East',
    established: 1925,
    shortName: 'NYG'
  },{
    name: 'Detroit Lions',
    logo: 'lions.png',
    primaryColor: '#046EB4',
    secondaryColor: '#B0B7BC',
    tertiaryColor: '#000000',
    division: 'NFC North',
    established: 1930,
    shortName: 'DET'
  },{
    name: 'Washington Redskins',
    logo: 'redskins.png',
    primaryColor: '#7C1415',
    secondaryColor: '#FFC20F',
    tertiaryColor: '#000000',
    division: 'NFC East',
    established: 1932,
    shortName: 'WAS'
  },{
    name: 'Philadelphia Eagles',
    logo: 'eagles.png',
    primaryColor: '#014A53',
    secondaryColor: '#BBC4C9',
    tertiaryColor: '#000000',
    division: 'NFC East',
    established: 1933,
    shortName: 'PHI'
  },{
    name: 'Pittsburgh Steelers',
    logo: 'steelers.png',
    primaryColor: '#FFC20E',
    secondaryColor: '#000000',
    tertiaryColor: '#B2BABF',
    division: 'AFC North',
    established: 1933,
    shortName: 'PIT'
  },{
    name: 'Los Angeles Rams',
    logo: 'rams.png',
    primaryColor: '#95774C',
    secondaryColor: '#002147',
    tertiaryColor: '#ffffff',
    division: 'NFC West',
    established: 1937,
    shortName: 'LAR'
  },{
    name: 'San Francisco 49ers',
    logo: '49ers.png',
    primaryColor: '#C9243F',
    secondaryColor: '#C8AA76',
    tertiaryColor: '#000000',
    division: 'NFC West',
    established: 1946,
    shortName: 'SF'
  },{
    name: 'Cleveland Browns',
    logo: 'browns.png',
    primaryColor: '#22150C',
    secondaryColor: '#FB4F14',
    tertiaryColor: '#ffffff',
    division: 'AFC North',
    established: 1946,
    shortName: 'CLE'
  },{
    name: 'Indianapolis Colts',
    logo: 'colts.png',
    primaryColor: '#003D79',
    secondaryColor: '#ffffff',
    tertiaryColor: '#B0B7BC',
    division: 'AFC South',
    established: 1953,
    shortName: 'IND'
  },{
    name: 'Dallas Cowboys',
    logo: 'cowboys.png',
    primaryColor: '#B0B7BC',
    secondaryColor: '#0C264C',
    tertiaryColor: '#ffffff',
    division: 'NFC East',
    established: 1960,
    shortName: 'DAL'
  },{
    name: 'Kansas City Chiefs',
    logo: 'chiefs.png',
    primaryColor: '#CA2430',
    secondaryColor: '#FFB612',
    tertiaryColor: '#000000',
    division: 'AFC West',
    established: 1960,
    shortName: 'KC'
  },{
    name: 'Los Angeles Chargers',
    logo: 'chargers.png',
    primaryColor: '#2072BA',
    secondaryColor: '#FDB515',
    tertiaryColor: '#0A2342',
    division: 'AFC West',
    established: 1960,
    shortName: 'LAC'
  },{
    name: 'Denver Broncos',
    logo: 'broncos.png',
    primaryColor: '#002244',
    secondaryColor: '#FB4F14',
    tertiaryColor: '#ffffff',
    division: 'AFC West',
    established: 1960,
    shortName: 'DEN'
  },{
    name: 'New York Jets',
    logo: 'jets.png',
    primaryColor: '#203731',
    secondaryColor: '#ffffff',
    tertiaryColor: '#000000',
    division: 'AFC East',
    established: 1960,
    shortName: 'NYJ'
  },{
    name: 'New England Patriots',
    logo: 'pats.png',
    primaryColor: '#0A2342',
    secondaryColor: '#C81F32',
    tertiaryColor: '#B0B7BD',
    division: 'AFC East',
    established: 1960,
    shortName: 'NE'
  },{
    name: 'Oakland Raiders',
    logo: 'raiders.png',
    primaryColor: '#C4C9CC',
    secondaryColor: '#000000',
    tertiaryColor: '#ffffff',
    division: 'AFC West',
    established: 1960,
    shortName: 'OAK'
  },{
    name: 'Tennessee Titans',
    logo: 'titans.png',
    primaryColor: '#4095D1',
    secondaryColor: '#00295B',
    tertiaryColor: '#BCC4C9',
    division: 'AFC South',
    established: 1960,
    shortName: 'TEN'
  },{
    name: 'Buffalo Bills',
    logo: 'bills.png',
    primaryColor: '#00338D',
    secondaryColor: '#C60C30',
    tertiaryColor: '#ffffff',
    division: 'AFC East',
    established: 1960,
    shortName: 'BUF'
  },{
    name: 'Minnesota Vikings',
    logo: 'vikings.png',
    primaryColor: '#4F2E84',
    secondaryColor: '#FEC62F',
    tertiaryColor: '#000000',
    division: 'NFC North',
    established: 1961,
    shortName: 'MIN'
  },{
    name: 'Atlanta Falcons',
    logo: 'falcons.png',
    primaryColor: '#A71930',
    secondaryColor: '#A5ACAF',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1966,
    shortName: 'ATL'
  },{
    name: 'Miami Dolphins',
    logo: 'dolphins.png',
    primaryColor: '#0091A0',
    secondaryColor: '#FF8500',
    tertiaryColor: '#002760',
    division: 'AFC East',
    established: 1966,
    shortName: 'MIA'
  },{
    name: 'New Orleans Saints',
    logo: 'saints.png',
    primaryColor: '#A08A58',
    secondaryColor: '#000000',
    tertiaryColor: '#ffffff',
    division: 'NFC South',
    established: 1967,
    shortName: 'NO'
  },{
    name: 'Cincinnati Bengals',
    logo: 'bengals.png',
    primaryColor: '#FB4F14',
    secondaryColor: '#000000',
    tertiaryColor: '#ffffff',
    division: 'AFC North',
    established: 1968,
    shortName: 'CIN'
  },{
    name: 'Seattle Seahawks',
    logo: 'seahawks.png',
    primaryColor: '#002A5C',
    secondaryColor: '#7AC142',
    tertiaryColor: '#B2B7BB',
    division: 'NFC West',
    established: 1976,
    shortName: 'SEA'
  },{
    name: 'Tampa Bay Buccaneers',
    logo: 'bucks.png',
    primaryColor: '#D40909',
    secondaryColor: '#B0B9BF',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1976,
    shortName: 'TB'
  },{
    name: 'Carolina Panthers',
    logo: 'panthers.png',
    primaryColor: '#0085CA',
    secondaryColor: '#BFC0BF',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1995,
    shortName: 'CAR'
  },{
    name: 'Jacksonville Jaguars',
    logo: 'jags.png',
    primaryColor: '#D8A328',
    secondaryColor: '#136677',
    tertiaryColor: '#000000',
    division: 'AFC South',
    established: 1995,
    shortName: 'JAX'
  },{
    name: 'Baltimore Ravens',
    logo: 'ravens.png',
    primaryColor: '#241773',
    secondaryColor: '#9E7C0C',
    tertiaryColor: '#ffffff',
    division: 'AFC North',
    established: 1996,
    shortName: 'BAL'
  },{
    name: 'Houston Texans',
    logo: 'texans.png',
    primaryColor: '#00143F',
    secondaryColor: '#C9243F',
    tertiaryColor: '#ffffff',
    division: 'AFC South',
    established: 2002,
    shortName: 'HOU'
  }])
    .then(teams => {
      console.log(`${teams.length} teams created!`);
      return Fixtures.create([{
        homeTeam: teams[6],
        awayTeam: teams[22],
        week: '1'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[20],
        week: '1'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[25],
        week: '1'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[31],
        week: '1'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[29],
        week: '1'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[7],
        week: '1'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[9],
        week: '1'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[27],
        week: '1'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[19],
        week: '1'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[13],
        week: '1'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[12],
        week: '1'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[26],
        week: '1'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[5],
        week: '1'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[1],
        week: '1'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[16],
        week: '1'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[8],
        week: '1'
      },


      {
        homeTeam: teams[25],
        awayTeam: teams[30],
        week: '2'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[28],
        week: '2'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[10],
        week: '2'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[31],
        week: '2'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[11],
        week: '2'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[13],
        week: '2'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[14],
        week: '2'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[23],
        week: '2'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[21],
        week: '2'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[6],
        week: '2'
      },
      {
        homeTeam: teams[8],
        awayTeam: teams[0],
        week: '2'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[4],
        week: '2'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[17],
        week: '2'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[18],
        week: '2'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[3],
        week: '2'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[26],
        week: '2'
      },


      {
        homeTeam: teams[10],
        awayTeam: teams[16],
        week: '3'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[20],
        week: '3'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[25],
        week: '3'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[15],
        week: '3'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[2],
        week: '3'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[11],
        week: '3'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[24],
        week: '3'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[3],
        week: '3'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[18],
        week: '3'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[9],
        week: '3'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[19],
        week: '3'
      },
      {
        homeTeam: teams[8],
        awayTeam: teams[14],
        week: '3'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[1],
        week: '3'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[12],
        week: '3'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[17],
        week: '3'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[7],
        week: '3'
      },


      {
        homeTeam: teams[8],
        awayTeam: teams[21],
        week: '4'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[20],
        week: '4'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[25],
        week: '4'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[4],
        week: '4'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[31],
        week: '4'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[23],
        week: '4'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[16],
        week: '4'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[6],
        week: '4'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[27],
        week: '4'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[10],
        week: '4'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[26],
        week: '4'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[24],
        week: '4'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[9],
        week: '4'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[30],
        week: '4'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[13],
        week: '4'
      },



      {
        homeTeam: teams[17],
        awayTeam: teams[11],
        week: '5'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[22],
        week: '5'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[30],
        week: '5'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[15],
        week: '5'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[2],
        week: '5'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[29],
        week: '5'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[23],
        week: '5'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[3],
        week: '5'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[19],
        week: '5'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[18],
        week: '5'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[0],
        week: '5'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[8],
        week: '5'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[21],
        week: '5'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[12],
        week: '5'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[5],
        week: '5'
      },



      {
        homeTeam: teams[3],
        awayTeam: teams[6],
        week: '6'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[0],
        week: '6'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[20],
        week: '6'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[28],
        week: '6'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[1],
        week: '6'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[11],
        week: '6'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[14],
        week: '6'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[7],
        week: '6'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[26],
        week: '6'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[27],
        week: '6'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[8],
        week: '6'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[30],
        week: '6'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[29],
        week: '6'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[13],
        week: '6'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[9],
        week: '6'
      },



      {
        homeTeam: teams[0],
        awayTeam: teams[15],
        week: '7'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[19],
        week: '7'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[20],
        week: '7'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[28],
        week: '7'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[25],
        week: '7'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[10],
        week: '7'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[4],
        week: '7'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[31],
        week: '7'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[21],
        week: '7'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[17],
        week: '7'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[24],
        week: '7'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[12],
        week: '7'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[8],
        week: '7'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[3],
        week: '7'
      },



      {
        homeTeam: teams[31],
        awayTeam: teams[23],
        week: '8'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[6],
        week: '8'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[30],
        week: '8'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[10],
        week: '8'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[15],
        week: '8'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[16],
        week: '8'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[26],
        week: '8'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[27],
        week: '8'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[5],
        week: '8'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[11],
        week: '8'
      },
      {
        homeTeam: teams[8],
        awayTeam: teams[2],
        week: '8'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[9],
        week: '8'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[24],
        week: '8'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[17],
        week: '8'
      },



      {
        homeTeam: teams[9],
        awayTeam: teams[18],
        week: '9'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[22],
        week: '9'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[1],
        week: '9'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[4],
        week: '9'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[13],
        week: '9'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[16],
        week: '9'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[7],
        week: '9'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[27],
        week: '9'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[31],
        week: '9'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[14],
        week: '9'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[8],
        week: '9'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[2],
        week: '9'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[19],
        week: '9'
      },



      {
        homeTeam: teams[7],
        awayTeam: teams[28],
        week: '10'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[0],
        week: '10'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[22],
        week: '10'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[20],
        week: '10'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[4],
        week: '10'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[29],
        week: '10'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[23],
        week: '10'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[17],
        week: '10'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[24],
        week: '10'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[5],
        week: '10'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[14],
        week: '10'
      },
      {
        homeTeam: teams[8],
        awayTeam: teams[26],
        week: '10'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[12],
        week: '10'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[3],
        week: '10'
      },



      {
        homeTeam: teams[26],
        awayTeam: teams[2],
        week: '11'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[28],
        week: '11'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[25],
        week: '11'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[12],
        week: '11'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[31],
        week: '11'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[21],
        week: '11'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[6],
        week: '11'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[27],
        week: '11'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[19],
        week: '11'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[15],
        week: '11'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[18],
        week: '11'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[7],
        week: '11'
      },




      {
        homeTeam: teams[4],
        awayTeam: teams[1],
        week: '12'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[5],
        week: '12'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[22],
        week: '12'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[10],
        week: '12'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[29],
        week: '12'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[23],
        week: '12'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[17],
        week: '12'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[3],
        week: '12'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[18],
        week: '12'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[9],
        week: '12'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[26],
        week: '12'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[0],
        week: '12'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[7],
        week: '12'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[2],
        week: '12'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[19],
        week: '12'
      },



      {
        homeTeam: teams[12],
        awayTeam: teams[24],
        week: '13'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[0],
        week: '13'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[30],
        week: '13'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[20],
        week: '13'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[28],
        week: '13'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[1],
        week: '13'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[10],
        week: '13'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[15],
        week: '13'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[11],
        week: '13'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[14],
        week: '13'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[8],
        week: '13'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[13],
        week: '13'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[16],
        week: '13'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[21],
        week: '13'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[9],
        week: '13'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[5],
        week: '13'
      },


      {
        homeTeam: teams[19],
        awayTeam: teams[29],
        week: '14'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[22],
        week: '14'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[30],
        week: '14'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[28],
        week: '14'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[11],
        week: '14'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[8],
        week: '14'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[17],
        week: '14'
      },
      {
        homeTeam: teams[27],
        awayTeam: teams[24],
        week: '14'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[3],
        week: '14'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[16],
        week: '14'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[25],
        week: '14'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[15],
        week: '14'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[4],
        week: '14'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[6],
        week: '14'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[7],
        week: '14'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[21],
        week: '14'
      },


      {
        homeTeam: teams[13],
        awayTeam: teams[14],
        week: '15'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[10],
        week: '15'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[31],
        week: '15'
      },
      {
        homeTeam: teams[22],
        awayTeam: teams[0],
        week: '15'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[12],
        week: '15'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[4],
        week: '15'
      },
      {
        homeTeam: teams[1],
        awayTeam: teams[2],
        week: '15'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[23],
        week: '15'
      },
      {
        homeTeam: teams[25],
        awayTeam: teams[18],
        week: '15'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[27],
        week: '15'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[19],
        week: '15'
      },
      {
        homeTeam: teams[29],
        awayTeam: teams[5],
        week: '15'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[26],
        week: '15'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[17],
        week: '15'
      },
      {
        homeTeam: teams[8],
        awayTeam: teams[6],
        week: '15'
      },
      {
        homeTeam: teams[28],
        awayTeam: teams[24],
        week: '15'
      },


      {
        homeTeam: teams[28],
        awayTeam: teams[22],
        week: '16'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[20],
        week: '16'
      },
      {
        homeTeam: teams[10],
        awayTeam: teams[25],
        week: '16'
      },
      {
        homeTeam: teams[16],
        awayTeam: teams[2],
        week: '16'
      },
      {
        homeTeam: teams[6],
        awayTeam: teams[31],
        week: '16'
      },
      {
        homeTeam: teams[23],
        awayTeam: teams[29],
        week: '16'
      },
      {
        homeTeam: teams[4],
        awayTeam: teams[21],
        week: '16'
      },
      {
        homeTeam: teams[11],
        awayTeam: teams[3],
        week: '16'
      },
      {
        homeTeam: teams[12],
        awayTeam: teams[27],
        week: '16'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[5],
        week: '16'
      },
      {
        homeTeam: teams[14],
        awayTeam: teams[30],
        week: '16'
      },
      {
        homeTeam: teams[9],
        awayTeam: teams[1],
        week: '16'
      },
      {
        homeTeam: teams[0],
        awayTeam: teams[8],
        week: '16'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[7],
        week: '16'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[13],
        week: '16'
      },
      {
        homeTeam: teams[18],
        awayTeam: teams[15],
        week: '16'
      },


      {
        homeTeam: teams[27],
        awayTeam: teams[22],
        week: '17'
      },
      {
        homeTeam: teams[24],
        awayTeam: teams[28],
        week: '17'
      },
      {
        homeTeam: teams[21],
        awayTeam: teams[1],
        week: '17'
      },
      {
        homeTeam: teams[7],
        awayTeam: teams[25],
        week: '17'
      },
      {
        homeTeam: teams[30],
        awayTeam: teams[10],
        week: '17'
      },
      {
        homeTeam: teams[3],
        awayTeam: teams[12],
        week: '17'
      },
      {
        homeTeam: teams[2],
        awayTeam: teams[4],
        week: '17'
      },
      {
        homeTeam: teams[19],
        awayTeam: teams[11],
        week: '17'
      },
      {
        homeTeam: teams[31],
        awayTeam: teams[29],
        week: '17'
      },
      {
        homeTeam: teams[20],
        awayTeam: teams[23],
        week: '17'
      },
      {
        homeTeam: teams[17],
        awayTeam: teams[16],
        week: '17'
      },
      {
        homeTeam: teams[13],
        awayTeam: teams[18],
        week: '17'
      },
      {
        homeTeam: teams[5],
        awayTeam: teams[6],
        week: '17'
      },
      {
        homeTeam: teams[26],
        awayTeam: teams[0],
        week: '17'
      },
      {
        homeTeam: teams[15],
        awayTeam: teams[14],
        week: '17'
      },
      {
        homeTeam: teams[8],
        awayTeam: teams[9],
        week: '17'
      }])
        .then(teams => console.log(`${teams.length} teams created!`));
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
