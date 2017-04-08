$(document).ready(function(){
  getNewQuote();
  function getNewQuote(){
    var randomQuote = "";
    var randomAuthor = "";
    //var cite;
    var quotes = [{
      quote:"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
      cite:"Jesus Christ."},
                  {quote:"Everyone thinks of changing the world, but no one thinks of changing himself.",
      cite:"Leo Tolstoy"},
                  
                  {quote:"Only do what your heart tells you.",
                   cite:"Princess Diana"
                    
                  },
                  {quote:"Be a good listener. Your ears will never get you in trouble.",
                   cite:"Frank Tyger"
                    
                  },
                    {quote:"We could never learn to be brave and patient if there were only joy in the world.",
                     cite:"Helen Keller"
                      
                    },
                  {quote:"To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
                   cite:"Johannes Gaertner"
                  
                  },
                  
                  {quote:"You will keep him in perfect peace Whose mind is stayed on You, because he trusts in You.",   
                   cite:"Isaiah26:3" 
                  },
                  
                  {quote:"today today.",
                    cite:""
                   
                  },
                  {quote:"When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
                   cite:"Confucius"  
                  },
                  {quote:"The truest wisdom is a resolute determination.",
                   cite:"Napoleon Bonaparte"  
                  },
                  
                  
                 ];
    var randomQuote = Math.floor(Math.random()*quotes.length);
    //console.log(randomQuote)
    //$('p', '#quote-box').text(quotes[randomQuote].quote);
    //if(cite != ""){
      //$('span', '#quote-box').text('by '+ quotes[randomQuote].cite);
    //}else if(cite === ""){
     // $('span', '#quote-box').text('anonymous ');
      
   // }
    
    $('p', '#quote-box').text(quotes[randomQuote].quote);
    $('span', '#quote-box').text(quotes[randomQuote].cite);
  }
  $('.get-quote').click(function(){
    getNewQuote();
  });
  $('.share-quote').click(function(){
    var currentQuote = $('#quote').text();
    var currentAuthor = $('#author').text();
    window.open('http://twitter.com/home/?status=' + currentQuote + ' -' + currentAuthor);
  });
});

//console.log(getQuote());


//console.log(randomQuote);