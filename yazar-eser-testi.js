const questionBank = [
  {
    category: "Roman",
    question: "“Mai ve Siyah” adlı eser kime aittir?",
    options: [
      "Halit Ziya Uşaklıgil",
      "Mehmet Rauf",
      "Recaizade Mahmut Ekrem",
      "Yakup Kadri Karaosmanoğlu"
    ],
    answer: "Halit Ziya Uşaklıgil",
    explanation: "Mai ve Siyah, Servetifünun romanının en önemli örneklerinden biridir ve Halit Ziya Uşaklıgil tarafından yazılmıştır."
  },
  {
    category: "Roman",
    question: "“Araba Sevdası” adlı romanın yazarı kimdir?",
    options: [
      "Recaizade Mahmut Ekrem",
      "Namık Kemal",
      "Ahmet Mithat Efendi",
      "Samipaşazade Sezai"
    ],
    answer: "Recaizade Mahmut Ekrem",
    explanation: "Araba Sevdası, yanlış Batılılaşmayı ele alan ve Recaizade Mahmut Ekrem'e ait olan romandır."
  },
  {
    category: "Roman",
    question: "“İntibah” adlı eser hangi yazara aittir?",
    options: [
      "Namık Kemal",
      "Şemsettin Sami",
      "Ahmet Mithat Efendi",
      "Nabizade Nazım"
    ],
    answer: "Namık Kemal",
    explanation: "İntibah, Namık Kemal'in roman türündeki önemli eseridir."
  },
  {
    category: "Roman",
    question: "“Sergüzeşt” adlı romanın yazarı kimdir?",
    options: [
      "Samipaşazade Sezai",
      "Recaizade Mahmut Ekrem",
      "Namık Kemal",
      "Mehmet Rauf"
    ],
    answer: "Samipaşazade Sezai",
    explanation: "Sergüzeşt, kölelik temasını işleyen ve Samipaşazade Sezai tarafından yazılan romandır."
  },
  {
    category: "Roman",
    question: "“Eylül” adlı roman kime aittir?",
    options: [
      "Mehmet Rauf",
      "Halit Ziya Uşaklıgil",
      "Peyami Safa",
      "Reşat Nuri Güntekin"
    ],
    answer: "Mehmet Rauf",
    explanation: "Eylül, edebiyatımızın ilk psikolojik romanı kabul edilir ve Mehmet Rauf'a aittir."
  },
  {
    category: "Roman",
    question: "“Yaban” adlı romanın yazarı kimdir?",
    options: [
      "Yakup Kadri Karaosmanoğlu",
      "Halide Edip Adıvar",
      "Reşat Nuri Güntekin",
      "Refik Halit Karay"
    ],
    answer: "Yakup Kadri Karaosmanoğlu",
    explanation: "Yaban, Millî Mücadele yıllarında aydın-halk kopukluğunu işleyen Yakup Kadri romanıdır."
  },
  {
    category: "Roman",
    question: "“Ateşten Gömlek” adlı eser kime aittir?",
    options: [
      "Halide Edip Adıvar",
      "Yakup Kadri Karaosmanoğlu",
      "Reşat Nuri Güntekin",
      "Sabahattin Ali"
    ],
    answer: "Halide Edip Adıvar",
    explanation: "Ateşten Gömlek, Millî Mücadele'yi konu alan önemli romanlardan biridir ve Halide Edip Adıvar'a aittir."
  },
  {
    category: "Roman",
    question: "“Kuyucaklı Yusuf” adlı romanın yazarı kimdir?",
    options: [
      "Sabahattin Ali",
      "Peyami Safa",
      "Tarık Buğra",
      "Kemal Tahir"
    ],
    answer: "Sabahattin Ali",
    explanation: "Kuyucaklı Yusuf, Sabahattin Ali'nin toplumcu gerçekçi çizgideki önemli romanıdır."
  },
  {
    category: "Roman",
    question: "“Çalıkuşu” adlı eser kime aittir?",
    options: [
      "Reşat Nuri Güntekin",
      "Halide Edip Adıvar",
      "Yakup Kadri Karaosmanoğlu",
      "Peyami Safa"
    ],
    answer: "Reşat Nuri Güntekin",
    explanation: "Çalıkuşu, Reşat Nuri Güntekin'in en bilinen romanıdır."
  },
  {
    category: "Roman",
    question: "“Dokuzuncu Hariciye Koğuşu” adlı romanın yazarı kimdir?",
    options: [
      "Peyami Safa",
      "Ahmet Hamdi Tanpınar",
      "Sabahattin Ali",
      "Tarık Buğra"
    ],
    answer: "Peyami Safa",
    explanation: "Dokuzuncu Hariciye Koğuşu, Peyami Safa'nın psikolojik yönü güçlü romanıdır."
  },
  {
    category: "Roman",
    question: "“Huzur” adlı roman hangi yazara aittir?",
    options: [
      "Ahmet Hamdi Tanpınar",
      "Peyami Safa",
      "Oğuz Atay",
      "Tarık Buğra"
    ],
    answer: "Ahmet Hamdi Tanpınar",
    explanation: "Huzur, Ahmet Hamdi Tanpınar'ın modern Türk romanının önemli eserleri arasında yer alan romanıdır."
  },
  {
    category: "Roman",
    question: "“Saatleri Ayarlama Enstitüsü” adlı eser kime aittir?",
    options: [
      "Ahmet Hamdi Tanpınar",
      "Peyami Safa",
      "Yakup Kadri Karaosmanoğlu",
      "Reşat Nuri Güntekin"
    ],
    answer: "Ahmet Hamdi Tanpınar",
    explanation: "Saatleri Ayarlama Enstitüsü, Ahmet Hamdi Tanpınar'ın toplum, zaman ve modernleşme ilişkisini işleyen romanıdır."
  },
  {
    category: "Roman",
    question: "“Osmancık” adlı romanın yazarı kimdir?",
    options: [
      "Tarık Buğra",
      "Kemal Tahir",
      "Mustafa Necati Sepetçioğlu",
      "Halide Edip Adıvar"
    ],
    answer: "Tarık Buğra",
    explanation: "Osmancık, Osmanlı'nın kuruluş dönemini ele alan Tarık Buğra romanıdır."
  },
  {
    category: "Hikâye",
    question: "“Memleket Hikâyeleri” adlı eser kime aittir?",
    options: [
      "Refik Halit Karay",
      "Ömer Seyfettin",
      "Sait Faik Abasıyanık",
      "Sabahattin Ali"
    ],
    answer: "Refik Halit Karay",
    explanation: "Memleket Hikâyeleri, Anadolu gözlemlerini yansıtan Refik Halit Karay eseridir."
  },
  {
    category: "Hikâye",
    question: "“Kaşağı” adlı hikâyenin yazarı kimdir?",
    options: [
      "Ömer Seyfettin",
      "Refik Halit Karay",
      "Sait Faik Abasıyanık",
      "Memduh Şevket Esendal"
    ],
    answer: "Ömer Seyfettin",
    explanation: "Kaşağı, Ömer Seyfettin'in en tanınmış hikâyelerinden biridir."
  },
  {
    category: "Şiir",
    question: "“Safahat” adlı eser hangi şaire aittir?",
    options: [
      "Mehmet Âkif Ersoy",
      "Tevfik Fikret",
      "Yahya Kemal Beyatlı",
      "Faruk Nafiz Çamlıbel"
    ],
    answer: "Mehmet Âkif Ersoy",
    explanation: "Safahat, Mehmet Âkif Ersoy'un şiirlerini bir araya getiren en önemli eseridir."
  },
  {
    category: "Şiir",
    question: "“Çile” adlı şiir kitabı kime aittir?",
    options: [
      "Necip Fazıl Kısakürek",
      "Cahit Sıtkı Tarancı",
      "Ahmet Muhip Dıranas",
      "Fazıl Hüsnü Dağlarca"
    ],
    answer: "Necip Fazıl Kısakürek",
    explanation: "Çile, Necip Fazıl Kısakürek'in şiir dünyasını temsil eden temel eseridir."
  },
  {
    category: "Şiir",
    question: "“Han Duvarları” adlı eser kime aittir?",
    options: [
      "Faruk Nafiz Çamlıbel",
      "Ahmet Kutsi Tecer",
      "Kemalettin Kamu",
      "Orhan Seyfi Orhon"
    ],
    answer: "Faruk Nafiz Çamlıbel",
    explanation: "Han Duvarları, memleketçi şiir anlayışının simgelerinden biri olup Faruk Nafiz Çamlıbel'e aittir."
  },
  {
    category: "Tiyatro",
    question: "“Vatan Yahut Silistre” adlı tiyatro eserinin yazarı kimdir?",
    options: [
      "Namık Kemal",
      "Abdülhak Hamit Tarhan",
      "Şinasi",
      "Ahmet Vefik Paşa"
    ],
    answer: "Namık Kemal",
    explanation: "Vatan Yahut Silistre, Namık Kemal'in vatan temalı tiyatro eseridir."
  },
  {
    category: "Roman",
    question: "“Felâtun Bey ile Râkım Efendi” adlı eser kime aittir?",
    options: [
      "Ahmet Mithat Efendi",
      "Recaizade Mahmut Ekrem",
      "Namık Kemal",
      "Şemsettin Sami"
    ],
    answer: "Ahmet Mithat Efendi",
    explanation: "Felâtun Bey ile Râkım Efendi, yanlış Batılılaşmayı işleyen Ahmet Mithat Efendi romanıdır."
  },
  {
    category: "Roman",
    question: "“Taaşşuk-ı Talat ve Fitnat” adlı romanın yazarı kimdir?",
    options: [
      "Şemsettin Sami",
      "Namık Kemal",
      "Ahmet Mithat Efendi",
      "Samipaşazade Sezai"
    ],
    answer: "Şemsettin Sami",
    explanation: "Taaşşuk-ı Talat ve Fitnat, Türk edebiyatındaki ilk yerli roman kabul edilir ve Şemsettin Sami'ye aittir."
  },
  {
    category: "Roman",
    question: "“Sinekli Bakkal” adlı roman hangi yazara aittir?",
    options: [
      "Halide Edip Adıvar",
      "Yakup Kadri Karaosmanoğlu",
      "Reşat Nuri Güntekin",
      "Peyami Safa"
    ],
    answer: "Halide Edip Adıvar",
    explanation: "Sinekli Bakkal, Halide Edip Adıvar'ın önemli romanlarından biridir."
  }
];

