const { MongoClient } = require("mongodb");

const CONNECTION_STRING =
  "mongodb://127.0.0.1:27017/?readPreference=primary&serverSelectionTimeoutMS=2000&appname=mongosh%201.1.9&directConnection=true&ssl=false";
const DB_NAME = "BlogMeDb";

async function getDb() {
  const client = new MongoClient(CONNECTION_STRING);
  await client.connect();
  const db = client.db(DB_NAME);
  return db;
}

module.exports = getDb;
