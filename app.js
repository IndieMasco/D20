// Dice Roll Simulator

function rolldice() {
  const numofdice = document.getElementById("numofdice").value;
  const diceResult = document.getElementById("diceresult");
  const diceImages = document.getElementById("diceimages");
  const values = [];
  const Images = [];

  for (let i = 0; i < numofdice; i++) {
    const value = Math.floor(Math.random() * 20) + 1;
    values.push(value);
    Images.push(`<img src="dice/${value}.png">`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = Images.join(" ");
}
