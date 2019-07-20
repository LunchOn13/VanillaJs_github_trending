import View from "./View";

class HoveringHeader extends View {
  render() {
    const motherDiv = document.getElementById("HoveringHeader");

    const ul_ = document.createElement("ul");
    const lis = [];
    for (var i = 0; i < 5; i++) {
      lis[i] = document.createElement("li");
    }
    lis[0].innerText = "Explore";
    lis[1].innerText = "Topics";
    lis[2].innerText = "Trending";
    lis[3].innerText = "Collections";
    lis[4].innerText = "Events";

    for (i = 0; i < 5; i++) {
      ul_.appendChild(lis[i]);
    }

    motherDiv.appendChild(ul_);
  }
}

const hoveringHeader = new HoveringHeader();
hoveringHeader.render();
export default HoveringHeader;
