const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //Con el contexto 2D se dibuja encima del canvas

const $sprite = document.getElementById('sprite');
const $bricks = document.getElementById('bricks');

canvas.width = 448;
canvas.height = 400;

/*VARIABLES DE LA PELOTA*/

//Posicion de la pelota
const ballRadius = 4;
let x = Math.floor(Math.random() * (canvas.width - ballRadius * 2) + ballRadius);
let y = canvas.height - 30;

//Velocidad de la pelota
let dx = 3;
let dy = -3;

/*VARIABLES DE LA PALETA*/

const paddleHeight = 10;
const paddleWidth = 50;

let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 10;

let rightPressed = false;
let leftPressed = false;

const PADDLE_SENSITIVITY = 8;

//Variables de los ladrillos
const bricksRowCount = 5;
const bricksColumnCount = 13;
const brickWidth = 32;
const brickHeight = 16;
const brickPadding = 0;
const brickOffsetTop = 80;
const brickOffsetLeft = 16;
const bricks = [];

const BRICK_STATUS = { ACTIVE: 0, DESTROYED: 1 };

let areAllBricksDestroyed = true;

//VARIABLES DE LOS FPS

let lastFrameTime = performance.now();
let framesCount = 0;
let canvasRect = canvas.getBoundingClientRect();
const $fps = document.querySelector('.fps');

//RESETEAR JUEGO
function resetGame() {
    x = Math.floor(Math.random() * (canvas.width - ballRadius * 2) + ballRadius);
    y = canvas.height - 30;
    dx = 3;
    dy = -3;
    paddleX = (canvas.width - paddleWidth) / 2;
    paddleY = canvas.height - paddleHeight - 10;
    bricks.forEach(row => {
        row.forEach(brick => {
            brick.status = BRICK_STATUS.ACTIVE;
        });
    });
}


//FUNCIONES

for (let c = 0; c < bricksColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < bricksRowCount; r++) {

        //Calculamos la posicion del ladrillo en la pantalla
        const brickC = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickR = r * (brickHeight + brickPadding) + brickOffsetTop;
        //Asigna un color aleatorio a cada ladrillo
        const random = Math.floor(Math.random() * 8);
        bricks[c][r] = { x: brickC, y: brickR, status: BRICK_STATUS.ACTIVE, color: random };
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {

    ctx.fillStyle = 'transparent';
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);

    ctx.drawImage($sprite, 29, 174, paddleWidth, paddleHeight, paddleX, paddleY, paddleWidth, paddleHeight);
}
function drawBricks() {
    for (let c = 0; c < bricksColumnCount; c++) {
        for (let r = 0; r < bricksRowCount; r++) {
            const currentBrick = bricks[c][r];
            if (currentBrick.status === BRICK_STATUS.DESTROYED) {
                continue;
            }
            areAllBricksDestroyed = false;
            const clipX = currentBrick.color * 32;
            ctx.drawImage(
                $bricks,
                clipX,
                0,
                brickWidth,
                brickHeight,
                currentBrick.x,
                currentBrick.y,
                brickWidth,
                brickHeight
            );
        }
    }

    if (areAllBricksDestroyed) {
        resetGame();
    }
}

function collisionDetection() {
    for (let c = 0; c < bricksColumnCount; c++) {
        for (let r = 0; r < bricksRowCount; r++) {
            const currentBrick = bricks[c][r];

            if (currentBrick.status === BRICK_STATUS.DESTROYED) {
                continue;
            }

            const isBallSameXAsBrick = x > currentBrick.x && x < currentBrick.x + brickWidth;

            const isBallSameYAsBrick = y > currentBrick.y && y < currentBrick.y + brickHeight;

            if (isBallSameXAsBrick && isBallSameYAsBrick) {
                dy = -dy;
                currentBrick.status = BRICK_STATUS.DESTROYED;
            }


        }
    }
}
function ballMovement() {

    //Rebotar las pelotas en los laterales
    if (
        x + dx > canvas.width - ballRadius //Pared Derecha
        || x + dx < ballRadius) //Pared Izquierda
    {
        dx = -dx;
    }

    //Rebotar en la parte de arriba
    if (y + dy < ballRadius) {
        dy = -dy;
    }

    //GameOver en la parte de abajo y reiniciar

    const isBallSameXApPaddle = x > paddleX && x < paddleX + paddleWidth;
    const isBallTouchingPaddle = y + dy < paddleY && y + dy > (paddleY - ballRadius + 1);

    if (isBallSameXApPaddle && isBallTouchingPaddle) //La pelota toca la paleta
    {
        dy = -dy; //Se cambia la direccion de la pelota
    }
    else if ( y + dy > canvas.height - ballRadius || y + dy > paddleY + paddleHeight) //La pelota toca el suelo
    {
        console.log('GAME OVER');
        resetGame();
    }

    x += dx;
    y += dy;
}
function paddleMovement() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += PADDLE_SENSITIVITY;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= PADDLE_SENSITIVITY;
    }
}

function calculateAndDisplayFPS() {
    const currentTime = performance.now();
    const elapsed = currentTime - lastFrameTime;
    framesCount++;

    if (elapsed > 1000) { // Si ha pasado más de 1 segundo
        const fps = Math.round(framesCount / (elapsed / 1000));
        document.getElementById('fpsCounter').innerText = fps;
        lastFrameTime = currentTime;
        framesCount = 0;
    }
}

function updateCanvasRect() {
    canvasRect = canvas.getBoundingClientRect();
}

function updateFPSPosition() {
    $fps.style.top = `${canvasRect.top + 15}px`;
    $fps.style.right = `${window.innerWidth - canvasRect.right + 15}px`;
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initEvents() {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
}

function keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'd') {
        rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft' || e.key === 'a') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'd') {
        rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft' || e.key === 'a') {
        leftPressed = false;
    }
}

function draw() {

    areAllBricksDestroyed = true;
    cleanCanvas();

    //Dibujar los elementos
    drawBall();
    drawPaddle();
    drawBricks();

    //Colisiones y movimientos
    collisionDetection();
    ballMovement();
    paddleMovement();

    //Mostrar los FPS
    calculateAndDisplayFPS();
    updateFPSPosition();

    //Esto ayuda a que la animacion se vea mas fluida. Con cada frame se dibuja un nuevo frame del canvas
    window.requestAnimationFrame(draw);
}

draw();
initEvents();