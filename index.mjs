import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('check is this!');
});

app.use(express.json());
// const sitesRouter = require('./routes/sites.mjs');
import sitesRouter from './routes/sites.mjs';
app.use('/sites', sitesRouter);


app.listen(3000);


