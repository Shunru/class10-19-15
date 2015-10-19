function setup(){

    //create canvas
    createCanvas(windowWidth, windowHeight);
    //top box





    drawWindow(50,50); //call the function
    drawWindow(200,50);//call the function
   // drawWindow(450,50);//call the function

    for(var i=2; i<100; i++){
    console.log(i);
        drawWindow(50*i,50);

}
    }
function draw(){}

function drawWindow(startX,startY){
    strokeWeight(1);
    stroke('Green');
    fill('MediumTurquoise');
    rect(startX,startY,100,250);

    //strokeWeight(1);
    //stroke('LightCoral');
    //fill('AntiqueWhite');
    //rect(startX,startY,150,250);

}
