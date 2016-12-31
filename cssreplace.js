//This works if you select the activityFrame and execute in chrome console
//Many CORS issues as you may be able to see in manifest.json - can't get around them yet
//We need this executed on the DOM from the activityFrame, which is nested in a col00 dojo frame
var list= document.getElementsByClassName("eqDocument");
console.log(list.length); //second console output
for (var i = list.length - 1; i >= 0; i--) {
    list[i].className = "";
}