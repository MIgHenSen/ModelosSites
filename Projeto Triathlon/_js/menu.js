/* 'onscroll' são eventos que ocorrem quando a barra de rolagem é utilizada */
window.onscroll = function() {scrollFunction()};

/* Ou seja, função usada ao rolar a página */
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        /* 'getElementById' acessa os atributos de um elemento com um id */
        document.getElementById('navbar').style.top = "0";
    }else{
        document.getElementById('navbar').style.top = "-50px";    }}