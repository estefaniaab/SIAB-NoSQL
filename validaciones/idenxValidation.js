// validaciones/indexValidaciones.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

import { applyPrestadorValidation } from "./prestadorValidation.js";
import { applyHospitalValidation } from "./hospitalValidation.js";
import { applyBiomedicosValidation } from "./biomedicosValidation.js";
import { applyEmpleadosValidation } from "./empleadosValidation.js";
import { applySedeValidation } from "./sedeValidation.js";
import { applyOrdenValidation } from "./ordenValidation.js";
import { applyEquipoValidation } from "./equipoValidation.js";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function runAllValidations() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    console.log("✅ Conectado a la base de datos para aplicar validaciones");

    await applyPrestadorValidation(db);
    await applyHospitalValidation(db);
    await applyBiomedicosValidation(db);
    await applyEmpleadosValidation(db);
    await applySedeValidation(db);
    await applyOrdenValidation(db);
    await applyEquipoValidation(db);

    console.log("🎯 Todas las validaciones fueron aplicadas correctamente");
  } catch (err) {
    console.error("❌ Error aplicando validaciones:", err);
  } finally {
    await client.close();
    console.log("🔒 Conexión cerrada");
  }
}

runAllValidations();
