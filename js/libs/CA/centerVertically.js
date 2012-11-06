(function ($) {

    $.fn.centerVertically = function (onAttribute) {

        return this.each(function () {
            var $this = $(this);              // store the object
            var attribute = onAttribute || 'margin-top'; // the attribute to put the calculated value on

            // recalculate the distance to the top of the element to keep it centered
            var resizer = function () {
                // get parent height minus own height and devide by 2
                $this.css(
                    attribute, ( (( $this.parent().height() - $this.height() ) / 2)-30 )
                );
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).resize(resizer);
        });
    };

})(jQuery);