const yazarEserData = window.yazarEserVerileri || [];
const eserOzetleri = window.eserOzetleri || {};

const questionCounter = document.getElementById("questionCounter");
const correctCounter = document.getElementById("correctCounter");
const wrongCounter = document.getElementById("wrongCounter");
const progressFill = document.getElementById("progressFill");

const questionTypeLabel = document.getElementById("questionTypeLabel");
const questionText = document.getElementById("questionText");
const answerGrid = document.getElementById("answerGrid");

const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const testCard = document.getElementById("testCard");
const resultCard = document.getElementById("resultCard");

const resultCorrect = document.getElementById("resultCorrect");
const resultWrong = document.getElementById("resultWrong");
const resultScore = document.getElementById("resultScore");
const resultMessage = document.getElementById("resultMessage");
const restartTestBtn = document.getElementById("restartTestBtn");

const QUESTION_COUNT = 24;

let authors = [];
let allWorks = [];
let uniqueWorks = [];
let summaryWorks = [];

let testQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let answerLocked = false;

/* =========================================================
   GENEL YARDIMCI FONKSİYONLAR
========================================================= */

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

function getRandomItems(array, count) {
  return shuffleArray(array).slice(0, count);
}

function normalizeText(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function getUniqueValues(array) {
  return [...new Set(array)];
}

/* =========================================================
   VERİYİ TEST HAVUZUNA ÇEVİR
========================================================= */

function prepareData() {
  authors = [];
  allWorks = [];

  yazarEserData.forEach((period) => {
    period.authors.forEach((author) => {
      const authorEntry = {
        name: author.name,
        note: author.note,
        periodId: period.id,
        periodTitle: period.title,
        works: []
      };

      author.works.forEach((workGroup) => {
        workGroup.items.forEach((workTitle) => {
          const workEntry = {
            title: workTitle,
            type: workGroup.type,
            author: author.name,
            periodId: period.id,
            periodTitle: period.title,
            summary: eserOzetleri[workTitle] || ""
          };

          authorEntry.works.push(workEntry);
          allWorks.push(workEntry);
        });
      });

      authors.push(authorEntry);
    });
  });

  createUniqueWorksPool();
  createSummaryWorksPool();
}

function createUniqueWorksPool() {
  const workCountMap = {};

  allWorks.forEach((work) => {
    const key = normalizeText(work.title);

    if (!workCountMap[key]) {
      workCountMap[key] = 0;
    }

    workCountMap[key]++;
  });

  uniqueWorks = allWorks.filter((work) => {
    const key = normalizeText(work.title);
    return workCountMap[key] === 1;
  });
}

function createSummaryWorksPool() {
  summaryWorks = uniqueWorks.filter((work) => {
    return work.summary && work.summary.trim().length > 0;
  });
}

/* =========================================================
   SORU HAVUZU
========================================================= */

function buildQuestionPool() {
  const questionPool = [];

  uniqueWorks.forEach((work) => {
    const workToAuthorQuestion = createWorkToAuthorQuestion(work);

    if (workToAuthorQuestion) {
      questionPool.push(workToAuthorQuestion);
    }
  });

  authors.forEach((author) => {
    const authorToWorkQuestion = createAuthorToWorkQuestion(author);

    if (authorToWorkQuestion) {
      questionPool.push(authorToWorkQuestion);
    }
  });

  summaryWorks.forEach((work) => {
    const summaryToWorkQuestion = createSummaryToWorkQuestion(work);
    const summaryToAuthorQuestion = createSummaryToAuthorQuestion(work);

    if (summaryToWorkQuestion) {
      questionPool.push(summaryToWorkQuestion);
    }

    if (summaryToAuthorQuestion) {
      questionPool.push(summaryToAuthorQuestion);
    }
  });

  return shuffleArray(questionPool);
}

/* =========================================================
   1. SORU TİPİ: ESER -> YAZAR
========================================================= */

function createWorkToAuthorQuestion(work) {
  const correctAuthor = work.author;

  const samePeriodAuthors = authors
    .filter((author) => {
      return author.periodId === work.periodId && author.name !== correctAuthor;
    })
    .map((author) => author.name);

  const otherAuthors = authors
    .filter((author) => author.name !== correctAuthor)
    .map((author) => author.name);

  let distractors = getRandomItems(getUniqueValues(samePeriodAuthors), 3);

  if (distractors.length < 3) {
    const missingCount = 3 - distractors.length;

    const extraPool = otherAuthors.filter((name) => {
      return !distractors.includes(name);
    });

    distractors = [
      ...distractors,
      ...getRandomItems(getUniqueValues(extraPool), missingCount)
    ];
  }

  if (distractors.length < 3) {
    return null;
  }

  const options = shuffleArray([correctAuthor, ...distractors]);

  return {
    typeLabel: "Eserden Yazara",
    questionText: `"${work.title}" adlı eser aşağıdaki sanatçılardan hangisine aittir?`,
    correctAnswer: correctAuthor,
    options,
    explanation: `"${work.title}", ${correctAuthor} tarafından yazılmıştır.`
  };
}

/* =========================================================
   2. SORU TİPİ: YAZAR -> ESER
========================================================= */

function createAuthorToWorkQuestion(author) {
  const uniqueWorksOfAuthor = author.works.filter((work) => {
    return uniqueWorks.some((uniqueWork) => {
      return (
        normalizeText(uniqueWork.title) === normalizeText(work.title) &&
        uniqueWork.author === author.name
      );
    });
  });

  if (uniqueWorksOfAuthor.length === 0) {
    return null;
  }

  const correctWork = getRandomItems(uniqueWorksOfAuthor, 1)[0];

  const samePeriodWorks = uniqueWorks
    .filter((work) => {
      return (
        work.periodId === author.periodId &&
        work.author !== author.name &&
        normalizeText(work.title) !== normalizeText(correctWork.title)
      );
    })
    .map((work) => work.title);

  const otherWorks = uniqueWorks
    .filter((work) => {
      return (
        work.author !== author.name &&
        normalizeText(work.title) !== normalizeText(correctWork.title)
      );
    })
    .map((work) => work.title);

  let distractors = getRandomItems(getUniqueValues(samePeriodWorks), 3);

  if (distractors.length < 3) {
    const missingCount = 3 - distractors.length;

    const extraPool = otherWorks.filter((title) => {
      return !distractors.includes(title);
    });

    distractors = [
      ...distractors,
      ...getRandomItems(getUniqueValues(extraPool), missingCount)
    ];
  }

  if (distractors.length < 3) {
    return null;
  }

  const options = shuffleArray([correctWork.title, ...distractors]);

  return {
    typeLabel: "Sanatçıdan Esere",
    questionText: `${author.name} aşağıdaki eserlerden hangisini yazmıştır?`,
    correctAnswer: correctWork.title,
    options,
    explanation: `${author.name} — ${correctWork.title}`
  };
}

/* =========================================================
   3. SORU TİPİ: İÇERİK -> ESER
========================================================= */

function createSummaryToWorkQuestion(work) {
  const correctWork = work.title;

  const samePeriodWorks = summaryWorks
    .filter((item) => {
      return (
        item.periodId === work.periodId &&
        normalizeText(item.title) !== normalizeText(correctWork)
      );
    })
    .map((item) => item.title);

  const otherWorks = summaryWorks
    .filter((item) => {
      return normalizeText(item.title) !== normalizeText(correctWork);
    })
    .map((item) => item.title);

  let distractors = getRandomItems(getUniqueValues(samePeriodWorks), 3);

  if (distractors.length < 3) {
    const missingCount = 3 - distractors.length;

    const extraPool = otherWorks.filter((title) => {
      return !distractors.includes(title);
    });

    distractors = [
      ...distractors,
      ...getRandomItems(getUniqueValues(extraPool), missingCount)
    ];
  }

  if (distractors.length < 3) {
    return null;
  }

  const options = shuffleArray([correctWork, ...distractors]);

  return {
    typeLabel: "İçerikten Esere",
    questionText: `${work.summary} Bu açıklama aşağıdaki eserlerden hangisine aittir?`,
    correctAnswer: correctWork,
    options,
    explanation: `Doğru eser: ${correctWork}. Yazarı: ${work.author}.`
  };
}

/* =========================================================
   4. SORU TİPİ: İÇERİK -> YAZAR
========================================================= */

function createSummaryToAuthorQuestion(work) {
  const correctAuthor = work.author;

  const samePeriodAuthors = authors
    .filter((author) => {
      return author.periodId === work.periodId && author.name !== correctAuthor;
    })
    .map((author) => author.name);

  const otherAuthors = authors
    .filter((author) => author.name !== correctAuthor)
    .map((author) => author.name);

  let distractors = getRandomItems(getUniqueValues(samePeriodAuthors), 3);

  if (distractors.length < 3) {
    const missingCount = 3 - distractors.length;

    const extraPool = otherAuthors.filter((name) => {
      return !distractors.includes(name);
    });

    distractors = [
      ...distractors,
      ...getRandomItems(getUniqueValues(extraPool), missingCount)
    ];
  }

  if (distractors.length < 3) {
    return null;
  }

  const options = shuffleArray([correctAuthor, ...distractors]);

  return {
    typeLabel: "İçerikten Yazara",
    questionText: `${work.summary} Bu eser aşağıdaki sanatçılardan hangisine aittir?`,
    correctAnswer: correctAuthor,
    options,
    explanation: `Bu açıklama "${work.title}" eserine aittir. Yazarı: ${correctAuthor}.`
  };
}

/* =========================================================
   TESTİ BAŞLAT
========================================================= */

function generateNewTest() {
  const fullQuestionPool = buildQuestionPool();

  testQuestions = getRandomItems(fullQuestionPool, QUESTION_COUNT);

  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  answerLocked = false;

  testCard.classList.remove("hidden");
  resultCard.classList.add("hidden");

  renderCurrentQuestion();
  updateCounters();
}

/* =========================================================
   SORUYU EKRANA BAS
========================================================= */

function renderCurrentQuestion() {
  const currentQuestion = testQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    finishTest();
    return;
  }

  answerLocked = false;

  questionTypeLabel.textContent = currentQuestion.typeLabel;
  questionText.textContent = currentQuestion.questionText;

  questionCounter.textContent = `${currentQuestionIndex + 1} / ${QUESTION_COUNT}`;

  const progressPercent = ((currentQuestionIndex + 1) / QUESTION_COUNT) * 100;
  progressFill.style.width = `${progressPercent}%`;

  answerGrid.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      handleAnswerSelection(button, option);
    });

    answerGrid.appendChild(button);
  });

  feedbackBox.classList.add("hidden");
  feedbackTitle.textContent = "";
  feedbackText.textContent = "";

  nextQuestionBtn.disabled = true;

  if (currentQuestionIndex === QUESTION_COUNT - 1) {
    nextQuestionBtn.textContent = "Sonucu Gör";
  } else {
    nextQuestionBtn.textContent = "Sonraki Soru";
  }
}

