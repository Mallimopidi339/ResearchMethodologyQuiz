// ===== Questions =====
const quiz = [
{
question: "What is the first step in research?",
options: [
"Research Design",
"Hypothesis",
"Research Problem",
"Observation"
],
answer: "Research Problem"
},
{
question: "What is a testable prediction called?",
options: [
"Observation",
"Hypothesis",
"Survey",
"Variable"
],
answer: "Hypothesis"
},
{
question: "If research is a road trip, what is its GPS?",
options: [
"Hypothesis",
"Research Design",
"Observation",
"Sample"
],
answer: "Research Design"
},
{
question: "Name one source of a research problem.",
options: [
"Literature Review",
"Television",
"Painting",
"Festival"
],
answer: "Literature Review"
},
{
question: "Which research design is used when you know very little about a topic?",
options: [
"Descriptive",
"Causal",
"Exploratory",
"Experimental"
],
answer: "Exploratory"
},
{
question: "Which approach starts with observations?",
options: [
"Deductive",
"Inductive",
"Experimental",
"Causal"
],
answer: "Inductive"
},


{
question: "Can research start without a research problem?",
options: [
"Yes",
"No",
"Sometimes",
"Only in experiments"
],
answer: "No"
},
{
question: "Name one characteristic of a good hypothesis.",
options: [
"Long",
"Clear and Testable",
"Complicated",
"Random"
],
answer: "Clear and Testable"
},
{
question: "Which design describes people or situations?",
options: [
"Experimental",
"Causal",
"Descriptive",
"Exploratory"
],
answer: "Descriptive"
},
{
question: "Which design finds cause and effect?",
options: [
"Descriptive",
"Causal",
"Exploratory",
"Survey"
],
answer: "Causal"
},
{
question: "Which approach starts with a theory?",
options: [
"Inductive",
"Deductive",
"Experimental",
"Exploratory"
],
answer: "Deductive"
},
{
question: "Why is research design important?",
options: [
"It guides the research",
"It wastes time",
"It replaces the hypothesis",
"It is optional"
],
answer: "It guides the research"
},
{
question: "Your friend predicts daily study improves marks. What is it?",
options: [
"Research Design",
"Hypothesis",
"Observation",
"Survey"
],
answer: "Hypothesis"
},
{
question: "Research without a design is like travelling without...?",
options: [
"A map",
"A teacher",
"A notebook",
"A computer"
],
answer: "A map"
},
{
question: "Which design tests variables under controlled conditions?",
options: [
"Descriptive",
"Experimental",
"Exploratory",
"Causal"
],
answer: "Experimental"
},
{
question: "Can previous studies help identify a research problem?",
options: [
"No",
"Yes",
"Sometimes",
"Never"
],
answer: "Yes"
},
{
question: "Can one research problem have more than one hypothesis?",
options: [
"No",
"Yes",
"Only in science",
"Only in surveys"
],
answer: "Yes"
},
{
question: "Complete: Problem → ? → Design",
options: [
"Observation",
"Hypothesis",
"Experiment",
"Conclusion"
],
answer: "Hypothesis"
},
{
question: "What should be identified before writing a hypothesis?",
options: [
"Research Design",
"Research Problem",
"Conclusion",
"Sample Size"
],
answer: "Research Problem"
},
{
question: "Name one criterion for selecting a research problem.",
options: [
"Feasibility",
"Luck",
"Color",
"Entertainment"
],
answer: "Feasibility"
},
{
question: "Detective solving a mystery is like which design?",
options: [
"Descriptive",
"Causal",
"Exploratory",
"Experimental"
],
answer: "Exploratory"
},
{
question: "Scientist testing a medicine is like which design?",
options: [
"Survey",
"Experimental",
"Descriptive",
"Exploratory"
],
answer: "Experimental"
},
{
question: "Which design focuses on describing facts?",
options: [
"Causal",
"Experimental",
"Descriptive",
"Exploratory"
],
answer: "Descriptive"
},
{
question: "Which design focuses on cause and effect?",
options: [
"Descriptive",
"Exploratory",
"Causal",
"Inductive"
],
answer: "Causal"
},
{
question: "Can a vague hypothesis be tested effectively?",
options: [
"Yes",
"No",
"Sometimes",
"Only in experiments"
],
answer: "No"
},
{
question: "Which is the blueprint of research?",
options: [
"Hypothesis",
"Research Design",
"Observation",
"Sample"
],
answer: "Research Design"
},
{
question: "Which research approach builds theory from observations?",
options: [
"Deductive",
"Inductive",
"Experimental",
"Causal"
],
answer: "Inductive"
},
{
question: "Which approach tests an existing theory?",
options: [
"Inductive",
"Deductive",
"Exploratory",
"Descriptive"
],
answer: "Deductive"
},
{
question: "What is tested during hypothesis testing?",
options: [
"Research Design",
"Hypothesis",
"Observation",
"Conclusion"
],
answer: "Hypothesis"
},
{
question: "Arrange in order: Research Design, Hypothesis, Research Problem",
options: [
"Research Design → Hypothesis → Research Problem",
"Hypothesis → Research Design → Research Problem",
"Research Problem → Hypothesis → Research Design",
"Research Problem → Research Design → Hypothesis"
],
answer: "Research Problem → Hypothesis → Research Design"
}
];
// ===== Variables =====
let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";
let timeLeft = 20;
let timer;
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// ===== Start Quiz =====
startBtn.onclick = function () {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    loadQuestion();
};

