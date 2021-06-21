(function () {

  $.bigBox = function (opciones, callback) {
    opciones = $.extend({
      fa: "fa-thumbs-o-up",
      titulo: undefined,
      contenido: undefined,
      boton: "Aceptar"
    }, opciones);
    console.log("vamos bien");


    /*para que sean obligatorias
      titulo: undefined,
      contenido: undefined,*/

    /*boton: "Aceptar" es opcional*/

    if (opciones.titulo === undefined) {
      alert("El titulo es necesario");
      return;
    }

    if (opciones.contenido === undefined) {
      alert("El contenido es necesario");
      return;
    }

    //agregando la pantalla que bloquea el contenido
    var contenido = "";
    contenido = '<div class="bigBox-Fondo"></div>';


    contenido = "";
    contenido += '<div class="bigBox-contenedor" align="center">';
    contenido += '<div class="bigBox-Cerrar"><i class="fa fa-times"></i></div>';
    contenido += '<div class="bigBox-Circulo"><i class="fa ' + opciones.fa + ' fa-3x"></i></div>';
    contenido += '<div class="bigBox-Contenido">';
    contenido += '<span class="bigBox-Titulo">' + opciones.titulo + '</span>';
    contenido += '<span class="bigBox-Texto">' + opciones.contenido + '</span>';
    contenido += '</div>';
    contenido += '<button class="bigBox-Boton">' + opciones.boton + '</button>';
    contenido += '</div>';

    $("body").append(contenido);

    animar_entrada();

    //funcion del btn cerrar
    //si estas en el body y ademas tienes la clase bigBox-Cerrar ejecuta la función
    $(".bigBox-Cerrar").on("click", function () {
      animar_salida();

      if (typeof callback === 'function') {
        callback('boton-cerrar');
      }
    });

    //funcion del boton principal
    $(".bigBox-Boton").on("click", function () {
      animar_salida();

      if (typeof callback === 'function') {
        callback('boton-principal');
      }
    });


    //animar la entrada
    function animar_entrada() {
      var $fondo = $(".bigBox-Fondo");

      var $bigBox = $(".bigBox-contenedor");
      //$fondo.fadeIn(300);
      //utilizando el timelienmax -- libreria
      //Primero lo mostramos

      /*centrando la caja*/
      var anchoPantalla = $(window).width();
      var altoPantalla = $(window).height();
      console.log(anchoPantalla);
      console.log(altoPantalla);

      var anchoBox = $bigBox.width();
      var altoBox = $bigBox.height();
      console.log(anchoBox);
      console.log(altoBox);

      $bigBox.css({
        top: (altoPantalla / 2) - (altoBox / 2),
        left: (anchoPantalla / 2) - (anchoBox / 2)
      })




      $fondo.show();
      $bigBox.show();
      var tl = new TimelineMax();
      tl.to($fondo, 0.5, { opacity: 0.3 })
        .to($bigBox, 1, { opacity: 1 }, "-=0.5")
        .from($bigBox, 0.8, { y: "-=600", ease: Bounce.easeOut }, "-=0.5");
    }

    //animar la entrada
    function animar_salida() {
      var $fondo = $(".bigBox-Fondo");
      var $bigBox = $(".bigBox-contenedor");
      //$fondo.fadeIn(300);
      //utilizando el timelienmax -- libreria
      //Primero lo mostramos

      var tl = new TimelineMax();
      tl.to($fondo, 0.5, { opacity: 0 })
        .to($bigBox, 1, { opacity: 0, onComplete: remover_bigbox }, "-=0.5")
      //onComplete: remover_bigbox crea un callback que llama a la funcuión
    }
    function remover_bigbox() {
      var $fondo = $(".bigBox-Fondo");
      var $bigBox = $(".bigBox-contenedor");
      $fondo.remove();
      $bigBox.remove();
    }
  };



})();