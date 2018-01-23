$(function(){

	getLocation();

	function getLocation(){
	var lat;
	var lon;
	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
    
    	lat = position.coords.latitude;
    	lon = position.coords.longitude
    	console.log(lat);
    	console.log(lon);
    	var url = 'https://fcc-weather-api.glitch.me/api/current?' + 'lat='+lat +'&' + 'lon='+ lon;
    	var $content = $('#content');
    	console.log(url);
    	$.ajax({
		type:"GET",
		url:url,
		beforeSend : function(){
			$content.append('<div class="text-center"><img id="load" src="images/ajax-loader.gif"></div>');
		},
		complete:function(){
			$('#load').remove();
		},
		success:function(data){
			//console.log(data);
			var name = "";
			var temp = "";
			name += '<h3> '+ data.name + ' ' + data.sys.country + '</h3>';
			temp += '<h3>' + data.main.temp + ' ' + 'Degrees' + '</h3>';

			var country = data.sys.country;
			var desc = data.weather[0].description;
			var icon = data.weather[0].icon;
			//console.log(desc)
			$('#name').html(name);
			$('#country').text(country);
			$('#temp').html(temp);
			$('#desc').text(desc);
			$('#icon').html('<img src='+icon+'>');
		}

	})
  });
}

 }

})

