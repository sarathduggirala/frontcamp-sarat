export default function hideUnnecessaryChannel(numberOfDivisionsToBeHidden) {
  let divisionsToBeHidden = document.getElementById("authors-division")
    .childNodes;
  for (
    let count = divisionsToBeHidden.length - numberOfDivisionsToBeHidden;
    count < divisionsToBeHidden.length;
    count++
  ) {
    divisionsToBeHidden[i].style.display = "none";
  }
}
