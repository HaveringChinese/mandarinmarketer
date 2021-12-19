
var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
//dropdown menu


window.onload = function dropDown() {
  document.getElementById("dropbtn").addEventListener('click', function() {
    document.getElementById("menu-drop-down").classList.toggle("show");  
  });
};

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
