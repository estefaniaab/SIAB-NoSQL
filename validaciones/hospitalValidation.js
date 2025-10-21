// validaciones/hospitalValidation.js
export async function applyHospitalValidation(db) {
  await db.command({
    collMod: "hospital",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Nit_Hospital", "Nombre_Hospital", "Telefono_Hospital", "Direccion_Hospital", "Representante_Legal_Hospital"],
        properties: {
          Nit_Hospital: { bsonType: "string" },
          Nombre_Hospital: { bsonType: "string" },
          Telefono_Hospital: { bsonType: "string" },
          Direccion_Hospital: { bsonType: "string" },
          Representante_Legal_Hospital: {
            bsonType:"array",
            required: ["Id_Representante_Legal", "Nombre", "Telefono", "Correo"],
            properties: {
              Id_Representante_Legal: { bsonType: "string" },
              Nombre: { bsonType: "string" },
              Telefono: { bsonType: "string" },
              Correo: { bsonType: "string", pattern: "^.+@.+$", description: "Debe ser un correo válido" }
            }
          }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'hospital'");
}
