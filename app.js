//Переводчик транслитерация
function translater(text) {
    var rus = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890.,-!?(): ",
    
        eng = ["A","B","V","G","D","E","YO","ZH","Z","I","J","K","L","M","N","O","P","R","S","T","U","F","H",
        "C","CH","SH","SCH","'","Y","'","E","YU","YA","a","b","v","g","d","e","yo","zh","z","i","j","k","l",
        "m","n","o","p","r","s","t","u","f","h","c","ch","sh","sch","'","y","'","e","yu","ya","1","2","3",
        "4","5","6","7","8","9","0",".",",","-","!","?","(",")",":"," "],
              
        translateText = "",
        index = 0;
    
    for (var i = 0; i < text.length; i++) {
        index = rus.indexOf(text[i]);
        translateText += eng[index];
    }
    
    return translateText;
}

document.querySelector("#btn").addEventListener("click", function() {
    var en = translater(document.querySelector("#rus").value);
    document.querySelector("#en").innerHTML = en;
});