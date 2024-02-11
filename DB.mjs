
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

export class DB{

#client;
#dbName;
#db;

constructor(dbName){
    this.dbName = dbName;
    this.client = new MongoClient(connectionString);
    this.db = this.client.db(this.dbName);
}

async connect() {
    try {
        await this.client.connect();
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error(e);
    }

    this.createCollection('sites');
}


async close() {
    try {
        await thid.client.close();
        console.log('Closed connection to MongoDB');
    } catch (e) {
        console.error(e);
    }
}

async readData(collectionName, query) {
    try {
        const collection = this.db.collection(collectionName);
        const data = await collection.findOne(query);
        return data;
    } catch (e) {
        console.error(e);
    }
}

async readAllData(collectionName) {
    try {
        const collection = this.db.collection(collectionName);
        const data = await collection.find({}).toArray();
        return data;
    } catch (e) {
        console.error(e);
    }
}

async createCollection(collectionName) {
    try {
        await this.db.createCollection(collectionName);
        console.log(`Created collection ${collectionName}`);
    } catch (e) {
        console.error(e);
    }
}

async insertData(collectionName, data) {
    try {

        const collection = this.db.collection(collectionName);
        await collection.insertOne(data);
        console.log(`Inserted data into ${collectionName}`);
    } catch (e) {
        console.error(e);
    }
}

async updateData(collectionName, query, newData) {
    try {
        const collection = this.db.collection(collectionName);
        await collection.updateOne(query, { $set: newData });
        console.log(`Updated data in ${collectionName}`);
    }
    catch (e) {
        console.error(e);
    }
}

async deleteData(collectionName, query) {
    try {
        const collection = this.db.collection(collectionName);
        await collection.deleteOne(query);
        console.log(`Deleted data from ${collectionName}`);
    }

    catch (e) {
        console.error(e);
    }
}

async validateData(collectionName, bodyJSON) {
    try {
        const collection = this.db.collection(collectionName);
        const data = await collection.findOne(bodyJSON);
        if(data){
            return true;
        }
        else{
            return false;
        }
    }
    catch (e) {
        console.error(e);
    }
}

}

// module.exports = { DB };
