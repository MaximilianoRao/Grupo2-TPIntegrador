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
      let id = $(this).parent().attr('id');
      let paso = parseInt($('.card-header-tabs .nav-item').find(".active").attr('href')[5]);
      let posicion = $('.card-header-tabs .nav-item').find(".active").attr('href');
      let nuevaposicion = '#step'+ (paso+1);
      nuevaPestaña = $('a.nav-link[href$="'+ (paso+1) +'"]');
      pestañaActual = $('.card-header-tabs .nav-item').find(".active")
      pestañaActual[0].ariaSelected = false;
      pestañaActual[0].tabIndex = -1;
      nuevaPestaña[0].ariaSelected = true;
      nuevaPestaña[0].tabIndex = 0;
      $(posicion).removeClass('active show')
      $(nuevaposicion).addClass('active show')
       pestañaActual.removeClass('active');
       nuevaPestaña.removeClass('disabled');
       nuevaPestaña.addClass('active');
        //parseInt($('.card-header-tabs .nav-item').find(".disabled").[0].attributes.href.textContent[5]);
      
      //$('.card-header-tabs .nav-item').find(".active").removeClass('active');
    });


    




  });


  

