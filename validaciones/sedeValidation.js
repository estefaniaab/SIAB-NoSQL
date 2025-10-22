// validaciones/sedeValidation.js
export async function applySedeValidation(db) {
  await db.command({
    collMod: "sede",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Id_Sede", "Nit_Hospital_REF", "Direccion", "Ciudad", "Telefono", "Servicios"],
        properties: {
          Id_Sede: {
            bsonType: "string",
            description: "Identificador único de la sede"
          },
          Nit_Hospital_REF: {
            bsonType: "string",
            description: "Referencia al hospital asociado"
          },
          Direccion: {
            bsonType: "string",
            description: "Dirección física de la sede"
          },
          Ciudad: {
            bsonType: "string",
            description: "Ciudad donde se ubica la sede"
          },
          Telefono: {
            bsonType: "string",
            description: "Número de contacto de la sede"
          },
          Servicios: {
            bsonType: "array",
            description: "Lista de servicios ofrecidos en la sede",
            items: {
              bsonType: "object",
              required: ["Id_Servicio", "Nombre", "Descripcion"],
              properties: {
                Id_Servicio: {
                  bsonType: "string",
                  description: "Identificador único del servicio"
                },
                Nombre: {
                  bsonType: "string",
                  description: "Nombre del servicio"
                },
                Descripcion: {
                  bsonType: "string",
                  description: "Descripción del servicio"
                }
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
