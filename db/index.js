//initiate a postgres DB server
const pg = require('pg');
const pgUrl = 'postgres://localhost/dealers_choice_db';
const client = new pg.Client(pgUrl);

//Connects to server
client.connect();

//Export database server
module.exports = {
    client
};

