/* =========================================================================
   BANCO DE PALABRAS (Depurado y organizado por dificultad)
   ========================================================================= */
const words = [
     // --- FÁCILES ---
    { word: "CASA", hint: "Vivienda habitual de una persona o familia.", difficulty: "facil" },
    { word: "GATO", hint: "Animal felino doméstico muy común.", difficulty: "facil" },
    { word: "PERRO", hint: "El mejor amigo del hombre.", difficulty: "facil" },
    { word: "MESA", hint: "Mueble con patas para apoyar cosas o comer.", difficulty: "facil" },
    { word: "LAPIZ", hint: "Instrumento para escribir o dibujar con grafito.", difficulty: "facil" },
    { word: "AGUA", hint: "Líquido vital sin olor ni sabor.", difficulty: "facil" },
    { word: "SOL", hint: "Estrella central de nuestro sistema solar.", difficulty: "facil" },
    { word: "LUNA", hint: "Satélite natural de la Tierra.", difficulty: "facil" },
    { word: "FLOR", hint: "Parte colorida de las plantas con semillas.", difficulty: "facil" },
    { word: "LIBRO", hint: "Conjunto de hojas encuadernadas con lectura.", difficulty: "facil" },
    { word: "AUTO", hint: "Vehículo automotor de cuatro ruedas para transporte.", difficulty: "facil" },
    { word: "TREN", hint: "Medio de transporte que circula sobre rieles.", difficulty: "facil" },
    { word: "PAN", hint: "Alimento básico hecho con harina y agua.", difficulty: "facil" },
    { word: "LECHE", hint: "Líquido nutritivo producido por mamíferos.", difficulty: "facil" },
    { word: "PERA", hint: "Fruta de forma ovalada, dulce y jugosa.", difficulty: "facil" },
    { word: "UVA", hint: "Fruta pequeña que crece en racimos.", difficulty: "facil" },
    { word: "ROJO", hint: "Color primario asociado al fuego y la pasión.", difficulty: "facil" },
    { word: "AZUL", hint: "Color del cielo despejado y del mar.", difficulty: "facil" },
    { word: "VERDE", hint: "Color de las hojas de los árboles y la hierba.", difficulty: "facil" },
    { word: "NARANJA", hint: "Fruta cítrica de color brillante y jugosa.", difficulty: "facil" },
    { word: "OSO", hint: "Mamífero grande y peludo de los bosques.", difficulty: "facil" },
    { word: "PATO", hint: "Ave acuática de pico ancho y plano.", difficulty: "facil" },
    { word: "PEZ", hint: "Animal vertebrado que vive exclusivamente en el agua.", difficulty: "facil" },
    { word: "BOCA", hint: "Cavidad por donde nos alimentamos y hablamos.", difficulty: "facil" },
    { word: "MANO", hint: "Parte del cuerpo situada en el extremo del brazo.", difficulty: "facil" },
    { word: "PIE", hint: "Parte inferior de la extremidad con la que caminamos.", difficulty: "facil" },
    { word: "SILLA", hint: "Mueble diseñado para que una persona se siente.", difficulty: "facil" },
    { word: "PUERTA", hint: "Abertura para entrar o salir de un lugar.", difficulty: "facil" },
    { word: "RELOJ", hint: "Instrumento para medir el tiempo o las horas.", difficulty: "facil" },
    { word: "BOTA", hint: "Calzado que cubre el pie y parte de la pierna.", difficulty: "facil" },
    { word: "ROPA", hint: "Conjunto de prendas para vestir y abrigar.", difficulty: "facil" },
    { word: "OJO", hint: "Órgano principal del sentido de la vista.", difficulty: "facil" },
    { word: "JUEGO", hint: "Actividad recreativa para divertirse o entretenerse.", difficulty: "facil" },
    { word: "BOLSA", hint: "Recipiente flexible para transportar cosas.", difficulty: "facil" },
    { word: "LUZ", hint: "Claridad que hace visibles los objetos.", difficulty: "facil" },
    { word: "MAR", hint: "Gran masa de agua salada que cubre la Tierra.", difficulty: "facil" },
    { word: "RIO", hint: "Corriente natural de agua continua.", difficulty: "facil" },
    { word: "NUBE", hint: "Acumulación de vapor de agua en la atmósfera.", difficulty: "facil" },
    { word: "VINO", hint: "Bebida alcohólica obtenida de la fermentación de la uva.", difficulty: "facil" },
    { word: "TAZA", hint: "Recipiente pequeño con asa para líquidos calientes.", difficulty: "facil" },
    { word: "SAL", hint: "Condimento blanco y cristalino usado en la comida.", difficulty: "facil" },
    { word: "VASO", hint: "Recipiente cilíndrico para beber líquidos.", difficulty: "facil" },
    { word: "PLATO", hint: "Recipiente plano o hondo para servir la comida.", difficulty: "facil" },
    { word: "CUCHARA", hint: "Utensilio con parte cóncava para comer líquidos.", difficulty: "facil" },
    { word: "TENEDOR", hint: "Utensilio con púas para pinchar y comer alimentos.", difficulty: "facil" },
    { word: "CAMA", hint: "Mueble para dormir o descansar acostado.", difficulty: "facil" },
    { word: "LLUVIA", hint: "Agua que cae de las nubes en gotas.", difficulty: "facil" },
    { word: "VIENTO", hint: "Corriente de aire producida en la atmósfera.", difficulty: "facil" },
    { word: "FUEGO", hint: "Calor y luz producidos por la combustión.", difficulty: "facil" },
    { word: "TIERRA", hint: "Planeta donde vivimos y suelo cultivable.", difficulty: "facil" },
    { word: "HOJA", hint: "Parte verde y delgada de las plantas o de papel.", difficulty: "facil" },
    { word: "ARBOL", hint: "Planta de tronco leñoso, alto y ramificado.", difficulty: "facil" },
    { word: "FRUTA", hint: "Alimento comestible que dan las plantas y árboles.", difficulty: "facil" },
    { word: "MANZANA", hint: "Fruta redonda, crujiente, roja o verde.", difficulty: "facil" },
    { word: "PLATANO", hint: "Fruta alargada, curvada y de piel amarilla.", difficulty: "facil" },
    { word: "FRESA", hint: "Fruta pequeña, roja y con pequeñas semillas fuera.", difficulty: "facil" },
    { word: "LIMON", hint: "Fruta cítrica, ovalada y de sabor muy ácido.", difficulty: "facil" },
    { word: "CARNE", hint: "Tejido muscular de los animales usado como alimento.", difficulty: "facil" },
    { word: "POLLO", hint: "Ave doméstica muy criada para su consumo.", difficulty: "facil" },
    { word: "HUEVO", hint: "Alimento con cáscara producido por aves.", difficulty: "facil" },
    { word: "QUESO", hint: "Producto lácteo sólido elaborado con leche cuajada.", difficulty: "facil" },
    { word: "MANTECA", hint: "Producto graso obtenido de la leche.", difficulty: "facil" },
    { word: "ARROZ", hint: "Cereal en grano muy consumido en todo el mundo.", difficulty: "facil" },
    { word: "SOPA", hint: "Plato de comida líquida con caldo e ingredientes.", difficulty: "facil" },
    { word: "JUGO", hint: "Líquido extraído de las frutas o vegetales.", difficulty: "facil" },
    { word: "CAFE", hint: "Bebida oscura y estimulante obtenida de granos tostados.", difficulty: "facil" },
    { word: "CAMISA", hint: "Prenda de vestir que cubre el torso.", difficulty: "facil" },
    { word: "FALDA", hint: "Prenda de vestir que cuelga desde la cintura.", difficulty: "facil" },
    { word: "GORRA", hint: "Prenda para cubrir la cabeza, generalmente con visera.", difficulty: "facil" },
    { word: "BOLSO", hint: "Accesorio para llevar objetos personales.", difficulty: "facil" },
    { word: "LLAVE", hint: "Pieza metálica para abrir y cerrar cerraduras.", difficulty: "facil" },
    { word: "VENTANA", hint: "Abertura en la pared para iluminar y ventilar.", difficulty: "facil" },
    { word: "PISO", hint: "Superficie sobre la que se camina dentro de un edificio.", difficulty: "facil" },
    { word: "TECHO", hint: "Parte superior que cubre una construcción.", difficulty: "facil" },
    { word: "MURO", hint: "Pared gruesa que protege o divide un espacio.", difficulty: "facil" },
    { word: "PATIO", hint: "Zona exterior descubierta dentro de una casa.", difficulty: "facil" },
    { word: "JARDIN", hint: "Terreno donde se cultivan flores y plantas.", difficulty: "facil" },
    { word: "CALLE", hint: "Vía pública urbana para el tránsito.", difficulty: "facil" },
    { word: "MOTO", hint: "Vehículo de dos ruedas con motor.", difficulty: "facil" },
    { word: "BICI", hint: "Vehículo de dos ruedas impulsado por pedales.", difficulty: "facil" },
    { word: "BARCO", hint: "Embarcación grande para navegar por el agua.", difficulty: "facil" },
    { word: "AVION", hint: "Vehículo con alas para volar por el aire.", difficulty: "facil" },
    { word: "PAPEL", hint: "Hoja delgada hecha con pasta de fibras vegetales.", difficulty: "facil" },
    { word: "TINTA", hint: "Líquido de color usado para escribir o imprimir.", difficulty: "facil" },
    { word: "GOMA", hint: "Objeto de caucho para borrar trazos de lápiz.", difficulty: "facil" },
    { word: "REGLA", hint: "Instrumento plano y alargado para medir o trazar líneas.", difficulty: "facil" },
    { word: "TIJERA", hint: "Herramienta con dos cuchillas para cortar.", difficulty: "facil" },
    { word: "CARTA", hint: "Mensaje escrito que se envía a alguien.", difficulty: "facil" },
    { word: "SOBRE", hint: "Cubierta de papel para guardar cartas o documentos.", difficulty: "facil" },
    { word: "RADIO", hint: "Aparato para recibir señales de audio a distancia.", difficulty: "facil" },
    { word: "CABLE", hint: "Hilo conductor de electricidad o señales.", difficulty: "facil" },
    { word: "PILA", hint: "Dispositivo que almacena y genera energía portátil.", difficulty: "facil" },
    { word: "FOCO", hint: "Bombilla o fuente de luz artificial.", difficulty: "facil" },
    { word: "ANILLO", hint: "Aro metálico que se usa como adorno en el dedo.", difficulty: "facil" },
    { word: "COLLAR", hint: "Adorno que se lleva alrededor del cuello.", difficulty: "facil" },
    { word: "GAFAS", hint: "Lentes con armazón para corregir la vista o proteger del sol.", difficulty: "facil" },
    { word: "GORRO", hint: "Prenda de lana o tela para abrigar la cabeza.", difficulty: "facil" },
    { word: "BUFANDA", hint: "Prenda larga para abrigar el cuello.", difficulty: "facil" },
    { word: "GUANTE", hint: "Prenda para cubrir y abrigar la mano.", difficulty: "facil" },
    { word: "MEDIA", hint: "Prenda corta o larga que cubre el pie y la pierna.", difficulty: "facil" },
    { word: "ZAPATO", hint: "Calzado que protege y cubre el pie.", difficulty: "facil" },
    { word: "VACA", hint: "Mamífero rumiante que produce leche y carne.", difficulty: "facil" },
    { word: "TORO", hint: "Macho adulto de la vaca.", difficulty: "facil" },
    { word: "CABALLO", hint: "Mamífero equino veloz usado para montar o carga.", difficulty: "facil" },
    { word: "OVEJA", hint: "Mamífero rumiante productor de lana.", difficulty: "facil" },
    { word: "CABRA", hint: "Mamífero rumiante ágil con cuernos curvos.", difficulty: "facil" },
    { word: "CERDO", hint: "Mamífero de cuerpo pesado criado por su carne.", difficulty: "facil" },
    { word: "GALLO", hint: "Ave de corral masculina que canta al amanecer.", difficulty: "facil" },
    { word: "GALLINA", hint: "Ave de corral que pone huevos.", difficulty: "facil" },
    { word: "RANA", hint: "Anfibio sin cola, saltador y de piel húmeda.", difficulty: "facil" },
    { word: "SAPO", hint: "Anfibio anuro de piel verrugosa y terrestre.", difficulty: "facil" },
    { word: "TIBURON", hint: "Pez marino cartilaginoso de gran tamaño y predador.", difficulty: "facil" },
    { word: "BALLENA", hint: "Gran mamífero marino filtrador de plancton.", difficulty: "facil" },
    { word: "DELFIN", hint: "Mamífero marino muy inteligente y sociable.", difficulty: "facil" },
    { word: "PULPO", hint: "Molusco marino con ocho tentáculos y ventosas.", difficulty: "facil" },
    { word: "CANGREJO", hint: "Crustáceo de cuerpo ancho y pinzas delanteras.", difficulty: "facil" },

    // --- MEDIAS ---
    { word: "ESCUELA", hint: "Institución destinada a la enseñanza y aprendizaje.", difficulty: "medio" },
    { word: "HOSPITAL", hint: "Centro médico para atención y cura de enfermos.", difficulty: "medio" },
    { word: "TELEFONO", hint: "Aparato para hablar a distancia con otra persona.", difficulty: "medio" },
    { word: "GUITARRA", hint: "Instrumento musical de cuerda pulsada.", difficulty: "medio" },
    { word: "PLANETA", hint: "Cuerpo celeste que gira alrededor de una estrella.", difficulty: "medio" },
    { word: "ESTRELLA", hint: "Cuerpo celeste que brilla con luz propia.", difficulty: "medio" },
    { word: "MONTAÑA", hint: "Gran elevación natural del terreno.", difficulty: "medio" },
    { word: "FAMILIA", hint: "Grupo de personas unidas por parentesco.", difficulty: "medio" },
    { word: "AMISTAD", hint: "Relación de afecto y confianza entre personas.", difficulty: "medio" },
    { word: "ENERGIA", hint: "Capacidad de la materia para realizar un trabajo.", difficulty: "medio" },
    { word: "PARQUE", hint: "Terreno con plantas y árboles para recreo público.", difficulty: "medio" },
    { word: "CIUDAD", hint: "Población grande con intensa actividad comercial.", difficulty: "medio" },
    { word: "BANDERA", hint: "Tela de colores distintivos que representa a una nación.", difficulty: "medio" },
    { word: "BIBLIOTECA", hint: "Lugar donde se guardan y prestan libros.", difficulty: "medio" },
    { word: "BOMBERO", hint: "Persona dedicada a apagar incendios y rescatar personas.", difficulty: "medio" },
    { word: "MEDICO", hint: "Profesional de la salud que diagnostica y trata enfermos.", difficulty: "medio" },
    { word: "PROFESOR", hint: "Persona que enseña una ciencia, arte u oficio.", difficulty: "medio" },
    { word: "PIRAMIDE", hint: "Construcción monumental de base poligonal y caras triangulares.", difficulty: "medio" },
    { word: "VOLCAN", hint: "Abertura en la corteza terrestre por donde sale lava.", difficulty: "medio" },
    { word: "CASCADA", hint: "Caída de agua desde cierta altura por un desnivel.", difficulty: "medio" },
    { word: "DESIERTO", hint: "Lugar árido con escasas precipitaciones y vegetación.", difficulty: "medio" },
    { word: "AURORA", hint: "Fenómeno luminoso en el cielo nocturno polar.", difficulty: "medio" },
    { word: "BRUJULA", hint: "Instrumento de orientación con aguja imantada hacia el norte.", difficulty: "medio" },
    { word: "MICROSCOPIO", hint: "Instrumento óptico para ver objetos muy pequeños.", difficulty: "medio" },
    { word: "TELESCOPIO", hint: "Instrumento para observar objetos lejanos del espacio.", difficulty: "medio" },
    { word: "BATERIA", hint: "Instrumento musical de percusión o acumulador eléctrico.", difficulty: "medio" },
    { word: "ACUARIO", hint: "Depósito de agua para criar animales y plantas acuáticas.", difficulty: "medio" },
    { word: "FARMACIA", hint: "Establecimiento donde se venden medicamentos.", difficulty: "medio" },
    { word: "MUSEO", hint: "Lugar donde se exponen colecciones de objetos de arte o historia.", difficulty: "medio" },
    { word: "TEATRO", hint: "Edificio destinado a la representación de obras dramáticas.", difficulty: "medio" },
    { word: "ESTADIO", hint: "Recinto deportivo grande para partidos y eventos.", difficulty: "medio" },
    { word: "HOTEL", hint: "Establecimiento de hostelería que ofrece alojamiento.", difficulty: "medio" },
    { word: "MERCADO", hint: "Sitio público destinado a la venta de provisiones.", difficulty: "medio" },
    { word: "OFICINA", hint: "Lugar donde se realizan trabajos administrativos o de gestión.", difficulty: "medio" },
    { word: "FABRICA", hint: "Establecimiento industrial con maquinaria para transformar materias.", difficulty: "medio" },
    { word: "PUENTE", hint: "Construcción que permite cruzar un río o hondonada.", difficulty: "medio" },
    { word: "TUNEL", hint: "Pasadizo subterráneo abierto para atravesar un obstáculo.", difficulty: "medio" },
    { word: "CASTILLO", hint: "Edificio fortificado rodeado de murallas y torres.", difficulty: "medio" },
    { word: "PALACIO", hint: "Residencia grande y lujosa de reyes o gobernantes.", difficulty: "medio" },
    { word: "IGLESIA", hint: "Templo cristiano destinado al culto religioso.", difficulty: "medio" },
    { word: "PIRATA", hint: "Ladrón que roba en el mar atacando barcos.", difficulty: "medio" },
    { word: "MAGIA", hint: "Arte de producir efectos sobrenaturales o ilusiones.", difficulty: "medio" },
    { word: "PAYASO", hint: "Personaje cómico de circo con ropa llamativa.", difficulty: "medio" },
    { word: "CIRCO", hint: "Espectáculo itinerante con acróbatas, payasos y animales.", difficulty: "medio" },
    { word: "FIESTA", hint: "Reunión de gente para celebrar un acontecimiento.", difficulty: "medio" },
    { word: "MUSICA", hint: "Arte de combinar los sonidos armónicamente.", difficulty: "medio" },
    { word: "POESIA", hint: "Composición literaria en verso que expresa belleza.", difficulty: "medio" },
    { word: "CUENTO", hint: "Narración breve de un suceso ficticio o real.", difficulty: "medio" },
    { word: "PINTURA", hint: "Obra de arte hecha con colores sobre una superficie.", difficulty: "medio" },
    { word: "CAMARA", hint: "Dispositivo para capturar imágenes o videos.", difficulty: "medio" },
    { word: "OCEANO", hint: "Vasta extensión de agua salada en la superficie terrestre.", difficulty: "medio" },
    { word: "CIENCIA", hint: "Conjunto de conocimientos obtenidos mediante la observación.", difficulty: "medio" },
    { word: "HISTORIA", hint: "Disciplina que estudia los acontecimientos pasados.", difficulty: "medio" },
    { word: "MAQUINA", hint: "Conjunto de elementos para realizar un trabajo.", difficulty: "medio" },
    { word: "PUEBLO", hint: "Población rural pequeña de pocos habitantes.", difficulty: "medio" },
    { word: "ESPEJO", hint: "Superficie pulida que refleja la luz y las imágenes.", difficulty: "medio" },
    { word: "COCINA", hint: "Lugar de la casa donde se preparan alimentos.", difficulty: "medio" },
    { word: "BOLIGRAFO", hint: "Instrumento con tinta para escribir en papel.", difficulty: "medio" },
    { word: "PARED", hint: "Obra de fábrica vertical que cierra un espacio.", difficulty: "medio" },
    { word: "CAMINO", hint: "Franja de terreno utilizada para transitar.", difficulty: "medio" },

    // --- DIFÍCILES ---
    { word: "CONSTITUCION", hint: "Ley fundamental que fija los derechos y deberes de un Estado.", difficulty: "dificil" },
    { word: "ARQUITECTURA", hint: "Arte y técnica de proyectar y construir edificios.", difficulty: "dificil" },
    { word: "FOTOSINTESIS", hint: "Proceso químico mediante el cual las plantas generan su alimento.", difficulty: "dificil" },
    { word: "METEORITO", hint: "Fragmento de cuerpo celeste que impacta contra la Tierra.", difficulty: "dificil" },
    { word: "PSICOLOGIA", hint: "Ciencia que estudia los procesos mentales y el comportamiento.", difficulty: "dificil" },
    { word: "TERMODINAMICA", hint: "Rama de la física que estudia el calor y la energía.", difficulty: "dificil" },
    { word: "RADIOGRAFIA", hint: "Imagen interna del cuerpo obtenida mediante rayos X.", difficulty: "dificil" },
    { word: "ALEATORIEDAD", hint: "Cualidad de estar sujeto al azar o la probabilidad.", difficulty: "dificil" },
    { word: "ORNITORRINCO", hint: "Mamífero acuático ovíparo de hocico similar al pato.", difficulty: "dificil" },
    { word: "ESDRUJULA", hint: "Palabra cuya sílaba tónica es la antepenúltima.", difficulty: "dificil" },
    { word: "IDIOSINCRASIA", hint: "Rasgos y carácter peculiar de un individuo o colectividad.", difficulty: "dificil" },
    { word: "PARADIGMA", hint: "Ejemplo o modelo de algo complejo.", difficulty: "dificil" },
    { word: "RESILIENCIA", hint: "Capacidad humana para superar circunstancias adversas.", difficulty: "dificil" },
    { word: "CIRCUNFERENCIA", hint: "Curva cerrada cuyos puntos equidistan del centro.", difficulty: "dificil" },
    { word: "CONSTELACION", hint: "Agrupación convencional de estrellas en el cielo nocturno.", difficulty: "dificil" },
    { word: "BIOINFORMATICA", hint: "Aplicación de la tecnología computacional a la biología.", difficulty: "dificil" },
    { word: "CRIPTOGRAFIA", hint: "Técnica para cifrar mensajes y proteger información.", difficulty: "dificil" },
    { word: "NEUROCIENCIA", hint: "Conjunto de disciplinas que estudian el sistema nervioso.", difficulty: "dificil" },
    { word: "SOFISTICADO", hint: "Refinado, complejo o avanzado técnicamente.", difficulty: "dificil" },
    { word: "INMUTABILIDAD", hint: "Cualidad de no cambiar ni poder ser cambiado.", difficulty: "dificil" },
    { word: "SUBCONSCIENTE", hint: "Contenido mental que está por debajo de la conciencia.", difficulty: "dificil" },
    { word: "MAGNETISMO", hint: "Fenómeno físico por el cual los materiales ejercen fuerza de atracción.", difficulty: "dificil" },
    { word: "ELECTROMAGNETICO", hint: "Relativo a la interacción de campos eléctricos y magnéticos.", difficulty: "dificil" },
    { word: "PALEONTOLOGIA", hint: "Ciencia que estudia los seres orgánicos fósiles.", difficulty: "dificil" },
    { word: "CLIMATOLOGIA", hint: "Estudio científico del clima y sus variaciones.", difficulty: "dificil" },
    { word: "EPIDEMIOLOGIA", hint: "Estudio de la propagación y control de enfermedades.", difficulty: "dificil" },
    { word: "BIODIVERSIDAD", hint: "Variedad de especies animales y vegetales en el planeta.", difficulty: "dificil" },
    { word: "NANOTECNOLOGIA", hint: "Tecnología que manipula la materia a escala nanométrica.", difficulty: "dificil" },
    { word: "ANTROPOLOGIA", hint: "Ciencia que estudia al ser humano de forma integral.", difficulty: "dificil" },
    { word: "INSTANTANEO", hint: "Que ocurre o se hace en un tiempo brevísimo.", difficulty: "dificil" },
    { word: "COMPATIBILIDAD", hint: "Capacidad de sistemas o personas para coexistir o funcionar juntos.", difficulty: "dificil" },
    { word: "TRANSFORMACION", hint: "Acción o proceso de cambiar de forma o aspecto.", difficulty: "dificil" },
    { word: "SOBERANIA", hint: "Autoridad suprema del poder público de un Estado.", difficulty: "dificil" },
    { word: "JURISPRUDENCIA", hint: "Conjunto de las sentencias de los tribunales y doctrina.", difficulty: "dificil" },
    { word: "INCONSTITUCIONAL", hint: "Que va en contra de la ley fundamental de un Estado.", difficulty: "dificil" },
    { word: "DESCENTRALIZAR", hint: "Transferir funciones de una autoridad central a locales.", difficulty: "dificil" },
    { word: "ORGANIZACION", hint: "Asociación de personas estructurada para un fin.", difficulty: "dificil" },
    { word: "CARACTERISTICA", hint: "Cualidad que determina y distingue a algo o alguien.", difficulty: "dificil" },
    { word: "ESPECIFICACION", hint: "Detalle preciso de las cualidades de un objeto.", difficulty: "dificil" },
    { word: "HISTORIOGRAFIA", hint: "Conjunto de técnicas y métodos para escribir historia.", difficulty: "dificil" },
    { word: "IMPRESCINDIBLE", hint: "Dicho de algo de lo que no se puede prescindir; necesario.", difficulty: "dificil" },
    { word: "VIDEOSISTEMA", hint: "Sistema de procesamiento y transmisión de vídeo.", difficulty: "dificil" },
    { word: "MULTIDIMENSIONAL", hint: "Que tiene múltiples dimensiones o aspectos.", difficulty: "dificil" },
    { word: "GEOMORFOLOGIA", hint: "Rama de la geografía que estudia las formas de la tierra.", difficulty: "dificil" },
    { word: "BIOQUIMICA", hint: "Ciencia que estudia la química de los seres vivos.", difficulty: "dificil" },
    { word: "RADIOCOMUNICACION", hint: "Comunicación inalámbrica mediante ondas electromagnéticas.", difficulty: "dificil" },
    { word: "SUPERCONDUCTOR", hint: "Material que no presenta resistencia eléctrica al frío extremo.", difficulty: "dificil" },
    { word: "MICROORGANISMO", hint: "Organismo diminuto visible solo con microscopio.", difficulty: "dificil" },
    { word: "FOTORRESISTENCIA", hint: "Componente electrónico cuya resistencia varía según la luz que recibe.", difficulty: "dificil" },
    { word: "INFRAESTRUCTURA", hint: "Conjunto de medios técnicos e instalaciones básicos de una organización.", difficulty: "dificil" },
    { word: "UNIVERSIDAD", hint: "Institución de educación superior y obtención de títulos.", difficulty: "dificil" },
    { word: "ASTRONAUTA", hint: "Persona que viaja al espacio exterior.", difficulty: "dificil" },
    { word: "COINCIDENCIA", hint: "Ocurrencia de eventos en el mismo momento por azar.", difficulty: "dificil" },
    { word: "INCONSCIENTE", hint: "Parte de la mente inaccesible al pensamiento consciente.", difficulty: "dificil" },
    { word: "VERTIGINOSO", hint: "Que se hace con mucha rapidez o causa vértigo.", difficulty: "dificil" },
    { word: "FULGOR", hint: "Luz intensa, brillo o resplandor llamativo.", difficulty: "dificil" },
    { word: "PERSPICACIA", hint: "Agudeza mental para percibir y comprender las cosas.", difficulty: "dificil" },
    { word: "ESTALACTITA", hint: "Formación de roca colgante en el techo de cuevas.", difficulty: "dificil" },
    { word: "FOSFORESCENTE", hint: "Que emite luz en la oscuridad tras recibir energía.", difficulty: "dificil" },
    { word: "IDIOMATICO", hint: "Relativo a las particularidades de una lengua.", difficulty: "dificil" }
];


