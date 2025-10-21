// validaciones/biomedicosValidation.js
export async function applyBiomedicosValidation(db) {
  await db.command({
    collMod: "biomedicos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Id_Biomedico", "NIT_Prestador_REF", "Nombre", "Telefono", "Correo", "Cargo"],
        properties: {
          Id_Biomedico: { bsonType: "string" },
          NIT_Prestador_REF: { bsonType: "string" },
          Nombre: { bsonType: "string" },
          Telefono: { bsonType: "string" },
          Correo: { bsonType: "string", pattern: "^.+@.+$" },
          Cargo: { bsonType: "string" }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'biomedicos'");
}
