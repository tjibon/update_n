// ..............Custom JavaScript Code.................
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('.navbar-default').addClass("navbar-shrink");
    }
    else{
      $('.navbar-default').removeClass("navbar-shrink");
    }

    $
    

    


   

    

});
(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {

    

      $(".togle-icon").on("click", function () {

          $(".off-canvas-menu").addClass("active")
          return false;

      });
      $(".menu-close").on("click", function () {

        $(".off-canvas-menu").removeClass("active")
        return false;

    });



     



  });



  jQuery(window).load(function () {

  });
}(jQuery));