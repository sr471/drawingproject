
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

/*Rectangle x coordinate, y coordinate, length, and width.*/
canvas.fillStyle = "brown";
canvas.fillRect(80, 250, 60, 1000);
canvas.fillRect(800, 375, 60, 200);


/*Triangle*/
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

canvas.fillStyle = "white";
canvas.fillRect(0, 621, 1300, 25);

var snowflakes = [];

function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
/*Circle  arc(x, y, radius, startAngle, endAngle)*/
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
canvas.fillStyle = "blue";
canvas.fillRect(0, 400, 200, 30);


function redraw(){
  canvas.clearRect(0,0,1300, 623);
  canvas.fillStyle = "brown";
  canvas.fillRect(80, 250, 60, 1000);
  canvas.fillRect(800, 375, 60, 200);


  /*Triangle*/
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

  canvas.fillStyle = "white";
  canvas.fillRect(0, 621, 1300, 25);

  for(var i=0; i<snowflakes.length; i++){
    var redrawSnowflake = snowflakes[i];
    canvas.fillStyle = "white";
    canvas.beginPath();
    canvas.arc(redrawSnowflake.x, redrawSnowflake.y + 50, 5, 0, 2*Math.PI);
    canvas.fill();

  redrawSnowflake.y = redrawSnowflake.y +50;
  }
}
