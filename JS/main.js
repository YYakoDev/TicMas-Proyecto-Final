"use strict"


//codigo del selector de idiomas
// primero detectamos el idioma del navegador del usuario
const lang = navigator.userLanguage || navigator.language || 'en-EN';
var choosenLanguage = lang;



document.getElementById("browserLang").innerText = choosenLanguage;

//document.getElementsByClassName("dropdown-toggle").innerText = ;

function changeLanguage(languageCode) {
    Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
        if (elem.classList.contains('lang-' + languageCode)) {
             elem.style.display = 'initial';
        }
        else {
             elem.style.display = 'none';
        }
    });
}

changeLanguage(choosenLanguage);


/*const selector = document.getElementById('languageSelector');
selector.addEventListener('onClick', function (evt) {
    changeLanguage(this.value);
    console.log(value);
});*/

const selector = document.getElementById('languageSelector');
/*selector.addEventListener("show.bs.dropdown", function(event)
{
    var x = $(event.relatedTarget).text(); // Get the button text
    alert("You clicked on: " + x);
})*/

$('#languageSelector a').click(function () {    
    $('#languageSelector .dropdown-toggle').text($(this).text());

    choosenLanguage = this.text;
    console.log(choosenLanguage);

    //lo que hacemos es tomar la opcion del elemento a del dropdown, tomamos el texto español o english,
    // recortamos las primeras dos letras y las pasamos a minusculas y con eso detectamos el idioma en la function changeLanguage

    //quizas se complique a la hora de escalar el dropdown con muchos otros idiomas, pero funcionarian muchos como el aleman(de),frances(fr),ruso(ru)
    let resultado = choosenLanguage.slice(0,2).toLowerCase();
    console.log(resultado);

    changeLanguage(resultado);

  });
