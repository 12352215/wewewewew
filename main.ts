input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let s = 0
powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
basic.forever(function () {
    powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    basic.showNumber(powerbrick.GC_Gesture())
})
basic.forever(function () {
    if (powerbrick.GC_Gesture() == 3) {
        powerbrick.MotorRun(powerbrick.Motors.M1, 255)
        basic.pause(200)
        powerbrick.MotorStop(powerbrick.Motors.M1)
    }
    if (powerbrick.GC_Gesture() == 1) {
        powerbrick.MotorRun(powerbrick.Motors.M1, -160)
        basic.pause(200)
        powerbrick.MotorStop(powerbrick.Motors.M1)
    }
    if (powerbrick.GC_Gesture() == 4) {
        powerbrick.MotorRun(powerbrick.Motors.M2, -214)
        basic.pause(200)
        powerbrick.MotorStop(powerbrick.Motors.M2)
    }
})
basic.forever(function () {
    s = powerbrick.GC_Gesture()
    if (s == 2) {
        basic.showArrow(ArrowNames.West)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 3) {
        basic.showArrow(ArrowNames.West)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 4) {
        basic.showArrow(ArrowNames.North)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    s = powerbrick.GC_Gesture()
    if (s == 1) {
        basic.showArrow(ArrowNames.East)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
})
