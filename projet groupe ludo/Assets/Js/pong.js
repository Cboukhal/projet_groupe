const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreLeftEl = document.getElementById('scoreLeft');
const scoreRightEl = document.getElementById('scoreRight');
const gameOverEl = document.getElementById('gameOver');
const winnerTextEl = document.getElementById('winnerText');
const finalScoreEl = document.getElementById('finalScore');

// Variables du jeu
let gameState = {
    ball: {
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: 5,
        dy: 3,
        radius: 8
    },
    leftPaddle: {
        x: 10,
        y: canvas.height / 2 - 50,
        width: 10,
        height: 100,
        dy: 0
    },
    rightPaddle: {
        x: canvas.width - 20,
        y: canvas.height / 2 - 50,
        width: 10,
        height: 100,
        dy: 0
    },
    score: {
        left: 0,
        right: 0
    },
    keys: {},
    paused: false,
    gameRunning: true
};

const PADDLE_SPEED = 7;
const BALL_SPEED_INCREMENT = 0.1;
const MAX_SCORE = 10;

// Gestion des touches
document.addEventListener('keydown', (e) => {
    gameState.keys[e.key.toLowerCase()] = true;
    
    if (e.key === ' ') {
        e.preventDefault();
        gameState.paused = !gameState.paused;
    }
});

document.addEventListener('keyup', (e) => {
    gameState.keys[e.key.toLowerCase()] = false;
});

function updatePaddles() {
    // Paddle gauche (W/S)
    if (gameState.keys['w','z'] && gameState.leftPaddle.y > 0) {
        gameState.leftPaddle.y -= PADDLE_SPEED;
    }
    if (gameState.keys['s'] && gameState.leftPaddle.y < canvas.height - gameState.leftPaddle.height) {
        gameState.leftPaddle.y += PADDLE_SPEED;
    }

    // Paddle droite (flèches)
    if (gameState.keys['arrowup'] && gameState.rightPaddle.y > 0) {
        gameState.rightPaddle.y -= PADDLE_SPEED;
    }
    if (gameState.keys['arrowdown'] && gameState.rightPaddle.y < canvas.height - gameState.rightPaddle.height) {
        gameState.rightPaddle.y += PADDLE_SPEED;
    }
}

function updateBall() {
    const ball = gameState.ball;
    
    // Mouvement de la balle
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Collision avec le haut et le bas
    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
        ball.dy = -ball.dy;
    }

    // Collision avec les paddles
    const leftPaddle = gameState.leftPaddle;
    const rightPaddle = gameState.rightPaddle;

    // Collision paddle gauche
    if (ball.x - ball.radius <= leftPaddle.x + leftPaddle.width &&
        ball.y >= leftPaddle.y &&
        ball.y <= leftPaddle.y + leftPaddle.height &&
        ball.dx < 0) {
        
        ball.dx = -ball.dx;
        // Effet selon la position de collision
        const hitPos = (ball.y - leftPaddle.y) / leftPaddle.height;
        ball.dy = (hitPos - 0.5) * 8;
        
        // Augmentation progressive de la vitesse
        ball.dx += BALL_SPEED_INCREMENT;
    }

    // Collision paddle droite
    if (ball.x + ball.radius >= rightPaddle.x &&
        ball.y >= rightPaddle.y &&
        ball.y <= rightPaddle.y + rightPaddle.height &&
        ball.dx > 0) {
        
        ball.dx = -ball.dx;
        // Effet selon la position de collision
        const hitPos = (ball.y - rightPaddle.y) / rightPaddle.height;
        ball.dy = (hitPos - 0.5) * 8;
        
        // Augmentation progressive de la vitesse
        ball.dx -= BALL_SPEED_INCREMENT;
    }

    // Point marqué
    if (ball.x < 0) {
        gameState.score.right++;
        resetBall();
        updateScore();
    } else if (ball.x > canvas.width) {
        gameState.score.left++;
        resetBall();
        updateScore();
    }

    // Vérifier fin de partie
    if (gameState.score.left >= MAX_SCORE || gameState.score.right >= MAX_SCORE) {
        endGame();
    }
}

function resetBall() {
    const ball = gameState.ball;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * 5;
    ball.dy = (Math.random() - 0.5) * 6;
}

function updateScore() {
    scoreLeftEl.textContent = gameState.score.left;
    scoreRightEl.textContent = gameState.score.right;
}

function endGame() {
    gameState.gameRunning = false;
    const winner = gameState.score.left >= MAX_SCORE ? 'Joueur 1' : 'Joueur 2';
    winnerTextEl.textContent = `${winner} Gagne!`;
    finalScoreEl.textContent = `${gameState.score.left} - ${gameState.score.right}`;
    gameOverEl.style.display = 'block';
}

function restartGame() {
    gameState.score.left = 0;
    gameState.score.right = 0;
    gameState.gameRunning = true;
    gameState.paused = false;
    resetBall();
    updateScore();
    gameOverEl.style.display = 'none';
}

function drawPaddle(paddle) {
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 10;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.shadowBlur = 0;
}

function drawBall() {
    const ball = gameState.ball;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.shadowBlur = 0;
}

function drawCenterLine() {
    ctx.setLineDash([10, 10]);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
}

function draw() {
    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner les éléments
    drawCenterLine();
    drawPaddle(gameState.leftPaddle);
    drawPaddle(gameState.rightPaddle);
    drawBall();

    // Texte pause
    if (gameState.paused) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSE', canvas.width / 2, canvas.height / 2);
    }
}

function gameLoop() {
    if (gameState.gameRunning && !gameState.paused) {
        updatePaddles();
        updateBall();
    }
    
    draw();
    requestAnimationFrame(gameLoop);
}

// Démarrer le jeu
updateScore();
gameLoop();