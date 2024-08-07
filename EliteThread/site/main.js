document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.querySelector('.search-toggle');
  const searchBox = document.querySelector('.search-box');

  // Verifica se os elementos existem antes de adicionar event listeners
  if (searchToggle && searchBox) {
    searchToggle.addEventListener('click', () => {
      searchBox.classList.toggle('active');
    });

    // Adiciona um event listener para fechar a caixa de pesquisa ao clicar fora dela
    document.addEventListener('click', (event) => {
      if (!searchBox.contains(event.target) && !searchToggle.contains(event.target)) {
        searchBox.classList.remove('active');
      }
    });

    // Adiciona um event listener para evitar que a caixa de pesquisa feche ao clicar dentro dela
    searchBox.addEventListener('click', (event) => {
      event.stopPropagation(); // Impede a propagação do clique para o document
    });
  }
});

