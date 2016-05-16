////$(document).ready(function() {
// //
// //   $("#cargar").click(function(){
// //     alert("quepello");
// //     $("#contenido").load("http://eliotgordillo95.github.io/");
// //   });
// //
// // $("#ajax").click(function(){
// //
// //   $.ajax({
// //       url:"https://andreihelo-restful-api.herokuapp.com/students",
// //       success: function(result, status, xhr){
// //
// //         $("#contenido").text(JSON.stringify(result))}
// //   });
// //   });
// //   });
// $(document).ready(function() {
//
//      $("#cargar").click(function(){
//               alert("quepello");
//               $("#contenido").load("http://eliotgordillo95.github.io/");
//       });
// $("#ajax").click(function(){
//      $.ajax({
//          url:"https://andreihelo-restful-api.herokuapp.com/students",
//          success:
//          function(result, status, xhr){
//          var listas = '';
//                 $("result").forEach(function(estudiante){
//                 listas += '<tr><td>' + 'estudiante.id' + '</td><td>' +
//                 'estudiante.registration_number' + '</td><td>' + 'estudiante.name' +
//                 '</td><td>' + 'estudiante.last_name' + '</td><td>' + 'estudiante.status' + '</td></tr>';
//                 $('tbody').html(listas);
//                 )}
//           }
//      });
// });
// $("#crear").click(function () {
//
// var miembro = {
// 	   "registration_number"  : prompt("Escriba la matricula"),
//       "name"                : prompt("Escriba el nombre"),
//       "last_name"           : prompt("Escriba el apellido"),
//       "status"              : prompt("Escriba el status"),
//
// 	};
//
// $.ajax({
//
// 	url: "https://andreihelo-restful-api.herokuapp.com/students",
// 	method: "POST",
//   error: function(xhr){
//             alert("Error " + xhr.status + " " + xhr.statusText);
//         },
// 	data: miembro,
// 	success: function (result, status, xhr) {
// 		      	$("#contenido").empty().css("opacity", 1);
//
//       			$("#contenido").append("Alumno creado exitosamente!");
//       			$("#contenido").text(JSON.stringify(result));
//
//
// }
// });
// });
//
//
//    });
$(document).ready(

function(){

//   $("#listar").click(function(){
// alert("quepello");
// $("#contenido").load("http://eliotgordillo95.github.io/");
// });

$("#listar").click(function(){
$.ajax({
url:"https://andreihelo-restful-api.herokuapp.com/students",
success: function(result, status, xhr){
  // //
$("#contenido").text(JSON.stringify(result))}
});
});

alert("JS funciona! proceed");

$("#cargar").click(function(){

	alert("quibo");
	$("#contenido").load("http://eliotgordillo95.github.io/");
});
//Aqui poner atencion, es AJAX
$("#ajax").click(function(){

	$.ajax({
		url: "https://andreihelo-restful-api.herokuapp.com/students",
		success: function(result, status, xhr){

			/*$("#contenido").html(result);
			$("#contenido").text(JSON.stringify(result));
			$("#contenido").html(result);*/
			$("#contenido").text(JSON.stringify(result));
			//$("#contenido").html(result);

		}


	});
	});

 $("#get").click(function () {
    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students",
      success: function (result, status, xhr) {
      	$("#contenido").empty().css("opacity", 1);
      	$("#contenido").append(
      		//"<td><th>Matricula</th></td>" + "<td><th>Nombre</th></td>" + "<td><th>Apellido</th></td>"
      		"<table><thead>" + "<th>ID</th>" + "<th>Matricula</th><" + "<th>Nombre</th>" + "<th>Apellido</th>"
          + "<th>Estatus</th>" + "<th>Eliminar</th></thead><tbody>"
      		);
        for (var i = 0; i < 50; i++) {
          $("tbody").append(
            "  <tr><td> " + result[i].id + "</td><td>" + result[i].registration_number + "  </td><td> " + result[i].name +
            "  </td><td> " + result[i].last_name + "</td><td>" + result[i].status + "</td><td>"
            + "<button id = 'eliminar'>Eliminar</button>" + "</td></tr>"
          );
        }
        $("#contenido").append("</tbody></table>");
      }
    });
  });


$("#post").click(function () {

var miembro = {
	   "registration_number" : prompt("Escriba la matricula"),
      "name"                : prompt("Escriba el nombre"),
      "last_name"           : prompt("Escriba el apellido"),
      "status"              : prompt("Escriba el status"),

	};

$.ajax({

	url: "https://andreihelo-restful-api.herokuapp.com/students",
	method: "POST",
  error: function(xhr){
            alert("Error " + xhr.status + " " + xhr.statusText);
        },
	data: miembro,
	success: function (result, status, xhr) {
		      	$("#contenido").empty().css("opacity", 1);

      			$("#contenido").append(
      			"Alumno creado exitosamente!"
      		);
      			$("#contenido").text(JSON.stringify(result));


}
})
})//Aqui termina Crear

$("#actualizar").click(function () {

var miembro = {
     "registration_number" : prompt("Escriba la matricula"),
      "name"                : prompt("Escriba el nombre"),
      "last_name"           : prompt("Escriba el apellido"),
      "status"              : prompt("Escriba el status"),

  };


$.ajax({
  url: "https://andreihelo-restful-api.herokuapp.com/students",
  method: "PATCH",
  error: function(xhr){
            alert("Error: " + xhr.status + " " + xhr.statusText);
        },
  data: miembro,
  success: function (result, status, xhr) {
            $("#contenido").empty().css("opacity", 1);

            $("#contenido").append(
            "Alumno creado exitosamente!"
          );
            $("#contenido").text(JSON.stringify(result));

}})})






	});//Acaba el ready
