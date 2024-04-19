function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  

window.addEventListener('DOMContentLoaded', function() {
  var asideElement = document.querySelector('aside');

  // Função para verificar e ajustar a exibição do elemento <aside>
  function adjustAsideDisplay() {
      if (window.innerWidth < 800) {
          asideElement.style.display = 'none'; // Oculta o elemento <aside>
      } else {
          asideElement.style.display = 'block'; // Mostra o elemento <aside>
      }
  }

  // Chama a função quando a página é carregada e redimensionada
  window.addEventListener('resize', adjustAsideDisplay);
  adjustAsideDisplay(); // Chama a função quando a página é carregada
});