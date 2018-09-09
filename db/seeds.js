const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Fixtures = require('../models/fixture');
const Team = require('../models/team');
const User = require('../models/user');


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
    fixtureImage: 'FixtureCardinals.png'
  },{
    name: 'Chicago Bears',
    logo: 'bears.png',
    primaryColor: '#F26522',
    secondaryColor: '#ffffff',
    tertiaryColor: '#00143F',
    division: 'NFC North',
    established: 1920,
    fixtureImage: 'FixtureBears.png'
  },{
    name: 'Green Bay Packers',
    logo: 'packers.png',
    primaryColor: '#FCBE14',
    secondaryColor: '#ffffff',
    tertiaryColor: '#24423C',
    division: 'NFC North',
    established: 1921,
    fixtureImage: 'FixturePackers.png'
  },{
    name: 'New York Giants',
    logo: 'giants.png',
    primaryColor: '#B20032',
    secondaryColor: '#ffffff',
    tertiaryColor: '#192E6C',
    division: 'NFC East',
    established: 1925,
    fixtureImage: 'FixtureGiants.png'
  },{
    name: 'Detroit Lions',
    logo: 'lions.png',
    primaryColor: '#046EB4',
    secondaryColor: '#B0B7BC',
    tertiaryColor: '#000000',
    division: 'NFC North',
    established: 1930,
    fixtureImage: 'FixtureLions.png'
  },{
    name: 'Washington Redskins',
    logo: 'redskins.png',
    primaryColor: '#7C1415',
    secondaryColor: '#FFC20F',
    tertiaryColor: '#000000',
    division: 'NFC East',
    established: 1932,
    fixtureImage: 'FixtureRedskins.png'
  },{
    name: 'Philadelphia Eagles',
    logo: 'eagles.png',
    primaryColor: '#014A53',
    secondaryColor: '#BBC4C9',
    tertiaryColor: '#000000',
    division: 'NFC East',
    established: 1933,
    fixtureImage: 'FixtureEagles.png'
  },{
    name: 'Pittsburgh Steelers',
    logo: 'steelers.png',
    primaryColor: '#FFC20E',
    secondaryColor: '#B2BABF',
    tertiaryColor: '#000000',
    division: 'AFC North',
    established: 1933,
    fixtureImage: 'FixtureSteelers.png'
  },{
    name: 'Los Angeles Rams',
    logo: 'rams.png',
    primaryColor: '#95774C',
    secondaryColor: '#ffffff',
    tertiaryColor: '#002147',
    division: 'NFC West',
    established: 1937,
    fixtureImage: 'FixtureRams.png'
  },{
    name: 'San Francisco 49ers',
    logo: '49ers.png',
    primaryColor: '#C9243F',
    secondaryColor: '#C8AA76',
    tertiaryColor: '#000000',
    division: 'NFC West',
    established: 1946,
    fixtureImage: 'Fixture49ers.png'
  },{
    name: 'Cleveland Browns',
    logo: 'browns.png',
    primaryColor: '#FB4F14',
    secondaryColor: '#ffffff',
    tertiaryColor: '#22150C',
    division: 'AFC North',
    established: 1946,
    fixtureImage: 'FixtureBrowns.png'
  },{
    name: 'Indianapolis Colts',
    logo: 'colts.png',
    primaryColor: '#B0B7BC',
    secondaryColor: '#ffffff',
    tertiaryColor: '#003D79',
    division: 'AFC South',
    established: 1953,
    fixtureImage: 'FixtureColts.png'
  },{
    name: 'Dallas Cowboys',
    logo: 'cowboys.png',
    primaryColor: '#B0B7BC',
    secondaryColor: '#ffffff',
    tertiaryColor: '#0C264C',
    division: 'NFC East',
    established: 1960,
    fixtureImage: 'FixtureCowboys.png'
  },{
    name: 'Kansas City Chiefs',
    logo: 'chiefs.png',
    primaryColor: '#CA2430',
    secondaryColor: '#FFB612',
    tertiaryColor: '#000000',
    division: 'AFC West',
    established: 1960,
    fixtureImage: 'FixtureChiefs.png'
  },{
    name: 'Los Angeles Chargers',
    logo: 'chargers.png',
    primaryColor: '#2072BA',
    secondaryColor: '#FDB515',
    tertiaryColor: '#0A2342',
    division: 'AFC West',
    established: 1960,
    fixtureImage: 'FixtureChargers.png'
  },{
    name: 'Denver Broncos',
    logo: 'broncos.png',
    primaryColor: '#FB4F14',
    secondaryColor: '#ffffff',
    tertiaryColor: '#002244',
    division: 'AFC West',
    established: 1960,
    fixtureImage: 'FixtureBroncos.png'
  },{
    name: 'New York Jets',
    logo: 'jets.png',
    primaryColor: '#203731',
    secondaryColor: '#ffffff',
    tertiaryColor: '#000000',
    division: 'AFC East',
    established: 1960,
    fixtureImage: 'FixtureJets.png'
  },{
    name: 'New England Patriots',
    logo: 'pats.png',
    primaryColor: '#C81F32',
    secondaryColor: '#B0B7BD',
    tertiaryColor: '#0A2342',
    division: 'AFC East',
    established: 1960,
    fixtureImage: 'FixturePatriots.png'
  },{
    name: 'Oakland Raiders',
    logo: 'raiders.png',
    primaryColor: '#C4C9CC',
    secondaryColor: '#ffffff',
    tertiaryColor: '#000000',
    division: 'AFC West',
    established: 1960,
    fixtureImage: 'FixtureRaiders.png'
  },{
    name: 'Tennessee Titans',
    logo: 'titans.png',
    primaryColor: '#4095D1',
    secondaryColor: '#BCC4C9',
    tertiaryColor: '#00295B',
    division: 'AFC South',
    established: 1960,
    fixtureImage: 'FixtureTitans.png'
  },{
    name: 'Buffalo Bills',
    logo: 'bills.png',
    primaryColor: '#C60C30',
    secondaryColor: '#ffffff',
    tertiaryColor: '#00338D',
    division: 'AFC East',
    established: 1960,
    fixtureImage: 'FixtureBills.png'
  },{
    name: 'Minnesota Vikings',
    logo: 'vikings.png',
    primaryColor: '#4F2E84',
    secondaryColor: '#FEC62F',
    tertiaryColor: '#000000',
    division: 'NFC North',
    established: 1961,
    fixtureImage: 'FixtureVikings.png'
  },{
    name: 'Atlanta Falcons',
    logo: 'falcons.png',
    primaryColor: '#A71930',
    secondaryColor: '#A5ACAF',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1966,
    fixtureImage: 'FixtureFalcons.png'
  },{
    name: 'Miami Dolphins',
    logo: 'dolphins.png',
    primaryColor: '#0091A0',
    secondaryColor: '#FF8500',
    tertiaryColor: '#002760',
    division: 'AFC East',
    established: 1966,
    fixtureImage: 'FixtureDolphins.png'
  },{
    name: 'New Orleans Saints',
    logo: 'saints.png',
    primaryColor: '#A08A58',
    secondaryColor: '#ffffff',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1967,
    fixtureImage: 'FixtureSaints.png'
  },{
    name: 'Cincinnati Bengals',
    logo: 'bengals.png',
    primaryColor: '#FB4F14',
    secondaryColor: '#ffffff',
    tertiaryColor: '#000000',
    division: 'AFC North',
    established: 1968,
    fixtureImage: 'FixtureBengals.png'
  },{
    name: 'Seattle Seahawks',
    logo: 'seahawks.png',
    primaryColor: '#002A5C',
    secondaryColor: '#7AC142',
    tertiaryColor: '#002A5C',
    division: 'NFC West',
    established: 1976,
    fixtureImage: 'FixtureSeahawks.png'
  },{
    name: 'Tampa Bay Buccaneers',
    logo: 'bucks.png',
    primaryColor: '#D40909',
    secondaryColor: '#B0B9BF',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1976,
    fixtureImage: 'FixtureBuccaneers.png'
  },{
    name: 'Carolina Panthers',
    logo: 'panthers.png',
    primaryColor: '#0085CA',
    secondaryColor: '#BFC0BF',
    tertiaryColor: '#000000',
    division: 'NFC South',
    established: 1995,
    fixtureImage: 'FixturePanthers.png'
  },{
    name: 'Jacksonville Jaguars',
    logo: 'jags.png',
    primaryColor: '#D8A328',
    secondaryColor: '#136677',
    tertiaryColor: '#000000',
    division: 'AFC South',
    established: 1995,
    fixtureImage: 'FixtureJaguars.png'
  },{
    name: 'Baltimore Ravens',
    logo: 'ravens.png',
    primaryColor: '#9E7C0C',
    secondaryColor: '#ffffff',
    tertiaryColor: '#241773',
    division: 'AFC North',
    established: 1996,
    fixtureImage: 'FixtureRavens.png'
  },{
    name: 'Houston Texans',
    logo: 'texans.png',
    primaryColor: '#C9243F',
    secondaryColor: '#ffffff',
    tertiaryColor: '#00143F',
    division: 'AFC South',
    established: 2002,
    fixtureImage: 'FixtureTexans.png'
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
        .then(teams => {
          console.log(`${teams.length} teams created!`);
          return User
            .create([{
              name: 'Matt Hunter-King',
              email: 'matthew85king@gmail.com',
              admin: true,
              profilePic: 'https://www.playerprofiler.com/wp-content/uploads/2014/06/HeadshotSilhouette5.png',
              password: 'a',
              passwordConfirmation: 'a',
              favouriteTeam: teams[1],
              score: 0,
              city: 'London'
            }])
            .then(user => console.log(`${user.length} user created!`));
        });
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
