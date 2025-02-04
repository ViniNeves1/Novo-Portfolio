document.getElementById("perfil_foto").addEventListener('click', function() {
  const perfilPhoto = document.getElementById('perfil_foto');
  const descricao = document.getElementById('description');
  
  if (perfilPhoto.style.transform === 'translateX(100px)') {
    perfilPhoto.style.transform = 'translateX(0)'; // Retorna ao normal
    descricao.classList.add('hidden');
    perfilPhoto.classList.remove('float-l');
    descricao.style.opacity = 0;
  } else {
    perfilPhoto.style.transform = 'translateX(100px)';
    descricao.classList.remove('hidden');
    descricao.classList.add('float-r')
    perfilPhoto.classList.add('float-l')
    setTimeout(() => {
      descricao.style.opacity = 1;
    }, 50);
  }
});

document.getElementById("perfil_foto").addEventListener('click', function() {
  const perfilPhoto = document.getElementById('perfil_foto');
  const descricao = document.getElementById('description');
  const bioDiv = document.getElementsByClassName('my_bio');
  const sobreImg = document.getElementsByClassName('sobre-img')
  
  if ($(window).width() < 1024 && perfilPhoto.style.transform === 'translateX(100px)') {
    perfilPhoto.style.transform = 'translateX(0)'; // Retorna ao normal
    descricao.classList.add('hidden');
    perfilPhoto.classList.remove('float-l');
    bioDiv.classList.remove('hidden');
    sobreImg.classList.add('hidden');
    descricao.style.opacity = 0;
  } else {
    perfilPhoto.style.transform = 'translateX(100px)';
    descricao.classList.remove('hidden');
    descricao.classList.add('float-r');
    perfilPhoto.classList.add('float-l');
    bioDiv.classList.add('hidden');
    sobreImg.classList.add('hidden');
    setTimeout(() => {
      descricao.style.opacity = 1;
    }, 50);
  }
});

const perfilFoto = document.getElementById("perfil_foto");
const descriptionDiv = document.getElementById("description");
const textElement = document.getElementById("typed-text");
const text = "Olá, eu sou o Vinícius e sou um desenvolvedor front-end em aprendizagem; Este é meu portfólio onde irei me apresentar a você.";
let textoVisivel = false; // Estado inicial (texto oculto)

function typeWriter() {
  textElement.innerHTML = ""; // Limpa o conteúdo antes de escrever
  let index = 0;

  function escrever() {
    if (index < text.length) {
      textElement.innerHTML += text[index]; // Adiciona uma letra
      index++;
      setTimeout(escrever, 50); // Controla a velocidade da digitação
    } else {
      // Quando terminar de digitar, aplica o cursor piscando apenas no final
      const lastChar = textElement.lastChild;
      if (lastChar) {
        lastChar.classList.add("blinkCursor");
      }
    }
  }

  escrever(); // Inicia a digitação
}

perfilFoto.addEventListener("click", function () {
  if (textoVisivel) {
    // Se o texto está visível, escondemos
    descriptionDiv.classList.add("hidden");
    textoVisivel = false;
  } else {
    // Se o texto não está visível, mostramos e começamos a digitar novamente
    descriptionDiv.classList.remove("hidden");
    typeWriter(); // Começa a digitação
    textoVisivel = true;
  }
});
