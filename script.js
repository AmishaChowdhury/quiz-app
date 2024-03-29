const quizData=[
{
   question:"Which software is commonly used for graphic design?",
   a:'Adobe Photoshop',
   b:'Microsoft Excel',
   c:'Google Drive',
   d:'Microsoft PowerPoint',
   correct: 'a'    
},{
    question:"What is the most used programming language in 2024?",
    a:'Python',
    b:'Java',
    c:'C',
    d:'Javascript',
    correct:'a'
},{
    question:"who is the president of India?",
    a:'Ram Nath Kovind',
    b:'Draupadi Murmu',
    c:'Rajendra Prasad',
    d:'A.P.J Abdul Kalam',
    correct:'b'
},{
    question:"Which software is used for creating and managing spreadsheets?",
    a: 'Microsoft Excel',
b:' Microsoft PowerPoint',
c:' Adobe Illustrator',
d:' Google Drive',
correct:'a'
},{
    question:"What is cloud computing?",
    a:'Storing and accessing data and programs over the internet',
    b:'Playing video games',
    c:'Creating digital art',
    d:' Repairing computer hardware',
    correct:'a'
},{
    question:"Which software is commonly used for video conferencing?",
    a:' Zoom',
    b:'Microsoft Excel',
    c:'Google Drive',
    d:'Microsoft PowerPoint',
    correct:'a'
}];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});