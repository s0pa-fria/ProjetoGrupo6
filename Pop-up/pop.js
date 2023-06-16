document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var acceptButton = document.getElementById("popup-accept");
    var rejectButton = document.getElementById("popup-reject");
  
    // Verifica se o usuário já aceitou os termos anteriormente
    var accepted = localStorage.getItem("privacyAccepted");
    if (accepted) {
      popup.style.display = "none"; // Esconde o pop-up se já tiver sido aceito
    }
  
    acceptButton.addEventListener("click", function() {
      localStorage.setItem("privacyAccepted", true);
      popup.style.display = "none"; // Esconde o pop-up ao aceitar
    });
  
    rejectButton.addEventListener("click", function() {
      // Adicione o código para lidar com a rejeição (redirecionamento, encerramento, etc.)
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var lerMaisBtn = document.getElementById("lerMaisBtn");
    var fecharBtn = document.getElementById("fecharBtn");
    var popup = document.getElementById("popup");
    var concordoCheckbox = document.getElementById("concordoCheckbox");
    
    lerMaisBtn.addEventListener("click", function() {
      popup.style.display = "block";
    });
    
    fecharBtn.addEventListener("click", function() {
      if (concordoCheckbox.checked) {
        popup.style.display = "none";
      } else {
        alert("Você deve concordar com os termos de política de privacidade para fechar o pop-up.");
      }
    });
  });
  