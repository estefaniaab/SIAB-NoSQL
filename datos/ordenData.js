// datos/ordenData.js
export async function insertOrdenes(db) {
    const ordenes = [
        {
            Id_orden: "ORD001",
            Id_empleado_REF: "1018456790", // cédula del empleado
            Id_equipo_REF: "EQP001",
            Id_biomedico_REF: "1002345678", // cédula del biomédico
            Problema_presentado: "El equipo de rayos X no enciende correctamente",
            Fecha: new Date("2025-10-20T09:30:00Z")
        },
        {
            Id_orden: "ORD002",
            Id_empleado_REF: "1023456789", // cédula del empleado
            Id_equipo_REF: "EQP002",
            Id_biomedico_REF: "1011122233", // cédula del biomédico
            Problema_presentado: "La incubadora presenta fallos de temperatura",
            Fecha: new Date("2025-10-21T11:45:00Z")
        }
    ];

    await db.collection("orden").insertMany(ordenes);
    console.log("✅ Datos insertados en 'orden'");
}
