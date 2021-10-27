var button = document.createElement("button");
button.innerHTML = "Hide deprecated material";
button.id = "toggle-deprecated";
button.onclick = function () {
  var button = document.getElementById("toggle-deprecated");
  var sections = document.getElementsByClassName("deprecated");

  if (button.textContent == "Hide deprecated material") {
    button.textContent = "Show deprecated material";
    var display = "none";
  } else {
    button.textContent = "Hide deprecated material";
    var display = "show";
  }

  for (let index = 0; index < sections.length; index++) {
    if (display == "none") {
      sections[index].style.display = display;
    } else {
      if (sections[index].nodeName.toLowerCase() == "span") {
        sections[index].style.display = "inline";
      } else {
        sections[index].style.display = "block";
      }
    }
  }
};

document.getElementsByClassName("index-list")[0].appendChild(button);
