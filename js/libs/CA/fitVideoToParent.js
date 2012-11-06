/*
 * fitVideoToParent jQuery Plugin v1.0.0
 * Copyright (c) 2012 Jason Chaney
 *
 */

jQuery.fn.fitVideoToParent = function (options) {

	this.each(function () {
		var width = options.nativeWidth;
		var height = options.nativeHeight;
		var parentWidth = $(this).parent().width();
		var parentHeight = $(this).parent().height();
		var sourceRatio = width / height;
		var parentRatio = parentWidth / parentHeight;
//		console.log("Video native width: " + width);
//		console.log("Video native height: " + height);
//		console.log("Parent width: " + parentWidth);
//		console.log("Parent height: " + parentHeight);
//		console.log("Parent Ratio = " + parentRatio);
//		console.log("Source ratio = " + sourceRatio);


		if (parentRatio < sourceRatio) //Video doesn't fill vert space
		{
//			console.log("doesnt fill vert");

			newHeight = parentHeight;
			newWidth = (width * newHeight) / height;
			multiplier = newWidth / parentWidth;

		}
		else //Video doesn't fill horz space
		{
//			console.log("doesnt fill horz");

			newWidth = parentWidth;
			newHeight = (newWidth / width) * height;
			multiplier = newHeight / parentHeight;
		}
//		console.log("New width video should be " + newWidth);
//		console.log("New height video should be " + newHeight);
//		console.log("Multiplier is " + multiplier);
		margin_top = (parentHeight - newHeight) / 2;
		margin_left = (parentWidth - newWidth ) / 2;

		$(this).css({'margin-top':margin_top + 'px',
			'margin-left':margin_left + 'px',
			'-webkit-transform':'scale(' + multiplier + ')',
			'-moz-transform':'scale(' + multiplier + ')',
			'-ms-transform':'scale(' + multiplier + ')',
			'transform':'scale(' + multiplier + ')',
			'width':newWidth,
			'height':newHeight
		});
	});
};
