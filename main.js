
$(document).ready(function() {
  
    // agregar un controlador de eventos para cada pestaña de filtro
    $('#filtro-imagenes a').click(function() {
      
      let valorFiltro = $(this).attr('data-filter');
      
      
      if (valorFiltro === 'todos') {
        $('.filtro-imagen').fadeIn();
      } else {
        
        $('.filtro-imagen').fadeOut();
        $('.filtro-imagen.' + valorFiltro).fadeIn();
      }
      $(this).addClass('active');
     $(this).parent().siblings().find('a').removeClass('active');
    });


    $('.nbtnext, .nbtend').click(function () {
      // Cambiar el nav-link activo al siguiente
      //$('#paso1-tab').next().find('a').tab('show');
      let id = $(this).parent().attr('id');
      id = '#'+id;
      let paso = parseInt(id[5]);
      //let posicion = $('.card-header-tabs .nav-item').find(".active").attr('href');
      let nuevaposicion = '#step'+ (paso+1);
      nuevaPestaña = $('a.nav-link[href$="'+ (paso+1) +'"]');
      pestañaActual = $('.card-header-tabs .nav-item').find(".active")
      
      pestañaActual[0].ariaSelected = false;
      pestañaActual[0].tabIndex = -1;
      nuevaPestaña[0].ariaSelected = true;
      nuevaPestaña[0].tabIndex = 0;
      $(id).removeClass('active show')
      $(nuevaposicion).addClass('active show')
       pestañaActual.removeClass('active');
       nuevaPestaña.removeClass('disabled');
       nuevaPestaña.addClass('active');
        //parseInt($('.card-header-tabs .nav-item').find(".disabled").[0].attributes.href.textContent[5]);
      
      //$('.card-header-tabs .nav-item').find(".active").removeClass('active');
    });

    $('.nbtprevius').click(function () {
      let id = $(this).parent().attr('id');
      id = '#'+id;
      let paso = parseInt(id[5]);
      //let posicion = $('.card-header-tabs .nav-item').find(".active").attr('href');
      let nuevaposicion = '#step'+ (paso-1);
      nuevaPestaña = $('a.nav-link[href$="'+ (paso-1) +'"]');
      pestañaActual = $('.card-header-tabs .nav-item').find(".active")
      pestañaActual[0].ariaSelected = false;
      pestañaActual[0].tabIndex = -1;
      nuevaPestaña[0].ariaSelected = true;
      nuevaPestaña[0].tabIndex = 0;
      $(id).removeClass('active show')
      $(nuevaposicion).addClass('active show')
       pestañaActual.removeClass('active');
       nuevaPestaña.removeClass('disabled');
       nuevaPestaña.addClass('active');
    });


$('.exportpdf').click(function () {
  window.jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();
    let nombre = $('#nombrecompleto').val();
    let correo = $('#mail').val();
    let telefono = $('#telefono').val();
    let fechai = $('#fecha-hora-i').val();
    let datetimeParts = fechai.split('T');
    let fecha1 = datetimeParts[0];
    let hora1 = datetimeParts[1];
    let fechaf = $('#fecha-hora-f').val();
    let datetimeParts2 = fechaf.split('T');
    let fecha2 = datetimeParts2[0];
    let hora2 = datetimeParts2[1];
    let fentrega = $('input[name="entrega"]:checked').prev('.form-check-label').text();
    let cantp = $('#selectcant option:selected').text();
    let edad = $('#edad').val();
    let comentarios = $('#comentario').val();
    let direccion = $('#direccion').val();
    let tipov = $('#selecttipo option:selected').text();
    let modelo = $('#selectvehiculo option:selected').text();
    let precio = $('#precio').html();
    let deposito = $('#deposito').html();
    let imagenSrc = $('#imgselectid').attr('src');

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Resumen de reserva", 105, 25, null, null, "center");
    
    doc.setLineWidth(0.5);
    doc.line(15, 33, 195, 33);
    doc.line(15, 43, 195, 43);
    doc.line(15, 83, 195, 83);
    doc.line(15, 93, 195, 93);
    doc.line(15, 147, 195, 147);
    doc.line(15, 157, 195, 157);
    doc.line(15, 253, 195, 253);
    doc.line(15, 263, 195, 263);
    
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("Información personal", 35, 40);
    doc.text("Detalle de alquiler", 35, 90);
    doc.text("Detalle de vehículo", 35, 154);
    doc.text("Comentarios", 35, 260);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Nombre y apellido:", 20, 50);
    doc.text("Edad:", 20, 57);
    doc.text("Correo electrónico:", 20, 64);
    doc.text("Telefono:", 20, 71);
    doc.text("Dirección de hospedaje:", 20, 78);
    doc.text("Día de inicio:", 20, 100);
    doc.text("Hora de inicio:", 20, 107);
    doc.text("Día de fin:", 20, 114);
    doc.text("Hora de fin:", 20, 121);
    doc.text("Días de alquiler:", 20, 128);
    doc.text("Forma de entrega:", 20, 135);
    doc.text("Cantidad de personas:", 20, 142);
    doc.addImage("examples/images/Octonyan.jpg", "JPEG", 55, 164, 100, 70);
    doc.text("Tipo de vehículo:", 20, 241);
    doc.text("Modelo:", 20, 248);
    
    
    doc.setFont("helvetica", "normal");
    doc.text(nombre, 53, 50);
    doc.text(edad, 31, 57);
    doc.text(correo, 53, 64);
    doc.text(telefono, 37, 71);
    doc.text("Dirección de hospedaje:", 62, 78);
    doc.text("Día de inicio:", 43, 100);
    doc.text("Hora de inicio:", 45.5, 107);
    doc.text("Día de fin:", 38, 114);
    doc.text("Hora de fin:", 40.5, 121);
    doc.text("Días de alquiler:", 48, 128);
    doc.text("Forma de entrega:", 51.5, 135);
    doc.text("Cantidad de personas:", 59, 142);
    doc.text("Tipo de vehículo", 50, 241);
    doc.text("Modelo:", 34.5, 248);
    doc.text("Modeloasdasdadsasdasdasdas", 20, 270);






    
    
    
  
    
    
    doc.save("Reserva.pdf");

  });



  $('#selectvehiculo').on('change', function(){

    let vehiculoSeleccinado = $(this).val();
    let fechai = $('#fecha-hora-i').val();
    let fechaf = $('#fecha-hora-f').val();
    let dias = calculodias(fechai,fechaf);
    
    
    
    switch (vehiculoSeleccinado) {
        case 'panther':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Bicicleta-Cruiser-Vintage-Dama-Canasta.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (150*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte' + '</p>');

        break;
        case 'molotov':
          $('#imgselectid').attr('src', './assets/img/vehiculos/dinamo-molotov-rojo1200x900.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (2000*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');

        break;
        case 'atv180':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Cuatrimoto-ATV180-Verde-Negro-1200x825-1.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (1400*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');
        break;
        case 'atv200':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Cuatrimoto-ATV200-Naranja-Negro-1200x1000-1.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (1800*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');
        break;
        case 'dm250':
          $('#imgselectid').attr('src', './assets/img/vehiculos/DobleProposito-DM250-X-Negro-1.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (1250*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');
        break;
        case 'd125lt':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-D125-LT-Azul-Negro.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (525*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
        case 'd125':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-D125-Blanco-Azul.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (525*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
        case 'd150':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-D150-Azul-Negro.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (700*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
        case 'xw150':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-XW150-Rojo-Negro.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (700*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
        case '150azul':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-Vitalia-150-Azul-Blanco.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (700*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
        case '150rojo':
          $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-Vitalia-150-Rojo-Blanco.png');
          $('#imgselect').fadeIn();
          $('#precio').html('<p><strong>Precio: </strong> '+ '$ ' + (700*dias) + ' MXN</p>');
          $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
        default:
          $('#imgselect').hide();
          $('#precio').html('');
          $('#deposito').html('');
    } 

  });


  $('#selectcant').change(function() {
    
    let valorSeleccionado = parseInt($(this).val());

  if (valorSeleccionado == 2) {
    $('#selecttipo').prop('disabled', false);
      $('#selecttipo option[value="bicicleta"]').hide();
      $('#selectvehiculo').prop('selectedIndex', 0);
      $('#selecttipo').prop('selectedIndex', 0);
      $('#selectvehiculo').prop('disabled', true);
      $('#imgselect').hide();
      $('#precio').html('');
      $('#deposito').html('');
    }
    else if(valorSeleccionado == 1){
      $('#selecttipo').prop('disabled', false);
      $('#selecttipo option[value="bicicleta"]').show();
      $('#selectvehiculo').prop('selectedIndex', 0);
      $('#selecttipo').prop('selectedIndex', 0);
      $('#selectvehiculo').prop('disabled', true);
      $('#imgselect').hide();
      $('#precio').html('');
      $('#deposito').html('');
    }
    else{
      $('#selectvehiculo option:not(:selected)').hide();
      $('#selectvehiculo').prop('selectedIndex', 0);
      $('#selecttipo').prop('selectedIndex', 0);
      $('#selectvehiculo').prop('disabled', true);
      $('#selecttipo').prop('disabled', true);
      $('#imgselect').hide();
      $('#precio').html('');
      $('#deposito').html('');
    }
  });
  
  $('#selecttipo').on('change', function(){

    let tipo = $(this).val();
    let pasajeros = parseInt($('#selectcant').val());
    $('#selectvehiculo').prop('selectedIndex', 0);
    $('#imgselect').hide();
    
  if(tipo != "Seleccione el tipo:"){
    $('#selectvehiculo').prop('disabled', false);
    switch (tipo) {
      case 'bicicleta':
        $('#selectvehiculo option:not(:selected)').hide();
        $('#selectvehiculo option[value="panther"]').show();
        break;
      case 'cuatriciclo':
        if(pasajeros == 1){
          $('#selectvehiculo option:not(:selected)').hide();
          $('#selectvehiculo option[value="atv180"]').show();
          $('#selectvehiculo option[value="atv200"]').show();
        }
        else{
          $('#selectvehiculo option:not(:selected)').hide();
          $('#selectvehiculo option[value="atv200"]').show();
        } 
        break;
        case 'buggies':
          $('#selectvehiculo option:not(:selected)').hide();
          $('#selectvehiculo option[value="molotov"]').show();
          break;
        case 'motocross':
        $('#selectvehiculo option:not(:selected)').hide();
        $('#selectvehiculo option[value="dm250"]').show();
        break;
        case 'scooter':
          if(pasajeros == 1){
            $('#selectvehiculo option:not(:selected)').hide();
            $('#selectvehiculo option[value="d125lt"]').show();
            $('#selectvehiculo option[value="d125"]').show();
            $('#selectvehiculo option[value="d150"]').show();
            $('#selectvehiculo option[value="xw150"]').show();
            $('#selectvehiculo option[value="150azul"]').show();
            $('#selectvehiculo option[value="150rojo"]').show();
          }
          else{
            $('#selectvehiculo option:not(:selected)').hide();
            $('#selectvehiculo option[value="d150"]').show();
            $('#selectvehiculo option[value="xw150"]').show();
            $('#selectvehiculo option[value="150azul"]').show();
            $('#selectvehiculo option[value="150rojo"]').show();
          }
          break;
      }
  }
  else{
    $('#selectvehiculo').prop('disabled', true);
    $('#imgselect').hide();
    $('#precio').html('');
    $('#deposito').html('');
  }
    
  });




  $('#tabresumen, .nbtend').click(function () {

    
    let nombre = $('#nombrecompleto').val();
    let correo = $('#mail').val();
    let telefono = $('#telefono').val();
    let fechai = $('#fecha-hora-i').val();
    let datetimeParts = fechai.split('T');
    let fecha1 = datetimeParts[0];
    let hora1 = datetimeParts[1];
    let fechaf = $('#fecha-hora-f').val();
    let datetimeParts2 = fechaf.split('T');
    let fecha2 = datetimeParts2[0];
    let hora2 = datetimeParts2[1];
    let fentrega = $('input[name="entrega"]:checked').prev('.form-check-label').text();
    let cantp = $('#selectcant option:selected').text();
    let edad = $('#edad').val();
    let comentarios = $('#comentario').val();
    let direccion = $('#direccion').val();
    let tipov = $('#selecttipo option:selected').text();
    let modelo = $('#selectvehiculo option:selected').text();
    let precio = $('#precio').html();
    let deposito = $('#deposito').html();
    let imagenSrc = $('#imgselectid').attr('src');
   
    
  
  

    $('#resumentext').html('<h4 class="text-center">Resumen de reserva</h4>');
    $('#resumentext').append('<h5><u>Información personal</u></h5>');
    $('#resumentext').append('<p><strong>Nombre y apellido: </strong> ' + nombre + '</p>');
    $('#resumentext').append('<p><strong>Edad:</strong> ' + edad + '</p>');
    $('#resumentext').append('<p><strong>Correo electrónico:</strong> ' + correo + '</p>');
    $('#resumentext').append('<p><strong>Teléfono: </strong> ' + telefono + '</p>');
    $('#resumentext').append('<p><strong>Dirección de hospedaje: </strong> ' + direccion + '</p>');
    $('#resumentext').append('<h5><u>Detalle de alquiler</u></h5>');
    $('#resumentext').append('<p><strong>Día de inicio: </strong> ' + fecha1 + '</p>');
    $('#resumentext').append('<p><strong>Hora de inicio: </strong> ' + hora1 + '</p>');
    $('#resumentext').append('<p><strong>Día de fin: </strong> ' + fecha2 + '</p>');
    $('#resumentext').append('<p><strong>Hora de fin: </strong> ' + hora2 + '</p>');
    $('#resumentext').append('<p><strong>Días de alquiler: </strong> ' + calculodias(fechai,fechaf) + '</p>');
    $('#resumentext').append('<p><strong>Forma de entrega: </strong> ' + fentrega + '</p>');
    $('#resumentext').append('<p><strong>Cantidad de personas: </strong> ' + cantp + '</p>');
    $('#resumentext').append('<h5><u>Detalle de vehículo</u></h5>');
    $('#resumentext').append("<img src='" + imagenSrc + "' alt='Imagen del formulario'>");
    $('#resumentext').append('<p><strong>Tipo de vehículo: </strong> ' + tipov + '</p>');
    $('#resumentext').append('<p><strong>Modelo de vehículo: </strong> ' + modelo + '</p>');
    $('#resumentext').append(precio);
    $('#resumentext').append(deposito);
    $('#resumentext').append('<h5><u>Comentarios</u></h5>');
    $('#resumentext').append('<p>'+ comentarios + '</p>');


  });

function calculodias(fecha1, fecha2){
  let fecha1_sin_horas = moment(fecha1).startOf('day');
  let fecha2_sin_horas = moment(fecha2).startOf('day');
  let dias = fecha2_sin_horas.diff(fecha1_sin_horas, 'days');
return dias;
}

  let today = new Date().toISOString().substr(0, 16);
  $('#fecha-hora-i').attr('min', today);
  $('#fecha-hora-f').attr('min', today);
  $("#fecha-hora-f, #fecha-hora-i").on("change", function() {
    let fechaInicio = new Date($("#fecha-hora-i").val());
    let fechaFin = new Date($("#fecha-hora-f").val());
    if (fechaFin < fechaInicio) {
      alert("La fecha de finalización debe ser posterior a la fecha de inicio");
      $("#fecha-hora-f").val('');
    }
  });



  $('form').on('submit', function() {
    // Reinicia el formulario
    setTimeout(function() {
      $('form')[0].reset(); // espera 500ms antes de reiniciar el formulario
    },10);

    
 });

  });

  

