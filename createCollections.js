import { connectDB } from "./db.js";

async function createCollections() {
  const db = await connectDB();

  await db.createCollection("prestador");
  console.log("✅ Colección 'prestadores' creada correctamente");

  await db.createCollection("hospital");
  console.log("✅ Colección 'hospital' creada correctamente");

  await db.createCollection("biomedicos");
  console.log("✅ Colección 'biomedicos' creada correctamente");

  await db.createCollection("empleados");
  console.log("✅ Colección 'empleados' creada correctamente");

  await db.createCollection("sede");
  console.log("✅ Colección 'sede' creada correctamente");

  await db.createCollection("orden");
  console.log("✅ Colección 'orden' creada correctamente");

  await db.createCollection("equipo");
  console.log("✅ Colección 'equipo' creada correctamente");

  process.exit();
}

createCollections().catch(console.error);
