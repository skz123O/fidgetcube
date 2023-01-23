input.onButtonPressed(Button.A, function () {
    basic.showString("\"Vanmayi Podili\"")
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E C5 D C5 F A F C ", 504)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Owwie!!!",50)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `,5)
    }
    basic.clearScreen()
})
basic.showIcon(IconNames.Happy)
