// validaciones/equipoValidation.js (Versión Final sin Embeddings, con flexibilidad)
export async function applyEquipoValidation(db) {
  await db.command({
    collMod: "equipo",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        // Campos OBLIGATORIOS (mínimo necesario para identificar el equipo)
        required: [
          "Id_equipo",
          "Nombre",
          "Marca",
          "Modelo",
          "Serie",
          "Ubicacion",
          "Id_Sede_REF",
          "Id_Servicio_REF"
        ],
        properties: {
          Id_equipo: { bsonType: "string" },
          Nombre: { bsonType: "string" },
          Marca: { bsonType: "string" },
          Modelo: { bsonType: "string" },
          Serie: { bsonType: "string" },
          Ubicacion: { bsonType: "string" },
          
          // --- REFERENCIAS (Campos obligatorios) ---
          Id_Sede_REF: { 
            bsonType: "string",
            description: "Identificador de la Sede (referencia)."
          },
          Id_Servicio_REF: { 
            bsonType: "string",
            description: "Identificador del Servicio (referencia)."
          },
          
          // --- CAMPOS BASE (Opcionales, pero definidos para control de tipo) ---
          Uso_Descripcion: { 
            bsonType: ["string", "null"],
            description: "Texto que describe el uso del equipo."
          },
          Imagen: { 
            bsonType: ["string", "objectId", "null"],
            description: "Referencia a la imagen."
          },
          
          // --- EQUIPOXPRESTADOR (ARRAY incrustado - Opcional) ---
          Equipoxprestador: {
            bsonType: "array",
            description: "Contratos de servicio vigentes o históricos con prestadores.",
            items: {
              bsonType: "object",
              required: ["Nit_prestador_REF", "Fecha_Inicio", "Fecha_Fin"],
              properties: {
                Nit_prestador_REF: { bsonType: "string" },
                Fecha_Inicio: { bsonType: "date" },
                Fecha_Fin: { bsonType: "date" }
              }
            }
          },
          
          // --- ACCESORIOS (ARRAY incrustado - Opcional) ---
          Accesorios: {
            bsonType: "array",
            description: "Listado de accesorios asociados al equipo",
            items: {
              bsonType: "object",
              required: ["Referencia", "Nombre", "Marca", "Costo"],
              properties: {
                Referencia: { bsonType: "string" },
                Nombre: { bsonType: "string" },
                Marca: { bsonType: "string" },
                Costo: { bsonType: ["double", "int"] }
              }
            }
          },

          // --- MANTENIMIENTO PREVENTIVO (ARRAY incrustado - Opcional) ---
          Mantenimiento_preventivo: {
            bsonType: "array",
            description: "Historial de mantenimientos preventivos realizados.",
            items: {
              bsonType: "object",
              required: ["Id_ReporteP", "Id_Biomedico_REF", "Fecha", "Limpieza", "Verificacion", "Aprobado"],
              properties: {
                Id_ReporteP: { bsonType: "string" },
                Id_Biomedico_REF: { bsonType: "string" }, 
                Fecha: { bsonType: "date" },
                Limpieza: { bsonType: "bool" },
                Verificacion: { bsonType: "string" }, 
                "Cambio-partes": { bsonType: "string" }, 
                Aprobado: { bsonType: "bool" },
                Descripcion: { bsonType: "string" }
              }
            }
          },

          // --- MANTENIMIENTO CORRECTIVO (ARRAY incrustado - Opcional) ---
          Mantenimiento_correctivo: {
            bsonType: "array",
            description: "Historial de mantenimientos correctivos realizados.",
            items: {
              bsonType: "object",
              required: ["Id_ReporteC", "Id_Biomedico_REF", "Accion_correctiva", "Falla_presentada"],
              properties: {
                Id_ReporteC: { bsonType: "string" },
                Id_Biomedico_REF: { bsonType: "string" }, 
                Accion_correctiva: { bsonType: "string" },
                Falla_presentada: { bsonType: "string" },
                Repuestos: {
                  bsonType: "string"
                }
              }
            }
          }
        }
      }
    },
    // El nivel "moderate" permite actualizar documentos que ya existen (sin embeddings)
    // para añadirles los campos de embedding posteriormente sin fallar la validación.
    validationLevel: "moderate" 
  });

  console.log("✅ Validación 'equipo' aplicada en modo moderate, lista para anexar embeddings.");
}