// db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  console.log("✅ Conectado correctamente a MongoDB Atlas");

  const db = client.db(process.env.DB_NAME);
  return db;
}
