function showSearch(){
    
    var searchText = document.getElementById("three").value;
    var wikiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&format=json&callback=?";
//    var wikiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=water";
    var url1 = "https://en.wikipedia.org/wiki/" + searchText;
    $.ajax({
        url: wikiLink,
        type: "GET",
        dataType : "json",
        async : false,
        success: function(data){
            console.log(data);
            var newContent = "";
            var ul = document.getElementById('output');
            for(var i = 0; i < data[1].length; i++){
                newContent += '<div class="well">';
                newContent += '<li><a target="_blank" href="' + url1 +'"> '+ data[1][i] + '</li>';
                newContent += '<li><a target="_blank" href="' + url1 + '">' + data[2][i] + '</li>';
                newContent += '<br>';
                newContent += '</div>';
            }
               ul.innerHTML = newContent; 
            
        }
        
    })
    
    
}