(function () {

  $.ajax({
    type: 'GET',
    url: 'http://www.json-generator.com/api/json/get/cfZEejokte?indent=2',
    dataType: 'json'
  }).done(function (data) {
    var persona = data;
    console.log(persona);

    $("#picFoto").attr("src", data.picture);
    $("#txtName").val(data.name);
    $("#txtAddress").val(data.address);
    $("#txtPhone").val(data.phone);
    $("#txtGender").val(data.gender);

  }).fail(function () {
    console.log("Fallo el envio");
  }).always(function () {
    console.log("Completo");
  })
})();