let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        music.play(music.createSoundExpression(WaveShape.Triangle, 733, 607, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Square)
    } else if (hand == 2) {
        music.play(music.createSoundExpression(WaveShape.Triangle, 733, 607, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Chessboard)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 733, 607, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Scissors)
    }
})
