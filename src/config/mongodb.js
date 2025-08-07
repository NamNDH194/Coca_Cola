const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

const { MongoClient, ServerApiVersion } = require("mongodb");

let workoutDatabaseInstance = null;

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function CONNECT_DB() {
  await mongoClientInstance.connect();
  workoutDatabaseInstance = mongoClientInstance.db(DATABASE_NAME);
}

function GET_DB() {
  if (!workoutDatabaseInstance) {
    throw new Error("Must connect to database first!");
  }
  return workoutDatabaseInstance;
}

async function CLOSE_DB() {
  await mongoClientInstance.close();
}

module.exports = {
  CONNECT_DB,
  GET_DB,
  CLOSE_DB,
};
