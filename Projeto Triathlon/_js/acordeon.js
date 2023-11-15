/* 'getElementsByClassName' garante acesso sobre todos os atributos associados a uma classe */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  /* 'addEventListener' permite que um evento específico seja configurado,
  neste caso, o evento "click" */
  acc[i].addEventListener("click", function() {
    /* 'toggle' é um evendo jquery, que permite trocar e destrocar os atributos 
    ao clicar no elemento */
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}