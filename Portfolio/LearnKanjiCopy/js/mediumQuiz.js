const quizData = [  
    {  
     question: "What is this Number 十二 ?",  
     a: "27",  
     b: "12",  
     c: "10",  
     d: "17",  
     correct: "b",  
    }, 
        {  
        question: "What is this Number 	二十 ?",  
        a: "20",  
        b: "12",  
        c: "7",  
        d: "14",  
        correct: "a",  
    },  
    {  
        question: "What is this Number 六 ?",  
        a: "18",  
        b: "9",  
        c: "6",  
        d: "5",  
        correct: "c",  
    },  
    {  
        question: "What is this Number 二?",  
        a: "3",  
        b: "10",  
        c: "2",  
        d: "19",  
        correct: "c",  
    },  
    {  
        question: "What is this Number 五 ?",  
        a: "2",  
        b: "5",  
        c: "19",  
        d: "7",  
        correct: "b",  
       }, 
           {  
           question: "What is this Number 十四 ?",  
           a: "10",  
           b: "none of the above",  
           c: "15",  
           d: "14",  
           correct: "d",  
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
           question: "What is this Number 十八 ?",  
           a: "10",  
           b: "15",  
           c: "18",  
           d: "9",  
           correct: "c",  
       }, 
       {  
        question: "What is this Number 	九 ?",  
        a: "4",  
        b: "5",  
        c: "9",  
        d: "8",  
        correct: "c",  
    },  
    {  
        question: "What is this Number 一 ?",  
        a: "20",  
        b: "3",  
        c: "7",  
        d: "none of the above",  
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