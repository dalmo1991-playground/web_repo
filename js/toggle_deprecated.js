var button = document.createElement("button")
button.innerHTML = "Hide deprecated material"
button.id = "toggle-deprecated"
button.onclick = function (){
    
    var button = document.getElementById("toggle-deprecated")
    var sections = document.getElementsByClassName('deprecated')
    
    if (button.textContent=="Hide deprecated material"){
        button.textContent = "Show deprecated material";
        var display = "none";
    }else{
        button.textContent = "Hide deprecated material";
        var display = "block";
    }
    
    for (let index = 0; index < sections.length; index++) {
        sections[index].style.display = display;
    }
}

document.getElementById("doc-title").appendChild(button)
