var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202027044;


function drawNum(num)
{
  var x = 0;
  var studentIDStr = studentID.toString();

  for(var i = 0; i<studentIDStr.length; i++)
  {
    var digit = parseInt(studentIDStr[i]);

    if(digit == 0)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 70);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 70);
      ctx.lineTo(x + 10, 10);
      ctx.stroke();
    }
    if(digit == 1)
    {
      ctx.beginPath();
      ctx.moveTo(x + 20, 10);
      ctx.lineTo(x + 20, 70);
      ctx.stroke();
    }
    if(digit == 2)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 40);
      ctx.lineTo(x + 10, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 40);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 70);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
    }
    if(digit == 3)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 40);
      ctx.lineTo(x + 10, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 70);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
    }
    if(digit == 4)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 10, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 40);
      ctx.lineTo(x + 40, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
    }
    if(digit == 5)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 10, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 40);
      ctx.lineTo(x + 40, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 40);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 70);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
    }
    if(digit == 6)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 40);
      ctx.lineTo(x + 40, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 40);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 70);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
    }
    if(digit == 7)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
    }
    if(digit == 8)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 70);
      ctx.lineTo(x + 10, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 70);
      ctx.lineTo(x + 10, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 40);
      ctx.lineTo(x + 40, 40);
      ctx.stroke();
    }
    if(digit == 9)
    {
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 40, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 40, 10);
      ctx.lineTo(x + 40, 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 10);
      ctx.lineTo(x + 10, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 10, 40);
      ctx.lineTo(x + 40, 40);
      ctx.stroke();
    }
      x += 50;
  }
}

drawNum(studentID);
