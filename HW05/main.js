var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

draw();

var sunRotAngle = 0;
var earthRotAngle = 0;
var moonAngle = 0;
var distanceFromSun = 300;
var distanceFromEarth = 100;

function draw()
{
    sunRotAngle += Math.PI / 100;
    earthRotAngle -= Math.PI / 200;
    moonAngle += Math.PI / 50;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 태양 그리기
    ctx.fillStyle = "red";
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(sunRotAngle);
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();

    // 지구 그리기
    ctx.fillStyle = "blue";
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(earthRotAngle);
    ctx.translate(distanceFromSun, 0);
    ctx.fillRect(-30, -30, 50, 50);

    // 달 그리기
    ctx.fillStyle = "gray";
    ctx.rotate(moonAngle); // 지구 주위를 공전하도록 회전
    ctx.translate(distanceFromEarth, 0);
    ctx.fillRect(-15, -15, 30, 30);

    ctx.restore();

    requestAnimationFrame(draw);
}
