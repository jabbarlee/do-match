const cors = require('cors')
const express = require('express')
const { Pool } = require('pg')
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2103',
    port: 5432, // Default PostgreSQL port
});

app.post('/insert/player', async(req, res) => {
    const player = req.body.player
    const matchId = req.body.match

    pool.query('insert into players ("player", "match-id") values ($1, $2)', [player, matchId], (err) => {
        if(err){
          console.log('Error inserting to database' + err);
          res.status(500).send('Database error');
        }
    });
})

app.get('/fetch/players', async(req, res) => {
    try{
        const data = pool.query(`select "player" from players where "match-id" = '686a376a45f37'`);
        res.json((await data).rows)
    }catch(error){
        console.warn(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})