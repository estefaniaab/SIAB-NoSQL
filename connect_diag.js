// connect_diag.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();
dns.setDefaultResultOrder("ipv4first");

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "test";

console.log("🌐 Intentando conectar a MongoDB Atlas...");
console.log("🔗 URI (inicio):", uri.slice(0, 60) + "...");

const client = new MongoClient(uri, {
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  minDHSize: 2048, // fuerza compatibilidad TLS
  ssl: true,
  tlsInsecure: false,
});


try {
  await client.connect();
  console.log("✅ Conexión exitosa a MongoDB Atlas");

  const db = client.db(dbName);
  console.log("📘 Base de datos seleccionada:", db.databaseName);

  const collections = await db.listCollections().toArray();
  console.log("📂 Colecciones actuales:", collections.map(c => c.name));
} catch (error) {
  console.error("❌ Error de conexión:", error);
  if (error.reason) console.error("🔍 Razón interna:", error.reason);
} finally {
  await client.close().catch(() => {});
  console.log("🔒 Conexión cerrada");
}
