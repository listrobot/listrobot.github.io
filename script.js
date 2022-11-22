var answers = [
    "Test1",
    "Test2",
    "Test3"
]

function giveRandomAnswer()
{
    let answerChoosen = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerBox').value = answerChoosen;
}