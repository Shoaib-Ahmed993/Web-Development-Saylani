var questions = [
    {
        "question": "The first mechanical computer designed by charles Babbage was called ?",
        "option1": "Abacus",
        "option2": "Analytical Engine",
        "option3": "Calculator",
        "option4": "Processor",
        "answer": "2"
    },

    {
        "question": "Which of the following is the most powerful type of a computer ?",
        "option1": "Super-micro",
        "option2": "Super conductor",
        "option3": "Super computer",
        "option4": "Megaframe",
        "answer": "3"
    },

    {
        "question": "Which is a single integrated circuit ?",
        "option1": "Gate",
        "option2": "Mother Board",
        "option3": "Chip",
        "option4": "CPU",
        "answer": "1"
    },

    {
        "question": "C is ?",
        "option1": "A third generation high level language",
        "option2": "A machine language",
        "option3": "An assembly language",
        "option4": "All of the above",
        "answer": "1"
    },

    {
        "question": "Web pages are written using ?",
        "option1": "FTP",
        "option2": "HTTP",
        "option3": "HTML",
        "option4": "URL",
        "answer": "3"
    },
]


var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionElement = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultContainer = document.getElementById('result');

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert("Please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1){
        nextButton.textContent = "Finish";
    }
    if (currentQuestion == totalQuestions){
        container.style.display = 'none';
        resultContainer.style.display = '';
        resultContainer.textContent = "Your score: "+score;
        return;
    }
    loadQuestion(currentQuestion);
};
loadQuestion(currentQuestion);