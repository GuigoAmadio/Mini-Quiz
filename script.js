const questions = [
  {
    question: "O que Tim Maia provavelmente gostaria de fazer?",
    options: [
      "Achar um tesouro.",
      "Ter mais tempo para ler.",
      "Navegar pelos 7 mares.",
    ],
    imagens: [
      "./midia/idk.png",
      "./midia/Imagination.png",
      "./midia/Adventure.png",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Quem é o autor da seguinte frase: 'É loucura jogar fora todas as chances de ser feliz porque uma tentativa não deu certo'?",
    options: ["O pequeno prícipe", "Neil Armstrong", "Buda"],
    imagens: [
      "./midia/Little prince.png",
      "./midia/Success.png",
      "./midia/Woman doing home yoga.png",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Qual das atividades sustentáveis abaixo não tem como fim gerar energia?",
    options: ["", "", ""],
    imagens: [
      "./midia/Charging the battery with a windmill.png",
      "./midia/Waste sorting- textile.png",
      "./midia/Solar panels for energy.png",
    ],
    correctAnswer: 1,
  },
  {
    question: "Qual das pessoas abaixo você diria que está programando?",
    options: ["", "", ""],
    imagens: [
      "./midia/Office worker.png",
      "./midia/Home office.png",
      "./midia/Work from home.png",
    ],
    correctAnswer: 0,
  },
  {
    question: "jogaria esse jogo de novo?",
    options: ["Todos os dias.", "Adorei!", "Melhor jogo de todos."],
    imagens: [
      "./midia/Winner.png",
      "./midia/List of achievements.png",
      "./midia/The trophy in first place.png",
    ],
    correctAnswer: 2,
  },
];

let currentQuestionIndex = 0;

function displayQuestion() {
  if (currentQuestionIndex === 0) {
  } else {
    const questionElement = document.getElementById("text");
    const optionsElement = document.querySelectorAll(".textopcoes");
    const bolaresultado = document.querySelector(".bolaresultado");
    const img = document.querySelectorAll(".imagens");

    const current = questions[currentQuestionIndex];
    questionElement.textContent = current.question;

    optionsElement.src = "";

    current.options.forEach((option, index) => {
      let optionsIndex = optionsElement[index];
      optionsIndex.textContent = option;

      current.imagens.forEach((imagem, index) => {
        let imgIndex = img[index];
        imgIndex.src = imagem;
      });
    });
  }
}

let pagenumber = 1;
var numbercorrects = 0;
let numberwrongs = 0;
let valorMaximo = 6;
let valorMinimo = 1;
let menorindex = -1;

function verificarResposta(selectedOption) {
  const current = questions[currentQuestionIndex];
  const bordaverde = document.querySelectorAll(".opcoes");
  const rightball = document.querySelectorAll(".bolaresultado");
  const bordabola = document.querySelectorAll(".bola");

  if (selectedOption === current.correctAnswer) {
    rightball[selectedOption].src = "./midia/Icon.svg";
    bordaverde[selectedOption].style.border = "3px solid green";
    bordabola[selectedOption].style.border = "3px solid green";
    setTimeout(() => {
      currentQuestionIndex++;
      numbercorrects++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        window.location.href = `index3.html?numbercorrects=${numbercorrects}&numberwrongs=${numberwrongs}`;
      }
      rightball[selectedOption].src = "";
      bordaverde[selectedOption].style.border = "";
      bordabola[selectedOption].style.border = "";
      pagenumber++;
      document.getElementById("numberatual").textContent = pagenumber;
      document.getElementById("numbercorrects").textContent = numbercorrects;
    }, 700);
  } else {
    rightball[selectedOption].src = "./midia/wrong.svg";
    bordaverde[selectedOption].style.border = "3px solid red";
    bordabola[selectedOption].style.border = "3px solid red";
    setTimeout(() => {
      currentQuestionIndex++;
      numberwrongs++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        window.location.href = `index3.html?numbercorrects=${numbercorrects}&numberwrongs=${numberwrongs}`;
      }
      rightball[selectedOption].src = "";
      bordaverde[selectedOption].style.border = "";
      bordabola[selectedOption].style.border = "";
      pagenumber++;
      document.getElementById("numberatual").textContent = pagenumber;
      document.getElementById("numberwrong").textContent = numberwrongs;
    }, 700);
  }
}

function begingame() {
  window.location.href = "index.html";
}

var isBackArrowVisible = true;

function backpage() {
  var img = document.getElementById("leftarrow");
  var elipse1 = document.getElementById("e1");

  if (isBackArrowVisible) {
    img.src = "./midia/redarrow.svg";
    elipse1.style.backgroundColor = "#9e0101";
  } else {
    img.src = "./midia/arrow.svg";
    elipse1.style.backgroundColor = "#252c3a";
  }

  setTimeout(() => {
    currentQuestionIndex--;
    if (currentQuestionIndex === menorindex) {
      window.location.href = "index2.html";
    }
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
    }
    pagenumber--;
    if (pagenumber < valorMinimo) {
      pagenumber = valorMinimo;
    }
    document.getElementById("numberatual").textContent = pagenumber;
    img.src = "./midia/arrow.svg";
    elipse1.style.backgroundColor = "#252c3a";
  }, 100);
}

var isNextArrowVisible = true;

function nextpage() {
  var img = document.getElementById("rightarrow");
  var elipse2 = document.getElementById("e2");

  if (isNextArrowVisible) {
    img.src = "./midia/greenarrow.svg";
    elipse2.style.backgroundColor = "#63a530";
  } else {
    img.src = "./midia/arrow.svg";
    elipse2.style.backgroundColor = "#252c3a";
  }

  setTimeout(() => {
    currentQuestionIndex++;
    pagenumber++;
    if (currentQuestionIndex === questions.length) {
      window.location.href = `index3.html?numbercorrects=${numbercorrects}&numberwrongs=${numberwrongs}`;
    }
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
    }
    if (pagenumber > valorMaximo) {
      pagenumber = valorMaximo;
    }
    document.getElementById("numberatual").textContent = pagenumber;
    img.src = "./midia/arrow.svg";
    elipse2.style.backgroundColor = "#252c3a";
  }, 100);
}

function playagain() {
  window.location.href = "index.html";
}

displayQuestion();
