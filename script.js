function enterSite()
{
  $("#bg-phone").css("transform", "translateX(-100vw)");
  $("#dimmed-bg").css("visibility","visible");
  $("#dimmed-bg").css("transform", "translateX(0)");
  $("#fullsite").css("visibility","visible");
  $("body").css("overflow","visible");
  $("#fullsite").css("max-height","auto");
}


$.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }
