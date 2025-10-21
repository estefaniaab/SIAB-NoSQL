// datos/prestadorData.js
export async function insertPrestadores(db) {
  const prestadores = [
    {
      Nit_Prestador: "900123456",
      Nombre_Prestador: "Servicios Biomedicos Andina S.A.S.",
      Telefono_Prestador: "3205678901",
      Experiencia_Prestador: "15 años de experiencia en mantenimiento hospitalario",
      Representante_Legal_pm:[
        {Id_Representante_Legal: "RL001",Nombre: "Carlos Martínez",Telefono: "3102345678",Correo: "carlos.martinez@andina.com"}
      ],
      Contratos: [
        { Id_Contrato: "C001", Nit_Hospital: "800987654", Fecha: new Date("2024-01-10") },
        { Id_Contrato: "C002", Nit_Hospital: "801123321", Fecha: new Date("2025-03-22") }
      ]
    }
  ];

  await db.collection("prestador").insertMany(prestadores);
  console.log("✅ Datos insertados en 'prestador'");
}
