
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


function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
/*Circle  arc(x, y, radius, startAngle, endAngle)*/
for(var i=0; i<70; i++){
  var x = randomNumberGenerator(0,1300);
  var y = randomNumberGenerator(0,623);
  canvas.beginPath();
  canvas.arc(x, y, 5, 0, 2*Math.PI);
  canvas.fill();
}
/*canvas.beginPath();
canvas.arc(100, 75, 5, 0, 2*Math.PI);
canvas.fill();
canvas.beginPath();
canvas.arc(10, 71, 5, 0, 2*Math.PI);
canvas.fill();
canvas.beginPath();
canvas.arc(100, 7, 5, 0, 2*Math.PI);
canvas.fill(); */
