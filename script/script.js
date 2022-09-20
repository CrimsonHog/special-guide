$(function() {
    console.log("document is ready!");
    var userName, nameLength, nameMsg, nameReverse = ""; 
  
    $('#btnName').click(function() {
        userName = $('#userName').val(); 
        nameLength = getStringLength(userName);
        nameMsg = "Your spirit animal is: The Fox";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 
        console.log(thirdLetter(userName)); 
        stringArrayPosition(userName);
        

        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");})
       function getStringLength(stringVal){
       var stringLength = stringVal.length; 
       return stringLength; 
    }

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }
  
    function thirdLetter(stringVal){
       return thirdString; var thirdString = stringVal[2]; 
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }
    } 
  
    function stringArrayPosition(stringVal){
        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }
    }
});