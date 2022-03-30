function top(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function Meni() {
    var x = document.getElementsByClassName("menu").item(0);
    if (x.className == "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

