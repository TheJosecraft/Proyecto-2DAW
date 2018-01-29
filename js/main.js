$(document).ready(function () {

    var datos = {
        "datasets": [{
            "data": [90, 88, 85, 87, 84, 82, 83, 81, 79, 83, 80, 80.2],
            "backgroundColor":'rgb(56, 205, 142)'
        }],
        "labels": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };

    var opciones = {
      "legend":{
          "display": true,
          "labels":{
              "fontColor":'rgb(255, 99, 132)'
          },
          "title":{
              "text":'Peso',
              "fontColor":'rgb(255, 99, 132)'
          }

      }
    };

    console.log(datos);

    console.log(opciones);
    var ctx = $("#grafico");
    var grafico = new Chart(ctx, {
        type: 'line',
        data: datos,
        options: opciones
    });

});
