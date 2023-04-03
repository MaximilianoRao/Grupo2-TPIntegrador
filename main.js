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


    $('.nbtnext').click(function () {
      // Cambiar el nav-link activo al siguiente
      //$('#paso1-tab').next().find('a').tab('show');
     // console.log($(this).parent().attr('id'));
      let id = $(this).parent().attr('id');
      let posicion = parseInt($('.card-header-tabs .nav-item').find(".active").attr('href')[5]);
       // $('.card-header-tabs .nav-item').find(".active").addClass('disabled');
       // $('.card-header-tabs .nav-item').find(".active").removeClass('active');
       
        //parseInt($('.card-header-tabs .nav-item').find(".disabled").[0].attributes.href.textContent[5]);
      
      //$('.card-header-tabs .nav-item').find(".active").removeClass('active');
    });




  });


  

