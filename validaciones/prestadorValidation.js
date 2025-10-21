// validaciones/prestadorValidation.js
export async function applyPrestadorValidation(db) {
  await db.command({
    collMod: "prestador",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Nit_Prestador", "Nombre_Prestador", "Telefono_Prestador", "Experiencia_Prestador"],
        properties: {
          Nit_Prestador: { bsonType: "string" },
          Nombre_Prestador: { bsonType: "string" },
          Telefono_Prestador: { bsonType: "string" },
          Experiencia_Prestador: { bsonType: "string" },
          Representante_Legal_pm: {
            bsonType: "array",
            required: ["Id_Representante_Legal", "Nombre", "Telefono", "Correo"],
            properties: {
              Id_Representante_Legal: { bsonType: "string" },
              Nombre: { bsonType: "string" },
              Telefono: { bsonType: "string" },
              Correo: { bsonType: "string", pattern: "^.+@.+$" }
            }
          },
          Contratos: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["Id_Contrato", "Nit_Hospital", "Fecha"],
              properties: {
                Id_Contrato: { bsonType: "string" },
                Nit_Hospital: { bsonType: "string" },
                Fecha: { bsonType: "date" }
              }
            }
          }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'prestador'");
}
