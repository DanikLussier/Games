const htmlBody = document.getElementById("pageBody")

const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

htmlBody.style.backgroundColor = "#222222"
canvas.style.backgroundColor = "#555555"

canvas.width = 1280;
canvas.height = 720;

let playerSpeed = 2
let position = {
    x: 10,
    y: 10
}

let keys = {
    w: 0,
    a: 0,
    s: 0,
    d: 0
}

document.addEventListener("keydown", (e) => {
    //console.log(e)
    switch (e.key) {
        case "w":
            keys.w = 1
            break;
        case "a":
            keys.a = 1
            break;
        case "s":
            keys.s = 1
            break;
        case "d":
            keys.d = 1
            break;
    }
})

document.addEventListener("keyup", (e) => {
    //console.log(e)
    switch (e.key) {
        case "w":
            keys.w = 0
            break;
        case "a":
            keys.a = 0
            break;
        case "s":
            keys.s = 0
            break;
        case "d":
            keys.d = 0
            break;
    }
})

//----------FRAME RATE ---------------------------------
var stop = false;
var framecount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps
    then = Date.now()
    startTime = then;

    animate()
}

function animate() {

    requestAnimationFrame(animate);

    now = Date.now();
    elapsed = now - then

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        // ------------------------------------ CODE GOES HERE ----------------------

        //if (keys.a == 1 && keys.s == 1) { }

        if (Math.abs(keys.d - keys.a) == Math.abs(keys.s - keys.w)) {
            // Diagonal Movements
            // position.x += ((keys.d - keys.a) * playerSpeed) * 
            // position.y += ((keys.s - keys.w) * playerSpeed) * 
        } else {
            // Vertical and horizontal movements
            position.x += (keys.d - keys.a) * playerSpeed
            position.y += (keys.s - keys.w) * playerSpeed
        }

        // if (keys.d == 1 && keys.a == 0) {
        //     position.x++
        // } else if (keys.a == 1 && keys.d == 0) {
        //     position.x--
        // }

        // if (keys.w == 1 && keys.s == 0) {
        //     position.y--
        // } else if (keys.s == 1 && keys.w == 0) {
        //     position.y++
        // }


        // DRAWING -----------------------------------------------------
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "red"
        ctx.fillRect(position.x, position.y, 50, 50)

        // --------------------------------------------------------------------------
    }
}

startAnimating(60)