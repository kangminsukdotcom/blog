---
title: (A Bit Serious) Question Generator
description: For your meaningful conversations.
---

<style>
    time, footer {
        display: none;
    }
    .title {
        text-align: center;
    }
</style>    

For your meaningful conversations.  
Don't forget! The answers must be as detailed as possible.

<div class="decision-section">
    <h3><em>Want to decide who goes first?</em></h3>
    <button class="small-button" onclick="showDecision()">YES</button>
    <div id="decisionContainer" class="decision-container"></div>
</div>

---

<button onclick="showNextQuestion()">GENERATE A QUESTION</button>
<div id="questionContainer" class="question-container"></div>

<script>
    let questions = [
        "What is your favorite meal?",
        "If you received a million dollars today, what would you do with it?",
        "What is the nicest gift you have ever received?",
        "What is your happiest memory of this year?",
        "Who do you think is the nicest person in the world?",
        "When was the last time you cried?",
        "How would you spend your last day alive if you were still healthy?",
        "What is your best memory as a kid?",
        "How do you cope with sadness?",
        "What is your favorite place in your neighborhood?",
        "What makes you happy right now?",
        "What’s a hobby you’ve always wanted to pick up but never did?",
        "What’s a risk you took that you’re glad you did?",
        "If you could go back in time and change one thing, what would it be?",
        "What’s the kindest thing someone has ever done for you?",
        "What is your most memorable failure?",
        "What do you think is the meaning of life?"
    ];
    let decisions = [
        "The oldest goes first.",
        "The youngest goes first.",
        "The one who went to the bathroom most recently goes first.",
        "The one with the longest hair goes first.",
        "The one with the shortest hair goes first.",
        "The one with the biggest feet goes first."
    ];
    let shuffledQuestions = [];
    let currentQuestionIndex = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function prepareQuestions() {
        if (shuffledQuestions.length === 0) {
            shuffledQuestions = shuffle([...questions]);
            currentQuestionIndex = 0;
        }
    }

    function showNextQuestion() {
        prepareQuestions();

        if (currentQuestionIndex < shuffledQuestions.length) {
            const questionContainer = document.getElementById("questionContainer");
            questionContainer.innerHTML = "";
            const questionElement = document.createElement("div");
            questionElement.className = "question";
            questionElement.textContent = shuffledQuestions[currentQuestionIndex];
            questionContainer.appendChild(questionElement);

            // Apply animation class
            questionElement.classList.add("animated");
            
            // Remove animation class after animation ends to allow re-triggering
            questionElement.addEventListener('animationend', () => {
                questionElement.classList.remove('animated');
            });

            currentQuestionIndex++;
        } else {
            alert("All questions have been shown. Restarting the list.");
            shuffledQuestions = shuffle([...questions]);
            currentQuestionIndex = 0;
            showNextQuestion();
        }
    }

    function showDecision() {
        const decisionContainer = document.getElementById("decisionContainer");
        const decision = decisions[Math.floor(Math.random() * decisions.length)];
        decisionContainer.textContent = decision;

        // Apply animation class
        decisionContainer.classList.add("animated");

        // Remove animation class after animation ends to allow re-triggering
        decisionContainer.addEventListener('animationend', () => {
            decisionContainer.classList.remove('animated');
        });
    }
</script>

<style>
    body {
        padding: 20px;
        text-align: center;
    }
    .decision-section {
        margin-bottom: 20px;
    }
    .decision-section h3 {
        font-size: 1.2em;
    }
    .decision-container {
        margin-top: 10px;
        font-size: 1em;
        font-weight: bold;
        opacity: 0;
        transform: scale(0.5);
        animation: genieEffect 0.5s forwards;
    }
    .question-container {
        margin-top: 20px;
    }
    .question {
        font-size: 1.5em;
        font-weight: bold;
        opacity: 0;
        transform: scale(0.5);
        animation: genieEffect 0.5s forwards;
    }
    @keyframes genieEffect {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    button {
        font-family: monospace;
        font-size: 1em;
        padding: 10px 20px;
        cursor: pointer;
        border: none;
        background-color: gray;
        color: white;
        transition: background-color 0.3s;
    }

    .small-button {
        font-size: 0.8em;
        padding: 5px 15px;
    }

    button:hover {
        background-color: #E91E63;
    }
</style>
