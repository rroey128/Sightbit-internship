const express = require('express');
const { MongoClient } = require('mongodb');
const prop = require('./Properties.js');
const connectionString = prop.connectionString;
const app = express();



app.get('/', (req, res) => {
    res.send('check is this!');
});

app.use(express.json());
const sitesRouter = require('./Routes/sites');
app.use('/sites', sitesRouter);


app.listen(3000);


