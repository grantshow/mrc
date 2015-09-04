$(document).ready(function() {

	function mRatioCalculate() {

		// Get our current play information		
		var stack = $('.stack').val();
		var blinds = $('.blinds').val();
		var players = $('.players').val();

		if (stack && blinds) {

			// Reset everything
			$('body,h1,dt').removeClass("green yellow orange red dead");
			$('dl').hide();

			// Do some maths
			if (players && players > '0') {
				var mratio = Math.floor((stack/blinds)*(players/8));
			} else {
				var mratio = Math.floor(stack/blinds);
			}

			// Set the zone
			if (mratio > 19) {
				var zone = 'green';
			} if (mratio >= 10 && mratio < 20) {
				var zone = 'yellow';
			} if (mratio >= 6 && mratio < 10) {
				var zone = 'orange';
				var zdisplay = mratio;
			} if (mratio >= 1 && mratio < 6) {
				var zone = 'red';
				var zdisplay = mratio;
			} if (mratio < 1) {
				var zone = 'dead';
				var zdisplay = mratio;
			}

			// Now make the page relevant
			if (mratio > '19') {
				$('h1').text('20+');
			} else {
				$('h1').text(mratio);
			}

			$('body,h1,dt').addClass(zone);
			$('dl.'+zone).show();
		}
	};

	$('#calculate').click(function(e) {
			e.preventDefault();
			mRatioCalculate();
	});


});







