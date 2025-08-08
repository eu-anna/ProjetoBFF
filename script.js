const frases = {

  apoio: [

    "Você é importante pra mim, mesmo quando não vê valor em si 💛",

    "A tristeza não te define. Ela só mostra o quanto você sente profundamente.",

    "Você já venceu tantos dias difíceis… esse também vai passar.",

    "Mesmo que sua mente te sabote, há algo em você que insiste em continuar.",

    "Você não é fraco por oscilar. Você é forte por continuar tentando."

  ],

  humor: [

    "Você muda de humor mais rápido que meu Wi-Fi, mas ainda assim é meu sinal favorito.",

    "Se seu humor fosse playlist, ia do samba ao heavy metal em 5 minutos.",

    "Tem dias que você me ignora, outros que me chama de 'vida'… tô aqui confuso e feliz.",

    "Estar com você é tipo atualizar app: às vezes trava, às vezes melhora, mas eu sempre insisto.",

    "Se sua mente é uma montanha-russa… me passa o cinto que eu quero ir na frente."

  ],

  carinho: [

    "Você, do jeitinho que é, já é o bastante. E eu gosto muito de você assim.",

    "Mesmo nos dias nublados, eu escolheria caminhar com você.",

    "Insuportável, mas com um coração que brilha mais que qualquer estrela 💛",

    "Você é tipo o clima: instável, mas sempre necessário.",

    "Se você virar uma tempestade, prometo levar guarda-chuva e ficar do seu lado."

  ],

  motivacao: [

    "Não precisa ser constante pra ser incrível. Você já é.",

    "Você merece gentileza, mesmo quando está em guerra com você mesmo.",

    "Seu valor não depende do seu humor. Você é incrível em qualquer fase.",

    "Você não precisa dar conta de tudo. Só precisa continuar.",

    "Você já é forte por ainda estar aqui. E isso não é pouco."

  ]

};

let ultimaMensagem = null;

const btnMostrarOpcoes = document.getElementById('btnMostrarOpcoes');

const container = document.getElementById('container');

const opcoes = document.getElementById('opcoes');

const mensagemDiv = document.getElementById('mensagem');

let coracoesContainer = null;

let timeoutId = null;

btnMostrarOpcoes.addEventListener('click', () => {

  container.style.display = 'none';

  opcoes.style.display = 'block';

  mensagemDiv.style.display = 'none';

});

opcoes.addEventListener('click', (event) => {

  if(event.target.tagName.toLowerCase() === 'button') {

    mostrarMensagem(event.target.getAttribute('data-tema'));

  }

});

function criarCoracoesTela() {

  const container = document.createElement("div");

  container.id = "coracoes-container";

  document.body.appendChild(container);

  for (let i = 0; i < 40; i++) {

    const cor = document.createElement("span");

    cor.textContent = "💛";

    let x = Math.random() * 100;

    let y = Math.random() * 100;

    // Evitar corações sobre a caixa da mensagem (centro da tela)

    if (x > 35 && x < 65 && y > 35 && y < 65) {

      x += 30;

      if (x > 100) x = 100;

    }

    cor.style.left = `${x}vw`;

    cor.style.top = `${y}vh`;

    cor.style.fontSize = `${Math.random() * 18 + 10}px`;

    cor.style.position = "absolute";

    cor.style.animation = "flutuar 4s linear infinite";

    cor.style.animationDelay = `${Math.random() * 2}s`;

    container.appendChild(cor);

  }

  return container;

}

function mostrarMensagem(tipo) {

  const lista = frases[tipo];

  if(!lista) return;

  let idx;

  do {

    idx = Math.floor(Math.random() * lista.length);

  } while (lista[idx] === ultimaMensagem);

  ultimaMensagem = lista[idx];

  mensagemDiv.textContent = lista[idx];

  mensagemDiv.style.display = 'block';

  opcoes.style.display = 'none';

  document.getElementById("musica").play().catch(() => {});

  if(coracoesContainer) {

    coracoesContainer.remove();

  }

  coracoesContainer = criarCoracoesTela();

  if(timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {

    mensagemDiv.style.display = 'none';

    container.style.display = 'block';

    if(coracoesContainer) {

      coracoesContainer.remove();

      coracoesContainer = null;

    }

  }, 10000);

}
