input.onButtonPressed(Button.A, function () {
    powerbrick.MotorRun(powerbrick.Motors.M1, -103)
    basic.pause(500)
    powerbrick.MotorStop(powerbrick.Motors.M1)
})
input.onButtonPressed(Button.B, function () {
    powerbrick.MotorRun(powerbrick.Motors.M1, 103)
    basic.pause(500)
    powerbrick.MotorStop(powerbrick.Motors.M1)
})
let s = 0
powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
powerbrick.Servo(powerbrick.Servos.S1, 140)
basic.forever(function () {
    s = powerbrick.GC_Gesture()
    if (s == 1) {
        basic.showArrow(ArrowNames.North)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 2) {
        basic.showArrow(ArrowNames.East)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 3) {
        basic.showArrow(ArrowNames.West)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 4) {
        basic.showArrow(ArrowNames.West)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
})
basic.forever(function () {
    if (powerbrick.GC_Gesture() == 2) {
    	
    }
    if (powerbrick.GC_Gesture() == 4) {
    	
    }
})
basic.forever(function () {
    s = powerbrick.GC_Gesture()
    if (s == 3) {
        powerbrick.Servo(powerbrick.Servos.S1, 140)
    }
})
