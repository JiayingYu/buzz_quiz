/**
 * Created by jiayingyu on 4/10/14.
 */
var imageList = new Array("cocktail", "coffee", "smoothie", "11pm", "12pm", "never", "eclipse", "ps", "word");
var selected = new Array;
var scores = {"cocktail":0, "coffee":2, "smoothie":5, "11pm":2, "12pm":6, "never":9, "eclipse":5, "ps":3, "word":0 };

for (var i = 0; i < imageList.length; i++) {
    selected[imageList[i]] = false;
}

function mouseOverImage(currentImage, imageName) {
    currentImage.src = "img/" + imageName + 'Check.jpg';
}

function mouseOutImage(currentImage, imageName) {
    if (selected[imageName] == false) {
    currentImage.src = "img/" + imageName + ".jpg" };
}

function mouseSelect(currentImage, imageName) {
    var className = currentImage.getAttribute("class"); //class name indicates the question number
    var row = document.getElementsByClassName(className); //array of image objects under the same question number
    //unselect all images under the same question number
    for (var i = 0; i < row.length; i++) {
        var imgName = row[i].getAttribute("name");
        row[i].src = "img/" + imgName + ".jpg";
        selected[imgName] = false;
    }

    //select the chosen image
    selected[imageName] = true;
    currentImage.src = "img/" + imageName + 'Check.jpg';
}

function result() {
    var total = 0;
    var output = "";
    for(var key in selected) {
        if (selected[key] == true)
            total += scores[key];
    }
    if (total >= 15)
        output = "You are a hardcore Geek!!!";
    else if (total >= 10)
        output = "You are an entry level Geek!!";
    else
        output = "You have nothing to do with Geek!";
    document.getElementById("result").innerHTML = output;
}