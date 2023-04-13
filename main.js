$(window).on("load", function () {
  $("#cargando").fadeOut("slow");
});


$(document).ready(function () {

  $(".bi-arrow-up-short").hide();
  $(window).scroll(function () {
    let boton = $(".bi-arrow-up-short");

    if ($(window).scrollTop() > $(window).height() * 1.5) {

      boton.show();
    } else {
      boton.hide();
    }
  });

  // agregar un controlador de eventos para cada pestaña de filtro
  $('#filtro-imagenes a').click(function () {

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


  validate.validators.validacionCheckbox = function (value, options, key, attributes) {
    // Busca todos los checkboxes con el mismo nombre que el elemento actual
    let checkboxes = $('.form-check-label').closest('form').find('input[name="' + key + '"]');

    // Verifica si al menos uno de los checkboxes está seleccionado
    if (!(checkboxes.is(':checked')))
      return "^Por favor, selecciona una opción";
  };

  validate.validators.validacionSelect = function (value, options, key, attributes) {
    // Busca todos los checkboxes con el mismo nombre que el elemento actual
    let seleccionada = $('#rform').find('select[name="' + key + '"]').find(':selected');

    // Verifica si al menos uno de los checkboxes está seleccionado
    if (seleccionada.is(':default'))
      return "^Por favor, selecciona una opción";
  };



  $(function () {



    let constraints2 = {
      "#step1": function () {
        return {
          Nombre: {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },
            length: {
              minimum: 3,
              maximum: 50,
              message: "^Debe tener entre 3 y 50 caracteres"
            }
          },
          Email: {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },
            email: {
              message: "^Debe ser una dirección de correo electrónico válida"
            }
          },
          Telefono: {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },
            numericality: {
              numericality: true,
              message: "^Deben ser numeros"
            }
          },
          Edad: {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },
            numericality: {
              numericality: true,
              message: "^Deben ser numeros"
            }
          },

          Direccion: {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },
            length: {
              minimum: 3,
              maximum: 50,
              message: "^Debe tener entre 3 y 50 caracteres"
            }
          }
        };
      },
      "#step2": function () {
        return {
          'Fecha inicio': {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },

          },
          'Fecha fin': {
            presence: {
              presence: true,
              message: "^Por favor, complete este campo"
            },

          },
          Entrega: {
            validacionCheckbox: true

          },
          'Nro. de personas': {
            validacionSelect: true

          },

        };


      },
      "#step3": function () {
        return {

          'Tipo de vehiculo': {
            validacionSelect: true
          },

          Modelo: {
            validacionSelect: true
          }

        };


      },


    };

    // Agrega la validación al formulario utilizando jQuery
    function validacion(id) {


      let paso = parseInt(id[5]);
      //let posicion = $('.card-header-tabs .nav-item').find(".active").attr('href');
      let nuevaposicion = '#step' + (paso + 1);
      nuevaPestaña = $('a.nav-link[href$="' + (paso + 1) + '"]');
      pestañaActual = $('.card-header-tabs .nav-item').find(".active")
      let errors = validate($(id), constraints2[id]());

      if (errors) {
        // Si hay errores, evita que se envíe el formulario y muestra los errores


        for (let field in errors) {

          //let posicion = errors[field][0].indexOf(' ');
          let errorMessage = errors[field];




          let errorEl = $("<div>")
            .addClass("error-message")
            .text(errorMessage);
          let inputEl = $("[name='" + field + "']");
          let existingError = inputEl.next(".error-message");
          let inputs = 0;
          if (inputEl.length > 1) {
            inputEl.splice(1);
            inputDos = inputEl.closest('.mb-3').find('input[type="radio"]').not(inputEl);
            inputs = 2;
          }


          if (existingError.length) {
            // Si ya existe un mensaje de error, actualiza el texto del mensaje
            existingError.text(errorMessage);
          } else {
            // Si no existe un mensaje de error, agrega uno nuevo

            inputEl
              .addClass("error")
              .after(errorEl);
            if (inputs == 2) {
              inputDos.addClass("error")
            }
          }
          if (inputs == 2) {
            inputDos.on("input", function () {
              // Cuando el usuario comienza a escribir en el campo, se elimina el mensaje de error
              $(inputEl)
                .removeClass("error")
                .next(".error-message")
                .remove();
              inputDos.removeClass("error")


            });
          }

          inputEl.on("input", function () {
            // Cuando el usuario comienza a escribir en el campo, se elimina el mensaje de error
            $(this)
              .removeClass("error")
              .next(".error-message")
              .remove();
            if (inputs == 2) {
              inputDos.removeClass("error")
            }

          });
        }
        return false;
      } else {
        return true;
      }
    }

    $('.nbtnext, .nbtend').click(function () {
      // Cambiar el nav-link activo al siguiente
      //$('#paso1-tab').next().find('a').tab('show');
      let id = $(this).parent().attr('id');
      id = '#' + id;
      if (validacion(id)) {
        let paso = parseInt(id[5]);
        //let posicion = $('.card-header-tabs .nav-item').find(".active").attr('href');
        let nuevaposicion = '#step' + (paso + 1);
        nuevaPestaña = $('a.nav-link[href$="' + (paso + 1) + '"]');
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
      }
    });



    $('.cotizador a.nav-link').on('click', function (e) {
      // Prevenir que se active la pestaña si los campos no son válidos
      let id = $(this).attr('href');
      let link = $(this);
      console.log(id);

      let $campos1 = $(id).find('input, textarea');
      let $campos2 = $(id).find('select');


      $($campos1).on('keyup', function () {
        if (!(validacion(id))) {
          $('.cotizador a.nav-link').each(function () {
            let href = $(this).attr('href');
            if (href > id) {
              $(this).addClass('disabled');
            }
          });
        }
      });

      $($campos2).on('change', function () {
        if (!(validacion(id))) {
          $('.cotizador a.nav-link').each(function () {
            let href = $(this).attr('href');
            if (href > id) {
              $(this).addClass('disabled');
            }
          });
        }
      });


    });

  });



  $('.nbtprevius').click(function () {
    let id = $(this).parent().attr('id');
    id = '#' + id;
    let paso = parseInt(id[5]);
    //let posicion = $('.card-header-tabs .nav-item').find(".active").attr('href');
    let nuevaposicion = '#step' + (paso - 1);
    nuevaPestaña = $('a.nav-link[href$="' + (paso - 1) + '"]');
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
    let fentrega = $('input[name="Entrega"]:checked').prev('.form-check-label').text();
    let cantp = $('#selectcant option:selected').text();
    let edad = $('#edad').val();
    let comentarios = textoxlinea($('#comentario').val());
    let direccion = $('#direccion').val();
    let tipov = $('#selecttipo option:selected').text();
    let modelo = $('#selectvehiculo option:selected').text();
    let precio = $('#precio').text().substring(9);
    let deposito = $('#deposito').text().substring(12);
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
    doc.line(15, 263, 195, 263);
    doc.line(15, 273, 195, 273);

    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("Información personal", 35, 40);
    doc.text("Detalle de alquiler", 35, 90);
    doc.text("Detalle de vehículo", 35, 154);
    doc.text("Comentarios", 35, 270);

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
    modelovehiculo = $('#selectvehiculo option:selected').val();
    if (modelovehiculo == "panther" || modelovehiculo == "molotov" || modelovehiculo == "atv180" || modelovehiculo == "atv200") {
      doc.addImage(imagenSrc, "PNG", 55, 160, 100, 70);
    } else {
      doc.addImage(imagenSrc, "PNG", 70, 160, 70, 70);
    }
    doc.text("Tipo de vehículo:", 20, 237);
    doc.text("Modelo:", 20, 244);
    doc.text("Precio:", 20, 251);
    doc.text("Depósito:", 20, 258);


    doc.setFont("helvetica", "normal");
    doc.text(nombre, 53, 50);
    doc.text(edad, 31, 57);
    doc.text(correo, 53, 64);
    doc.text(telefono, 37, 71);
    doc.text(direccion, 62, 78);
    doc.text(fecha1, 43, 100);
    doc.text(hora1, 45.5, 107);
    doc.text(fecha2, 38, 114);
    doc.text(hora2, 40.5, 121);
    doc.text(String(calculodias(fechai, fechaf)), 48, 128);
    doc.text(fentrega, 51.5, 135);
    doc.text(cantp, 59, 142);
    doc.text(tipov, 50, 237);
    doc.text(modelo, 34.5, 244);
    doc.text(precio, 33, 251);
    doc.text(deposito, 37, 258);
    //doc.text(comentarios, 20, 284);
    doc.text(20, 280, comentarios, { lineHeightFactor: 1.5, multiline: true });



    doc.save('Reserva' + fecha1 + '.pdf');

  });



  $('#selectvehiculo').on('change', function () {

    let vehiculoSeleccinado = $(this).val();
    let fechai = $('#fecha-hora-i').val();
    let fechaf = $('#fecha-hora-f').val();
    let dias = calculodias(fechai, fechaf);



    switch (vehiculoSeleccinado) {
      case 'panther':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Bicicleta-Cruiser-Vintage-Dama-Canasta.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (150 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte' + '</p>');

        break;
      case 'molotov':
        $('#imgselectid').attr('src', './assets/img/vehiculos/dinamo-molotov-rojo1200x900.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (2000 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');

        break;
      case 'atv180':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Cuatrimoto-ATV180-Verde-Negro-1200x825-1.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (1400 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');
        break;
      case 'atv200':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Cuatrimoto-ATV200-Naranja-Negro-1200x1000-1.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (1800 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');
        break;
      case 'dm250':
        $('#imgselectid').attr('src', './assets/img/vehiculos/DobleProposito-DM250-X-Negro-1.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (1250 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $3000 MXN' + '</p>');
        break;
      case 'd125lt':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-D125-LT-Azul-Negro.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (525 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
      case 'd125':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-D125-Blanco-Azul.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (525 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
      case 'd150':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-D150-Azul-Negro.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (700 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
      case 'xw150':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-XW150-Rojo-Negro.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (700 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
      case '150azul':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-Vitalia-150-Azul-Blanco.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (700 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
      case '150rojo':
        $('#imgselectid').attr('src', './assets/img/vehiculos/Motoneta-Vitalia-150-Rojo-Blanco.png');
        $('#imgselect').fadeIn();
        $('#precio').html('<p><strong>Precio: </strong> ' + '$ ' + (700 * dias) + ' MXN</p>');
        $('#deposito').html('<p><strong>Depósito: </strong> ' + ' Pasaporte + $2000 MXN' + '</p>');
        break;
      default:
        $('#imgselect').hide();
        $('#precio').html('');
        $('#deposito').html('');
    }

  });


  $('#selectcant').change(function () {

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
    else if (valorSeleccionado == 1) {
      $('#selecttipo').prop('disabled', false);
      $('#selecttipo option[value="bicicleta"]').show();
      $('#selectvehiculo').prop('selectedIndex', 0);
      $('#selecttipo').prop('selectedIndex', 0);
      $('#selectvehiculo').prop('disabled', true);
      $('#imgselect').hide();
      $('#precio').html('');
      $('#deposito').html('');
    }
    else {
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

  $('#selecttipo').on('change', function () {

    let tipo = $(this).val();
    let pasajeros = parseInt($('#selectcant').val());
    $('#selectvehiculo').prop('selectedIndex', 0);
    $('#imgselect').hide();

    if (tipo != "Seleccione el tipo:") {
      $('#selectvehiculo').prop('disabled', false);
      switch (tipo) {
        case 'bicicleta':
          $('#selectvehiculo option:not(:selected)').hide();
          $('#selectvehiculo option[value="panther"]').show();
          break;
        case 'cuatriciclo':
          if (pasajeros == 1) {
            $('#selectvehiculo option:not(:selected)').hide();
            $('#selectvehiculo option[value="atv180"]').show();
            $('#selectvehiculo option[value="atv200"]').show();
          }
          else {
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
          if (pasajeros == 1) {
            $('#selectvehiculo option:not(:selected)').hide();
            $('#selectvehiculo option[value="d125lt"]').show();
            $('#selectvehiculo option[value="d125"]').show();
            $('#selectvehiculo option[value="d150"]').show();
            $('#selectvehiculo option[value="xw150"]').show();
            $('#selectvehiculo option[value="150azul"]').show();
            $('#selectvehiculo option[value="150rojo"]').show();
          }
          else {
            $('#selectvehiculo option:not(:selected)').hide();
            $('#selectvehiculo option[value="d150"]').show();
            $('#selectvehiculo option[value="xw150"]').show();
            $('#selectvehiculo option[value="150azul"]').show();
            $('#selectvehiculo option[value="150rojo"]').show();
          }
          break;
      }
    }
    else {
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
    let fentrega = $('input[name="Entrega"]:checked').prev('.form-check-label').text();
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
    $('#resumentext').append('<p><strong>Días de alquiler: </strong> ' + calculodias(fechai, fechaf) + '</p>');
    $('#resumentext').append('<p><strong>Forma de entrega: </strong> ' + fentrega + '</p>');
    $('#resumentext').append('<p><strong>Cantidad de personas: </strong> ' + cantp + '</p>');
    $('#resumentext').append('<h5><u>Detalle de vehículo</u></h5>');
    $('#resumentext').append("<img class='col-10 offset-1' src='" + imagenSrc + "' alt='Imagen del formulario'>");
    $('#resumentext').append('<p><strong>Tipo de vehículo: </strong> ' + tipov + '</p>');
    $('#resumentext').append('<p><strong>Modelo de vehículo: </strong> ' + modelo + '</p>');
    $('#resumentext').append(precio);
    $('#resumentext').append(deposito);
    $('#resumentext').append('<h5><u>Comentarios</u></h5>');
    $('#resumentext').append('<p>' + comentarios + '</p>');


  });

  function calculodias(fecha1, fecha2) {
    let fecha1_sin_horas = moment(fecha1).startOf('day');
    let fecha2_sin_horas = moment(fecha2).startOf('day');
    let dias = fecha2_sin_horas.diff(fecha1_sin_horas, 'days');
    if (dias == 0) {
      dias = 1;
    }
    return dias;
  }

  let today = new Date().toISOString().substr(0, 16);
  $('#fecha-hora-i').attr('min', today);
  $('#fecha-hora-f').attr('min', today);
  $("#fecha-hora-f, #fecha-hora-i").on("change", function () {
    let fechaInicio = new Date($("#fecha-hora-i").val());
    let fechaFin = new Date($("#fecha-hora-f").val());
    if (fechaFin < fechaInicio) {
      alert("La fecha de finalización debe ser posterior a la fecha de inicio");
      $("#fecha-hora-f").val('');
    }
  });

  $(function () {
    // Define las reglas de validación y los mensajes de error personalizados
    let constraints = {
      cnombre: {
        presence: {
          presence: true,
          message: "^Este campo no puede estar vacio"
        },
        length: {
          minimum: 3,
          maximum: 50,
          message: "^Debe tener entre 3 y 50 caracteres"
        }
      },
      cemail: {
        presence: {
          presence: true,
          message: "^Este campo no puede estar vacio"
        },
        email: {
          message: "^Debe ser una dirección de correo electrónico válida"
        }
      },
      ctelefono: {
        presence: {
          presence: true,
          message: "^Este campo no puede estar vacio"
        },
        numericality: {
          numericality: true,
          message: "^Deben ser numeros"
        }
      },

      asunto: {
        presence: {
          presence: true,
          message: "^Este campo no puede estar vacio"
        },
        length: {
          minimum: 3,
          maximum: 50,
          message: "^Debe tener entre 3 y 50 caracteres"
        }
      },
      mensaje: {
        presence: {
          presence: true,
          message: "^Este campo no puede estar vacio"
        },
      }
    };

    // Agrega la validación al formulario utilizando jQuery
    $("#cform").submit(function (event) {
      let errors = validate($("#cform"), constraints);

      if (errors) {
        // Si hay errores, evita que se envíe el formulario y muestra los errores
        event.preventDefault();

        for (let field in errors) {

          let errorMessage = errors[field];


          let errorEl = $("<div>")
            .addClass("error-message")
            .text(errorMessage);
          let inputEl = $("[name='" + field + "']");
          let existingError = inputEl.next(".error-message");

          if (existingError.length) {
            // Si ya existe un mensaje de error, actualiza el texto del mensaje
            existingError.text(errorMessage);
          } else {
            // Si no existe un mensaje de error, agrega uno nuevo
            inputEl
              .addClass("error")
              .after(errorEl);
          }
          inputEl.on("input", function () {
            // Cuando el usuario comienza a escribir en el campo, se elimina el mensaje de error
            $(this)
              .removeClass("error")
              .next(".error-message")
              .remove();
          });
        }
      } else {
        event.preventDefault();
        // Si no hay errores, envía el formulario por AJAX
        $.ajax({
          url: "https://formspree.io/f/xlekoodj",
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        }).done(function () {
          alert("¡Gracias por contactarnos!");
          $('#cform').trigger("reset");
        }).fail(function () {
          alert("Lo sentimos, hubo un error al enviar el formulario.");
        });
      }
    });
  });












  $('#rform').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/f/xyyabbzw",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    }).done(function () {
      alert("¡Gracias por tu reserva!");
      location.reload()
    }).fail(function () {
      alert("Lo sentimos, hubo un error al enviar el formulario.");
    });
  });



  let maxCaracteres = 109; // máximo de caracteres por línea
  function textoxlinea(comentarioUsr) {
    const palabras = comentarioUsr.split(' ');
    let lineas = [];
    let currentLine = '';

    palabras.forEach(palabra => {
      if (currentLine.length + palabra.length < maxCaracteres) {
        currentLine += palabra + ' ';
      } else {
        lineas.push(currentLine.trim());
        currentLine = palabra + ' ';
      }
    });

    if (currentLine.length > 0) {
      lineas.push(currentLine.trim());
    }

    return (lineas.join('\n'))
  }

  clima();
  divisas();
  function clima() {
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Tulum&appid=dcec7df661b1e6b0edab51d796b7339c', function (data) {


      let ciudad = data.name;
      let pais = data.sys.country;
      let temp = parseInt(data.main.temp - 273.15) + " °C";


      //$("#imgIco").attr("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
      $('#apiclima').html(ciudad + '-' + pais);
      $('#apiclima').append("<img src='" + `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` + "' alt='imagen clima'>");
      $('#apiclima').append('<strong>' + temp + '</strong>');


    });

  }


  function divisas() {
    $('#apidivisa').html('<strong> USD = </strong> ');
    $('#apidivisa').append('<strong> 18.18 MXN</strong>');

    /* $.getJSON('https://api.apilayer.com/exchangerates_data/convert?to=MXN&from=USD&amount=1&apikey=RGIIipYZ4OZXgIqsHeM96Qse78TV2KCK', function(divisa){
  
        let from = divisa.query.from;
        let to = divisa.query.to;
        let result= (divisa.result).toFixed(2);
  
      $('#apidivisa').html('<strong>'+from+' = </strong> ');
      $('#apidivisa').append('<strong> '+result+' '+to+'</strong>'); 
      
  
    }); */

  }






});



