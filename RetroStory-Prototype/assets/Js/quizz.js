let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Pool de questions rétrogaming (inchangé)
const retrogamingQuestions = [
            {
                question: "Quel est le plombier le plus célèbre des jeux vidéo ?",
                answers: ["Wario", "Luigi", "Mario", "Sonic"],
                correct: 2
            },
            {
                question: "Dans quel jeu trouve-t-on le personnage de Link ?",
                answers: ["Final Fantasy", "Metroid", "The Legend of Zelda", "Mega Man"],
                correct: 2
            },
            {
                question: "Quelle console Nintendo est sortie en 1985 ?",
                answers: ["Game Boy", "Super Nintendo", "Nintendo Entertainment System", "Nintendo 64"],
                correct: 2
            },
            {
                question: "Quel est le nom du hérisson bleu de Sega ?",
                answers: ["Sonic", "Tails", "Knuckles", "Shadow"],
                correct: 0
            },
            {
                question: "Dans Pac-Man, comment s'appellent les fantômes ?",
                answers: ["Blinky, Pinky, Inky, Clyde", "Red, Blue, Pink, Orange", "Ghost1, Ghost2, Ghost3, Ghost4", "Spooky, Scary, Creepy, Eerie"],
                correct: 0
            },
            {
                question: "Quelle compagnie a créé la console Atari 2600 ?",
                answers: ["Nintendo", "Sega", "Atari", "Sony"],
                correct: 2
            },
            {
                question: "Dans quel jeu pilote-t-on un vaisseau spatial pour détruire des astéroïdes ?",
                answers: ["Space Invaders", "Asteroids", "Galaga", "Centipede"],
                correct: 1
            },
            {
                question: "Quel est le nom de la princesse que Mario doit sauver ?",
                answers: ["Zelda", "Peach", "Daisy", "Rosalina"],
                correct: 1
            },
            {
                question: "Dans Street Fighter, quel est le coup spécial le plus connu de Ryu ?",
                answers: ["Hadoken", "Shoryuken", "Tatsumaki", "Kikoken"],
                correct: 0
            },
            {
                question: "Quelle est la première console portable de Nintendo ?",
                answers: ["Game Boy", "Game Gear", "Lynx", "Neo Geo Pocket"],
                correct: 0
            },
            {
                question: "Dans Tetris, comment s'appelle la ligne complète qui disparaît ?",
                answers: ["Tetris", "Line", "Clear", "Drop"],
                correct: 0
            },
            {
                question: "Qui est le créateur de Pac-Man ?",
                answers: ["Shigeru Miyamoto", "Toru Iwatani", "Nolan Bushnell", "Gunpei Yokoi"],
                correct: 1
            },
            {
                question: "Dans quel jeu incarne-t-on Samus Aran ?",
                answers: ["Metroid", "Contra", "Mega Man", "Castlevania"],
                correct: 0
            },
            {
                question: "Quelle est la couleur du champignon qui donne une vie supplémentaire à Mario ?",
                answers: ["Rouge", "Vert", "Bleu", "Jaune"],
                correct: 1
            },
            {
                question: "Dans Donkey Kong, comment s'appelle le personnage que l'on contrôle ?",
                answers: ["Mario", "Jumpman", "Luigi", "Pauline"],
                correct: 1
            },
            {
                question: "Quel jeu Atari simulait le tennis de table ?",
                answers: ["Pong", "Tennis", "Paddle", "Ball"],
                correct: 0
            },
            {
                question: "Dans quel jeu combat-on des aliens qui descendent en formation ?",
                answers: ["Asteroids", "Space Invaders", "Galaga", "Defender"],
                correct: 1
            },
            {
                question: "Quelle console Sega a tenté de concurrencer la NES ?",
                answers: ["Master System", "Game Gear", "Saturn", "Dreamcast"],
                correct: 0
            },
            {
                question: "Dans Super Mario Bros., dans quel monde se trouve Bowser ?",
                answers: ["Monde 6", "Monde 7", "Monde 8", "Monde 9"],
                correct: 2
            },
            {
                question: "Dans quel jeu trouve-t-on les personnages Ryu et Chun-Li ?",
                answers: ["Tekken", "Street Fighter", "Mortal Kombat", "King of Fighters"],
                correct: 1
            },
            {
                question: "Dans Frogger, que doit éviter la grenouille ?",
                answers: ["Les voitures et l'eau", "Les serpents", "Les oiseaux", "Les chats"],
                correct: 0
            },
            {
                question: "Dans quel jeu combat-on avec un fouet contre des monstres ?",
                answers: ["Zelda", "Metroid", "Castlevania", "Contra"],
                correct: 2
            },
            {
                question: "Dans quel jeu Resident Evil incarne-t-on pour la première fois Leon S. Kennedy ?",
                answers: ["Resident Evil 4", "Resident Evil 3", "Resident Evil", "Resident Evil 2"],
                correct: 3
            },
            {
                question: "Dans Double Dragon, combien de frères combattent ensemble ?",
                answers: ["1", "2", "3", "4"],
                correct: 1
            },
            {
                question: "Dans quelle décennie Pong a-t-il été créé ?",
                answers: ["1960", "1970", "1980", "1990"],
                correct: 1
            }
        ];

