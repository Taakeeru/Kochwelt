async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html"); // "includes/header.html"
      let resp = await fetch(file);
      if (resp.ok) {
          element.innerHTML = await resp.text();
      } else {
          element.innerHTML = 'Page not found';
      }
  }
}

function calcIngredients() {

    let number = +document.getElementById('myInput').value;
    if(number > 6){
        alert('Wow du hast richtig viele personen eingeladen!')
    }
    document.getElementById('1').innerHTML = `${120 * number} g Pasta, lang und dünn`
    document.getElementById('2').innerHTML = `${50 * number} g Pancetta, Guanciale oder roher italienischer Schinken`
    document.getElementById('3').innerHTML = `${1 * number} Ei/Eier `
    document.getElementById('4').innerHTML = `${20 * number} g Parmesan oder Grana padano, frisch gerieben`
    document.getElementById('5').innerHTML = `${20 * number} g Pecorino romano, frisch gerieben`
};

