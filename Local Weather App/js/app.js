
$(document).ready(function(){
    getWeather();
    function getWeather(){
        
        var xhr = new XMLHttpRequest();
//        var key = "0a881e1a3e9ec2c4";
//        var Geo = {};
        // var weather = "http://api.wunderground.com/api/"+ key+"/conditions/q/" +Geo.lat +"," + Geo.lng  + ".json"
        
  var lat;
  var long;
    $.getJSON("http://ip-api.com/json",function(data){
        var key = "0a881e1a3e9ec2c4";
      lat=data.lat;
      long= data.lon;
//       var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b86d21440d8c9a110912a2eb0845abb4'; 
        
        var api = "http://api.wunderground.com/api/0a881e1a3e9ec2c4/forecast/geolookup/conditions/q/" +lat + "," +long + ".json";
        console.log(api)
        
        //        var weather = "http://api.wunderground.com/api/"+ key+"/forecast/geolookup/conditions/q/" +Geo.lat +"," + Geo.lng  + ".json"
        xhr.onload = function(){
            if(xhr.status === 200){
                
                resposeObject = JSON.parse(xhr.response)
                console.log(resposeObject)
            }
            
            var location = resposeObject.current_observation.display_location.full;
            var humidity = resposeObject.current_observation.relative_humidity;
            var visibility = resposeObject.current_observation.weather;
            var temp = resposeObject.current_observation.temp_c;
            var icon = resposeObject.current_observation.icon_url;
//            var windSpeed = resposeObject.current_observation.wind_mph;
            
            document.getElementById('loc').innerHTML = location;
            document.getElementById('sky').innerHTML = visibility;
            document.getElementById('humi').innerHTML = humidity;
            document.getElementById('temp').innerHTML = temp + '<span>Celcius</span>';
//            document.getElementById('icon').innerHTML = icon;
//            $('span.icon').addClass('icona')
            $('#icon').attr('src', icon)
//            if(temp > 10){
//                var background = {
//                    backgroundColor : 'color:#669eaf'
//                }
//                return background.backgroundColor
//            }
            
//            if(temp > 20){
////                $('body').css('background-color','#669eaf' );
////                $('body').css(' background-image', url('../image/sunlight.jpg'))
////                  $('body').css('background-image', 'url(https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c11591dd2cf9 c9d41b1d577df 052785)')
//                
//                $('body').addClass('icona')
//            }
            
            if(temp >26){
                $('body').addClass('sunny')
            }else if(temp >21){
                $('body').addClass('shower')
            }else if(temp >15){
                $('body').addClass('shower1')
            }else if(temp <10){
                $('body').addClass('snow')
            }
            
            
        }
        
        xhr.open("GET",api,true);
        xhr.send(null);
        
    });

        
    
//            $('loc, #weatherbox').text(location)
    }
    
    

    
})