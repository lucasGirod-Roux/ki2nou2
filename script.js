document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("question.html")) {
    document.body.className = 'theme-' + (sessionStorage.getItem('theme') || '');
    showQuestionSet();
  } else {
    document.body.className = ''; // reset if on homepage
  }
});

let usedTitles = JSON.parse(sessionStorage.getItem('usedTitles') || '{}');
let currentTheme = sessionStorage.getItem('theme') || '';
let currentSet = null;
let currentQuestionIndex = 0;

function goToTheme(theme) {
  sessionStorage.setItem('theme', theme);
  if (!usedTitles[theme]) usedTitles[theme] = [];
  sessionStorage.setItem('usedTitles', JSON.stringify(usedTitles));
  window.location.href = "question.html";
}

function showQuestionSet() {
  usedTitles = JSON.parse(sessionStorage.getItem('usedTitles') || '{}');
  currentTheme = sessionStorage.getItem('theme');
  const available = questions[currentTheme].filter(q => !usedTitles[currentTheme].includes(q.titre));

  const titleEl = document.getElementById('question-title');
  const listEl = document.getElementById('question-list');
  const nextBtn = document.getElementById('next-question');

  // Ajout du style visuel selon le thème
  document.body.className = 'theme-' + currentTheme;
  listEl.className = 'question-theme-' + currentTheme;

  if (available.length === 0) {
    titleEl.innerText = "Il ne reste aucune questions disponibles";
    listEl.innerHTML = "";
    nextBtn.style.display = "none";
    return;
  }

  currentSet = available[Math.floor(Math.random() * available.length)];
  usedTitles[currentTheme].push(currentSet.titre);
  sessionStorage.setItem('usedTitles', JSON.stringify(usedTitles));

  currentQuestionIndex = 0;
  titleEl.innerText = currentSet.titre;
  listEl.innerHTML = "";
  nextBtn.style.display = "inline-block";

  showNextQuestion();
}

function showNextQuestion() {
  if (currentSet && currentQuestionIndex < currentSet.questions.length) {
    const p = document.createElement('p');
    p.textContent = currentSet.questions[currentQuestionIndex];
    document.getElementById('question-list').appendChild(p);
  }
  if (currentQuestionIndex >= currentSet.questions.length - 1) {
    document.getElementById('next-question').style.display = 'none';
  }
}

function nextSubQuestion() {
  currentQuestionIndex++;
  if (currentSet && currentQuestionIndex < currentSet.questions.length) {
    showNextQuestion();
  }
}
