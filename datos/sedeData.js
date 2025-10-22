// datos/sedeData.js
export async function insertSedes(db) {
    const sedes = [
        {
            Id_Sede: "SED001",
            Nit_Hospital_REF: "800987654",
            Direccion: "Calle 45 #12-30, Manizales",
            Ciudad: "Manizales",
            Telefono: "6068751200",
            Servicios: [
                {
                    Id_Servicio: "SRV001",
                    Nombre: "Radiología",
                    Descripcion: "Servicios de diagnóstico por imágenes, incluyendo rayos X y ecografía"
                },
                {
                    Id_Servicio: "SRV002",
                    Nombre: "Urgencias",
                    Descripcion: "Atención médica inmediata las 24 horas"
                }
            ]
        },
        {
            Id_Sede: "SED002",
            Nit_Hospital_REF: "801123321",
            Direccion: "Av. Santander #8-60, Pereira",
            Ciudad: "Pereira",
            Telefono: "6068889900",
            Servicios: [
                {
                    Id_Servicio: "SRV003",
                    Nombre: "Pediatría",
                    Descripcion: "Atención médica especializada para niños y adolescentes"
                },
                {
                    Id_Servicio: "SRV004",
                    Nombre: "Laboratorio Clínico",
                    Descripcion: "Análisis de muestras biológicas para diagnóstico"
                }
            ]
        }
    ];

    await db.collection("sede").insertMany(sedes);
    console.log("✅ Datos insertados en 'sede'");
}
