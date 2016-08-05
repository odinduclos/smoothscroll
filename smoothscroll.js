(function($)
{ 
    $.fn.smoothScroll = function(options) {

        var defauts = {
            temps: 2000,
            vdepart: 100,
            vfin: 0
        };
        var parametres = $.extend(defauts, options);

        var scroll, direction, cpt_temps;
        var animation = false;
        var unit = ((parametres.vdepart / 25) - (parametres.vfin / 25)) / (parametres.temps / 40);

        $(document).on('mousewheel', function (event) {
            if (event.originalEvent.wheelDelta > 0) {
                direction = -1;
            } else {
                direction = 1;
            }
            if (animation) {
                clearInterval(animation);
            }
            scroll = (parametres.vdepart / 25);
            cpt_temps = parametres.temps;

            animation = setInterval(function () {

                $(document).scrollTop($(document).scrollTop() + (scroll * direction));
                cpt_temps -= 40;
                scroll -= unit;
                console.log(scroll);
                if (cpt_temps <= 0) {
                    clearInterval(animation);
                    aimation = false;
                }
            }, 40);
        });
    }
})(jQuery);
