// datos/equipoData.js
// Archivo de carga inicial de 42 equipos con Nombres simplificados, series/IDs únicos,
// y campos opcionales (mantenimiento, accesorios, prestador) añadidos a varios documentos.
// Se reemplazaron las máquinas de diálisis por Otoscopio y Oftalmoscopio.

export async function insertEquipos(db) {
    const equipos = [
        // --- 7 Monitores de signos vitales ---
        {
            Id_equipo: "EQP001",
            Nombre: "Monitor de signos vitales",
            Marca: "Philips",
            Modelo: "IntelliVue X3",
            Serie: "SZX3001",
            Ubicacion: "UCI - Cama 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Monitor de transporte y cabecera de alto rendimiento, ideal para UCI y quirófano. Soporta ECG, SpO2, NIBP, y CO2.",
            Equipoxprestador: [
                {
                    Nit_prestador_REF: "NIT001", 
                    Fecha_Inicio: new Date("2024-01-15T00:00:00Z"),
                    Fecha_Fin: new Date("2026-01-15T00:00:00Z")
                }
            ]
        },
        {
            Id_equipo: "EQP002",
            Nombre: "Monitor de signos vitales",
            Marca: "Mindray",
            Modelo: "BeneVision N12",
            Serie: "MN12002",
            Ubicacion: "Urgencias - Box 3",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Monitor modular de 12 pulgadas con interfaz de usuario intuitiva. Excelente para emergencias y recuperación.",
        },
        {
            Id_equipo: "EQP003",
            Nombre: "Monitor de signos vitales",
            Marca: "EDAN",
            Modelo: "F9 (Fetal)",
            Serie: "EF9003",
            Ubicacion: "Ginecología - Sala Partos 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_GIN",
            Uso_Descripcion: "Monitor fetal gemelar de alta sensibilidad. Rastrea FHR, Toco, y movimientos fetales. Específico para obstetricia.",
            Mantenimiento_preventivo: [
                {
                    Id_ReporteP: "P2025001",
                    Id_Biomedico_REF: "BIO001",
                    Fecha: new Date("2025-01-20T00:00:00Z"),
                    Limpieza: true,
                    Verificacion: "Calibración de ultrasonido OK.",
                    "Cambio-partes": "Papel térmico y transductores inspeccionados.",
                    Aprobado: true,
                    Descripcion: "Revisión trimestral de cabezales."
                }
            ]
        },
        {
            Id_equipo: "EQP004",
            Nombre: "Monitor de signos vitales",
            Marca: "GE Healthcare",
            Modelo: "Carescape B650",
            Serie: "GBC65004",
            Ubicacion: "UCI - Cama 4",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Solución de monitorización avanzada con módulos para monitoreo invasivo y análisis de gases en cuidados críticos.",
        },
        {
            Id_equipo: "EQP005",
            Nombre: "Monitor de signos vitales",
            Marca: "Zoll",
            Modelo: "X Series",
            Serie: "ZXXS005",
            Ubicacion: "Ambulancia 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Diseñado para entornos prehospitalarios y transporte. Resistente a golpes y condiciones extremas.",
            Accesorios: [
                {
                    Referencia: "ACX-01",
                    Nombre: "Batería de larga duración",
                    Marca: "Zoll",
                    Costo: 550.75
                },
                {
                    Referencia: "ACX-02",
                    Nombre: "Módulo EtCO2",
                    Marca: "Zoll",
                    Costo: 1200.00
                }
            ]
        },
        { 
            Id_equipo: "EQP032", 
            Nombre: "Monitor de signos vitales", 
            Marca: "Philips", 
            Modelo: "IntelliVue X3", 
            Serie: "SZX3032", 
            Ubicacion: "UCI - Cama 2", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_UCI", 
            Uso_Descripcion: "Monitor gemelo del EQP001. Rutina de check-up rápida. Ideal para la monitorización continua." 
        },
        { 
            Id_equipo: "EQP033", 
            Nombre: "Monitor de signos vitales", 
            Marca: "Mindray", 
            Modelo: "BeneVision N12", 
            Serie: "MN12033", 
            Ubicacion: "Urgencias - Box 4", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_EME", 
            Uso_Descripcion: "Usado frecuentemente para pacientes con aislamiento. Requiere limpieza especial y desinfección rigurosa.",
            Mantenimiento_correctivo: [
                {
                    Id_ReporteC: "C2025001",
                    Id_Biomedico_REF: "BIO002",
                    Accion_correctiva: "Reemplazo de la pantalla táctil debido a fallo de píxeles.",
                    Falla_presentada: "Fallo intermitente en el módulo NIBP.",
                    Repuestos: "Pantalla táctil de 12 pulgadas (P/N 550012)."
                }
            ]
        },

        // --- 7 Ventiladores mecánicos ---
        {
            Id_equipo: "EQP006",
            Nombre: "Ventilador mecánico",
            Marca: "Hamilton Medical",
            Modelo: "C6",
            Serie: "HC6006",
            Ubicacion: "UCI - Cama 6",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Ventilador de cuidados intensivos, neonatal, pediátrico y adulto. Con modos de ventilación adaptativos (ASV).",
            Mantenimiento_preventivo: [
                {
                    Id_ReporteP: "P2025002",
                    Id_Biomedico_REF: "BIO001",
                    Fecha: new Date("2025-01-20T00:00:00Z"),
                    Limpieza: true,
                    Verificacion: "Calibración de sensores de flujo y presión OK.",
                    "Cambio-partes": "Filtro de aire reemplazado.",
                    Aprobado: true,
                    Descripcion: "Rutina anual de mantenimiento."
                }
            ]
        },
        {
            Id_equipo: "EQP007",
            Nombre: "Ventilador mecánico",
            Marca: "Dräger",
            Modelo: "Savina 300 Select",
            Serie: "DS30007",
            Ubicacion: "UCI - Cama 7",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Ventilador versátil con turbina integrada, ideal para UCI y ventilación no invasiva (NIV).",
            Equipoxprestador: [
                {
                    Nit_prestador_REF: "NIT002", 
                    Fecha_Inicio: new Date("2023-08-01T00:00:00Z"),
                    Fecha_Fin: new Date("2025-08-01T00:00:00Z")
                }
            ]
        },
        {
            Id_equipo: "EQP008",
            Nombre: "Ventilador mecánico",
            Marca: "Vyaire Medical",
            Modelo: "LTV 1200 (Transporte)",
            Serie: "VLTV008",
            Ubicacion: "Almacén - Transporte",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Ventilador ligero y robusto para transporte interhospitalario y atención domiciliaria.",
        },
        {
            Id_equipo: "EQP009",
            Nombre: "Ventilador mecánico",
            Marca: "Maquet",
            Modelo: "Servo-i Universal",
            Serie: "MSEQ009",
            Ubicacion: "UCI - Cama 9",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Ventilador avanzado con capacidad de ventilación de alta frecuencia y monitoreo pulmonar.",
            Mantenimiento_correctivo: [
                {
                    Id_ReporteC: "C2025002",
                    Id_Biomedico_REF: "BIO003",
                    Accion_correctiva: "Reparación de la válvula espiratoria y ajuste de la presión PEEP.",
                    Falla_presentada: "Pérdida de presión en el circuito espiratorio.",
                    Repuestos: "Kit de diafragma de válvula espiratoria (P/N 12345)."
                }
            ]
        },
        {
            Id_equipo: "EQP010",
            Nombre: "Ventilador mecánico",
            Marca: "CareFusion",
            Modelo: "Avea (Neonatal)",
            Serie: "CAVEA010",
            Ubicacion: "UCIN",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Especializado en ventilación de pacientes neonatales y pediátricos. Ofrece precisión en volúmenes pequeños.",
        },
        { 
            Id_equipo: "EQP034", 
            Nombre: "Ventilador mecánico", 
            Marca: "Hamilton Medical", 
            Modelo: "C6", 
            Serie: "HC6034", 
            Ubicacion: "UCI - Cama 3", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_UCI", 
            Uso_Descripcion: "Ventilador con modo P/V Tool. Especial para titulación PEEP y manejo avanzado de la vía aérea." 
        },
        { 
            Id_equipo: "EQP035", 
            Nombre: "Ventilador mecánico", 
            Marca: "Dräger", 
            Modelo: "Savina 300 Select", 
            Serie: "DS30035", 
            Ubicacion: "UCI - Cama 5", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_UCI", 
            Uso_Descripcion: "Utiliza un filtro HMEF de alto rendimiento. Soporta ventilación invasiva y no invasiva." 
        },

        // --- 2 Electrocardiógrafos (ECG) ---
        {
            Id_equipo: "EQP011",
            Nombre: "Electrocardiógrafo",
            Marca: "GE Healthcare",
            Modelo: "MAC 2000",
            Serie: "GMAC011",
            Ubicacion: "Cardiología - Consultorio 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_CAR",
            Uso_Descripcion: "ECG digital de 12 derivaciones con interpretación automática MUSE. Usado para detección rápida de arritmias.",
            Accesorios: [
                {
                    Referencia: "ACX-03",
                    Nombre: "Juego de cables de paciente",
                    Marca: "GE",
                    Costo: 85.50
                }
            ]
        },
        {
            Id_equipo: "EQP012",
            Nombre: "Electrocardiógrafo",
            Marca: "Schiller",
            Modelo: "Cardiovit AT-101",
            Serie: "SAT101012",
            Ubicacion: "Urgencias - Sala de Espera",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Dispositivo portátil con pantalla táctil, ideal para estudios de ECG en consultorios o en campo.",
        },

        // --- 1 Tomógrafo axial computarizado (TAC) ---
        {
            Id_equipo: "EQP013",
            Nombre: "Tomógrafo axial computarizado",
            Marca: "Siemens Healthineers",
            Modelo: "SOMATOM Definition Edge",
            Serie: "SSOM013",
            Ubicacion: "Unidad de Imagenología",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_IMA",
            Uso_Descripcion: "Tomografía computarizada de 128 cortes. Alta resolución y baja dosis de radiación. Clave para diagnóstico oncológico y vascular.",
            Mantenimiento_correctivo: [
                {
                    Id_ReporteC: "C2025003",
                    Id_Biomedico_REF: "BIO004",
                    Accion_correctiva: "Reemplazo de tubo de Rayos X y recalibración de gantry.",
                    Falla_presentada: "Fallo en la generación de imágenes y ruido excesivo.",
                    Repuestos: "Tubo de Rayos X DURA 500 Plus, Cable de alta tensión."
                }
            ],
            Mantenimiento_preventivo: [
                {
                    Id_ReporteP: "P2025003",
                    Id_Biomedico_REF: "BIO004",
                    Fecha: new Date("2025-06-01T00:00:00Z"),
                    Limpieza: true,
                    Verificacion: "Prueba de uniformidad de dosis y limpieza del detector OK.",
                    "Cambio-partes": "Filtros de aire para la unidad de enfriamiento.",
                    Aprobado: true,
                    Descripcion: "Mantenimiento semestral programado."
                }
            ]
        },

        // --- 7 Básculas médicas ---
        { Id_equipo: "EQP014", Nombre: "Báscula médica", Marca: "Seca", Modelo: "655 (De Piso)", Serie: "S655014", Ubicacion: "Nutrición - Box 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NUT", Uso_Descripcion: "Báscula de alta capacidad con cálculo de IMC y conectividad EMR." },
        { Id_equipo: "EQP015", Nombre: "Báscula médica", Marca: "Health-o-Meter", Modelo: "498KL (De Silla)", Serie: "H498015", Ubicacion: "Geriatría", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIR", Uso_Descripcion: "Diseñada para pesar pacientes con movilidad reducida directamente en silla.", Equipoxprestador: [{ Nit_prestador_REF: "NIT003", Fecha_Inicio: new Date("2024-05-10T00:00:00Z"), Fecha_Fin: new Date("2027-05-10T00:00:00Z") }] },
        { Id_equipo: "EQP016", Nombre: "Báscula médica", Marca: "Ohaus", Modelo: "T31P (Neonatal)", Serie: "OT31P016", Ubicacion: "UCIN", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO", Uso_Descripcion: "Báscula de alta precisión para bebés y neonatos. Mide con incrementos de 1 gramo." },
        { Id_equipo: "EQP017", Nombre: "Báscula médica", Marca: "Charder", Modelo: "MS-5900 (Columna)", Serie: "CM590017", Ubicacion: "Medicina General", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_MGE", Uso_Descripcion: "Báscula de columna con tallímetro integrado. Uso en consultas ambulatorias." },
        { Id_equipo: "EQP018", Nombre: "Báscula médica", Marca: "Seca", Modelo: "984 (De Cama)", Serie: "S984018", Ubicacion: "UCI - Cama 8", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI", Uso_Descripcion: "Permite pesar pacientes directamente en la cama, crucial en UCI para control de fluidos." },
        { Id_equipo: "EQP036", Nombre: "Báscula médica", Marca: "Seca", Modelo: "655 (De Piso)", Serie: "S655036", Ubicacion: "Fisioterapia - Sala 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_FIS", Uso_Descripcion: "Utilizado para control de peso en rehabilitación. Se usa para seguimiento de la masa corporal." },
        { Id_equipo: "EQP037", Nombre: "Báscula médica", Marca: "Health-o-Meter", Modelo: "498KL (De Silla)", Serie: "H498037", Ubicacion: "Geriatría", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIR", Uso_Descripcion: "Báscula de chequeo rápido en geriatría. Ideal para pacientes que no pueden ponerse de pie." },

        // --- 1 Equipo de Rayos X ---
        {
            Id_equipo: "EQP019",
            Nombre: "Equipo de Rayos X",
            Marca: "Siemens Healthineers",
            Modelo: "Mobilett XP Eco (Portátil)",
            Serie: "SMXP019",
            Ubicacion: "Radiología Móvil",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_IMA",
            Uso_Descripcion: "Unidad de Rayos X móvil con generador de alta frecuencia. Utilizado para tomas en quirófanos o camas de UCI.",
            Accesorios: [
                {
                    Referencia: "ACX-04",
                    Nombre: "Chasis 14x17 inalámbrico",
                    Marca: "Carestream",
                    Costo: 7500.00
                }
            ]
        },

        // --- 3 Mesas de cirugía ---
        {
            Id_equipo: "EQP020",
            Nombre: "Mesa de cirugía",
            Marca: "Maquet",
            Modelo: "Alphastar",
            Serie: "MAQ020",
            Ubicacion: "Quirófano 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_QUI",
            Uso_Descripcion: "Mesa de cirugía electrohidráulica con capacidad de inclinación y articulación para diversas especialidades.",
        },
        {
            Id_equipo: "EQP021",
            Nombre: "Mesa de cirugía",
            Marca: "Skytron",
            Modelo: "6500",
            Serie: "SKT021",
            Ubicacion: "Quirófano 2",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_QUI",
            Uso_Descripcion: "Mesa de alta movilidad con superficies radiotransparentes para uso con Rayos X intraoperatorio.",
        },
        { 
            Id_equipo: "EQP038", 
            Nombre: "Mesa de cirugía", 
            Marca: "Maquet", 
            Modelo: "Alphastar", 
            Serie: "MAQ038", 
            Ubicacion: "Quirófano 3", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_QUI", 
            Uso_Descripcion: "Mesa dedicada a neurocirugía, con base especial para arcos en C y alta estabilidad.",
            Equipoxprestador: [
                {
                    Nit_prestador_REF: "NIT004", 
                    Fecha_Inicio: new Date("2024-03-20T00:00:00Z"),
                    Fecha_Fin: new Date("2026-03-20T00:00:00Z")
                }
            ]
        },

        // --- 3 Lámparas cielíticas quirúrgicas ---
        {
            Id_equipo: "EQP022",
            Nombre: "Lámpara cielítica quirúrgica",
            Marca: "Dräger",
            Modelo: "Polaris 600",
            Serie: "DP600022",
            Ubicacion: "Quirófano 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_QUI",
            Uso_Descripcion: "Lámpara cielítica LED con control de temperatura de color y alta intensidad lumínica para procedimientos quirúrgicos.",
        },
        {
            Id_equipo: "EQP023",
            Nombre: "Lámpara cielítica quirúrgica",
            Marca: "Welch Allyn",
            Modelo: "Green Series 7 (Examen)",
            Serie: "WAGS023",
            Ubicacion: "Urgencias - Box 1",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Lámpara de examen con brazo flexible y fuente de luz LED eficiente. Bajo consumo energético, para procedimientos menores.",
        },
        { 
            Id_equipo: "EQP039", 
            Nombre: "Lámpara cielítica quirúrgica", 
            Marca: "Dräger", 
            Modelo: "Polaris 600", 
            Serie: "DP600039", 
            Ubicacion: "Quirófano 2", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_QUI", 
            Uso_Descripcion: "Lámpara de quirófano con enfoque automático y ajuste de sombra. Proporciona iluminación sin deslumbramiento." 
        },

        // --- 3 Equipos de órganos (Otoscopio, Oftalmoscopio, Extracorpórea) ---
        {
            Id_equipo: "EQP024",
            Nombre: "Otoscopio", // Otoscopio en lugar de terapia extracorpórea
            Marca: "Welch Allyn",
            Modelo: "MacroView Plus",
            Serie: "WAMVP024",
            Ubicacion: "Medicina General - Box 5",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_MGE",
            Uso_Descripcion: "Instrumento para el examen detallado del conducto auditivo y el tímpano. Con capacidad de imagen digital.",
            Accesorios: [
                {
                    Referencia: "ACX-05",
                    Nombre: "Espéculos de un solo uso",
                    Marca: "WA",
                    Costo: 0.15
                }
            ]
        },
        {
            Id_equipo: "EQP025",
            Nombre: "Oftalmoscopio", // Oftalmoscopio en lugar de terapia extracorpórea
            Marca: "Heine",
            Modelo: "Beta 200",
            Serie: "HBETA025",
            Ubicacion: "Oftalmología",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_OFT",
            Uso_Descripcion: "Instrumento para el examen de la retina y otras estructuras oculares. Ideal para diagnóstico de retinopatía diabética.",
            Mantenimiento_preventivo: [
                {
                    Id_ReporteP: "P2025004",
                    Id_Biomedico_REF: "BIO005",
                    Fecha: new Date("2025-03-10T00:00:00Z"),
                    Limpieza: true,
                    Verificacion: "Verificación de la intensidad y uniformidad de la luz OK.",
                    "Cambio-partes": "Batería recargable y bombilla de repuesto.",
                    Aprobado: true,
                    Descripcion: "Mantenimiento anual de equipo de diagnóstico."
                }
            ]
        },
        { 
            Id_equipo: "EQP040", 
            Nombre: "Equipo de terapia extracorpórea", 
            Marca: "Maquet", 
            Modelo: "Cardiohelp (ECMO)", 
            Serie: "MECMO040", 
            Ubicacion: "UCI - Cama 10", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_UCI", 
            Uso_Descripcion: "Equipo portátil de soporte vital para oxigenación por membrana extracorpórea (ECMO).",
            Equipoxprestador: [
                {
                    Nit_prestador_REF: "NIT005", 
                    Fecha_Inicio: new Date("2024-01-01T00:00:00Z"),
                    Fecha_Fin: new Date("2025-12-31T00:00:00Z")
                }
            ]
        },

        // --- 4 Tensiómetros (Esfigmomanómetro) ---
        { Id_equipo: "EQP026", Nombre: "Tensiómetro (esfigmomanómetro)", Marca: "Welch Allyn", Modelo: "6100 (Ambulatorio)", Serie: "WA6100026", Ubicacion: "Consulta Externa", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_CEX", Uso_Descripcion: "Holter de presión arterial para monitoreo de 24 horas. Proporciona datos detallados para el diagnóstico." },
        { Id_equipo: "EQP027", Nombre: "Tensiómetro (esfigmomanómetro)", Marca: "Omron", Modelo: "HEM-7120 (Digital)", Serie: "OHM712027", Ubicacion: "Enfermería - Puesto 2", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_MGE", Uso_Descripcion: "Tensiómetro de brazo digital de uso general. Rápido y confiable para mediciones rutinarias." },
        { Id_equipo: "EQP028", Nombre: "Tensiómetro (esfigmomanómetro)", Marca: "Riester", Modelo: "ri-san (Aneroide)", Serie: "RISAN028", Ubicacion: "Consulta Externa", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_CEX", Uso_Descripcion: "Tensiómetro manual aneroide con estetoscopio. Precisión profesional y uso en consultorio." },
        { 
            Id_equipo: "EQP041", 
            Nombre: "Tensiómetro (esfigmomanómetro)", 
            Marca: "Omron", 
            Modelo: "HEM-7120 (Digital)", 
            Serie: "OHM712041", 
            Ubicacion: "Enfermería - Puesto 3", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_MGE", 
            Uso_Descripcion: "Tensiómetro de monitoreo en consulta general. Detecta latidos irregulares." 
        },

        // --- 4 Desfibriladores/Monitor ---
        {
            Id_equipo: "EQP029",
            Nombre: "Desfibrilador/Monitor",
            Marca: "Philips",
            Modelo: "HeartStart MRx",
            Serie: "PHS029",
            Ubicacion: "UCI - Carro de Paro",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Unidad bifásica con capacidad de monitorización. Esencial en códigos azules y reanimación avanzada.",
            Mantenimiento_preventivo: [
                {
                    Id_ReporteP: "P2025005",
                    Id_Biomedico_REF: "BIO006",
                    Fecha: new Date("2025-04-05T00:00:00Z"),
                    Limpieza: true,
                    Verificacion: "Prueba de descarga a 50J, 100J, 200J OK.",
                    "Cambio-partes": "Reemplazo de batería principal.",
                    Aprobado: true,
                    Descripcion: "Revisión trimestral de Carro de Paro."
                }
            ]
        },
        {
            Id_equipo: "EQP030",
            Nombre: "Desfibrilador/Monitor",
            Marca: "Physio-Control",
            Modelo: "LIFEPAK 15",
            Serie: "PCLP030",
            Ubicacion: "Urgencias - Sala de Shock",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Desfibrilador portátil y robusto, con capacidad de monitorización de 12 derivaciones y PNI.",
        },
        {
            Id_equipo: "EQP031",
            Nombre: "Desfibrilador/Monitor",
            Marca: "Cardiac Science",
            Modelo: "Powerheart G5 (DEA)",
            Serie: "CSG5031",
            Ubicacion: "Pasillo Central",
            Id_Sede_REF: "SED001",
            Id_Servicio_REF: "SRV_GIR", 
            Uso_Descripcion: "Desfibrilador Externo Automático (DEA) para uso público. Asesoría de ritmo y descargas automáticas.",
        },
        { 
            Id_equipo: "EQP042", 
            Nombre: "Desfibrilador/Monitor", 
            Marca: "Philips", 
            Modelo: "HeartStart MRx", 
            Serie: "PHS042", 
            Ubicacion: "Urgencias - Observación", 
            Id_Sede_REF: "SED001", 
            Id_Servicio_REF: "SRV_EME", 
            Uso_Descripcion: "Desfibrilador con marcapasos transcutáneo. Uso principal en salas de observación y transporte de pacientes críticos.",
            Mantenimiento_correctivo: [
                {
                    Id_ReporteC: "C2025004",
                    Id_Biomedico_REF: "BIO006",
                    Accion_correctiva: "Reparación de conector de palas de desfibrilación.",
                    Falla_presentada: "Fallo en la detección de pulso a través de las palas.",
                    Repuestos: "Conector DB9 nuevo."
                }
            ]
        },
        // --- 10 Pulsioxímetros de Pulso (Pulse Oximeters) ---
        {
            Id_equipo: "EQP055", Nombre: "Pulsioxímetro de pulso", Marca: "Masimo", Modelo: "Rad-57", Serie: "MRAD57055",
            Ubicacion: "Urgencias - Box 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Pulsioxímetro de mano con tecnología Masimo SET para mediciones precisas en movimiento o baja perfusión."
        },
        {
            Id_equipo: "EQP056", Nombre: "Pulsioxímetro de pulso", Marca: "Nellcor", Modelo: "PM10N", Serie: "NPM10N056",
            Ubicacion: "Hospitalización - Piso 2", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_HOS",
            Uso_Descripcion: "Dispositivo de mesa para monitorización continua en pacientes hospitalizados. Alarmas configurables."
        },
        {
            Id_equipo: "EQP057", Nombre: "Pulsioxímetro de pulso", Marca: "Nonin", Modelo: "PalmSat 2500", Serie: "NPALM250057",
            Ubicacion: "Pediatría - Cuna 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_PED",
            Uso_Descripcion: "Pulsioxímetro portátil y ligero, ideal para monitorear pacientes pediátricos y neonatales."
        },
        {
            Id_equipo: "EQP058", Nombre: "Pulsioxímetro de pulso", Marca: "Masimo", Modelo: "Rad-5", Serie: "MRAD5058",
            Ubicacion: "UCI - Cama 12", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Pulsioxímetro de mano, utilizado como backup o para rondas rápidas."
        },
        {
            Id_equipo: "EQP059", Nombre: "Pulsioxímetro de pulso", Marca: "Nellcor", Modelo: "PM10N", Serie: "NPM10N059",
            Ubicacion: "Cirugía Ambulatoria", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_CEX",
            Uso_Descripcion: "Usado durante procedimientos menores y post-operatorios ambulatorios."
        },
        {
            Id_equipo: "EQP060", Nombre: "Pulsioxímetro de pulso", Marca: "Nonin", Modelo: "Onyx Vantage 9590", Serie: "NONX959060",
            Ubicacion: "Neumología - Consultorio 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_PUL",
            Uso_Descripcion: "Pulsioxímetro de dedo, altamente preciso para pruebas de caminata y espirometría."
        },
        {
            Id_equipo: "EQP061", Nombre: "Pulsioxímetro de pulso", Marca: "BPL Medical", Modelo: "Cleo", Serie: "BCL061",
            Ubicacion: "Ginecología - Consulta", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIN",
            Uso_Descripcion: "Utilizado para control básico de signos vitales en consulta externa."
        },
        {
            Id_equipo: "EQP062", Nombre: "Pulsioxímetro de pulso", Marca: "Mindray", Modelo: "uMEC10", Serie: "MUMEC1062",
            Ubicacion: "Emergencias - Box 5", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Pulsioxímetro de cabecera con tendencias y almacenamiento de datos."
        },
        {
            Id_equipo: "EQP063", Nombre: "Pulsioxímetro de pulso", Marca: "Nonin", Modelo: "PalmSat 2500", Serie: "NPALM250063",
            Ubicacion: "UCIN - Cuna 3", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Monitorización de SpO2 en neonatos, compatible con sensor envolvente."
        },
        {
            Id_equipo: "EQP064", Nombre: "Pulsioxímetro de pulso", Marca: "Masimo", Modelo: "Rad-57", Serie: "MRAD57064",
            Ubicacion: "Recuperación Post-Anestesia", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_RPA",
            Uso_Descripcion: "Monitorización de cabecera en la fase crítica de recuperación."
        },

        // --- 10 Flujómetros (Flowmeters) ---
        {
            Id_equipo: "EQP065", Nombre: "Flujómetro de oxígeno", Marca: "Ohio Medical", Modelo: "Flow Regulator", Serie: "OFR065",
            Ubicacion: "Hospitalización - Piso 4 (Hab. 401)", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_HOS",
            Uso_Descripcion: "Regulador de flujo con conexión a toma de pared, de 0 a 15 L/min."
        },
        {
            Id_equipo: "EQP066", Nombre: "Flujómetro de oxígeno", Marca: "Western Medica", Modelo: "B Series", Serie: "WMB066",
            Ubicacion: "Urgencias - Box 6", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Utilizado para terapias de oxígeno de alto flujo en emergencias."
        },
        {
            Id_equipo: "EQP067", Nombre: "Flujómetro de aire medicinal", Marca: "Precision Medical", Modelo: "PC-515", Serie: "PMP515067",
            Ubicacion: "UCI - Cama 15", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Regulador de flujo para aire medicinal, usado en ventilación y nebulización."
        },
        {
            Id_equipo: "EQP068", Nombre: "Flujómetro de oxígeno", Marca: "Amvex", Modelo: "DF-200", Serie: "ADF200068",
            Ubicacion: "Quirófano 4", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_QUI",
            Uso_Descripcion: "Flujómetro con conexión DISS. Parte del suministro de gases para anestesia."
        },
        {
            Id_equipo: "EQP069", Nombre: "Flujómetro de oxígeno", Marca: "Ohio Medical", Modelo: "Flow Regulator", Serie: "OFR069",
            Ubicacion: "Pediatría - Sala de Tratamiento", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_PED",
            Uso_Descripcion: "Flujómetro pediátrico de bajo flujo (0-5 L/min) para una dosificación precisa."
        },
        {
            Id_equipo: "EQP070", Nombre: "Flujómetro de oxígeno", Marca: "Precision Medical", Modelo: "PC-515", Serie: "PMP515070",
            Ubicacion: "UCI - Cama 16", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Utilizado en terapias de oxigenoterapia con cánula nasal o máscara."
        },
        {
            Id_equipo: "EQP071", Nombre: "Flujómetro de oxígeno", Marca: "Amvex", Modelo: "DF-200", Serie: "ADF200071",
            Ubicacion: "Hospitalización - Piso 4 (Hab. 402)", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_HOS",
            Uso_Descripcion: "Conexión en línea a la central de gases."
        },
        {
            Id_equipo: "EQP072", Nombre: "Flujómetro de aire medicinal", Marca: "Ohio Medical", Modelo: "Flow Regulator", Serie: "OFR072",
            Ubicacion: "Quirófano 5", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_QUI",
            Uso_Descripcion: "Control de aire para herramientas neumáticas en cirugía ortopédica.",
            Equipoxprestador: [{ Nit_prestador_REF: "NIT004", Fecha_Inicio: new Date("2024-01-01T00:00:00Z"), Fecha_Fin: new Date("2026-01-01T00:00:00Z") }]
        },
        {
            Id_equipo: "EQP073", Nombre: "Flujómetro de oxígeno", Marca: "Western Medica", Modelo: "B Series", Serie: "WMB073",
            Ubicacion: "Emergencias - Box 7", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Flujómetro auxiliar para intubación y ventilación manual."
        },
        {
            Id_equipo: "EQP074", Nombre: "Flujómetro de oxígeno", Marca: "Precision Medical", Modelo: "PC-515", Serie: "PMP515074",
            Ubicacion: "Ambulancia 3", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Flujómetro de cilindro de oxígeno para transporte."
        },

        // --- 10 Ecógrafos (Ultrasonido) ---
        {
            Id_equipo: "EQP075", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Philips", Modelo: "EPIQ 7", Serie: "PEPIQ7075",
            Ubicacion: "Radiología - Sala 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_IMA",
            Uso_Descripcion: "Ecógrafo de alta gama para diagnóstico avanzado, cardiología y 4D.",
            Mantenimiento_correctivo: [{ Id_ReporteC: "C2025005", Id_Biomedico_REF: "BIO007", Accion_correctiva: "Reparación de placa principal de procesamiento de imagen.", Falla_presentada: "Artefactos y pérdida de color en la imagen." }]
        },
        {
            Id_equipo: "EQP076", Nombre: "Ecógrafo (Ultrasonido)", Marca: "GE Healthcare", Modelo: "Voluson E10", Serie: "GVE10076",
            Ubicacion: "Ginecología - Consulta", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIN",
            Uso_Descripcion: "Especializado en obstetricia y ginecología, con capacidades 3D/4D superiores."
        },
        {
            Id_equipo: "EQP077", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Mindray", Modelo: "M9 (Portátil)", Serie: "MM9077",
            Ubicacion: "UCI - Cabecera", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI",
            Uso_Descripcion: "Ecógrafo portátil para evaluación de pacientes críticos (FAST, inserción de catéteres)."
        },
        {
            Id_equipo: "EQP078", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Siemens Healthineers", Modelo: "Acuson S2000", Serie: "SACS20078",
            Ubicacion: "Radiología - Sala 2", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_IMA",
            Uso_Descripcion: "Sistema de ultrasonido general con tecnología de elastografía."
        },
        {
            Id_equipo: "EQP079", Nombre: "Ecógrafo (Ultrasonido)", Marca: "GE Healthcare", Modelo: "Vivid i (Cardíaco)", Serie: "GVIV079",
            Ubicacion: "Cardiología - Ecocardiografía", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_CAR",
            Uso_Descripcion: "Ecógrafo dedicado a estudios cardíacos, con mediciones avanzadas de función ventricular."
        },
        {
            Id_equipo: "EQP080", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Canon Medical", Modelo: "Aplio i800", Serie: "CAI800080",
            Ubicacion: "Cirugía General", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_QUI",
            Uso_Descripcion: "Utilizado para guiar biopsias y procedimientos intervencionistas en quirófano."
        },
        {
            Id_equipo: "EQP081", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Mindray", Modelo: "M9 (Portátil)", Serie: "MM9081",
            Ubicacion: "Urgencias - Sala Trauma", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME",
            Uso_Descripcion: "Portátil, usado para evaluar sangrado interno rápido en trauma."
        },
        {
            Id_equipo: "EQP082", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Sonoscape", Modelo: "P50", Serie: "SSP50082",
            Ubicacion: "Urología - Consultorio", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_CEX",
            Uso_Descripcion: "Ecógrafo con sondas especializadas para estudios prostáticos y renales."
        },
        {
            Id_equipo: "EQP083", Nombre: "Ecógrafo (Ultrasonido)", Marca: "Philips", Modelo: "CX50 (Portátil)", Serie: "PCX50083",
            Ubicacion: "Unidad Móvil", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_HOS",
            Uso_Descripcion: "Sistema de ultrasonido portátil de alto rendimiento para visitas médicas a domicilio.",
            Equipoxprestador: [{ Nit_prestador_REF: "NIT005", Fecha_Inicio: new Date("2024-04-01T00:00:00Z"), Fecha_Fin: new Date("2027-04-01T00:00:00Z") }]
        },
        {
            Id_equipo: "EQP084", Nombre: "Ecógrafo (Ultrasonido)", Marca: "GE Healthcare", Modelo: "LOGIQ E9", Serie: "GLE9084",
            Ubicacion: "Radiología - Sala 3", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_IMA",
            Uso_Descripcion: "Sistema avanzado para estudios abdominales y pequeñas partes."
        },

        // --- 10 Incubadoras Neonatales ---
        {
            Id_equipo: "EQP085", Nombre: "Incubadora neonatal", Marca: "Dräger", Modelo: "Babyleo TN500", Serie: "DBTN50085",
            Ubicacion: "UCIN - Cuna 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Incubadora híbrida con cuna de calor radiante integrada. Control climático avanzado."
        },
        {
            Id_equipo: "EQP086", Nombre: "Incubadora neonatal", Marca: "GE Healthcare", Modelo: "Giraffe OmniBed Carestation", Serie: "GGOC086",
            Ubicacion: "UCIN - Cuna 2", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Permite la transición de incubadora a cuna de calor radiante sin mover al paciente."
        },
        {
            Id_equipo: "EQP087", Nombre: "Incubadora neonatal", Marca: "Atom", Modelo: "Dual Incu i", Serie: "ADII087",
            Ubicacion: "UCIN - Cuna 3", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Incubadora de doble pared con control de humedad y temperatura. Usada para prematuros."
        },
        {
            Id_equipo: "EQP088", Nombre: "Incubadora neonatal", Marca: "Dräger", Modelo: "Isolette TI500", Serie: "DIT50088",
            Ubicacion: "UCIN - Cuna 4", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Incubadora de cuidados intensivos, con sistema de servo-control de oxígeno.",
            Mantenimiento_preventivo: [{ Id_ReporteP: "P2025007", Id_Biomedico_REF: "BIO001", Fecha: new Date("2025-07-25T00:00:00Z"), Descripcion: "Calibración de sensor de temperatura y limpieza de filtro de aire." }]
        },
        {
            Id_equipo: "EQP089", Nombre: "Cuna de calor radiante", Marca: "GE Healthcare", Modelo: "Panda i-Res", Serie: "GPIR089",
            Ubicacion: "Sala de Partos - Reanimación", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIN",
            Uso_Descripcion: "Cuna de calor radiante para reanimación neonatal. Con lámpara de fototerapia integrada."
        },
        {
            Id_equipo: "EQP090", Nombre: "Incubadora neonatal", Marca: "Atom", Modelo: "V-808", Serie: "AV808090",
            Ubicacion: "UCIN - Cuna 5", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Incubadora de transporte de alto rendimiento."
        },
        {
            Id_equipo: "EQP091", Nombre: "Incubadora neonatal", Marca: "Dräger", Modelo: "Babyleo TN500", Serie: "DBTN50091",
            Ubicacion: "UCIN - Cuna 6", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Utilizada para aislamiento de neonatos con infecciones."
        },
        {
            Id_equipo: "EQP092", Nombre: "Cuna de calor radiante", Marca: "GE Healthcare", Modelo: "Giraffe Warmer", Serie: "GGW092",
            Ubicacion: "UCIN - Cuna 7", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Cuna abierta para procedimientos e intervenciones rápidas."
        },
        {
            Id_equipo: "EQP093", Nombre: "Incubadora neonatal", Marca: "Atom", Modelo: "Dual Incu i", Serie: "ADII093",
            Ubicacion: "UCIN - Cuna 8", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Incubadora con bajo nivel de ruido para promover el desarrollo cerebral."
        },
        {
            Id_equipo: "EQP094", Nombre: "Incubadora neonatal", Marca: "Dräger", Modelo: "Isolette TI500", Serie: "DIT50094",
            Ubicacion: "UCIN - Cuna 9", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Incubadora de respaldo, verificada anualmente por riesgo eléctrico."
        },
        // --- 6 Pesabebés (Básculas Neonatales/Pediátricas) ---
        {
            Id_equipo: "EQP043", Nombre: "Pesa bebé (Báscula neonatal)", Marca: "Ohaus", Modelo: "T31P (Neonatal)", Serie: "OT31P016",
            Ubicacion: "UCIN", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Báscula de alta precisión para bebés y neonatos. Mide con incrementos de 1 gramo."
        },
        {
            Id_equipo: "EQP095", Nombre: "Pesa bebé (Báscula neonatal)", Marca: "Seca", Modelo: "334", Serie: "S334095",
            Ubicacion: "UCIN - Puesto Enfermería", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Báscula digital portátil con función de tara y retención de peso."
        },
        {
            Id_equipo: "EQP096", Nombre: "Pesa bebé (Báscula neonatal)", Marca: "Health-o-Meter", Modelo: "550KL", Serie: "H550096",
            Ubicacion: "Pediatría - Consulta 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_PED",
            Uso_Descripcion: "Báscula de bandeja removible, fácil de limpiar. Uso en consulta pediátrica."
        },
        {
            Id_equipo: "EQP097", Nombre: "Pesa bebé (Báscula neonatal)", Marca: "Seca", Modelo: "727 (Mecánica)", Serie: "S727097",
            Ubicacion: "UCIN - Cuna 10", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO",
            Uso_Descripcion: "Báscula mecánica de precisión, usada como referencia y en áreas sin energía eléctrica.",
            Accesorios: [{ Referencia: "ACX-06", Nombre: "Base antideslizante", Costo: 45.00 }]
        },
        {
            Id_equipo: "EQP098", Nombre: "Pesa bebé (Báscula neonatal)", Marca: "Ohaus", Modelo: "T31P (Neonatal)", Serie: "OT31P098",
            Ubicacion: "Sala de Partos - Área de Neonatos", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIN",
            Uso_Descripcion: "Utilizada inmediatamente después del nacimiento para registrar el peso inicial."
        },
        {
            Id_equipo: "EQP099", Nombre: "Pesa bebé (Báscula neonatal)", Marca: "Seca", Modelo: "334", Serie: "S334099",
            Ubicacion: "Pediatría - Consulta 2", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_PED",
            Uso_Descripcion: "Báscula usada para monitorear el crecimiento semanal de infantes."
        },
        // Finales de Ventiladores (Total 15)
        { Id_equipo: "EQP132", Nombre: "Ventilador mecánico", Marca: "Maquet", Modelo: "Servo-U", Serie: "MSEU132", Ubicacion: "UCI - Cama 13", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI", Uso_Descripcion: "Ventilador de última generación con herramientas para destete." },
        { Id_equipo: "EQP133", Nombre: "Ventilador mecánico", Marca: "Dräger", Modelo: "Evita V500", Serie: "DEV500133", Ubicacion: "UCI - Cama 14", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI", Uso_Descripcion: "Ventilador con monitorización pulmonar avanzada." },
        { Id_equipo: "EQP134", Nombre: "Ventilador mecánico", Marca: "Hamilton Medical", Modelo: "T1 (Transporte)", Serie: "HT1134", Ubicacion: "Almacén - Transporte", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME", Uso_Descripcion: "Diseñado para transporte terrestre y aéreo." },
        { Id_equipo: "EQP135", Nombre: "Ventilador mecánico", Marca: "Maquet", Modelo: "Servo-i Universal", Serie: "MSEQ135", Ubicacion: "UCI - Cama 17", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI", Uso_Descripcion: "Configurado para ventilación de alta frecuencia oscilatoria (HFOV)." },
        { Id_equipo: "EQP136", Nombre: "Ventilador mecánico", Marca: "CareFusion", Modelo: "Avea (Neonatal)", Serie: "CAVEA136", Ubicacion: "UCIN", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_NEO", Uso_Descripcion: "Ventilador para pacientes prematuros y de muy bajo peso." },

        // Finales de Monitores (Total 15)
        { Id_equipo: "EQP137", Nombre: "Monitor de signos vitales", Marca: "GE Healthcare", Modelo: "Carescape B450", Serie: "GBC450137", Ubicacion: "Recuperación - Box 1", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_RPA", Uso_Descripcion: "Monitor básico para la fase post-anestesia." },
        { Id_equipo: "EQP138", Nombre: "Monitor de signos vitales", Marca: "Zoll", Modelo: "Propaq MD", Serie: "ZPMD138", Ubicacion: "Helipuerto", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME", Uso_Descripcion: "Monitor/Desfibrilador para atención aeromédica." },
        { Id_equipo: "EQP139", Nombre: "Monitor de signos vitales", Marca: "Masimo", Modelo: "Rad-97", Serie: "MRAD97139", Ubicacion: "Fisioterapia - Rehabilitación", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_FIS", Uso_Descripcion: "Monitoreo de esfuerzo y oxigenación durante la rehabilitación." },
        { Id_equipo: "EQP140", Nombre: "Monitor de signos vitales", Marca: "Philips", Modelo: "IntelliVue MP5", Serie: "PIMP5140", Ubicacion: "Hospitalización - Piso 6", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_HOS", Uso_Descripcion: "Monitor portátil de cabecera para hospitalización general." },
        { Id_equipo: "EQP141", Nombre: "Monitor de signos vitales", Marca: "Mindray", Modelo: "iPM 12", Serie: "MIPM12141", Ubicacion: "Urgencias - Box 10", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME", Uso_Descripcion: "Monitor de fácil uso con gran visibilidad. Posee historial de eventos." },

        // Finales Desfibriladores (Total 15)
        { Id_equipo: "EQP142", Nombre: "Desfibrilador/Monitor", Marca: "Physio-Control", Modelo: "LIFEPAK 1000 (DEA)", Serie: "PCLP1000142", Ubicacion: "Sala de Juntas", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIR", Uso_Descripcion: "DEA público con capacidad de energía escalable." },
        { Id_equipo: "EQP143", Nombre: "Desfibrilador/Monitor", Marca: "Philips", Modelo: "HeartStart XL", Serie: "PHXL143", Ubicacion: "Quirófano 3 - Backup", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_QUI", Uso_Descripcion: "Unidad de desfibrilación de respaldo en el área quirúrgica." },
        { Id_equipo: "EQP144", Nombre: "Desfibrilador/Monitor", Marca: "Zoll", Modelo: "M Series", Serie: "ZMS144", Ubicacion: "Urgencias - Reanimación", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_EME", Uso_Descripcion: "Modelo antiguo pero confiable, con electrodos de terapia multifunción." },
        { Id_equipo: "EQP145", Nombre: "Desfibrilador/Monitor", Marca: "Mindray", Modelo: "BeneHeart D1", Serie: "MBD1145", Ubicacion: "Vestíbulo de Visitas", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_GIR", Uso_Descripcion: "DEA compacto y fácil de usar. Instrucciones de voz claras." },
        { Id_equipo: "EQP146", Nombre: "Desfibrilador/Monitor", Marca: "Cardiac Science", Modelo: "Powerheart G3 Plus", Serie: "CSG3P146", Ubicacion: "UCI - Carro de Paro", Id_Sede_REF: "SED001", Id_Servicio_REF: "SRV_UCI", Uso_Descripcion: "Desfibrilador avanzado con monitorización de ECG y soporte vital básico." }
        

    ];

    
    
    // Inserta los nuevos documentos
    const result = await db.collection("equipo").insertMany(equipos);
    console.log(`✅ ${result.insertedCount} Documentos insertados en 'equipo'`);
}
