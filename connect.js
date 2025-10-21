// connect.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

async function main() {
  const client = new MongoClient(uri);

  try {
    // Conectarse al cluster
    await client.connect();
    console.log("✅ Conexión exitosa a MongoDB Atlas");

    // Seleccionar base de datos
    const db = client.db(dbName);
    console.log(`📘 Base de datos seleccionada: ${db.databaseName}`);

    // Probar lectura simple (listar colecciones)
    const collections = await db.listCollections().toArray();
    console.log("📂 Colecciones actuales:", collections.map(c => c.name));

  } catch (error) {
    console.error("❌ Error de conexión:", error);
  } finally {
    // Cierra la conexión
    await client.close();
    console.log("🔒 Conexión cerrada");
  }
}

main().catch(console.error);
