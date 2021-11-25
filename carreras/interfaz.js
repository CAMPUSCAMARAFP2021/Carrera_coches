var tittle = document.createElement("h1");
tittle.innerHTML = 'Bienvenido a Car master';
document.body.appendChild(tittle);

function agregarSelect() {
  var select = `<select><option value="uno">${race1.cars[0].name} </option><option value="dos">${race1.cars[1].name}</option></select> `;
  document.getElementById('target').innerHTML = select;
}

var tittle = document.createElement("button").onclick =race1.start ;
tittle.innerHTML = 'Empezar la carrera';
tittle.onclick = race1.start()
document.body.appendChild(tittle);
