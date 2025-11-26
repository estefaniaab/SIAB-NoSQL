// createIndexes.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function createIndexes() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    console.log("⚙️ Creando índices para todas las colecciones...\n");

    /* ============================================================
       🧱 1️⃣ ÍNDICES ÚNICOS (Identificadores, NITs, Claves Primarias)
       ============================================================ */
    await db.collection("prestador").createIndex({ Nit_Prestador: 1 }, { unique: true });
    await db.collection("hospital").createIndex({ Nit_Hospital: 1 }, { unique: true });
    await db.collection("biomedicos").createIndex({ Id_Biomedico: 1 }, { unique: true });
    await db.collection("empleados").createIndex({ Id_Empleado: 1 }, { unique: true });
    await db.collection("sede").createIndex({ Id_Sede: 1 }, { unique: true });
    await db.collection("equipo").createIndex({ Id_Equipo: 1 }, { unique: true });
    await db.collection("orden").createIndex({ Id_Orden: 1 }, { unique: true });

    console.log("✅ Índices ÚNICOS creados correctamente\n");

    /* ============================================================
       🔍 2️⃣ ÍNDICES DE BÚSQUEDA (campos consultados frecuentemente)
       ============================================================ */
    await db.collection("prestador").createIndex({ Nombre_Prestador: 1 });
    await db.collection("hospital").createIndex({ Ciudad: 1 });
    await db.collection("biomedicos").createIndex({ Nombre_Biomedico: 1 });
    await db.collection("empleados").createIndex({ Cargo: 1 });
    await db.collection("equipo").createIndex({ Tipo_Equipo: 1 });
    await db.collection("equipo").createIndex({ Estado_Equipo: 1 });
    await db.collection("orden").createIndex({ Fecha: -1 });

    console.log("✅ Índices de BÚSQUEDA creados correctamente\n");

    /* ============================================================
       🔗 3️⃣ ÍNDICES DE RELACIONES (referencias entre colecciones)
       ============================================================ */
    await db.collection("prestador").createIndex({ "Contratos.Nit_Hospital": 1 });
    await db.collection("sede").createIndex({ Nit_Hospital: 1 });
    await db.collection("biomedicos").createIndex({ Id_Sede: 1 });
    await db.collection("empleados").createIndex({ Id_Hospital: 1 });
    await db.collection("equipo").createIndex({ Id_Sede: 1 });
    await db.collection("orden").createIndex({ Id_Equipo: 1 });
    await db.collection("orden").createIndex({ Id_Biomedico: 1 });
    await db.collection("orden").createIndex({ Id_Prestador: 1 });

    console.log("✅ Índices de RELACIONES creados correctamente\n");

    /* ============================================================
       ⚙️ 4️⃣ ÍNDICES COMPUESTOS (consultas combinadas)
       ============================================================ */
    await db.collection("equipo").createIndex({ Id_Sede: 1, Estado_Equipo: 1 });

    console.log("✅ Índices COMPUESTOS creados correctamente\n");

    /* ============================================================
       📝 5️⃣ ÍNDICES DE TEXTO (búsqueda textual flexible)
       ============================================================ */
    await db.collection("hospital").createIndex({ Nombre_Hospital: "text" });
    await db.collection("equipo").createIndex({ Descripcion: "text" });

    console.log("✅ Índices de TEXTO creados correctamente\n");

    /* ============================================================
       🧠 6️⃣ ÍNDICES VECTORIALES (búsqueda semántica IA)
       ============================================================
       ⚠️ Estos índices se crean desde MongoDB Atlas (no por código).

       ➤ Instrucciones:
       1. Ve a tu Cluster → pestaña "Atlas Search"
       2. Clic en "Create Search Index"
       3. Selecciona:
          - Database: tu DB (ej: test)
          - Collection: equipo
          - Definition Mode: JSON Editor
       4. Pega la definición siguiente:

       {
         "fields": [
           {
             "type": "vector",
             "path": "vector_texto",
             "numDimensions": 1536,
             "similarity": "cosine"
           },
           {
             "type": "vector",
             "path": "vector_imagen",
             "numDimensions": 1024,
             "similarity": "cosine"
           }
         ]
       }

       📌 Usa el nombre del índice "vector_equipo"
       📌 Estos permiten buscar equipos por similitud de texto o imagen.
       ============================================================ */

    console.log("✅ Recuerda crear los índices VECTORIALES manualmente en Atlas.\n");

    console.log("🎯 Todos los índices tradicionales fueron creados con éxito.");
  } catch (err) {
    console.error("❌ Error creando índices:", err);
  } finally {
    await client.close();
    console.log("🔒 Conexión cerrada");
  }
}

createIndexes();
