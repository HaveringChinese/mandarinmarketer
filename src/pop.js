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
