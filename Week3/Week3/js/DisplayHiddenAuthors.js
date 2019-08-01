export default function displayHiddenAuthors() {
  let channelToDisplay = document.getElementById("authors-division").childNodes;
  channelToDisplay.forEach(channel => {
    channel.style.display = "flex";
  });
}
