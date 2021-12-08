//dropdown menu

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
} 

//population api 

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
  headers: {
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    'x-rapidapi-key': 'd57bbf1c07msh1637d907992c851p1916eejsn2664a1b0485e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


//worldPopAPI

const Http = new XMLHttpRequest();
const url = "https://www.worldpop.org/rest/data";
Http.open("GET", url);
Http.send();

Http.onreadystatechange=(e)=>{
  console.log(Http.responseText)
}