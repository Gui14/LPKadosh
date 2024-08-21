function expandirImagem(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imgExpandida");
  
    modal.style.display = "block";
    modalImg.src = img.src;
  }
  
  function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function() {
    const filtros = document.querySelectorAll('#bloco-1 input[type="checkbox"]');
    const produtos = document.querySelectorAll('.feed');

    filtros.forEach(filtro => {
        filtro.addEventListener('change', aplicarFiltros);
    });

    function aplicarFiltros() {
        // Obter todos os filtros selecionados
        let filtrosSelecionados = Array.from(filtros)
            .filter(filtro => filtro.checked)
            .map(filtro => filtro.name);

        // Mostrar ou ocultar produtos com base nos filtros selecionados
        produtos.forEach(produto => {
            const classesProduto = produto.className.split(' ');
            const deveMostrar = filtrosSelecionados.every(filtro => classesProduto.includes(filtro));

            if (deveMostrar || filtrosSelecionados.length === 0) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
    }
});
