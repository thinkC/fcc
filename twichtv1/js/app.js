$(document).ready(function(){
    var channels = ["freecodecamp","ESL_SC2","OgamingSC2", "cretetion","habathcx","noobs2ninjas","monstercat","RobotCaleb"];
    
    $('.all').click(function(){
        $('.online').show(1000)
        $('.offline').show(1000)
    });
    
    $('.on').click(function(){
        $('.online').show(1000)
        $('.offline').hide(1000)
    });
    
    $('.off').click(function(){
        $('.offline').show(1000)
        $('.online').hide(1000)
    });
    
    
    
    for(var i = 0; i < channels.length; i++){
        var url = "https://api.twitch.tv/kraken/channels/" + channels[i];
        $.ajax({
        type : "GET",
        url : url,
            
        headers:{
        'Client-ID':'rl7cv4nj390psv3vjdy6e4iwnffcwa'
    },
    success : function(data){
        console.log(data);
        
        $.getJSON('https://api.twitch.tv/kraken/streams/'+ data.name + '?client_id=rl7cv4nj390psv3vjdy6e4iwnffcwa').done(function(data1){
            //console.log(data1)
            
            if(data1.stream !== null){
                var online = "Online";
                var urlSite = data1.stream.channel.url
//                $('#imag').prepend('<li>'+ '<img class="round online" src="'+ data1.stream.channel.logo +'"'+ '/>'+ '</li>');
                $('#imag').prepend('<li>'+ '<a target="_blank" href="'+urlSite+'"'+'>'+'<img class="round online" src="'+ data1.stream.channel.logo +'"'+ '/>'+'</a>' + '&nbsp' +  '<span class="online">'+ data1.stream.channel.display_name + '</span>'+ '&nbsp'+ '<span class="online">' + online + '</span>' + '&nbsp' + '<span class="online"><small>' + data1.stream.channel.status + '</small></span>' +'</li>' + '<br>');
//                $('#status').prepend('<li class="online">'+ '<h2>' + online + '</h2>'+ '</li>');
//                $('#des').prepend('<li class="online">'+ '<small>' + data1.stream.channel.status + '</small>'+ '</li>')
            }
            
            else{
               var offline = "Offline"; 
                var urlSite1 = data.url;
//                $('#imag').prepend('<li>'+ '<img class="round offline" src="'+ data.logo +'"'+ '/>'+ '</li>');
                 $('#imag').prepend('<li>'+'<a target="_blank" href="'+urlSite1+'"'+'>'+ '<img class="round offline" src="'+ data.logo +'"'+ '/>'+ '</a>'+ '&nbsp' + '<span class="offline">' + data.name + '</span>' + '&nbsp' + '<span class="offline">'+ offline + '</span>'+ '</li>' + '<br>');
//                $('#status').prepend('<li class="offline">'+ '<h2>' + offline + '</h2>'+ '</li>');
            }
        })
        
//        for(var i = 0; i < channels.length; i++){
//            $.getJSON('https://api.twitch.tv/kraken/streams/'+channels[i] + '?client_id=rl7cv4nj390psv3vjdy6e4iwnffcwa', function(data1){
//            console.log(data1)
//            
//            if(data1.stream !== null){
//                $('#imag').prepend('<img src="'+ data1.stream.channel.logo +'"'+ '/>')
//            }
//        })
//        }
        
        
        
//        for(var i = 0; i < channels.length; i++){
//            $.getJSON('https://api.twitch.tv/kraken/streams/'+channels[i] + '?client_id=rl7cv4nj390psv3vjdy6e4iwnffcwa').done(function(data1){
//                console.log(data1)
//                
//                if(data1.stream !== null){
//                $('#imag').prepend('<img src="'+ data1.stream.channel.logo +'"'+ '/>')
//            }
//            })
//        }
        
    }

        
    })
        
    }
    
    
    
    
})