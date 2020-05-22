/**********
TITLE: Strings  
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Strings Lab
ORIGINALLY CREATED ON: 20 Feb 2019
LAST MODIFIED ON: 20 Feb 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function() {
    
    var elResponse = document.getElementById("ships"); //grabbing the HTML id element so I can work with it
    var strQuestion = "Before I give you the ship names. Give me a name of your spouse/pet/other";
    var strDefaultAns = "Williamson"
    var strAnswer = prompt(strQuestion, strDefaultAns); //prompt question
    elResponse.innerHTML = "Here are your 12 ship names: <br><br>";

    //Ship name one
    var strShipOne = strAnswer.charAt(0);
    var strNameOne = strShipOne + " Scurvy Hades <br>";

    //Ship name two
    var strShipTwo = strAnswer.indexOf("e");
    var strNameTwo = strShipTwo + " Golden How <br>";

    //Ship name three
    var strShipThree= strAnswer.substring(3, 7);
    var strNameThree = strShipThree + " Sea Sea <br>";

    //Ship name four
    var strShipFour= strAnswer.trim();
    var strNameFour = strShipFour + " Mad Storm <br>";

    //Ship name five
    var strShipFive= strAnswer.replace(strAnswer, "crazy");
    var strNameFive = strShipFive + " Evil Doom <br>";

    //Ship name six
    var strShipSix= strAnswer.toUpperCase();
    var strNameSix = strShipSix + " The Silent Fall <br>";

    //Ship name seven
    var strShipSeven= strAnswer.toLowerCase();
    var strNameSeven = strShipSeven + " The Cry of the Curse <br>";

    //Ship name eight
    var strShipEight= strAnswer.trim();
    var strNameEight = "The Greedy Dragon " + strShipEight + "<br>";

    //Ship name nine
    var strShipNine= strAnswer.substring().replace(strAnswer, "danger");
    var strNameNine = "The Fearful Horror " + strShipNine + "<br>";


    //Ship name ten
    var strShipTen= strAnswer.trim().toUpperCase().substring(1, 5);
    var strNameTen = "Crimson Tortuga " + strShipTen + "<br>";

    //Ship name eleven
    var strShipEleven= strAnswer.toLowerCase().indexOf("a");
    var strNameEleven = strShipEleven + " Last Sun <br>";

    //Ship name twelve
    var strShipTwelve= strAnswer.trim();
    var strNameTwelve = strShipTwelve + " The Sea Storm <br>";

    //storing all the ship names in an array to print on the html page element
    var shipArray = [strNameOne, strNameTwo, strNameThree, strNameFour, strNameFive, strNameSix, strNameSeven, strNameEight, strNameNine, strNameTen, strNameEleven, strNameTwelve];
    for (var i = 0; i < shipArray.length; i++) {
        elResponse.innerHTML += shipArray[i];
    }

}); 
