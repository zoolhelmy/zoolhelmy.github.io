!function () {
    window;
    const e = document.documentElement;
    if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) {
        (window.sr = ScrollReveal()).reveal(".reveal-on-scroll", {
            duration: 600,
            distance: "20px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "left",
            interval: 100
        })
    }
}
();

$(document).ready(function () {
	getWeatherData();
	getWeatherIcon();
});

function getWeatherData() { 
	
	var url_path = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data'; // github path
	
	var url_feelslike = url_path + '/feelslike.txt';
	var url_humid = url_path + '/humid.txt';
	
	$.when(
		$.get(url_feelslike),
		$.get(url_humid)
	).done(function(data_feelslike, data_humid) {	
		data_feelslike = "Feels like " + data_feelslike[0] + "°C";
		data_humid = data_humid[0] + "% humid";
		var weather_string = data_feelslike + " and " + data_humid;
		
		$('#weather-data').text(weather_string); 
	});	
	
}

function getWeatherIcon() {
 
	var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hoskote?unitGroup=metric&include=current&key=R8JPDCUSQQ9G48WUBTFAHBNHT&contentType=json";
	var url_icon = "img/weathericon/";
	var random_url = Math.floor(Math.random() * 1000);
	
	$.getJSON(url, function(data) { 
		if (data) { 
			$('#weather-icon').attr('title', data.currentConditions.conditions);
			$('#weather-icon').attr('src', url_icon + data.currentConditions.icon + '.png?rand=' + random_url);
		}
	});
 
}

$(function () {
	$('#email-send').on('click', function (event) {
		
		event.preventDefault();
		
		var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

		// Decode the String
		var heir = Base64.decode("em9vbEB6b29saGVsbXkuY29t");
		var email_subject = 'Request for Resume';
		
		var email_message = 'Hello Zool,';
		email_message += '%0D%0A';
		email_message += '%0D%0A';
		email_message += 'This is ';
		email_message += $('#email-name').val();
		email_message += ', email address ';
		email_message += $('#email-address').val();
		email_message += '%0D%0A';
		email_message += '%0D%0A';
		email_message += $('textarea#email-message').val();
		email_message += '%0D%0A';
		email_message += '%0D%0A';
		email_message += 'Thank you!';	
		
		//window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
		window.open('mailto:' + heir + '?subject=' + email_subject + '&body=' + email_message, '_blank');
	});
});	

