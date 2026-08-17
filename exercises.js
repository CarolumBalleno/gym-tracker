const EXERCISE_CATALOG = [
  // --- FASE 1: CALENTAMIENTO ---
  { id: "W01", name: "Movilidad Articular Dinámica", group: "Calentamiento", pattern: "Movilidad", equipment: "Peso Corporal", restSec: 0, isBodyweight: true, isIso: false, guide: "5 min rotaciones (escápulas, cadera, tobillos, muñecas)." },
  { id: "W02", name: "Cardio Suave de Activación", group: "Calentamiento", pattern: "Cardio", equipment: "Cinta / Elíptica", restSec: 0, isBodyweight: true, isIso: false, guide: "5-10 min a ritmo suave para elevar temperatura central." },
  { id: "W03", name: "Series de Aproximación", group: "Calentamiento", pattern: "Aproximación", equipment: "Libre", restSec: 60, isBodyweight: false, isIso: false, guide: "1-2 series al 40-50% del peso del primer ejercicio pesado." },
  { id: "W04", name: "Dislocaciones de Hombro", group: "Calentamiento", pattern: "Movilidad", equipment: "Pica / Goma", restSec: 0, isBodyweight: true, isIso: false, guide: "Movilidad escapular completa con banda elástica o pica." },

  // --- PECHO (EMPUJE HORIZONTAL) ---
  { id: "P01", name: "Press Banca Plano con Barra", group: "Pecho", pattern: "Empuje Horizontal", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Retracción escapular, pies firmes, barra al esternón." },
  { id: "P02", name: "Press Plano con Mancuernas", group: "Pecho", pattern: "Empuje Horizontal", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Descenso controlado hasta la línea media del pecho." },
  { id: "P03", name: "Press de Pecho en Máquina Convergente", group: "Pecho", pattern: "Empuje Horizontal", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Empuje guiado; junta las manos al frente." },
  { id: "P04", name: "Press de Pecho Multipower (Smith)", group: "Pecho", pattern: "Empuje Horizontal", equipment: "Multipower", restSec: 90, isBodyweight: false, isIso: false, guide: "Máxima estabilidad. Baja la barra a la línea del pezón." },
  
  // --- PECHO (EMPUJE INCLINADO - Haz Clavicular) ---
  { id: "P05", name: "Press Inclinado con Mancuernas", group: "Pecho", pattern: "Empuje Inclinado", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Banco a 30°-45°. Empuja sobre la vertical de los hombros." },
  { id: "P06", name: "Press Inclinado con Barra", group: "Pecho", pattern: "Empuje Inclinado", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Descenso hacia la parte clavicular (alta) del pecho." },
  { id: "P07", name: "Press Inclinado en Máquina", group: "Pecho", pattern: "Empuje Inclinado", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Aislamiento del pecho superior sin estabilización extra." },
  { id: "P08", name: "Press Inclinado Multipower", group: "Pecho", pattern: "Empuje Inclinado", equipment: "Multipower", restSec: 90, isBodyweight: false, isIso: false, guide: "Permite llegar al fallo con seguridad en el pecho alto." },

  // --- PECHO (EMPUJE DECLINADO / INFERIOR) ---
  { id: "P09", name: "Fondos en Paralelas (Enfoque Pecho)", group: "Pecho", pattern: "Empuje Declinado", equipment: "Peso Corporal", restSec: 120, isBodyweight: true, isIso: false, guide: "Torso inclinado hacia adelante 30°." },
  { id: "P10", name: "Press Declinado con Barra", group: "Pecho", pattern: "Empuje Declinado", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Banco declinado. Enfoque en la porción esternocostal." },
  { id: "P11", name: "Press Declinado en Máquina", group: "Pecho", pattern: "Empuje Declinado", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Empuja hacia abajo y al frente." },

  // --- PECHO (ADUCCIÓN HORIZONTAL - Aperturas) ---
  { id: "P12", name: "Aperturas en Pec Deck / Contractor", group: "Pecho", pattern: "Aducción Horizontal", equipment: "Máquina", restSec: 75, isBodyweight: false, isIso: false, guide: "Codos semiflexionados, aprieta 1 segundo al centro." },
  { id: "P13", name: "Cruce de Poleas desde Abajo", group: "Pecho", pattern: "Aducción Horizontal", equipment: "Polea Doble", restSec: 75, isBodyweight: false, isIso: false, guide: "Tracción hacia arriba y al centro para haz clavicular." },
  { id: "P14", name: "Cruce de Poleas desde Arriba", group: "Pecho", pattern: "Aducción Horizontal", equipment: "Polea Doble", restSec: 75, isBodyweight: false, isIso: false, guide: "Tracción hacia abajo cruzando al frente." },
  { id: "P15", name: "Aperturas con Mancuernas (Plano)", group: "Pecho", pattern: "Aducción Horizontal", equipment: "Mancuernas", restSec: 75, isBodyweight: false, isIso: false, guide: "Baja sintiendo el estiramiento; no dobles los codos en exceso." },
  { id: "P16", name: "Aperturas Inclinadas Polea", group: "Pecho", pattern: "Aducción Horizontal", equipment: "Polea / Banco", restSec: 75, isBodyweight: false, isIso: false, guide: "Tensión máxima en la fase de estiramiento." },

  // --- ESPALDA (TRACCIÓN VERTICAL) ---
  { id: "E01", name: "Dominadas Pronas (Abiertas)", group: "Espalda", pattern: "Tracción Vertical", equipment: "Peso Corporal", restSec: 120, isBodyweight: true, isIso: false, guide: "Pecho a la barra, mayor reclutamiento de fibras superiores." },
  { id: "E02", name: "Dominadas Neutras", group: "Espalda", pattern: "Tracción Vertical", equipment: "Peso Corporal", restSec: 120, isBodyweight: true, isIso: false, guide: "Agarre paralelo. Mayor rango de movimiento seguro." },
  { id: "E03", name: "Dominadas Supinas (Chin-ups)", group: "Espalda", pattern: "Tracción Vertical", equipment: "Peso Corporal", restSec: 120, isBodyweight: true, isIso: false, guide: "Palmas hacia ti. Gran participación del bíceps." },
  { id: "E04", name: "Jalón al Pecho Agarre Abierto", group: "Espalda", pattern: "Tracción Vertical", equipment: "Polea Alta", restSec: 90, isBodyweight: false, isIso: false, guide: "Codos apuntando al suelo, barra a la clavícula." },
  { id: "E05", name: "Jalón al Pecho Agarre Neutro/V", group: "Espalda", pattern: "Tracción Vertical", equipment: "Polea Alta", restSec: 90, isBodyweight: false, isIso: false, guide: "Permite un estiramiento profundo del dorsal." },
  { id: "E06", name: "Jalón Unilateral en Polea", group: "Espalda", pattern: "Tracción Vertical", equipment: "Polea Alta", restSec: 75, isBodyweight: false, isIso: false, guide: "Pega el codo a la cadera, enfocando un solo lado." },
  { id: "E07", name: "Jalón al Pecho Máquina Palanca", group: "Espalda", pattern: "Tracción Vertical", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Movimiento guiado y convergente." },

  // --- ESPALDA (TRACCIÓN HORIZONTAL) ---
  { id: "E08", name: "Remo con Barra 45° (Prono)", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Trabaja la densidad de la espalda alta." },
  { id: "E09", name: "Remo con Barra 45° (Supino)", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Codos más pegados al cuerpo, mayor foco en el dorsal." },
  { id: "E10", name: "Remo Unilateral con Mancuerna", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Apoyo en banco, tracción hacia la cadera." },
  { id: "E11", name: "Remo Gironda (Polea Baja)", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Polea Baja", restSec: 90, isBodyweight: false, isIso: false, guide: "Saca pecho al contraer y deja avanzar escápulas al estirar." },
  { id: "E12", name: "Remo en Máquina (Pecho Apoyado)", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Aísla la espalda sin fatiga lumbar." },
  { id: "E13", name: "Remo en Barra T (Pecho Apoyado)", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Máquina Barra T", restSec: 90, isBodyweight: false, isIso: false, guide: "Máxima carga con la zona lumbar protegida." },
  { id: "E14", name: "Remo con Mancuernas Pecho Apoyado", group: "Espalda", pattern: "Tracción Horizontal", equipment: "Mancuernas / Banco", restSec: 90, isBodyweight: false, isIso: false, guide: "Banco a 30°, tracciona ambas mancuernas a la vez." },

  // --- ESPALDA (EXTENSIÓN DE HOMBRO) ---
  { id: "E15", name: "Pull-over en Polea Alta con Cuerda", group: "Espalda", pattern: "Extensión Hombro", equipment: "Polea Alta", restSec: 75, isBodyweight: false, isIso: false, guide: "Brazos casi rectos, tracciona hacia los muslos." },
  { id: "E16", name: "Pull-over en Polea Alta con Barra", group: "Espalda", pattern: "Extensión Hombro", equipment: "Polea Alta", restSec: 75, isBodyweight: false, isIso: false, guide: "Agarre prono; enfocado en dorsal ancho." },
  { id: "E17", name: "Pull-over con Mancuerna en Banco", group: "Espalda", pattern: "Extensión Hombro", equipment: "Mancuerna", restSec: 90, isBodyweight: false, isIso: false, guide: "Tumbado perpendicular al banco. Estiramiento extremo." },

  // --- CUÁDRICEPS (DOMINANTE DE RODILLA BILATERAL Y UNILATERAL) ---
  { id: "Q01", name: "Sentadilla Trasera con Barra", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Barra / Rack", restSec: 180, isBodyweight: false, isIso: false, guide: "Rompe el paralelo manteniendo columna neutra." },
  { id: "Q02", name: "Sentadilla Frontal con Barra", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Barra / Rack", restSec: 120, isBodyweight: false, isIso: false, guide: "Torso más vertical, mayor estímulo en cuádriceps." },
  { id: "Q03", name: "Prensa de Piernas 45°", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Prensa", restSec: 120, isBodyweight: false, isIso: false, guide: "Baja profundo sin despegar la pelvis del respaldo." },
  { id: "Q04", name: "Sentadilla Hack en Máquina", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Máquina Hack", restSec: 120, isBodyweight: false, isIso: false, guide: "Apoyo dorsal total para aislar cuádriceps pesado." },
  { id: "Q05", name: "Sentadilla Búlgara con Mancuernas", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Pie trasero apoyado. Baja vertical." },
  { id: "Q06", name: "Sentadilla Búlgara en Multipower", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Multipower", restSec: 90, isBodyweight: false, isIso: false, guide: "Elimina la inestabilidad para exprimir el músculo." },
  { id: "Q07", name: "Sentadilla Goblet con Mancuerna", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Mancuerna", restSec: 90, isBodyweight: false, isIso: false, guide: "Mancuerna pegada al pecho, excelente para técnica." },
  { id: "Q08", name: "Zancadas / Lunges Caminando", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Pasos amplios y controlados." },
  { id: "Q09", name: "Prensa Horizontal de Piernas", group: "Cuádriceps", pattern: "Dominante Rodilla", equipment: "Prensa", restSec: 90, isBodyweight: false, isIso: false, guide: "Menor carga espinal que la prensa 45°." },

  // --- CUÁDRICEPS (EXTENSIÓN DE RODILLA) ---
  { id: "Q10", name: "Extensiones de Cuádriceps", group: "Cuádriceps", pattern: "Extensión Rodilla", equipment: "Máquina Extensión", restSec: 75, isBodyweight: false, isIso: false, guide: "Extiende completo y aguanta 1 segundo arriba." },
  { id: "Q11", name: "Extensiones de Cuádriceps Unilateral", group: "Cuádriceps", pattern: "Extensión Rodilla", equipment: "Máquina Extensión", restSec: 75, isBodyweight: false, isIso: false, guide: "Trabaja cada pierna por separado para evitar asimetrías." },
  { id: "Q12", name: "Sissy Squat", group: "Cuádriceps", pattern: "Extensión Rodilla", equipment: "Peso Corporal", restSec: 90, isBodyweight: true, isIso: false, guide: "Aislamiento extremo del cuádriceps usando tu peso." },

  // --- ISQUIOS Y GLÚTEO (DOMINANTE DE CADERA) ---
  { id: "H01", name: "Peso Muerto Rumano con Barra", group: "Isquios", pattern: "Dominante Cadera", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Cadera atrás sintiendo estiramiento femoral." },
  { id: "H02", name: "Peso Muerto Rumano con Mancuernas", group: "Isquios", pattern: "Dominante Cadera", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Mancuernas pegadas a las piernas en todo el trayecto." },
  { id: "H03", name: "Peso Muerto Convencional", group: "Isquios", pattern: "Dominante Cadera", equipment: "Barra Olímpica", restSec: 180, isBodyweight: false, isIso: false, guide: "Salida desde el suelo. Multiarticular pesado." },
  { id: "H04", name: "Buenos Días con Barra", group: "Isquios", pattern: "Dominante Cadera", equipment: "Barra Olímpica", restSec: 90, isBodyweight: false, isIso: false, guide: "Barra en trapecios, bisagra de cadera profunda." },

  // --- ISQUIOS (FLEXIÓN DE RODILLA) ---
  { id: "H05", name: "Curl Femoral Tumbado", group: "Isquios", pattern: "Flexión Rodilla", equipment: "Máquina Femoral", restSec: 75, isBodyweight: false, isIso: false, guide: "Flexión explosiva y retorno controlado en 3s." },
  { id: "H06", name: "Curl Femoral Sentado", group: "Isquios", pattern: "Flexión Rodilla", equipment: "Máquina Femoral", restSec: 75, isBodyweight: false, isIso: false, guide: "Cadera flexionada a 90°. Máxima tensión." },
  { id: "H07", name: "Curl Femoral de Pie Unilateral", group: "Isquios", pattern: "Flexión Rodilla", equipment: "Máquina", restSec: 75, isBodyweight: false, isIso: false, guide: "Aislamiento puro pierna a pierna." },

  // --- GLÚTEO (EXTENSIÓN Y ABDUCCIÓN) ---
  { id: "G01", name: "Hip Thrust con Barra", group: "Glúteo", pattern: "Extensión Cadera", equipment: "Barra / Banco", restSec: 120, isBodyweight: false, isIso: false, guide: "Empuja con talones y bloquea cadera arriba 1s." },
  { id: "G02", name: "Hip Thrust en Máquina", group: "Glúteo", pattern: "Extensión Cadera", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Tensión directa sin desbalance de la barra." },
  { id: "G03", name: "Puente de Glúteo (Glute Bridge)", group: "Glúteo", pattern: "Extensión Cadera", equipment: "Barra / Suelo", restSec: 90, isBodyweight: false, isIso: false, guide: "Espalda en el suelo, menor rango que Hip Thrust." },
  { id: "G04", name: "Patada de Glúteo en Polea Baja", group: "Glúteo", pattern: "Extensión Cadera", equipment: "Polea Baja", restSec: 60, isBodyweight: false, isIso: false, guide: "Pierna recta hacia atrás, aprieta el glúteo." },
  { id: "G05", name: "Abductores en Máquina", group: "Glúteo", pattern: "Abducción Cadera", equipment: "Máquina", restSec: 60, isBodyweight: false, isIso: false, guide: "Apertura controlada pausando en contracción." },
  { id: "G06", name: "Abducción con Polea", group: "Glúteo", pattern: "Abducción Cadera", equipment: "Polea Baja", restSec: 60, isBodyweight: false, isIso: false, guide: "Trabajo específico para glúteo medio." },

  // --- HOMBRO (EMPUJE VERTICAL) ---
  { id: "S01", name: "Press Militar con Barra (De Pie)", group: "Hombro", pattern: "Empuje Vertical", equipment: "Barra Olímpica", restSec: 120, isBodyweight: false, isIso: false, guide: "Bloqueo de glúteos y abdomen para no arquear la espalda." },
  { id: "S02", name: "Press Militar Sentado con Mancuernas", group: "Hombro", pattern: "Empuje Vertical", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Banco a 80°, empuja sobre la vertical de la cabeza." },
  { id: "S03", name: "Press de Hombros en Máquina", group: "Hombro", pattern: "Empuje Vertical", equipment: "Máquina", restSec: 90, isBodyweight: false, isIso: false, guide: "Para trabajar pesado con máxima estabilidad." },
  { id: "S04", name: "Press Arnold con Mancuernas", group: "Hombro", pattern: "Empuje Vertical", equipment: "Mancuernas", restSec: 90, isBodyweight: false, isIso: false, guide: "Incluye rotación para involucrar más el deltoides anterior." },
  { id: "S05", name: "Press Militar Multipower", group: "Hombro", pattern: "Empuje Vertical", equipment: "Multipower", restSec: 90, isBodyweight: false, isIso: false, guide: "Bajada por delante del rostro hasta la barbilla." },

  // --- HOMBRO (ABDUCCIÓN Y DELTOIDES POSTERIOR) ---
  { id: "S06", name: "Elevaciones Laterales con Mancuernas", group: "Hombro", pattern: "Abducción Hombro", equipment: "Mancuernas", restSec: 60, isBodyweight: false, isIso: false, guide: "Codos alineados con el plano escapular a la altura de hombros." },
  { id: "S07", name: "Elevaciones Laterales en Polea (Unilateral)", group: "Hombro", pattern: "Abducción Hombro", equipment: "Polea Baja", restSec: 60, isBodyweight: false, isIso: false, guide: "Tensión constante durante todo el recorrido." },
  { id: "S08", name: "Elevaciones Laterales en Máquina", group: "Hombro", pattern: "Abducción Hombro", equipment: "Máquina", restSec: 60, isBodyweight: false, isIso: false, guide: "Aislamiento guiado del deltoides lateral." },
  { id: "S09", name: "Pájaros en Máquina Pec Deck Invertida", group: "Hombro", pattern: "Deltoides Posterior", equipment: "Máquina", restSec: 60, isBodyweight: false, isIso: false, guide: "Abre brazos enfocando la parte posterior del hombro." },
  { id: "S10", name: "Pájaros con Mancuernas (Torso Inclinado)", group: "Hombro", pattern: "Deltoides Posterior", equipment: "Mancuernas", restSec: 60, isBodyweight: false, isIso: false, guide: "Pecho paralelo al suelo, eleva brazos lateralmente." },
  { id: "S11", name: "Face Pull en Polea Alta con Cuerda", group: "Hombro", pattern: "Deltoides Posterior", equipment: "Polea Alta", restSec: 60, isBodyweight: false, isIso: false, guide: "Tira hacia la frente con rotación externa de hombros." },
  { id: "S12", name: "Elevaciones Frontales con Polea/Barra", group: "Hombro", pattern: "Flexión Hombro", equipment: "Polea / Barra", restSec: 60, isBodyweight: false, isIso: false, guide: "Enfoque en deltoides anterior (suele estar muy estimulado por el press banca)." },

  // --- BÍCEPS (FLEXIÓN DE CODO SUPINADA/NEUTRA) ---
  { id: "B01", name: "Curl con Barra Z de Pie", group: "Bíceps", pattern: "Flexión Codo", equipment: "Barra Z", restSec: 75, isBodyweight: false, isIso: false, guide: "Codos pegados al cuerpo, sin balanceo lumbar." },
  { id: "B02", name: "Curl con Barra Recta", group: "Bíceps", pattern: "Flexión Codo", equipment: "Barra Olímpica", restSec: 75, isBodyweight: false, isIso: false, guide: "Máxima supinación, excelente para el pico del bíceps." },
  { id: "B03", name: "Curl Alterno con Mancuernas", group: "Bíceps", pattern: "Flexión Codo", equipment: "Mancuernas", restSec: 60, isBodyweight: false, isIso: false, guide: "Supina la muñeca hacia arriba en la subida." },
  { id: "B04", name: "Curl en Banco Scott / Predicador", group: "Bíceps", pattern: "Flexión Codo", equipment: "Banco Scott", restSec: 75, isBodyweight: false, isIso: false, guide: "Aislamiento estricto sin posibilidad de impulso." },
  { id: "B05", name: "Curl en Polea Baja con Barra", group: "Bíceps", pattern: "Flexión Codo", equipment: "Polea Baja", restSec: 60, isBodyweight: false, isIso: false, guide: "Tensión continua en el punto de máxima contracción." },
  { id: "B06", name: "Curl Martillo con Mancuernas", group: "Bíceps", pattern: "Flexión Neutra", equipment: "Mancuernas", restSec: 60, isBodyweight: false, isIso: false, guide: "Agarre neutro para desarrollar el braquial y antebrazo." },
  { id: "B07", name: "Curl Martillo en Polea con Cuerda", group: "Bíceps", pattern: "Flexión Neutra", equipment: "Polea Baja", restSec: 60, isBodyweight: false, isIso: false, guide: "Variante de martillo con tensión continua." },
  { id: "B08", name: "Curl Inclinado con Mancuernas", group: "Bíceps", pattern: "Flexión Codo", equipment: "Mancuernas / Banco", restSec: 75, isBodyweight: false, isIso: false, guide: "Banco a 45°. Brazos cuelgan atrás para máximo estiramiento." },

  // --- TRÍCEPS (EXTENSIÓN DE CODO) ---
  { id: "T01", name: "Extensión de Tríceps en Polea con Cuerda", group: "Tríceps", pattern: "Extensión Codo", equipment: "Polea Alta", restSec: 60, isBodyweight: false, isIso: false, guide: "Abre los extremos de la cuerda abajo apretando tríceps." },
  { id: "T02", name: "Extensión de Tríceps con Barra Recta", group: "Tríceps", pattern: "Extensión Codo", equipment: "Polea Alta", restSec: 60, isBodyweight: false, isIso: false, guide: "Permite mover más carga que la cuerda." },
  { id: "T03", name: "Press Francés con Barra Z en Banco", group: "Tríceps", pattern: "Extensión Codo", equipment: "Barra Z", restSec: 75, isBodyweight: false, isIso: false, guide: "Flexiona codos hacia la frente sin abrir brazos." },
  { id: "T04", name: "Press Cerrado de Tríceps", group: "Tríceps", pattern: "Extensión Codo", equipment: "Barra Olímpica", restSec: 90, isBodyweight: false, isIso: false, guide: "Press banca con agarre a la anchura de los hombros." },
  { id: "T05", name: "Extensión de Tríceps sobre Cabeza (Polea)", group: "Tríceps", pattern: "Extensión Codo Vertical", equipment: "Polea", restSec: 60, isBodyweight: false, isIso: false, guide: "Gran estiramiento de la porción larga del tríceps." },
  { id: "T06", name: "Extensión sobre Cabeza (Mancuerna)", group: "Tríceps", pattern: "Extensión Codo Vertical", equipment: "Mancuerna", restSec: 60, isBodyweight: false, isIso: false, guide: "Sujeta una mancuerna pesada con ambas manos tras la nuca." },
  { id: "T07", name: "Fondos de Tríceps en Máquina / Banco", group: "Tríceps", pattern: "Extensión Codo", equipment: "Máquina", restSec: 75, isBodyweight: false, isIso: false, guide: "Empuja hacia abajo focalizando el esfuerzo en tríceps." },
  { id: "T08", name: "Patada de Tríceps con Mancuerna", group: "Tríceps", pattern: "Extensión Codo", equipment: "Mancuerna", restSec: 60, isBodyweight: false, isIso: false, guide: "Torso a 90°, extiende el brazo hacia atrás." },

  // --- GEMELOS ---
  { id: "G01", name: "Elevación de Talones de Pie en Máquina", group: "Gemelos", pattern: "Flexión Plantar", equipment: "Máquina", restSec: 60, isBodyweight: false, isIso: false, guide: "Piernas rectas. Sube al máximo y estira lento abajo." },
  { id: "G02", name: "Elevación de Talones en Prensa", group: "Gemelos", pattern: "Flexión Plantar", equipment: "Prensa", restSec: 60, isBodyweight: false, isIso: false, guide: "Empuja la plataforma solo con las puntas de los pies." },
  { id: "G03", name: "Elevación de Talones Sentado", group: "Gemelos", pattern: "Flexión Plantar", equipment: "Máquina Sentado", restSec: 60, isBodyweight: false, isIso: false, guide: "Rodillas flexionadas. Aísla el músculo sóleo." },
  { id: "G04", name: "Elevación de Talones Libre", group: "Gemelos", pattern: "Flexión Plantar", equipment: "Mancuernas / Escalón", restSec: 60, isBodyweight: false, isIso: false, guide: "Unilateral o bilateral sobre un step." },

  // --- CORE Y ABDOMEN ---
  { id: "C01", name: "Plancha Abdominal Isométrica", group: "Core", pattern: "Isométrico", equipment: "Peso Corporal", restSec: 60, isBodyweight: true, isIso: true, guide: "Bloqueo firme de abdomen, glúteos y cuádriceps." },
  { id: "C02", name: "Plancha Lateral Isométrica", group: "Core", pattern: "Isométrico", equipment: "Peso Corporal", restSec: 60, isBodyweight: true, isIso: true, guide: "Alineación de cadera para trabajo de oblicuos." },
  { id: "C03", name: "Hollow Body Hold", group: "Core", pattern: "Isométrico", equipment: "Peso Corporal", restSec: 60, isBodyweight: true, isIso: true, guide: "Lumbar pegada al suelo, brazos y piernas extendidas." },
  { id: "C04", name: "Crunch en Polea Alta de Rodillas", group: "Core", pattern: "Flexión Tronco", equipment: "Polea Alta", restSec: 60, isBodyweight: false, isIso: false, guide: "Flexiona la columna aproximando costillas a pelvis." },
  { id: "C05", name: "Crunch Abdominal en Suelo", group: "Core", pattern: "Flexión Tronco", equipment: "Peso Corporal", restSec: 60, isBodyweight: true, isIso: false, guide: "Despega solo las escápulas del suelo." },
  { id: "C06", name: "Elevación de Piernas Colgado en Barra", group: "Core", pattern: "Flexión Cadera", equipment: "Barra", restSec: 60, isBodyweight: true, isIso: false, guide: "Eleva las rodillas o piernas sin balanceo del cuerpo." },
  { id: "C07", name: "Elevación de Piernas en Silla Romana", group: "Core", pattern: "Flexión Cadera", equipment: "Silla Romana", restSec: 60, isBodyweight: true, isIso: false, guide: "Apoyo en antebrazos. Más estable que colgado." },
  { id: "C08", name: "Rueda Abdominal (Ab Wheel)", group: "Core", pattern: "Antiextensión", equipment: "Rueda Abdominal", restSec: 75, isBodyweight: true, isIso: false, guide: "Extiende el cuerpo manteniendo la pelvis en retroversión." },

  // --- CARDIO / VUELTA A LA CALMA ---
  { id: "CR01", name: "Caminata Inclinada en Cinta (Zona 2)", group: "Cardio", pattern: "Aeróbico", equipment: "Cinta", restSec: 0, isBodyweight: true, isIso: false, guide: "Inclinación 8-12%, velocidad 4.5-5 km/h, 15-20 min." },
  { id: "CR02", name: "Bicicleta Estática (Cadencia Moderada)", group: "Cardio", pattern: "Aeróbico", equipment: "Bici Estática", restSec: 0, isBodyweight: true, isIso: false, guide: "15 min a ritmo constante y respiración nasal controlada." },
  { id: "CR03", name: "Elíptica Suave", group: "Cardio", pattern: "Aeróbico", equipment: "Elíptica", restSec: 0, isBodyweight: true, isIso: false, guide: "Bajo impacto articular para acelerar la recuperación." },
  { id: "CR04", name: "Remo Indoor / Ergómetro", group: "Cardio", pattern: "Aeróbico", equipment: "Remo", restSec: 0, isBodyweight: true, isIso: false, guide: "Cardio de cuerpo completo. 10-15 min sostenido." }
];
