document.addEventListener('DOMContentLoaded', function() {
  const perfilPhoto = document.getElementById('perfil_foto');
  const descricao = document.getElementById('description');
  const bioDiv = document.getElementsByClassName('my_bio')[0];
  const sobreImg = document.getElementsByClassName('sobre-img')[0];
  
    // Define os estilos iniciais ao carregar a página
    perfilPhoto.style.transform = 'translateX(100px)';
    descricao.classList.remove('hidden');
    descricao.classList.add('float-r');
    perfilPhoto.classList.add('float-l');

    if (window.innerWidth < 1024) {
        bioDiv.classList.add('hidden');
        sobreImg.classList.add('hidden');
    }

    setTimeout(() => {
        descricao.style.opacity = 1;
    }, 50);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const perfilFoto = document.getElementById("perfil_foto");
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