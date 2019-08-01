export default function hideUnnecessaryChannel(numberOfDivisionsToBeHidden) {
  let divisionsToBeHidden = document.getElementById("authors-division")
    .childNodes;
  for (
    let i = divisionsToBeHidden.length - numberOfDivisionsToBeHidden;
    i < divisionsToBeHidden.length;
    i++
  ) {
    divisionsToBeHidden[i].style.display = "none";
  }
}
