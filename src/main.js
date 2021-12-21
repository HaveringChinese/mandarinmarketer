//all pages
var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

//dropdown menu
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

//population counter on main page only 
function populationIncrease(){
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
}

if (document.body.classList.contains("main-page")){
  console.log("made it to main body");
  populationIncrease();
}


//expand paragraphs on our process page only
var textBlocks = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget scelerisque est, ac faucibus lacus. Pellentesque nunc dui, hendrerit in lacinia eget, convallis non enim. Nam sit amet sem tincidunt, molestie felis a, feugiat justo. Curabitur lacinia, augue a molestie dictum, mauris mi ornare massa, at lacinia urna metus eget dolor. Quisque efficitur enim et tincidunt egestas. Sed libero leo, hendrerit vitae posuere vitae, consectetur quis turpis. Phasellus ut pharetra nunc. Nunc porttitor justo quis lorem tincidunt, ac euismod lectus suscipit. Integer nulla dolor, fermentum a consectetur vel, consectetur imperdiet tortor. Etiam ac condimentum tortor.",
  "Praesent porta arcu nec lorem euismod, sed tempus ante feugiat. Proin nec pharetra sapien. Suspendisse sagittis vestibulum molestie. Ut id rutrum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent posuere sapien quis lacus semper, vel feugiat lacus tincidunt. Pellentesque eu lectus id erat luctus cursus. Sed pellentesque felis a ante gravida dignissim.",
  "Nulla facilisi. Maecenas lacinia nulla non nisl condimentum fringilla. Vestibulum vehicula auctor risus quis laoreet. Curabitur laoreet diam sed orci fermentum fringilla. Ut a interdum quam. Maecenas dapibus odio vel ante condimentum interdum. Maecenas laoreet, lectus sit amet accumsan pulvinar, eros orci aliquam quam, eget congue dui lectus et magna. Donec a eros eu eros rutrum pretium sit amet id dui. Cras malesuada, velit sed porttitor molestie, nisl eros egestas dolor, laoreet iaculis quam elit nec felis. In eget tempus libero. Donec eleifend sodales sapien ut pulvinar. Curabitur rhoncus mollis quam, a tincidunt magna."
];

function showMore(index){
  var paras = document.querySelectorAll("p");
  paras[index].innerHTML = textBlocks[index];
  paras[index].classList.toggle("show");
  }

function expandText(){
  var readMore = document.querySelectorAll(".more");
  for (let i = 0; i < readMore.length; i++){
    var readThis = readMore[i];
    readThis.addEventListener("click", function() {
      console.log(readThis.className + " was clicked");
      showMore(i);
      if (readMore[i].innerHTML === "Read More"){
        readMore[i].innerHTML = "Read Less";
      } else if (readMore[i].innerHTML === "Read Less"){
        readMore[i].innerHTML = "Read More";
      }
    });
  }
}

if (document.body.classList.contains("our-process")){
  console.log("made it to process body");
  expandText();
}

//about page only

const aboutText = [
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus ut metus pretium vestibulum. Sed felis dui, congue ut neque vel, cursus dignissim mi. Curabitur nec tempor orci. Integer id massa finibus, aliquet nisi et, sagittis erat. Praesent ultricies sed augue at efficitur. Morbi molestie mi in iaculis iaculis. Nam semper sapien sit amet est dignissim pharetra. In posuere sollicitudin eleifend. Aenean ullamcorper nisi id pellentesque commodo. Etiam placerat dapibus diam hendrerit cursus. Integer lacus est, sollicitudin eu justo id, placerat finibus diam. Donec pellentesque sapien vitae leo venenatis, egestas euismod magna pellentesque. Curabitur malesuada tempus sapien quis consequat. Donec vitae tristique diam. Fusce consectetur rhoncus erat. Suspendisse feugiat, felis sit amet ultricies ornare, enim risus euismod nisl, vestibulum finibus diam dui rhoncus elit.",
"Donec vehicula suscipit ipsum, ut facilisis nisi bibendum at. Fusce porta tempor sollicitudin. Ut fermentum sit amet elit vitae tincidunt. Morbi et vulputate metus, ut iaculis metus. Donec ac dui quis purus porttitor blandit at sed leo. Mauris id nunc condimentum, ornare risus non, vestibulum magna. Vivamus sollicitudin leo iaculis felis pharetra posuere. Nunc scelerisque, justo id porta consectetur, diam dolor cursus ligula, at fringilla quam orci sit amet ipsum. In ac tortor eu odio consequat vehicula non ac massa.",
"Nam sit amet enim eget orci ornare lobortis. In sollicitudin venenatis est, a accumsan nulla ornare non. Vivamus pellentesque nisl lectus, et consectetur nunc elementum in. Suspendisse at elementum orci. Fusce feugiat feugiat sodales. Pellentesque lacinia suscipit vulputate. Quisque blandit lacus erat, non luctus eros laoreet vitae. Morbi ex sapien, egestas eget libero vel, efficitur pellentesque magna.",
"Aenean hendrerit felis id massa dictum, sit amet feugiat odio convallis. Nunc et erat luctus, vehicula libero eleifend, faucibus augue. Aenean volutpat euismod scelerisque. Mauris in urna non lectus placerat efficitur. Curabitur placerat est maximus enim egestas viverra. Curabitur pulvinar diam non massa tempus luctus. Integer quam lorem, mattis sed vehicula semper, imperdiet gravida felis. Vestibulum congue dolor et sem ultricies sagittis. Praesent non dolor arcu. Aenean vel neque consectetur, eleifend ex a, bibendum arcu.",
"Nunc luctus ultricies erat, ac suscipit tortor. Mauris urna sapien, dapibus a nulla sit amet, sodales facilisis mauris. Praesent blandit quis ante eu vulputate. Quisque hendrerit nunc id consequat viverra. Donec euismod risus quis eros consequat, eu elementum felis faucibus. Aliquam ac lacus vitae odio maximus ultrices. Vivamus sagittis vitae ante dignissim laoreet. Suspendisse augue libero, malesuada id placerat eget, ultricies in nibh. Ut id augue a mi lacinia bibendum nec at arcu. Sed enim nisi, fringilla in posuere quis, fermentum eget tortor. Quisque sed dolor risus. Nam maximus ligula a vulputate consectetur."
];

function addText(){
  var aboutParagraphs = document.querySelectorAll("p");
  for (var index = 0; index < aboutParagraphs.length - 1; index++){
    aboutParagraphs[index].innerHTML = aboutText[index];
  }
}

if (document.body.classList.contains("about-page")){
  console.log("made it to about page");
  addText();
}

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
