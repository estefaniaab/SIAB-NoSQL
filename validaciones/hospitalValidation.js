// validaciones/hospitalValidation.js
export async function applyHospitalValidation(db) {
  await db.command({
    collMod: "hospital",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Nit_Hospital", "Nombre_Hospital", "Representante_Legal_Hospital"],
        properties: {
          Nit_Hospital: { 
            bsonType: "string",
            description: "Debe ser el NIT del hospital."
          },
          // Definido como array de objetos para permitir múltiples representantes
          Representante_Legal_Hospital: {
            bsonType: "array",
            description: "Debe ser un array de objetos con la información del Representante Legal del Hospital.",
            items: {
              bsonType: "object",
              required: ["Id_Representante_Legal", "Nombre", "Telefono", "Correo"],
              properties: {
                Id_Representante_Legal: { bsonType: "string" },
                Nombre: { bsonType: "string" },
                Telefono: { bsonType: "string" }
              }
            }
          }
          // Nota: Direccion_Hospital y Telefono_Hospital se incluyen en los datos, 
          // pero si el diagrama los omite del documento principal (y los pone en Sede),
          // solo se incluyen los del diagrama. Si deseas incluirlos:
          /*
          Telefono_Hospital: { bsonType: "string" },
          Direccion_Hospital: { bsonType: "string" },
          */
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'hospital'");
}