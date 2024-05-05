var buttonCanvas = document.getElementById('buttonCanvas');
var buttonCtx = buttonCanvas.getContext('2d');
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var centerX = GameScreenCanvas.width / 2;
var centerY = GameScreenCanvas.height / 2;

var buttonX = buttonCanvas.width / 2 - 130;
var buttonY = buttonCanvas.height / 2 + 100;
var buttonWidth = 300;
var buttonHeight = 100;

var buttoncolor = {
    normal : 'gray',
    hover: 'rgb(248, 203, 178)',
    click : 'rgb(0, 32, 96)'
};

var buttonstate = 'normal';

function drawButton() {
    buttonCtx.fillStyle = buttoncolor[buttonstate];
    buttonCtx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    buttonCtx.fillStyle = 'white';
    buttonCtx.font = '50px Arial';
    buttonCtx.textAlign = 'center';
    buttonCtx.fillText('시작', buttonX + buttonWidth / 2, buttonY + buttonHeight / 2 + 20);
}

    buttonCanvas.addEventListener('mouseenter', function(event) {
      if (buttonstate !== 'click') {
          buttonstate = 'hover';
          drawButton();
    }
});

    buttonCanvas.addEventListener('mouseleave', function(event) {
        if (buttonstate !== 'click') {
            buttonstate = 'normal';
            drawButton();
    }
});

    buttonCanvas.addEventListener('click', function(event) {
        buttonstate = 'click';
        drawButton();
        setTimeout(startGame, 1000);
});

function startGame() {

    buttonCanvas.style.display = 'none';
    GameScreenCanvas.style.display = 'block';

    redraw();
    spawnEnemies();
    gameLoop();
}

    drawButton();

// 페이지를 새로 고칠 때마다 호출되는 함수
function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var centerX = Math.random() * canvas.width;
    var centerY = Math.random() * canvas.height;
    var radius = 50;

    drawStar(centerX, centerY, radius, 5, radius / 2);
}



// 하트 그리기
function drawHeart(ctx) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - 50); // 시작점: 하트의 윗 부분 중앙
    ctx.bezierCurveTo(
        canvas.width / 2 + 50, canvas.height / 2 - 80,
        canvas.width / 2 + 110, canvas.height / 2 - 30,
        canvas.width / 2, canvas.height / 2 + 40
    ); // 상단 오른쪽 곡선
    ctx.bezierCurveTo(
        canvas.width / 2 - 110, canvas.height / 2 - 30,
        canvas.width / 2 - 50, canvas.height / 2 - 80,
        canvas.width / 2, canvas.height / 2 - 50
    ); // 상단 왼쪽 곡선
    ctx.fillStyle = "rgb(192, 0, 0)"; // 채우기 색상 설정
    ctx.fill(); // 하트 채우기
}

// 별 그리기 함수
function drawStar(x, y, radius, numPoints, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var xCenter = x;
    var yCenter = y;
    var step = (Math.PI * 2) / numPoints;

    ctx.beginPath();
    ctx.moveTo(xCenter + radius * Math.cos(rot), yCenter + radius * Math.sin(rot));
    for (var i = 0; i < numPoints; i++) {
        rot += step;
        ctx.lineTo(
            xCenter + innerRadius * Math.cos(rot),
            yCenter + innerRadius * Math.sin(rot)
        );
        rot += step;
        ctx.lineTo(
            xCenter + radius * Math.cos(rot),
            yCenter + radius * Math.sin(rot)
        );
    }
    ctx.closePath();
    ctx.strokeStyle = '#FFD700'; // 별의 선 색상
    ctx.lineWidth = 5; // 별의 선 두께
    ctx.stroke();

    // 별을 노란색으로 채우기
    ctx.fillStyle = '#FFFF00'; // 노란색
    ctx.fill();
}

function Enemy() {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.size = 10;
    this.isAlive = true;
    this.color = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var enemies = [];

function spawnEnemies() {
    var numEnemies = Math.floor(Math.random() * 6) + 5;
    for (var i = 0; i < numEnemies; i++) {
        var enemy = new Enemy();
        var side = Math.floor(Math.random() * 4);
        switch (side) {
            case 0:
                enemy.x = Math.random() * GameScreenCanvas.width;
                enemy.y = -enemy.size;
                break;
            case 1:
                enemy.x = GameScreenCanvas.width + enemy.size;
                enemy.y = Math.random() * GameScreenCanvas.height;
                break;
            case 2:
                enemy.x = Math.random() * GameScreenCanvas.width;
                enemy.y = GameScreenCanvas.height + enemy.size;
                break;
            case 3:
                enemy.x = -enemy.size;
                enemy.y = Math.random() * GameScreenCanvas.height;
                break;
        }
        enemies.push(enemy);
    }

    var spawnInterval = Math.random() * 1000 + 500;
    setTimeout(spawnEnemies, spawnInterval);
}


function drawEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].isAlive) {
            ctx.fillStyle = enemies[i].color; // 각 적의 랜덤 색상 설정
            ctx.beginPath();
            ctx.arc(enemies[i].x, enemies[i].y, enemies[i].size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].isAlive) {

            var dx = centerX - enemies[i].x;
            var dy = centerY - enemies[i].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            var vx = (dx / distance) * enemies[i].speed;
            var vy = (dy / distance) * enemies[i].speed;


            enemies[i].x += vx;
            enemies[i].y += vy;


            if (distance < enemies[i].size + 10) {
                enemies[i].isAlive = false;
            }


            if (
                enemies[i].x < -enemies[i].size ||
                enemies[i].x > GameScreenCanvas.width + enemies[i].size ||
                enemies[i].y < -enemies[i].size ||
                enemies[i].y > GameScreenCanvas.height + enemies[i].size
            ) {
                var side = Math.floor(Math.random() * 4);
                switch (side) {
                    case 0:
                        enemies[i].x = Math.random() * GameScreenCanvas.width;
                        enemies[i].y = -enemies[i].size;
                        break;
                    case 1:
                        enemies[i].x = GameScreenCanvas.width + enemies[i].size;
                        enemies[i].y = Math.random() * GameScreenCanvas.height;
                        break;
                    case 2:
                        enemies[i].x = Math.random() * GameScreenCanvas.width;
                        enemies[i].y = GameScreenCanvas.height + enemies[i].size;
                        break;
                    case 3:
                        enemies[i].x = -enemies[i].size;
                        enemies[i].y = Math.random() * GameScreenCanvas.height;
                        break;
                }
                enemies[i].isAlive = true;
            }
        }
    }
}


function gameLoop() {
    ctx.clearRect(0, 0, GameScreenCanvas.width, GameScreenCanvas.height);
    drawHeart(ctx);
    drawEnemies();
    moveEnemies();
    requestAnimationFrame(gameLoop);
}


function init() {
    spawnEnemies();
    gameLoop();
}

init();
