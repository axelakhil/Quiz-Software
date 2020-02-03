const highscorelist=document.getElementById("highscoreslist");
const highScores=JSON.parse(localStorage.getItem("highScores"))||[];

highscorelist.innerHTML=highScores.map(score=>{
	return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");