  let spinThePanda = document.getElementById("centerpiece");

  spinThePanda.addEventListener("mouseover", function() {
    anime({
      targets: '#centerpiece',
      rotate: '1turn',
      backgroundColor: '#f4f4',
      duration: 8000,
      loop: true
    });  
  });
  
// let ringTheBell = document.querySelector("header");

// ringTheBell.addEventListener("mouseover", function() {
//    anime({
//     targets: '.bell',
//     rotate: [45, -45],
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     duration: 2000,
//     loop: true
//   });

// });

//grid effect
anime({
  targets: '.staggering-grid-demo .el',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});

