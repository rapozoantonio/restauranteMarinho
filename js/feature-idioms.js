const idiomas = document.querySelectorAll('.flag');
const listaIdiomas = document.getElementById('idiomas');
const flagsArray = Array.from(idiomas);

flagsArray.forEach((opc) => {
  opc.addEventListener('click', ()=>{
    const idioma = opc.getElementsByTagName('span')[0].textContent.toUpperCase();
    pickedLang(idioma);
  });
});

function pickedLang(idioma){
switch (idioma){
    case 'ES':
      console.log('ES pickd lang');
      break;
    case 'EN':
      console.log('EN pickd lang');
      break;
    case 'PT-BR':
      console.log('PT-BR pickd lang');
      break;
  }
}