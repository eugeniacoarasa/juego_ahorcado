/* =========================================================================
   BANCO DE 100 PALABRAS (Organizadas por dificultad: facil, medio, dificil)
   ========================================================================= */
const words = [
    // --- FÁCILES (40 palabras) ---
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

    // --- MEDIAS (30 palabras) ---
    { word: "VENTANA", hint: "Abertura en la pared para iluminar y ventilar.", difficulty: "medio" },
    { word: "ESCUELA", hint: "Institución destinada a la enseñanza y aprendizaje.", difficulty: "medio" },
    { word: "HOSPITAL", hint: "Centro médico para atención y cura de enfermos.", difficulty: "medio" },
    { word: "TELEFONO", hint: "Aparato para hablar a distancia con otra persona.", difficulty: "medio" },
    { word: "CAMARA", hint: "Dispositivo para capturar imágenes o videos.", difficulty: "medio" },
    { word: "GUITARRA", hint: "Instrumento musical de cuerda pulsada.", difficulty: "medio" },
    { word: "PLANETA", hint: "Cuerpo celeste que gira alrededor de una estrella.", difficulty: "medio" },
    { word: "ESTRELLA", hint: "Cuerpo celeste que brilla con luz propia.", difficulty: "medio" },
    { word: "OCEANO", hint: "Vasta extensión de agua salada en la superficie terrestre.", difficulty: "medio" },
    { word: "MONTAÑA", hint: "Gran elevación natural del terreno.", difficulty: "medio" },
    { word: "PINTURA", hint: "Obra de arte hecha con colores sobre una superficie.", difficulty: "medio" },
    { word: "MUSICA", hint: "Arte de combinar los sonidos de la voz y los instrumentos.", difficulty: "medio" },
    { word: "CIENCIA", hint: "Conjunto de conocimientos obtenidos mediante la observación.", difficulty: "medio" },
    { word: "HISTORIA", hint: "Disciplina que estudia los acontecimientos pasados.", difficulty: "medio" },
    { word: "FAMILIA", hint: "Grupo de personas unidas por parentesco.", difficulty: "medio" },
    { word: "AMISTAD", hint: "Relación de afecto y confianza entre personas.", difficulty: "medio" },
    { word: "ENERGIA", hint: "Capacidad de la materia para realizar un trabajo.", difficulty: "medio" },
    { word: "MAQUINA", hint: "Conjunto de elementos para realizar un trabajo.", difficulty: "medio" },
    { word: "PARQUE", hint: "Terreno con plantas y árboles para recreo público.", difficulty: "medio" },
    { word: "JARDIN", hint: "Terreno donde se cultivan flores y plantas ornamentales.", difficulty: "medio" },
    { word: "CIUDAD", hint: "Población grande con intensa actividad comercial.", difficulty: "medio" },
    { word: "PUEBLO", hint: "Población rural pequeña de pocos habitantes.", difficulty: "medio" },
    { word: "CAMISA", hint: "Prenda de vestir que cubre el torso y brazos.", difficulty: "medio" },
    { word: "ZAPATO", hint: "Calzado que protege y cubre el pie.", difficulty: "medio" },
    { word: "ESPEJO", hint: "Superficie pulida que refleja la luz y las imágenes.", difficulty: "medio" },
    { word: "COCINA", hint: "Lugar de la casa donde se preparan alimentos.", difficulty: "medio" },
    { word: "BOLIGRAFO", hint: "Instrumento con tinta para escribir en papel.", difficulty: "medio" },
    { word: "PARED", hint: "Obra de fábrica vertical que cierra un espacio.", difficulty: "medio" },
    { word: "CAMINO", hint: "Franja de terreno utilizada para transitar.", difficulty: "medio" },
    { word: "BANDERA", hint: "Tela de colores distintivos que representa a una nación.", difficulty: "medio" },

    // --- DIFÍCILES (30 palabras) ---
    { word: "CONSTITUCION", hint: "Ley fundamental que fija los derechos y deberes de un Estado.", difficulty: "dificil" },
    { word: "ARQUITECTURA", hint: "Arte y técnica de proyectar y construir edificios.", difficulty: "dificil" },
    { word: "FOTOSINTESIS", hint: "Proceso químico mediante el cual las plantas generan su alimento.", difficulty: "dificil" },
    { word: "METEORITO", hint: "Fragmento de cuerpo celeste que impacta contra la Tierra.", difficulty: "dificil" },
    { word: "PSICOLOGIA", hint: "Ciencia que estudia los procesos mentales y el comportamiento.", difficulty: "dificil" },
    { word: "UNIVERSIDAD", hint: "Institución de educación superior y obtención de títulos.", difficulty: "dificil" },
    { word: "BIBLIOTECA", hint: "Lugar donde se conservan y prestan libros.", difficulty: "dificil" },
    { word: "ASTRONAUTA", hint: "Persona que viaja al espacio exterior.", difficulty: "dificil" },
    { word: "TERMODINAMICA", hint: "Rama de la física que estudia el calor y la energía.", difficulty: "dificil" },
    { word: "RADIOGRAFIA", hint: "Imagen interna del cuerpo obtenida mediante rayos X.", difficulty: "dificil" },
    { word: "ALEATORIEDAD", hint: "Cualidad de estar sujeto al azar o la probabilidad.", difficulty: "dificil" },
    { word: "ORNITORRINCO", hint: "Mamífero acuático ovíparo de hocico similar al pato.", difficulty: "dificil" },
    { word: "ESDRUJULA", hint: "Palabra cuya sílaba tónica es la antepenúltima.", difficulty: "dificil" },
    { word: "IDIOSINCRASIA", hint: "Rasgos y carácter peculiar de un individuo o colectividad.", difficulty: "dificil" },
    { word: "PARADIGMA", hint: "Ejemplo o modelo de algo complejo.", difficulty: "dificil" },
    { word: "RESILIENCIA", hint: "Capacidad humana para superar circunstancias adversas.", difficulty: "dificil" },
    { word: "COINCIDENCIA", hint: "Ocurrencia de eventos en el mismo momento por azar.", difficulty: "dificil" },
    { word: "CIRCUNFERENCIA", hint: "Curva cerrada cuyos puntos equidistan del centro.", difficulty: "dificil" },
    { word: "CONSTELACION", hint: "Agrupación convencional de estrellas en el cielo nocturno.", difficulty: "dificil" },
    { word: "INCONSCIENTE", hint: "Parte de la mente inaccesible al pensamiento consciente.", difficulty: "dificil" },
    { word: "VERTIGINOSO", hint: "Que se hace con mucha rapidez o causa vértigo.", difficulty: "dificil" },
    { word: "FULGOR", hint: "Luz intensa, brillo o resplandor llamativo.", difficulty: "dificil" },
    { word: "PERSPICACIA", hint: "Agudeza mental para percibir y comprender las cosas.", difficulty: "dificil" },
    { word: "ESTALACTITA", hint: "Formación de roca colgante en el techo de cuevas.", difficulty: "dificil" },
    { word: "FOSFORESCENTE", hint: "Que emite luz en la oscuridad tras recibir energía.", difficulty: "dificil" },
    { word: "IDIOMATICO", hint: "Relativo a las particularidades de una lengua.", difficulty: "dificil" },
    { word: "BIOINFORMATICA", hint: "Aplicación de la tecnología computacional a la biología.", difficulty: "dificil" },
    { word: "CRIPTOGRAFIA", hint: "Técnica para cifrar mensajes y proteger información.", difficulty: "dificil" },
    { word: "NEUROCIENCIA", hint: "Conjunto de disciplinas que estudian el sistema nervioso.", difficulty: "dificil" },
    { word: "SOFISTICADO", hint: "Refinado, complejo o avanzado técnicamente.", difficulty: "dificil" }
];

