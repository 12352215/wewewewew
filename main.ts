let s = 0
powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
if (powerbrick.GC_Gesture() == 2) {
    powerbrick.MotorRun(powerbrick.Motors.M1, 103)
    basic.pause(100)
    powerbrick.MotorStop(powerbrick.Motors.M1)
}
if (powerbrick.GC_Gesture() == 4) {
    powerbrick.MotorRun(powerbrick.Motors.M1, -103)
    basic.pause(100)
    powerbrick.MotorStop(powerbrick.Motors.M1)
}
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
	
})
