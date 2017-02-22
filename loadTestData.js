import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('customers').insertMany([
    {
      "id": 1,
      "name": "Stephen Siegel",
      "age": "44",
      "address": "1911 Gerald L. Bates Drive",
      "city": "Boston",
      "state": "MA",
      "zip": "02110",
      "interest": "Solar is the way to go because it's cleaner to the enviroment"
    },{
      "id": 2,
      "name": "Adam May",
      "age": "22",
      "address": "3370 Sampson Street",
      "city": "Denver",
      "state": "CO",
      "zip": "80202",
      "interest": "I'm interested in solar because I want to be able to control my own energy costs"
    },{
      "id": 3,
      "name": "Lisa M. Raines",
      "age": "22",
      "address": "1418 Apple Lane",
      "city": "Galesburg",
      "state": "IL",
      "zip": "61401",
      "interest": "Solar energy is cheap and reliable!"
    }
  ]).then(response => {
      console.info('Customers', response.insertedCount);
      db.close();
    });
  });