var clearButton = document.getElementById("clearButton");
var consolePanel = document.getElementById("consolePanel");

function consoleClear() {
  consolePanel.innerHTML = "Esperando instrucciones";
}

function consoleAddMessage(message) {
  consolePanel.innerText = consolePanel.innerText+"\n" + message ;
}
clearButton.addEventListener("click",consoleClear);
