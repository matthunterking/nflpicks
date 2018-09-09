const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/nflpicks-${env}`;
const secret = process.env.SECRET || 'pciksdvjkh';

module.exports = { port, dbURI, secret, env };
