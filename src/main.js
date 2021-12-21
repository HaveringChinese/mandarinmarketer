function dropDown() {
  document.getElementById("dropbtn").addEventListener('click', function() {
    document.getElementById("menu-drop-down").classList.toggle("show");  
  });
}

dropDown();

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

if (document.body.classList.contains("main-page")){
  populationIncrease();
}

var angloPop = 379004765;
var sinoPop = 918573829;
var secs = 230;

function populationIncrease(){
  document.getElementById("anglo-pop").innerHTML = angloPop.toLocaleString("en");
  document.getElementById("sino-pop").innerHTML = sinoPop.toLocaleString("en");

  setInterval(function(){
    angloPop++;
    sinoPop++;
    document.getElementById("anglo-pop").innerHTML = angloPop.toLocaleString("en");
    document.getElementById("sino-pop").innerHTML = sinoPop.toLocaleString("en");
}, secs);
}


var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
//dropdown menu

console.log("this works!");

function showMore(){
  var hiddenThings = document.getElementsByClassName("paragraph-body");
  for(var thing in hiddenThings){
    thing.classList.toggle("show");
  }
}

var readMore = document.getElementById("first");
readMore.addEventListener("click", function() {
    console.log("did we make it?");
    console.log(readMore);
    showMore();
});



// function emailSubmitted(){
//   document.getElementById("take-email").replaceChildren()
// }


// <input id='btnRemoveDummy' type="button" value="Remove DUMMY"/>


// function removeDummy() {
//     var elem = document.getElementById('dummy');
//     elem.parentNode.removeChild(elem);
//     return false;
// }
// function pageInit() {
//     // Hook up the "remove dummy" button
//     var btn = document.getElementById('btnRemoveDummy');
//     if (btn.addEventListener) {
//         // DOM2 standard
//         btn.addEventListener('click', removeDummy, false);
//     }
//     else if (btn.attachEvent) {
//         // IE (IE9 finally supports the above, though)
//         btn.attachEvent('onclick', removeDummy);
//     }
//     else {
//         // Really old or non-standard browser, try DOM0
//         btn.onclick = removeDummy;
//     }
// }