// ===== Load Question =====
function loadQuestion() {

    clearInterval(timer);

    selectedAnswer = "";

    timeLeft = 20;
    document.getElementById("time").innerHTML = timeLeft;

    questionNumber.innerHTML =
        "Question " + (currentQuestion + 1) + " / " + quiz.length;

    question.innerHTML = quiz[currentQuestion].question;

    options.innerHTML = "";
quiz[currentQuestion].options.forEach(function (option) {

        const btn = document.createElement("button");

        btn.innerHTML = option;

        btn.className = "option";

        btn.onclick = function () {

    // Don't allow another selection
    if (selectedAnswer !== "") {
        return;
    }

    selectedAnswer = option;

    btn.classList.add("selected");

    // Disable all option buttons
    document.querySelectorAll(".option").forEach(function (b) {
        b.disabled = true;
        b.style.cursor = "not-allowed";
    });

};

        options.appendChild(btn);

    });

    

    // ===== Timer =====
    timer = setInterval(function(){

        timeLeft--;

        document.getElementById("time").innerHTML = timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            // Disable all buttons
            document.querySelectorAll(".option").forEach(function(btn){

                btn.disabled = true;

                // Highlight correct answer
                if(btn.innerHTML === quiz[currentQuestion].answer){
                    btn.style.background = "green";
                    btn.style.color = "white";
                }

            });

            // Show answer
            alert("⏰ Time's Up!\n\nCorrect Answer:\n" + quiz[currentQuestion].answer);

            setTimeout(function(){

                currentQuestion++;

                if(currentQuestion < quiz.length){

                    loadQuestion();

                }else{

                    showResult();

                }

            },1000);

        }

    },1000);


   

    

}

// ===== Next Button =====
nextBtn.onclick = function () {

    if (selectedAnswer === "") {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === quiz[currentQuestion].answer) {
        score++;
    }
clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quiz.length) {

        loadQuestion();

    } else {

        showResult();

    }

};

// ===== Show Result =====
function showResult() {

    quizScreen.style.display = "none";

    resultScreen.style.display = "block";

    document.getElementById("score").innerHTML =
        "Score : " + score + " / " + quiz.length;

    let percentage = (score / quiz.length) * 100;

    document.getElementById("percentage").innerHTML =
        "Percentage : " + percentage.toFixed(0) + "%";

    let remark = "";

    if (percentage >= 90)
        remark = "🏆 Excellent!";
    else if (percentage >= 70)
        remark = "👏 Very Good!";
    else if (percentage >= 50)
        remark = "👍 Good!";
    else
        remark = "📚 Keep Practicing!";

    document.getElementById("remark").innerHTML = remark;
let studentName = prompt("Enter your Name");

if (studentName) {

    fetch("https://script.google.com/macros/s/AKfycbxTYgOvtmQtcy_rNKgRS2biLJxNr-dqlbvUqat-ubUmunBtOsZ68TFZQ82nmGqyoOIWhA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify({
            name: studentName,
            score: score + "/" + quiz.length
        })
    });

    alert("✅ Score Submitted Successfully!");
}
