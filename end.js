const username        = document.getElementById("username");
const saveScoreBtn    = document.getElementById('save-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore      = document.getElementById('final-score');
const highScores      = JSON.parse(localStorage.getItem('highScores')) || [];
localStorage.setItem('highScores', JSON.stringify([]));

const MAX_HIGH_SCORES = 5;
finalScore.innerText  = mostRecentScore;

username.addEventListener("keyup", () => {

    saveScoreBtn.disabled = !username.value;  //if there is nothing in the username field it is falsey and should remain disabled
});

saveHighScore = e => {

    e.preventDefault();

    const score = {
        score: mostRecentScore,
        username: username.value
    };
    // add the score to the array
    highScores.push(score);
    // sort the scores in the array from highest to lowest
    highScores.sort((a, b) => {
        return b.score - a.score
    });
    // splice out lowest items as we can only hold 5
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.assign('index.html');

};
