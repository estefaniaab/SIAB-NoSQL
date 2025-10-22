// datos/biomedicosData.js
export async function insertBiomedicos(db) {
    const biomedicos = [
        {
            Id_Biomedico: "BIO001",
            NIT_Prestador_REF: "800987654", // referencia al hospital o prestador
            Nombre: "Carlos Gómez",
            Telefono: "3104567890",
            Correo: "carlos.gomez@hsanjose.com",
            Cargo: "Ingeniero Biomédico"
        },
        {
            Id_Biomedico: "BIO002",
            NIT_Prestador_REF: "801123321", // referencia al otro prestador
            Nombre: "María Fernández",
            Telefono: "3112233445",
            Correo: "maria.fernandez@laesperanza.com",
            Cargo: "Técnico de Mantenimiento"
        }
    ];

    await db.collection("biomedicos").insertMany(biomedicos);
    console.log("✅ Datos insertados en 'biomedicos'");
}
