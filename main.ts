input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
    music.ringTone(988)
    basic.pause(1000)
    music.stopAllSounds()
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
input.setSoundThreshold(SoundThreshold.Loud, 40)
input.setSoundThreshold(SoundThreshold.Quiet, 30)
basic.forever(function () {
    if (input.soundLevel() > 30) {
        if (input.soundLevel() < 40) {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
