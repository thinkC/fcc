$(document).ready(function(){
var arr = [""];
//var nums = [0,1,2,3,4,5,6,7,8,9];
var signs = ["+","-","/","*","."]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var toString;
    
function getValue(input){
    if(arr.length === 1 && arr.indexOf("+","-","/","*") < 0){
        arr.push(input);
    }
    
    else if(signs.includes(arr[arr.length-1]) === false){  // checks that you don't have multiple +,-,*,/, as last input
        arr.push(input)
    }
    
    else if(numbers.includes(Number(input))){
        arr.push(input);
    }
    update();
}
    
function update(){
    toString = arr.join("");
    $('#output1').html(toString);
}
    
function totalValue(){
    toString = arr.join("");
    $('#output1').html(eval(toString));
}
 
var timeOut= setTimeout(function(){
    $(this).removeClass('change');
},0.07)
   
    
//var timeOut = setTimeout(function(){$(this).removeClass('change')},0.07);

    $('button').on('click',function(){
        if(this.id === "clearAll"){
            arr = [""];
            //$('#deleteAll').addClass('change');
            $(this).addClass('change');
            //setTimeout(function(){$(this).removeClass('change')},1.07);
            update();
        }
        
        else if(this.id === "clear"){
            arr = [""];
            $('#clear').addClass('change')
            update()
        }
        
        else if(this.id === "off"){
            arr = [""];
            $('#off').addClass('change');
            update()
        }
        
        else if(this.id === "back"){
            arr.pop();
            $('#backOne').addClass('change')
            update()
        }
       
        else if(this.id === "="){
            //$('#=').addClass('change')
            totalValue()
        }
        
        else if(this.id === "sqrt"){
            $('#sqrt').addClass('change');
        sciSqrt();
    }
        else if(this.id === "1/x"){
            //$('#1/x').addClass('change');
        sciInvers();
    }
        
    else if(this.id === "%"){
        //$('%').addClass('change');
        sciPercent();
    }
    
    else if(this.id === "sqd"){
        $('#sqd').addClass('change');
        scisqd();
    }
        
    else if(this.id === "+/-"){
        $('#+/-').addClass('change');
        sciMinus();
    }

    else{
            $(this).addClass('change');
            getValue(this.id)
        }
function sciSqrt(){
    totalString = arr.join("");
    totalString1 = Number(totalString);
    totalString2 = Math.sqrt(totalString1).toFixed(12);
    $("#output1").html(totalString2);
}
        
function scisqd(){
    totalString = arr.join("");
    totalString1 = Number(totalString);
    $("#output1").html(eval(totalString1 * totalString1));
}

function sciInvers(){
    totalString = arr.join("");
    totalString1 = Number(totalString);
    $("#output1").html(eval(1 / totalString1));
}
    
function sciPercent(){
    totalString = arr.join("");
    totalString1 = Number(totalString);
    $("#output1").html(eval(totalString1 / 100));
}
    })
})

//var x = "This is fine";
//var y = 2
//var w = x + " "+ y;
//console.log(w)