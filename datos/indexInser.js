import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";

import { insertPrestadores } from "./prestadorData.js";
import { insertHospitales } from "./hospitalData.js";
import { insertEquipos } from "./equiposData.js";

// 🧠 Configurar dotenv con ruta absoluta al .env (funciona desde cualquier carpeta)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = new MongoClient(process.env.MONGO_URI);

async function insertAllData() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    console.log("✅ Conectado a la base de datos para insertar datos");

    //await insertPrestadores(db);
    //await insertHospitales(db);

    await insertEquipos(db);

    console.log("🎯 Todos los datos iniciales fueron insertados correctamente");
  } catch (err) {
    console.error("❌ Error al insertar datos:", err);
  } finally {
    await client.close();
    console.log("🔒 Conexión cerrada");
  }
}

insertAllData();
