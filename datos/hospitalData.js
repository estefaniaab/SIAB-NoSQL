// datos/hospitalData.js
export async function insertHospitales(db) {
  const hospitales = [
    {
      Nit_Hospital: "800987654",
      Nombre_Hospital: "Hospital San José",
      Telefono_Hospital: "6068754321",
      Direccion_Hospital: "Cra 12 #45-32, Manizales",
      Representante_Legal_Hospital: {
        Id_Representante_Legal: "RLH001",
        Nombre: "Ana Torres",
        Telefono: "3102223344",
        Correo: "ana.torres@hsanjose.com"
      }
    },
    {
      Nit_Hospital: "801123321",
      Nombre_Hospital: "Clínica La Esperanza",
      Telefono_Hospital: "6068889900",
      Direccion_Hospital: "Av. Santander #10-50, Manizales",
      Representante_Legal_Hospital: [{
        Id_Representante_Legal: "RLH002",
        Nombre: "Luis Pineda",
        Telefono: "3115557788",
        Correo: "luis.pineda@laesperanza.com"
      }]
    }
  ];

  await db.collection("hospital").insertMany(hospitales);
  console.log("✅ Datos insertados en 'hospital'");
}
