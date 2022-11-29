function ventilator_uit () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}
function ventilator_aan () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
}
basic.forever(function () {
    ventilator_aan()
})
basic.forever(function () {
    ventilator_uit()
})
