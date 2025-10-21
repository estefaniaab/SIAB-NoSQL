// validaciones/equipoValidation.js
export async function applyEquipoValidation(db) {
  await db.command({
    collMod: "equipo",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "Id_Equipo",
          "Nombre",
          "Marca",
          "Modelo",
          "Ubicacion",
          "Nit_Hospital_REF",
          "Accesorios",
          "Mantenimiento_preventivo",
          "Mantenimiento_correctivo"
        ],
        properties: {
          Id_Equipo: {
            bsonType: "string",
            description: "Identificador único del equipo"
          },
          Nombre: {
            bsonType: "string",
            description: "Nombre del equipo biomédico"
          },
          Marca: {
            bsonType: "string",
            description: "Marca comercial del equipo"
          },
          Modelo: {
            bsonType: "string",
            description: "Modelo o referencia del equipo"
          },
          Ubicacion: {
            bsonType: "string",
            description: "Ubicación física del equipo dentro del hospital"
          },
          Nit_Hospital_REF: {
            bsonType: "string",
            description: "Referencia al hospital propietario del equipo"
          },

          // ----- ACCESORIOS -----
          Accesorios: {
            bsonType: "array",
            description: "Listado de accesorios asociados al equipo",
            items: {
              bsonType: "object",
              required: ["Id_Accesorio", "Nombre", "Estado"],
              properties: {
                Id_Accesorio: {
                  bsonType: "string",
                  description: "Identificador único del accesorio"
                },
                Nombre: {
                  bsonType: "string",
                  description: "Nombre o tipo de accesorio"
                },
                Estado: {
                  bsonType: "string",
                  enum: ["Operativo", "Dañado", "En mantenimiento"],
                  description: "Estado actual del accesorio"
                }
              }
            }
          },

          // ----- MANTENIMIENTO PREVENTIVO -----
          Mantenimiento_preventivo: {
            bsonType: "array",
            description: "Historial de mantenimientos preventivos realizados al equipo",
            items: {
              bsonType: "object",
              required: ["Id_Mantenimiento", "Descripcion", "Fecha", "Responsable"],
              properties: {
                Id_Mantenimiento: {
                  bsonType: "string",
                  description: "Identificador del mantenimiento preventivo"
                },
                Descripcion: {
                  bsonType: "string",
                  description: "Descripción breve del mantenimiento"
                },
                Fecha: {
                  bsonType: "date",
                  description: "Fecha en que se realizó el mantenimiento"
                },
                Responsable: {
                  bsonType: "string",
                  description: "Nombre o identificación del técnico responsable"
                },
                Costo: {
                  bsonType: ["double", "int"],
                  description: "Costo asociado al mantenimiento (opcional)"
                }
              }
            }
          },

          // ----- MANTENIMIENTO CORRECTIVO -----
          Mantenimiento_correctivo: {
            bsonType: "array",
            description: "Historial de mantenimientos correctivos del equipo",
            items: {
              bsonType: "object",
              required: ["Id_Mantenimiento", "Descripcion", "Fecha", "Responsable"],
              properties: {
                Id_Mantenimiento: {
                  bsonType: "string",
                  description: "Identificador del mantenimiento correctivo"
                },
                Descripcion: {
                  bsonType: "string",
                  description: "Descripción del problema y reparación realizada"
                },
                Fecha: {
                  bsonType: "date",
                  description: "Fecha en que se realizó la reparación"
                },
                Responsable: {
                  bsonType: "string",
                  description: "Nombre o identificación del técnico responsable"
                },
                Costo: {
                  bsonType: ["double", "int"],
                  description: "Costo de la reparación (opcional)"
                }
              }
            }
          }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'equipo'");
}
