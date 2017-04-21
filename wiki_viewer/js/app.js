function jump(){
var term = document.getElementById("sea").value;
var wikiUrl= "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json&callback=?";
var url = "http://en.wikipedia.org/wiki/" + term;
    $.ajax({
    url : wikiUrl,
    type : "GET",
    async:false,
    dataType:"json",
    success:function (data){
        
    var responseZ = data[1];
    console.log(responseZ)
    var responseY = data[2];
    
    var newContent = "";

     var ul = document.getElementById("display");
        
        for(var i = 0; i < responseZ.length; i++){
        if(responseZ != ""){
            newContent += '<div class="well">';
            newContent += '<li><a href="'+ url+'">' + responseZ[i] + '</li>';
            newContent += '<li><a href="'+ url+'">' + responseY[i] + '</li>';

            newContent += '</div>'
            newContent += '<br>'    
        }

        ul.innerHTML = newContent;
        
    }
    }   
        
    });    
    }
