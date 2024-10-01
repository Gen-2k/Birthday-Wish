// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = `<span class="time-unit">Days</span> <span class="digit">${days}</span> <span class="time-unit">Hours</span> <span class="digit">${hours}</span> <span class="time-unit">Minutes</span> <span class="digit">${minutes}</span>`; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text).css({
		'font-size': '28px',
		'color': '#ff4081',
		'text-shadow': '2px 2px 4px rgba(0,0,0,0.3)',
		'animation': 'pulse 2s infinite'
	});
}

// Add this to your CSS
$("<style>")
	.prop("type", "text/css")
	.html(`
	@keyframes pulse {
		0% { transform: scale(1); }
		50% { transform: scale(1.05); }
		100% { transform: scale(1); }
	}
	.time-unit {
		font-size: 18px;
		color: #ff4081;
	}
	.digit {
		font-size: 36px;
		font-weight: bold;
		color: #333;
	}
	`)
	.appendTo("head");
