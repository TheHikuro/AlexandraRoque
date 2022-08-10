import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>

if (!uri) {
    throw new Error('MONGODB_URI is not defined')
}

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;