/* =========================================================
   CEVAP KONTROLÜ
========================================================= */

function handleAnswerSelection(clickedButton, selectedOption) {
  if (answerLocked) {
    return;
  }

  answerLocked = true;

  const currentQuestion = testQuestions[currentQuestionIndex];
  const allAnswerButtons = document.querySelectorAll(".answer-btn");

  allAnswerButtons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("reveal-correct");
    }
  });

  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  if (isCorrect) {
    correctCount++;
    clickedButton.classList.add("correct");

    feedbackTitle.textContent = "Doğru cevap.";
    feedbackText.textContent = currentQuestion.explanation;
    feedbackBox.classList.remove("error");
    feedbackBox.classList.add("success");
  } else {
    wrongCount++;
    clickedButton.classList.add("wrong");

    feedbackTitle.textContent = "Yanlış cevap.";
    feedbackText.textContent = `Doğru cevap: ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`;
    feedbackBox.classList.remove("success");
    feedbackBox.classList.add("error");
  }

  feedbackBox.classList.remove("hidden");
  nextQuestionBtn.disabled = false;

  updateCounters();
}

/* =========================================================
   SAYAÇLAR VE SONUÇ EKRANI
========================================================= */

function updateCounters() {
  correctCounter.textContent = correctCount;
  wrongCounter.textContent = wrongCount;
}

