---
title: (조금은 진지한) 질문 생성기
description: 우리의 뜻깊은 대화를 위하여.
type: page
---

*우리의 뜻깊은 대화를 위하여.*  
규칙 1: 답변은 최대한 구체적으로.  
규칙 2: 고민하지 말고 바로 답하기.  
규칙 3: 답하고 싶지 않다면 다음 질문으로.

<div class="decision-section">
    <h3><em>누가 먼저 할지 정하고 싶나요?</em></h3>
    <button class="small-button" onclick="showDecision()">네!</button>
    <div id="decisionContainer" class="decision-container"></div>
</div>

---

<button onclick="showNextQuestion()">질문 생성하기</button>
<div id="questionContainer" class="question-container"></div>

<script>
    let questions = [
        "가장 좋아하는 음식이 뭔가요?",
        "10억이 생긴다면 삶에 어떤 변화가 생길까요? 돈 걱정 없이 살 수 있다면 하루를 어떻게 보내고 싶으세요?",
        "살면서 받았던 선물 중 무엇이 가장 기억에 남나요?",
        "올해 가장 인상 깊었던 순간을 알려주세요.",
        "이 세상에서 가장 착한 사람이 누구라 생각하세요?",
        "마지막으로 눈물이 났던 적은 언제인가요?",
        "건강한 상태로 삶의 마지막 날을 보낼 수 있다면, 무엇을 하고 싶으세요?",
        "초등학생 시절 행복했던 기억이 있나요?",
        "슬픔을 어떻게 다루시나요?",
        "사는 동네에서 가장 좋아하는 공간이 있나요?",
        "지금 당신을 행복하게 하는 것이 있나요?",
        "계속 시도해 보고 싶지만 미루고 있는 도전이 있나요?",
        "위험을 무릅쓰고 무언가 도전한 적 있나요?",
        "기억에 남는 실패담이 있나요?",
        "시간을 돌려 단 한가지 선택을 바꿀 수 있다면, 언제로 돌아가고 싶나요?",
        "타인의 친절함에 감동한 적 있나요? 있다면 어떤 기억이 떠오르나요?",
        "삶의 의미에 대해 고민한 적 있나요? 우리는 무엇을 위해 살까요?",
        "스스로가 미웠던 적이 있나요?",
        "무엇이 가장 귀엽다고 생각하나요?"
    ];
    let decisions = [
        "가장 나이 많은 사람이 첫 번째.",
        "가장 어린 사람이 첫 번째.",
        "가장 최근 화장실 갔던 사람이 첫 번째.",
        "머리 가장 긴 사람이 첫 번째.",
        "머리 가장 짧은 사람이 첫 번째.",
        "신발 사이즈 가장 큰 사람이 첫 번째."
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
    time, footer {
        display: none;
    }
</style>
