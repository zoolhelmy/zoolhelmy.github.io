$(document).ready(function () {
	setBanner();
	getGitHub();
	getWeatherData();
	getTimestamp();
});

function setBanner() {
	var images = [
		{src: 'img/1.jpg', href: '#link1'},
		{src: 'img/2.jpg', href: '#link2'},
		{src: 'img/3.jpg', href: '#link3'},
		{src: 'img/4.jpg', href: '#link4'},
		{src: 'img/5.jpg', href: '#link5'},
		{src: 'img/6.jpg', href: '#link6'},
		{src: 'img/7.jpg', href: '#link7'},
		{src: 'img/8.jpg', href: '#link8'},
		{src: 'img/9.jpg', href: '#link9'},
		{src: 'img/9.jpg', href: '#link10'},
		{src: 'img/9.jpg', href: '#link11'},
		{src: 'img/9.jpg', href: '#link12'},
		{src: 'img/9.jpg', href: '#link13'},
		{src: 'img/9.jpg', href: '#link14'},
		{src: 'img/9.jpg', href: '#link15'},
		{src: 'img/9.jpg', href: '#link16'},
		{src: 'img/9.jpg', href: '#link17'},
		{src: 'img/9.jpg', href: '#link18'},
		{src: 'img/9.jpg', href: '#link19'},
		{src: 'img/9.jpg', href: '#link20'},
		{src: 'img/9.jpg', href: '#link21'},
		{src: 'img/9.jpg', href: '#link22'},
		{src: 'img/9.jpg', href: '#link23'},
		{src: 'img/9.jpg', href: '#link24'},
		{src: 'img/9.jpg', href: '#link25'},
		{src: 'img/9.jpg', href: '#link26'},
		{src: 'img/9.jpg', href: '#link27'},
		{src: 'img/9.jpg', href: '#link28'},
		{src: 'img/9.jpg', href: '#link29'},
		{src: 'img/9.jpg', href: '#link30'},
		{src: 'img/9.jpg', href: '#link31'},
		{src: 'img/9.jpg', href: '#link32'}
	];
	var random_url = Math.floor(Math.random() * 1000);
	
	var random_image1 = images[Math.floor(Math.random() * images.length)];
	var imgsrc1 = "url(" + random_image1.src + "?rand=" + random_url + ")";
	$(function(){ $('#background-banner1').css('background-image', imgsrc1); });
	
	var random_image2 = images[Math.floor(Math.random() * images.length)];
	var imgsrc2 = "url(" + random_image2.src + "?rand=" + random_url + ")";
	$(function(){ $('#background-banner2').css('background-image', imgsrc2); });			
}

function getTimestamp() {
	var url = 'https://api.github.com/repos/zoolhelmy/ESP8266-Weather-Station/commits?path=data&page=1&per_page=1';
	
	$.getJSON(url, function(data) {
		var now = data[0].commit.committer.date;	
		var todayDate = dateFormat(now, "dddd, dS mmm yyyy, h:MM TT");
		$(function(){ $("#weather-timestamp").text(todayDate); });
	});	
}

function getWeatherData() { 
	var url_path = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data'; // github path
//	var url_path = 'weather'; 									  // local path
	
	var url_temperature = url_path + '/temperature.txt';
	var url_temperature2 = url_path + '/temperature2.txt';
	var url_feelslike = url_path + '/feelslike.txt';
	var url_humid = url_path + '/humid.txt';
	var url_uv = url_path + '/uv.txt';
	var url_duv = url_path + '/duv.txt';
	var url_press = url_path + '/press.txt';
	var url_presssea = url_path + '/presssea.txt';
	var url_alt = url_path + '/alt.txt';
	var url_altreal = url_path + '/altreal.txt';
	
	$.getJSON(url_temperature, function(data) { if (data) { $('#weather-temperature').text($('#weather-temperature').text().replace("0", data)); } });
	$.getJSON(url_temperature2, function(data) { if (data) { $('#weather-temperature2').text($('#weather-temperature2').text().replace("0", data)); } });
	$.getJSON(url_feelslike, function(data) { if (data) { $('#weather-feelslike').text($('#weather-feelslike').text().replace("0", data)); } });
	$.getJSON(url_humid, function(data) { if (data) { $('#weather-humid').text($('#weather-humid').text().replace("0", data)); } });
	$.getJSON(url_uv, function(data) { if (data) { $('#weather-uv').text($('#weather-uv').text().replace("0", data)); } });
	$.getJSON(url_duv, function(data) { if (data) { $('#weather-duv').text($('#weather-duv').text().replace("0", data)); } });
	$.getJSON(url_press, function(data) { if (data) { $('#weather-press').text($('#weather-press').text().replace("0", data)); } });
	$.getJSON(url_presssea, function(data) { if (data) { $('#weather-presssea').text($('#weather-presssea').text().replace("0", data)); } });
	$.getJSON(url_alt, function(data) { if (data) { $('#weather-alt').text($('#weather-alt').text().replace("0", data)); } });
	$.getJSON(url_altreal, function(data) { if (data) { $('#weather-altreal').text($('#weather-altreal').text().replace("0", data)); } });			
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
