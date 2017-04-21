function myfunction(){
    
    $.ajax({
//        url: "http://labs.bible.org/api/?passage=John%203:16&type=json&callback=myfunction"
        url: "http://labs.bible.org/api/?passage=random&type=json&callback=myfunction",
        type:"GET",
        dataType:"jsonp",
        success: function(data){
            console.log(data)
            
            var word1 = document.getElementById('word');
            var verse1 = document.getElementById('verse');
            
            var newContent = "";
            var newContent1 = "";
            newContent += '<p>' + data[0].text + '</p>';
            newContent1 += '<p>' + data[0].bookname + data[0].chapter + ':'+ data[0].verse + '</p>';
            
            word1.innerHTML = newContent;
            verse1.innerHTML = newContent1;
            
        }
        
    });
    
    
    
}