/* =========================================================================
   VARIABLES Y CONFIGURACIÓN DEL JUEGO
   ========================================================================= */
let gameConfig = {
    level: "medio",
    mode: "libre",
    sound: true
};

let selectedObj = {};
let guessedLetters = [];
let lives = 6;
let maxLives = 6;
let gameOver = false;
let timerInterval = null;
let timeLeft = 45;
let inactivityTimer = null;

// Inicializa el teclado virtual al cargar la página
window.onload = function() {
    createKeyboard();
};

/* =========================================================================
   CONFIGURACIÓN DE INICIO (Nivel y Modo)
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
    // Asigna vidas según el nivel seleccionado
    if (gameConfig.level === 'facil') maxLives = 8;
    else if (gameConfig.level === 'medio') maxLives = 6;
    else if (gameConfig.level === 'dificil') maxLives = 4;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    initRound();
}

/* =========================================================================
   LÓGICA PRINCIPAL DE LA RONDA Y FILTRADO
   ========================================================================= */
function initRound() {
    clearInterval(timerInterval);
    if (inactivityTimer) clearTimeout(inactivityTimer);

    // FILTRO DE PALABRAS: Extrae solo las palabras que coinciden con el nivel elegido en el menú
    const filteredWords = words.filter(item => item.difficulty === gameConfig.level);
    
    // Escoge una palabra aleatoria de ese grupo filtrado
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    selectedObj = filteredWords[randomIndex];
    
    guessedLetters = [];
    lives = maxLives;
    gameOver = false;

    document.getElementById('message-container').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('hint-btn').style.display = 'block';
    document.getElementById('hint-text').textContent = `💡 Pista: ${selectedObj.hint}`;

    const keys = document.querySelectorAll('.key-btn');
    keys.forEach(btn => btn.disabled = false);

    updateUI();
    resetInactivityTimer();

    // Control del Modo Crono
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
    const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

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
   GESTIÓN DE LETRAS PULSADAS Y VALIDACIÓN
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
            document.getElementById('message-container').textContent = "🎉 ¡Adivinaste la palabra!";
            document.getElementById('message-container').style.color = "var(--success)";
            endRound(true);
        }
    } else {
        playSound('error');
        lives--;
        updateLivesDisplay();
        if (lives <= 0) {
            document.getElementById('message-container').textContent = `💀 ¡Game Over! Era: ${cleanWord}`;
            document.getElementById('message-container').style.color = "var(--danger)";
            endRound(false);
        }
    }

    updateUI();
}

/* =========================================================================
   SISTEMA DE PISTAS Y TEMPORIZADOR DE INACTIVIDAD (LATIDO)
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
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) hintBtn.classList.remove('pulse-neon');
}

function resetInactivityTimer() {
    const hintBtn = document.getElementById('hint-btn');
    
    if (hintBtn) {
        hintBtn.classList.remove('pulse-neon');
    }
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
    }
    inactivityTimer = setTimeout(() => {
        if (hintBtn && hintBtn.style.display !== 'none' && !gameOver) {
            hintBtn.classList.add('pulse-neon');
        }
    }, 15000); // Activa el efecto de latido tras 15 segundos sin pulsar nada
}

function handleTimeOut() {
    gameOver = true;
    playSound('error');
    document.getElementById('message-container').textContent = `⏳ ¡Se acabó el tiempo! Era: ${selectedObj.word}`;
    document.getElementById('message-container').style.color = "var(--danger)";
    revealWord();
    endRound(false);
}

/* =========================================================================
   ACTUALIZACIÓN DE INTERFAZ Y ESTADOS
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
    if (nextBtn) nextBtn.style.display = 'block';
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
    const dropdown = document.getElementById('settings-dropdown');
    dropdown.classList.toggle('hidden');
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
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
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