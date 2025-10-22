// datos/empleadosData.js
export async function insertEmpleados(db) {
    const empleados = [
        {
            Id_Empleado: "EMP001",
            Nit_Hospital_REF: "800987654", // referencia al Hospital San José
            Nombre: "Laura Martínez",
            Correo: "laura.martinez@hsanjose.com",
            Telefono: "3109876543",
            Cargo: "Enfermera Jefe"
        },
        {
            Id_Empleado: "EMP002",
            Nit_Hospital_REF: "801123321", // referencia a la Clínica La Esperanza
            Nombre: "Julián Ríos",
            Correo: "julian.rios@laesperanza.com",
            Telefono: "3201122334",
            Cargo: "Administrador de Servicios"
        }
    ];

    await db.collection("empleados").insertMany(empleados);
    console.log("✅ Datos insertados en 'empleados'");
}
