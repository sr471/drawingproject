
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

/*Rectangles (x coordinate, y coordinate, length, and width.)*/
  //Tree Trunks
canvas.fillStyle = "brown";
canvas.fillRect(80, 250, 60, 1000);
canvas.fillRect(800, 375, 60, 200);


/*Triangles*/
  // The Snow Slope
canvas.fillStyle = "white";
canvas.beginPath();
canvas.moveTo(0,700);
canvas.lineTo(1300,650);
canvas.lineTo(0,400);
canvas.fill();
canvas.fillRect(0, 621, 1300, 25);

  //The Trees
canvas.fillStyle = "green";
canvas.beginPath();
canvas.moveTo(110,200);
canvas.lineTo(210,300);
canvas.lineTo(15,300);
canvas.fill();
canvas.beginPath();
canvas.moveTo(110,150);
canvas.lineTo(210,250);
canvas.lineTo(15,250);
canvas.fill();
canvas.beginPath();
canvas.moveTo(110,100);
canvas.lineTo(210,200);
canvas.lineTo(15,200);
canvas.fill();


canvas.beginPath();
canvas.moveTo(830,325);
canvas.lineTo(930,425);
canvas.lineTo(735,425);
canvas.fill();
canvas.beginPath();
canvas.moveTo(830,275);
canvas.lineTo(930,375);
canvas.lineTo(735,375);
canvas.fill();
canvas.beginPath();
canvas.moveTo(830,225);
canvas.lineTo(930,325);
canvas.lineTo(735,325);
canvas.fill();

canvas.fillStyle = "white";
canvas.fillRect(0, 621, 1300, 25);

var snowflakes = [];

function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

/*Circle  arc(x, y, radius, startAngle, endAngle)*/

  //Makes snowflakes and grabs the y value
for(var i=0; i<70; i++){
  var randomX = randomNumberGenerator(0,1300);
  var randomY = randomNumberGenerator(0,623);
  canvas.fillStyle = "white";
  canvas.beginPath();
  canvas.arc(randomX, randomY, 5, 0, 2*Math.PI);
  canvas.fill();

  var tempSnowflake = {x: randomX, y:randomY};
  snowflakes.push(tempSnowflake);

}


/*SnowBoarder*/
canvas.fillStyle = "MediumVioletRed";
canvas.fillRect(0, 430, 270, 20);
canvas.fillStyle = "black";
canvas.fillRect(75, 360, 25, 70);
canvas.fillRect(140, 360, 25, 70);
canvas.fillStyle = "DarkViolet";
canvas.fillRect(75, 270, 90, 90);
canvas.fillRect(30, 300, 185, 15);
canvas.beginPath();
canvas.arc(222, 307, 12, 0, 2*Math.PI);
canvas.fill();
canvas.beginPath();
canvas.arc(25, 307, 12, 0, 2*Math.PI);
canvas.fill();
canvas.fillStyle = "brown";
canvas.beginPath();
canvas.arc(120, 220, 50, 0, 2*Math.PI);
canvas.fill();
canvas.lineWidth = 10;
canvas.strokeStyle = "DarkViolet";
canvas.stroke();
canvas.fillStyle = "DeepPink";
canvas.fillRect(75, 405, 50, 25);
canvas.fillRect(140, 405, 50, 25);
canvas.fillStyle = "black";
canvas.beginPath();
canvas.arc(110, 210, 5, 0, 2*Math.PI);
canvas.fill();
canvas.beginPath();
canvas.arc(140, 210, 5, 0, 2*Math.PI);
canvas.fill();
canvas.beginPath();
canvas.arc(125, 232, 20, 0, Math.PI);
canvas.lineWidth = 4;
canvas.strokeStyle = "black";
canvas.stroke();


/*Redraws the entire canvas and makes it so the smowflakes "fall" */
var redrawn = 0;
function redraw(){
  canvas.clearRect(0,0,1300, 623);


  canvas.fillStyle = "brown";
  canvas.fillRect(80, 250, 60, 1000);
  canvas.fillRect(800, 375, 60, 200);


  canvas.fillStyle = "white";
  canvas.beginPath();
  canvas.moveTo(0,700);
  canvas.lineTo(1300,650);
  canvas.lineTo(0,400);
  canvas.fill();

  canvas.fillStyle = "green";
  canvas.beginPath();
  canvas.moveTo(110,200);
  canvas.lineTo(210,300);
  canvas.lineTo(15,300);
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(110,150);
  canvas.lineTo(210,250);
  canvas.lineTo(15,250);
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(110,100);
  canvas.lineTo(210,200);
  canvas.lineTo(15,200);
  canvas.fill();


  canvas.beginPath();
  canvas.moveTo(830,325);
  canvas.lineTo(930,425);
  canvas.lineTo(735,425);
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(830,275);
  canvas.lineTo(930,375);
  canvas.lineTo(735,375);
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(830,225);
  canvas.lineTo(930,325);
  canvas.lineTo(735,325);
  canvas.fill();


  redrawn += 1;
  console.log(redrawn);

  canvas.fillStyle = "MediumVioletRed";
  canvas.fillRect(0 + 200*redrawn, 430 + 40*redrawn, 270, 20);
  canvas.fillStyle = "black";
  canvas.fillRect(75 + 200*redrawn, 360 + 40*redrawn, 25, 70);
  canvas.fillRect(140 + 200*redrawn, 360 + 40*redrawn, 25, 70);
  canvas.fillStyle = "DarkViolet";
  canvas.fillRect(75 + 200*redrawn, 270 + 40*redrawn, 90, 90);
  canvas.fillRect(30 + 200*redrawn, 300 + 40*redrawn, 185, 15);
  canvas.beginPath();
  canvas.arc(222 + 200*redrawn, 307 + 40*redrawn, 12, 0, 2*Math.PI);
  canvas.fill();
  canvas.beginPath();
  canvas.arc(25 + 200*redrawn, 307 + 40*redrawn, 12, 0, 2*Math.PI);
  canvas.fill();
  canvas.fillStyle = "brown";
  canvas.beginPath();
  canvas.arc(120 + 200*redrawn, 220 + 40*redrawn, 50, 0, 2*Math.PI);
  canvas.fill();
  canvas.lineWidth = 10;
  canvas.strokeStyle = "DarkViolet";
  canvas.stroke();
  canvas.fillStyle = "DeepPink";
  canvas.fillRect(75 + 200*redrawn, 405 + 40*redrawn, 50, 25);
  canvas.fillRect(140 + 200*redrawn, 405 + 40*redrawn, 50, 25);
  canvas.fillStyle = "black";
  canvas.beginPath();
  canvas.arc(110 + 200*redrawn, 210 + 40*redrawn, 5, 0, 2*Math.PI);
  canvas.fill();
  canvas.beginPath();
  canvas.arc(140 + 200*redrawn, 210 + 40*redrawn, 5, 0, 2*Math.PI);
  canvas.fill();
  canvas.beginPath();
  canvas.arc(125 + 200*redrawn, 232 + 40*redrawn, 20, 0, Math.PI);
  canvas.lineWidth = 4;
  canvas.strokeStyle = "black";
  canvas.stroke();
/*Makes Snowflakes "fall" */
  for(var i=0; i<snowflakes.length; i++){
    var redrawSnowflake = snowflakes[i];
    canvas.fillStyle = "white";
    canvas.beginPath();
    canvas.arc(redrawSnowflake.x, redrawSnowflake.y + 50, 5, 0, 2*Math.PI);
    canvas.fill();

  redrawSnowflake.y = redrawSnowflake.y +50;
  }
}
