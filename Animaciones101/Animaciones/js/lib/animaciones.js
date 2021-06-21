(function () {

  var $cajaRoja = $(".cajaRoja");
  $cajaRoja.clearQueue();

  function mover(dir) {
    switch (dir) {
      case "arr":
        $cajaRoja.animate({
          top: "-=50px"
        });
        break;
      case "abj":
        $cajaRoja.animate({
          top: "+=50px"
        }, 200);
        break;
      case "der":
        $cajaRoja.animate({
          left: "+=50px"
        });
        break;
      case "izq":
        $cajaRoja.animate({
          left: "-=50px"
        });
        break;

      default:
        $cajaRoja.animate({
          top: "0px",
          left: "0px"
        });

    }
  }

  $("button").on("click", function () {
    var dir = $(this).data("dir");
    mover(dir);
  })

})();