const QUESTION_COUNT = 10;

const progressText = document.getElementById("progressText");
const liveScore = document.getElementById("liveScore");
const progressFill = document.getElementById("progressFill");
const questionCategory = document.getElementById("questionCategory");
const questionText = document.getElementById("questionText");
const answerGrid = document.getElementById("answerGrid");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const testArea = document.getElementById("testArea");
const resultArea = document.getElementById("resultArea");
const finalCorrect = document.getElementById("finalCorrect");
const finalWrong = document.getElementById("finalWrong");
const finalPercent = document.getElementById("finalPercent");
const resultMessage = document.getElementById("resultMessage");
const restartTestBtn = document.getElementById("restartTestBtn");

let activeQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let answerLocked = false;

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

function prepareQuestions() {
  activeQuestions = shuffleArray(questionBank)
    .slice(0, QUESTION_COUNT)
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options)
    }));
}

function startTest() {
  prepareQuestions();

  currentQuestionIndex = 0;
  correctCount = 0;
  answerLocked = false;

  liveScore.textContent = correctCount;
  testArea.classList.remove("hidden");
  resultArea.classList.add("hidden");

  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = activeQuestions[currentQuestionIndex];
  answerLocked = false;

  questionCategory.textContent = currentQuestion.category;
  questionText.textContent = currentQuestion.question;
  answerGrid.innerHTML = "";

  feedbackBox.classList.add("hidden");
  feedbackBox.classList.remove("success", "error");
  feedbackTitle.textContent = "";
  feedbackText.textContent = "";

  nextQuestionBtn.disabled = true;
  nextQuestionBtn.textContent =
    currentQuestionIndex === activeQuestions.length - 1
      ? "Sonucu Gör"
      : "Sonraki Soru";

  progressText.textContent = `Soru ${currentQuestionIndex + 1} / ${activeQuestions.length}`;
  const progressPercent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = option;

    button.addEventListener("click", () => {
      selectAnswer(button, option, currentQuestion);
    });

    answerGrid.appendChild(button);
  });
}

