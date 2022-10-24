joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(1000)
})
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    joystickbit.Vibration_Motor(1e+70)
})
