var tittle = document.createElement("h1");
tittle.innerHTML = 'Bienvenido a Car master';
document.body.appendChild(tittle);

function agregarSelect() {
  var select = `<select><option value="uno">${race1.cars[0].name} </option><option value="dos">${race1.cars[1].name}</option></select> `;
  document.getElementById('target').innerHTML = select;
}

function darfuncionButton() {
  var button = document.getElementById('game')
  button.onclick(race1.start())
}

function started() {
  race1.start()
  waitTimeandResults();

}

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

async function waitTimeandResults() {

  var tittleWait = document.createElement("h2");
  tittleWait.innerHTML = "Esta transcurriendo la carrera, pronto sabremos los resultados";
  document.body.appendChild(tittleWait);

  await delay(5);

  var tittle2 = document.createElement("p");
  tittle2.innerHTML = "EL podio es:";
  document.body.appendChild(tittle2);

  race1.results.map((results) => {
    var finalresults = document.createElement("p");
    finalresults.innerHTML = results;
    document.body.appendChild(finalresults);
  })

};