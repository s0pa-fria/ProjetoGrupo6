// document.getElementById('fechar').addEventListener('click', function() {
  
 
//     document.getElementById('popup').style.display = 'none';
//     });

function fecharpopup(){
    // Abre uma nova janela
    var novaJanela = window.open('', '', 'width=500,height=300');
  
    // Escreve o conteúdo na nova janela
    novaJanela.document.write('<h1>Nova Janela</h1>');
    novaJanela.document.write('<p>Esta é uma nova janela.</p>');
  
    // Fecha a janela original
    window.close();
  }