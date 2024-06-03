const quizData = [  
    {  
     question: "What is this Number 十一 ?",  
     a: "21",  
     b: "11",  
     c: "10",  
     d: "15",  
     correct: "b",  
    }, 
        {  
        question: "What is this Number 三十五 ?",  
        a: "100",  
        b: "35",  
        c: "25",  
        d: "none of the above",  
        correct: "b",  
    },  
    {  
        question: "What is this Number 十五 ?",  
        a: "20",  
        b: "9",  
        c: "15",  
        d: "40",  
        correct: "c",  
    },  
    {  
        question: "What is this Number 九十 ?",  
        a: "90",  
        b: "50",  
        c: "60",  
        d: "71",  
        correct: "a",  
    },  
    {  
        question: "What is this Number 七十八 ?",  
        a: "70",  
        b: "7",  
        c: "87",  
        d: "78",  
        correct: "d",  
       }, 
           {  
           question: "What is this Number 四十九 ?",  
           a: "49",  
           b: "55",  
           c: "90",  
           d: "none of the above",  
           correct: "a",  
       },  
       {  
           question: "What is this Number 六十二 ?",  
           a: "62",  
           b: "9",  
           c: "52",  
           d: "43",  
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
       {  
        question: "What is this Number 七 ?",  
        a: "7",  
        b: "22",  
        c: "88",  
        d: "5",  
        correct: "a",  
       }, 
           {  
           question: "What is this Number 三十三 ?",  
           a: "32",  
           b: "33",  
           c: "23",  
           d: "43",  
           correct: "b",  
       },  
       {  
           question: "What is this Number 百十 ?",  
           a: "90",  
           b: "50",  
           c: "30",  
           d: "none of the above",  
           correct: "d",  
       },  
       {  
           question: "What is this Number 八 ?",  
           a: "20",  
           b: "8",  
           c: "7",  
           d: "6",  
           correct: "b",  
       },
       {  
        question: "What is this Number 四 ?",  
        a: "20",  
        b: "7",  
        c: "8",  
        d: "4",  
        correct: "d",  
       }, 
           {  
           question: "What is this Number 四十四 ?",  
           a: "55",  
           b: "44",  
           c: "77",  
           d: "none of the above",  
           correct: "b",  
       },  
       {  
           question: "What is this Number 五十九 ?",  
           a: "59",  
           b: "76",  
           c: "83",  
           d: "87",  
           correct: "a",  
       },  
       {  
           question: "What is this Number 六 ?",  
           a: "20",  
           b: "6",  
           c: "7",  
           d: "0",  
           correct: "b",  
       },
       {  
        question: "What is this Number 百 ?",  
        a: "9",  
        b: "99",  
        c: "8",  
        d: "100",  
        correct: "d",  
       }, 
           {  
           question: "What is this Number 四十八 ?",  
           a: "46",  
           b: "48",  
           c: "42",  
           d: "none of the above",  
           correct: "b",  
       },  
       {  
           question: "What is this Number 二十六 ?",  
           a: "26",  
           b: "99",  
           c: "32",  
           d: "22",  
           correct: "a",  
       },  
       {  
           question: "What is this Number 四十一 ?",  
           a: "20",  
           b: "41",  
           c: "88",  
           d: "58",  
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