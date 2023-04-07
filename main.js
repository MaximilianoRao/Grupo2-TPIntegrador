
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


    doc.text("Hello world!", 10, 10);
    
    
    doc.save("Cotizacion.pdf");

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
   
    
  
  

    $('#resumentext').html('<h3>Resumen del formulario</h3>');
    $('#resumentext').append('<h4>Información personal</h4>');
    $('#resumentext').append('<p><strong>Nombre y apellido: </strong> ' + nombre + '</p>');
    $('#resumentext').append('<p><strong>Edad:</strong> ' + edad + '</p>');
    $('#resumentext').append('<p><strong>Correo electrónico:</strong> ' + correo + '</p>');
    $('#resumentext').append('<p><strong>Teléfono: </strong> ' + telefono + '</p>');
    $('#resumentext').append('<p><strong>Teléfono: </strong> ' + direccion + '</p>');
    $('#resumentext').append('<h4>Detalle de alquiler</h4>');
    $('#resumentext').append('<p><strong>Día de inicio: </strong> ' + fecha1 + '</p>');
    $('#resumentext').append('<p><strong>Hora de inicio: </strong> ' + hora1 + '</p>');
    $('#resumentext').append('<p><strong>Día de fin: </strong> ' + fecha2 + '</p>');
    $('#resumentext').append('<p><strong>Hora de fin: </strong> ' + hora2 + '</p>');
    $('#resumentext').append('<p><strong>Días de alquiler: </strong> ' + calculodias(fechai,fechaf) + '</p>');
    $('#resumentext').append('<p><strong>Forma de entrega: </strong> ' + fentrega + '</p>');
    $('#resumentext').append('<p><strong>Cantidad de personas: </strong> ' + cantp + '</p>');
    $('#resumentext').append('<h4>Detalle de vehiculo</h4>');
    $('#resumentext').append("<img src='" + imagenSrc + "' alt='Imagen del formulario'>");
    $('#resumentext').append('<p><strong>Tipo de vehículo: </strong> ' + tipov + '</p>');
    $('#resumentext').append('<p><strong>Modelo de vehículo: </strong> ' + modelo + '</p>');
    $('#resumentext').append(precio);
    $('#resumentext').append(deposito);
    $('#resumentext').append('<h4>Comentarios</h4>');
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

  

