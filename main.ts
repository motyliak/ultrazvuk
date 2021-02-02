input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
    OLED.writeString("ahoj mumak")
    OLED.newLine()
})
let vzdialenost = 0
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    vzdialenost = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    OLED.writeNum(vzdialenost)
    OLED.newLine()
    basic.pause(1000)
})
