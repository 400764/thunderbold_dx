let y = 0
let z = 0
let h = 0
let x = 2
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    h = 0
    z = 255
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(x - dx * h, y, z)
            h += 1
            z += -50
        }
        h = 0
        z = 255
        y += 1
    }
    basic.pause(300)
})
