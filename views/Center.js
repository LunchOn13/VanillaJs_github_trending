import View from "./View";

class Center extends View {
  render() {
    const motherDiv = document.getElementById("Center");

    const p_ = document.createElement("p");
    p_.innerHTML =
      "<strong>Trending</strong><br>See What the GitHub community is most excited about today.";
    motherDiv.appendChild(p_);
  }
}

const center = new Center();
center.render();

export default Center;
