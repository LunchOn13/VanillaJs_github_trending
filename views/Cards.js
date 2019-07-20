import View from "./View";

class Card {
  constructor(
    author,
    repoName,
    content,
    lang,
    stars,
    branches,
    contributtors,
    starsOnToday,
    date
  ) {
    this.author = author;
    this.repoName = repoName;
    this.content = content;
    this.lang = lang;
    this.stars = stars;
    this.branches = branches;
    this.contributtors = contributtors;
    this.starsOnToday = starsOnToday;
    this.date = date;
  }

  plusStars() {
    this.stars--;
    this.stasOnToday--;
  }

  downStars() {
    this.stars--;
    this.starsOnToday--;
  }
}

class TheCards {
  constructor() {
    this.list = [
      new Card(
        "Author",
        "RepoName",
        "Content",
        "Lang",
        100,
        200,
        "Contributtors",
        100,
        "2019:07:18"
      ),
      new Card(
        "이종원",
        "TestRepo",
        "테스트하는 것",
        "JavaScript",
        0,
        0,
        "박준원",
        0,
        "2019:07:18"
      )
    ];
  }
}

class Cards extends View {
  cardMake() {
    const motherDiv = document.getElementById("cardContainer");

    const divs = [];
    for (let k = 0; k < 4; k++) {
      divs[k] = document.createElement("div");
    }
    const author_repoName = document.createElement("p");
    author_repoName.innerText = "no author / no RepoName";
    const starButton = document.createElement("button");
    starButton.innerText = "Star";

    divs[1].appendChild(author_repoName);
    divs[1].appendChild(starButton);

    const content = document.createElement("p");
    content.innerText = "no Content";
    divs[2].appendChild(content);

    const ul = document.createElement("ul");
    const list = [];
    for (let u = 0; u < 5; u++) {
      list[u] = document.createElement("li");
      ul.appendChild(list[u]);
    }
    list[0].innerText = "no Lang";
    list[1].innerText = "no Stars";
    list[2].innerText = "no branches";
    list[3].innerText = "no contributtors";
    list[4].innerText = "no Stars on Today";

    divs[3].appendChild(ul);

    divs[0].setAttribute("class", "cards");
    divs[1].setAttribute("class", "topDiv");
    divs[2].setAttribute("class", "middleDiv");
    divs[3].setAttribute("class", "bottomDiv");

    for (let m = 1; m < 4; m++) {
      divs[0].appendChild(divs[m]);
    }
    motherDiv.appendChild(divs[0]);
  }
}

const cards = new Cards();
cards.cardMake();
export default Cards;
