document.title = "FrontCamp Training Task Two";
var mainDivision = document.createElement("div");
var dataDiv = document.createElement("div");
function CreatePage() {
  // navbar
  let header = document.createElement("div");
  header.className = "header";
  header.setAttribute("class", "header");
  let title = document.createElement("h1");
  title.innerText = "NEWSFEED";
  title.setAttribute("class", "newsfeed");
  let another_feedback = document.createElement("h4");
  another_feedback.className = "another-feedback";
  another_feedback.innerText = "Yet another feedback";
  header.appendChild(title);
  header.appendChild(another_feedback);
  document.body.appendChild(header);
  // navbar end
  CreateContent();
}

// this method creates the main content of the body
var CreateContent = function() {
  mainDivision.setAttribute("class", "maindiv");
  mainDivision.setAttribute("id", "maindiv");

  let mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "flex-container");
  let logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  let content = document.createElement("div");
  content.setAttribute("class", "content");
  mainContainer.appendChild(logo);
  mainContainer.appendChild(content);

  var category = document.createElement("div");
  category.setAttribute("class", "category");
  var categories = createCategories();
  var emailInputField = document.createElement("input");
  emailInputField.setAttribute("type", "text");
  emailInputField.setAttribute("name", "fname");
  emailInputField.setAttribute("class", "input");
  emailInputField.setAttribute("id", "email");
  emailInputField.addEventListener("blur", validateEmailId);
  var subscribe = document.createElement("button");
  subscribe.setAttribute("value", "Subscribe");
  subscribe.setAttribute("class", "subscribe-button");
  subscribe.innerText = "Subscribe";
  category.appendChild(categories);
  category.appendChild(emailInputField);
  category.appendChild(subscribe);
  mainContainer.appendChild(category);
  mainDivision.appendChild(mainContainer);
  dataDiv.setAttribute("id", "data-div");
  displayAll(dataDiv);
  document.body.appendChild(mainDivision);
};
var generateItems = function() {
  let divisions = [];
  const titleNames = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
  ];
  // this loop will create 10 items
  for (var i = 0; i < 10; i++) {
    let mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "flex-container");
    mainContainer.setAttribute("id", i + 1);
    let logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    let logoImage = document.createElement("img");
    logoImage.setAttribute("src", "./Assets/image1.png");
    logo.appendChild(logoImage);
    let content = document.createElement("div");
    content.setAttribute("class", "content");
    let title = document.createElement("h3");
    title.innerText = "Title " + titleNames[i];
    let description = document.createElement("p");
    description.innerText =
      "We have helped over 120 Fortune 1000 companies in the following" +
      "industries solve their most complex technology challenges. Now see " +
      "what we can do for you. We have helped over 120 Fortune 1000 companies" +
      "in the following industries solve their most complex technology" +
      "challenges. Now see what we can do for you. We have helped over 120" +
      "Fortune 1000 companies in the following industries solve their most" +
      "complex technology challenges. Now see what we can do for you";
    let clickToReadMore = document.createElement("button");
    clickToReadMore.setAttribute("value", "Continue Reading");
    clickToReadMore.setAttribute("class", "continue-reading");
    clickToReadMore.setAttribute("id", i + 1);
    clickToReadMore.addEventListener("click", showPoPUp);
    clickToReadMore.innerText = "Continue Reading";
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(clickToReadMore);
    mainContainer.appendChild(logo);
    mainContainer.appendChild(content);
    divisions[i] = mainContainer;
  }
  return divisions;
};
var channels = generateItems();

var createCategories = function() {
  let selectCategory = document.createElement("select");
  selectCategory.setAttribute("class", "dropdown");
  selectCategory.setAttribute("id", "dropdown");
  selectCategory.addEventListener("change", displaySelectedItem);
  for (var i = 0; i <= 10; i++) {
    if (i == 0) {
      var category = document.createElement("option");
      category.setAttribute("value", "ALL");
      category.innerText = "ALL";
      selectCategory.appendChild(category);
    } else {
      var category = document.createElement("option");
      category.setAttribute("value", i);
      category.innerText = i;
      selectCategory.appendChild(category);
    }
  }
  return selectCategory;
};

var displayAll = function(dataDiv) {
  channels.forEach(element => {
    dataDiv.appendChild(element);
  });
  mainDivision.appendChild(dataDiv);
};

var removeAll = function() {
  let currentDataDiv = document.getElementById("data-div");
  let items = currentDataDiv.childNodes;
  var child = currentDataDiv.lastElementChild;
  while (child) {
    currentDataDiv.removeChild(child);
    child = currentDataDiv.lastElementChild;
  }
  while (currentDataDiv.hasChildNodes()) {
    currentDataDiv.removeChild();
  }
};

var displaySelectedItem = function() {
  let selectedItem = document.getElementById("dropdown").value;
  if (selectedItem == "ALL") {
    removeAll();
    displayAll(dataDiv);
  }
  for (var i = 0; i < 10; i++) {
    if (selectedItem == channels[i].id) {
      removeAll();
      dataDiv.appendChild(channels[i]);
    }
  }
};
// to show popup when continue reading button is clicked
function showPoPUp() {
  alert("Hello");
}

//This function is to validate an email Id entered by the user.
var validateEmailId = function() {
  let emailId = document.getElementById("email").value;
  //regular expression to validate email id.
  let emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;
  if (emailRegex.test(emailId)) {
    //if email id is valid then saving it to local storag.
    localStorage.setItem("EmailId", emailId);
  } else {
    alert("Invalid EmailId");
  }
};