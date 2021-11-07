const express = require('express');
const mainPost = require('./views/mainPost');
const postDetails = require('./views/postDetails');
const morgan = require('morgan');
const db = require('./db');
const client = db.client;

const app = express();

// Middleware functions
app.use(morgan('dev'));
app.use(express.static('public')); 

// Express Pipeline - Main Post Request Using Database Server
app.get('/', async (req, res, next) => {
    try {
        const data = await client.query(`SELECT players.*, details.img FROM players JOIN details ON players.id = details.player_id`);
        const players = data.rows;
        res.send(mainPost(players));
    }
    catch(err) { next(err) } 
})

// Express Pipeline - Post Details Request Using Database Server
app.get('/posts/:id', async (req, res, next) => {
    try {
        const response = await client.query(`SELECT details.*, players.name FROM details JOIN players ON players.id = details.player_id WHERE details.player_id=$1;`, [req.params.id]);
        const playerDetail = response.rows[0];
        res.send(postDetails(playerDetail));
    }
    catch(err) { next(err) }
})
 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); 
 

