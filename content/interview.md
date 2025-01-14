---
---
<!DOCTYPE html>
<html lang="en">
<head>
    <h1>(A Bit Serious) Parent Interview</h1>
    <p> *Send this page to your parent. The content you write will not be saved anywhere. When you click ‘Show Results,’ you can copy all the questions and answers.</p>
    <br><hr>
    <p><small><em>My father passed away two years ago. Here are some questions I wish I had asked him:</small></em></p>
    <style>
        .hidden {
            display: none;
        }
        .result {
            margin-top: 20px;
        }
        .copy-button {
            margin-top: 10px;
        }
        small {
            font-size: 16px;
        }
        h1 {
            margin-bottom: 0em;
        }
        textarea {
            font-family: 'Yeon Sung', monospace;
        }
        button {
            font-size: 14px;
        }
        time, footer {
            display: none;
        }
    </style>
</head>
<body>
    <form id="interviewForm">
        <label for="q1">If you could leave right now, where would you go?</label><br>
        <textarea id="q1" name="q1" rows="4" cols="50"></textarea><br><br>
        <label for="q2">What was the happiest moment of your life?</label><br>
        <textarea id="q2" name="q2" rows="4" cols="50"></textarea><br><br>
        <label for="q3">What was the saddest moment of your life?</label><br>
        <textarea id="q3" name="q3" rows="4" cols="50"></textarea><br><br>
        <label for="q4">Is there a decision or time you regret the most?</label><br>
        <textarea id="q4" name="q4" rows="4" cols="50"></textarea><br><br>
        <label for="q5">What was your childhood dream?</label><br>
        <textarea id="q5" name="q5" rows="4" cols="50"></textarea><br><br>
        <label for="q6">What does ‘success’ mean to you?</label><br>
        <textarea id="q6" name="q6" rows="4" cols="50"></textarea><br><br>
        <label for="q7">When you were hurt or struggled with studies, parenting, work, or people, how did you cope?</label><br>
        <textarea id="q7" name="q7" rows="4" cols="50"></textarea><br><br>
        <label for="q8">If you could go back in time, what would you tell your younger self?</label><br>
        <textarea id="q8" name="q8" rows="4" cols="50"></textarea><br><br>
        <label for="q9">In what kind of environment would you like to face death? What do you want your funeral to be like?</label><br>
        <textarea id="q9" name="q9" rows="4" cols="50"></textarea><br><br>
        <label for="q10">If it were the last moment of your life, what would you like to say to your loved ones?</label><br>
        <textarea id="q10" name="q10" rows="4" cols="50"></textarea><br><br>
        <button type="button" onclick="showResults()">Show Results</button>
    </form>

<div id="results" class="hidden">
        <h2>Questions & Answers</h2>
        <div id="answers"></div>
        <button class="copy-button" onclick="copyResults()">Copy All</button>
</div>

<script>
        function showResults() {
            var form = document.getElementById('interviewForm');
            var resultsDiv = document.getElementById('results');
            var answersDiv = document.getElementById('answers');
            var formData = new FormData(form);
            var resultHTML = '';

            var questions = {
                q1: "If you could leave right now, where would you go?",
                q2: "What was the happiest moment of your life?",
                q3: "What was the saddest moment of your life?",
                q4: "Is there a decision or time you regret the most?",
                q5: "What was your childhood dream?",
                q6: "What does ‘success’ mean to you?",
                q7: "When you were hurt or struggled with studies, parenting, work, or people, how did you cope?",
                q8: "If you could go back in time, what would you tell your younger self?",
                q9: "In what kind of environment would you like to face death? What do you want your funeral to be like?",
                q10: "If it were the last moment of your life, what would you like to say to your loved ones?"
            };

            formData.forEach(function(value, key) {
                resultHTML += '<p><strong>' + questions[key] + ':</strong><br> ' + value + '</p>';
            });

            answersDiv.innerHTML = resultHTML;
            resultsDiv.classList.remove('hidden');
        }

        function copyResults() {
            var range = document.createRange();
            range.selectNode(document.getElementById('answers'));
            window.getSelection().removeAllRanges(); // clear current selection
            window.getSelection().addRange(range); // to select text
            document.execCommand("copy");
            window.getSelection().removeAllRanges(); // to deselect
            alert('Copied! Share with your loved ones.♥');
        }
    </script>
</body>
</html>
