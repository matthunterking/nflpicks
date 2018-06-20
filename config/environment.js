const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = 'mongodb://localhost/nflpicks';
const secret = process.env.SECRET || 'pciksdvjkh';

module.exports = { port, dbURI, secret, env };
