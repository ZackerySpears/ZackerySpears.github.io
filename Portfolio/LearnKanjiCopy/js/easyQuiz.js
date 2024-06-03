   const quizData = [  
    {  
        question: "What is this Number 五 ?",  
        a: "2",  
        b: "7",  
        c: "8",  
        d: "5",  
        correct: "d",  
    }, 
        {  
        question: "What is this Number 二 ?",  
        a: "10",  
        b: "2",  
        c: "7",  
        d: "none of the above",  
        correct: "b",  
    },  
    {  
        question: "What is this Number 四 ?",  
        a: "4",  
        b: "9",  
        c: "3",  
        d: "5",  
        correct: "a",  
    },  
    {  
        question: "What is this Number 一 ?",  
        a: "20",  
        b: "1",  
        c: "7",  
        d: "6",  
        correct: "b",  
    },  
    
];  
   const quiz = document.getElementById("quiz");  
   const answerElements = document.querySelectorAll(".answer");  
   const questionElement = document.getElementById("question");  
   const a_text = document.getElementById("a_text");  
   const b_text = document.getElementById("b_text");  
   const c_text = document.getElementById("c_text");  
   const d_text = document.getElementById("d_text");  
   const submitButton = document.getElementById("submit");  
   let currentQuiz = 0;  
   let score = 0;  
   const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
   };  
   const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
     if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
   };  
   const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
   };  
   loadQuiz();  
   submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
     if (answer === quizData[currentQuiz].correct) score++;  
     currentQuiz++;  
     if (currentQuiz < quizData.length) loadQuiz();  
     else {  
      quiz.innerHTML = `  
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
         <button onclick="history.go(0)">Play Again</button> 
         <button><a href = "../index.html">Home</a></button> 
       `  
     }   
    }  
   });  