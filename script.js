document.addEventListener('DOMContentLoaded', function() {
  const perfilPhoto = document.getElementById('perfil_foto');
  const descricao = document.getElementById('description');
  const sobreImg = document.getElementsByClassName('sobre-img')[0];
  
    // Define os estilos iniciais ao carregar a página
    
    descricao.classList.remove('hidden');
    descricao.classList.add('float-r');
    perfilPhoto.classList.add('float-l');

    if (window.innerWidth < 1024) {
        sobreImg.classList.add('hidden');
    }

    setTimeout(() => {
        descricao.style.opacity = 1;
    }, 50);
  });

  document.addEventListener("DOMContentLoaded", function () {
    
    const descriptionDiv = document.getElementById("description");
    const textElement = document.getElementById("typed-text");
    const text = "Olá, eu sou o Vinícius e sou um desenvolvedor front-end em aprendizagem; Este é meu portfólio onde irei me apresentar a você.";
    
    function typeWriter() {
        textElement.innerHTML = ""; // Limpa o conteúdo antes de começar
        let index = 0;

        function escrever() {
            if (index < text.length) {
                textElement.innerHTML += text[index]; // Adiciona uma letra
                index++;
                setTimeout(escrever, 50); // Controla a velocidade da digitação
            }
        }

        escrever(); // Inicia a digitação
    }

    // Exibe automaticamente a descrição ao carregar a página
    descriptionDiv.classList.remove("hidden");
    typeWriter(); // Começa a digitação do texto automaticamente
});

const projects = document.getElementById('projects');


function trocaClasse() {
    if (window.innerWidth < 1024) {
        projects.classList.remove('row');
        projects.classList.add('col');
    } else {
        projects.classList.remove('col');
        projects.classList.add('row');
    }
}

trocaClasse();

window.addEventListener('resize', trocaClasse);

const imgProjetos = document.getElementsByClassName('img-projeto');

function trocaTamanho() {
    for (let imgProjeto of imgProjetos) {
        if (window.innerWidth < 1024) {
            imgProjeto.classList.remove('w-100');
            imgProjeto.classList.add('w-50');
        } else {
            imgProjeto.classList.remove('w-50');
            imgProjeto.classList.add('w-100');
        }
    }
}

trocaTamanho();

window.addEventListener('resize', trocaTamanho);