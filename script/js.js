let monedas = [];
let conversion = 0;

async function Monedas() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "http://18.222.133.113/ejercicio16/index.php");

    req.onload = function () {
      if (req.status == 200) {
        monedas = JSON.parse(req.response);
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
}

async function convertir() {
  let pesos = Number.parseFloat(document.getElementById("peso").value);

  if (pesos === "" || isNaN(pesos)) {
    alert("Por favor, ingresa una cantidad válida en pesos mexicanos.");
    return;
  }

  if (document.getElementById("usd").checked) {
    conversion = pesos / Number.parseFloat(monedas[0].valor);
  } else if (document.getElementById("euro").checked) {
    conversion = pesos / Number.parseFloat(monedas[1].valor);
  } else if (document.getElementById("yen").checked) {
    conversion = pesos / Number.parseFloat(monedas[2].valor);
  }

  document.getElementById("resultado").innerText =
    "Cantidad convertida: " + conversion.toFixed(2);
}

Monedas();
