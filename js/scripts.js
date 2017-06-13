function BlockMove(event) {
  event.preventDefault() ;
 }

;(function($) {
  $.extend({
    stayInWebApp: function(selector) {
      if(("standalone" in window.navigator) && window.navigator.standalone) {
        if(!selector) {
          selector = 'a';
        }
        $("body").delegate(selector,"click",function(event) {
        
       
          if($(this).attr("target") == undefined || $(this).attr("target") == "" || $(this).attr("target") == "_self") {
           
            var dest = $(this).attr("href");
            if(!dest.match(/^http(s?)/g)) {
              event.preventDefault();
              self.location = dest;
            }
          }
        });
      }
    } //end stayInWebApp func
  });
})( jQuery );

  $(document).ready(function() {
      $(function() {
          $.stayInWebApp('a.stay');
      });
  });




document.body.addEventListener('touchmove', function(e) {
    event.preventDefault();
});


