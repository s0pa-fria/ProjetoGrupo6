// Seleciona todos os slides
const slides = document.querySelectorAll('.slide');
// Variável para acompanhar o slide atual
let currentSlide = 0;

// Função para exibir o slide especificado pelo índice
function showSlide(index) {
  // Remove a classe 'active' de todos os slides
  slides.forEach(slide => slide.classList.remove('active'));
  // Adiciona a classe 'active' ao slide específico que deve ser exibido
  slides[index].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
  // Atualiza o valor do slide atual, adicionando 1 e usando o operador de módulo (%) para retornar ao primeiro slide se estivermos no último
  currentSlide = (currentSlide + 1) % slides.length;
  // Chama a função showSlide para exibir o slide atualizado
  showSlide(currentSlide);
}

// Função para retroceder para o slide anterior
function prevSlide() {
  // Atualiza o valor do slide atual, subtraindo 1 e usando o operador de módulo (%) para retornar ao último slide se estivermos no primeiro
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  // Chama a função showSlide para exibir o slide atualizado
  showSlide(currentSlide);
}

// Adiciona um event listener ao botão 'prev' para chamar a função prevSlide quando for clicado
document.querySelector('.prev-button').addEventListener('click', prevSlide);
// Adiciona um event listener ao botão 'next' para chamar a função nextSlide quando for clicado
document.querySelector('.next-button').addEventListener('click', nextSlide);

// Configura um intervalo para chamar a função nextSlide a cada 2 segundos, para criar uma transição automática
setInterval(nextSlide, 4000);


