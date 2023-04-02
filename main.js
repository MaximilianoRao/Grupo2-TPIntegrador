$(document).ready(function() {
    // agregar un controlador de eventos para cada pestaña de filtro
    $('#filtro-imagenes a').click(function() {
      // obtener el valor del atributo data-filter
      const valorFiltro = $(this).attr('data-filter');

      // mostrar todas las imágenes si se selecciona "Todos"
      if (valorFiltro === 'todos') {
        $('.filtro-imagen').fadeIn();
      } else {
        // ocultar todas las imágenes y mostrar solo las que coinciden con el filtro seleccionado
        $('.filtro-imagen').fadeOut();
        $('.filtro-imagen.' + valorFiltro).fadeIn();
      }

      // agregar la clase "active" a la pestaña de filtro seleccionada y eliminarla de las demás
     
      $(this).addClass('active').parent().addClass('active').siblings().find('a').removeClass('active').parent().removeClass('active');
    });
  });



