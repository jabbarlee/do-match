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

// app.post('/insert/player', async(req, res) => {
//     const player = 'jabbarlee'
//     const matchId = '6habs7dmjsuf7'

//     pool.query('insert into players ("player", "match-id") values ($1, $2)', [player, matchId], (err) => {
//         if(err){
//           console.log('Error inserting to database' + err);
//           res.status(500).send('Database error');
//         }
//     });
// })

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})