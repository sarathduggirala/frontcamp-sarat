export default function OverrideData(authors) {
  for (let i = 0; i < authors.length; i++) {
    document
      .getElementsByClassName("flex-container")
      [i].setAttribute("id", authors[i].author);
    document
      .getElementsByClassName("logo-image")
      [i].setAttribute("src", authors[i].urlToImage);
    document.getElementsByClassName("title")[i].innerText = authors[i].title;
    document.getElementsByClassName("published")[
      i
    ].innerText = `Published At: ${authors[i].publishedAt}`;
    document.getElementsByClassName("description")[i].innerText =
      authors[i].description;
    document
      .getElementsByClassName("continue-reading")
      [i].setAttribute("id", authors[i].url);
  }
}
