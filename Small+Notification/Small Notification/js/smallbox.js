//encapsulando el codigo para que no choque con otro plugin
(function () {
  $.smallBox = function (opciones) {

    opciones = $.extend({
      //propiedades
      titulo: undefined,
      subtitulo: undefined,
      contenido: undefined,
      fa: undefined,
      img: undefined,
      timeout: 3000,

    }, opciones);

    var html = "";

    html += '<div class="smallBox-contenedor">';
    html += '  <div class="smallBox-foto">';
    html += '    <img src="' + opciones.img + '" />';
    html += '  </div>';
    html += '  <div class="smallBox-contenido" align="center">';
    html += '    <div class="smallBox-textoContenedor" align="left">';
    html += '      <span class="smallBox-titulo">' + opciones.titulo + '</span>';
    html += '      <span class="smallBox-subTitulo">' + opciones.subtitulo + '</span>';
    html += '    </div>';
    html += '    <div class="smallBox-pico"></div>';
    html += '    <div class="smallBox-cajaColor">';
    html += '      <div class="smallBox-colorTexto">@ ' + opciones.contenido + '</div>';
    html += '      <div class="smallBox-colorIcon">@</div>';
    html += '    </div>';
    html += '    <div class="smallBox-sombra"></div>';
    html += '  </div>';
    html += '</div>';

    $("body").append(html);
    animar_entrada();

    setTimeout(function () {
      animar_salida();
    }, opciones.timeout);

  };

  function animar_entrada() {
    var $smallBox = $(".smallBox-contenedor");
    var tl = new TimelineMax();
    tl.from($smallBox, 1.3, { x: "+=100px", ease: Bounce.easeOut })
      .from($smallBox, 1, { opacity: 0 }, "-=1.3");
  }

  function animar_salida() {
    var $smallBox = $(".smallBox-contenedor");
    var tl = new TimelineMax();
    tl.to($smallBox, 1, { x: "+=100px" })
      .to($smallBox, 1, { opacity: 0, onComplete: remover_smallbox }, "-=1");
  }

  //funcion callback
  function remover_smallbox() {
    $(".smallBox-contenedor").remove();
  }




})();

//PAGINA DE DONDE TOMA LA ANIMACIÓN 
// https://greensock.com/