function selectAnswer(selectedButton, selectedOption, currentQuestion) {
  if (answerLocked) {
    return;
  }

  answerLocked = true;

  const allAnswerButtons = document.querySelectorAll(".answer-btn");
  const isCorrect = selectedOption === currentQuestion.answer;

  allAnswerButtons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === currentQuestion.answer) {
      button.classList.add("reveal-correct");
    }
  });

  if (isCorrect) {
    correctCount++;
    liveScore.textContent = correctCount;
    selectedButton.classList.add("correct");

    feedbackBox.classList.add("success");
    feedbackTitle.textContent = "Doğru cevap.";
    feedbackText.textContent = currentQuestion.explanation;
  } else {
    selectedButton.classList.add("wrong");

    feedbackBox.classList.add("error");
    feedbackTitle.textContent = `Yanlış. Doğru cevap: ${currentQuestion.answer}`;
    feedbackText.textContent = currentQuestion.explanation;
  }

  feedbackBox.classList.remove("hidden");
  nextQuestionBtn.disabled = false;
}

function goToNextQuestion() {
  if (!answerLocked) {
    return;
  }

  if (currentQuestionIndex < activeQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  testArea.classList.add("hidden");
  resultArea.classList.remove("hidden");

  const wrongCount = activeQuestions.length - correctCount;
  const percent = Math.round((correctCount / activeQuestions.length) * 100);

  finalCorrect.textContent = correctCount;
  finalWrong.textContent = wrongCount;
  finalPercent.textContent = `%${percent}`;

  if (percent >= 90) {
    resultMessage.textContent =
      "Çok iyi. Yazar-eser bağlantıları sağlam oturmuş. Bu tempoyu korursan sınavda buradan puan bırakmazsın.";
  } else if (percent >= 70) {
    resultMessage.textContent =
      "İyi gidiyorsun. Temel sağlam, ama birkaç eserde karışıklık var. Bir tur daha çözmek mantıklı.";
  } else if (percent >= 50) {
    resultMessage.textContent =
      "Orta seviye. Bildiklerin var ama soru geldiğinde kararsız kalma ihtimalin yüksek. Tekrar şart.";
  } else {
    resultMessage.textContent =
      "Bu havuz seni biraz hırpalamış. Sorun değil, test zaten bunun için var. Önce yazar-eser PDF’sine dönüp sonra yeniden çöz.";
  }
}

nextQuestionBtn.addEventListener("click", goToNextQuestion);
restartTestBtn.addEventListener("click", startTest);

startTest();