// validaciones/ordenValidation.js
export async function applyOrdenValidation(db) {
  await db.command({
    collMod: "orden",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Id_Orden", "Id_Empleado_REF", "Id_Equipo_REF", "Id_Biomedico_REF", "Problema_presentado", "Fecha"],
        properties: {
          Id_Orden: { bsonType: "string" },
          Id_Empleado_REF: { bsonType: "string" },
          Id_Equipo_REF: { bsonType: "string" },
          Id_Biomedico_REF: { bsonType: "string" },
          Problema_presentado: { bsonType: "string" },
          Fecha: { bsonType: "date" }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'orden'");
}
