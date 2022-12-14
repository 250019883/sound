input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
input.setSoundThreshold(SoundThreshold.Quiet, 30)
basic.forever(function () {
    if (input.soundLevel() > 40) {
        music.setBuiltInSpeakerEnabled(true)
        basic.showIcon(IconNames.Sad)
        music.ringTone(988)
        basic.pause(1000)
        music.setBuiltInSpeakerEnabled(false)
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    if (input.soundLevel() > 30) {
        if (input.soundLevel() < 40) {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
