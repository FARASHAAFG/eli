input.onGesture(Gesture.Shake, function () {
    let salut = 0
    basic.clearScreen()
    radio.sendString("" + (salut))
    basic.showString("ALLO")
})
radio.setGroup(77)
basic.forever(function () {
	
})
