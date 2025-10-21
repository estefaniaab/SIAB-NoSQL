// validaciones/sedeValidation.js
export async function applySedeValidation(db) {
  await db.command({
    collMod: "sede",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Id_Sede", "Nit_Hospital_REF", "Direccion", "Ciudad", "Telefono", "Servicios"],
        properties: {
          Id_Sede: { bsonType: "string" },
          Nit_Hospital_REF: { bsonType: "string" },
          Direccion: { bsonType: "string" },
          Ciudad: { bsonType: "string" },
          Telefono: { bsonType: "string" },
          Servicios: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["Id_Servicio", "Nombre", "Descripcion"],
              properties: {
                Id_Servicio: { bsonType: "string" },
                Nombre: { bsonType: "string" },
                Descripcion: { bsonType: "string" }
              }
            }
          }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'sede'");
}