/* =========================================================================
   VARIABLES GLOBALES Y ESTADO DEL JUEGO
   ========================================================================= */
let gameConfig = {
    level: "medio",
    mode: "libre",
    sound: true
};

let remainingWords = { facil: [], medio: [], dificil: [] };
let selectedObj = {};
let guessedLetters = [];
let lives = 6;
let maxLives = 6;
let gameOver = false;
let timerInterval = null;
let timeLeft = 45;
let inactivityTimer = null;
let wordsWonCount = 0; 

// Inicialización automática al cargar la ventana
window.onload = function() {
    createKeyboard();
};

/* =========================================================================
   CONFIGURACIÓN DE INICIO (Nivel, Modo y Arranque)
   ========================================================================= */
function selectLevel(level) {
    gameConfig.level = level;
    document.querySelectorAll('#level-group .option-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });
}

function selectMode(mode) {
    gameConfig.mode = mode;
    document.querySelectorAll('#mode-group .option-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
}

function startGame() {
    wordsWonCount = 0; 
    remainingWords = { facil: [], medio: [], dificil: [] };
    
    // Asignación de vidas según dificultad seleccionada
    if (gameConfig.level === 'facil') maxLives = 8;
    else if (gameConfig.level === 'medio') maxLives = 6;
    else if (gameConfig.level === 'dificil') maxLives = 4;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    initRound();
}

/* =========================================================================
   SELECCIÓN DE PALABRAS (Sin repetir en la misma ronda)
   ========================================================================= */
function getNextWord() {
    const level = gameConfig.level;
    if (!remainingWords[level] || remainingWords[level].length === 0) {
        remainingWords[level] = words.filter(w => w.difficulty === level);
    }
    if (remainingWords[level].length === 0) {
        remainingWords[level] = [...words];
    }
    const randomIndex = Math.floor(Math.random() * remainingWords[level].length);
    return remainingWords[level].splice(randomIndex, 1)[0];
}

/* =========================================================================
   CONTROL DE RONDA
   ========================================================================= */
function initRound() {
    clearInterval(timerInterval);
    if (inactivityTimer) clearTimeout(inactivityTimer);

    if (wordsWonCount >= 5) {
        showVictoryModal();
        return;
    }

    selectedObj = getNextWord();
    guessedLetters = [];
    lives = maxLives;
    gameOver = false;

    // Limpia el contenedor de mensajes (desactiva el sello visual hasta que reciba texto)
    document.getElementById('message-container').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('hint-btn').style.display = 'block';
    document.getElementById('hint-text').textContent = `💡 Pista: ${selectedObj.hint}`;

    // Habilitar teclas del teclado virtual
    const keys = document.querySelectorAll('.key-btn');
    keys.forEach(btn => btn.disabled = false);

    updateUI();
    resetInactivityTimer();

    // Lógica del modo Crono
    if (gameConfig.mode === 'crono') {
        timeLeft = gameConfig.level === 'dificil' ? 30 : 45;
        document.getElementById('timer-display').classList.remove('hidden');
        document.getElementById('timer-display').innerHTML = `<span class="icon-shadow">⏱️</span> ${timeLeft}s`;
        
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('timer-display').innerHTML = `<span class="icon-shadow">⏱️</span> ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleTimeOut();
            }
        }, 1000);
    } else {
        document.getElementById('timer-display').classList.add('hidden');
    }
}

/* =========================================================================
   CREACIÓN DEL TECLADO VIRTUAL
   ========================================================================= */
function createKeyboard() {
    const keyboardContainer = document.getElementById('keyboard-container');
    if (!keyboardContainer) return;
    keyboardContainer.innerHTML = '';
    const alphabet = "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    alphabet.split('').forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'key-btn';
        btn.textContent = letter;
        btn.id = `key-${letter}`;
        btn.onclick = () => {
            handleGuess(letter);
            resetInactivityTimer();
        };
        keyboardContainer.appendChild(btn);
    });
}

/* =========================================================================
   PROCESAMIENTO DE INTENTOS Y ADIVINANZAS
   ========================================================================= */
function handleGuess(letter) {
    if (gameOver || guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    const btn = document.getElementById(`key-${letter}`);
    if (btn) btn.disabled = true;

    const cleanWord = selectedObj.word;

    if (cleanWord.includes(letter)) {
        playSound('success');
        if (checkWin()) {
            wordsWonCount++; 
            
            if (wordsWonCount >= 5) {
                // Inyecta texto para activar el estilo de sello por CSS en las 5 palabras
                document.getElementById('message-container').textContent = "🎉 ¡Completaste las 5 palabras!";
                endRound(true);
                
                const nextBtn = document.getElementById('next-btn');
                if (nextBtn) nextBtn.style.display = 'none';

                setTimeout(() => {
                    showVictoryModal();
                }, 600);
            } else {
                // Inyecta texto para activar el estilo de sello por CSS al acertar una palabra
                document.getElementById('message-container').textContent = "🎉 ¡Adivinaste la palabra!";
                endRound(true);
            }
        }
    } else {
        playSound('error');
        lives--;
        updateLivesDisplay();
        if (lives <= 0) {
            gameOver = true;
            document.getElementById('message-container').textContent = `❌ ¡Game Over! Era: ${selectedObj.word}`;
            revealWord();
            endRound(false);
        }
    }

    updateUI();
}

/* =========================================================================
   SISTEMA DE PISTAS Y TEMPORIZADOR DE INACTIVIDAD
   ========================================================================= */
function useHint() {
    if (gameOver || lives <= 1) return;
    
    const unrevealedLetters = selectedObj.word.split('').filter(letter => !guessedLetters.includes(letter));
    if (unrevealedLetters.length === 0) return;

    const randomLetter = unrevealedLetters[Math.floor(Math.random() * unrevealedLetters.length)];
    
    lives--;
    updateLivesDisplay();
    handleGuess(randomLetter);
    
    document.getElementById('hint-btn').style.display = 'none';
}

function resetInactivityTimer() {
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) hintBtn.classList.remove('pulse-neon');
    if (inactivityTimer) clearTimeout(inactivityTimer);
    
    inactivityTimer = setTimeout(() => {
        if (hintBtn && hintBtn.style.display !== 'none' && !gameOver) {
            hintBtn.classList.add('pulse-neon');
        }
    }, 15000); 
}

function handleTimeOut() {
    gameOver = true;
    playSound('error');
    document.getElementById('message-container').textContent = `⏳ ¡Se acabó el tiempo! Era: ${selectedObj.word}`;
    revealWord();
    endRound(false);
}

/* =========================================================================
   ACTUALIZACIÓN VISUAL DE LA INTERFAZ
   ========================================================================= */
function updateUI() {
    const wordContainer = document.getElementById('word-container');
    if (!wordContainer) return;
    wordContainer.innerHTML = '';

    selectedObj.word.split('').forEach(letter => {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        if (guessedLetters.includes(letter) || gameOver) {
            slot.textContent = letter;
            if (!guessedLetters.includes(letter) && gameOver) {
                slot.style.color = 'var(--danger)';
            }
        } else {
            slot.textContent = '_';
        }
        wordContainer.appendChild(slot);
    });

    updateLivesDisplay();
}

function updateLivesDisplay() {
    const livesDisplay = document.getElementById('lives-display');
    if (livesDisplay) {
        livesDisplay.innerHTML = `<span class="icon-shadow">❤️</span> ${lives}`;
    }
}

function checkWin() {
    return selectedObj.word.split('').every(letter => guessedLetters.includes(letter));
}

function revealWord() {
    gameOver = true;
    updateUI();
}

function endRound(won) {
    gameOver = true;
    clearInterval(timerInterval);
    if (inactivityTimer) clearTimeout(inactivityTimer);
    
    const keys = document.querySelectorAll('.key-btn');
    keys.forEach(btn => btn.disabled = true);
    
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) {
        hintBtn.style.display = 'none';
        hintBtn.classList.remove('pulse-neon');
    }
    
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn && wordsWonCount < 5) {
        nextBtn.style.display = 'block';
    }
}

/* =========================================================================
   MENÚS, NAVEGACIÓN Y UTILIDADES
   ========================================================================= */
function quitGame() {
    clearInterval(timerInterval);
    if (inactivityTimer) clearTimeout(inactivityTimer);
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    closeSettingsMenu();
}

function toggleSettingsMenu() {
    document.getElementById('settings-dropdown').classList.toggle('hidden');
}

function closeSettingsMenu() {
    document.getElementById('settings-dropdown').classList.add('hidden');
}

window.onclick = function(event) {
    if (!event.target.closest('.dropdown-wrapper')) {
        closeSettingsMenu();
    }
}

function openHelp() {
    document.getElementById('help-modal').classList.remove('hidden');
    closeSettingsMenu();
}

function closeHelp() {
    document.getElementById('help-modal').classList.add('hidden');
}

function toggleSound() {
    gameConfig.sound = !gameConfig.sound;
    const text = gameConfig.sound ? "🔊 Sonido: ON" : "🔇 Sonido: OFF";
    document.getElementById('sound-toggle-start').textContent = text;
    document.getElementById('sound-toggle-game').textContent = text;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log("Error al intentar pantalla completa:", err);
        });
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
    closeSettingsMenu();
}

/* =========================================================================
   EFECTOS DE AUDIO SINTETIZADO (Web Audio API)
   ========================================================================= */
function playSound(type) {
    if (!gameConfig.sound) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (type === 'success') {
            osc.frequency.setValueAtTime(440, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);
        } else if (type === 'error') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, audioCtx.currentTime);
            osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.2);
        }
    } catch (e) {}
}

/* =========================================================================
   CONTROL DE VICTORIA Y EFECTO CONFETI
   ========================================================================= */
function showVictoryModal() {
    const modal = document.getElementById('victory-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex'; 
    }
    startConfetti();
}

function returnToStartFromVictory() {
    const modal = document.getElementById('victory-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
    stopConfetti();
    quitGame(); 
}

function startConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#36831A', '#DBF438', '#C0EEFE', '#B5B0E3', '#d9534f', '#fbc02d'];
    
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 8 + 6) + 'px';
        confetti.style.height = (Math.random() * 8 + 6) + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        container.appendChild(confetti);
    }
}

function stopConfetti() {
    const container = document.getElementById('confetti-container');
    if (container) container.innerHTML = '';
}