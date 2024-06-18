---
---
<!DOCTYPE html>
<html lang="ko">
<head>
    <h1>(조금은 진지한) 인터뷰</h1>
    <small> *작성하신 내용은 어디에도 저장되지 않습니다. '답변 보기'를 누르시면 모든 질문과 답변을 복사할 수 있습니다.</small>
    <br></br>
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
            font-size: 12px;
        }
        h1 {
            margin-bottom: 0em;
        }
    </style>
</head>
<body>
    <form id="interviewForm">
        <label for="q1">지금 당장 떠날 수 있다면 어디로 가고 싶나요?</label><br>
        <textarea id="q1" name="q1" rows="4" cols="50"></textarea><br><br>
        <label for="q2">살면서 가장 행복했던 순간은 언제인가요?</label><br>
        <textarea id="q2" name="q2" rows="4" cols="50"></textarea><br><br>
        <label for="q3">살면서 가장 슬펐던 순간은 언제인가요?</label><br>
        <textarea id="q3" name="q3" rows="4" cols="50"></textarea><br><br>
        <label for="q4">가장 후회되는 결정이나 시간이 있나요?</label><br>
        <textarea id="q4" name="q4" rows="4" cols="50"></textarea><br><br>
        <label for="q5">어릴 적 가졌던 꿈은 무엇인가요?</label><br>
        <textarea id="q5" name="q5" rows="4" cols="50"></textarea><br><br>
        <label for="q6">당신이 생각하는 ‘성공’은 무엇인가요?</label><br>
        <textarea id="q6" name="q6" rows="4" cols="50"></textarea><br><br>
        <label for="q7">공부, 육아, 일, 사람 때문에 상처 받고 힘들 때 당신은 어떻게 했나요?</label><br>
        <textarea id="q7" name="q7" rows="4" cols="50"></textarea><br><br>
        <label for="q8">과거로 돌아갈 수 있다면 자신에게 어떤 말을 해주고 싶나요?</label><br>
        <textarea id="q8" name="q8" rows="4" cols="50"></textarea><br><br>
        <label for="q9">어떤 환경에서 죽음을 맞이하고 싶나요? 본인의 장례식이 어떤 모습이길 바라나요?</label><br>
        <textarea id="q9" name="q9" rows="4" cols="50"></textarea><br><br>
        <label for="q10">삶의 마지막 순간이라면, 사랑하는 사람에게 해주고 싶은 말이 있나요?</label><br>
        <textarea id="q10" name="q10" rows="4" cols="50"></textarea><br><br>
        <button type="button" onclick="showResults()">답변 보기</button>
    </form>

<div id="results" class="hidden">
        <h2>답변</h2>
        <div id="answers"></div>
        <button class="copy-button" onclick="copyResults()">복사하기</button>
</div>

<script>
        function showResults() {
            var form = document.getElementById('interviewForm');
            var resultsDiv = document.getElementById('results');
            var answersDiv = document.getElementById('answers');
            var formData = new FormData(form);
            var resultHTML = '';

            var questions = {
                q1: "지금 당장 떠날 수 있다면 어디로 가고 싶나요?",
                q2: "살면서 가장 행복했던 순간은 언제인가요?",
                q3: "살면서 가장 슬펐던 순간은 언제인가요?",
                q4: "가장 후회되는 결정이나 시간이 있나요?",
                q5: "어릴 적 가졌던 꿈은 무엇인가요?",
                q6: "당신이 생각하는 ‘성공’은 무엇인가요?",
                q7: "공부, 육아, 일, 사람 때문에 상처 받고 힘들 때 당신은 어떻게 했나요?",
                q8: "과거로 돌아갈 수 있다면 자신에게 어떤 말을 해주고 싶나요?",
                q9: "어떤 환경에서 죽음을 맞이하고 싶나요? 본인의 장례식이 어떤 모습이길 바라나요?",
                q10: "삶의 마지막 순간이라면, 사랑하는 사람에게 해주고 싶은 말이 있나요?"
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
            alert('복사 완료!');
        }
    </script>
</body>
</html>
