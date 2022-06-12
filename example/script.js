const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const outElement = document.getElementById('output');
const cHeight = canvas.height;
const cWidth = canvas.width;

keys = keyHandler;
keys.init();

let player = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: 'black',
    speed: 2
}

setInterval(function () {
    outElement.innerHTML = keys.keysDown

    if ( keys.isHeld("Space") ) {
        player.color = "red";
    }
    if ( keys.isHeld("ShiftLeft") ) {
        player.speed = 5;
    }
    if ( keys.isHeld("KeyS") || keys.isHeld("ArrowDown") ) {
        player.y -= player.speed;
    }
    if ( keys.isHeld("KeyW") || keys.isHeld("ArrowUp") ) {
        player.y += player.speed;
    }
    if ( keys.isHeld("KeyA")  || keys.isHeld("ArrowLeft") ) {
        player.x -= player.speed;
    }
    if ( keys.isHeld("KeyD")  || keys.isHeld("ArrowRight") ) {
        player.x += player.speed;
    }

    if ( player.x > cWidth/2 - player.width/2) {
        player.x = cWidth/2 - player.width/2;
    }
    if ( player.x < cWidth/-2 - player.width/-2) {
        player.x = cWidth/-2 - player.width/-2;
    }
    if ( player.y > cHeight/2 - player.width/2) {
        player.y = cHeight/2 - player.width/2;
    }
    if ( player.y < cHeight/-2 - player.width/-2) {
        player.y = cHeight/-2 - player.width/-2;
    }

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x + cWidth/2 - player.width/2, player.y*-1 + cHeight/2 - player.height/2, player.width, player.height);
    
    player.color = "black";
    player.speed = 2;
}, 10)  