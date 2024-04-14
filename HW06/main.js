// HeartObject 클래스 정의
class HeartObject {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.rotation = Math.random() * Math.PI * 2; // 랜덤한 초기 각도 설정
        this.rotationSpeed = Math.random() * 0.1; // 회전 속도
        this.directionX = Math.random() > 0.5 ? 1 : -1; // 이동 방향 X
        this.directionY = Math.random() > 0.5 ? 1 : -1; // 이동 방향 Y
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, this.size * 0.5);
        for (let i = 1; i < 360; i++) {
            const rad = i * Math.PI / 180;
            const x = this.size * 16 * Math.pow(Math.sin(rad), 3);
            const y = -this.size * (13 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad));
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.rotation += this.rotationSpeed;
        this.x += this.directionX * 2; // 이동 속도
        this.y += this.directionY * 2; // 이동 속도
    }
}

// 캔버스 설정
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

// 하트들을 담을 배열
const hearts = [];

var lastHeartTime = 0;

// 마우스 이벤트 처리
canvas.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    var currentTime = Date.now();
    if (mouseX !== null && mouseY !== null && currentTime - lastHeartTime > 200) {
        hearts.push(new HeartObject(mouseX, mouseY, Math.random() * 20 + 10, '#' + (Math.random() * 0xFFFFFF << 0).toString(16)));
        lastHeartTime = currentTime;
    }
});

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);
    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 하트들 업데이트 및 그리기
    hearts.forEach(heart => {
        heart.update();
        heart.draw(ctx);
    });
}

animate();
