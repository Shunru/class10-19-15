function setup(){

    //create canvas
    createCanvas(windowWidth, windowHeight);
    //top box





    //drawWindow(50,50); //call the function
    //drawWindow(200,50);//call the function
   // drawWindow(450,50);//call the function
    var x = 0;
    var y = 0;
    var gridWidth = width-100;
    for(var i=0; i<100; i++){
    console.log(i);
        drawWindow(x,y);
        //increment our x
        x +=120;//same as x = x +120
        //check if x is past the grid width
        if(x > gridWidth){
        //set x back to the beginning
          x=0;
        //move y down
            y += 270;
        }//end if
}//end for loope
    }//end for setup
function draw(){}

function drawWindow(startX,startY){
    strokeWeight(1);
    stroke('Green');
    fill('BurlyWood');
    rect(startX,startY,100,250);

    //strokeWeight(1);
    //stroke('LightCoral');
    //fill('AntiqueWhite');
    //rect(startX,startY,150,250);

}
