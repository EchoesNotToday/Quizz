var currentQuestion = 0;
//var total = question.length;

var questions = [{
    "question": "Elle est où la poulette ?",
    "answer1": "Elle est bien cachée ?!",
    "answer2":"Pas du tout les lapins, les lapins c'est gentils",
    "answer3":"Obi-Wan Kenobi",
    "answer4":"dans le poulailler voyons !",
    "correctAnswer": "1"
    },
    {
    "question": "Une facile: 2x2 ?",
    "answer1": "42",
    "answer2":"Je prends la main.",
    "answer3":"Obi-Wan Kenobi",
    "answer4":"D la réponse D.",
    "correctAnswer": "2"
    }];

var ask = document.getElementById('ask');

var ch1 = document.getElementById('choice1');
var ch2 = document.getElementById('choice2');
var ch3 = document.getElementById('choice3');
var ch4 = document.getElementById('choice4');

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');

function load (questionIndex){
    var i = questions[questionIndex];
    ask.textContent = (questionIndex +1)+'. '+i.question;
    ch1.textContent = i.answer1;
    ch2.textContent = i.answer2;
    ch3.textContent = i.answer3;
    ch4.textContent = i.answer4;
}
load(currentQuestion);
