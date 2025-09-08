// lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {
  // optional, recommended for newer MongoDB drivers
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // for hot reload in development
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  // Reuse the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the connected client promise
export default clientPromise;
