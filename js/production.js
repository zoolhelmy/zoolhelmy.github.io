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
	
	setImageZool();
	setImageVandy();
	setImageBAE();
	setImageAmdocs();
	setImageDigi();
	setImageFaratech();
	setImageWD();
	setImageAmtel();
	
	getWeatherData();
	getWeatherIcon();
	
	sendEmail();
	
});

function setImageZool() {
	
	var images = [
		{src: 'img/zool-1.jpg', href: '#link1'},
		{src: 'img/zool-2.jpg', href: '#link2'},
		{src: 'img/zool-3.jpg', href: '#link3'},
		{src: 'img/zool-4.jpg', href: '#link4'},
		{src: 'img/zool-5.jpg', href: '#link5'},
		{src: 'img/zool-6.jpg', href: '#link6'},
		{src: 'img/zool-7.jpg', href: '#link7'},
		{src: 'img/zool-8.jpg', href: '#link8'},
		{src: 'img/zool-9.jpg', href: '#link9'},
		{src: 'img/zool-10.jpg', href: '#link10'},
		{src: 'img/zool-11.jpg', href: '#link11'}
	];
	
	$('#imageZool').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageVandy() {
	
	var images = [
		{src: 'img/vandy-1.jpg', href: '#link1'},
		{src: 'img/vandy-2.jpg', href: '#link2'},
		{src: 'img/vandy-3.jpg', href: '#link3'},
		{src: 'img/vandy-4.jpg', href: '#link4'},
		{src: 'img/vandy-5.jpg', href: '#link5'},
		{src: 'img/vandy-6.jpg', href: '#link6'},
		{src: 'img/vandy-7.jpg', href: '#link7'},
		{src: 'img/vandy-8.jpg', href: '#link8'},
		{src: 'img/vandy-9.jpg', href: '#link9'}
	];

	$('#imageVandy').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageBAE() {
	
	var images = [
		{src: 'img/bae-1.jpg', href: '#link1'},
		{src: 'img/bae-2.jpg', href: '#link2'},
		{src: 'img/bae-3.jpg', href: '#link3'},
		{src: 'img/bae-4.jpg', href: '#link4'},
		{src: 'img/bae-5.jpg', href: '#link5'},
		{src: 'img/bae-6.jpg', href: '#link6'}
	];

	$('#imageBAE').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageAmdocs() {
	
	var images = [
		{src: 'img/amdocs-1.jpg', href: '#link1'},
		{src: 'img/amdocs-2.jpg', href: '#link2'}
	];

	$('#imageAmdocs').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageDigi() {
	
	var images = [
		{src: 'img/digi-1.jpg', href: '#link1'},
		{src: 'img/digi-2.jpg', href: '#link2'},
		{src: 'img/digi-3.jpg', href: '#link3'}
	];

	$('#imageDigi').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageFaratech() {
	
	var images = [
		{src: 'img/faratech-1.jpg', href: '#link1'},
		{src: 'img/faratech-2.jpg', href: '#link2'},
		{src: 'img/faratech-3.jpg', href: '#link3'},
		{src: 'img/faratech-4.jpg', href: '#link4'}
	];

	$('#imageFaratech').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageWD() {
	
	var images = [
		{src: 'img/wd-1.jpg', href: '#link1'},
		{src: 'img/wd-2.jpg', href: '#link2'},
		{src: 'img/wd-3.jpg', href: '#link3'},
		{src: 'img/wd-4.jpg', href: '#link4'},
		{src: 'img/wd-5.jpg', href: '#link5'}
	];

	$('#imageWD').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

function setImageAmtel() {
	
	var images = [
		{src: 'img/amtel-1.jpg', href: '#link1'},
		{src: 'img/amtel-2.jpg', href: '#link2'}
	];
	
	$('#imageAmtel').attr('src', images[Math.floor(Math.random() * images.length)].src);
	
}

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

function sendEmail() {
	
	$('#email-send').on('click', function (event) {
		
		event.preventDefault();
		
		// sibuk nak tau ye
		var telurGoyang = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",goreng:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=telurGoyang._utf8_decode(t);return t},rebus:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=telurGoyang._utf8_decode(t);return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
		var pinggan = telurGoyang.rebus("SlRkQkpUWkdKVFpHSlRaREpUUXdKVGRCSlRaR0pUWkdKVFpESlRZNEpUWTFKVFpESlRaRUpUYzVKVEpGSlRZekpUWkdKVFpF");
		var pinggan = telurGoyang.goreng(pinggan);
		
		var email_subject = 'Request for Resume';
		var email_name = 'Shy Guy';
		var email_address = "I don't have any.";
		
		if( $('#email-name').val().length != 0 ) {
			email_name = $('#email-name').val();
		}
		
		if( $('#email-address').val().length != 0 ) {
			email_address = $('#email-address').val();
		}	
		
		var email_message = 'Hello Zool,';
		email_message += '%0D%0A';
		email_message += '%0D%0A';
		email_message += 'This is ';
		email_message += email_name;
		email_message += ', email address ';
		email_message += email_address;
		email_message += '%0D%0A';
		email_message += '%0D%0A';
		email_message += $('textarea#email-message').val();
		email_message += '%0D%0A';
		email_message += '%0D%0A';
		email_message += 'Thank you!';	
		
		window.open('mailto:' + pinggan + '?subject=' + email_subject + '&body=' + email_message, '_blank');
	});
	
}

