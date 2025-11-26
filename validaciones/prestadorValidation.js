// validaciones/prestadorValidation.js
export async function applyPrestadorValidation(db) {
  await db.command({
    collMod: "prestador",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Nit_Prestador", "Nombre_Prestador", "Telefono_Prestador", "Experiencia_Prestador", "Representante_Legal_pm"],
        properties: {
          Nit_Prestador: { 
            bsonType: "string",
            description: "Debe ser el NIT del prestador (string)." 
          },
          Nombre_Prestador: { 
            bsonType: "string",
            description: "Debe ser el nombre completo del prestador."
          },
          Telefono_Prestador: { 
            bsonType: "string",
            description: "Debe ser el número de teléfono (string para formato flexible)."
          },
          Experiencia_Prestador: { 
            bsonType: "string",
            description: "Años de experiencia o métrica (considerar 'int' si siempre es un número)."
          },
          // 🛑 CORRECCIÓN: Ahora es un ARRAY de objetos para múltiples representantes
          Representante_Legal_pm: {
            bsonType: "array",
            description: "Debe ser un array de objetos con la información del Representante Legal.",
            items: {
              bsonType: "object",
              required: ["Id_Representante_Legal", "Nombre", "Telefono", "Correo"],
              properties: {
                Id_Representante_Legal: { bsonType: "string" },
                Nombre: { bsonType: "string" },
                Telefono: { bsonType: "string" },
                Correo: { 
                  bsonType: "string", 
                  pattern: "^.+@.+$",
                  description: "Debe ser un correo electrónico válido."
                }
              }
            }
          },
          Contratos: {
            bsonType: "array",
            description: "Debe ser un array de objetos de Contratos.",
            items: {
              bsonType: "object",
              required: ["Id_Contrato", "Nit_Hospital", "Fecha"],
              properties: {
                Id_Contrato: { bsonType: "string" },
                Nit_Hospital: { bsonType: "string" },
                Fecha: { 
                  bsonType: "date",
                  description: "Debe ser un objeto de fecha BSON."
                }
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