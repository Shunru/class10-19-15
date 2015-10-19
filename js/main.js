function setup(){

    //create canvas
    createCanvas(windowWidth, windowHeight);
    //top box




    drawWindow(50,50,'MediumTurquoise'); //call the function
    drawWindow(250,50,'Sienna');//call the function
    drawWindow(450,50,'SteelBlue');//call the function


}

function draw(){}

function drawWindow(startX,startY,winColor){
    strokeWeight(1);
    stroke('Green');
    fill(winColor);
    rect(startX,startY,150,250);

    //strokeWeight(1);
    //stroke('LightCoral');
    //fill('AntiqueWhite');
    //rect(startX,startY,150,250);

}
