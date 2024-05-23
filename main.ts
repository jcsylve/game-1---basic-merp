controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Merp.say("Merp!", randint(100, 1000))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Merp.startEffect(effects.fountain, 1000)
})
let Merp: Sprite = null
scene.setBackgroundColor(9)
game.splash("Welcome to Joey and", "Dad's first game.")
game.splash("Your character is a Merp!")
Merp = sprites.create(assets.image`Merp`, SpriteKind.Player)
game.splash("Press A or B to see", "what it does.")
