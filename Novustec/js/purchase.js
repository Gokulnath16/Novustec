$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "0433172342079 -	Hole-Type Nozzle ": null,
        "433172349079 - Hole-Type Nozzle": null,
        "0433172355079 -	Hole-Type Nozzle": null,
        "0433172391079 -	Hole-Type Nozzle": null,
      },
    });
  });

//nav
$(document).ready(function(){
    $('.sidenav').sidenav();
});

function cart(){
 var part_num = [];
 get_part_num = document.getElementById('box').value;
 part_num.push(get_part_num);
 console.log(part_num);
}

//Toast

  var toastHTML = '<span style="font-weight: bold; margin-left: 30%">Added to cart !</span>';

  $('a').click(function (e) {
      e.preventDefault();                   // prevent default anchor behavior
      var goTo = this.getAttribute("href"); // store anchor href

      // do something while timeOut ticks ...

      setTimeout(function(){
           window.location = goTo;
      }, 1000);                             // time in ms
  });

/*


  0433172342079	Hole-Type Nozzle	1822.00
  0433172349079	Hole-Type Nozzle	2465.00
  0433172355079	Hole-Type Nozzle	1529.00
  0433172368079	Hole-Type Nozzle	1581.00
  0433172377079	Hole-Type Nozzle	1452.00
  0433172378079	Hole-Type Nozzle	1706.00
  0433172381079	Hole-Type Nozzle	1753.00
  0433172385079	Hole-Type Nozzle	1648.00
  0433172391079	Hole-Type Nozzle	3519.00
  0433172396079	Hole-Type Nozzle	2281.00
  0433172413079	Hole-Type Nozzle	1844.00
  0433172423079	Hole-Type Nozzle	1706.00
  0433172435079	Hole-Type Nozzle	1514.00


*/
