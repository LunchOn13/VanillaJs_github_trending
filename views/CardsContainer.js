import View from "./View";

class CardsContainer extends View {
  render() {
    const motherDiv = document.getElementById("CardsContainer");
    const menuDiv = document.createElement("div");
    const containerDiv = document.createElement("div");
    containerDiv.id = "cardContainer";
    const buttonDiv = document.createElement("div");
    const dropDownDiv = document.createElement("div");

    const buttons = [];
    for (var i = 0; i < 2; i++) {
      buttons[i] = document.createElement("button");
      buttons[i].type = "button";
      buttonDiv.appendChild(buttons[i]);
    }
    buttons[0].innerText = "Repositories";
    buttons[1].innerText = "Developers";

    const dropButton1 = document.createElement("button");
    dropButton1.innerHTML = "Language:<strong>Any</strong>";
    const dropButton2 = document.createElement("button");
    dropButton2.innerHTML = "Date range:<strong>Today</strong>";
    // ~~~~
    dropDownDiv.appendChild(dropButton1);
    dropDownDiv.appendChild(dropButton2);

    menuDiv.appendChild(buttonDiv);
    menuDiv.appendChild(dropDownDiv);
    motherDiv.appendChild(menuDiv);
    motherDiv.appendChild(containerDiv);
  }

  clearContainer() {
    const containerDiv = document.getElementById("cardContainer");

    containerDiv.innerHTML = "";
  }

  addCard(card) {}
}
const cardsContainer = new CardsContainer();
cardsContainer.render();

export default CardsContainer;