async function chargerQuestions() {
    // Sélection aléatoire de 10 questions parmi les questions disponibles
    questions = obtenirQuestionsAleatoires(retrogamingQuestions, 10);
}

function obtenirQuestionsAleatoires(questionPool, count) {
    const melange = melangerTableau(questionPool);
    return melange.slice(0, count);
}

function melangerTableau(array) {
    const tableau = array.slice(); // copie du tableau original

    for (let i = tableau.length -1;i>0;i--) {
        const j = Math.floor(Math.random()*(i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }

    return tableau;
}

async function demarrerQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('chargement').style.display = 'block';

    await chargerQuestions();

    document.getElementById('chargement').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('scorequizz').textContent = "Score : " + score + " sur 10";
    afficherQuestion();
}

function afficherQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('compteur-question').textContent = "Question " + (currentQuestionIndex + 1) + "/10";
    document.getElementById('scorequizz').textContent = "Score : " + score + " sur 10";
    document.getElementById('texte-question').textContent = question.question;

    const conteneurReponses = document.getElementById('conteneur-reponses');
    conteneurReponses.innerHTML = '';

    const reponsesMelangees = question.answers.map(function (reponse, index) {
        return {
            texte: reponse,
            indexOriginal: index
        };
    });

    melangerTableau(reponsesMelangees);

    reponsesMelangees.forEach(function (reponse) {
        const bouton = document.createElement('button');
        bouton.className = 'bouton-reponse';
        bouton.textContent = reponse.texte;
        bouton.onclick = function () {
            selectionnerReponse(reponse.indexOriginal, bouton);
        };
        conteneurReponses.appendChild(bouton);
    });

    document.getElementById('bouton-suivant').style.display = 'none';
    selectedAnswer = null;
}

function selectionnerReponse(indexReponse, elementBouton){
    if(selectedAnswer != null) return;

    selectedAnswer = indexReponse;
    const question = questions[currentQuestionIndex];
    const bonneReponse = indexReponse == question.correct;

    const tousLesBoutons = document.querySelectorAll('.bouton-reponse');
    tousLesBoutons.forEach(function (btn) {
        btn.disabled = true;
        if(btn == elementBouton) {
            btn.classList.add(bonneReponse ? 'bonne-reponse' : 'mauvaise-reponse');
        }else if(btn.textContent == question.answers[question.correct]) {
            btn.classList.add('bonne-reponse');
        }
    });

    if(bonneReponse){
        score++;
    }

    document.getElementById('scorequizz').textContent = "Score : " + score + " sur 10";
    document.getElementById('bouton-suivant').style.display = 'block';
}

function questionSuivante(){
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length){
        afficherQuestion();
    }else{
        afficherResultats();
    }
}

function afficherResultats(){
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('resultats').style.display = 'block';

    document.getElementById('score-final').textContent = "Score Final : " + score + " sur 10";

    let message = "";
    const pourcentage = (score / 10) * 100;

    if(pourcentage >= 90) {
        message = "Maître du Rétrogaming ! Vous êtes un véritable expert !";
    }else if(pourcentage >= 70) {
        message = "Excellent ! Vous connaissez bien vos classiques !";
    }else if(pourcentage >= 50) {
        message = "Pas mal ! Il vous reste encore quelques jeux à découvrir !";
    }else{
        message = "Il est temps de réviser vos classiques du jeu vidéo !";
    }

    document.getElementById('message-performance').textContent = message;
}

function recommencerQuiz() {
    document.getElementById('resultats').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
}