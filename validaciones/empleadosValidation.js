// validaciones/empleadosValidation.js
export async function applyEmpleadosValidation(db) {
  await db.command({
    collMod: "empleados",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Id_Empleado", "Nit_Hospital_REF", "Nombre", "Correo", "Telefono", "Cargo"],
        properties: {
          Id_Empleado: { bsonType: "string" },
          Nit_Hospital_REF: { bsonType: "string" },
          Nombre: { bsonType: "string" },
          Correo: { bsonType: "string", pattern: "^.+@.+$", description: "Debe ser un correo válido" },
          Telefono: { bsonType: "string" },
          Cargo: { bsonType: "string" }
        }
      }
    },
    validationLevel: "strict"
  });

  console.log("✅ Validación aplicada a 'empleados'");
}
