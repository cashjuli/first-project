//typewriting effect
const texts = ["bagels", "astrología", "arte", "Madrid", "Comer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

//ask for bagels button

function bagelsQuantity() {
  let megamixQ = prompt("¿Cuántos bagel MegaMIX quieres?", "0"); //this means how many "MegaMix" bagels do you want?
  megamixQ = parseInt(megamixQ);
  let chiaQ = prompt("¿Cuántos bagel Chia Love quieres?", "0"); //this means how many "ChiaLove" bagels do you want?
  chiaQ = parseInt(chiaQ);
  let marinoQ = prompt("¿Cuántos bagel Marino quieres?", "0"); //this means how many "Marino" bagels do you want?
  marinoQ = parseInt(marinoQ);
  if (megamixQ + chiaQ + marinoQ > 0) {
    alert(
      "Estamos preparando tu pedido de " +
        (megamixQ + chiaQ + marinoQ) +
        " bagels 🥯 ¡Te avisaremos cuando esté listo!"
    );
  } else {
    alert("🤨 Creo que no has añadido ningún bagel a tu pedido... ");
  }
}
let askForBagels = document.querySelector(".pidetusbagelsbutton");
askForBagels.addEventListener("click", bagelsQuantity);
let askForBagelstext = document.querySelector(".pidetusbagelsbuttontext");
askForBagelstext.addEventListener("click", bagelsQuantity);

//Newsletter section button
function mensaje() {
  let name = document.getElementById("inputName").value;
  let email = document.getElementById("inputEmail").value;
  alert(
    `Gracias por suscribirte ${name}, pronto comenzarás a recibir nuestras noticias💞`
  );
}
let enviar = document.querySelector(".suscripcion");
enviar.addEventListener("click", mensaje);
