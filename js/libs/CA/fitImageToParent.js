/*
 * fitToParent jQuery Plugin v1.0.0
 * Copyright (c) 2012 Jason Chaney
 *
 */

jQuery.fn.fitImageToParent = function () {
    this.each(function () {
        var imageToFitWidth = 0;
        var imageToFitHeight = 0;
        var $imageToFit = $(this);

        $("<img/>")
            .attr("src", $imageToFit.attr("src"))
            .load(function () { //We make a copy in memory to reference the original dimensions
                imageToFitWidth = this.width;
                imageToFitHeight = this.height;

                var parentWidth = $imageToFit.parent().width();
                var parentHeight = $imageToFit.parent().height();

                if (imageToFitWidth / parentWidth < imageToFitHeight / parentHeight) //Image doesn't fill horz space
                {

                    newWidth = parentWidth;
                    newHeight = (newWidth / imageToFitWidth) * imageToFitHeight;
                }
                else //Image doesn't fill vert space
                {
                    newHeight = parentHeight;
                    newWidth = (imageToFitWidth * newHeight) / imageToFitHeight;
                }
                margin_top = (parentHeight - newHeight) / 2;
                margin_left = (parentWidth - newWidth ) / 2;



                $imageToFit.css({'margin-top':margin_top + 'px',
                    'margin-left':margin_left + 'px',
                    'min-height':newHeight + 'px',
                    'min-width':newWidth + 'px'});
            });
    });
};