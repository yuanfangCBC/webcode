/*激活fullpage*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation: true,
		navigationTooltips: ['one', 'two', 'three', 'four'],
		afterLoad: function(link, index) {
			switch(index) {
				case 1:
					move('.section1 h1').scale(1.5).end();
					move('.section1 p').set('margin-top', '5%').end();
					break;
				case 2:
					move('.section2 h1').scale(0.5).end();

					break;
				case 3:
					move('.section3 h1').set('margin-left', '20%').end();
					move('.section3 p').set('margin-left', '20%').end();
					break;
				case 4:
					move('.section4 img.primary').rotate(360).end(function() {
						move('.section4 img.sport').rotate(360).end(function() {
							move('.section4 img.edition').rotate(360).end(function() {
								move('.section4 h4.primary').scale(1.3).end(function() {
									move('.section4 h4.sport').scale(1.3).end(function() {
										move('.section4 h4.edition').scale(1.3).end();
									});
								});
							});
						});
					});
					break;
				default:
					break;
			}
		},
		onLeave: function(link, index) {
			switch(index) {
				case 1:
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				default:
					break;
			}
		},
		afterRender: function() {

		},

	});
});