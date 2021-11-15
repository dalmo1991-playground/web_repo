var button = document.createElement("button");
button.innerHTML = "Show deleted material";
button.id = "toggle-deprecated";
button.onclick = function () {
  var button = document.getElementById("toggle-deprecated");
  var sections = document.getElementsByClassName("deprecated");

  if (button.textContent == "Hide deleted material") {
    button.textContent = "Show deleted material";
    var display = "none";
  } else {
    button.textContent = "Hide deleted material";
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

var message = document.createElement("span");
message.innerHTML = "\t Deleted material still appears in the index. It is text that was relevant to the project but not needed anymore (e.g., because the scope of the project has shifted)";
message.style.fontSize = "12pt"

document.getElementsByClassName("index-list")[0].appendChild(button);
document.getElementsByClassName("index-list")[0].appendChild(message);
