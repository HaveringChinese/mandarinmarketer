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
"Mandarin Marketer was born from a simple dream: to circumvent the US-China political relationship and improve Chinese-American relations by building stronger business and commerical ties. It is no surprise that tensions are at an all time high between the two world powers, and government-to-government disputes and interest jostling are far too often at odds with what is best for the two countries' respective populations.",
"We also knew from history that regardless of the state of politics between China and the United States, commerce remained an unstoppable uniting force, creating opportunity and unparalleled incentives for greater mututal understanding and eventually cultural cross-pollination.",
"US-China business is truly invaluable for global stability and prosperity. Unfortunately, the lion's share of US-China trade and commerce is gobbled up by the largest multinational and domestic corporations on both sides. These behemoths wield tremendous marketing resources and have historically all but entirely crowded out smaller competitors.",
"Thankfully, the increasing versatility and democratization of the internet has provided unprecedented varieties and quantities of marketing resources and tools to any business people who have the knowhow to utilize them. This trend has made it truly possible for any business, no matter how small, to compete toe-to-toe with the megacorporations, even in the Chinese market. Unfortunately, this has created its own challenge for those marketers: how is it possible to stand out from the crowd when that crowd is growing larger and louder than ever?",
"That's where Mandarin Marketer makes all of the difference. Mandarin Marketer focuses on smaller clients in more targeted marketspace, and leverages decades of combined experience in China, as well as its experts' unparalleled understanding of China's nearly 1.5 billion residents, all to bring absolutely exceptional market penetration and client retention. By connecting American and Chinese businesses at the lowest levels and smallest scales, we will steadily stitch together the fabrics of these two magnificent societies, ensuring a more harmonious and prosperous future for all."
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
