$(document).ready(function(){

 generateQuote();
 
 function generateQuote(){
 	var quotes = [

 	{
 		quote : "Success isn't about being the best. It's about always getting better",
 		author : "Behance 99U"
 	},
 		{
 		quote : "We either make ourselves miserable, or we make ourselves strong. The amount of work is the same",
 		author : "Carlos Castaneda"
 	},
 		{
 		quote : "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. John 3:16",
 		author : "Jesus Christ"
 	},
 		{
 		quote : "If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality",
 		author : "Dr. Roopleen"
 	},
 		{
 		quote : "Don’t give up trying to do what you really want to do",
 		author : "Ella Fitzgaerald"
 	},
 		{
 		quote : "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely",
 		author : "Roald Dahl"
 	},
 	{
 		quote : "Failure is just practice for success",
 		author : "Unknown"
 	},
 	{
 		quote : "Go beyond yourself rather than beyond others",
 		author : "Unknown"
 	},
 	{
 		quote : "If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now",
 		author : "Unknown"
 	},
 	{
 		quote : "Keep moving forward. One step at a time",
 		author : "Unknown"
 	},

 ]
 //console.log(quotes)
 	var randomQuote = Math.floor(Math.random() * quotes.length );
 	//console.log(randomQuote)
 	//console.log(quotes)
 	var q1 = quotes[randomQuote]["author"];
 	var x = quotes[randomQuote]["quote"];
 	//var a1 = quotes[]
 	//console.log(q1)
 	console.log(randomQuote)
 	//console.log(x)
 	
 	// $('#quoteMsg').text(x)
 	$('#quoteMsg').hide().fadeIn(1000).html( '<i class="fa fa-quote-left" aria-hidden="true"></i> ' + x)
 	$("#authorMsg").hide().fadeIn(1000).text('- '+q1)


 	
 }

function changeColor(){
 		var colorArr = ["rgb(124, 185, 232)", "rgb(76, 74, 71)","rgb(211, 175, 55)","rgb(52, 179, 52)","rgb(255, 152, 153)",
 		"rgb(207, 207, 207)","rgb(205, 149, 117)","rgb(250, 235, 215)","rgb(72, 73, 73)"

 	 	]
 	 	//console.log(colorArr);
 	 	var randomColor = Math.floor(Math.random() * colorArr.length );
 		//console.log(randomColor);
 		var color = colorArr[randomColor];
 		console.log(color);
 		$("body").css("background-color", color);
 		$("#qButton").css("background-color", color);
 		$('#sButton').css("background-color", color);
 		//console.log(color)

 	}

 $('#qButton').on('click', function(){
 	//$("#qButton").css("background-color", color);

 		generateQuote();
 		changeColor();

 	})
 $('#sButton').on('click', function(){
 	var currentQuote = $('#quoteMsg').text();
 	var currentAutor = $('#authorMsg').text();
 	window.open('http://twitter.com/home/?status=' + currentQuote + ' -' + currentAutor)
 	//console.log(currentQuote)
 })

})

 