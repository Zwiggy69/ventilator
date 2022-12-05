function ventilator_uit () {
    kitronik_smart_greenhouse.controlHighPowerPin(kitronik_smart_greenhouse.HighPowerPins.pin13, kitronik_smart_greenhouse.onOff(false))
}
input.onButtonPressed(Button.A, function () {
    gwwt += 1
    temp += gwwt
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(gwwt)
})
input.onButtonPressed(Button.B, function () {
    gwwt += -1
    temp += gwwt
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(gwwt)
})
function ventilator_aan () {
    kitronik_smart_greenhouse.controlHighPowerPin(kitronik_smart_greenhouse.HighPowerPins.pin13, kitronik_smart_greenhouse.onOff(true))
}
function verwarming_uit () {
    kitronik_smart_greenhouse.controlHighPowerPin(kitronik_smart_greenhouse.HighPowerPins.pin14, kitronik_smart_greenhouse.onOff(false))
}
function verwarmin_aan () {
    kitronik_smart_greenhouse.controlHighPowerPin(kitronik_smart_greenhouse.HighPowerPins.pin14, kitronik_smart_greenhouse.onOff(true))
}
let temp = 0
let gwwt = 0
gwwt = 22
temp += gwwt
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    basic.pause(5000)
})
basic.forever(function () {
    basic.showString("" + (input.temperature()))
    basic.pause(2000)
})
basic.forever(function () {
    if (input.temperature() > 22) {
        ventilator_aan()
    }
})
basic.forever(function () {
    if (input.temperature() < 22) {
        verwarmin_aan()
    }
})
basic.forever(function () {
    if (input.temperature() <= 22) {
        ventilator_uit()
    }
})
basic.forever(function () {
    if (input.temperature() >= 22) {
        verwarming_uit()
    }
})
