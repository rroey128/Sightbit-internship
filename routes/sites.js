const fs = require('fs');
const path = require('path');
const express = require('express');
const { readData } = require('../MockData.js');
const { updateJSONFile } = require('../MockData.js');
const DB = require('../DB.js').DB;
const db = new DB('SightBitDB');


// Create a router for the sites endpoint
const router = express.Router();
db.connect();


router.post('/', (req, res) => {
    if(!db.validateData(req.body)){
        res.status(400).send('Invalid data');
        console.log('Invalid data');
        return;
    }
    const { id, name, loation } = req.body;
    db.insertData('sites', req.body);
    res.json(req.body);
}
);


router.get('/', (req, res) => {
    db.readAllData('sites').then((data) => {
        res.json(data);
    }); 
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.readData('sites', {id: id}).then((data) => {
        if(!data){
            res.status(404).send('Site not found');
            return;
        }
        res.json(data);
    });
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.deleteData('sites', {id: id}).then((data) => {
        if(!data){
            res.status(404).send('Site not found');
            return;
        }
        res.json(data);
    });
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.updateData('sites', {id: id}, req.body).then((data) => {
        if(!data){
            res.status(404).send('Site not found');
            return;
        }
        res.json(data);
    });
});

process.on('SIGINT', () => {
    console.log('Received SIGINT, closing connection to MongoDB and exiting process...');
    db.close();
    process.exit();
});

process.on('exit', () => {
    console.log('Exiting process...');
    db.close();
});



module.exports = router;