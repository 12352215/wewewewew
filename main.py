s = 0
powerbrick.GC_MODE(powerbrick.GCMode.GESTURE)
if powerbrick.GC_Gesture() == 2:
    powerbrick.motor_run(powerbrick.Motors.M1, 103)
    basic.pause(100)
    powerbrick.motor_stop(powerbrick.Motors.M1)
if powerbrick.GC_Gesture() == 4:
    powerbrick.motor_run(powerbrick.Motors.M1, -103)
    basic.pause(100)
    powerbrick.motor_stop(powerbrick.Motors.M1)

def on_forever():
    global s
    s = powerbrick.GC_Gesture()
    if s == 1:
        basic.show_arrow(ArrowNames.NORTH)
        powerbrick.GC_MODE(powerbrick.GCMode.GESTURE)
    if s == 2:
        basic.show_arrow(ArrowNames.EAST)
        powerbrick.GC_MODE(powerbrick.GCMode.GESTURE)
    if s == 3:
        basic.show_arrow(ArrowNames.WEST)
        powerbrick.GC_MODE(powerbrick.GCMode.GESTURE)
    if s == 4:
        basic.show_arrow(ArrowNames.WEST)
        powerbrick.GC_MODE(powerbrick.GCMode.GESTURE)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
