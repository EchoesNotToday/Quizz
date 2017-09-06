var currentQuestion = 0;
//var total = question.length;

var questions = [{
        "question": "Kaamelott: Elle est où la poulette ?",
        "answer1": "Elle est bien cachée ?!",
        "answer2": "Pas du tout les lapins, les lapins c'est gentils",
        "answer3": "Obi-Wan Kenobi",
        "answer4": "dans le poulailler voyons !",
        "correctAnswer": "1"
    },
    {
        "question": "Mathématiques: 2x2 ?",
        "answer1": "42",
        "answer2": "Je prends la main.",
        "answer3": "Obi-Wan Kenobi",
        "answer4": "D la réponse D.",
        "correctAnswer": "4"
    },
    {
        "question": "Latin: Traduisez cette locution latine: 'Mundi placet et spiritus minima'",
        "answer1": "Really ?!",
        "answer2": "C'est à dire que le latin j'ai arrêté en 4ème...",
        "answer3": "Le roseau plie mais ne cède qu'en cas de pépin (d'après François Rollin)",
        "answer4": "Obi-Wan Kenobi",
        "correctAnswer": "3"
    },
    {
        "question": "Musique: Lequel de ces groupes de musique a participé au festival Rock en Seine sous le nom 'Les Petits Pois' ?",
        "answer1": "Eagles of Death Metal",
        "answer2": "Them Crooked Vultures",
        "answer3": "Queens of the Stone Age",
        "answer4": "Foo Fighters",
        "correctAnswer": "2"
    },
    {
        "question": "Quelle chanson de Queen est interprétée au début du film Wayne's World ?",
        "answer1": "Show Must Go On",
        "answer2": "We Are The Champions",
        "answer3": "Death On Two Legs",
        "answer4": "Bohemian Rhapsody",
        "correctAnswer": "4"
    },
    {
        "question": "Musique: Quel était la guitare de prédilection de Jimmy Hendrix ?",
        "answer1": "Gibson LesPaul",
        "answer2": "Fender Telecaster",
        "answer3": "Fender Stratocaster",
        "answer4": "C'est qui Jimmy Hendrix ?",
        "correctAnswer": "3"
    },
    {
        "question": "Musique: Quel groupe est composé d'anciens membres de Nirvana, Led Zeppelin et Queens of the Stone Age ?",
        "answer1": "Foo Fighters",
        "answer2": "Eagles of Death Metal",
        "answer3": "Portishead",
        "answer4": "Them Crooked Vultures",
        "correctAnswer": "4"
    },
    {
        "question": "Monty Python: Pendant l'entracte de leur spectacle à Hollywood, quels animaux sont vendus dans les allées ?",
        "answer1": "des chats",
        "answer2": "des mésanges",
        "answer3": "des albatros",
        "answer4": "des perroquets",
        "correctAnswer": "3"
    },
    {
        "question": "E-sport: Quelle équipe de Dota2 a gagné cette année The International ?",
        "answer1": "Team Liquid",
        "answer2": "Natus Vincere",
        "answer3": "Cloud9",
        "answer4": "Team Secret",
        "correctAnswer": "1"
    },
    {
        "question": "Biologie: Quel fruit est-il interdit de consommer dans les lieux publics en Asie ?",
        "answer1": "la mangue",
        "answer2": "le litchi",
        "answer3": "la banane",
        "answer4": "le durian",
        "correctAnswer": "4"
    },
    ];

var ask = document.getElementById('ask');

var ch1 = document.getElementById('choice1');
var ch2 = document.getElementById('choice2');
var ch3 = document.getElementById('choice3');
var ch4 = document.getElementById('choice4');

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');


function load(questionIndex) {

    var i = questions[questionIndex];
    ask.textContent = (questionIndex + 1) + '. ' + i.question;
    ch1.textContent = i.answer1;
    ch2.textContent = i.answer2;
    ch3.textContent = i.answer3;
    ch4.textContent = i.answer4;
}

function checkAnswer() {
    var selectedChoice = document.querySelector('input[type=radio]:checked');
    var answer = selectedChoice.value;
    if (questions[currentQuestion].correctAnswer == answer) {
        document.getElementById('choice' + answer).style.background = "lightgreen";
        console.log('coucou');
    } else {
        document.getElementById('choice' + answer).style.background = "red";
    }
}

function loadNextQ() {
        currentQuestion++;
        load(currentQuestion);
    }
function loadPreviousQ() {
    currentQuestion--;
    load(currentQuestion);
}

load(currentQuestion);