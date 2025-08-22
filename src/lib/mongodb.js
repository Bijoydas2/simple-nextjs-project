import { MongoClient } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGO_URL;
if (!uri) throw new Error("Please define the MONGO_URL in your .env");

if (process.env.NODE_ENV === "development") {
  // dev mode: prevent creating new clients on every hot reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // production mode: create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
