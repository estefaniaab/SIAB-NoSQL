// datos/prestadorData.js
export async function insertPrestadores(db) {
  const prestadores = [
    {
      Nit_Prestador: "900111222",
      Nombre_Prestador: "Servicios Biomédicos Alpha",
      Telefono_Prestador: "6011234567",
      Experiencia_Prestador: "15 años", // Coincide con bsonType: "string" en la validación
      
      // Debe ser un ARRAY: Representantes Legales
      Representante_Legal_pm: [
        {
          Id_Representante_Legal: "RLP001",
          Nombre: "Carlos Rueda",
          Telefono: "3201112233",
          Correo: "carlos.rueda@sbalpha.com"
        }
      ],
      
      // Debe ser un ARRAY: Contratos con Hospitales
      Contratos: [
        {
          Id_Contrato: "CON001",
          Nit_Hospital: "800987654", // Referencia a Hospital San José
          Fecha: new Date("2023-01-15T00:00:00Z")
        },
        {
          Id_Contrato: "CON002",
          Nit_Hospital: "801123321", // Referencia a Clínica La Esperanza
          Fecha: new Date("2024-05-20T00:00:00Z")
        }
      ]
    },
    {
      Nit_Prestador: "900333444",
      Nombre_Prestador: "TecnoMed Solutions",
      Telefono_Prestador: "6019876543",
      Experiencia_Prestador: "5 años",
      
      // Ejemplo con dos Representantes Legales
      Representante_Legal_pm: [
        {
          Id_Representante_Legal: "RLP002",
          Nombre: "Diana Ospina",
          Telefono: "3154445566",
          Correo: "diana.ospina@tecnomed.com"
        },
        {
          Id_Representante_Legal: "RLP003",
          Nombre: "Felipe Soto",
          Telefono: "3187778899",
          Correo: "felipe.soto@tecnomed.com"
        }
      ],
      
      Contratos: [
        {
          Id_Contrato: "CON003",
          Nit_Hospital: "800987654",
          Fecha: new Date("2024-10-01T00:00:00Z")
        }
      ]
    }
  ];

  await db.collection("prestador").insertMany(prestadores);
  console.log("✅ Datos insertados en 'prestador'");
}