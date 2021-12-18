
var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
//dropdown menu

  var angloPop = 379004765;
  var sinoPop = 918573829;
  var secs = 230;

  document.getElementById("anglo-pop").innerHTML = angloPop.toLocaleString("en");
  document.getElementById("sino-pop").innerHTML = sinoPop.toLocaleString("en");

setInterval(function(){
  angloPop++;
  sinoPop++;
  document.getElementById("anglo-pop").innerHTML = angloPop.toLocaleString("en");
  document.getElementById("sino-pop").innerHTML = sinoPop.toLocaleString("en");
}, secs);




function dropDown() {
  document.getElementById("menu-drop-down").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}; 
