


const $btn = document.querySelector('.btn')
let canvas = document.createElement("canvas");
let container = document.querySelector('.container-btn')

// canvas.width = 200;
// canvas.height = 200;
container.appendChild(canvas)

let end = Date.now() + (3 * 1000);


$btn.addEventListener('click', function frame() {

    console.log('hola');

    confetti({
        particleCount: 7,
        spread: 100,
        startVelocity: 30,
        ticks: 200,
        scalar: 0.9,
        gravity: 0.5,

        decay: .9,
    })

    confetti({
        particleCount: 7,
        angle: 50,
        spread: 55,
        origin: { x: 0 },
    });
    confetti({
        particleCount: 7,
        angle: 130,
        spread: 55,
        origin: { x: 1 },
    });


    if (Date.now() < end) {
        requestAnimationFrame(frame);

    }

})


