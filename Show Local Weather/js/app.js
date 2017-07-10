var apiKey = "66b3f4da732b32825e24e8104f33fd12";
$(function(){
    
    var loc;
   // gee location IP Address
  $.getJSON('https://ipinfo.io', function(data){
  console.log(data);
      loc = data.loc.split(",");
      console.log(loc);
      // Call to Weather API
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + loc[0]+ "&lon=" + loc[1] + "&APPID=" + apiKey,function(data1){
      console.log(data1);
      
      
      var location = data1.name;
      var currentWeather = data1.weather[0].description;
      var temp = data1.main.temp;
      //var humidity = data1.main.humidity;
      var windSpeed = data1.wind.speed + 'm/s';
      //var visibility = resposeObject.current_observation.weather;
      var icon = data1.weather[0].icon;
     
                
      document.getElementById('loc').innerHTML = location;
      document.getElementById('cweather').innerHTML = currentWeather;
      document.getElementById('wspeed').innerHTML = windSpeed;
      document.getElementById('temp').innerHTML = temp + '<p>Celcius</p>';
      document.getElementById('icon').innerHTML = icon;
      
//      $('#icon').attr('src', '../image/nt_cloudy.gif');
      
      if(temp >26){
            $('body').addClass('sunny')
      }else if(temp >21){
            $('body').addClass('shower')
      }else if(temp >=15){
            $('body').addClass('shower1')
      }else if(temp <10){
            $('body').addClass('snow')
            }
  }) 
  
})
    
    
    
});


