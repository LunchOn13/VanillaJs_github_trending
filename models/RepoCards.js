import Model from "./Model";

class RepoCard extends Model {
  constructor(
    author,
    name,
    content,
    lang,
    stars,
    stars_on_today,
    contributtors,
    forks,
    date
  ) {
    this.author = author;
    this.name = name;
    this.content = content;
    this.lang = lang; // can be null
    this.stars = stars; // 1 plus
    this.stars_on_today = stars_on_today; // 1 plus
    this.contributtors = contributtors;
    this.forks = forks;
    this.date = date;
  }

  setPlusStars() {
    this.stars++;
    this.stars_on_today++;
    this.notifyObservers();
  }
}