function goToNextQuestion() {
  if (!answerLocked) {
    return;
  }

  if (currentQuestionIndex >= QUESTION_COUNT - 1) {
    finishTest();
    return;
  }

  currentQuestionIndex++;
  renderCurrentQuestion();
}

function finishTest() {
  testCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const score = Math.round((correctCount / QUESTION_COUNT) * 100);

  resultCorrect.textContent = correctCount;
  resultWrong.textContent = wrongCount;
  resultScore.textContent = score;

  if (score >= 90) {
    resultMessage.textContent =
      "Çok güçlü. Yazar-eser ve içerik eşleştirmelerinde ciddi boşluk görünmüyor.";
  } else if (score >= 75) {
    resultMessage.textContent =
      "Gayet iyi. Birkaç eser içeriği veya sanatçı karışıyor; kısa tekrar yeter.";
  } else if (score >= 55) {
    resultMessage.textContent =
      "Temel var ama dağınık. Özellikle eser içerikleriyle yazarları birlikte tekrar et.";
  } else {
    resultMessage.textContent =
      "Bu alan net bırakmaz. Rehbere dön, eser içeriklerini de çalış, sonra testi yeniden çöz.";
  }
}

/* =========================================================
   OLAY BAĞLANTILARI
========================================================= */

nextQuestionBtn.addEventListener("click", goToNextQuestion);
restartTestBtn.addEventListener("click", generateNewTest);

/* =========================================================
   BAŞLAT
========================================================= */

prepareData();
generateNewTest();