export async function applyHospitalValidation2(db) {
    await db.command({
      collMod: "hospital",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["Nit_Hospital", "Nombre_Hospital", "Representante_Legal"],
            properties: {
                Nit_Hospital: { 
                    bsonType: "string",
                },
                Nombre_Hospital: {
                    bsonType: "string",
                },
                Representante_Legal: {
                    bsonType: "array",
                    items: { 
                        bsonType: "object",
                        required: ["Id_Representante_Legal", "Nombre", "Telefono", "Correo"],
                        properties: {
                            Id_Representante_Legal: { 
                                bsonType: "string" 
                            },
                            Nombre: { 
                                bsonType: "string" 
                            },
                            Telefono: { 
                                bsonType: "string" 
                            },
                            Correo: { 
                                bsonType: "string", 
                                pattern: "^.+@.+$"
                            }
                        }
                    }
                }
            }
        }
      },
      validationLevel: "strict"
    });
}

