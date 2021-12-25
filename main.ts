datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("deleting log")
    datalogger.deleteLog()
})
let logging = false
logging = false
datalogger.setColumns(["x", "y", "z"])
loops.everyInterval(100, function () {
    if (true) {
        datalogger.logData([
        datalogger.createCV("x", input.acceleration(Dimension.X)),
        datalogger.createCV("y", input.acceleration(Dimension.Y)),
        datalogger.createCV("z", input.acceleration(Dimension.Z))
        ])
    }
})
